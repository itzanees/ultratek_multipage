// // After validation, before sending email:
// import { prisma } from "@/lib/prisma";

// await prisma.enquiry.create({
//   data: {
//     name,
//     email,
//     phone: phone || null,
//     subject,
//     message,
//     ipAddress: ip,
//     userAgent: req.headers.get("user-agent") ?? null,
//     status: "NEW",
//   },
// });

// // Then continue sending email as before...


import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

const hits = new Map<string, number>();
const WINDOW_MS = 30_000;

interface Payload {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  website?: string; // honeypot
}

export async function POST(req: Request) {
  try {
    // Origin check
    const origin = req.headers.get("origin") ?? "";
    const host = req.headers.get("host") ?? "";
    if (origin && !origin.includes(host)) {
      return NextResponse.json(
        { success: false, message: "Invalid origin." },
        { status: 403 }
      );
    }

    // Rate limit by IP
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";
    const now = Date.now();
    const last = hits.get(ip) ?? 0;
    if (now - last < WINDOW_MS) {
      return NextResponse.json(
        { success: false, message: "Please wait a moment before submitting again." },
        { status: 429 }
      );
    }

    const body: Payload = await req.json();

    // Honeypot
    if (body.website) {
      return NextResponse.json({ success: true, message: "Thank you." });
    }

    // Validate
    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const phone = (body.phone ?? "").trim();
    const subject = (body.subject ?? "Website Enquiry").trim();
    const message = (body.message ?? "").trim();

    const errors: string[] = [];
    if (!name || name.length > 100) errors.push("Please provide a valid name.");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 150)
      errors.push("Please provide a valid email address.");
    if (phone && !/^[0-9+()\-\s]{6,25}$/.test(phone))
      errors.push("Please provide a valid phone number.");
    if (!message || message.length > 3000)
      errors.push("Message must be between 1 and 3000 characters.");

    if (errors.length) {
      return NextResponse.json(
        { success: false, message: errors.join(" ") },
        { status: 422 }
      );
    }

    // ---- Save to database ----
    await prisma.enquiry.create({
      data: {
        name,
        email,
        phone: phone || null,
        subject,
        message,
        ipAddress: ip,
        userAgent: req.headers.get("user-agent") ?? null,
        status: "NEW",
      },
    });

    // ---- Send email (optional — needs Resend key) ----
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
          from: "Ultratek Website <noreply@ultratekcs.com>",
          to: ["info@ultratekcs.com"],
          replyTo: `${name} <${email}>`,
          subject: `[Ultratek] ${subject} — ${name}`,
          text: `New enquiry

Name:    ${name}
Email:   ${email}
Phone:   ${phone}
Subject: ${subject}

Message:
${message}

---
IP: ${ip}
`,
        });
      } catch (mailErr) {
        console.error("Email send failed (DB save succeeded):", mailErr);
        // Don't fail the whole request — the enquiry is already saved
      }
    }

    hits.set(ip, now);
    for (const [key, ts] of hits) {
      if (now - ts > 60_000) hits.delete(key);
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! We will be in touch within 24 hours.",
    });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { success: false, message: "Unexpected error. Please try again." },
      { status: 500 }
    );
  }
}