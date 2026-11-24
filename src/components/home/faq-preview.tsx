"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { FaqShowcase } from "@/components/faqs/faq-showcase";
import { faqs } from "@/constants/home-data";

export function FAQPreview() {
  return (
    <section
      id="faq-preview"
      className="border-b border-[#DCE8E3] bg-white py-16 md:py-24 dark:border-[#162E26] dark:bg-[#07120F]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <FaqShowcase
            categories={[
              {
                name: "Frequently Asked Questions",
                subtitle:
                  "Clear answers regarding eligibility, verification documents, assessment tests, and grant disbursement.",
                questions: faqs,
              },
            ]}
            compactHeader
            showViewAllLink
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
