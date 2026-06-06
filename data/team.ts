export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo?: string;
  linkedin?: string;
  github?: string;
  skills: string[];
}

// Additional team members to be added — placeholder slots shown as ghost cards in the UI
export const team: TeamMember[] = [
  {
    id: "benjamin",
    name: "Ssentongo Joshua Benjamin",
    role: "Co-Founder & Software Engineer",
    bio: "Software engineer specialising in full-stack development, enterprise systems architecture, and scalable backend services. Co-founded Arapai Technologies to build institution-grade digital infrastructure for Uganda and beyond.",
    photo: "/team-benjamin.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    skills: ["Full-Stack Development", "Enterprise Systems", "Backend Architecture"],
  },
];

export const openPositions = 2; // Number of ghost "Join Our Team" cards to render
