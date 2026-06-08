export interface Award {
  id: string;
  year: string;
  title: string;
  body: string;      // awarding organization
  category: string;
  level: "International" | "National" | "Regional";
  highlight?: boolean;
}

export const awards: Award[] = [
  {
    id: "agritech-hackathon-2026",
    year: "2026",
    title: "Best AgriTech Project",
    body: "Industry 4.0+ Hackathon, ABQ Cloud Launch",
    category: "AgriTech / AI",
    level: "National",
    highlight: true,
  },
  {
    id: "bean-challenge-2026",
    year: "2026",
    title: "7th of 49 Teams — Bean Flowering Detection Challenge",
    body: "AI4EAC Innovation Challenge, Alliance of Bioversity International & CIAT",
    category: "AI & Machine Learning",
    level: "International",
    highlight: true,
  },
  {
    id: "innovation-consortium-2025",
    year: "2025",
    title: "Medal of Excellence — 2nd Runners Up",
    body: "Innovation Consortium Uganda",
    category: "Technology Innovation",
    level: "National",
    highlight: true,
  },
  {
    id: "innovation-consortium-2023",
    year: "2023",
    title: "Medal of Excellence — 1st Runners Up",
    body: "Innovation Consortium Uganda",
    category: "Technology Innovation",
    level: "National",
  },
  {
    id: "best-essay-2023",
    year: "2023",
    title: "Best Essay Award",
    body: "SASTCE — The Impact of AI and ML in the Oil and Gas Industry",
    category: "Research Writing",
    level: "National",
  },
  {
    id: "entrepreneurship-2021",
    year: "2021",
    title: "Be A Millionaire Entrepreneurship Award",
    body: "Nile Breweries Limited",
    category: "Entrepreneurship",
    level: "National",
  },
];
