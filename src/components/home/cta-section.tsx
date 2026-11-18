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
          <div className="relative overflow-hidden rounded-[32px] border border-[#15966F]/30 border-b-[3px] border-b-[#04231C] bg-gradient-to-br from-[#052D24] via-[#0A4A3B] to-[#116F55] p-8 text-white shadow-[0_28px_64px_-16px_rgba(7,61,50,0.46),inset_0_1px_0_rgba(255,255,255,0.14)] sm:p-12 lg:p-14">
            {/* Ambient emerald glow & subtle architectural grid */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#34D399]/18 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-[#04231C]/60 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 0)",
                backgroundSize: "28px 28px",
              }}
            />

            <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Left Column: Editorial Headline + CTAs + Trust Row */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#6EE7B7] ring-2 ring-[#6EE7B7]/30" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#D1FAE5]">
                    2025–26 Scholarship Cycle Open
                  </span>
                </div>

                <h2 className="mt-5 font-heading text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-white sm:text-4xl lg:text-[46px]">
                  Your Future Shouldn&apos;t Be{" "}
                  <span className="font-editorial italic font-normal text-[#A7F3D0]">
                    Limited by Finances.
                  </span>
                </h2>

                <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-[#D1FAE5]/85 sm:text-[17px]">
                  {t(
                    "homeCta.subtitle",
                    "Take the first step towards achieving your educational goals. Apply for merit and need-based scholarships across Medical, Engineering, Management, Law, and Science."
                  )}
                </p>

                <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                  <Link
                    href="/sign-up"
                    id="cta-apply-btn"
                    className="group inline-flex h-13 items-center justify-between gap-3.5 rounded-full bg-white pl-6 pr-2 text-[14px] font-bold text-[#073D32] shadow-[0_12px_28px_-6px_rgba(4,35,28,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E8F5EF] sm:justify-center"
                  >
                    <span>
                      {t("homeCta.applyNow", "Start Your Scholarship Journey")}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#073D32] text-white transition-transform duration-300 group-hover:translate-x-0.5">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>

                  <Link
                    href="/contact"
                    id="cta-contact-btn"
                    className="inline-flex h-13 items-center justify-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-6 text-[14px] font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/18"
                  >
                    <MessageSquare className="h-4 w-4 text-[#6EE7B7]" />
                    <span>{t("homeCta.contactUs", "Speak with a Counselor")}</span>
                  </Link>
                </div>

                {/* Clean Micro-Trust Strip */}
                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12.5px] font-medium text-[#CBE6DA]/90">
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#6EE7B7]" />
                    100% Free Guidance
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#6EE7B7]" />
                    Zero Processing Fees
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#6EE7B7]" />
                    Response within 24 Hours
                  </span>
                </div>
              </div>

              {/* Right Column: Frosted Glass Milestone Grant Pass */}
              <div className="lg:col-span-5">
                <div className="rounded-[24px] border border-white/18 bg-white/[0.08] p-6 shadow-[0_24px_48px_-12px_rgba(4,35,28,0.45),inset_0_1px_0_rgba(255,255,255,0.22)] backdrop-blur-xl sm:p-7">
                  <div className="flex items-center justify-between gap-3 border-b border-white/12 pb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#15966F]/35 text-[#A7F3D0] ring-1 ring-white/15">
                        <ShieldCheck className="h-4 w-4" />
                      </span>
                      <span className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-white">
                        Milestone Grant Pass
                      </span>
                    </div>
                    <span className="rounded-full bg-[#34D399]/20 px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wider text-[#A7F3D0] ring-1 ring-[#6EE7B7]/30">
                      Active
                    </span>
                  </div>

                  <div className="mt-5 space-y-4">
                    {passHighlights.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.title}
                          className="flex items-start gap-3.5 rounded-xl border border-white/10 bg-white/[0.04] p-3.5 transition-colors hover:bg-white/[0.08]"
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/12 text-[#6EE7B7]">
                            <Icon className="h-4 w-4" />
                          </span>
                          <div>
                            <div className="font-heading text-[14px] font-bold text-white">
                              {item.title}
                            </div>
                            <div className="mt-0.5 text-[12px] leading-snug text-[#D1FAE5]/75">
                              {item.detail}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-white/12 pt-4 text-[12px]">
                    <div>
                      <span className="font-heading text-[15px] font-bold text-white">
                        15,000+
                      </span>
                      <span className="ml-1.5 text-[#D1FAE5]/80">
                        Scholars Guided
                      </span>
                    </div>
                    <span className="h-3.5 w-[1px] bg-white/20" />
                    <div>
                      <span className="font-heading text-[15px] font-bold text-[#6EE7B7]">
                        96%
                      </span>
                      <span className="ml-1.5 text-[#D1FAE5]/80">
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
