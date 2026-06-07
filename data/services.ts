export interface Service {
  id: string;
  title: string;
  icon: string;       // Lucide icon name
  shortTitle: string; // For nav dropdowns
  description: string;
  highlights: string[];
}

export const services: Service[] = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    shortTitle: "AI & ML",
    icon: "Brain",
    description:
      "Building predictive and generative AI systems for real-world impact — from custom model training to deployed inference pipelines tailored for African data environments.",
    highlights: ["Custom Model Training", "NLP & Translation", "Predictive Analytics"],
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    shortTitle: "Computer Vision",
    icon: "Eye",
    description:
      "Advanced vision systems for detection, recognition, and automation — applied across agriculture, manufacturing quality control, and document processing.",
    highlights: ["Object Detection", "Quality Inspection", "Document OCR"],
  },
  {
    id: "digital-health",
    title: "Digital Health",
    shortTitle: "Digital Health",
    icon: "Heart",
    description:
      "AI-powered tools for diagnosis, monitoring, and healthcare delivery — bridging the gap between clinical expertise and last-mile communities.",
    highlights: ["Patient Records", "Diagnostic AI", "Health Analytics"],
  },
  {
    id: "smart-agriculture",
    title: "Smart Agriculture",
    shortTitle: "Smart Agriculture",
    icon: "Leaf",
    description:
      "Intelligent solutions to improve productivity, quality, and food security for smallholder farmers — integrating AI, remote sensing, and mobile-first platforms.",
    highlights: ["Crop Risk Prediction", "Micro-Insurance", "Market Linkage"],
  },
  {
    id: "enterprise-systems",
    title: "Enterprise Systems",
    shortTitle: "Enterprise Systems",
    icon: "LayoutGrid",
    description:
      "Scalable software for institutions, universities, and enterprises — modular, offline-first ERPs and management systems designed for African infrastructure realities.",
    highlights: ["University ERPs", "Offline-First", "Custom Workflows"],
  },
  {
    id: "energy-access",
    title: "Energy Access Tech",
    shortTitle: "Energy Access Tech",
    icon: "Zap",
    description:
      "Innovative systems for reliable, affordable, and sustainable energy management — including prepaid metering, RFID access systems, and smart energy wallets.",
    highlights: ["Prepaid Metering", "RFID Access", "Energy Wallets"],
  },
];
