export type ProjectStatus = "Active" | "Concept" | "Research" | "Award-Winning";
export type ProjectCategory =
  | "IoT/Energy"
  | "AgriTech"
  | "FinTech"
  | "AI/ML"
  | "Education"
  | "Software"
  | "Research";

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
      "RFID card-based smart electricity access system that decouples energy balances from fixed meters — users carry their balance on a card, topping up via USSD or Mobile Money with no manual token entry. Recognised at national exhibitions and selected for the NCHE Gulu Innovation Showcase.",
    longDescription:
      "MoKara replaces the 20-digit token entry system used by Uganda's 1.7M+ prepaid electricity households. Balances are stored on RFID cards tied to portable user accounts — not to a specific meter. Users can relocate without losing purchased credit. Built on ESP32 microcontrollers with relay control, Django backend, USSD gateway, and MoMo API integration. Seeking EUR 150,000 for a 200-unit pilot in Soroti under the Digital Energy Challenge 2026.",
    status: "Active",
    tags: ["RFID", "IoT", "ESP32", "USSD", "MoMo", "Prepaid Energy", "Django"],
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
    id: "offline-llm",
    name: "Offline-First LLM for Education",
    category: "Research",
    description:
      "An offline-first Large Language Model architecture enabling adaptive AI-assisted learning in environments with unreliable or absent internet connectivity — designed for Sub-Saharan African education contexts.",
    longDescription:
      "Published on arXiv (2603.03339). Proposes a novel architecture that bundles a quantised LLM with an adaptive response tier system — switching between full, summarised, and cached responses based on connectivity state. Directly applicable to Ugandan school deployments where bandwidth is intermittent.",
    status: "Research",
    tags: ["LLM", "Offline AI", "Education", "Low-Connectivity", "arXiv"],
    link: "https://doi.org/10.48550/arXiv.2603.03339",
  },
  {
    id: "attendance-emotion",
    name: "Smart Classroom Attendance & Emotion AI",
    category: "Research",
    description:
      "Multi-modal smart classroom system combining automated attendance tracking with real-time emotion detection to give instructors actionable student engagement data.",
    longDescription:
      "Published on arXiv (2601.08049). Integrates face-recognition-based attendance with a convolutional emotion classifier running in real time. Provides per-session dashboards showing attention levels and emotional state distributions — enabling data-driven teaching adjustments.",
    status: "Research",
    tags: ["Computer Vision", "Emotion Detection", "Smart Classroom", "Education AI", "arXiv"],
    link: "https://doi.org/10.48550/arXiv.2601.08049",
  },
  {
    id: "fruit-sorter",
    name: "Fruit Sorting AI",
    category: "AI/ML",
    description:
      "DenseNet-based computer vision system for automated fruit quality grading and sorting, achieving 98.7% classification accuracy. Awarded Best AgriTech Project at Industry 4.0+ Hackathon and presented at EDIC.",
    longDescription:
      "Trained a DenseNet deep learning model on a custom fruit image dataset to classify quality grades with 98.7% accuracy. Integrated with an automated sorting workflow for deployment in post-harvest processing facilities. Demonstrated live at EDIC (Engineering Design Innovation Conference) and won Best AgriTech at the Industry 4.0+ Hackathon hosted by ABQ Cloud Launch.",
    status: "Award-Winning",
    tags: ["DenseNet", "Computer Vision", "98.7% Accuracy", "Post-Harvest", "EDIC"],
  },
];

export const filterCategories = [
  "All",
  "Research",
  "AI/ML",
  "IoT/Energy",
  "AgriTech",
  "FinTech",
  "Education",
  "Software",
] as const;

export type FilterCategory = (typeof filterCategories)[number];
