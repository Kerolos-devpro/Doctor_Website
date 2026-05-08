import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blogs";

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
        <h1 className="section-title">المدونة الطبية</h1>
        <p className="section-subtitle">
          مقالات ونصائح صحية موثوقة (Placeholder) تساعدك على فهم أساسيات العناية
          بالبشرة واتخاذ قرارات أفضل.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {posts.map((post) => (
                <article key={post.id} className="card card-hover overflow-hidden">
                  <div className="relative aspect-[16/10] bg-slate-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={1200}
                      height={750}
                      className="h-full w-full object-cover"
                      unoptimized
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
                        className="inline-flex items-center gap-2 text-sm font-extrabold text-primary"
                      >
                        اقرأ المزيد
                        <ArrowIcon />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-20 space-y-4">
              <div className="card p-6">
                <div className="text-sm font-extrabold text-foreground">بحث</div>
                <div className="mt-4">
                  <input
                    type="search"
                    placeholder="ابحث في المقالات (شكلي)"
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus-visible:ring-4"
                    style={{ ["--tw-ring-color" as never]: "var(--ring-color)" }}
                  />
                </div>
              </div>

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

              <div className="card p-6">
                <div className="text-sm font-extrabold text-foreground">
                  أحدث المقالات
                </div>
                <div className="mt-4 grid gap-3">
                  {latest.map((p) => (
                    <Link
                      key={p.id}
                      href={`/blog/${p.slug}`}
                      className="rounded-2xl border border-border bg-background px-4 py-3 transition hover:bg-slate-50"
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

