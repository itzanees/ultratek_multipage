import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import TestimonialForm from "../TestimonialForm";
import { createTestimonial } from "../actions";

export default function NewTestimonialPage() {
  return (
    <div>
      <Link href="/admin/testimonials" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Testimonials
      </Link>
      <h1 className="text-3xl font-bold text-slate-900 mb-8">New Testimonial</h1>
      <TestimonialForm action={createTestimonial} />
    </div>
  );
}