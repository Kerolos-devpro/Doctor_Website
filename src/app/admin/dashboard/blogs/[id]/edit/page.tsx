import Link from "next/link";
import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { blogPosts } from "@/lib/blogs";
import { ADMIN_SEED } from "@/lib/admin";
import { AdminShell } from "../../../../_components/AdminShell";
import { EditBlogForm } from "./EditBlogForm";

export default async function AdminEditBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const store = await cookies();
  const authed = store.get("admin_auth")?.value === "1";
  if (!authed) redirect("/admin/login");

  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);
  if (!post) notFound();

  async function logoutAction() {
    "use server";
    const s = await cookies();
    s.set("admin_auth", "", { path: "/", maxAge: 0 });
    redirect("/admin/login");
  }

  return (
    <AdminShell
      title="تعديل مقال"
      subtitle="تعديل بيانات المقال من المصدر المؤقت lib/blogs.ts (بدون قاعدة بيانات)."
      adminName={ADMIN_SEED.name}
      logoutAction={logoutAction}
      headerAction={
        <Link href="/admin/dashboard/blogs" className="btn-ghost justify-center">
          الرجوع لإدارة المدونات
        </Link>
      }
    >
      <EditBlogForm post={post} />
    </AdminShell>
  );
}

