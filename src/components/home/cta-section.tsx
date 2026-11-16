"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLocale } from "@/components/providers/locale-provider";

export function CTASection() {
  const { t } = useLocale();

  return (
    <section
      id="cta"
      className="py-16 md:py-24 bg-[#F4F7F5] dark:bg-[#0B1411]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#103D32] to-[#0A261F] text-white px-6 py-16 sm:px-12 sm:py-20 lg:py-24 text-center shadow-premium">
            {/* Subtle Architectural Rings */}
            <div
              className="absolute -top-32 -left-32 w-96 h-96 rounded-full border border-white/10 pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full border border-white/10 pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.12]">
                Your Future Shouldn&apos;t Be{" "}
                <span className="font-editorial italic font-normal text-[#CBE6DA]">
                  Limited by Finances.
                </span>
              </h2>

              <p className="mt-5 text-base sm:text-lg text-[#CBE6DA]/90 max-w-xl mx-auto leading-relaxed font-normal">
                {t(
                  "homeCta.subtitle",
                  "Take the first step towards achieving your educational goals."
                )}
              </p>

              <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/sign-up"
                  id="cta-apply-btn"
                  className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-center gap-3.5 h-13 pl-7 pr-2.5 rounded-full text-sm font-semibold bg-white hover:bg-[#E8F3EE] text-[#103D32] transition-all duration-200 shadow-lg group"
                >
                  <span>
                    {t("homeCta.applyNow", "Start Your Scholarship Journey")}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#103D32] text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>

                <Link
                  href="/contact"
                  id="cta-contact-btn"
                  className="w-full sm:w-auto inline-flex items-center justify-center h-13 px-7 rounded-full text-sm font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-colors"
                >
                  <span>{t("homeCta.contactUs", "Contact Us")}</span>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
