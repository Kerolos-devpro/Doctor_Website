import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { validateAdminLogin } from "@/lib/admin";
import { AdminLoginForm } from "./AdminLoginForm";

type ActionState = { error?: string };

export default function AdminLoginPage() {
  async function loginAction(
    _prevState: ActionState,
    formData: FormData
  ): Promise<ActionState> {
    "use server";

    // Demo-only: simple cookie flag. Replace with real auth/session later.
    const email = String(formData.get("email") ?? "").trim().toLowerCase();
    const password = String(formData.get("password") ?? "");

    const ok = validateAdminLogin(email, password);
    if (!ok) {
      return { error: "بيانات الدخول غير صحيحة. تأكد من البريد وكلمة المرور." };
    }

    const cookieStore = await cookies();
    cookieStore.set("admin_auth", "1", {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 8, // 8 hours (demo)
    });

    redirect("/admin/dashboard");
  }

  return (
    <section className="section">
      <div className="container-page">
        <div className="mx-auto grid w-full max-w-xl gap-6">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              تسجيل دخول الأدمن
            </h1>
            <p className="mt-3 text-base leading-8 text-muted sm:text-lg">
              تسجيل دخول تجريبي لإدارة المدونة. هذا الإعداد{" "}
              <span className="font-extrabold text-foreground">
                ليس جاهزًا للإنتاج
              </span>
              .
            </p>
          </div>

          <div className="card p-6 sm:p-8">
            <AdminLoginForm action={loginAction} />

            <div className="mt-6 rounded-2xl border border-border bg-background p-4">
              <div className="text-sm font-extrabold text-foreground">
                بيانات الدخول التجريبية
              </div>
              <div className="mt-2 grid gap-1 text-sm text-muted">
                <div dir="ltr" className="font-semibold">
                  admin@doctor.com
                </div>
                <div dir="ltr" className="font-semibold">
                  Admin@12345
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Link href="/" className="text-sm font-semibold text-muted hover:text-foreground">
                العودة للموقع
              </Link>
              <Link href="/blog" className="text-sm font-extrabold text-primary">
                عرض المدونة
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

