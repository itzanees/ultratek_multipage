import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function ISOStrip() {
  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6 text-center max-w-5xl flex flex-col items-center">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-2 w-2 rounded-full bg-blue-600" />
          <span className="text-xs font-black uppercase tracking-[0.5em] text-slate-900">ISO Certified Excellence</span>
          <div className="h-2 w-2 rounded-full bg-blue-600" />
        </div>
        <div className="relative bg-slate-50 rounded-[3rem] p-12 md:p-20 border border-slate-100 flex items-center justify-center w-full">
          <Image src="/iso-certifications.jpg" alt="ISO Global Certifications" width={480} height={128} className="h-20 md:h-32 w-auto object-contain" />
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-10 py-3.5 rounded-full shadow-2xl flex items-center gap-3 border-4 border-white">
            <ShieldCheck className="w-6 h-6 text-blue-200" />
            <span className="text-xs font-black uppercase tracking-widest">Fully Accredited Partner</span>
          </div>
        </div>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] max-w-lg mx-auto leading-relaxed mt-20">
          Internationally Certified Compliance in Quality Management, Environmental Sustainability, and Occupational Health &amp; Safety.
        </p>
      </div>
    </section>
  );
}