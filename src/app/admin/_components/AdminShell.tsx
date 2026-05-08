"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

type NavItem = { href: string; label: string; icon: React.ReactNode };

export function AdminShell({
  title,
  subtitle,
  adminName,
  headerAction,
  children,
  logoutAction,
}: {
  title: string;
  subtitle?: string;
  adminName: string;
  headerAction?: React.ReactNode;
  children: React.ReactNode;
  logoutAction: () => void;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems: NavItem[] = useMemo(
    () => [
      { href: "/admin/dashboard", label: "لوحة التحكم", icon: <IconGrid /> },
      { href: "/admin/dashboard/blogs", label: "إدارة المدونات", icon: <IconFile /> },
      { href: "/admin/dashboard/blogs/create", label: "إضافة مقال", icon: <IconPlus /> },
      { href: "/", label: "العودة للموقع", icon: <IconArrowOut /> },
    ],
    []
  );

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background">
      <div className="container-page">
        <div className="grid gap-6 py-8 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="flex items-center justify-between lg:hidden">
              <div className="text-sm font-extrabold text-foreground">
                لوحة الأدمن
              </div>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-surface p-2.5 text-foreground shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-4"
                style={{ ["--tw-ring-color" as never]: "var(--ring-color)" }}
                onClick={() => setOpen((v) => !v)}
                aria-label="فتح قائمة الأدمن"
                aria-expanded={open}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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

            <div className={open ? "mt-4" : "mt-4 hidden lg:block"}>
              <div className="card p-5">
                <div className="text-sm font-extrabold text-foreground">
                  لوحة الأدمن
                </div>
                <div className="mt-1 text-sm text-muted">إدارة المحتوى (تجريبي)</div>

                <nav className="mt-4 grid gap-1" aria-label="روابط الأدمن">
                  {navItems.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={[
                          "flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-extrabold transition",
                          active
                            ? "bg-slate-100 text-foreground"
                            : "text-muted hover:bg-slate-50 hover:text-foreground",
                        ].join(" ")}
                        onClick={() => setOpen(false)}
                      >
                        <span className="text-foreground">{item.icon}</span>
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}

                  <form
                    action={logoutAction}
                    className="mt-2 border-t border-border pt-2"
                  >
                    <button
                      type="submit"
                      className="flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-extrabold text-foreground transition hover:bg-slate-50"
                    >
                      <IconLogout />
                      <span>تسجيل الخروج</span>
                    </button>
                  </form>
                </nav>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-9">
            <div className="card p-6 sm:p-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="text-sm font-semibold text-muted">
                    مرحبًا، {adminName}
                  </div>
                  <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                    {title}
                  </h1>
                  {subtitle ? (
                    <p className="mt-2 text-sm leading-7 text-muted">{subtitle}</p>
                  ) : null}
                </div>
                {headerAction ? <div>{headerAction}</div> : null}
              </div>

              <div className="mt-7">{children}</div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function IconGrid() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 4h7v7H4z" />
      <path d="M13 4h7v7h-7z" />
      <path d="M4 13h7v7H4z" />
      <path d="M13 13h7v7h-7z" />
    </svg>
  );
}

function IconFile() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
    </svg>
  );
}

function IconPlus() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

function IconArrowOut() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M21 14v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function IconLogout() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M10 17l5-5-5-5" />
      <path d="M15 12H3" />
      <path d="M21 3v18" />
    </svg>
  );
}

