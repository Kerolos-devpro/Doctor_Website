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
    default: "د. زكي الحفظي | استشاري جراحة العظام والمفاصل - أبها",
    template: "%s | د. زكي الحفظي",
  },
  description:
    "الموقع الرسمي للدكتور زكي الحفظي (Dr. Zaki Al-Hafzi) — استشاري جراحة العظام والمفاصل وأورام العظام والعضلات في أبها. خبرة أكثر من 16 عاماً في استبدال المفاصل والركبة والورك وأورام العظام.",
  applicationName: "د. زكي الحفظي",
  keywords: [
    "عظام",
    "جراحة العظام",
    "مفاصل",
    "استبدال المفاصل",
    "الركبة",
    "الورك",
    "أورام العظام",
    "أورام العضلات",
    "أبها",
    "السعودية",
    "حجز موعد",
    "استشارة طبية",
    "استشاري عظام",
    "دكتور عظام أبها",
  ],
  authors: [{ name: "د. زكي الحفظي" }],
  creator: "د. زكي الحفظي",
  publisher: "د. زكي الحفظي",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ar",
    siteName: "د. زكي الحفظي",
    title: "د. زكي الحفظي | استشاري جراحة العظام والمفاصل - أبها",
    description:
      "الموقع الرسمي للدكتور زكي الحفظي (Dr. Zaki Al-Hafzi) — استشاري جراحة العظام والمفاصل وأورام العظام والعضلات في أبها. خبرة أكثر من 16 عاماً في استبدال المفاصل والركبة والورك وأورام العظام.",
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
