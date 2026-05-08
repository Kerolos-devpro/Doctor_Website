"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { createBlogPost } from "@/lib/blog-admin";

type FormState = {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  published: boolean;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  title: "",
  slug: "",
  category: "",
  excerpt: "",
  content: "",
  image: "",
  published: true,
};

export function CreateBlogForm() {
  const [data, setData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const imageUrl = useMemo(() => {
    const v = data.image.trim();
    if (!v) return null;
    try {
      new URL(v);
      return v;
    } catch {
      return null;
    }
  }, [data.image]);

  function validate(next: FormState) {
    const e: FormErrors = {};
    if (!next.title.trim()) e.title = "عنوان المقال مطلوب";
    if (!next.slug.trim()) e.slug = "Slug مطلوب";
    if (!next.category.trim()) e.category = "التصنيف مطلوب";
    if (!next.content.trim()) e.content = "محتوى المقال مطلوب";
    return e;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccess(null);

    const next = {
      ...data,
      title: data.title.trim(),
      slug: data.slug.trim(),
      category: data.category.trim(),
      excerpt: data.excerpt.trim(),
      content: data.content.trim(),
      image: data.image.trim(),
    };

    const eMap = validate(next);
    setErrors(eMap);
    if (Object.keys(eMap).length) return;

    setSaving(true);
    try {
      // Demo save (no DB)
      await createBlogPost({
        title: next.title,
        slug: next.slug,
        category: next.category,
        excerpt: next.excerpt,
        content: next.content,
        image: next.image,
        published: next.published,
      });

      // Also print explicitly for the request
      // eslint-disable-next-line no-console
      console.log("[blog-form] submitted", next);

      setSuccess("تم حفظ المقال بنجاح (تجريبي).");
      setData(initialState);
      setErrors({});
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="grid gap-4 lg:grid-cols-12">
      <div className="card p-6 lg:col-span-7">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-sm font-extrabold text-foreground">
              إضافة مقال جديد
            </div>
            <p className="mt-2 text-sm leading-7 text-muted">
              نموذج تجريبي بدون قاعدة بيانات. عند الحفظ سيتم عرض رسالة نجاح وطباعة
              البيانات في Console.
            </p>
          </div>
          <span className="badge-primary">Blog</span>
        </div>

        {success ? (
          <div className="mt-5 rounded-2xl border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground">
            <span className="text-emerald-700">نجاح:</span> {success}
          </div>
        ) : null}

        <form onSubmit={onSubmit} className="mt-6 grid gap-4">
          <Field
            label="عنوان المقال"
            required
            error={errors.title}
            input={
              <input
                value={data.title}
                onChange={(ev) =>
                  setData((d) => ({ ...d, title: ev.target.value }))
                }
                className={inputClass(Boolean(errors.title))}
                placeholder="مثال: روتين يومي للعناية بالبشرة"
              />
            }
          />

          <Field
            label="Slug"
            required
            error={errors.slug}
            input={
              <input
                value={data.slug}
                onChange={(ev) =>
                  setData((d) => ({ ...d, slug: ev.target.value }))
                }
                className={inputClass(Boolean(errors.slug))}
                placeholder="daily-skincare-routine"
                dir="ltr"
              />
            }
          />

          <Field
            label="التصنيف"
            required
            error={errors.category}
            input={
              <input
                value={data.category}
                onChange={(ev) =>
                  setData((d) => ({ ...d, category: ev.target.value }))
                }
                className={inputClass(Boolean(errors.category))}
                placeholder="مثال: العناية بالبشرة"
              />
            }
          />

          <Field
            label="وصف مختصر"
            error={errors.excerpt}
            input={
              <textarea
                value={data.excerpt}
                onChange={(ev) =>
                  setData((d) => ({ ...d, excerpt: ev.target.value }))
                }
                className={textareaClass(false)}
                placeholder="ملخص قصير يظهر في بطاقة المقال..."
                rows={3}
              />
            }
          />

          <Field
            label="محتوى المقال"
            required
            error={errors.content}
            input={
              <textarea
                value={data.content}
                onChange={(ev) =>
                  setData((d) => ({ ...d, content: ev.target.value }))
                }
                className={textareaClass(Boolean(errors.content))}
                placeholder="اكتب المحتوى هنا... يمكنك فصل الفقرات بسطر فارغ."
                rows={8}
              />
            }
          />

          <Field
            label="رابط الصورة"
            error={data.image.trim() && !imageUrl ? "رابط الصورة غير صالح" : undefined}
            input={
              <input
                value={data.image}
                onChange={(ev) =>
                  setData((d) => ({ ...d, image: ev.target.value }))
                }
                className={inputClass(Boolean(data.image.trim() && !imageUrl))}
                placeholder="https://images.unsplash.com/..."
                dir="ltr"
              />
            }
          />

          <label className="flex items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground">
            <input
              type="checkbox"
              checked={data.published}
              onChange={(ev) =>
                setData((d) => ({ ...d, published: ev.target.checked }))
              }
              className="h-4 w-4 accent-[color:var(--primary)]"
            />
            <span>Published</span>
          </label>

          <button
            type="submit"
            className="btn-accent w-full justify-center"
            disabled={saving}
          >
            {saving ? "جاري الحفظ..." : "حفظ"}
          </button>
        </form>
      </div>

      <div className="card p-6 lg:col-span-5">
        <div className="text-sm font-extrabold text-foreground">معاينة الصورة</div>
        <p className="mt-2 text-sm leading-7 text-muted">
          سيتم عرض معاينة للصورة عند إدخال رابط صحيح.
        </p>

        <div className="mt-5 overflow-hidden rounded-3xl border border-border bg-slate-100">
          <div className="relative aspect-[16/10]">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt="معاينة صورة المقال"
                width={1200}
                height={750}
                className="h-full w-full object-cover"
                unoptimized
              />
            ) : (
              <div className="grid h-full w-full place-items-center text-sm font-semibold text-muted">
                لا توجد صورة للمعاينة
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-border bg-background p-4">
          <div className="text-sm font-extrabold text-foreground">Validation</div>
          <ul className="mt-2 grid gap-1 text-sm text-muted">
            <li>العنوان مطلوب</li>
            <li>Slug مطلوب</li>
            <li>التصنيف مطلوب</li>
            <li>المحتوى مطلوب</li>
          </ul>
        </div>
      </div>
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
        {error ? <span className="text-xs font-semibold text-red-600">{error}</span> : null}
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

