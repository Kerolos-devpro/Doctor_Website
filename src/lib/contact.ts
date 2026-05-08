export const CONTACT = {
  phones: ["0568526883", "0172292222"],
  email: "info@doctor.example",
  location: "مستشفى أبها الخاص — أبها",
  workingDays: "السبت - الأحد - الاثنين",
  workingHours: "من 4 مساءً إلى 8 مساءً",
  social: {
    instagram: "https://www.instagram.com/zakialhifzi",
    x: "https://x.com/drzakialhifzi",
  },
} as const;

export function getWhatsAppNumberE164(): string {
  // KSA country code +966. Convert local "05xxxxxxxx" → "9665xxxxxxxx"
  const raw = CONTACT.phones[0] ?? "";
  const digits = raw.replace(/\D/g, "");
  if (digits.startsWith("966")) return digits;
  if (digits.startsWith("05")) return `966${digits.slice(1)}`;
  if (digits.startsWith("5")) return `966${digits}`;
  return digits;
}

export function getWhatsAppHref(): string {
  return `https://wa.me/${getWhatsAppNumberE164()}`;
}

