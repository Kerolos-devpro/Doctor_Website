"use client";

import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blogs";

export function BlogsTable({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid gap-4">
      {/* NOTE: Demo-only actions. Delete is a placeholder until DB wiring. */}
      {/* Mobile: cards */}
      <div className="grid gap-4 md:hidden">
        {posts.map((p) => (
          <div key={p.id} className="card overflow-hidden">
            <div className="relative aspect-[16/9] bg-slate-100">
              <Image
                src={p.image}
                alt={p.title}
                width={1200}
                height={675}
                className="h-full w-full object-cover"
                unoptimized
              />
              <div className="absolute left-3 top-3">
                <span className="badge-primary">{p.category}</span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="text-sm font-extrabold text-foreground">
                  {p.title}
                </div>
                <StatusBadge published={p.published} />
              </div>
              <div className="mt-2 text-xs text-muted">{p.createdAt}</div>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <Link
                  href={`/blog/${p.slug}`}
                  className="btn-ghost justify-center"
                >
                  عرض
                </Link>
                <Link
                  href={`/admin/dashboard/blogs/${p.id}/edit`}
                  className="btn-primary justify-center"
                >
                  تعديل
                </Link>
                <button
                  type="button"
                  className="btn-accent justify-center"
                  onClick={() => alert("حذف (تجريبي) — سيتم ربطه لاحقًا")}
                >
                  حذف
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: table */}
      <div className="hidden overflow-hidden rounded-2xl border border-border md:block">
        <div className="grid grid-cols-12 gap-3 bg-background px-5 py-3 text-xs font-extrabold text-muted">
          <div className="col-span-2">الصورة</div>
          <div className="col-span-4">العنوان</div>
          <div className="col-span-2">التصنيف</div>
          <div className="col-span-2">الحالة</div>
          <div className="col-span-1">التاريخ</div>
          <div className="col-span-1 text-center">إجراءات</div>
        </div>

        <div className="divide-y divide-border bg-surface">
          {posts.map((p) => (
            <div key={p.id} className="grid grid-cols-12 gap-3 px-5 py-4">
              <div className="col-span-2">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={800}
                    height={500}
                    className="h-full w-full object-cover"
                    unoptimized
                  />
                </div>
              </div>
              <div className="col-span-4">
                <div className="font-extrabold text-foreground">{p.title}</div>
                <div className="mt-1 text-xs text-muted" dir="ltr">
                  /blog/{p.slug}
                </div>
              </div>
              <div className="col-span-2">
                <span className="badge-primary">{p.category}</span>
              </div>
              <div className="col-span-2">
                <StatusBadge published={p.published} />
              </div>
              <div className="col-span-1 text-sm text-muted">{p.createdAt}</div>
              <div className="col-span-1">
                <div className="flex items-center justify-end gap-2">
                  <Link
                    href={`/blog/${p.slug}`}
                    className="rounded-xl border border-border bg-background px-3 py-2 text-xs font-extrabold text-foreground transition hover:bg-slate-50"
                  >
                    عرض
                  </Link>
                  <Link
                    href={`/admin/dashboard/blogs/${p.id}/edit`}
                    className="rounded-xl border border-border bg-background px-3 py-2 text-xs font-extrabold text-foreground transition hover:bg-slate-50"
                  >
                    تعديل
                  </Link>
                  <button
                    type="button"
                    className="rounded-xl border border-border bg-background px-3 py-2 text-xs font-extrabold text-foreground transition hover:bg-slate-50"
                    onClick={() => alert("حذف (تجريبي) — سيتم ربطه لاحقًا")}
                  >
                    حذف
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ published }: { published: boolean }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-extrabold"
      style={{
        color: published ? "var(--primary)" : "var(--muted)",
        backgroundColor: published
          ? "color-mix(in srgb, var(--primary) 10%, transparent)"
          : "color-mix(in srgb, var(--muted) 8%, transparent)",
      }}
    >
      <span
        className="inline-flex h-2 w-2 rounded-full"
        style={{ backgroundColor: published ? "var(--primary)" : "var(--muted)" }}
        aria-hidden="true"
      />
      {published ? "Published" : "Draft"}
    </span>
  );
}

