import Link from "next/link";

export default function BookPage() {
  return (
    <section className="section">
      <div className="container-page">
        <h1 className="section-title">حجز موعد</h1>
        <p className="section-subtitle">
          للحجز والاستفسار، تفضل بالتواصل معنا وسنساعدك في تحديد الموعد المناسب.
        </p>

        <div className="mt-8 card p-6">
          <div className="text-sm font-extrabold text-foreground">
            خيارات سريعة
          </div>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary justify-center">
              تواصل معنا
            </Link>
            <Link href="/blog" className="btn-ghost justify-center">
              قراءة مقالات طبية
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

