import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI & ML, embedded systems, enterprise ERPs, digital health, AgriTech, and industrial automation — built for African institutions.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
