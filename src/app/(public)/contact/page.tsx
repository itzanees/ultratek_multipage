import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { href } from "react-router-dom";


export const metadata = {
  title: "Contact Us",
  description: "Contact Ultratek Arabia for cold storage and warehouse construction in Saudi Arabia. Call +966 50 141 7878 or email info@ultratekcs.com.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Ultratek Arabia",
    url: "https://ultratekcs.com/contact",
    mainEntity: {
      "@type": "Organization",
      name: "Ultratek Arabia",
      telephone: "+966501417878",
      email: "info@ultratekcs.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "AL BAGHDADIYAH",
        addressLocality: "Jeddah",
        postalCode: "22235",
        addressCountry: "SA",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
          opens: "08:00",
          closes: "18:00",
        },
      ],
    },
  };
  return (
    <div className="min-h-screen pt-20 bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      {/* Hero */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-900 to-blue-900/40" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Get in <span className="text-blue-500">Touch</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Have a project in mind? We&apos;d love to hear from you. Let&apos;s
            build something great together.
          </p>
        </div>
      </div>

      {/* Info cards */}
      <div className="container mx-auto px-6 -mt-12 relative z-20">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: MapPin,
              title: "Visit Our Office",
              lines: ["Al Baghdadiyah, Jeddah, 22235, K.S.A"],
              href:"https://maps.app.goo.gl/oxWyKEZK8HxLM6uS6",
              target:"_blank",
            },
            {
              icon: Phone,
              title: "Call or WhatsApp",
              lines: ["+966 50 141 7878"],
              href: "tel:+966501417878",
            },
            {
              icon: Mail,
              title: "Email Us",
              lines: ["info@ultratekcs.com"],
              href: "mailto:info@ultratekcs.com",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 text-center"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-4">
                <c.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{c.title}</h3>
              {c.lines.map((line) =>
                c.href ? (
                  <a
                    key={line}
                    href={c.href}
                    className="block text-slate-600 hover:text-blue-600 transition"
                  >
                    {line}
                  </a>
                ) : (
                  <p key={line} className="text-slate-600">
                    {line}
                  </p>
                )
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form + Map */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Send us a message
                </h2>
                <p className="text-slate-500">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>
              <ContactForm />

              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3 text-sm items-center justify-center">
                <span className="text-slate-500">Prefer WhatsApp?</span>
                <a
                  href="https://wa.me/966501417878?text=Hello%20Ultratek,%20I%20have%20a%20question"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:underline"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat with us on WhatsApp →
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-2 space-y-6">
            {/* Business hours */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Business Hours
                </h3>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex justify-between">
                  <span>Saturday – Thursday</span>
                  <span className="font-semibold">8:00 AM – 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Friday</span>
                  <span className="font-semibold text-slate-400">Closed</span>
                </li>
              </ul>
              <p className="text-xs text-slate-400 mt-4">
                Times displayed in Arabia Standard Time (AST / UTC+3).
              </p>
            </div>

            {/* Map */}
            <div className="bg-white rounded-3xl p-2 shadow-xl border border-slate-100 overflow-hidden">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4606.206175460412!2d39.179126865093956!3d21.506472798407763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x83a23cc5474f2a97%3A0x7a7396141ea76762!2sULTRATEK%20ARABIA%20CO.-%20Cold%20Storage%20%26%20Warehouse%20Solutions!5e1!3m2!1sen!2ssa!4v1790578551728!5m2!1sen!2ssa" 
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ultratek Arabia office location in Jeddah, Saudi Arabia"
                  className="filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Emergency CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-2">Need urgent help?</h3>
              <p className="text-blue-100 text-sm mb-4">
                For time-sensitive projects, call us directly.
              </p>
              <a
                href="tel:+966501417878"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 font-bold rounded-xl hover:bg-slate-100 transition"
              >
                <Phone className="w-4 h-4" />
                +966 50 141 7878
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>

  );
}