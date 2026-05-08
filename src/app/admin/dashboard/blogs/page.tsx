import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { blogPosts } from "@/lib/blogs";
import { ADMIN_SEED } from "@/lib/admin";
import { AdminShell } from "../../_components/AdminShell";
import { BlogsTable } from "./BlogsTable";

export default async function AdminDashboardBlogsPage() {
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
      subtitle="جدول تجريبي يعرض المقالات من lib/blogs.ts (بدون قاعدة بيانات)."
      adminName={ADMIN_SEED.name}
      logoutAction={logoutAction}
      headerAction={
        <Link href="/admin/dashboard/blogs/create" className="btn-accent justify-center">
          إضافة مقال جديد
        </Link>
      }
    >
      <BlogsTable posts={posts} />
    </AdminShell>
  );
}

