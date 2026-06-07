export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  status: "Live" | "Beta" | "Research" | "Award-Winning";
  gradient: string;   // CSS gradient for card thumbnail (no product images yet)
  link?: string;
}

export const products: Product[] = [
  {
    id: "arapai-ai-assistant",
    name: "Arapai AI Assistant",
    tagline: "Your intelligent assistant for Africa",
    description:
      "Your intelligent assistant for information, automation, and decision support — trained on African contexts and deployed across web, mobile, and USSD interfaces.",
    category: "AI & ML",
    status: "Beta",
    gradient: "linear-gradient(135deg, #0F1E35 0%, #1B3A6B 60%, #0A1628 100%)",
  },
  {
    id: "llm-shepherd",
    name: "LLM Shepherd",
    tagline: "Domain-adapted language models",
    description:
      "Domain-adapted language models for African languages and contexts — fine-tuned on local datasets for healthcare, agriculture, legal, and education applications.",
    category: "AI & ML",
    status: "Research",
    gradient: "linear-gradient(135deg, #0A1628 0%, #152944 60%, #1B3A6B 100%)",
  },
  {
    id: "fruit-sorting-ai",
    name: "Fruit Sorting AI",
    tagline: "Computer vision quality sorter",
    description:
      "Computer vision system for quality grading and sorting of fruits — awarded 1st place at Hackathon 4.0+. Deployable on edge hardware for post-harvest processing facilities.",
    category: "Computer Vision",
    status: "Award-Winning",
    gradient: "linear-gradient(135deg, #1a2a0a 0%, #2d4a10 60%, #1a3a08 100%)",
  },
  {
    id: "university-erp",
    name: "University ERP",
    tagline: "Smart enterprise system",
    description:
      "Smart enterprise system for universities and educational institutions — covering 13 modules including admissions, academics, finance, examinations, and transcript generation.",
    category: "Enterprise Systems",
    status: "Live",
    gradient: "linear-gradient(135deg, #1a0a2a 0%, #2d1a4a 60%, #1a0a3a 100%)",
  },
  {
    id: "mokara",
    name: "Smart Electricity Access System",
    tagline: "Prepaid metering & energy management",
    description:
      "Embedded systems for prepaid metering and energy management — RFID-based portable electricity access with USSD, Mobile Money integration, and AES STS token engine.",
    category: "Energy Access Tech",
    status: "Live",
    gradient: "linear-gradient(135deg, #1a1a0a 0%, #3a3010 60%, #2a2008 100%)",
  },
];
