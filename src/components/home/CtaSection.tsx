import Link from "next/link";
import { SectionReveal } from "@/components/animations/SectionReveal";

export function CtaSection() {
  return (
    <section className="section">
      <div className="container-page">
        <SectionReveal duration={0.6} y={14}>
          <div
            className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 shadow-sm sm:p-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(15,118,110,0.10) 0%, rgba(37,99,235,0.08) 55%, rgba(245,158,11,0.08) 100%)",
            }}
          >
            <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl fx-blob" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl fx-blob [animation-delay:-7s]" />
            <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                  جاهزة لخطوتك القادمة؟
                </h2>
                <p className="mt-3 text-base leading-8 text-muted sm:text-lg">
                  احجزي موعدك الآن للحصول على تقييم دقيق وخطة علاج مناسبة، أو تواصلي
                  معنا لأي استفسار.
                </p>
              </div>
              <div className="lg:col-span-4">
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <Link
                    href="/contact"
                    className="btn-accent w-full justify-center fx-pulse-strong"
                  >
                    احجز موعد
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-primary w-full justify-center transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl"
                  >
                    تواصل معنا
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

