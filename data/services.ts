export interface Service {
  id: string;
  title: string;
  icon: string;           // Lucide icon name
  description: string;
  highlights: string[];
}

export const services: Service[] = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning Systems",
    icon: "Brain",
    description:
      "We design and deploy custom AI models — from computer vision pipelines and NLP systems to predictive analytics engines. Our solutions are built for real African data environments, including low-resource languages and sparse datasets.",
    highlights: ["Custom Model Training", "NLP & Translation", "Predictive Analytics"],
  },
  {
    id: "iot-embedded",
    title: "Embedded Systems & IoT",
    icon: "Cpu",
    description:
      "From RFID readers and smart energy meters to industrial sensors, we develop firmware and hardware-software integration stacks that operate reliably in off-grid and low-infrastructure environments.",
    highlights: ["Firmware Development", "RFID & Smart Meters", "Off-Grid Deployment"],
  },
  {
    id: "erp-software",
    title: "Enterprise Software & ERPs",
    icon: "LayoutGrid",
    description:
      "Institution-grade ERP systems tailored for African universities, schools, hospitals, and government agencies. We build modular, offline-first systems that withstand unreliable connectivity and power.",
    highlights: ["Modular Architecture", "Offline-First Design", "Custom Workflows"],
  },
  {
    id: "digital-health",
    title: "Digital Health Solutions",
    icon: "Heart",
    description:
      "Technology platforms that extend healthcare access and improve patient outcomes across Uganda and East Africa — from digital records and telemedicine tools to public health data dashboards.",
    highlights: ["Patient Records", "Telemedicine Integration", "Health Analytics"],
  },
  {
    id: "agritech",
    title: "AgriTech Platforms",
    icon: "Leaf",
    description:
      "Data-driven platforms that connect smallholder farmers to risk prediction, market information, and financial services. We leverage remote sensing, AI, and mobile-first design to reach the last mile.",
    highlights: ["Risk Prediction", "Micro-Insurance", "Farmer Mobile Apps"],
  },
  {
    id: "industrial-automation",
    title: "Industrial Automation",
    icon: "Settings",
    description:
      "Industrial control systems, quality-sorting machines, and process automation solutions built for African manufacturing contexts — integrating computer vision, PLCs, and custom control software.",
    highlights: ["Computer Vision QA", "PLC Integration", "Process Control"],
  },
];
