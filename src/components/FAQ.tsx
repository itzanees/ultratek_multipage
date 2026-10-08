"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQProps { faq: { question: string; answer: string } }

export default function FAQ({ faq }: FAQProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 hover:bg-white transition">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-6 text-left">
        <span className="font-bold text-slate-800 text-lg pr-8">{faq.question}</span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-blue-600 transition-transform ${open ? "rotate-180" : ""}`}>
          <ChevronDown className="w-4 h-4" />
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
            <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100/50">{faq.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}