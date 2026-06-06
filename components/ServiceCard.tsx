"use client";
import { motion } from "framer-motion";
import {
  Brain,
  Cpu,
  LayoutGrid,
  Heart,
  Leaf,
  Settings,
  LucideIcon,
} from "lucide-react";
import { Service } from "@/data/services";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Cpu,
  LayoutGrid,
  Heart,
  Leaf,
  Settings,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Settings;

  return (
    <motion.div
      className="card-lift group flex flex-col gap-4 p-6 rounded-xl cursor-default"
      style={{
        background: "var(--brand-surface)",
        border: "1px solid var(--brand-border)",
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      {/* Icon container */}
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-brand-accent"
        style={{
          background: "rgba(201,168,76,0.12)",
          border: "1px solid rgba(201,168,76,0.2)",
        }}
      >
        <Icon
          size={22}
          className="transition-colors duration-300"
          style={{ color: "var(--brand-accent)" }}
        />
      </div>

      {/* Title */}
      <h3
        className="font-display text-lg font-semibold leading-snug"
        style={{ color: "var(--brand-text)" }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--brand-text-muted)" }}>
        {service.description}
      </p>

      {/* Highlights */}
      <div className="flex flex-wrap gap-2 mt-1">
        {service.highlights.map((h) => (
          <span
            key={h}
            className="font-mono text-[10px] tracking-wider px-2 py-0.5 rounded"
            style={{
              background: "rgba(27,58,107,0.3)",
              color: "var(--brand-text-muted)",
              border: "1px solid var(--brand-border)",
            }}
          >
            {h}
          </span>
        ))}
      </div>

      {/* Gold border indicator on hover (shown via card-lift CSS) */}
    </motion.div>
  );
}
