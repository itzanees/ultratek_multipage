"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { id: 1, name: "Shiyad Ali", position: "CEO", company: "Sealand Food", content: "For the past eight years, Ultratek Arabia has been a valued partner in constructing and maintaining our cold storage facilities.", stars: 5 },
  { id: 2, name: "Sayed Idris", position: "CEO", company: "Arabian Rose Trading Company", content: "We've been partnering with Ultratech for our cold storage needs, and the experience has been phenomenal.", stars: 5 },
  { id: 3, name: "Ahmed Hassan", position: "Operations Manager", company: "Fresh Logistics Co.", content: "The warehouse layout they designed has significantly improved our operational efficiency.", stars: 4 },
  { id: 4, name: "Fatima Al-Rashid", position: "Supply Chain Director", company: "Gulf Distribution Services", content: "Excellent service and attention to detail. Their cold storage solutions have helped us maintain product quality.", stars: 4 },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const prev = (index - 1 + testimonials.length) % testimonials.length;
  const next = (index + 1) % testimonials.length;

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#004575] hover-text-effect">
            {"Client Testimonial".split("").map((ch, i) => (
              <span key={i} className="char-zoom">{ch === " " ? "\u00A0" : ch}</span>
            ))}
          </h2>
        </div>

        <div className="relative flex items-center justify-center gap-4 md:gap-8 min-h-[450px]">
          <button
            onClick={() => setIndex(prev)}
            className="hidden md:flex absolute left-0 z-30 p-4 rounded-full bg-white shadow-lg text-primary hover:bg-gray-50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Left ghost */}
          <div className="hidden lg:flex flex-col justify-between w-[320px] h-[320px] p-8 bg-white/50 backdrop-blur-sm rounded-3xl border border-gray-100 opacity-40 scale-90 cursor-pointer"
               onClick={() => setIndex(prev)}>
            <Stars n={testimonials[prev].stars} />
            <p className="text-gray-500 italic line-clamp-4">"{testimonials[prev].content}"</p>
            <div>
              <h4 className="font-bold text-gray-700">{testimonials[prev].name}</h4>
              <p className="text-sm text-gray-500">
                {testimonials[prev].position}, {testimonials[prev].company}
              </p>
            </div>
          </div>

          {/* Center card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-2xl h-auto min-h-[350px] p-8 md:p-10 bg-white rounded-[2rem] shadow-2xl border border-blue-50 z-20 flex flex-col justify-between"
            >
              <Stars n={testimonials[index].stars} size="lg" />
              <p className="text-xl md:text-2xl text-[#004575] font-medium leading-relaxed mb-8">
                "{testimonials[index].content}"
              </p>
              <div className="border-t pt-6 border-gray-100">
                <h4 className="text-lg font-bold text-gray-900">{testimonials[index].name}</h4>
                <p className="text-gray-500">
                  {testimonials[index].position}, {testimonials[index].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right ghost */}
          <div className="hidden lg:flex flex-col justify-between w-[320px] h-[320px] p-8 bg-white/50 backdrop-blur-sm rounded-3xl border border-gray-100 opacity-40 scale-90 cursor-pointer"
               onClick={() => setIndex(next)}>
            <Stars n={testimonials[next].stars} />
            <p className="text-gray-500 italic line-clamp-4">"{testimonials[next].content}"</p>
            <div>
              <h4 className="font-bold text-gray-700">{testimonials[next].name}</h4>
              <p className="text-sm text-gray-500">
                {testimonials[next].position}, {testimonials[next].company}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIndex(next)}
            className="hidden md:flex absolute right-0 z-30 p-4 rounded-full bg-white shadow-lg text-primary hover:bg-gray-50"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Stars({ n, size = "md" }: { n: number; size?: "md" | "lg" }) {
  const cls = size === "lg" ? "text-2xl" : "text-xl";
  return (
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`${cls} ${i < n ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
}