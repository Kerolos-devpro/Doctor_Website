import Link from "next/link";
import { ContactForm } from "./ContactForm";

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container-page">
        <h1 className="section-title">تواصل معنا</h1>
        <p className="section-subtitle">
          تواصلي معنا للاستفسار أو حجز استشارة. سنرد عليك في أقرب وقت.
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="card p-6 lg:col-span-5">
            <div className="text-sm font-extrabold text-foreground">بيانات التواصل</div>
            <div className="mt-4 grid gap-2 text-sm text-muted">
              <div>الهاتف: 0100 000 0000</div>
              <div>البريد: info@doctor.example</div>
              <div>العنوان: حائل، السعودية</div>
            </div>

            <div className="mt-8 text-sm font-extrabold text-foreground">إجراءات سريعة</div>
            <div className="mt-4 flex flex-col gap-3">
              <Link href="/book" className="btn-accent justify-center">
                احجز موعد
              </Link>
              <Link href="/" className="btn-ghost justify-center">
                العودة للرئيسية
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

