import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { deleteGalleryItem, toggleFeatured } from "./actions";
import { Plus, Trash2, Star } from "lucide-react";

export default async function GalleryAdminPage() {
  const items = await prisma.galleryItem.findMany({
    orderBy: [{ order: "asc" }, { createdAt: "desc" }],
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Gallery</h1>
        <Link
          href="/admin/gallery/new"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-500"
        >
          <Plus className="w-4 h-4" /> Upload Photos
        </Link>
      </div>

      {items.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-100 p-12 text-center text-slate-500">
          No photos yet.
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl border border-slate-100 overflow-hidden group">
              <div className="relative aspect-square">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                  <form action={async () => {
                    "use server";
                    await toggleFeatured(item.id, item.featured);
                  }}>
                    <button
                      type="submit"
                      className={`p-2 rounded-lg ${item.featured ? "bg-yellow-400 text-slate-900" : "bg-white/90 text-slate-700"}`}
                      title="Toggle featured"
                    >
                      <Star className={`w-4 h-4 ${item.featured ? "fill-current" : ""}`} />
                    </button>
                  </form>
                  <form action={async () => {
                    "use server";
                    await deleteGalleryItem(item.id);
                  }}>
                    <button type="submit" className="p-2 rounded-lg bg-red-600 text-white" title="Delete">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </div>
              <div className="p-3">
                <p className="font-semibold text-sm text-slate-900 truncate">{item.title}</p>
                <p className="text-xs text-slate-500">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}