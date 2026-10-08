import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

export const metadata = {
  title: "Blogs",
  description: "Blogs from Ultratek Arabia about cold storage and warehouse construction in Saudi Arabia.",
  alternates: { canonical: "/blog" },
};

export default async function NewsListPage() {
  const news = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { publishedAt: "desc" },
  });

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4">Blog</h1>
          <p className="text-lg text-slate-600">Blogs from Ultratek Arabia.</p>
        </div>

        {news.length === 0 ? (
          <p className="text-slate-500">No blogs yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((n) => (
              <Link key={n.id} href={`/news/${n.slug}`} className="group">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-slate-100 relative">
                  {n.coverImage && (
                    <Image src={n.coverImage} alt={n.title} fill className="object-cover group-hover:scale-105 transition duration-500" />
                  )}
                </div>
                <p className="text-xs text-slate-400 mb-2">
                  {n.publishedAt && new Date(n.publishedAt).toLocaleDateString("en-SA", { year: "numeric", month: "long", day: "numeric" })}
                </p>
                <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">{n.title}</h2>
                <p className="text-slate-600 line-clamp-3">{n.excerpt}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}