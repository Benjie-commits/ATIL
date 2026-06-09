"use client";
import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilter from "@/components/ProjectFilter";
import { projects, FilterCategory } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioContent() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* ── Hero band ─────────────────────────────────────────────────────── */}
      <section
        className="pt-32 pb-20 hex-grid-bg"
        style={{ background: "var(--brand-bg)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
          <SectionHeader
            label="Our Work"
            title="Project Portfolio"
            subtitle="Ten projects spanning energy, agriculture, finance, education, AI research, and enterprise software — plus two ongoing research papers."
          />
          <ProjectFilter active={activeFilter} onChange={setActiveFilter} />
        </div>
      </section>

      {/* ── Projects grid ─────────────────────────────────────────────────── */}
      <section
        className="py-20 md:py-24"
        style={{ background: "var(--brand-surface)", borderTop: "1px solid var(--brand-border)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeFilter}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p style={{ color: "var(--brand-text-muted)" }}>No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Stats callout ─────────────────────────────────────────────────── */}
      <section className="py-16" style={{ background: "var(--brand-bg)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="font-mono text-xs tracking-[0.25em] uppercase mb-4"
            style={{ color: "var(--brand-accent)" }}
          >
            By the Numbers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { n: "10", label: "Projects" },
              { n: "7", label: "Categories" },
              { n: "1st", label: "Hackathon Place" },
              { n: "1.6M+", label: "Speakers Reached (Ateso NMT)" },
            ].map(({ n, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <span
                  className="font-display text-3xl md:text-4xl font-bold"
                  style={{ color: "var(--brand-accent)" }}
                >
                  {n}
                </span>
                <span className="text-xs" style={{ color: "var(--brand-text-muted)" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
