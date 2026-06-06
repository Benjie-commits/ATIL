// Brand colour tokens extracted from the Arapai Technologies International logo.
// The logo uses a deep navy blue for the letterform outlines/text and a warm
// champagne gold for the ribbon accent stripes inside the "A" monogram.
// ALL colour references in the codebase must import from here — no raw hex values
// in component files or Tailwind config other than as references back to these tokens.

export const brand = {
  primary: "#1B3A6B",      // Deep navy blue  — logo outline / wordmark
  accent: "#C9A84C",       // Champagne gold  — logo ribbon accent stripes
  accentLight: "#E2C87A",  // Lighter gold    — hover tints, highlights
  accentDark: "#9E7C2A",   // Darker gold     — pressed states, borders

  bg: "#070E1B",           // Very dark navy  — derived from primary, darkened ~88%
  surface: "#0F1E35",      // Card surface    — slightly lighter than bg
  surfaceHover: "#152944", // Card hover      — interactive surface lift
  border: "#1B3A6B40",     // Primary @ 25%  — subtle card borders

  text: "#F5F1E8",         // Warm off-white  — primary body text on dark bg
  textMuted: "#7B9BC4",    // Muted blue      — secondary text, captions
  textDark: "#070E1B",     // Dark            — text on light/gold surfaces

  navBg: "#070E1BCC",      // Navbar bg       — bg at 80% opacity (backdrop-blur)
  navBgSolid: "#0A1428",   // Navbar scrolled — fully opaque
} as const;

export type BrandColors = typeof brand;
