import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";

export const metadata = {
  title: "Our Services",
  description: "Complete industrial solutions: cold storage, structural & civil works, sandwich panels, warehouse cooling, fire fighting, loading bay facilities and rack systems in Saudi Arabia.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="bg-slate-950 min-h-screen pt-20">
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image src="/about-construction.webp" alt="Ultratek Arabia services" fill className="object-cover opacity-30" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold tracking-widest uppercase mb-6">
            What We Do
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-400">Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light">
            Delivering end-to-end industrial solutions that define the future of construction and logistics.
          </p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => {
          const IconComponent = s.icon;
          return (
            <Link
              key={s.id}
              href={`/services/${s.slug}`}
              className="group bg-slate-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="h-64 relative overflow-hidden">
                <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition" />
                <div className="absolute top-6 right-6 w-14 h-14 bg-black/30 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-blue-600 transition">
                  <span className="text-3xl">
                    <IconComponent size={40} />
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition">{s.title}</h2>
                <p className="text-slate-400 mb-8 line-clamp-3">{s.shortDescription}</p>
                <div className="inline-flex items-center text-sm font-bold text-white uppercase tracking-wider">
                  Explore Service →
                </div>
              </div>
            </Link>
          );
        })}
        </div>
      </section>

      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Have a Vision? <br /> Let's Build It Together.
              </h2>
              <p className="text-xl text-blue-100 mb-10">
                From concept to completion, our engineering expertise ensures your project is delivered with precision.
              </p>
              <Link href="/contact" className="inline-block px-10 py-5 bg-white text-blue-900 font-bold rounded-full hover:bg-slate-100 transition shadow-xl">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}