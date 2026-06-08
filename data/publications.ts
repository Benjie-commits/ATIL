export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  doi?: string;
  url?: string;
  abstract?: string;
  tags: string[];
}

export const publications: Publication[] = [
  {
    id: "offline-llm-2026",
    title:
      "Offline-First Large Language Model Architecture for AI-Assisted Learning with Adaptive Response Levels in Low-Connectivity Environments",
    authors: "Joseph Walusimbi et al.",
    venue: "arXiv preprint",
    year: "2026",
    doi: "10.48550/arXiv.2603.03339",
    url: "https://doi.org/10.48550/arXiv.2603.03339",
    abstract:
      "Proposes an offline-first LLM architecture enabling adaptive AI-assisted learning in environments with unreliable or absent internet connectivity — directly relevant to educational deployments across Sub-Saharan Africa.",
    tags: ["LLM", "Offline AI", "Education", "Low-Connectivity"],
  },
  {
    id: "attendance-emotion-2026",
    title:
      "Integrating Attendance Tracking and Emotion Detection for Enhanced Student Engagement in Smart Classrooms",
    authors: "Joseph Walusimbi et al.",
    venue: "arXiv preprint",
    year: "2026",
    doi: "10.48550/arXiv.2601.08049",
    url: "https://doi.org/10.48550/arXiv.2601.08049",
    abstract:
      "Presents a multi-modal smart classroom system combining automated attendance tracking with real-time emotion detection to provide instructors with actionable student engagement data.",
    tags: ["Computer Vision", "Emotion Detection", "Smart Classroom", "Education AI"],
  },
];
