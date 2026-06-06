import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import { company } from "@/data/company";
import { motion } from "framer-motion";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${company.name} — our mission, story, and registration details.`,
};

export default function AboutPage() {
  return <AboutContent />;
}
