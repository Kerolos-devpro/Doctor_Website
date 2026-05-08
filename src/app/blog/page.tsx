"use client";

import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blogs";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/animations/SectionReveal";
import { StaggerContainer } from "@/components/animations/StaggerContainer";

export default function BlogPage() {
  const posts = blogPosts
    .filter((p) => p.published)
    .slice()
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  const categories = Array.from(new Set(posts.map((p) => p.category))).sort(
    (a, b) => a.localeCompare(b, "ar")
  );

  const latest = posts.slice(0, 4);

  return (
    <section className="section">
      <div className="container-page">
        <SectionReveal duration={0.6} y={14}>
          <h1 className="section-title">المدونة الطبية</h1>
          <p className="section-subtitle">
            مقالات ونصائح صحية موثوقة تساعدك على فهم أساسيات العناية بصحة العظام
            والمفاصل واتخاذ قرارات أفضل.
          </p>
        </SectionReveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-8">
            <StaggerContainer
              className="grid gap-4 sm:grid-cols-2"
              staggerChildren={0.08}
              delayChildren={0.05}
              duration={0.6}
            >
              {posts.map((post) => (
                <motion.article
                  key={post.id}
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className="group card card-hover overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={1200}
                      height={750}
                      className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute left-3 top-3">
                      <span className="badge-primary">{post.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-semibold text-muted">
                      {formatArabicDate(post.createdAt)}
                    </div>
                    <h2 className="mt-2 text-base font-extrabold leading-7 text-foreground">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      {post.excerpt}
                    </p>
                    <div className="mt-4">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-extrabold text-primary transition-all duration-300 ease-out hover:gap-3 hover:text-secondary"
                      >
                        اقرأ المزيد
                        <span className="transition-transform duration-300 ease-out group-hover:-translate-x-0.5">
                          <ArrowIcon />
                        </span>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </StaggerContainer>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-20 space-y-4">
              <SectionReveal duration={0.55} y={12}>
                <div className="card p-6">
                  <div className="text-sm font-extrabold text-foreground">بحث</div>
                  <div className="mt-4">
                    <input
                      type="search"
                      placeholder="ابحث في المقالات (شكلي)"
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 focus-visible:ring-4"
                      style={{ ["--tw-ring-color" as never]: "var(--ring-color)" }}
                    />
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal duration={0.55} y={12} delay={0.05}>
                <div className="card p-6">
                  <div className="text-sm font-extrabold text-foreground">
                    التصنيفات
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {categories.map((c) => (
                      <span key={c} className="badge-primary">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal duration={0.55} y={12} delay={0.1}>
                <div className="card p-6">
                  <div className="text-sm font-extrabold text-foreground">
                    أحدث المقالات
                  </div>
                  <div className="mt-4 grid gap-3">
                    {latest.map((p) => (
                      <Link
                        key={p.id}
                        href={`/blog/${p.slug}`}
                        className="rounded-2xl border border-border bg-background px-4 py-3 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-sm"
                      >
                        <div className="text-xs font-semibold text-muted">
                          {formatArabicDate(p.createdAt)}
                        </div>
                        <div className="mt-1 text-sm font-extrabold text-foreground">
                          {p.title}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function formatArabicDate(isoDate: string) {
  try {
    const d = new Date(isoDate);
    return d.toLocaleDateString("ar-SA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return isoDate;
  }
}

function ArrowIcon() {
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
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

