"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type NavItem = { href: string; label: string };

export function Header() {
  const navItems: NavItem[] = useMemo(
    () => [
      { href: "/", label: "الرئيسية" },
      { href: "/before-after", label: "التجارب والنتائج" },
      { href: "/cv", label: "السيرة الذاتية" },
      { href: "/blog", label: "المدونة" },
      { href: "/contact", label: "تواصل معنا" },
    ],
    []
  );

  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container-page">
        <div className="flex h-16 items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-4"
              style={{ ["--tw-ring-color" as never]: "var(--ring-color)" }}
              aria-label="العودة إلى الصفحة الرئيسية"
            >
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary text-white shadow-sm">
                <span className="text-base font-extrabold leading-none">د</span>
              </span>
              <div className="leading-tight">
                <div className="text-sm font-extrabold text-foreground">
                  د. هبة الشريف
                </div>
                <div className="text-xs text-muted">جلدية وتجميل وليزر - حائل</div>
              </div>
            </Link>
          </div>

          <nav className="hidden items-center gap-1 md:flex" aria-label="التنقل">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 text-sm font-semibold text-foreground/90 transition hover:bg-slate-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/book"
              className="btn-accent hidden sm:inline-flex"
              aria-label="احجز موعد"
            >
              احجز موعد
            </Link>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-surface p-2.5 text-foreground shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-4 md:hidden"
              style={{ ["--tw-ring-color" as never]: "var(--ring-color)" }}
              onClick={() => setOpen((v) => !v)}
              aria-label="فتح القائمة"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                {open ? (
                  <path d="M18 6 6 18M6 6l12 12" />
                ) : (
                  <>
                    <path d="M4 6h16" />
                    <path d="M4 12h16" />
                    <path d="M4 18h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div className="md:hidden">
          <div
            className="fixed inset-0 z-40 bg-slate-900/30"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-menu"
            className="fixed inset-x-0 top-16 z-50 border-b border-border bg-surface shadow-lg"
            role="dialog"
            aria-label="قائمة التنقل"
          >
            <div className="container-page py-4">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-3 py-2.5 text-sm font-semibold text-foreground transition hover:bg-slate-50"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/book"
                  className="btn-accent mt-2 w-full"
                  onClick={() => setOpen(false)}
                >
                  احجز موعد
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

