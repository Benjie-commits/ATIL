export type MediaType = "News" | "Video" | "Exhibition" | "Social";

export interface MediaItem {
  id: string;
  type: MediaType;
  outlet: string;
  headline: string;
  description: string;
  date: string;
  url?: string;          // actual URL when available
  urlLabel?: string;
  tags: string[];
}

export const mediaItems: MediaItem[] = [
  {
    id: "daily-monitor-mokara",
    type: "News",
    outlet: "Daily Monitor",
    headline: "SmartKara: Uganda's Homegrown Solution for Prepaid Electricity Access",
    description:
      "Daily Monitor newspaper covers the MoKara / SmartKara RFID-based prepaid electricity access system — highlighting how the innovation decouples energy balances from fixed meters for mobile African households.",
    date: "2026",
    tags: ["MoKara", "Energy Access", "Print Media"],
  },
  {
    id: "edic-fruit-sorter",
    type: "Video",
    outlet: "EDIC — Engineering Design Innovation Conference",
    headline: "AI Fruit Quality Sorter Presentation — 98.7% Accuracy with DenseNet",
    description:
      "Live demonstration and presentation of the AI-powered fruit quality inspection and sorting system at EDIC. The DenseNet computer vision model achieved 98.7% classification accuracy, winning Best AgriTech Project at Industry 4.0+ Hackathon.",
    date: "2026",
    url: "https://www.youtube.com/",
    urlLabel: "Watch on YouTube",
    tags: ["Fruit Sorting AI", "Computer Vision", "Hackathon", "EDIC"],
  },
  {
    id: "soroti-university-media",
    type: "Social",
    outlet: "Soroti University",
    headline: "Arapai Technologies Recognised at University Innovation Showcase",
    description:
      "Soroti University media coverage of the Arapai Technologies team's innovation projects — including the MoKara energy system and AI research outputs from DaimariLab and ET4D Lab.",
    date: "2026",
    tags: ["Soroti University", "Research", "Innovation"],
  },
  {
    id: "nche-gulu-2026",
    type: "Exhibition",
    outlet: "NCHE National Innovation Exhibition — Gulu",
    headline: "MoKara Selected for National Exhibition — Commended for Market Fit",
    description:
      "MoKara selected to represent at the National Council for Higher Education innovation exhibition in Gulu. Judges commended originality and real-world market fit — recognition at the highest national academic innovation level.",
    date: "April 2026",
    tags: ["MoKara", "NCHE", "National Exhibition", "Gulu"],
  },
  {
    id: "innovation-consortium-medal",
    type: "Exhibition",
    outlet: "Innovation Consortium Uganda",
    headline: "Medal of Excellence — 2nd Runners Up (2025) & 1st Runners Up (2023)",
    description:
      "Back-to-back medals at the Innovation Consortium Uganda — judged by an expert panel of industry and academic leaders. Recognition for sustained technical innovation across multiple project cycles.",
    date: "2023 & 2025",
    tags: ["Innovation Consortium", "Medal", "Technology Innovation"],
  },
];
