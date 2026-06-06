"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { company } from "@/data/company";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hex-grid-bg"
      style={{ background: "var(--brand-bg)" }}
    >
      {/* Radial glow behind content */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 42%, rgba(27,58,107,0.35) 0%, transparent 70%)",
        }}
      />

      {/* Gold top accent glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] blur-sm"
        style={{ background: "linear-gradient(90deg, transparent, var(--brand-accent), transparent)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6 pt-20">
        {/* Eyebrow label */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="h-px w-12"
            style={{ background: "var(--brand-accent)" }}
          />
          <span
            className="font-mono text-xs tracking-[0.3em] uppercase"
            style={{ color: "var(--brand-accent)" }}
          >
            Arapai Technologies International Ltd
          </span>
          <span
            className="h-px w-12"
            style={{ background: "var(--brand-accent)" }}
          />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight"
          style={{ color: "var(--brand-text)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          Engineering the{" "}
          <span style={{ color: "var(--brand-accent)" }}>Future</span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium" style={{ color: "var(--brand-text-muted)" }}>
            From Africa
          </span>
        </motion.h1>

        {/* Sub-description */}
        <motion.p
          className="text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed"
          style={{ color: "var(--brand-text-muted)" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
        >
          {company.description}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mt-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.34 }}
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-base transition-all duration-200 glow-accent-hover"
            style={{
              background: "var(--brand-accent)",
              color: "var(--brand-bg)",
            }}
          >
            Explore Our Work
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-base transition-all duration-200"
            style={{
              border: "1px solid var(--brand-border)",
              color: "var(--brand-text)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            Get In Touch
          </Link>
        </motion.div>

        {/* Registration badge */}
        <motion.div
          className="flex items-center gap-2 mt-4 px-4 py-2 rounded-full"
          style={{
            border: "1px solid var(--brand-border)",
            background: "rgba(27,58,107,0.12)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "var(--brand-accent)" }} />
          <span className="font-mono text-[11px] tracking-wider" style={{ color: "var(--brand-text-muted)" }}>
            Registered in Uganda · URSB No. 80034917013941
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: "var(--brand-text-muted)" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={18} style={{ color: "var(--brand-accent)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
