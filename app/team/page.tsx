import type { Metadata } from "next";
import TeamContent from "./TeamContent";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the engineers and innovators behind Arapai Technologies International Ltd.",
};

export default function TeamPage() {
  return <TeamContent />;
}
