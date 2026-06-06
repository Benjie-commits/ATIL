export type ProjectStatus = "Active" | "Concept" | "Research" | "Award-Winning";
export type ProjectCategory =
  | "IoT/Energy"
  | "AgriTech"
  | "FinTech"
  | "AI/ML"
  | "Education"
  | "Software";

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  description: string;
  longDescription?: string;
  status: ProjectStatus;
  tags: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: "mokara",
    name: "MoKara",
    category: "IoT/Energy",
    description:
      "RFID-based portable prepaid electricity access system with USSD & Mobile Money integration — bringing pay-as-you-go energy to off-grid communities.",
    status: "Active",
    tags: ["RFID", "IoT", "USSD", "MoMo", "Embedded Systems"],
  },
  {
    id: "gpawa",
    name: "Gpawa",
    category: "FinTech",
    description:
      "Electricity-sharing wallet for smart prepaid meters featuring an AES STS token engine — enabling peer-to-peer energy credit transfers across households.",
    status: "Active",
    tags: ["FinTech", "STS Tokens", "Smart Meters", "AES Encryption"],
  },
  {
    id: "aflasure",
    name: "AflaSure",
    category: "AgriTech",
    description:
      "AI-powered aflatoxin risk prediction and parametric micro-insurance platform for smallholder maize farmers — protecting livelihoods against invisible crop threats.",
    status: "Concept",
    tags: ["AI/ML", "AgriTech", "Insurance", "Risk Prediction", "Maize"],
  },
  {
    id: "cbc-erp",
    name: "CBC Education ERP",
    category: "Education",
    description:
      "Offline-first, AI-assisted ERP for Ugandan schools targeting the full CBC assessment lifecycle — from learner registration to terminal reports.",
    status: "Active",
    tags: ["ERP", "Education", "Offline-First", "AI", "CBC"],
  },
  {
    id: "fieldcalc",
    name: "FieldCalc",
    category: "Software",
    description:
      "Offline engineering computation tool covering cable sizing and voltage drop calculations to ERA, IEC, and BS standards — built for field engineers.",
    status: "Active",
    tags: ["Engineering", "Offline", "ERA/IEC/BS", "Electrical"],
  },
  {
    id: "soroti-erp",
    name: "Soroti University ERP",
    category: "Software",
    description:
      "Comprehensive university ERP covering 13 modules — admissions, academics, finance, examinations, transcripts, and more — for Soroti University of Science and Technology.",
    status: "Active",
    tags: ["ERP", "University", "Education", "Finance", "Academics"],
  },
  {
    id: "ateso-nmt",
    name: "English–Ateso NMT",
    category: "AI/ML",
    description:
      "Neural machine translation system for the Ateso language using an mT5 transformer — preserving and digitising a language spoken by over 1.6 million Ugandans.",
    status: "Research",
    tags: ["NLP", "mT5", "Translation", "Ateso", "Low-Resource Languages"],
  },
  {
    id: "fruit-sorter",
    name: "Fruit Sorting AI",
    category: "AI/ML",
    description:
      "Industrial computer-vision fruit quality sorter powered by deep learning — awarded 1st place at Hackathon 4.0+, demonstrating AI-driven post-harvest solutions.",
    status: "Award-Winning",
    tags: ["Computer Vision", "Deep Learning", "AgriTech", "Industry 4.0"],
  },
];

export const filterCategories = [
  "All",
  "IoT/Energy",
  "AgriTech",
  "FinTech",
  "AI/ML",
  "Education",
  "Software",
] as const;

export type FilterCategory = (typeof filterCategories)[number];
