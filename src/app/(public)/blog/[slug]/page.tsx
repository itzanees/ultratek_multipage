import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const items = await prisma.blogPost.findMany({
    where: { published: true },
    select: { slug: true },
  });
  return items.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await prisma.blogPost.findUnique({ where: { slug } });
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/news/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.coverImage ? [article.coverImage] : [],
      type: "article",
    },
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = await prisma.blogPost.findUnique({ where: { slug } });
  if (!article || !article.published) notFound();

  const paragraphs = article.content.split("\n\n");

  return (
    <article className="bg-white min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <Link href="/news" className="text-blue-600 text-sm font-semibold mb-8 inline-block">
          ← Back to News
        </Link>

        <p className="text-xs text-slate-400 mb-2">
          {article.publishedAt && new Date(article.publishedAt).toLocaleDateString("en-SA", {
            year: "numeric", month: "long", day: "numeric",
          })}
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
          {article.title}
        </h1>
        <p className="text-xl text-slate-500 mb-10">{article.excerpt}</p>

        {article.coverImage && (
          <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-10 relative bg-slate-100">
            <Image src={article.coverImage} alt={article.title} fill className="object-cover" priority />
          </div>
        )}

        <div className="prose prose-lg max-w-none text-slate-700 leading-8 space-y-6">
          {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </article>
  );
}