import {
  CtaSection,
  DoctorIntroSection,
  HeroSection,
  ServicesSection,
  TestimonialsSection,
} from "@/components/home";
import { FadeIn } from "@/components/animations/FadeIn";

export default function Home() {
  return (
    <FadeIn className="flex flex-col" duration={0.45} y={10}>
      <HeroSection />
      <DoctorIntroSection />
      <ServicesSection />
      <TestimonialsSection />
      <CtaSection />
    </FadeIn>
  );
}
