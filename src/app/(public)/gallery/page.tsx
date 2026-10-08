import Image from "next/image";
import { prisma } from "@/lib/prisma";

export const metadata = {
  title: "Gallery",
  description: "Work photos and project showcases from Ultratek Arabia.",
  alternates: { canonical: "/gallery" },
};

export default async function GalleryPage() {
  const items = await prisma.galleryItem.findMany({
    orderBy: [{ order: "asc" }, { createdAt: "desc" }],
  });

  const categories = ["All", ...Array.from(new Set(items.map((i) => i.category)))];

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4">Our Work</h1>
          <p className="text-lg text-slate-600">
            A selection of projects delivered across Saudi Arabia.
          </p>
        </div>

        {items.length === 0 ? (
          <p className="text-slate-500">No photos yet.</p>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
            {items.map((item) => (
              <div key={item.id} className="break-inside-avoid mb-6 rounded-2xl overflow-hidden group relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs uppercase tracking-widest opacity-80">{item.category}</p>
                    <p className="font-bold text-lg">{item.title}</p>
                    {item.description && (
                      <p className="text-sm opacity-80 mt-1">{item.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}