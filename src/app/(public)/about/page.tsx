"use client";

import Image from "next/image";
import Link from "next/link";
import { easeIn, motion } from "framer-motion"
import ISOStrip from "@/components/ISOStrip";
import { Leaf, Target, Users } from "lucide-react";

const fadeUp = {
  initial: { x:0, opacity: 0},
  animate:{ x: 100 },
  transition:{ duration: 0.5 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0 },
// };

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const popIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};


// export const metadata = {
//   title: "About Us",
//   description: "Learn about Ultratek Arabia — a premier multi-disciplinary industrial contractor in Saudi Arabia with 22+ years of experience in cold storage and warehouse construction.",
//   alternates: { canonical: "/about" },
// };

export default function AboutPage() {
  return (
    <div className="bg-slate-50 pt-20">
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image src="/about-construction.webp" alt="Ultratek Arabia construction" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/80 to-slate-900/40" />
        {/* <motion.div
            initial={{ x: 0 }}
            animate={{ x: 100 }}
            transition={{ duration: 0.5 }}
            style={{ width: 100, height: 100, backgroundColor: "blue" }}
        /> */}
        <div className="max-w-3xl mb-20">
          <div className="relative z-10 container mx-auto px-6 text-white max-w-4xl">
            <motion.h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight"
              {...fadeUp}
              transition={{ duration: 0.8 }}
            >
              Engineering the <br />
              <motion.span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300"
                {...fadeUp}
                transition={{ duration: 0.8, delay: 0.1 }}>
                Infrastructure of Tomorrow
              </motion.span>
            </motion.h1>
            <motion.p className="text-lg md:text-2xl text-slate-300 max-w-2xl leading-relaxed font-light"
              {...fadeUp}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              ULTRATEK ARABIA combines two decades of expertise with cutting-edge technology to redefine industrial construction standards in Saudi Arabia.
            </motion.p>
          </div>
        </div>
        {/* <div className="relative z-10 container mx-auto px-6 text-white max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Engineering the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Infrastructure of Tomorrow
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 max-w-2xl leading-relaxed font-light">
            ULTRATEK ARABIA combines two decades of expertise with cutting-edge technology to redefine industrial construction standards in Saudi Arabia.
          </p>
        </div> */}
      </section>

      <section className="py-24 md:py-32">
        <motion.div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
        initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          variants={fadeInLeft}
          transition={{ duration: 0.8, ease: easeIn }}
        >
          <div>
            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              More Than Just <br /> Construction
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>Founded with a vision to transform the logistics landscape, ULTRATEK ARABIA has grown into a premier multi-disciplinary contractor. We don&apos;t simply erect steel structures; we engineer ecosystems that empower businesses to operate more efficiently.</p>
              <p>As experts in Cold Store, Heavy Structural Fabrication, and Electromechanical contracting, we bring a holistic approach to every project.</p>
            </div>
            <div className="mt-12 flex gap-12">
              <div>
                <h3 className="text-4xl font-black text-blue-600 mb-1">22+</h3>
                <p className="text-slate-500 font-medium">Years Experience</p>
              </div>
              <div>
                <h3 className="text-4xl font-black text-blue-600 mb-1">150+</h3>
                <p className="text-slate-500 font-medium">Projects Delivered</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image src="/about-warehouse.webp" alt="Warehouse Interior in Saudi Arabia" width={800} height={600} className="rounded-[2rem] shadow-2xl w-full h-auto object-cover" />
          </div>
        </motion.div>
      </section>

      <section className="py-24 bg-slate-900 text-white">
        <motion.div className="container mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInLeft}
          transition={{ duration: 0.8, ease: easeIn }}
          >
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Core <span className="text-blue-400">Values</span></h2>
            <p className="text-slate-400 text-lg">The principles that guide every blueprint we draw.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Precision Engineering", desc: "We believe that details define quality. Zero tolerance for errors in execution.", icon: <Target className="w-8 h-8 md:w-10 md:h-10" /> },
              { title: "Sustainable Innovation", desc: "Building for the future using energy-efficient materials and smart technologies.", icon: <Leaf className="w-8 h-8 md:w-10 md:h-10" /> },
              { title: "Client Partnership", desc: "We work with you to realize your operational goals.", icon: <Users className="w-8 h-8 md:w-10 md:h-10" /> },
            ].map((v) => (
              <div key={v.title} className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-2xl hover:bg-white/10 transition">
                <div className="mb-6 bg-blue-500/20 w-16 h-16 rounded-xl flex items-center justify-center text-blue-400">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                <p className="text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
      <ISOStrip />


      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to work with us?</h2>
          <Link href="/contact" className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition">
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}