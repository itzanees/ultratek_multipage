import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BlogForm from "../BlogForm";
import { createBlogPost } from "../actions";

export default function NewBlogPostPage() {
  return (
    <div>
      <Link href="/admin/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Blog
      </Link>
      <h1 className="text-3xl font-bold text-slate-900 mb-8">New Blog Post</h1>
      <BlogForm action={createBlogPost} />
    </div>
  );
}