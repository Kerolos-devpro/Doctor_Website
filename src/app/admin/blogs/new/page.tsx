import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_SEED } from "@/lib/admin";
import { AdminShell } from "../../_components/AdminShell";

export default async function AdminNewBlogPage() {
  const store = await cookies();
  const authed = store.get("admin_auth")?.value === "1";
  if (!authed) redirect("/admin/login");

  async function logoutAction() {
    "use server";
    const s = await cookies();
    s.set("admin_auth", "", { path: "/", maxAge: 0 });
    redirect("/admin/login");
  }

  return (
    <AdminShell
      title="إضافة مقال"
      subtitle="صفحة تجريبية — سيتم إضافة نموذج إنشاء مقال لاحقًا."
      adminName={ADMIN_SEED.name}
      logoutAction={logoutAction}
      headerAction={
        <Link href="/admin/blogs" className="btn-ghost justify-center">
          العودة للقائمة
        </Link>
      }
    >
      <div className="grid gap-4 lg:grid-cols-12">
        <div className="card p-6 lg:col-span-7">
          <div className="text-sm font-extrabold text-foreground">نموذج المقال</div>
          <p className="mt-2 text-sm leading-7 text-muted">
            سيتم بناء نموذج (Title/Slug/Category/Content/Published) لاحقًا.
          </p>
          <div className="mt-5 grid gap-3">
            <div className="rounded-2xl border border-border bg-background px-4 py-3 text-sm text-muted">
              حقول النموذج (تجريبي)
            </div>
            <div className="rounded-2xl border border-border bg-background px-4 py-3 text-sm text-muted">
              رفع صورة/رابط صورة (تجريبي)
            </div>
            <div className="rounded-2xl border border-border bg-background px-4 py-3 text-sm text-muted">
              زر حفظ/نشر (تجريبي)
            </div>
          </div>
        </div>
        <div className="card p-6 lg:col-span-5">
          <div className="text-sm font-extrabold text-foreground">نصيحة</div>
          <p className="mt-2 text-sm leading-7 text-muted">
            لأننا بدون Database حاليًا، سنحتاج لاحقًا إما تخزين مؤقت في ملفات/JSON أو إضافة قاعدة بيانات عند الانتقال للإنتاج.
          </p>
        </div>
      </div>
    </AdminShell>
  );
}

