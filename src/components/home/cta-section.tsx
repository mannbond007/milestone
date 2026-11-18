"use client";

import Link from "next/link";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  MessageSquare,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLocale } from "@/components/providers/locale-provider";

const passHighlights = [
  {
    icon: Award,
    title: "Up to ₹5,00,000 Grant Aid",
    detail: "Merit & need-based tuition and hostel support",
  },
  {
    icon: Building2,
    title: "1,750+ Partner Institutions",
    detail: "GMCs, IITs, NITs, NLUs & NMC-compliant universities",
  },
  {
    icon: UserCheck,
    title: "Dedicated 1-on-1 Mentorship",
    detail: "Complete verification & admission counselling",
  },
];

export function CTASection() {
  const { t } = useLocale();

  return (
    <section
      id="cta"
      className="relative overflow-hidden border-t border-[#DCE8E3] bg-[#FAFCFB] py-16 md:py-24 dark:border-[#162E26] dark:bg-[#07120F]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[32px] border border-[#143D32] border-b-[3px] border-b-[#03140F] bg-gradient-to-br from-[#061E18] via-[#092B22] to-[#0E3B2E] p-8 text-white shadow-[0_28px_64px_-16px_rgba(4,24,18,0.52),inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-12 lg:p-14">
            {/* Subtle ambient glow & refined dot matrix */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#15966F]/18 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-[#03140F]/70 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 0)",
                backgroundSize: "28px 28px",
              }}
            />

            <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Left Column: Editorial Headline + CTAs + Trust Row */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-lg border border-white/12 bg-white/[0.06] px-3 py-1.5 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#34D399] ring-2 ring-[#34D399]/25" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#E2F3EC]">
                    2025–26 Scholarship Cycle Open
                  </span>
                </div>

                <h2 className="mt-5 font-heading text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-white sm:text-4xl lg:text-[46px]">
                  Your Future Shouldn&apos;t Be{" "}
                  <span className="font-editorial italic font-normal text-[#86DFB8]">
                    Limited by Finances.
                  </span>
                </h2>

                <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-[#B9CEC5] sm:text-[17px]">
                  {t(
                    "homeCta.subtitle",
                    "Take the first step towards achieving your educational goals. Apply for merit and need-based scholarships across Medical, Engineering, Management, Law, and Science."
                  )}
                </p>

                <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                  <Link
                    href="/sign-up"
                    id="cta-apply-btn"
                    className="group inline-flex h-13 items-center justify-between gap-3.5 rounded-full bg-white pl-6 pr-2 text-[14px] font-bold text-[#07261E] shadow-[0_12px_28px_-6px_rgba(3,20,15,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EDF7F2] sm:justify-center"
                  >
                    <span>
                      {t("homeCta.applyNow", "Start Your Scholarship Journey")}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#092B22] text-white transition-transform duration-300 group-hover:translate-x-0.5">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>

                  <Link
                    href="/contact"
                    id="cta-contact-btn"
                    className="inline-flex h-13 items-center justify-center gap-2.5 rounded-full border border-white/18 bg-white/[0.06] px-6 text-[14px] font-semibold text-[#F1F8F5] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/[0.12]"
                  >
                    <MessageSquare className="h-4 w-4 text-[#86DFB8]" />
                    <span>{t("homeCta.contactUs", "Speak with a Counselor")}</span>
                  </Link>
                </div>

                {/* Clean Micro-Trust Strip */}
                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12.5px] font-medium text-[#B9CEC5]">
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#34D399]" />
                    100% Free Guidance
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#34D399]" />
                    Zero Processing Fees
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#34D399]" />
                    Response within 24 Hours
                  </span>
                </div>
              </div>

              {/* Right Column: Crisp Pure-White Elevated Milestone Grant Pass */}
              <div className="lg:col-span-5">
                <div className="rounded-[24px] border border-white/90 bg-white p-6 text-[#142C25] shadow-[0_26px_54px_-12px_rgba(3,20,15,0.55),inset_0_1px_0_rgba(255,255,255,1)] sm:p-7 dark:border-[#1E3B32] dark:bg-[#0D1E19] dark:text-white">
                  <div className="flex items-center justify-between gap-3 border-b border-[#E6F0EC] pb-4 dark:border-[#18332B]">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E8F5EF] text-[#15966F] dark:bg-[#132E26] dark:text-[#34D399]">
                        <ShieldCheck className="h-4 w-4" />
                      </span>
                      <span className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#073D32] dark:text-white">
                        Milestone Grant Pass
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#15966F]/20 bg-[#E8F5EF] px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wider text-[#0B7453] dark:border-[#34D399]/25 dark:bg-[#132E26] dark:text-[#6EE7B7]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#15966F] dark:bg-[#34D399]" />
                      Active
                    </span>
                  </div>

                  <div className="mt-4 space-y-3">
                    {passHighlights.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.title}
                          className="flex items-start gap-3.5 rounded-xl border border-[#E5EFEA] bg-[#F8FCFA] p-3.5 transition-colors hover:border-[#15966F]/30 hover:bg-[#F1F9F5] dark:border-[#18332B] dark:bg-[#11261F] dark:hover:border-[#34D399]/30"
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#15966F]/15 bg-white text-[#15966F] shadow-xs dark:border-[#34D399]/20 dark:bg-[#16352B] dark:text-[#34D399]">
                            <Icon className="h-4 w-4" />
                          </span>
                          <div>
                            <div className="font-heading text-[14px] font-bold text-[#073D32] dark:text-white">
                              {item.title}
                            </div>
                            <div className="mt-0.5 text-[12px] leading-snug text-[#687A73] dark:text-[#A0B3AC]">
                              {item.detail}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-[#E6F0EC] pt-4 text-[12px] dark:border-[#18332B]">
                    <div>
                      <span className="font-heading text-[15px] font-bold text-[#073D32] dark:text-white">
                        15,000+
                      </span>
                      <span className="ml-1.5 text-[#687A73] dark:text-[#A0B3AC]">
                        Scholars Guided
                      </span>
                    </div>
                    <span className="h-3.5 w-[1px] bg-[#DCE8E3] dark:bg-[#1E3B32]" />
                    <div>
                      <span className="font-heading text-[15px] font-bold text-[#15966F] dark:text-[#34D399]">
                        96%
                      </span>
                      <span className="ml-1.5 text-[#687A73] dark:text-[#A0B3AC]">
                        Admission Rate
                      </span>
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
