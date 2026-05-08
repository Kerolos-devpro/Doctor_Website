import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { blogPosts } from "@/lib/blogs";
import { ADMIN_SEED } from "@/lib/admin";
import { AdminShell } from "../_components/AdminShell";

export default async function AdminBlogsPage() {
  const store = await cookies();
  const authed = store.get("admin_auth")?.value === "1";
  if (!authed) redirect("/admin/login");

  async function logoutAction() {
    "use server";
    const s = await cookies();
    s.set("admin_auth", "", { path: "/", maxAge: 0 });
    redirect("/admin/login");
  }

  const posts = blogPosts.slice().sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  return (
    <AdminShell
      title="إدارة المدونات"
      subtitle="قائمة المقالات من المصدر المؤقت (بدون قاعدة بيانات)."
      adminName={ADMIN_SEED.name}
      logoutAction={logoutAction}
      headerAction={
        <Link href="/admin/blogs/new" className="btn-accent justify-center">
          إضافة مقال
        </Link>
      }
    >
      <div className="card overflow-hidden">
        <div className="grid grid-cols-12 gap-3 border-b border-border bg-background px-5 py-3 text-xs font-extrabold text-muted">
          <div className="col-span-6">العنوان</div>
          <div className="col-span-3">التصنيف</div>
          <div className="col-span-2">التاريخ</div>
          <div className="col-span-1 text-center">نشر</div>
        </div>
        <div className="divide-y divide-border">
          {posts.map((p) => (
            <div key={p.id} className="grid grid-cols-12 gap-3 px-5 py-4 text-sm">
              <div className="col-span-6">
                <div className="font-extrabold text-foreground">{p.title}</div>
                <div className="mt-1 text-xs text-muted" dir="ltr">
                  /blog/{p.slug}
                </div>
              </div>
              <div className="col-span-3">
                <span className="badge-primary">{p.category}</span>
              </div>
              <div className="col-span-2 text-muted">{p.createdAt}</div>
              <div className="col-span-1 flex justify-center">
                <span
                  className="inline-flex h-2.5 w-2.5 rounded-full"
                  style={{
                    backgroundColor: p.published ? "var(--primary)" : "var(--muted)",
                  }}
                  aria-label={p.published ? "منشور" : "غير منشور"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}

