import ColdStorageIcon from "@/components/icons/ColdStorageIcon"
import StructuralCivilIcon from "@/components/icons/StructuralCivilIcon"
import SandwichPanelIcon from "@/components/icons/SandwichPanelIcon"
import WarehouseCoolingIcon from "@/components/icons/WarehouseCoolingIcon"
import IndustrialDoorIcon from "@/components/icons/IndustrialDoorIcon"
import ColdroomLightingIcon from "@/components/icons/ColdroomLightingIcon"
import LoadingBayIcon from "@/components/icons/LoadingBayIcon"
import FireSuppressionIcon from "@/components/icons/FireSuppressionIcon"
import RackSystemIcon from "@/components/icons/RackSystemIcon"

export interface Service {
  id: string;
  title: string;
  slug: string;
  name:string;
  shortDescription: string;
  fullDescription: string;
  icon: React.ComponentType;
  image: string;
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    id: "1",
    title: "Cold Storage Facility",
    slug: "cold-storage-facility",
    name: "cold-storage-facility",
    shortDescription: "Turnkey solutions for temperature-sensitive inventory with advanced climate control.",
    fullDescription: `Designing a cold storage facility requires careful planning, engineering expertise, and advanced climate control to ensure the safe storage of temperature-sensitive goods. A professionally designed cold store by Ultratek Arabia delivers top-quality, turnkey solutions that provide reliable temperature management, efficient workflow, and long-term protection for frozen foods, pharmaceuticals, dairy, seafood, perishables, and other sensitive inventory.

A leading cold storage warehouse is built with high-quality insulation, durable structural design, energy-efficient refrigeration systems, and humidity control to maintain consistent temperatures and product quality. The facility layout is optimized for maximum space utilization, smooth movement of goods, and minimal cooling loss during loading and unloading operations. Dedicated areas for trucking, docking, receiving, and dispatching enhance operational efficiency, reduce handling time, and improve overall logistics.

By integrating advanced climate technology, safety systems, and workflow optimization, a top-tier cold storage facility ensures product freshness, reduces energy consumption, and boosts supply chain performance. Ultratek Arabia offers complete turnkey services including warehouse layout design, civil and structural construction, insulated panel installation, refrigeration system integration, racking and storage solutions, and loading dock optimization. Investing in a best-in-class cold storage facility with Ultratek Arabia helps businesses maintain competitive advantage, lead the market, and achieve long-term operational excellence.`,
    icon: ColdStorageIcon,
    image: "/cold-storage-facility.webp",
    faqs: [
      { question: "What is a cold storage facility?", answer: "A cold storage facility is a temperature-controlled warehouse used to store perishable or sensitive goods, keeping them at specific temperature and humidity levels to maintain quality and extend shelf life." },
      { question: "Can a cold storage facility be expanded later?", answer: "Yes. When designed properly, cold stores allow modular expansion—additional chambers, larger docks, or capacity upgrades. It's important to plan ahead for future growth during the initial design stage." },
      { question: "How does Ultratek Arabia support cold storage projects?", answer: "Ultratek Arabia provides complete cold storage solutions, including layout design, civil and insulated panel construction, refrigeration integration, racking systems, loading dock optimization, and full turnkey execution." },
      { question: "What makes a cold storage facility different from a regular warehouse?", answer: "Cold stores use advanced refrigeration, insulation panels, and humidity control to maintain consistent cooling. Ultratek Arabia specializes in constructing insulated panel structures and integrating climate-control systems." },
      { question: "What safety features are required in a cold storage facility?", answer: "Critical safety elements include anti-slip flooring, emergency lighting, fire-suppression systems, insulated doors, and temperature alarms." },
      { question: "How long does it take to build a cold storage facility?", answer: "Small facilities may take 2–3 months, medium 4–6 months, and large industrial projects 6–12 months." },
    ],
  },
  {
    id: "2",
    title: "Structural and Civil Works",
    slug: "structural-civil-works",
    name: "structural-civil-works",
    shortDescription: "High-quality infrastructure designed to support heavy loads and withstand harsh conditions.",
    fullDescription: `High-quality structural and civil works are essential for building strong, safe, and long-lasting industrial and commercial infrastructure. As a top, leading provider of engineering and construction solutions, we deliver the best structural systems designed to support heavy loads, withstand harsh conditions, and ensure long-term reliability.

Our services cover the complete construction scope, including deep foundations, reinforced concrete flooring, precision structural framing, robust load-bearing walls, advanced roofing systems, site leveling, grading, and efficient drainage networks. Every component is built using premium, weather-resistant materials to ensure maximum durability, stability, and performance.

With a strong commitment to engineering accuracy and international safety standards, our structural and civil works enhance operational efficiency, reduce maintenance costs, and deliver exceptional reliability for industrial and commercial environments.

As one of the best and top-rated companies in the industry, Ultratek Arabia ensures seamless project execution, high-quality workmanship, and long-lasting infrastructure solutions tailored to your specific requirements.`,
    icon: StructuralCivilIcon,
    image: "/structural-civil-works.webp",
    faqs: [
      { question: "Why are structural and civil works important for industrial and commercial projects?", answer: "They form the backbone of any project, supporting heavy loads, advanced equipment, and operational efficiency." },
      { question: "What makes Ultratek Arabia a leading company in structural and civil works?", answer: "Ultratek Arabia is recognized as a top, leading company delivering best-in-class engineering solutions built to international standards." },
      { question: "How long does structural and civil work take for industrial projects?", answer: "Project timelines vary depending on size and complexity. Ultratek Arabia ensures efficient planning and execution." },
      { question: "Can Ultratek Arabia handle turnkey structural and civil projects?", answer: "Yes. As a leading company, Ultratek Arabia provides complete turnkey solutions—from design and planning to construction and site development." },
      { question: "Can structural and civil works be customized for my project?", answer: "Yes. Ultratek Arabia provides tailored solutions to match your facility's load requirements, workflow, and operational needs." },
      { question: "How do structural and civil works benefit my business?", answer: "They ensure durable, safe, and efficient infrastructure, support heavy loads, reduce maintenance costs, and improve overall operational efficiency." },
    ],
  },
  {
    id: "3",
    title: "Sandwich Panel",
    slug: "sandwich-panel",
    name: "sandwich-panel",
    shortDescription: "Superior thermal resistance and airtight sealing for refrigerated warehouses.",
    fullDescription: `Sandwich panels play a crucial role in building high-performance cold storage systems, offering the best insulation efficiency, structural strength, and long-lasting durability. Known for their superior thermal resistance and airtight sealing, these panels are considered one of the top solutions for maintaining stable temperatures in refrigerated warehouses, food processing units, and pharma storage environments.

Designed with advanced insulation cores and durable metal layers, sandwich panels ensure leading energy savings, improved hygiene, and exceptional protection against moisture and temperature fluctuations. Their lightweight construction allows for faster installation while ensuring strong performance and minimal maintenance.

As one of the best and most reliable panel systems in the industry, sandwich panels provided by Ultratek Arabia help businesses achieve higher efficiency, reduced energy costs, and long-term operational stability.`,
    icon: SandwichPanelIcon,
    image: "/sandwich-panel.webp",
    faqs: [
      { question: "How long do sandwich panels last?", answer: "With proper installation and maintenance, sandwich panels can last 20–30 years." },
      { question: "Are sandwich panels suitable for large-scale cold storage projects?", answer: "Yes. Their modular design, high insulation, and structural strength make them the best solution for large warehouses." },
      { question: "Why are sandwich panels considered a top option for industrial construction?", answer: "They are lightweight, strong, quick to install, and designed to resist moisture, fire, and corrosion." },
      { question: "Do sandwich panels require specialized labor for installation?", answer: "No. Sandwich panels are designed for quick and easy assembly, reducing labor costs and project timelines." },
      { question: "How do sandwich panels compare with traditional brick or concrete walls?", answer: "Sandwich panels are lighter, faster to install, better insulated, and more cost-effective." },
      { question: "Why are Ultratek Arabia's sandwich panels considered the best in the market?", answer: "Ultratek Arabia offers top-quality, industry-leading sandwich panels with premium materials and expert installation." },
    ],
  },
  {
    id: "4",
    title: "Warehouse Cooling System",
    slug: "warehouse-cooling-system",
    name: "warehouse-cooling-system",
    shortDescription: "Precision temperature management and energy-efficient cooling solutions.",
    fullDescription: `A warehouse cooling system is a critical solution for maintaining optimal temperatures, energy efficiency, and product integrity in modern storage facilities. These systems are indispensable for warehouses handling temperature-sensitive goods such as food, pharmaceuticals, electronics, and perishables.

Ultratek Arabia is a leading provider of top-quality warehouse cooling systems, offering best-in-class solutions that combine durability, energy efficiency, and precision temperature management. Our systems feature high-performance refrigeration units, advanced airflow management, humidity control, and real-time temperature monitoring.

Investing in a top-tier warehouse cooling system from Ultratek Arabia guarantees long-term reliability, reduced energy consumption, and maximum protection for your valuable inventory.`,
    icon: WarehouseCoolingIcon,
    image: "/cooling-system.webp",
    faqs: [
      { question: "Why is a warehouse cooling system important?", answer: "It ensures consistent temperature control, preserves quality of temperature-sensitive products, and reduces operational costs." },
      { question: "How long does it take to install a warehouse cooling system?", answer: "Installation depends on the system type and warehouse size, but Ultratek Arabia provides fast, efficient turnkey solutions." },
      { question: "How long do warehouse cooling systems last?", answer: "With proper installation and maintenance, top-quality systems can provide years of reliable performance." },
      { question: "Are Ultratek Arabia cooling systems compliant with safety standards?", answer: "Yes. They comply with international standards for energy efficiency, safety, and operational reliability." },
      { question: "Can warehouse cooling systems be monitored remotely?", answer: "Yes. Modern systems can include remote monitoring and control for temperature, humidity, and energy usage." },
      { question: "Can Ultratek Arabia provide turnkey warehouse cooling solutions?", answer: "Yes. Ultratek Arabia provides complete turnkey solutions including design, supply, installation, and support." },
    ],
  },
  {
    id: "5",
    title: "Industrial Doors and Shutters",
    slug: "industrial-doors-and-shutters",
    name: "industrial-doors-and-shutters",
    shortDescription: "High-performance rolling shutters and heavy-duty sectional overhead dock doors.",
    fullDescription: `Industrial doors and shutters are critical infrastructure features in modern warehouses, distribution centers, and production facilities. They guarantee environmental segregation, absolute perimeter building security, and seamless workflow routing during heavy logistical loading and unloading profiles.

Ultratek Arabia delivers complete turnkey planning, engineering, supply, and installation for rapid-roll high-speed fabrics, heavy insulated fire-rated shutters, and automated dock doors. Our solutions integrate impact-resistant materials, automated safety sensory rings, and rugged track guides to guarantee structural integrity over millions of operations cycles.

By investing in elite access closure networks with Ultratek Arabia, facilities drastically reduce thermal air exchanging drop-offs, optimize intra-facility logistics, and maintain safe material-handling throughput.`,
    icon: IndustrialDoorIcon,
    image: "/industrial-doors-shutters.webp",
    faqs: [
      { question: "What variants of industrial doors do you provide?", answer: "Ultratek Arabia provides rolling steel shutters, heavy thermal-insulated sectional dock doors, fire-rated partitions, and high-speed PVC fabric doors." },
      { question: "Can these doors handle high-frequency operation?", answer: "Yes, our automated dock doors and high-speed fabrics are engineered with rugged components built specifically for continuous industrial workflow loops." },
      { question: "Are custom dimensions available for specialized loading bays?", answer: "Absolutely. All tracks, frame geometries, and curtain slats are customized to match exact structural civil clearances and dock dimensions." },
    ],
  },
  {
    id: "6",
    title: "Coldroom and Warehouse Lighting",
    slug: "coldroom-and-warehouse-lighting",
    name: "coldroom-and-warehouse-lighting",
    shortDescription: "IP-rated vapor-tight high-lumen luminaires for low-temperature visibility and safety.",
    fullDescription: `Advanced coldroom and warehouse lighting is a foundational requirement for extreme thermal environments and massive industrial storage volumes. Standard commercial fixtures quickly degrade in low-temperature configurations, making rugged, moisture-sealed illumination mandatory to ensure facility safety and tracking precision.

Ultratek Arabia engineers high-efficiency, specialized LED matrices encased in vapor-proof, low-profile fixtures. These lighting systems are meticulously configured to handle dense moisture cycles, frequent sub-zero defrost sweeps, and heavy warehouse mechanical vibration without facing premature lumen drop or component crystallization.

Integrating specialized industrial lighting installations guarantees strict cold-chain compliance, optimizes forklift safety along high-rack aisles, and slashes maintenance overheads via extreme lamp longevity.`,
    icon: ColdroomLightingIcon,
    image: "/coldroom-lighting.webp",
    faqs: [
      { question: "Can standard LED fixtures operate inside cold storage facilities?", answer: "No. Standard lights suffer driver failure and condensation locks in low temperatures. Ultratek Arabia installs specialized IP-rated vapor-tight luminaires built for sub-zero rooms." },
      { question: "How does proper lighting design optimize warehouse operations?", answer: "High-lumen configurations down high-rack aisles minimize selection errors, boost forklift safety margins, and fulfill strict occupational health protocols." },
      { question: "Do you offer automated controls like motion detection?", answer: "Yes, we integrate low-temperature responsive motion networks and smart dimming profiles to reduce power draw in unoccupied facility zones." },
    ],
  },
  {
    id: "7",
    title: "Loading Bay Facilities",
    slug: "loading-bay-facilities",
    name: "loading-bay-facilities",
    shortDescription: "Advanced systems for streamlined and safe movement of goods.",
    fullDescription: `Loading bay facilities play a vital role in ensuring fast, safe, and streamlined movement of goods in warehouses and cold storage environments. From receiving shipments to dispatching products, every step depends on a well-structured and efficiently designed loading bay.

Ultratek Arabia is recognized as one of the top and leading providers of loading bay facility solutions, offering advanced systems engineered for maximum performance. Our loading bay setups include high-precision dock levelers, insulated dock shelters, heavy-duty sectional doors, safety barriers, and energy-efficient lighting.

With our tailored solutions, businesses benefit from reduced downtime, improved worker safety, and seamless integration with existing warehouse infrastructure.`,
    icon: LoadingBayIcon,
    image: "/loading-bay-facilities.webp",
    faqs: [
      { question: "What are loading bay facilities in a warehouse?", answer: "Loading bay facilities are specialized areas designed for loading and unloading goods efficiently in warehouses and cold storage units." },
      { question: "What makes Ultratek Arabia a leading provider of loading bay facility solutions?", answer: "Ultratek Arabia offers high-performance, durable, and energy-efficient loading bay systems tailored for warehouses and cold storage." },
      { question: "Can loading bay systems be upgraded to meet modern warehouse standards?", answer: "Yes, older loading bays can be upgraded with new dock levelers, LED lighting, safety bumpers, and energy-efficient doors." },
      { question: "Which loading bay equipment is best for heavy-duty warehouse operations?", answer: "Hydraulic dock levelers, industrial dock shelters, sectional doors, and anti-slip platforms." },
      { question: "Why do leading warehouses invest in advanced loading bay technology?", answer: "To boost loading speed, improve safety, enhance energy efficiency, reduce labor effort, and maintain reliable logistics workflow." },
      { question: "How do loading bay facilities enhance warehouse workflow and productivity?", answer: "By enabling faster, safer, and more organized loading and unloading, reducing delays and preventing bottlenecks." },
    ],
  },
  {
    id: "8",
    title: "Fire Fighting System",
    slug: "fire-fighting-system",
    name: "fire-fighting-system",
    shortDescription: "Automated suppression and detection to safeguard personnel and inventory.",
    fullDescription: `A fire fighting system is essential for protecting warehouses, cold storage facilities, and industrial operations from fire risks. Designed to address the unique challenges of low-temperature environments, insulation materials, and combustible goods, these systems provide top-level safety and ensure compliance with fire safety regulations.

The best firefighting solutions include automated sprinkler systems, fire hydrants, heat and smoke detectors, gas-based suppression systems, emergency alarms, and monitoring solutions.

As a leading provider, Ultratek Arabia offers fully customized firefighting systems tailored to each facility's size, layout, and operational requirements.`,
    icon: FireSuppressionIcon,
    image: "/fire-fighting-system.webp",
    faqs: [
      { question: "What types of fire fighting systems are best for warehouses?", answer: "Sprinkler systems, fire hydrants, gas-based suppression systems, smoke and heat detectors, alarms, and emergency lighting." },
      { question: "How quickly should a fire fighting system respond in case of a fire?", answer: "Leading fire systems detect fire within seconds and activate suppression mechanisms immediately." },
      { question: "Can fire fighting systems protect both people and goods simultaneously?", answer: "Yes. Modern systems safeguard employees and protect goods by providing rapid containment and fire suppression." },
      { question: "Can fire fighting systems be monitored remotely?", answer: "Yes. Modern systems can be integrated with IoT and building management systems for remote monitoring." },
      { question: "How do emergency lighting and alarms integrate with fire fighting systems?", answer: "They guide personnel to safety, trigger suppression systems, and communicate with building management." },
      { question: "What factors make a fire fighting system the best choice for industrial warehouses?", answer: "Fast detection, reliable suppression, energy-efficient operation, compliance with safety standards, and durability." },
    ],
  },
  {
    id: "9",
    title: "Rack System and Equipment",
    slug: "rack-system-equipment",
    name: "rack-system-equipment",
    shortDescription: "Maximized storage efficiency with selective, drive-in, and cantilever solutions.",
    fullDescription: `A rack system and its equipment is essential for warehouses, cold storage units, and industrial facilities seeking maximum storage efficiency and operational safety. The right racking system ensures proper space utilization, easy accessibility, and streamlined material handling.

Ultratek Arabia, a leading provider of top-quality warehouse solutions, offers customized racking systems designed to meet diverse storage needs. Our offerings include selective pallet racks, push-back racks, drive-in racks, cantilever racks, and mezzanine platforms.

By integrating advanced racking solutions with forklifts, conveyors, and warehouse management systems, Ultratek Arabia helps businesses optimize storage capacity, improve workflow efficiency, and ensure safety.`,
    icon: RackSystemIcon,
    image: "/rack-system.webp",
    faqs: [
      { question: "What is a rack system and why is it important for warehouses?", answer: "A rack system is a structured storage solution that maximizes space utilization, organizes inventory, and ensures safe material handling." },
      { question: "How do rack systems improve operational efficiency?", answer: "By providing easy access to goods, reducing retrieval times, and supporting forklifts and conveyors." },
      { question: "Can rack systems be customized for cold storage?", answer: "Yes. Ultratek Arabia provides customized rack systems for cold storage, designed with corrosion-resistant materials." },
      { question: "How do rack systems contribute to energy efficiency in cold storage?", answer: "Efficient rack layouts improve airflow, reduce obstruction, and optimize space usage." },
      { question: "How long do Ultratek Arabia racking systems typically last?", answer: "With premium materials, expert installation, and proper maintenance, they can last 15–25 years." },
      { question: "Why are Ultratek Arabia rack systems considered a leading choice?", answer: "Ultratek Arabia combines top-quality materials, customized design, professional installation, and expert support." },
    ],
  },
];