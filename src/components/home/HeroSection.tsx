import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { HeroImageOnce } from "@/components/home/HeroImageOnce";

export function HeroSection() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <FadeIn duration={0.5} y={10}>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-muted">
              <span
                className="inline-flex h-2 w-2 rounded-full"
                style={{ backgroundColor: "var(--primary)" }}
                aria-hidden="true"
              />
              <span>استشاري جراحة العظام والمفاصل وأورام العظام والعضلات</span>
              </div>
            </FadeIn>

            <FadeIn duration={0.55} y={14} delay={0.05}>
              <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                رعاية طبية موثوقة بخبرة واهتمام
              </h1>
            </FadeIn>

            <FadeIn duration={0.55} y={14} delay={0.12}>
              <p className="mt-4 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                استشاري معتمد — د. زكي الحفظي (Dr. Zaki Al-Hafzi). خبرة أكثر من 16
                عاماً في جراحة استبدال المفاصل والركبة والورك وأورام العظام
                والعضلات، مع اهتمام بالتشخيص الدقيق وخطة علاج واضحة.
              </p>
            </FadeIn>

            <FadeIn duration={0.5} y={12} delay={0.2}>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="/contact" className="btn-accent">
                  احجز موعد
                </Link>
                <Link href="/cv" className="btn-ghost">
                  تعرف على الطبيب
                </Link>
              </div>
            </FadeIn>

            <FadeIn duration={0.55} y={12} delay={0.28}>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="card px-4 py-4">
                  <div className="text-sm font-extrabold text-foreground">
                    تشخيص دقيق
                  </div>
                  <div className="mt-1 text-sm text-muted">
                    تقييم شامل وخطة علاج واضحة
                  </div>
                </div>
                <div className="card px-4 py-4">
                  <div className="text-sm font-extrabold text-foreground">
                    جراحة مفاصل
                  </div>
                  <div className="mt-1 text-sm text-muted">
                    استبدال الركبة والورك والمفاصل
                  </div>
                </div>
                <div className="card px-4 py-4">
                  <div className="text-sm font-extrabold text-foreground">
                    أورام العظام
                  </div>
                  <div className="mt-1 text-sm text-muted">
                    تقييم وعلاج أورام العظام والعضلات
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5">
            <FadeIn
              duration={0.6}
              y={10}
              delay={0.18}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
            >
              <div className="relative overflow-hidden rounded-3xl border border-border bg-surface shadow-sm">
              <div className="absolute inset-0 opacity-80">
                <div
                  className="h-full w-full"
                  style={{
                    background:
                      "radial-gradient(60% 60% at 70% 20%, rgba(37,99,235,0.18) 0%, transparent 60%), radial-gradient(55% 55% at 10% 90%, rgba(15,118,110,0.16) 0%, transparent 60%)",
                  }}
                />
              </div>
              <div className="relative p-4 sm:p-6">
                <HeroImageOnce
                  className="aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100"
                />
                <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-border bg-background px-4 py-3">
                  <div>
                    <div className="text-sm font-extrabold text-foreground">
                      د. زكي الحفظي
                    </div>
                    <div className="text-sm text-muted">
                      عظام • مفاصل • أورام العظام
                    </div>
                  </div>
                  <span className="badge-primary">أبها</span>
                </div>
              </div>
            </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

