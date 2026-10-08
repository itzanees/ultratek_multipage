import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import TestimonialForm from "../TestimonialForm";
import { updateTestimonial } from "../actions";

export default async function EditTestimonialPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = await prisma.testimonial.findUnique({ where: { id } });
  if (!item) notFound();

  const action = updateTestimonial.bind(null, item.id);

  return (
    <div>
      <Link href="/admin/testimonials" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Testimonials
      </Link>
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Edit Testimonial</h1>
      <TestimonialForm action={action} initial={item} />
    </div>
  );
}