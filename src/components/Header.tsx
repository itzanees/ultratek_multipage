"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/data/services";
import { href } from "react-router-dom";
import { label } from "framer-motion/client";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const navClass = (href: string) =>
    `text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors pb-1 border-b-2 flex items-center gap-1 ${pathname === href ? "text-gray-800 border-primary" : "text-gray-600 border-transparent hover:border-primary"
    }`;

  return (
    <header className="fixed xl:top-0 w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm py-2">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image src="/logo.webp" alt="Ultratek Arabia Logo" width={160} height={48} className="h-12 w-auto object-contain" priority />
        </Link>

        <nav className="hidden lg:flex items-center gap-12">
          <Link href="/" className={navClass("/")}>Home</Link>
          <Link href="/about" className={navClass("/about/")} >About Us</Link>
          <div className="relative group py-4" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)} >
            <Link href="/services" className={navClass("/services/")}>
              Our Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </Link>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
                >
                  <div className="p-2">
                    {services.map((s) => {
                      const IconComponent = s.icon;
                      return(
                      <Link
                        key={s.id}
                        href={`/services/${s.slug}`}
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition"
                        onClick={() => setServicesOpen(false)}
                      >
                        <span className="text-xl"><IconComponent size={24} /></span>
                        <span className="text-sm font-bold text-slate-800">{s.title}</span>
                      </Link>
                    )
                    })}
                  </div>
                  <div className="bg-slate-50 p-3 border-t border-slate-100">
                    <Link href="/services" className="text-xs font-bold text-primary uppercase tracking-widest flex justify-center" onClick={() => setServicesOpen(false)}>
                      Full Services List
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* <Link href="/news" className={navClass("/news/")}>News</Link> */}
          <Link href="/gallery" className={navClass("/gallery/")}>Gallery</Link>
          {/* <Link href="/testimonials" className={navClass("/testimonials")}>Testimonials</Link> */}
          <Link href="/contact" className={navClass("/contact/")}>Contact Us</Link>
          {/* <Link href="/blog" className={navClass("/blog/")}>Blog</Link> */}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/966501417878"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 h-10 rounded-full bg-primary text-white hover:bg-primary/90 transition font-medium"
          >
            Get in Touch
          </a>
        </div>

        <button
          className="p-2 rounded-md hover:bg-gray-100 lg:hidden text-gray-700"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-8 h-8" />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-secondary"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-end pb-5">
              <button className="text-white hover:bg-white/10 p-2 rounded-full" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col bg-black/90 backdrop-blur-xs items-center justify-center h-[calc(100vh-100px)] gap-8">
              <nav className="flex flex-col items-center gap-6 text-xl">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Us" },
                  { href: "/services", label: "Our Services" },
                  { href:"/gallery", label:"Gallery"},
                  { href: "/contact", label: "Contact Us" },
                ].map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="text-white/90 hover:text-white font-medium">
                    {link.label}
                  </Link>
                ))}
              </nav>
              <a
                href="https://wa.me/966501417878"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-white text-secondary hover:bg-gray-100 font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}