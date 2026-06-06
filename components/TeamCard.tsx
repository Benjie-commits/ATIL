"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Globe, GitBranch, Plus } from "lucide-react";
import { TeamMember } from "@/data/team";

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export function TeamCard({ member, index }: TeamCardProps) {
  return (
    <motion.div
      className="card-lift group flex flex-col gap-4 p-6 rounded-xl"
      style={{
        background: "var(--brand-surface)",
        border: "1px solid var(--brand-border)",
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Photo */}
      <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-offset-2 ring-offset-brand-surface"
        style={{ boxShadow: "0 0 0 2px var(--brand-accent)" }}
      >
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            className="object-cover"
            sizes="80px"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center font-display text-2xl font-bold"
            style={{ background: "var(--brand-primary)", color: "var(--brand-accent)" }}
          >
            {member.name.charAt(0)}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1">
        <h3
          className="font-display text-base font-semibold"
          style={{ color: "var(--brand-text)" }}
        >
          {member.name}
        </h3>
        <p
          className="font-mono text-xs tracking-wider uppercase"
          style={{ color: "var(--brand-accent)" }}
        >
          {member.role}
        </p>
      </div>

      {/* Bio */}
      <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--brand-text-muted)" }}>
        {member.bio}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5">
        {member.skills.map((skill) => (
          <span
            key={skill}
            className="font-mono text-[9px] tracking-wider px-1.5 py-0.5 rounded"
            style={{
              background: "rgba(27,58,107,0.3)",
              color: "var(--brand-text-muted)",
              border: "1px solid var(--brand-border)",
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Social links */}
      <div className="flex items-center gap-2 pt-1" style={{ borderTop: "1px solid var(--brand-border)" }}>
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded transition-opacity hover:opacity-70"
            style={{ color: "var(--brand-text-muted)" }}
            aria-label="LinkedIn"
          >
            <Globe size={15} />
          </a>
        )}
        {member.github && (
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded transition-opacity hover:opacity-70"
            style={{ color: "var(--brand-text-muted)" }}
            aria-label="GitHub"
          >
            <GitBranch size={15} />
          </a>
        )}
      </div>
    </motion.div>
  );
}

interface GhostTeamCardProps {
  index: number;
}

export function GhostTeamCard({ index }: GhostTeamCardProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl min-h-[260px]"
      style={{
        border: "2px dashed var(--brand-border)",
        background: "rgba(27,58,107,0.04)",
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center"
        style={{ border: "2px dashed var(--brand-border)" }}
      >
        <Plus size={24} style={{ color: "var(--brand-text-muted)" }} />
      </div>
      <p
        className="font-display text-base font-semibold text-center"
        style={{ color: "var(--brand-text-muted)" }}
      >
        Join Our Team
      </p>
      <p className="text-sm text-center max-w-[180px]" style={{ color: "var(--brand-text-muted)" }}>
        We&apos;re looking for talented engineers and innovators.
      </p>
      <a
        href="mailto:mrjosephwalusimbi@gmail.com"
        className="font-mono text-xs tracking-wider uppercase px-3 py-1.5 rounded transition-all duration-200"
        style={{
          border: "1px solid var(--brand-accent)",
          color: "var(--brand-accent)",
        }}
      >
        Get In Touch
      </a>
    </motion.div>
  );
}
