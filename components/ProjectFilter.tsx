"use client";
import { filterCategories, FilterCategory } from "@/data/projects";

interface ProjectFilterProps {
  active: FilterCategory;
  onChange: (cat: FilterCategory) => void;
}

export default function ProjectFilter({ active, onChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {filterCategories.map((cat) => {
        const isActive = cat === active;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className="font-mono text-xs tracking-widest uppercase px-4 py-2 rounded-md transition-all duration-200"
            style={{
              background: isActive ? "var(--brand-accent)" : "var(--brand-surface)",
              color: isActive ? "var(--brand-bg)" : "var(--brand-text-muted)",
              border: `1px solid ${isActive ? "var(--brand-accent)" : "var(--brand-border)"}`,
              fontWeight: isActive ? 700 : 400,
            }}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
