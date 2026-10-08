"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(3).max(200),
  slug: z.string().min(3).max(200).regex(/^[a-z0-9-]+$/),
  excerpt: z.string().min(10).max(500),
  content: z.string().min(20),
  coverImage: z.string().optional().or(z.literal("")),
  tags: z.string().optional().default(""),
  author: z.string().min(2).max(100).default("Ultratek Arabia"),
  published: z.boolean().default(false),
});

function slugify(s: string) {
  return s.toLowerCase().trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function requireAuth() {
  const session = await auth();
  if (!session) throw new Error("Unauthorized");
}

export async function createBlogPost(formData: FormData) {
  await requireAuth();

  const raw = {
    title: String(formData.get("title") ?? ""),
    slug: String(formData.get("slug") ?? "") || slugify(String(formData.get("title") ?? "")),
    excerpt: String(formData.get("excerpt") ?? ""),
    content: String(formData.get("content") ?? ""),
    coverImage: String(formData.get("coverImage") ?? ""),
    tags: String(formData.get("tags") ?? ""),
    author: String(formData.get("author") ?? "Ultratek Arabia"),
    published: formData.get("published") === "on",
  };

  const parsed = schema.parse(raw);

  await prisma.blogPost.create({
    data: {
      ...parsed,
      publishedAt: parsed.published ? new Date() : null,
    },
  });

  revalidatePath("/admin/blog");
  revalidatePath("/blog");
  redirect("/admin/blog");
}

export async function updateBlogPost(id: string, formData: FormData) {
  await requireAuth();

  const raw = {
    title: String(formData.get("title") ?? ""),
    slug: String(formData.get("slug") ?? ""),
    excerpt: String(formData.get("excerpt") ?? ""),
    content: String(formData.get("content") ?? ""),
    coverImage: String(formData.get("coverImage") ?? ""),
    tags: String(formData.get("tags") ?? ""),
    author: String(formData.get("author") ?? "Ultratek Arabia"),
    published: formData.get("published") === "on",
  };

  const parsed = schema.parse(raw);
  const existing = await prisma.blogPost.findUnique({ where: { id } });

  await prisma.blogPost.update({
    where: { id },
    data: {
      ...parsed,
      publishedAt:
        parsed.published && !existing?.publishedAt
          ? new Date()
          : existing?.publishedAt,
    },
  });

  revalidatePath("/admin/blog");
  revalidatePath("/blog");
  redirect("/admin/blog");
}

export async function deleteBlogPost(id: string) {
  await requireAuth();
  await prisma.blogPost.delete({ where: { id } });
  revalidatePath("/admin/blog");
  revalidatePath("/blog");
}