import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon, LinkedinIcon, FacebookIcon, WhatsappIcon } from "@/components/BrandIcons";
import { services } from "@/data/services";

export default function Footer() {
    return (
        <footer className="bg-[#004575] text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div>
                        <Link href="/" className="inline-block mb-6 bg-white p-2 rounded-lg">
                            <Image src="/logo.webp" alt="Ultratek Arabia" width={160} height={48} className="h-12 w-auto object-contain" />
                        </Link>
                        <p className="text-blue-100/80 leading-relaxed mb-6">
                            Leading provider of cold storage solutions, warehouse construction, and industrial optimization in Saudi Arabia.
                        </p>
                        <div className="flex gap-4">
                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/ultratek_arabia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#004575] transition"
                                aria-label="Instagram"
                            >
                                <InstagramIcon className="w-5 h-5" />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/company/ultratekarabia/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#004575] transition"
                                aria-label="LinkedIn"
                            >
                                <LinkedinIcon className="w-5 h-5" />
                            </a>

                            {/* WhatsApp (already custom SVG, keep as is) */}
                            <a
                                href="https://wa.me/966501417878"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#004575] transition"
                                aria-label="WhatsApp"
                            >
                                <WhatsappIcon className="w-5 h-5" />
                                {/* <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                                </svg> */}
                            </a>

                            {/* Facebook — replace with custom SVG since lucide removed it */}
                            <a
                                href="https://www.facebook.com/ultrartekarabia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#004575] transition"
                                aria-label="Facebook"
                            >
                                <FacebookIcon className="w-5 h-5" />

                                {/* <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg> */}
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {[
                                { href: "/", label: "Home" },
                                { href: "/about", label: "About Us" },
                                { href: "/services", label: "Our Services" },
                                { href: "/contact", label: "Contact Us" },
                            ].map((l) => (
                                <li key={l.href}>
                                    <Link href={l.href} className="text-blue-100/80 hover:text-white hover:pl-2 transition-all">{l.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6">Our Services</h3>
                        <ul className="space-y-4">
                            {services.map((s) => (
                                <li key={s.id}>
                                    <Link href={`/services/${s.slug}`} className="text-blue-100/80 hover:text-white hover:pl-2 transition-all">{s.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6">Contact Us</h3>
                        <div className="space-y-6">
                            <a href="tel:+966501417878" className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#239cf5] transition">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-blue-200">Call Us</p>
                                    <p className="font-semibold">+966 50 141 7878</p>
                                </div>
                            </a>
                            <a href="mailto:info@ultratekcs.com" className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#239cf5] transition">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-blue-200">Email Us</p>
                                    <p className="font-semibold">info@ultratekcs.com</p>
                                </div>
                            </a>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-blue-200">Location</p>
                                    <p className="font-semibold">AL BAGHDADIYAH, JEDDAH - 22235, K.S.A</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-blue-200/60">
                    <p>© {new Date().getFullYear()} Ultratek Arabia. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}