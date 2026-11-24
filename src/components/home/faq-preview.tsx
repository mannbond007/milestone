"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { FaqShowcase } from "@/components/faqs/faq-showcase";
import { faqs } from "@/constants/home-data";

export function FAQPreview() {
  return (
    <section
      id="faq-preview"
      className="border-b border-[#DCE8E3] bg-[#FAFCFB] py-16 md:py-24 dark:border-[#162E26] dark:bg-[#07120F]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <FaqShowcase
            categories={[{ name: "General", questions: faqs }]}
            showCategoryTabs={false}
            showViewAllLink
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
