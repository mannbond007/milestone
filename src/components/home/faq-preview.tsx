"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/constants/home-data";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import { useLocale } from "@/components/providers/locale-provider";

export function FAQPreview() {
  const { t } = useLocale();

  return (
    <section
      id="faq-preview"
      className="py-20 md:py-28 bg-[#F8FAF8] dark:bg-[#0B1411] border-b border-[#DCE6E1] dark:border-[#21362E]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Editorial Intro (5 cols) */}
          <ScrollReveal className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 mb-3.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.14em] bg-[#E8F3EE] dark:bg-[#172923] text-[#103D32] dark:text-[#34A880] border border-[#258B68]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#258B68] dark:bg-[#34A880]" />
              <span>{t("homeFaq.badge", "Common Questions")}</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#172923] dark:text-[#F2F7F5] leading-[1.18]">
              {t("homeFaq.titlePart1", "Frequently Asked")}{" "}
              <span className="text-[#258B68] dark:text-[#34A880]">
                {t("homeFaq.titlePart2", "Questions")}
              </span>
            </h2>

            <p className="mt-3 text-base text-[#68756F] dark:text-[#9BB0A8] leading-relaxed">
              {t(
                "homeFaq.subtitle",
                "Clear answers regarding eligibility criteria, document verification, scholarship assessment tests, and grant disbursement timelines."
              )}
            </p>

            <div className="mt-8 p-5 rounded-2xl bg-white dark:bg-[#111E1A] border border-[#DCE6E1] dark:border-[#21362E]">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#E8F3EE] dark:bg-[#172923] flex items-center justify-center text-[#103D32] dark:text-[#34A880] shrink-0">
                  <HelpCircle className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#172923] dark:text-[#F2F7F5]">
                    Have a specific query?
                  </h3>
                  <p className="text-xs text-[#68756F] dark:text-[#9BB0A8] mt-1 leading-relaxed">
                    Speak directly with our admissions and scholarship counselling desk Monday through Saturday.
                  </p>
                  <div className="mt-3.5 flex items-center gap-4">
                    <Link
                      href="/faqs"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#103D32] dark:text-[#34A880] hover:text-[#258B68]"
                    >
                      <span>{t("homeFaq.viewAll", "View All FAQs")}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#68756F] dark:text-[#9BB0A8] hover:text-[#172923] dark:hover:text-white"
                    >
                      <span>Contact Support</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Accordion (7 cols) */}
          <ScrollReveal delay={0.1} className="lg:col-span-7">
            <Accordion className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-white dark:bg-[#111E1A] rounded-2xl border border-[#DCE6E1] dark:border-[#21362E] px-5 sm:px-6 transition-colors"
                >
                  <AccordionTrigger className="text-sm sm:text-[15px] font-semibold text-[#172923] dark:text-[#F2F7F5] text-left hover:no-underline py-4.5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm text-[#68756F] dark:text-[#9BB0A8] leading-relaxed pb-4.5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
