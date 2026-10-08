import { prisma } from "@/lib/prisma";
import { Star } from "lucide-react";

export const metadata = {
  title: "Testimonials",
  description: "What our clients say about Ultratek Arabia's cold storage and warehouse solutions.",
  alternates: { canonical: "/testimonials" },
};

export default async function TestimonialsPage() {
  const items = await prisma.testimonial.findMany({
    where: { visible: true },
    orderBy: [{ order: "asc" }, { createdAt: "desc" }],
  });

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4">Client Testimonials</h1>
          <p className="text-lg text-slate-600">
            Trusted by leading companies across Saudi Arabia.
          </p>
        </div>

        {items.length === 0 ? (
          <p className="text-center text-slate-500">No testimonials yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((t) => (
              <div key={t.id} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < t.stars ? "fill-yellow-400 text-yellow-400" : "text-slate-200"}`} />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-6 flex-1">"{t.content}"</p>
                <div className="pt-4 border-t border-slate-100">
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.position}, {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}