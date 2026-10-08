"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(100),
  position: z.string().min(2).max(100),
  company: z.string().min(2).max(150),
  content: z.string().min(10).max(1000),
  stars: z.coerce.number().int().min(1).max(5),
  visible: z.boolean().default(true),
  order: z.coerce.number().int().default(0),
});

async function requireAuth() {
  const session = await auth();
  if (!session) throw new Error("Unauthorized");
}

export async function createTestimonial(formData: FormData) {
  await requireAuth();

  const parsed = schema.parse({
    name: String(formData.get("name") ?? ""),
    position: String(formData.get("position") ?? ""),
    company: String(formData.get("company") ?? ""),
    content: String(formData.get("content") ?? ""),
    stars: formData.get("stars") ?? 5,
    visible: formData.get("visible") === "on",
    order: formData.get("order") ?? 0,
  });

  await prisma.testimonial.create({ data: parsed });

  revalidatePath("/admin/testimonials");
  revalidatePath("/");
  redirect("/admin/testimonials");
}

export async function updateTestimonial(id: string, formData: FormData) {
  await requireAuth();

  const parsed = schema.parse({
    name: String(formData.get("name") ?? ""),
    position: String(formData.get("position") ?? ""),
    company: String(formData.get("company") ?? ""),
    content: String(formData.get("content") ?? ""),
    stars: formData.get("stars") ?? 5,
    visible: formData.get("visible") === "on",
    order: formData.get("order") ?? 0,
  });

  await prisma.testimonial.update({ where: { id }, data: parsed });

  revalidatePath("/admin/testimonials");
  revalidatePath("/");
  redirect("/admin/testimonials");
}

export async function deleteTestimonial(id: string) {
  await requireAuth();
  await prisma.testimonial.delete({ where: { id } });
  revalidatePath("/admin/testimonials");
  revalidatePath("/");
}