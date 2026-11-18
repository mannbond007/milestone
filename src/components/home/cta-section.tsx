"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLocale } from "@/components/providers/locale-provider";

export function CTASection() {
  const { t } = useLocale();

  return (
    <section
      id="cta"
      className="relative overflow-hidden border-t border-[#DCE8E3] bg-white py-20 md:py-28 dark:border-[#162E26] dark:bg-[#0B1411]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[32px] border border-[#DCE8E3] border-b-[3px] border-b-[#C5DDD3] bg-gradient-to-br from-[#FAFCFB] via-white to-[#EFF8F3] p-7 shadow-[0_24px_60px_-18px_rgba(7,61,50,0.1),inset_0_1px_0_rgba(255,255,255,1)] sm:p-11 lg:p-14 dark:border-[#1E3B32] dark:border-b-[#122922] dark:from-[#0E211B] dark:via-[#0D1E19] dark:to-[#112A22]">
            {/* Subtle architectural ambient glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#15966F]/[0.07] blur-3xl"
            />

            <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Left Column: Editorial Typography & Actions */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-lg border border-[#15966F]/20 bg-[#EBF7F1] px-3 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] dark:border-[#34D399]/25 dark:bg-[#112B23] dark:shadow-none">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#15966F] ring-2 ring-[#15966F]/25 dark:bg-[#34D399] dark:ring-[#34D399]/25" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#073D32] dark:text-[#6EE7B7]">
                    2025–26 Admissions Open
                  </span>
                  <span className="h-3 w-[1px] bg-[#15966F]/25 dark:bg-[#34D399]/25" />
                  <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#15966F] dark:text-[#34D399]">
                    Merit &amp; Need Grants
                  </span>
                </div>

                <h2 className="mt-5 font-heading text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-[#0E241E] sm:text-4xl lg:text-[46px] dark:text-white">
                  Your Future Shouldn&apos;t Be{" "}
                  <span className="font-editorial italic font-normal text-[#15966F] dark:text-[#34D399]">
                    Limited by Finances.
                  </span>
                </h2>

                <p className="mt-4 max-w-xl text-[15.5px] leading-[1.7] text-[#5C6B64] sm:text-[17px] dark:text-[#A0B3AC]">
                  {t(
                    "homeCta.subtitle",
                    "Take the first step towards achieving your educational goals. Apply for merit and need-based scholarships across Medical, Engineering, Management, Law, and Science."
                  )}
                </p>

                <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                  <Link
                    href="/sign-up"
                    id="cta-apply-btn"
                    className="group inline-flex h-13 items-center justify-between gap-3.5 rounded-full bg-[#073D32] pl-6 pr-2 text-[14px] font-semibold text-white shadow-[0_12px_26px_-6px_rgba(7,61,50,0.34)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0D5747] sm:justify-center dark:bg-[#15966F] dark:hover:bg-[#19AC80]"
                  >
                    <span>
                      {t("homeCta.applyNow", "Start Your Scholarship Journey")}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#073D32] transition-transform duration-300 group-hover:translate-x-0.5">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>

                  <Link
                    href="/contact"
                    id="cta-contact-btn"
                    className="inline-flex h-13 items-center justify-center gap-2.5 rounded-full border border-[#D4E3DC] bg-white px-6 text-[14px] font-semibold text-[#073D32] shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-[#15966F]/50 hover:text-[#15966F] dark:border-[#1E3B32] dark:bg-[#132E26] dark:text-white dark:hover:border-[#34D399]/50"
                  >
                    <MessageSquare className="h-4 w-4 text-[#15966F] dark:text-[#34D399]" />
                    <span>{t("homeCta.contactUs", "Speak with a Counselor")}</span>
                  </Link>
                </div>

                {/* Clean Institutional Trust Strip */}
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#E6F0EC] pt-6 text-[12.5px] font-medium text-[#5C6B64] dark:border-[#18332B] dark:text-[#A0B3AC]">
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#15966F] dark:text-[#34D399]" />
                    100% Free Guidance
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#15966F] dark:text-[#34D399]" />
                    Zero Processing Fees
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#15966F] dark:text-[#34D399]" />
                    24h Counselor Response
                  </span>
                </div>
              </div>

              {/* Right Column: Editorial Scholar Portrait Frame & Clean Metric Strip */}
              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-[24px] border border-[#DCE8E3] bg-white p-2.5 shadow-[0_20px_44px_-14px_rgba(7,61,50,0.14)] dark:border-[#1E3B32] dark:bg-[#0B1915]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px] bg-[#E8F5EF] dark:bg-[#132E26]">
                    <Image
                      src="/images/hero/hero-graduation-hdr.jpg"
                      alt="MileStone Scholarship graduates"
                      fill
                      sizes="(max-width: 1024px) 100vw, 440px"
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Crisp Unobstructed 3-Metric Strip */}
                  <div className="grid grid-cols-3 divide-x divide-[#E6F0EC] px-2 py-4 text-center dark:divide-[#18332B]">
                    <div>
                      <div className="font-heading text-[17px] font-bold tracking-tight text-[#073D32] sm:text-[19px] dark:text-white">
                        15,000+
                      </div>
                      <div className="mt-0.5 text-[11px] font-medium text-[#687A73] dark:text-[#A0B3AC]">
                        Scholars Guided
                      </div>
                    </div>
                    <div>
                      <div className="font-heading text-[17px] font-bold tracking-tight text-[#15966F] sm:text-[19px] dark:text-[#34D399]">
                        Up to ₹5L
                      </div>
                      <div className="mt-0.5 text-[11px] font-medium text-[#687A73] dark:text-[#A0B3AC]">
                        Grant Support
                      </div>
                    </div>
                    <div>
                      <div className="font-heading text-[17px] font-bold tracking-tight text-[#073D32] sm:text-[19px] dark:text-white">
                        96%
                      </div>
                      <div className="mt-0.5 text-[11px] font-medium text-[#687A73] dark:text-[#A0B3AC]">
                        Success Rate
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
