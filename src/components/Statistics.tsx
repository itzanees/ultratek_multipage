"use client";

import Image from "next/image";
import { useState } from "react";
import { Calendar, Building2, Ruler, Clock } from "lucide-react";

// import { motion, AnimatePresence } from "framer-motion";


export default function Statistics() {
    return (
        <section className="bg-gradient-to-r from-[#003459] to-[#004575] py-12 md:py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {[
                        { value: "25+", label: "Years Experience", icon: <Calendar className="w-8 h-8 md:w-10 md:h-10" /> },
                        { value: "250+", label: "Projects Finished", icon: <Building2 className="w-8 h-8 md:w-10 md:h-10" /> },
                        { value: "18M+", label: "Sq. Meters Finished", icon: <Ruler className="w-8 h-8 md:w-10 md:h-10" /> },
                        { value: "95%", label: "On-Time Delivery", icon: <Clock className="w-8 h-8 md:w-10 md:h-10" /> },
                    ].map((s) => (
                        <div
                            key={s.label}
                            className="flex flex-col items-center text-center group cursor-default"
                        >
                            {/* Icon Box: Smoothly floats upward, brightens, and gets a glassmorphism background glow on hover */}
                            <div className="mb-4 p-4 rounded-2xl bg-white/5 border border-white/10 text-white/90 shadow-lg transition-all duration-300 transform group-hover:bg-white/10 group-hover:border-white/20 group-hover:-translate-y-2 group-hover:shadow-blue-500/10">
                                {s.icon}
                            </div>

                            {/* Stat Value Text: Subtle tint transition when the user hovers over the card */}
                            <h3 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight transition-colors duration-300 group-hover:text-blue-200">
                                {s.value}
                            </h3>

                            {/* Sub-label Metadata */}
                            <p className="text-blue-100/90 font-medium uppercase tracking-widest text-xs md:text-sm opacity-90 transition-opacity duration-300 group-hover:opacity-100">
                                {s.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}