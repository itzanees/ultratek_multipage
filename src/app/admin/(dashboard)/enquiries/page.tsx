import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { updateEnquiryStatus, deleteEnquiry } from "./actions";
import { Trash2, Mail } from "lucide-react";

const STATUS_TABS = ["NEW", "READ", "REPLIED", "ARCHIVED"] as const;

export default async function EnquiriesPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const filter = status?.toUpperCase();

  const enquiries = await prisma.enquiry.findMany({
    where: filter ? { status: filter } : undefined,
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Enquiries</h1>

      <div className="flex gap-2 mb-6 flex-wrap">
        <Link
          href="/admin/enquiries"
          className={`px-4 py-2 rounded-xl text-sm font-bold ${
            !filter
              ? "bg-slate-900 text-white"
              : "bg-white border border-slate-200 text-slate-600"
          }`}
        >
          All
        </Link>
        {STATUS_TABS.map((s) => (
          <Link
            key={s}
            href={`/admin/enquiries?status=${s}`}
            className={`px-4 py-2 rounded-xl text-sm font-bold ${
              filter === s
                ? "bg-slate-900 text-white"
                : "bg-white border border-slate-200 text-slate-600"
            }`}
          >
            {s}
          </Link>
        ))}
      </div>

      {enquiries.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-100 p-12 text-center text-slate-500">
          No enquiries found.
        </div>
      ) : (
        <div className="space-y-4">
          {enquiries.map((e) => (
            <div
              key={e.id}
              className="bg-white rounded-2xl border border-slate-100 p-6"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-slate-900">{e.name}</h3>
                    <span
                      className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-black ${
                        e.status === "NEW"
                          ? "bg-red-100 text-red-700"
                          : e.status === "REPLIED"
                          ? "bg-emerald-100 text-emerald-700"
                          : e.status === "ARCHIVED"
                          ? "bg-slate-100 text-slate-500"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {e.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500">
                    <a
                      href={`mailto:${e.email}`}
                      className="hover:text-blue-600"
                    >
                      {e.email}
                    </a>
                    {e.phone && (
                      <>
                        {" · "}
                        <a
                          href={`tel:${e.phone}`}
                          className="hover:text-blue-600"
                        >
                          {e.phone}
                        </a>
                      </>
                    )}
                  </p>
                </div>
                <div className="text-right text-xs text-slate-400 whitespace-nowrap">
                  {new Date(e.createdAt).toLocaleString("en-SA")}
                </div>
              </div>

              <p className="text-sm font-semibold text-slate-700 mb-2">
                {e.subject}
              </p>
              <p className="text-slate-600 whitespace-pre-wrap mb-4">
                {e.message}
              </p>

              <div className="flex items-center justify-between gap-2 pt-4 border-t border-slate-100 flex-wrap">
                <div className="flex gap-2 flex-wrap">
                  {STATUS_TABS.map((s) => (
                    <form
                      key={s}
                      action={async () => {
                        "use server";
                        await updateEnquiryStatus(e.id, s);
                      }}
                    >
                      <button
                        type="submit"
                        disabled={e.status === s}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                          e.status === s
                            ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        {s}
                      </button>
                    </form>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href={`mailto:${e.email}?subject=Re: ${encodeURIComponent(
                      e.subject
                    )}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-50 text-blue-700 hover:bg-blue-100"
                  >
                    <Mail className="w-3 h-3" /> Reply
                  </a>
                  <form
                    action={async () => {
                      "use server";
                      await deleteEnquiry(e.id);
                    }}
                  >
                    <button className="p-2 rounded-lg hover:bg-red-50 text-red-600">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}