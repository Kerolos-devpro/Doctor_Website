import Link from "next/link";
import { ContactForm } from "./ContactForm";
import { CONTACT } from "@/lib/contact";
import { SectionReveal } from "@/components/animations/SectionReveal";

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container-page">
        <SectionReveal duration={0.6} y={14}>
          <h1 className="section-title">تواصل معنا</h1>
          <p className="section-subtitle">
            تواصل معنا للاستفسار أو حجز استشارة. سنرد عليك في أقرب وقت.
          </p>
        </SectionReveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionReveal duration={0.55} y={12}>
              <ContactForm />
            </SectionReveal>
          </div>
          <div className="lg:col-span-5">
            <SectionReveal duration={0.55} y={12} delay={0.05}>
              <div className="card p-6">
                <div className="text-sm font-extrabold text-foreground">
                  بيانات التواصل
                </div>
                <div className="mt-4 grid gap-2 text-sm text-muted">
                  <div>الحجز: {CONTACT.phones[0]}</div>
                  <div>الهاتف: {CONTACT.phones[1]}</div>
                  <div>البريد: {CONTACT.email}</div>
                  <div>موقع العيادة: {CONTACT.location}</div>
                  <div>مواعيد العمل: {CONTACT.workingDays}</div>
                  <div>{CONTACT.workingHours}</div>
                </div>

                <div className="mt-8 text-sm font-extrabold text-foreground">
                  إجراءات سريعة
                </div>
                <div className="mt-4 flex flex-col gap-3">
                  <Link
                    href="/contact"
                    className="btn-accent justify-center transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-md"
                  >
                    احجز موعد
                  </Link>
                  <Link
                    href="/"
                    className="btn-ghost justify-center transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    العودة للرئيسية
                  </Link>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

