import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Arapai Technologies International Ltd — project enquiries, partnerships, and more.",
};

export default function ContactPage() {
  return <ContactContent />;
}
