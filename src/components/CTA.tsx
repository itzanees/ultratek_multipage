"use Client";

import Link from "next/link";


export default function CTA() {
    return (
        <section className="py-24 bg-slate-900 text-white text-center">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-6">Ready to start your project?</h2>
                <Link
                    href="/contact"
                    className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition"
                >
                    Get in Touch
                </Link>
            </div>
        </section>
    )
}