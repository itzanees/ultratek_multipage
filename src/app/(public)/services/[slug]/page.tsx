import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services } from "@/data/services";
import FAQ from "@/components/FAQ";

// 1. Import your dynamic icon registry tool here
import { DynamicIcon } from "@/components/icons/IconRegistry";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | Ultratek Arabia`,
      description: service.shortDescription,
      images: [service.image],
      url: `/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ultratekcs.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://ultratekcs.com/services" },
      { "@type": "ListItem", position: 3, name: service.title, item: `https://ultratekcs.com/services/${service.slug}` },
    ],
  };

  return (
    <div className="bg-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="relative h-[70vh] min-h-[500px]">
        <Image src={service.image} alt={service.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center pt-20">
          <div className="max-w-4xl">
            <Link href="/services" className="inline-flex items-center text-blue-400 hover:text-white mb-8 group">
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-blue-600 transition">
                ←
              </span>
              <span>Back to Services</span>
            </Link>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">{service.title}</h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light border-l-4 border-blue-500 pl-6">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <article className="lg:col-span-8 bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl">
            
            <div className="flex items-center gap-4 mb-8">
              {/* 2. REMOVED the services.map loop entirely. Render only the current service icon. */}
              <span className="flex items-center justify-center bg-blue-50 p-4 rounded-2xl w-20 h-20 shadow-sm text-blue-600">
                <DynamicIcon name={service.slug} size={40} />
              </span>
              <h2 className="text-3xl font-bold text-slate-900">Service Overview</h2>
            </div>

            <div className="text-slate-600 leading-8 text-lg space-y-6">
              {service.fullDescription.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="w-full h-px bg-slate-200 my-12" />
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {service.faqs.map((f, i) => <FAQ key={i} faq={f} />)}
            </div>
          </article>

          <aside className="lg:col-span-4">
            <div className="bg-slate-950 rounded-3xl p-8 text-white sticky top-28">
              <h3 className="text-2xl font-bold mb-4">Ready to Upgrade?</h3>
              <p className="text-slate-400 mb-8">Get a comprehensive quote tailored to your specific industrial requirements today.</p>
              <a
                href={`https://wa.me/966501417878?text=${encodeURIComponent(`Hello Ultratek, I am interested in your \${service.title} service.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition flex items-center justify-center"
              >
                Request Consultation →
              </a>
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-sm text-slate-500 mb-2 uppercase tracking-wider font-semibold">Other Services</p>
                <div className="space-y-3">
                  {services.filter((s) => s.id !== service.id).slice(0, 4).map((s) => (
                    <Link key={s.id} href={`/services/${s.slug}`} className="flex items-center text-slate-300 hover:text-white transition py-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3" />
                      <span className="truncate">{s.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
