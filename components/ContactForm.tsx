"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import { company } from "@/data/company";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}%0AEmail: ${form.email}%0A%0A${form.message}`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(form.subject)}&body=${body}`;
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    background: "rgba(27,58,107,0.12)",
    border: "1px solid var(--brand-border)",
    color: "var(--brand-text)",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    color: "var(--brand-text-muted)",
    fontSize: "0.75rem",
    fontFamily: "var(--font-space-mono, monospace)",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" style={labelStyle}>Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="px-4 py-3 rounded-lg text-sm transition-all duration-200 focus:ring-1"
            style={{
              ...inputStyle,
              "--tw-ring-color": "var(--brand-accent)",
            } as React.CSSProperties}
          />
        </div>
        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" style={labelStyle}>Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className="px-4 py-3 rounded-lg text-sm transition-all duration-200"
            style={inputStyle}
          />
        </div>
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" style={labelStyle}>Subject</label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          value={form.subject}
          onChange={handleChange}
          placeholder="Project enquiry / Partnership / Other"
          className="px-4 py-3 rounded-lg text-sm transition-all duration-200"
          style={inputStyle}
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" style={labelStyle}>Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your project or enquiry..."
          className="px-4 py-3 rounded-lg text-sm transition-all duration-200 resize-none"
          style={inputStyle}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold text-sm transition-all duration-200 glow-accent-hover"
        style={{
          background: sent ? "rgba(201,168,76,0.15)" : "var(--brand-accent)",
          color: sent ? "var(--brand-accent)" : "var(--brand-bg)",
          border: sent ? "1px solid var(--brand-accent)" : "none",
        }}
      >
        {sent ? (
          "Message prepared — check your email app"
        ) : (
          <>
            Send Message <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}
