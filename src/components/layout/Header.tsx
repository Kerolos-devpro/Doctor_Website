"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type NavItem = { href: string; label: string };

export function Header() {
  const navItems: NavItem[] = useMemo(
    () => [
      { href: "/", label: "الرئيسية" },
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
              <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-2xl bg-primary text-white shadow-sm">
                <Image
                  src="/images/doctor.png"
                  alt="شعار د. زكي الحفظي"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-cover"
                  priority
                />
              </span>
              <div className="leading-tight">
                <div className="text-sm font-extrabold text-foreground">
                  د. زكي الحفظي
                </div>
                <div className="text-xs text-muted">
                  استشاري جراحة العظام والمفاصل - أبها
                </div>
              </div>
            </Link>
          </div>

          <nav className="hidden items-center gap-1 md:flex" aria-label="التنقل">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative rounded-xl px-3 py-2 text-sm font-semibold text-foreground/90 transition-all duration-300 ease-out hover:text-primary"
              >
                {item.label}
                <span className="pointer-events-none absolute inset-x-3 -bottom-0.5 h-0.5 origin-center scale-x-0 rounded-full bg-primary/80 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="btn-accent hidden sm:inline-flex transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-md"
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

      <AnimatePresence>
        {open ? (
          <div className="md:hidden">
            <motion.div
              className="fixed inset-0 z-40 bg-slate-900/30"
              onClick={() => setOpen(false)}
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.div
              id="mobile-menu"
              className="fixed inset-x-0 top-16 z-50 border-b border-border bg-surface shadow-lg"
              role="dialog"
              aria-label="قائمة التنقل"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="container-page py-4">
                <div className="grid gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-xl px-3 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 ease-out hover:bg-slate-50"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    className="btn-accent mt-2 w-full transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-md"
                    onClick={() => setOpen(false)}
                  >
                    احجز موعد
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

