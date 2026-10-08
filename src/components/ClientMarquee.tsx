"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ClientMarquee() {
  const logos = Array.from({ length: 28 }, (_, i) => ({
    id: i + 1,
    logo: `/logo${i + 1}.webp`,
    name: `Client ${i + 1}`,
  }));
  const duplicated = [...logos, ...logos];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#004575] mb-6 hover-text-effect">
            {"Our Clients".split("").map((ch, i) => (
              <span key={i} className="char-zoom">{ch === " " ? "\u00A0" : ch}</span>
            ))}
          </h2>
          <motion.p
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Trusted by leading companies in cold storage and warehousing
          </motion.p>
        </div>

        <div className="relative w-full overflow-hidden mb-8">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <motion.div
            className="flex gap-12 w-max"
            animate={{ x: [0, -1920] }}
            transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" } }}
          >
            {duplicated.map((c, i) => (
              <div
                key={`f-${c.id}-${i}`}
                className="flex-shrink-0 w-40 h-24 bg-white rounded-xl flex items-center justify-center p-4 hover:shadow-md transition-shadow"
              >
                <Image src={c.logo} alt={c.name} width={160} height={96} className="w-full h-full object-contain" />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <motion.div
            className="flex gap-12 w-max"
            animate={{ x: [-1920, 0] }}
            transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" } }}
          >
            {duplicated.map((c, i) => (
              <div
                key={`r-${c.id}-${i}`}
                className="flex-shrink-0 w-40 h-24 bg-white rounded-xl flex items-center justify-center p-4 hover:shadow-md transition-shadow"
              >
                <Image src={c.logo} alt={c.name} width={160} height={96} className="w-full h-full object-contain" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}