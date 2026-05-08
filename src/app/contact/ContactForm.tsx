"use client";

import { useMemo, useState } from "react";

type FormState = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [data, setData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  function validate(next: FormState) {
    const e: FormErrors = {};
    if (!next.name.trim()) e.name = "الاسم مطلوب";
    if (!next.phone.trim()) e.phone = "رقم الهاتف مطلوب";
    if (!next.message.trim()) e.message = "نص الرسالة مطلوب";
    return e;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccess(null);

    const next: FormState = {
      name: data.name.trim(),
      phone: data.phone.trim(),
      email: data.email.trim(),
      message: data.message.trim(),
    };

    const eMap = validate(next);
    setErrors(eMap);
    if (Object.keys(eMap).length) return;

    setSending(true);
    try {
      // Demo-only: no backend. Print to console and show success.
      // eslint-disable-next-line no-console
      console.log("[contact-form] submitted (demo)", next);
      setSuccess("تم إرسال رسالتك بنجاح (تجريبي). سنقوم بالتواصل معك قريبًا.");
      setData(initialState);
      setErrors({});
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="card p-6">
      <div className="text-sm font-extrabold text-foreground">أرسل رسالة</div>
      <p className="mt-2 text-sm leading-7 text-muted">
        املأ البيانات التالية وسنقوم بالتواصل معك في أقرب وقت.
      </p>

      {success ? (
        <div className="mt-4 rounded-2xl border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground">
          <span className="text-emerald-700">نجاح:</span> {success}
        </div>
      ) : null}

      <form onSubmit={onSubmit} className="mt-6 grid gap-4">
        <Field
          label="الاسم"
          required
          error={errors.name}
          input={
            <input
              value={data.name}
              onChange={(ev) => setData((d) => ({ ...d, name: ev.target.value }))}
              className={inputClass(Boolean(errors.name))}
              placeholder="اسمك الكامل"
            />
          }
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="رقم الهاتف"
            required
            error={errors.phone}
            input={
              <input
                value={data.phone}
                onChange={(ev) =>
                  setData((d) => ({ ...d, phone: ev.target.value }))
                }
                className={inputClass(Boolean(errors.phone))}
                placeholder="05xxxxxxxx"
                dir="ltr"
              />
            }
          />
          <Field
            label="البريد الإلكتروني (اختياري)"
            error={errors.email}
            input={
              <input
                value={data.email}
                onChange={(ev) =>
                  setData((d) => ({ ...d, email: ev.target.value }))
                }
                className={inputClass(false)}
                placeholder="name@example.com"
                dir="ltr"
                type="email"
              />
            }
          />
        </div>

        <Field
          label="الرسالة"
          required
          error={errors.message}
          input={
            <textarea
              value={data.message}
              onChange={(ev) =>
                setData((d) => ({ ...d, message: ev.target.value }))
              }
              className={textareaClass(Boolean(errors.message))}
              placeholder="اكتب رسالتك هنا..."
              rows={6}
            />
          }
        />

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            className="btn-accent w-full justify-center"
            disabled={sending}
          >
            {sending ? "جاري الإرسال..." : "إرسال"}
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  required,
  error,
  input,
}: {
  label: string;
  required?: boolean;
  error?: string;
  input: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <div className="flex items-center justify-between gap-3">
        <label className="text-sm font-extrabold text-foreground">
          {label} {required ? <span className="text-red-600">*</span> : null}
        </label>
        {error ? (
          <span className="text-xs font-semibold text-red-600">{error}</span>
        ) : null}
      </div>
      {input}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return [
    "w-full rounded-2xl border bg-background px-4 py-3 text-sm text-foreground outline-none focus-visible:ring-4",
    hasError ? "border-red-300" : "border-border",
  ].join(" ");
}

function textareaClass(hasError: boolean) {
  return [
    "w-full rounded-2xl border bg-background px-4 py-3 text-sm text-foreground outline-none focus-visible:ring-4",
    hasError ? "border-red-300" : "border-border",
  ].join(" ");
}

