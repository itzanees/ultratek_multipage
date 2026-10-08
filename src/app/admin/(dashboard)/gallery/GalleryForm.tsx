"use client";

import { useState } from "react";
import Image from "next/image";
import { Upload } from "lucide-react";

interface Props {
  action: (formData: FormData) => void | Promise<void>;
}

export default function GalleryForm({ action }: Props) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  const inputCls =
    "w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/40";

  return (
    <form action={action} className="bg-white rounded-2xl border border-slate-100 p-8 space-y-6">
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">Image * (max 8 MB)</label>
        <div className="flex items-start gap-6">
          <label className="flex-1 border-2 border-dashed border-slate-300 rounded-2xl p-6 text-center cursor-pointer hover:border-blue-500 transition">
            <input
              type="file"
              name="image"
              accept="image/jpeg,image/png,image/webp,image/avif"
              onChange={handleFile}
              required
              className="hidden"
            />
            <Upload className="w-8 h-8 mx-auto text-slate-400 mb-2" />
            <span className="text-sm text-slate-600">Click to select or drag & drop</span>
          </label>
          {preview && (
            <div className="relative w-40 h-40 rounded-2xl overflow-hidden border border-slate-200">
              <Image src={preview} alt="Preview" fill className="object-cover" unoptimized />
            </div>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Title *</label>
          <input name="title" required className={inputCls} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Category</label>
          <select name="category" defaultValue="General" className={inputCls}>
            <option>General</option>
            <option>Cold Storage</option>
            <option>Warehouse</option>
            <option>Structural</option>
            <option>Loading Bay</option>
            <option>Sandwich Panel</option>
            <option>Fire Safety</option>
            <option>Racking</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">Description</label>
        <textarea name="description" rows={3} className={inputCls} />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Display Order</label>
          <input name="order" type="number" defaultValue={0} className={inputCls} />
        </div>
        <label className="flex items-center gap-3 cursor-pointer mt-8">
          <input type="checkbox" name="featured" className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
          <span className="text-sm font-semibold text-slate-700">Feature on homepage</span>
        </label>
      </div>

      <div className="flex gap-3 pt-4 border-t border-slate-100">
        <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500">
          Upload
        </button>
        <a href="/admin/gallery" className="px-6 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200">
          Cancel
        </a>
      </div>
    </form>
  );
}