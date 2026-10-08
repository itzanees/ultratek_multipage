"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Snowflake, Truck, Package, LayoutDashboard } from "lucide-react";

const cards = [
  { id: "01", title: "Custom Warehouse Layouts", icon: <LayoutDashboard /> },
  { id: "02", title: "Cold Storage Solutions", icon: <Snowflake /> },
  { id: "03", title: "Loading Bay Optimization", icon: <Truck /> },
  { id: "04", title: "Racking Systems Design", icon: <Package /> },
];

function SplitText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <>
      {text.split("").map((ch, i) => (
        <span key={i}>{ch === " " ? "\u00A0" : ch}</span>
      ))}
    </>
  );
}

// function RotText({text, className = ""}:{ text: string; className?: string }){
//   return (
//     <>
//     {text.split(" ").map((word, wi) => (
//         <span key={wi} className="inline-block whitespace-nowrap">
//             {word.split("").map((ch, ci) => (
//               <span key={ci} className="text-primary">{ch}</span>
//             ))}
//             {"\u00A0"}
//           </span>
//         </>
//     );
//   }
// ))}

// function SplitText({ text, className = "" }: { text: string; className?: string }) {
//   return (
//     <>
//       {text.split("").map((ch, i) => (
//         <span 
//           key={i} 
//           className={`text-inherit ${className}`} // 👈 This forces it to inherit 'text-white'
//         >
//           {ch === " " ? "\u00A0" : ch}
//         </span>
//       ))}
//     </>
//   );
// }


export default function Hero() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(max-width: 768px)" srcSet="/hero-mob.webp" />
          <Image
            src="/hero.jpg"
            alt="Cold Storage Warehouse in Saudi Arabia"
            fill
            priority
            className="object-cover"
          />
        </picture>
        <div className="absolute inset-0" />
      </div>

      <div className="absolute xl:left-5 top-1/2 -translate-y-1/2 z-10 w-full max-w-5xl px-4 md:px-0 bg-black/10 backdrop-blur-xs p-5 rounded-2xl">
        <div className="p-5 rounded-2xl ml-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tigh mb-6 text-white">
              {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white"> */}
              <span className="block md:inline-block animate-text anim-seven mb-2 md:mb-0 ">
                <SplitText text="Smart, Scalable " />
              </span>
              <span className="hidden md:inline-block"> </span>
              <span className="block md:inline-block animate-text anim-seven mb-2">
                <SplitText text="Solutions for" />
              </span>
              <span className="block animate-text anim-two bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                {"Warehousing & Cold Storage".split(" ").map((word, wi) => (
                  <span key={wi} className="inline-block whitespace-nowrap">
                    {word.split("").map((ch, ci) => (
                      <span key={ci} className="text-primary">{ch}</span>
                    ))}
                    {"\u00A0"}
                  </span>
                ))}
              </span>
              {/* Smart, Scalable Solutions for{" "} */}
              {/* <span className="text-primary">Warehousing &amp; Cold Storage</span> */}
            </h1>


            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-lg text-white max-w-xl mb-10 leading-relaxed"
            >
              Industry-leading temperature-controlled storage solutions designed to preserve
              your products with precision and efficiency.
            </motion.p>
            {/* <p className="text-lg text-white max-w-lg mb-10 leading-relaxed mr-auto">
              Industry-leading temperature-controlled storage solutions designed to preserve your products with precision and efficiency.
            </p> */}

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary/90 transition-all hover:shadow-lg group"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Explore More</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>

  );
}