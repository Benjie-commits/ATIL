"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { company } from "@/data/company";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--brand-bg)" }}
    >
      {/* Subtle hex grid overlay */}
      <div className="absolute inset-0 hex-grid-bg opacity-60 pointer-events-none" />
      {/* Section bottom fade — hero bleeds into partners */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, transparent, var(--brand-bg))" }}
      />

      {/* Radial glow left (where headline is) */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(27,58,107,0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-6rem)]">

          {/* ── Left: Text content ──────────────────────────────────────── */}
          <div className="flex flex-col gap-6 lg:gap-7">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="font-mono text-xs tracking-[0.3em] uppercase px-3 py-1 rounded-full"
                style={{
                  color: "var(--brand-accent)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  background: "rgba(201,168,76,0.06)",
                }}
              >
                Arapai Technologies International
              </span>
            </motion.div>

            {/* Main headline — "Applied AI.\nIntelligent Systems.\nReal Impact." */}
            <div className="flex flex-col gap-1">
              {company.heroHeadline.map((line, i) => {
                const isAccent = i === company.heroHeadline.length - 1;
                return (
                  <motion.h1
                    key={line}
                    className="font-display font-extrabold leading-[1.05] tracking-tight"
                    style={{
                      fontSize: "clamp(2.4rem, 5vw, 4rem)",
                      color: isAccent ? "var(--brand-accent)" : "var(--brand-text)",
                    }}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
                  >
                    {line}
                  </motion.h1>
                );
              })}
            </div>

            {/* Description */}
            <motion.p
              className="text-base md:text-lg leading-relaxed max-w-xl"
              style={{ color: "var(--brand-text-muted)" }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.38 }}
            >
              {company.description}
            </motion.p>

            {/* CTA row */}
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-2"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.5 }}
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm transition-all duration-200 glow-accent-hover"
                style={{ background: "var(--brand-accent)", color: "var(--brand-bg)" }}
              >
                Explore Solutions <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm transition-all duration-200"
                style={{
                  border: "1px solid rgba(245,241,232,0.2)",
                  color: "var(--brand-text)",
                  background: "transparent",
                }}
              >
                Learn About Us
              </Link>
            </motion.div>

            {/* Registration badge */}
            <motion.div
              className="flex items-center gap-2 mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--brand-accent)" }} />
              <span className="font-mono text-[10px] tracking-wider" style={{ color: "var(--brand-text-muted)" }}>
                URSB Reg. No. 80034917013941 · Incorporated 2026, Uganda
              </span>
            </motion.div>
          </div>

          {/* ── Right: Logo / brand visual ──────────────────────────────── */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Outer glow ring */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(201,168,76,0.12) 0%, transparent 65%)",
              }}
            />

            {/* Logo mockup image — no hard border, blends into dark bg */}
            <div className="relative w-full max-w-lg aspect-[4/3] overflow-hidden">
              <Image
                src="/logo-mockup.jpg"
                alt="Arapai Technologies International — office brand"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Left edge: fades image into the dark hero background */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to right, rgba(12,26,46,0.95) 0%, rgba(12,26,46,0.45) 30%, rgba(12,26,46,0.05) 65%, transparent 100%)",
                }}
              />
              {/* Bottom edge: dissolves into the section below */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 40%, rgba(12,26,46,0.55) 75%, rgba(12,26,46,0.9) 100%)",
                }}
              />
              {/* Subtle gold shimmer */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ boxShadow: "inset 0 0 0 1px rgba(201,168,76,0.15)" }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
