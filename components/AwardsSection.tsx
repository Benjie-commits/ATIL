"use client";
import { motion } from "framer-motion";
import { Trophy, Medal, Star, Globe } from "lucide-react";
import { awards } from "@/data/awards";
import SectionHeader from "@/components/SectionHeader";

const levelConfig = {
  International: { icon: Globe, color: "#C9A84C", bg: "rgba(201,168,76,0.12)" },
  National:      { icon: Medal, color: "#93c5fd", bg: "rgba(147,197,253,0.1)" },
  Regional:      { icon: Star,  color: "#0FC5BA", bg: "rgba(15,197,186,0.1)" },
};

interface AwardsSectionProps {
  compact?: boolean;
}

export default function AwardsSection({ compact = false }: AwardsSectionProps) {
  const displayed = compact ? awards.filter((a) => a.highlight) : awards;

  return (
    <section
      className={compact ? "py-16 md:py-20" : "py-20 md:py-24"}
      style={{
        background: "var(--brand-bg)",
        borderTop: "1px solid var(--brand-border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        <SectionHeader
          label="Recognition"
          title="Awards & Honours"
          subtitle="Recognition from national and international bodies validating Arapai's technical innovation."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayed.map((award, i) => {
            const cfg = levelConfig[award.level];
            const Icon = cfg.icon;
            return (
              <motion.div
                key={award.id}
                className="card-lift group flex flex-col gap-4 p-5 rounded-xl"
                style={{
                  background: "var(--brand-surface)",
                  border: "1px solid var(--brand-border)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                {/* Header row */}
                <div className="flex items-start justify-between gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: cfg.bg, border: `1px solid ${cfg.color}30` }}
                  >
                    <Icon size={18} style={{ color: cfg.color }} />
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span
                      className="font-mono text-[10px] tracking-wider px-2 py-0.5 rounded-full"
                      style={{ color: cfg.color, background: cfg.bg }}
                    >
                      {award.level}
                    </span>
                    <span
                      className="font-display text-2xl font-bold tabular-nums"
                      style={{ color: "rgba(201,168,76,0.3)" }}
                    >
                      {award.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 flex-1">
                  <h3
                    className="font-display text-sm font-bold leading-snug"
                    style={{ color: "var(--brand-text)" }}
                  >
                    {award.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--brand-text-muted)" }}>
                    {award.body}
                  </p>
                </div>

                {/* Category tag */}
                <span
                  className="font-mono text-[9px] tracking-wider px-2 py-0.5 rounded w-fit"
                  style={{
                    background: "rgba(27,58,107,0.3)",
                    color: "var(--brand-text-muted)",
                    border: "1px solid var(--brand-border)",
                  }}
                >
                  {award.category}
                </span>
              </motion.div>
            );
          })}
        </div>

        {compact && awards.length > displayed.length && (
          <div className="text-center">
            <span className="text-sm" style={{ color: "var(--brand-text-muted)" }}>
              + {awards.length - displayed.length} more awards
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
