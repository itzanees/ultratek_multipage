import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import ISOStrip from "@/components/ISOStrip";
import Testimonials from "@/components/Testimonials";
import ClientMarquee from "@/components/ClientMarquee";
import SectorsSection from "@/components/SectorsSection";
import Statistics from "@/components/Statistics";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Cold Storage & Warehouse Construction in Saudi Arabia",
  description: "Leading cold storage, warehouse construction, and loading bay solutions in Saudi Arabia. 22+ years experience. ISO certified.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statistics />
      <WhoWeAre />
      <ISOStrip />
      <SectorsSection />
      <Testimonials />
      <ClientMarquee />
      <CTA />

    </>
  );
}