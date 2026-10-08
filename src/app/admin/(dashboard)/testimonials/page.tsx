import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { deleteTestimonial } from "./actions";
import { Plus, Pencil, Trash2, Star, Eye, EyeOff } from "lucide-react";

export default async function TestimonialsListPage() {
  const items = await prisma.testimonial.findMany({
    orderBy: [{ order: "asc" }, { createdAt: "desc" }],
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Testimonials</h1>
        <Link
          href="/admin/testimonials/new"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-500"
        >
          <Plus className="w-4 h-4" /> Add Testimonial
        </Link>
      </div>

      {items.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-100 p-12 text-center text-slate-500">
          No testimonials yet.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {items.map((t) => (
            <div key={t.id} className="bg-white rounded-2xl border border-slate-100 p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.position}, {t.company}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < t.stars ? "fill-yellow-400 text-yellow-400" : "text-slate-200"}`} />
                  ))}
                </div>
              </div>
              <p className="text-slate-600 text-sm line-clamp-3 mb-4">"{t.content}"</p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className={`inline-flex items-center gap-1 text-xs font-bold ${
                  t.visible ? "text-emerald-600" : "text-slate-400"
                }`}>
                  {t.visible ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                  {t.visible ? "Visible" : "Hidden"}
                </span>
                <div className="flex gap-2">
                  <Link href={`/admin/testimonials/${t.id}`} className="p-2 rounded-lg hover:bg-slate-100 text-slate-600">
                    <Pencil className="w-4 h-4" />
                  </Link>
                  <form action={async () => {
                    "use server";
                    await deleteTestimonial(t.id);
                  }}>
                    <button type="submit" className="p-2 rounded-lg hover:bg-red-50 text-red-600">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}