"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  website: string; // honeypot
}

const initialState: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "General Enquiry",
  message: "",
  website: "",
};

export default function ContactForm() {
  const [data, setData] = useState<FormData>(initialState);
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const update = (key: keyof FormData) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setData((d) => ({ ...d, [key]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json().catch(() => ({}));

      if (res.ok && json.success) {
        setStatus("success");
        setFeedback(json.message ?? "Thank you! We will be in touch soon.");
        setData(initialState);
      } else {
        setStatus("error");
        setFeedback(json.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setFeedback("Network error. Please check your connection and try again.");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot — hidden from humans, visible to bots */}
      <div
        className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden"
        aria-hidden="true"
      >
        <label>
          Website
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={data.website}
            onChange={update("website")}
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-slate-700 mb-2"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            maxLength={100}
            placeholder="Ahmed Al-Rashid"
            value={data.name}
            onChange={update("name")}
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-slate-700 mb-2"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            maxLength={150}
            placeholder="ahmed@company.com"
            value={data.email}
            onChange={update("email")}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-slate-700 mb-2"
          >
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            required
            placeholder="+966 50 000 0000"
            value={data.phone}
            onChange={update("phone")}
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-semibold text-slate-700 mb-2"
          >
            Subject
          </label>
          <select
            id="subject"
            value={data.subject}
            onChange={update("subject")}
            className={inputClass}
          >
            <option>General Enquiry</option>
            <option>Cold Storage Facility</option>
            <option>Structural and Civil Works</option>
            <option>Sandwich Panel Installation</option>
            <option>Warehouse Cooling System</option>
            <option>Doors and Shutters</option>
            <option>Cold room Lighting</option>
            <option>Loading Bay Facilities</option>
            <option>Fire Fighting System</option>
            <option>Rack System and Equipment</option>
            <option>Request a Quote</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-slate-700 mb-2"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={6}
          maxLength={3000}
          placeholder="Tell us about your project, location, and timeline..."
          value={data.message}
          onChange={update("message")}
          className={`${inputClass} resize-y`}
        />
        <p className="text-xs text-slate-400 mt-1 text-right">
          {data.message.length}/3000
        </p>
      </div>

      <AnimatePresence>
        {status !== "idle" && status !== "submitting" && feedback && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`flex items-start gap-3 p-4 rounded-xl border ${
              status === "success"
                ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                : "bg-red-50 border-red-200 text-red-800"
            }`}
          >
            {status === "success" ? (
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            )}
            <p className="text-sm font-medium">{feedback}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-blue-500/25"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </button>

      <p className="text-xs text-slate-500">
        By submitting, you agree to be contacted by our team. We never share your
        information.
      </p>
    </form>
  );
}