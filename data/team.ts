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

export const team: TeamMember[] = [
  {
    id: "joseph",
    name: "Joseph Walusimbi",
    role: "Founder & CEO",
    bio: "Electronics and Computer Engineering student at Soroti University, AI researcher at DaimariLab and ET4D Lab, and technology entrepreneur. Author of peer-reviewed publications on AI architectures and intelligent systems. Led award-winning innovations spanning computer vision, embedded energy systems, offline AI, and AgriTech.",
    photo: "/team-joseph.jpg",
    linkedin: "https://www.linkedin.com/in/joseph-walusimbi-3041a8306/",
    github: "https://github.com/",
    skills: ["AI & Machine Learning", "Computer Vision", "Embedded Systems", "Research & Publications"],
  },
  {
    id: "benjamin",
    name: "Ssentongo Joshua Benjamin",
    role: "Co-Founder & Software Engineer",
    bio: "Software engineer specialising in full-stack development, enterprise systems architecture, and scalable backend services. Co-founded Arapai Technologies to build institution-grade digital infrastructure across Uganda and the wider African continent.",
    photo: "/team-benjamin.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    skills: ["Full-Stack Development", "Enterprise Systems", "Backend Architecture"],
  },
  {
    id: "roland",
    name: "Roland B. Mujungu",
    role: "Electrical Engineer",
    bio: "Lecturer at Soroti University's Department of Electronics and Computer Engineering. Brings deep expertise in power systems and embedded hardware to the MoKara energy access project and other hardware-intensive initiatives at Arapai.",
    photo: "/team-roland.png",
    linkedin: "https://www.linkedin.com/",
    skills: ["Power Systems", "Embedded Hardware", "Circuit Design", "Electronics"],
  },
  {
    id: "ann",
    name: "Dr. Ann Move Oguti",
    role: "PhD · Software Engineer & Researcher",
    bio: "Founder of the Emerging Technologies for Development (ET4D) Lab and Lecturer at Soroti University. Leads research on emerging technologies for underserved communities. PhD-level expertise in software architecture, intelligent systems, and technology-for-development contexts.",
    photo: "/team-ann.png",
    linkedin: "https://www.linkedin.com/",
    skills: ["Software Architecture", "Research Leadership", "ET4D", "Intelligent Systems"],
  },
];

export const openPositions = 2;
