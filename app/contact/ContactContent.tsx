"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Globe, ExternalLink } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";
import { company } from "@/data/company";

// Simplified Uganda outline SVG (stylised, not photorealistic)
function UgandaOutline() {
  return (
    <svg
      viewBox="0 0 200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[220px] opacity-60"
    >
      {/* Rough Uganda outline — stylised approximation */}
      <path
        d="M80 20 L110 18 L130 30 L145 50 L150 75 L148 100 L155 120 L145 145 L130 165 L110 180 L90 190 L70 182 L55 165 L45 145 L40 120 L42 95 L50 70 L55 48 L65 30 Z"
        stroke="#C9A84C"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="rgba(27,58,107,0.15)"
      />
      {/* Victoria Lake indicator */}
      <ellipse cx="138" cy="170" rx="22" ry="14" fill="rgba(27,58,107,0.4)" stroke="#1B3A6B" strokeWidth="1" />
      <text x="125" y="174" fontSize="7" fill="#7B9BC4" fontFamily="monospace">L. Victoria</text>
      {/* Soroti marker */}
      <circle cx="105" cy="105" r="4" fill="#C9A84C" />
      <circle cx="105" cy="105" r="8" fill="none" stroke="#C9A84C" strokeWidth="1" strokeDasharray="2 2">
        <animate attributeName="r" values="4;14" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="112" y="109" fontSize="8" fill="#C9A84C" fontFamily="monospace" fontWeight="bold">Soroti</text>
      <circle cx="85" cy="155" r="3" fill="#7B9BC4" />
      <text x="91" y="159" fontSize="7" fill="#7B9BC4" fontFamily="monospace">Kampala</text>
    </svg>
  );
}

export default function ContactContent() {
  return (
    <>
      {/* ── Hero band ─────────────────────────────────────────────────────── */}
      <section
        className="pt-32 pb-20 hex-grid-bg"
        style={{ background: "var(--brand-bg)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Work With Us"
            title="Building something? Let's talk."
            subtitle="Whether it's a custom system, a research partnership, or an enterprise deployment — we want to hear from you."
          />
        </div>
      </section>

      {/* ── Two-column layout ─────────────────────────────────────────────── */}
      <section
        className="py-20 md:py-24"
        style={{ background: "var(--brand-surface)", borderTop: "1px solid var(--brand-border)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact form */}
            <motion.div
              className="flex flex-col gap-6"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h2
                  className="font-display text-xl font-bold mb-2"
                  style={{ color: "var(--brand-text)" }}
                >
                  Send us a message
                </h2>
                <p className="text-sm" style={{ color: "var(--brand-text-muted)" }}>
                  We read every message and respond within 48 hours.
                </p>
              </div>
              <ContactForm />
            </motion.div>

            {/* Contact info card */}
            <motion.div
              className="flex flex-col gap-6"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Info card */}
              <div
                className="flex flex-col gap-5 p-6 rounded-xl"
                style={{
                  background: "var(--brand-bg)",
                  border: "1px solid var(--brand-border)",
                }}
              >
                <h3
                  className="font-display text-base font-semibold"
                  style={{ color: "var(--brand-text)" }}
                >
                  Contact Information
                </h3>

                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: company.email,
                    href: `mailto:${company.email}`,
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: company.location,
                    href: undefined,
                  },
                  {
                    icon: Globe,
                    label: "LinkedIn",
                    value: "Joseph Walusimbi",
                    href: company.linkedin,
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}
                    >
                      <Icon size={15} style={{ color: "var(--brand-accent)" }} />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span
                        className="font-mono text-[10px] tracking-wider uppercase"
                        style={{ color: "var(--brand-text-muted)" }}
                      >
                        {label}
                      </span>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm flex items-center gap-1 hover:opacity-75 transition-opacity"
                          style={{ color: "var(--brand-text)" }}
                        >
                          {value}
                          {href.startsWith("http") && <ExternalLink size={11} />}
                        </a>
                      ) : (
                        <span className="text-sm" style={{ color: "var(--brand-text)" }}>{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Uganda map placeholder */}
              <div
                className="flex flex-col items-center gap-3 p-6 rounded-xl"
                style={{
                  background: "var(--brand-bg)",
                  border: "1px solid var(--brand-border)",
                }}
              >
                <p
                  className="font-mono text-[10px] tracking-widest uppercase self-start"
                  style={{ color: "var(--brand-text-muted)" }}
                >
                  Based in Uganda, East Africa
                </p>
                <UgandaOutline />
              </div>

              {/* Registration quick card */}
              <div
                className="p-4 rounded-xl"
                style={{
                  background: "rgba(27,58,107,0.12)",
                  border: "1px solid var(--brand-border)",
                }}
              >
                <p
                  className="font-mono text-[10px] tracking-wider uppercase mb-2"
                  style={{ color: "var(--brand-accent)" }}
                >
                  Legal Identity
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--brand-text-muted)" }}>
                  {company.legalName} &mdash; Reg. No. {company.registrationNo}
                  <br />
                  Incorporated {company.registeredOn} · {company.authority}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
