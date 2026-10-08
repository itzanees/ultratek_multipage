import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { deleteNews } from "./actions";
import { Plus, Pencil, Trash2 } from "lucide-react";

export default async function NewsListPage() {
  const news = await prisma.news.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-slate-900">News Articles</h1>
        <Link
          href="/admin/news/new"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-500 transition"
        >
          <Plus className="w-4 h-4" />
          New Article
        </Link>
      </div>

      {news.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-100 p-12 text-center text-slate-500">
          No news articles yet.
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-bold text-slate-500 uppercase">Title</th>
                <th className="text-left px-6 py-3 text-xs font-bold text-slate-500 uppercase">Status</th>
                <th className="text-left px-6 py-3 text-xs font-bold text-slate-500 uppercase">Date</th>
                <th className="text-right px-6 py-3 text-xs font-bold text-slate-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {news.map((n) => (
                <tr key={n.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4">
                    <p className="font-semibold text-slate-900">{n.title}</p>
                    <p className="text-xs text-slate-400">/{n.slug}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-bold ${
                      n.published ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-600"
                    }`}>
                      {n.published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">
                    {new Date(n.createdAt).toLocaleDateString("en-SA")}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-2">
                      <Link
                        href={`/admin/news/${n.id}`}
                        className="p-2 rounded-lg hover:bg-slate-100 text-slate-600"
                      >
                        <Pencil className="w-4 h-4" />
                      </Link>
                      <form action={async () => {
                        "use server";
                        await deleteNews(n.id);
                      }}>
                        <button type="submit" className="p-2 rounded-lg hover:bg-red-50 text-red-600">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}