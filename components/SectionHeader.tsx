"use client";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      className={`flex flex-col gap-3 ${alignClass} ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {label && (
        <span
          className="font-mono text-xs tracking-[0.25em] uppercase"
          style={{ color: "var(--brand-accent)" }}
        >
          {label}
        </span>
      )}
      <h2
        className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
        style={{ color: "var(--brand-text)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-base md:text-lg max-w-2xl leading-relaxed"
          style={{ color: "var(--brand-text-muted)" }}
        >
          {subtitle}
        </p>
      )}
      <div
        className="mt-1 h-[3px] w-16 rounded-full"
        style={{ background: "var(--brand-accent)" }}
      />
    </motion.div>
  );
}
