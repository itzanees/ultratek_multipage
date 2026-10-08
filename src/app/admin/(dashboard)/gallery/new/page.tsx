import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import GalleryForm from "../GalleryForm";
import { createGalleryItem } from "../actions";

export default function NewGalleryPage() {
  return (
    <div>
      <Link href="/admin/gallery" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Gallery
      </Link>
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Upload Photo</h1>
      <GalleryForm action={createGalleryItem} />
    </div>
  );
}