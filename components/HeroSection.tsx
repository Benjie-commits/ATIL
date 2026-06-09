"use client";
import { useReducedMotion, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { company } from "@/data/company";

export default function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--ink)" }}
    >
      {/* ── Atmospheric glow — top-left ─────────────────────────────────── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-20%", left: "-10%",
          width: 900, height: 900,
          background: "radial-gradient(circle, rgba(201,168,76,0.10) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />
      {/* Ambient cool-navy glow — bottom-right counter-light */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-10%", right: "30%",
          width: 600, height: 600,
          background: "radial-gradient(circle, rgba(27,58,107,0.25) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* ── Architectural dot pattern ────────────────────────────────────── */}
      <div className="absolute inset-0 arch-pattern opacity-50 pointer-events-none" />

      {/* ── Full-height image panel — bleeds to right viewport edge ─────── */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[58%] pointer-events-none">
        <motion.div
          className="absolute inset-0"
          animate={reduce ? {} : { scale: [1, 1.03, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/logo-mockup.jpg"
            alt="Arapai Technologies International"
            fill
            className="object-cover object-center"
            priority
            sizes="60vw"
          />
        </motion.div>

        {/* Left feather — fades image into the dark canvas on the left */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, var(--ink) 0%, rgba(11,21,48,0.85) 18%, rgba(11,21,48,0.45) 42%, rgba(11,21,48,0.1) 68%, transparent 100%)",
          }}
        />
        {/* Top fade */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, var(--ink) 0%, transparent 18%)" }}
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to top, var(--canvas) 0%, transparent 30%)" }}
        />
        {/* Warm color-grade overlay — harmonises image with gold palette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(201,168,76,0.04)", mixBlendMode: "multiply" }}
        />
      </div>

      {/* ── Text content ─────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="min-h-screen flex items-center py-24">
          <div className="w-full lg:w-[46%] flex flex-col gap-7">

            {/* Eyebrow with pulsing gold dot */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                  style={{ background: "var(--gold)" }}
                />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "var(--gold)" }} />
              </span>
              <span
                className="font-mono text-[10px] tracking-[0.28em] uppercase"
                style={{ color: "var(--gold)" }}
              >
                — Arapai Technologies International
              </span>
            </motion.div>

            {/* Main headline — serif, mixed weight */}
            <div className="flex flex-col gap-0">
              <motion.h1
                className="font-display font-bold leading-[0.92] tracking-tight"
                style={{
                  fontSize: "clamp(3rem, 6.5vw, 5.25rem)",
                  color: "var(--text)",
                }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
              >
                Applied AI.
              </motion.h1>
              <motion.h1
                className="font-display font-bold italic leading-[0.92] tracking-tight"
                style={{
                  fontSize: "clamp(3rem, 6.5vw, 5.25rem)",
                  color: "var(--gold)",
                }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, delay: 0.22 }}
              >
                Intelligent Systems.
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              className="text-base md:text-lg leading-relaxed max-w-[52ch]"
              style={{ color: "var(--text-muted)" }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.38 }}
            >
              {company.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row items-start gap-3 mt-1"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.5 }}
            >
              <Link
                href="/services"
                className="btn-parchment inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm"
              >
                Explore Solutions <ArrowRight size={15} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200"
                style={{
                  border: "1px solid var(--border-soft)",
                  color: "var(--text)",
                  background: "transparent",
                }}
              >
                Learn About Us
              </Link>
            </motion.div>

            {/* Registration line */}
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--gold-deep)" }} />
              <span className="font-mono text-[9.5px] tracking-wider" style={{ color: "rgba(159,176,204,0.6)" }}>
                URSB Reg. No. {company.registrationNo} · Incorporated {company.registeredOn}, Uganda
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Scroll cue ───────────────────────────────────────────────────── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase" style={{ color: "rgba(159,176,204,0.45)" }}>
          scroll
        </span>
        <motion.div
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, rgba(201,168,76,0.5), transparent)" }}
          animate={reduce ? {} : { scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* ── Section bottom fade into canvas ─────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 z-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, var(--canvas))" }}
      />
    </section>
  );
}
