import { createNews } from "../actions";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import NewsForm from "../NewsForm";

export default function NewNewsPage() {
  return (
    <div>
      <Link href="/admin/news" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to News
      </Link>
      <h1 className="text-3xl font-bold text-slate-900 mb-8">New Article</h1>
      <NewsForm action={createNews} />
    </div>
  );
}