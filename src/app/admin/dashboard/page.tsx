import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/lib/blogs";
import { ADMIN_SEED } from "@/lib/admin";
import { AdminShell } from "../_components/AdminShell";

export default async function AdminDashboardPage() {
  const cookieStore = await cookies();
  const authed = cookieStore.get("admin_auth")?.value === "1";
  if (!authed) {
    redirect("/admin/login");
  }

  async function logoutAction() {
    "use server";
    const store = await cookies();
    store.set("admin_auth", "", { path: "/", maxAge: 0 });
    redirect("/admin/login");
  }

  const total = blogPosts.length;
  const published = blogPosts.filter((p) => p.published).length;
  const drafts = total - published;
  const latest = blogPosts
    .slice()
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))[0];

  return (
    <AdminShell
      title="لوحة التحكم"
      subtitle="Dashboard تجريبي لإدارة المدونة باستخدام بيانات مؤقتة من lib/blogs.ts."
      adminName={ADMIN_SEED.name}
      logoutAction={logoutAction}
      headerAction={
        <Link href="/" className="btn-ghost justify-center">
          زيارة الموقع
        </Link>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="عدد المقالات" value={String(total)} hint="كل المقالات في المصدر المؤقت" tone="secondary" />
        <StatCard title="المقالات المنشورة" value={String(published)} hint="published = true" tone="primary" />
        <StatCard title="المقالات غير المنشورة" value={String(drafts)} hint="مسودات للتجربة" tone="muted" />
        <StatCard
          title="آخر مقال مضاف"
          value={latest ? latest.title : "—"}
          hint={latest ? formatArabicDate(latest.createdAt) : "لا يوجد"}
          tone="accent"
        />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-12">
        <div className="card p-6 lg:col-span-7">
          <div className="text-sm font-extrabold text-foreground">نظرة سريعة</div>
          <p className="mt-2 text-sm leading-7 text-muted">
            هذا الـ Dashboard للتجربة فقط. لاحقًا يمكن إضافة إنشاء/تعديل/نشر المقالات من واجهة واحدة.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/admin/dashboard/blogs"
              className="btn-primary justify-center"
            >
              إدارة المدونات
            </Link>
            <Link
              href="/admin/dashboard/blogs/create"
              className="btn-accent justify-center"
            >
              إضافة مقال
            </Link>
          </div>
        </div>
        <div className="card p-6 lg:col-span-5">
          <div className="text-sm font-extrabold text-foreground">روابط سريعة</div>
          <div className="mt-4 grid gap-2 text-sm">
            <Link className="rounded-2xl border border-border bg-background px-4 py-3 font-extrabold text-foreground transition hover:bg-slate-50" href="/blog">
              زيارة صفحة المدونة
            </Link>
            <Link className="rounded-2xl border border-border bg-background px-4 py-3 font-extrabold text-foreground transition hover:bg-slate-50" href="/before-after">
              صفحة قبل/بعد
            </Link>
            <Link className="rounded-2xl border border-border bg-background px-4 py-3 font-extrabold text-foreground transition hover:bg-slate-50" href="/cv">
              السيرة الذاتية
            </Link>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}

function StatCard({
  title,
  value,
  hint,
  tone,
}: {
  title: string;
  value: string;
  hint: string;
  tone: "primary" | "secondary" | "accent" | "muted";
}) {
  const styles =
    tone === "primary"
      ? { background: "color-mix(in srgb, var(--primary) 10%, transparent)" }
      : tone === "secondary"
        ? { background: "color-mix(in srgb, var(--secondary) 9%, transparent)" }
        : tone === "accent"
          ? { background: "color-mix(in srgb, var(--accent) 12%, transparent)" }
          : { background: "color-mix(in srgb, var(--muted) 7%, transparent)" };

  return (
    <div className="card card-hover p-6" style={styles}>
      <div className="text-sm font-semibold text-muted">{title}</div>
      <div className="mt-2 text-lg font-extrabold leading-7 text-foreground">
        {value}
      </div>
      <div className="mt-2 text-sm leading-7 text-muted">{hint}</div>
    </div>
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

