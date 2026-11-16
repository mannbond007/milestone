import { HeroSection } from "@/components/home/hero-section";
import { StatisticsSection } from "@/components/home/statistics-section";
import { ScholarshipCategories } from "@/components/home/scholarship-categories";
import { BenefitsSection } from "@/components/home/benefits-section";
import { FeaturedCourses } from "@/components/home/featured-courses";
import { SuccessStories } from "@/components/home/success-stories";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <StatisticsSection />
      <ScholarshipCategories />
      <BenefitsSection />
      <FeaturedCourses />
      <SuccessStories />
      <CTASection />
    </div>
  );
}
