"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const W3 = [
    {
        id: "food-processing", 
        title: "Food Processing Industry",
        subtitle: "Fueling the Food Industry: Specialized Processing Facilities",
        description: "Food processing requires specialized infrastructure that prioritizes hygiene and climate control. From food-grade flooring and wall panels to complex thermal layouts for processing zones, we design and build environments that protect product integrity. Our track record with industry leaders reflects our commitment to quality, durability, and strict regulatory compliance.", 
        image: "/sectors/food-processing.webp", 
        icon: "🥣", 
        color: "blue" },
     {
        id: "logistics",
        title: "Logistics", 
        subtitle: "The Power Behind the Chain: Our Logistics Portfolio", 
        description: "In the fast-moving world of logistics, your facility is your greatest asset. We specialize in delivering high-performance warehouse solutions tailored to the unique demands of the industry. From sprawling distribution hubs to precision engineered cold storage environments, we build the foundations that keep global supply chains moving.", 
        image: "/sectors/logistics.webp", 
        icon: "📦", 
        color: "indigo" 
        }, 
        { id: "food-products", 
         title: "Food Products & Fruits", 
         subtitle: "Optimal Climate, Maximum Yield: Your Partners in Perishable Storage", 
         description: "In the perishable goods sector, even a one-degree fluctuation can be costly. Our cold room warehouses are engineered with high performance thermal insulation and advanced cooling systems specifically for the food and fruit industry. We provide the airtight, energy-efficient environments necessary to manage seasonal surges and long-term storage, keeping your inventory fresh and your operations profitable.", 
         image: "/sectors/food-fruits.webp", 
         icon: "🍎", 
         color: "cyan" }, 
         { 
         id: "construction", 
         title: "Construction Sector", 
         subtitle: "Building Excellence Together: Partnering with Industry Giants", 
         description: "Major construction projects demand seamless coordination and uncompromising quality. We specialize in the design and execution of warehouses and specialized storage units, acting as a seamless extension of the main contractor's team. Our track record with Tier-1 construction companies is built on our ability to integrate into large-scale sites while maintaining the highest safety and engineering standards.", 
         image: "/sectors/construction.webp",
         icon: "🏗️", 
            color: "slate" }]; 


export default function Testimonials() {
  const [index, setIndex] = useState(0);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">

    </section>
  );
}