import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

const siteFont = Tajawal({
  variable: "--font-site-sans",
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "د. هبة الشريف | جلدية وتجميل وليزر - حائل",
    template: "%s | د. هبة الشريف",
  },
  description:
    "الموقع الرسمي لد. هبة الشريف - اختصاصية جلدية وتجميل وليزر في حائل. معلومات عن الخدمات، التجارب والنتائج، والمدونة وطرق التواصل.",
  applicationName: "د. هبة الشريف",
  keywords: [
    "جلدية",
    "تجميل",
    "ليزر",
    "حائل",
    "السعودية",
    "حجز موعد",
    "استشارة طبية",
    "عيادة جلدية",
    "طبيبة جلدية",
  ],
  authors: [{ name: "د. هبة الشريف" }],
  creator: "د. هبة الشريف",
  publisher: "د. هبة الشريف",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ar",
    siteName: "د. هبة الشريف",
    title: "د. هبة الشريف | جلدية وتجميل وليزر - حائل",
    description:
      "الموقع الرسمي لد. هبة الشريف - اختصاصية جلدية وتجميل وليزر في حائل. معلومات عن الخدمات، التجارب والنتائج، والمدونة وطرق التواصل.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${siteFont.variable} h-full antialiased bg-background text-foreground`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
