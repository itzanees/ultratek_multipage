"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { z } from "zod";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/avif"];
const MAX_SIZE = 8 * 1024 * 1024; // 8 MB

const schema = z.object({
  title: z.string().min(2).max(150),
  description: z.string().max(500).optional().default(""),
  category: z.string().min(2).max(50).default("General"),
  featured: z.boolean().default(false),
  order: z.coerce.number().int().default(0),
});

async function requireAuth() {
  const session = await auth();
  if (!session) throw new Error("Unauthorized");
}

async function saveUpload(file: File): Promise<string> {
  if (!ALLOWED_TYPES.includes(file.type)) {
    throw new Error(`Invalid file type: ${file.type}`);
  }
  if (file.size > MAX_SIZE) {
    throw new Error("File too large (max 8 MB).");
  }

  const ext = file.name.split(".").pop()?.toLowerCase() || "webp";
  const safeExt = ["jpg", "jpeg", "png", "webp", "avif"].includes(ext) ? ext : "webp";
  const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${safeExt}`;

  const uploadDir = path.join(process.cwd(), "public", "uploads", "gallery");
  await mkdir(uploadDir, { recursive: true });

  const bytes = await file.arrayBuffer();
  await writeFile(path.join(uploadDir, filename), Buffer.from(bytes));

  return `/uploads/gallery/${filename}`;
}

export async function createGalleryItem(formData: FormData) {
  await requireAuth();

  const file = formData.get("image") as File | null;
  if (!file || file.size === 0) throw new Error("Image is required.");

  const imagePath = await saveUpload(file);

  const parsed = schema.parse({
    title: String(formData.get("title") ?? ""),
    description: String(formData.get("description") ?? ""),
    category: String(formData.get("category") ?? "General"),
    featured: formData.get("featured") === "on",
    order: formData.get("order") ?? 0,
  });

  await prisma.galleryItem.create({
    data: { ...parsed, image: imagePath },
  });

  revalidatePath("/admin/gallery");
  revalidatePath("/gallery");
  redirect("/admin/gallery");
}

export async function deleteGalleryItem(id: string) {
  await requireAuth();
  await prisma.galleryItem.delete({ where: { id } });
  revalidatePath("/admin/gallery");
  revalidatePath("/gallery");
}

export async function toggleFeatured(id: string, current: boolean) {
  await requireAuth();
  await prisma.galleryItem.update({
    where: { id },
    data: { featured: !current },
  });
  revalidatePath("/admin/gallery");
  revalidatePath("/gallery");
}