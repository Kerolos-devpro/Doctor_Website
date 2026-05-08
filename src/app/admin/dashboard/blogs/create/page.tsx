import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_SEED } from "@/lib/admin";
import { AdminShell } from "../../../_components/AdminShell";
import { CreateBlogForm } from "./CreateBlogForm";

export default async function AdminCreateBlogPage() {
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
      title="إضافة مقال جديد"
      subtitle="نموذج تجريبي لإضافة مقال (بدون قاعدة بيانات)."
      adminName={ADMIN_SEED.name}
      logoutAction={logoutAction}
      headerAction={
        <Link href="/admin/dashboard/blogs" className="btn-ghost justify-center">
          العودة لإدارة المدونات
        </Link>
      }
    >
      <CreateBlogForm />
    </AdminShell>
  );
}

