import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import BackToTop from "@/components/BackToTop";
import ScrollToTop from "@/components/ScrollToTop";
import { Providers } from "./providers";


const montserrat = Montserrat ({ subsets: ["latin"], display: "swap", variable: "--font-montserrat" });

const SITE_URL = "https://ultratekcs.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ultratek Arabia | Cold Storage & Warehouse Construction in Saudi Arabia",
    template: "%s | Ultratek Arabia",
  },
  description:
    "Leading cold storage, warehouse construction & loading bay solutions in Saudi Arabia. 25+ years experience. ISO certified. Serving Jeddah, Riyadh & across KSA.",
  keywords: [
    "cold storage Saudi Arabia", "cold storage Jeddah", "cold room Riyadh",
    "warehouse construction KSA", "sandwich panel Saudi Arabia",
    "loading bay Jeddah", "refrigeration Saudi Arabia",
    "مستودعات التبريد السعودية", "غرف تبريد جدة",
  ],
  verification: {
    google:'aT7m9xT91dIfp3m0sXO3UFGeeP78SEpxsUdXMSeAe_4'
  },
  authors: [{ name: "Ultratek Arabia" }],
  creator: "Ultratek Arabia",
  publisher: "Ultratek Arabia",
  openGraph: {
    type: "website",
    locale: "en_SA",
    alternateLocale: "ar_SA",
    url: SITE_URL,
    siteName: "Ultratek Arabia",
    title: "Ultratek Arabia | Cold Storage & Warehouse Construction in KSA",
    description: "Leading cold storage, warehouse construction & loading bay solutions in Saudi Arabia.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Ultratek Arabia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ultratek Arabia",
    description: "Cold storage & warehouse construction in Saudi Arabia",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-SA": SITE_URL,
      "ar-SA": `${SITE_URL}/ar`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#004575",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
    const orgSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: "Ultratek Arabia",
    image: `${SITE_URL}/logo.webp`,
    logo: `${SITE_URL}/logo.webp`,
    url: SITE_URL,
    telephone: "+966501417878",
    email: "info@ultratekcs.com",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "AL BAGHDADIYAH",
      addressLocality: "Jeddah",
      postalCode: "22235",
      addressCountry: "SA",
    },
    geo: { "@type": "GeoCoordinates", latitude: 21.5168865, longitude: 39.1979705 },
    areaServed: [
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "City", name: "Jeddah" },
      { "@type": "City", name: "Riyadh" },
      { "@type": "City", name: "Dammam" },
    ],
    sameAs: [
      "https://www.instagram.com/ultratek_arabia",
      "https://www.linkedin.com/company/ultratekarabia/",
      "https://www.facebook.com/ultratekarabia",
    ],
  };

  return (
    <html lang="en" dir="ltr" className={montserrat.variable}>
      <head>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
            />
      </head>
      <body className={montserrat.className}>
        <ScrollToTop />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}