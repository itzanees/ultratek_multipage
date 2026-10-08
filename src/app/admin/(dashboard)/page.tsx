import { prisma } from "@/lib/prisma";
import { Newspaper, BookOpen, MessageSquare, Inbox, Image as ImageIcon } from "lucide-react";
import Link from "next/link";

export default async function DashboardPage() {
  const [newsCount, blogCount, testimonialCount, galleryCount, enquiryCount, newEnquiries] =
    await Promise.all([
      prisma.news.count(),
      prisma.blogPost.count(),
      prisma.testimonial.count(),
      prisma.galleryItem.count(),
      prisma.enquiry.count(),
      prisma.enquiry.count({ where: { status: "NEW" } }),
    ]);

  const stats = [
    { label: "News Articles", value: newsCount, icon: Newspaper, href: "/admin/news", color: "blue" },
    { label: "Blog Posts", value: blogCount, icon: BookOpen, href: "/admin/blog", color: "indigo" },
    { label: "Testimonials", value: testimonialCount, icon: MessageSquare, href: "/admin/testimonials", color: "emerald" },
    { label: "Gallery Photos", value: galleryCount, icon: ImageIcon, href: "/admin/gallery", color: "amber" },
    { label: "Total Enquiries", value: enquiryCount, icon: Inbox, href: "/admin/enquiries", color: "slate" },
    { label: "New Enquiries", value: newEnquiries, icon: Inbox, href: "/admin/enquiries?status=NEW", color: "rose" },
  ];

  const recentEnquiries = await prisma.enquiry.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {stats.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-${s.color}-50 flex items-center justify-center`}>
                <s.icon className="w-6 h-6 text-slate-700" />
              </div>
              <span className="text-3xl font-black text-slate-900">{s.value}</span>
            </div>
            <p className="text-slate-500 text-sm font-medium">{s.label}</p>
          </Link>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-900">Recent Enquiries</h2>
          <Link href="/admin/enquiries" className="text-blue-600 text-sm font-medium hover:underline">
            View all →
          </Link>
        </div>
        {recentEnquiries.length === 0 ? (
          <p className="text-slate-500 py-6 text-center">No enquiries yet.</p>
        ) : (
          <div className="divide-y divide-slate-100">
            {recentEnquiries.map((e) => (
              <div key={e.id} className="py-4 flex items-start gap-4">
                <div className={`w-2 h-2 rounded-full mt-2 ${e.status === "NEW" ? "bg-red-500" : "bg-slate-300"}`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <p className="font-semibold text-slate-900 truncate">{e.name}</p>
                    <span className="text-xs text-slate-400">
                      {new Date(e.createdAt).toLocaleDateString("en-SA")}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 truncate">{e.subject}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}