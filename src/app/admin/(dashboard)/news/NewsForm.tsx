"use client";

import { useState } from "react";

interface Props {
  action: (formData: FormData) => void | Promise<void>;
  initial?: {
    title?: string;
    slug?: string;
    excerpt?: string;
    content?: string;
    coverImage?: string | null;
    published?: boolean;
  };
}

export default function NewsForm({ action, initial }: Props) {
  const [title, setTitle] = useState(initial?.title ?? "");
  const [slug, setSlug] = useState(initial?.slug ?? "");
  const [autoSlug, setAutoSlug] = useState(!initial);

  const handleTitleChange = (v: string) => {
    setTitle(v);
    if (autoSlug) {
      setSlug(
        v.toLowerCase().trim()
          .replace(/[^\w\s-]/g, "")
          .replace(/[\s_-]+/g, "-")
          .replace(/^-+|-+$/g, "")
      );
    }
  };

  const inputCls =
    "w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/40";

  return (
    <form action={action} className="bg-white rounded-2xl border border-slate-100 p-8 space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Title *</label>
          <input
            name="title"
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            required
            maxLength={200}
            className={inputCls}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Slug *
            <span className="text-xs text-slate-400 ml-2">(URL identifier)</span>
          </label>
          <input
            name="slug"
            value={slug}
            onChange={(e) => { setSlug(e.target.value); setAutoSlug(false); }}
            required
            pattern="[a-z0-9-]+"
            className={inputCls}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">Excerpt *</label>
        <textarea
          name="excerpt"
          defaultValue={initial?.excerpt ?? ""}
          required
          maxLength={500}
          rows={2}
          className={inputCls}
          placeholder="Short summary shown in listings (max 500 chars)"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">Content *</label>
        <textarea
          name="content"
          defaultValue={initial?.content ?? ""}
          required
          rows={14}
          className={`${inputCls} font-mono text-sm`}
          placeholder="Markdown or plain text"
        />
        <p className="text-xs text-slate-400 mt-1">
          Supports plain text. Paragraphs separated by blank lines will render correctly.
        </p>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">Cover Image URL</label>
        <input
          name="coverImage"
          defaultValue={initial?.coverImage ?? ""}
          className={inputCls}
          placeholder="/uploads/my-image.webp or https://..."
        />
      </div>

      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          name="published"
          defaultChecked={initial?.published}
          className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
        />
        <span className="text-sm font-semibold text-slate-700">Publish immediately</span>
      </label>

      <div className="flex gap-3 pt-4 border-t border-slate-100">
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition"
        >
          Save Article
        </button>
        <a
          href="/admin/news"
          className="px-6 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition"
        >
          Cancel
        </a>
      </div>
    </form>
  );
}