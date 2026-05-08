import Link from "next/link";

export default function BookPage() {
  return (
    <section className="section">
      <div className="container-page">
        <h1 className="section-title">حجز موعد</h1>
        <p className="section-subtitle">
          صفحة حجز الموعد (Placeholder). سيتم ربط نموذج الحجز لاحقًا بدون Backend
          في هذه المرحلة.
        </p>

        <div className="mt-8 card p-6">
          <div className="text-sm font-extrabold text-foreground">
            خيارات سريعة
          </div>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary justify-center">
              تواصل معنا
            </Link>
            <Link href="/before-after" className="btn-ghost justify-center">
              مشاهدة قبل/بعد
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

