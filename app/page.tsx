import HeroSection from "@/components/HeroSection";
import StatsBanner from "@/components/StatsBanner";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import { TeamCard } from "@/components/TeamCard";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { team } from "@/data/team";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  const featuredProjects = projects.slice(0, 4);
  const featuredServices = services.slice(0, 3);

  return (
    <>
      <HeroSection />
      <StatsBanner />

      {/* ── Services preview ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: "var(--brand-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <SectionHeader
              label="What We Build"
              title="Our Capabilities"
              subtitle="End-to-end technology solutions engineered for African institutions and industries."
              align="left"
            />
            <Link
              href="/services"
              className="flex items-center gap-2 text-sm font-semibold whitespace-nowrap self-start md:self-auto"
              style={{ color: "var(--brand-accent)" }}
            >
              All Services <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredServices.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio preview ─────────────────────────────────────────────── */}
      <section
        className="py-20 md:py-28"
        style={{ background: "var(--brand-surface)", borderTop: "1px solid var(--brand-border)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <SectionHeader
              label="Our Work"
              title="Featured Projects"
              subtitle="Real-world systems we have built — from smart energy meters to AI translation models."
              align="left"
            />
            <Link
              href="/portfolio"
              className="flex items-center gap-2 text-sm font-semibold whitespace-nowrap self-start md:self-auto"
              style={{ color: "var(--brand-accent)" }}
            >
              Full Portfolio <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredProjects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Team preview ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: "var(--brand-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <SectionHeader
              label="The Team"
              title="The People Behind Arapai"
              align="left"
            />
            <Link
              href="/team"
              className="flex items-center gap-2 text-sm font-semibold whitespace-nowrap self-start md:self-auto"
              style={{ color: "var(--brand-accent)" }}
            >
              Meet the Team <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-3xl">
            {team.map((member, i) => (
              <TeamCard key={member.id} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────────────────────────────── */}
      <section
        className="py-20 md:py-24 hex-grid-bg"
        style={{ background: "var(--brand-surface)", borderTop: "1px solid var(--brand-border)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <span
            className="font-mono text-xs tracking-[0.3em] uppercase"
            style={{ color: "var(--brand-accent)" }}
          >
            Work With Us
          </span>
          <h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ color: "var(--brand-text)" }}
          >
            Building something?
            <br />
            <span style={{ color: "var(--brand-accent)" }}>Let&apos;s talk.</span>
          </h2>
          <p className="text-base md:text-lg" style={{ color: "var(--brand-text-muted)" }}>
            Whether you need a custom embedded system, an AI platform, or an enterprise ERP — we build it.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md font-semibold text-base transition-all duration-200 glow-accent-hover"
            style={{ background: "var(--brand-accent)", color: "var(--brand-bg)" }}
          >
            Start a Conversation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
