import Link from "next/link";
import Image from "next/image";
import { CONTACT, getWhatsAppHref } from "@/lib/contact";

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-muted transition hover:bg-slate-50 hover:text-foreground focus-visible:outline-none focus-visible:ring-4"
      style={{ ["--tw-ring-color" as never]: "var(--ring-color)" }}
      aria-label={label}
    >
      {children}
      <span className="sr-only">{label}</span>
    </a>
  );
}

export function Footer() {
  const whatsappHref = getWhatsAppHref();
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="container-page">
        <div className="grid gap-10 py-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-2xl bg-primary text-white shadow-sm">
                <Image
                  src="/images/doctor.png"
                  alt="شعار د. زكي الحفظي"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-cover"
                />
              </span>
              <div className="leading-tight">
                <div className="text-base font-extrabold text-foreground">
                  د. زكي الحفظي
                </div>
                <div className="text-sm text-muted">
                  استشاري جراحة العظام والمفاصل - أبها
                </div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted">
              استشاري معتمد في جراحة العظام والمفاصل وأورام العظام والعضلات.
              خبرة أكثر من 16 عاماً في جراحة استبدال المفاصل والركبة والورك.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <SocialLink href={CONTACT.social.instagram} label="إنستجرام">
                <IconInstagram />
                <span className="not-sr-only">إنستجرام</span>
              </SocialLink>
              <SocialLink href={CONTACT.social.x} label="X">
                <IconX />
                <span className="not-sr-only">X</span>
              </SocialLink>
              <SocialLink href={whatsappHref} label="واتساب">
                <IconWhatsapp />
                <span className="not-sr-only">واتساب</span>
              </SocialLink>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-sm font-extrabold text-foreground">
              خريطة الموقع
            </div>
            <ul className="mt-4 grid gap-2 text-sm">
              <li>
                <Link className="text-muted hover:text-foreground" href="/">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link className="text-muted hover:text-foreground" href="/cv">
                  السيرة الذاتية
                </Link>
              </li>
              <li>
                <Link className="text-muted hover:text-foreground" href="/blog">
                  المدونة
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted hover:text-foreground"
                  href="/contact"
                >
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-sm font-extrabold text-foreground">
              بيانات التواصل
            </div>
            <ul className="mt-4 grid gap-2 text-sm text-muted">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-foreground">
                  <IconPhone />
                </span>
                <span>الحجز: {CONTACT.phones[0]}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-foreground">
                  <IconPhone />
                </span>
                <span>الهاتف: {CONTACT.phones[1]}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-foreground">
                  <IconMail />
                </span>
                <span>البريد: {CONTACT.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-foreground">
                  <IconPin />
                </span>
                <span>الموقع: {CONTACT.location}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-foreground">
                  <IconClock />
                </span>
                <span>
                  مواعيد العمل: {CONTACT.workingDays} — {CONTACT.workingHours}
                </span>
              </li>
            </ul>
            <div className="mt-5">
              <Link href="/contact" className="btn-primary w-full sm:w-auto">
                احجز موعد
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-border py-6 text-sm text-muted sm:flex-row">
          <div>
            © {new Date().getFullYear()} د. زكي الحفظي. جميع الحقوق محفوظة.
          </div>
        </div>
      </div>
    </footer>
  );
}

function IconInstagram() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="M16 11.4a4 4 0 1 1-7.9 1.2 4 4 0 0 1 7.9-1.2z" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

function IconX() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2H21l-6.02 6.88L22 22h-6.31l-4.94-7.18L4.62 22H2l6.55-7.49L2 2h6.46l4.47 6.52L18.244 2Zm-1.11 18h1.53L7.74 3.91H6.1L17.134 20Z" />
    </svg>
  );
}

function IconWhatsapp() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 11.5a8 8 0 0 1-12.8 6.3L4 20l2.3-3.2A8 8 0 1 1 20 11.5z" />
      <path d="M9.5 9.2c.2-.5.5-.5.8-.5h.6c.2 0 .4.1.5.4l.7 1.7c.1.3.1.6-.1.8l-.5.6c-.2.2-.2.5 0 .7.6.9 1.4 1.7 2.3 2.3.2.1.5.1.7 0l.6-.5c.2-.2.5-.2.8-.1l1.7.7c.3.1.4.3.4.5v.6c0 .3 0 .6-.5.8-.5.2-1.7.6-3.6-.2-2-.8-3.8-2.6-4.6-4.6-.8-1.9-.4-3.1-.2-3.6z" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.6 19.6 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.8.3 1.5.6 2.2a2 2 0 0 1-.4 2.1L8.1 9.2a16 16 0 0 0 6.7 6.7l1.2-1.2a2 2 0 0 1 2.1-.4c.7.3 1.4.5 2.2.6a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 4h16v16H4z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10z" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s7-5.2 7-12a7 7 0 0 0-14 0c0 6.8 7 12 7 12z" />
      <path d="M12 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
    </svg>
  );
}

