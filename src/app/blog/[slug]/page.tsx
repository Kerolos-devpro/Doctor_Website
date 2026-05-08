import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blogs";
import { notFound } from "next/navigation";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug && p.published);

  if (!post) {
    notFound();
  }

  const related = blogPosts
    .filter(
      (p) => p.published && p.category === post.category && p.slug !== post.slug
    )
    .slice()
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 3);

  const paragraphs = post.content
    .split(/\n{2,}/g)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <section className="section">
      <div className="container-page">
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:items-start">
          <article className="lg:col-span-8">
            <div className="card overflow-hidden">
              <div className="relative aspect-[16/9] bg-slate-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1200}
                  height={675}
                  className="h-full w-full object-cover"
                  unoptimized
                />
                <div className="absolute left-4 top-4">
                  <span className="badge-primary">{post.category}</span>
                </div>
              </div>
              <div className="p-7">
                <div className="text-sm font-semibold text-muted">
                  {formatArabicDate(post.createdAt)}
                </div>
                <h1 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight text-foreground sm:text-3xl">
                  {post.title}
                </h1>
                <p className="mt-4 text-base leading-8 text-muted">
                  {post.excerpt}
                </p>

                <div className="mt-6 rounded-3xl border border-border bg-background p-6">
                  <div className="text-sm font-extrabold text-foreground">
                    المحتوى
                  </div>
                  <div className="mt-4 grid gap-4 text-sm leading-7 text-muted">
                    {paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {related.length ? (
              <div className="mt-6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="text-base font-extrabold text-foreground">
                      مقالات ذات صلة
                    </div>
                    <div className="mt-2 text-sm text-muted">
                      من نفس التصنيف: {post.category}
                    </div>
                  </div>
                  <span className="badge-primary">{post.category}</span>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {related.map((p) => (
                    <Link
                      key={p.id}
                      href={`/blog/${p.slug}`}
                      className="card card-hover overflow-hidden"
                    >
                      <div className="relative aspect-[16/10] bg-slate-100">
                        <Image
                          src={p.image}
                          alt={p.title}
                          width={1200}
                          height={750}
                          className="h-full w-full object-cover"
                          unoptimized
                        />
                        <div className="absolute left-3 top-3">
                          <span className="badge-primary">{p.category}</span>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="text-xs font-semibold text-muted">
                          {formatArabicDate(p.createdAt)}
                        </div>
                        <div className="mt-2 text-sm font-extrabold text-foreground">
                          {p.title}
                        </div>
                        <div className="mt-2 text-sm text-muted line-clamp-2">
                          {p.excerpt}
                        </div>
                        <div className="mt-3 text-sm font-extrabold text-primary">
                          اقرأ المزيد
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="mt-6 rounded-3xl border border-border bg-surface p-6 sm:p-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-base font-extrabold text-foreground">
                    احجز استشارة الآن
                  </div>
                  <div className="mt-2 text-sm text-muted">
                    تقييم دقيق وخطة مناسبة لحالتك مع متابعة واضحة.
                  </div>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link href="/book" className="btn-accent justify-center">
                    احجز استشارة الآن
                  </Link>
                  <Link href="/blog" className="btn-ghost justify-center">
                    العودة إلى المدونة
                  </Link>
                </div>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-4">
            <div className="card p-6">
              <div className="text-sm font-extrabold text-foreground">
                تنبيه مهم
              </div>
              <p className="mt-3 text-sm leading-7 text-muted">
                المحتوى الحالي Placeholder للتصميم فقط. لا يغني عن الاستشارة
                الطبية المباشرة.
              </p>
              <div className="mt-5">
                <Link href="/contact" className="btn-primary w-full justify-center">
                  تواصل معنا
                </Link>
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

