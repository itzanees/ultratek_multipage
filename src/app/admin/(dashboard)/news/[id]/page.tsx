import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { updateNews } from "../actions";
import NewsForm from "../NewsForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function EditNewsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = await prisma.news.findUnique({ where: { id } });
  if (!article) notFound();

  const boundAction = updateNews.bind(null, article.id);

  return (
    <div>
      <Link href="/admin/news" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to News
      </Link>
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Edit Article</h1>
      <NewsForm action={boundAction} initial={article} />
    </div>
  );
}