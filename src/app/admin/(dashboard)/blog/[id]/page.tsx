import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BlogForm from "../BlogForm";
import { updateBlogPost } from "../actions";

export default async function EditBlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await prisma.blogPost.findUnique({ where: { id } });
  if (!post) notFound();

  const action = updateBlogPost.bind(null, post.id);

  return (
    <div>
      <Link href="/admin/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Blog
      </Link>
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Edit Blog Post</h1>
      <BlogForm action={action} initial={post} />
    </div>
  );
}