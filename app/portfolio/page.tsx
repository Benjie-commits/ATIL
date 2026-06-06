import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore Arapai Technologies' project portfolio — IoT energy systems, AI platforms, ERPs, and more.",
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
