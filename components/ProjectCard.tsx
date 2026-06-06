"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Trophy, Zap, FlaskConical, CheckCircle2 } from "lucide-react";
import { Project } from "@/data/projects";

const statusConfig: Record<
  Project["status"],
  { label: string; color: string; bg: string; Icon: React.ElementType }
> = {
  Active: {
    label: "Active",
    color: "#4ade80",
    bg: "rgba(74,222,128,0.1)",
    Icon: CheckCircle2,
  },
  Concept: {
    label: "Concept",
    color: "#93c5fd",
    bg: "rgba(147,197,253,0.1)",
    Icon: Zap,
  },
  Research: {
    label: "Research",
    color: "#c4b5fd",
    bg: "rgba(196,181,253,0.1)",
    Icon: FlaskConical,
  },
  "Award-Winning": {
    label: "Award-Winning",
    color: "#C9A84C",
    bg: "rgba(201,168,76,0.12)",
    Icon: Trophy,
  },
};

const categoryColors: Record<string, string> = {
  "IoT/Energy": "#60a5fa",
  AgriTech: "#4ade80",
  FinTech: "#a78bfa",
  "AI/ML": "#f472b6",
  Education: "#fb923c",
  Software: "#38bdf8",
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const status = statusConfig[project.status];
  const StatusIcon = status.Icon;
  const catColor = categoryColors[project.category] ?? "var(--brand-accent)";

  return (
    <motion.div
      className="card-lift group flex flex-col gap-4 p-5 rounded-xl"
      style={{
        background: "var(--brand-surface)",
        border: "1px solid var(--brand-border)",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.07 }}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-col gap-1.5">
          <h3
            className="font-display text-base font-semibold leading-tight"
            style={{ color: "var(--brand-text)" }}
          >
            {project.name}
          </h3>
          {/* Category badge */}
          <span
            className="font-mono text-[10px] tracking-wider px-2 py-0.5 rounded w-fit"
            style={{
              color: catColor,
              background: `${catColor}18`,
              border: `1px solid ${catColor}35`,
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Status pill */}
        <div
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full flex-shrink-0 text-[11px] font-medium"
          style={{ color: status.color, background: status.bg }}
        >
          <StatusIcon size={11} />
          {status.label}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--brand-text-muted)" }}>
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="font-mono text-[9px] tracking-wider px-1.5 py-0.5 rounded"
            style={{
              color: "var(--brand-text-muted)",
              background: "rgba(27,58,107,0.25)",
              border: "1px solid var(--brand-border)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Learn more link */}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs font-semibold mt-1 transition-opacity hover:opacity-75"
          style={{ color: "var(--brand-accent)" }}
        >
          Learn More <ArrowUpRight size={13} />
        </a>
      )}
    </motion.div>
  );
}
