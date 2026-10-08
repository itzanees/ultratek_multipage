"use client";

interface Props {
  action: (formData: FormData) => void | Promise<void>;
  initial?: {
    name?: string;
    position?: string;
    company?: string;
    content?: string;
    stars?: number;
    visible?: boolean;
    order?: number;
  };
}

export default function TestimonialForm({ action, initial }: Props) {
  const inputCls =
    "w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/40";

  return (
    <form action={action} className="bg-white rounded-2xl border border-slate-100 p-8 space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Name *</label>
          <input name="name" defaultValue={initial?.name ?? ""} required className={inputCls} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Position *</label>
          <input name="position" defaultValue={initial?.position ?? ""} required className={inputCls} placeholder="CEO" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Company *</label>
          <input name="company" defaultValue={initial?.company ?? ""} required className={inputCls} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Stars (1-5)</label>
          <select name="stars" defaultValue={initial?.stars ?? 5} className={inputCls}>
            {[5, 4, 3, 2, 1].map((n) => <option key={n} value={n}>{n} star{n > 1 ? "s" : ""}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">Testimonial Content *</label>
        <textarea
          name="content"
          defaultValue={initial?.content ?? ""}
          required
          maxLength={1000}
          rows={5}
          className={inputCls}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Display Order <span className="text-xs text-slate-400">(lower = first)</span>
          </label>
          <input
            name="order"
            type="number"
            defaultValue={initial?.order ?? 0}
            className={inputCls}
          />
        </div>
        <label className="flex items-center gap-3 cursor-pointer mt-8">
          <input
            type="checkbox"
            name="visible"
            defaultChecked={initial?.visible ?? true}
            className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-sm font-semibold text-slate-700">Visible on site</span>
        </label>
      </div>

      <div className="flex gap-3 pt-4 border-t border-slate-100">
        <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500">
          Save Testimonial
        </button>
        <a href="/admin/testimonials" className="px-6 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200">
          Cancel
        </a>
      </div>
    </form>
  );
}