"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";

async function requireAuth() {
  const session = await auth();
  if (!session) throw new Error("Unauthorized");
}

export async function updateEnquiryStatus(id: string, status: string) {
  await requireAuth();
  await prisma.enquiry.update({ where: { id }, data: { status } });
  revalidatePath("/admin/enquiries");
}

export async function deleteEnquiry(id: string) {
  await requireAuth();
  await prisma.enquiry.delete({ where: { id } });
  revalidatePath("/admin/enquiries");
}