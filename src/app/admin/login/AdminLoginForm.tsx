"use client";

import { useActionState } from "react";

type ActionState = { error?: string };

export function AdminLoginForm({
  action,
}: {
  action: (prevState: ActionState, formData: FormData) => Promise<ActionState>;
}) {
  const [state, formAction, pending] = useActionState(action, {});

  return (
    <form action={formAction} className="mt-8 grid gap-4">
      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-extrabold text-foreground">
          البريد الإلكتروني
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="admin@doctor.com"
          className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus-visible:ring-4"
          style={{ ["--tw-ring-color" as never]: "var(--ring-color)" }}
        />
      </div>

      <div className="grid gap-2">
        <label
          htmlFor="password"
          className="text-sm font-extrabold text-foreground"
        >
          كلمة المرور
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          placeholder="••••••••••"
          className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus-visible:ring-4"
          style={{ ["--tw-ring-color" as never]: "var(--ring-color)" }}
        />
      </div>

      {state.error ? (
        <div className="rounded-2xl border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground">
          <span className="text-red-600">خطأ:</span> {state.error}
        </div>
      ) : null}

      <button
        type="submit"
        className="btn-accent w-full justify-center"
        disabled={pending}
      >
        {pending ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
      </button>
    </form>
  );
}

