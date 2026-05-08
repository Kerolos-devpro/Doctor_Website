import Link from "next/link";

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
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="container-page">
        <div className="grid gap-10 py-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary text-white shadow-sm">
                <span className="text-base font-extrabold leading-none">د</span>
              </span>
              <div className="leading-tight">
                <div className="text-base font-extrabold text-foreground">
                  د. هبة الشريف
                </div>
                <div className="text-sm text-muted">جلدية وتجميل وليزر - حائل</div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted">
              د. هبة الشريف - اختصاصية جلدية وتجميل وليزر في حائل. نهدف لتقديم
              رعاية جلدية حديثة وتجربة مريحة للحجز والتواصل.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <SocialLink href="https://www.facebook.com" label="فيسبوك">
                <IconFacebook />
                <span className="not-sr-only">فيسبوك</span>
              </SocialLink>
              <SocialLink href="https://www.instagram.com" label="إنستجرام">
                <IconInstagram />
                <span className="not-sr-only">إنستجرام</span>
              </SocialLink>
              <SocialLink href="https://wa.me/0000000000" label="واتساب">
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
                <Link
                  className="text-muted hover:text-foreground"
                  href="/before-after"
                >
                  التجارب والنتائج
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
                <span>الهاتف: 0100 000 0000</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-foreground">
                  <IconMail />
                </span>
                <span>البريد: info@doctor.example</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-foreground">
                  <IconPin />
                </span>
                <span>العنوان: حائل، السعودية</span>
              </li>
            </ul>
            <div className="mt-5">
              <Link href="/book" className="btn-primary w-full sm:w-auto">
                احجز موعد
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-border py-6 text-sm text-muted sm:flex-row">
          <div>
            © {new Date().getFullYear()} د. هبة الشريف. جميع الحقوق محفوظة.
          </div>
        </div>
      </div>
    </footer>
  );
}

function IconFacebook() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.2-1.5 1.6-1.5H16.7V5.1c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.6-4.5 4.6V11H7v3h2.5v8h4z" />
    </svg>
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

