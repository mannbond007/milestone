"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles, Users } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLocale } from "@/components/providers/locale-provider";
import { EcosystemIcon } from "./ecosystem-icons";

export function BenefitsSection() {
  const { t } = useLocale();

  return (
    <section
      id="benefits"
      className="relative overflow-hidden border-t border-[#DCE8E3] bg-[#FAFCFB] py-20 md:py-24 dark:border-[#162E26] dark:bg-[#07120F]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Clean Editorial Section Header */}
        <ScrollReveal className="mb-10 flex flex-col gap-6 border-b border-[#E3ECE8] pb-8 lg:flex-row lg:items-end lg:justify-between dark:border-[#162E26]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-lg border border-[#15966F]/20 bg-[#EBF7F1] px-3 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] dark:border-[#34D399]/25 dark:bg-[#112B23] dark:shadow-none">
              <span className="h-1.5 w-1.5 rounded-full bg-[#15966F] ring-2 ring-[#15966F]/25 dark:bg-[#34D399] dark:ring-[#34D399]/25" />
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#073D32] dark:text-[#6EE7B7]">
                {t("homeBenefits.badge", "WHY CHOOSE MILESTONE")}
              </span>
              <span className="h-3 w-[1px] bg-[#15966F]/25 dark:bg-[#34D399]/25" />
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#15966F] dark:text-[#34D399]">
                Est. 2018
              </span>
            </div>

            <h2 className="mt-4 font-heading text-3xl font-bold leading-[1.12] tracking-[-0.025em] text-[#142C25] sm:text-4xl lg:text-[42px] dark:text-white">
              A Complete Academic &amp;{" "}
              <span className="relative inline-block font-editorial italic font-normal text-[#15966F] dark:text-[#34D399]">
                Scholarship Ecosystem
                <svg
                  aria-hidden="true"
                  viewBox="0 0 260 12"
                  fill="none"
                  className="pointer-events-none absolute -bottom-1 left-0 h-2.5 w-full text-[#15966F]/45 dark:text-[#34D399]/45"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9.5C68 3.5 192 2.5 258 8.5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-[#687A73] sm:text-base dark:text-[#A0B3AC]">
              {t(
                "homeBenefits.subtitle",
                "Since 2018, MileStone has combined financial scholarship grants with structured academic counselling, ensuring capable students never lose out due to lack of funds or guidance."
              )}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-4 rounded-full border border-[#DCE8E3] bg-white px-4 py-2 text-[12.5px] shadow-[0_2px_10px_rgba(7,61,50,0.04)] dark:border-[#1E3B32] dark:bg-[#0D1E19]">
              <span className="font-semibold text-[#142C25] dark:text-white">
                5 Core Pillars
              </span>
              <span className="h-3.5 w-[1px] bg-[#DCE8E3] dark:bg-[#1E3B32]" />
              <span className="font-semibold text-[#15966F] dark:text-[#34D399]">
                1,750+ Institutions
              </span>
            </div>

            <Link
              href="/contact"
              className="group/cta inline-flex items-center gap-3 rounded-full border border-[#D4E3DC] bg-white px-5 py-2.5 text-[13.5px] font-semibold text-[#142C25] shadow-[0_2px_10px_rgba(7,61,50,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#15966F]/45 hover:text-[#15966F] hover:shadow-[0_8px_20px_-6px_rgba(7,61,50,0.14)] dark:border-[#1E3B32] dark:bg-[#0D1E19] dark:text-white dark:hover:border-[#34D399]/50 dark:hover:text-[#34D399]"
            >
              <span>Book Free Counselling</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E8F5EF] text-[#15966F] transition-transform duration-300 group-hover/cta:translate-x-0.5 dark:bg-[#143329] dark:text-[#34D399]">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>
        </ScrollReveal>

        {/* 12-COLUMN MODERN ECOSYSTEM BENTO GRID */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* TILE 1: Scholarship Guidance (7 cols) */}
          <ScrollReveal className="lg:col-span-7">
            <Link
              href="/scholarships"
              className="group relative flex h-full min-h-[296px] flex-col justify-between overflow-hidden rounded-[26px] border border-[#DCE8E3] border-b-[3px] border-b-[#C5DDD3] bg-gradient-to-br from-white via-[#F7FBF9] to-[#E6F5EE] p-7 shadow-[0_14px_30px_-14px_rgba(7,61,50,0.14),inset_0_1px_0_rgba(255,255,255,0.95)] transition-all duration-300 hover:-translate-y-1 hover:border-[#15966F]/45 hover:shadow-[0_24px_48px_-16px_rgba(7,61,50,0.2)] sm:p-9 dark:border-[#1E3B32] dark:border-b-[#122922] dark:from-[#0E211B] dark:via-[#0D1E19] dark:to-[#112A22]"
            >
              {/* Right-side 3D illustration */}
              <div className="pointer-events-none relative mt-6 h-48 w-full overflow-hidden rounded-2xl sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:h-full sm:w-[48%] sm:rounded-none">
                <img
                  src="/images/ecosystem/scholarship.jpg"
                  alt="Graduation cap, books and scholarship diploma"
                  className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#F6FBF8] via-[#F6FBF8]/35 to-transparent dark:from-[#0E211B] dark:via-[#0E211B]/50" />
              </div>

              <div className="relative z-10 flex max-w-[340px] flex-col justify-between sm:h-full">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#15966F]/15 bg-[#E6F5EE] px-3.5 py-1.5 text-[12px] font-semibold text-[#073D32] dark:border-[#34D399]/25 dark:bg-[#143329] dark:text-[#6EE7B7]">
                    <Sparkles className="h-3.5 w-3.5 text-[#15966F] dark:text-[#34D399]" />
                    Up to ₹5,00,000 Grant Aid
                  </span>

                  <h3 className="mt-5 font-heading text-[28px] font-bold leading-[1.08] tracking-tight text-[#073D32] sm:text-[32px] dark:text-white">
                    Scholarship
                    <span className="block text-[#15966F] dark:text-[#34D399]">
                      Guidance
                    </span>
                  </h3>

                  <p className="mt-3 text-[13.5px] leading-relaxed text-[#5C6B64] sm:text-[14px] dark:text-[#A0B3AC]">
                    Merit and need-based financial support, tuition fee concessions, hostel fee waivers, and educational reward programs tailored for post-Class 12 and post-graduation scholars.
                  </p>
                </div>

                <div className="mt-6">
                  <span className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#073D32] to-[#15966F] py-2 pl-4 pr-2 text-[13px] font-semibold text-white shadow-[0_8px_18px_-4px_rgba(7,61,50,0.35)] transition-all duration-300 group-hover:shadow-[0_12px_24px_-4px_rgba(21,150,111,0.45)]">
                    <span>Explore Opportunities</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#073D32] transition-transform duration-300 group-hover:translate-x-0.5">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* TILE 2: University Assistance (5 cols) */}
          <ScrollReveal delay={0.05} className="lg:col-span-5">
            <Link
              href="/scholarships"
              className="group relative flex h-full min-h-[296px] flex-col justify-between overflow-hidden rounded-[26px] border border-[#15966F]/30 border-b-[3px] border-b-[#04241D] bg-[#073D32] p-7 text-white shadow-[0_18px_38px_-14px_rgba(7,61,50,0.38)] transition-all duration-300 hover:-translate-y-1 hover:border-[#34D399]/50 hover:shadow-[0_26px_50px_-14px_rgba(7,61,50,0.48)] sm:p-8"
            >
              <img
                src="/images/ecosystem/university.jpg"
                alt="University campus student"
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                loading="lazy"
              />
              {/* Directional dark emerald scrim for crisp text legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#052921]/95 via-[#073D32]/78 to-[#073D32]/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04211B]/85 via-transparent to-transparent" />

              <div className="relative z-10 flex items-center justify-between gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] border border-white/25 bg-white/15 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
                  <EcosystemIcon id="university" darkSurface className="h-6 w-6" />
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/30 px-3.5 py-1.5 text-[12px] font-semibold text-white backdrop-blur-md">
                  <Users className="h-3.5 w-3.5 text-[#6EE7B7]" />
                  1,750+ Partner Institutions
                </span>
              </div>

              <div className="relative z-10 mt-10 flex items-end justify-between gap-4">
                <div className="max-w-[290px]">
                  <h3 className="font-heading text-[24px] font-bold leading-[1.12] tracking-tight text-white sm:text-[26px]">
                    University
                    <span className="block text-[#6EE7B7]">Assistance</span>
                  </h3>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-[#D8EDE4]">
                    Objective institution selection across Government Medical Colleges, NMC-compliant abroad universities, NITs, and AICTE institutions.
                  </p>
                </div>

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:bg-white group-hover:text-[#073D32]">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </Link>
          </ScrollReveal>

          {/* TILE 3: Application Support (4 cols) */}
          <ScrollReveal delay={0.08} className="lg:col-span-4">
            <Link
              href="/how-to-apply"
              className="group relative flex h-full min-h-[252px] flex-col justify-between overflow-hidden rounded-[24px] border border-[#DCE8E3] border-b-[3px] border-b-[#C5DDD3] bg-gradient-to-br from-white via-[#F9FCFA] to-[#EBF7F1] p-6 shadow-[0_12px_26px_-12px_rgba(7,61,50,0.12),inset_0_1px_0_rgba(255,255,255,0.95)] transition-all duration-300 hover:-translate-y-1 hover:border-[#15966F]/45 hover:shadow-[0_22px_40px_-14px_rgba(7,61,50,0.18)] sm:p-7 dark:border-[#1E3B32] dark:border-b-[#122922] dark:from-[#0E211B] dark:via-[#0D1E19] dark:to-[#112A22]"
            >
              {/* Right-side 3D illustration */}
              <div className="pointer-events-none absolute bottom-0 right-0 h-[62%] w-[44%] overflow-hidden">
                <img
                  src="/images/ecosystem/application.jpg"
                  alt="Online scholarship application checklist"
                  className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#F7FBF9] via-[#F7FBF9]/40 to-transparent dark:from-[#0D1E19] dark:via-[#0D1E19]/50" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#F7FBF9] via-transparent to-transparent dark:from-[#0D1E19]" />
              </div>

              <div className="relative z-10">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#15966F]/15 bg-[#E8F5EF] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] dark:border-[#34D399]/20 dark:bg-[#132E26]">
                  <EcosystemIcon id="support" className="h-6 w-6" />
                </span>

                <h3 className="mt-5 font-heading text-[20px] font-bold tracking-tight text-[#142C25] dark:text-white">
                  Application Support
                </h3>

                <p className="mt-2 max-w-[66%] text-[13px] leading-relaxed text-[#687A73] dark:text-[#A0B3AC]">
                  End-to-end assistance with online registration, document verification checklists, and scholarship assessment test preparation.
                </p>
              </div>

              <div className="relative z-10 mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-[#15966F] transition-colors group-hover:text-[#073D32] dark:text-[#34D399] dark:group-hover:text-white">
                <span>Get Support</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E8F5EF] text-[#15966F] transition-transform duration-300 group-hover:translate-x-0.5 dark:bg-[#143329] dark:text-[#34D399]">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          </ScrollReveal>

          {/* TILE 4: Personalized Counselling (4 cols) */}
          <ScrollReveal delay={0.12} className="lg:col-span-4">
            <Link
              href="/contact"
              className="group relative flex h-full min-h-[252px] flex-col justify-between overflow-hidden rounded-[24px] border border-[#DCE8E3] border-b-[3px] border-b-[#C5DDD3] bg-gradient-to-br from-white via-[#F9FCFA] to-[#E6F4ED] p-6 shadow-[0_12px_26px_-12px_rgba(7,61,50,0.12),inset_0_1px_0_rgba(255,255,255,0.95)] transition-all duration-300 hover:-translate-y-1 hover:border-[#15966F]/45 hover:shadow-[0_22px_40px_-14px_rgba(7,61,50,0.18)] sm:p-7 dark:border-[#1E3B32] dark:border-b-[#122922] dark:from-[#0E211B] dark:via-[#0D1E19] dark:to-[#112A22]"
            >
              {/* Right-side 3D illustration */}
              <div className="pointer-events-none absolute bottom-0 right-0 h-[62%] w-[44%] overflow-hidden">
                <img
                  src="/images/ecosystem/counselling.jpg"
                  alt="1-on-1 academic mentorship headset"
                  className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#F7FBF9] via-[#F7FBF9]/40 to-transparent dark:from-[#0D1E19] dark:via-[#0D1E19]/50" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#F7FBF9] via-transparent to-transparent dark:from-[#0D1E19]" />
              </div>

              <div className="relative z-10">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#15966F]/15 bg-[#E8F5EF] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] dark:border-[#34D399]/20 dark:bg-[#132E26]">
                  <EcosystemIcon id="counselling" className="h-6 w-6" />
                </span>

                <h3 className="mt-5 font-heading text-[20px] font-bold tracking-tight text-[#142C25] dark:text-white">
                  Personalized Counselling
                </h3>

                <p className="mt-2 max-w-[66%] text-[13px] leading-relaxed text-[#687A73] dark:text-[#A0B3AC]">
                  1-on-1 academic mentorship and career roadmap sessions with senior educators from AIIMS, IITs, IIMs, and the legal profession.
                </p>
              </div>

              <div className="relative z-10 mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-[#15966F] transition-colors group-hover:text-[#073D32] dark:text-[#34D399] dark:group-hover:text-white">
                <span>Book a Session</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E8F5EF] text-[#15966F] transition-transform duration-300 group-hover:translate-x-0.5 dark:bg-[#143329] dark:text-[#34D399]">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          </ScrollReveal>

          {/* TILE 5: Admission Guidance (4 cols) */}
          <ScrollReveal delay={0.16} className="lg:col-span-4">
            <Link
              href="/how-to-apply"
              className="group relative flex h-full min-h-[252px] flex-col justify-between overflow-hidden rounded-[24px] border border-[#15966F]/40 border-b-[3px] border-b-[#04241D] bg-gradient-to-br from-[#063228] via-[#0A4D3E] to-[#127A5C] p-6 text-white shadow-[0_18px_38px_-14px_rgba(7,61,50,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-[#34D399]/55 hover:shadow-[0_26px_50px_-14px_rgba(21,150,111,0.45)] sm:p-7"
            >
              {/* Right-side 3D illustration */}
              <div className="pointer-events-none absolute bottom-0 right-0 h-[66%] w-[44%] overflow-hidden">
                <img
                  src="/images/ecosystem/admission.jpg"
                  alt="Admission guidance checklist"
                  className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#094739] via-[#094739]/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#094739] via-transparent to-transparent" />
              </div>

              <div className="relative z-10">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] border border-white/25 bg-white/12 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.28)]">
                  <EcosystemIcon id="admission" darkSurface className="h-6 w-6" />
                </span>

                <h3 className="mt-5 font-heading text-[20px] font-bold tracking-tight text-white">
                  Admission <span className="text-[#6EE7B7]">Guidance</span>
                </h3>

                <p className="mt-2 max-w-[66%] text-[13px] leading-relaxed text-[#D1FAE5]/90">
                  Structured support through centralized entrance counselling for NEET-UG, AYUSH, JEE/JoSAA, CLAT, and MBA/PGDM admissions.
                </p>
              </div>

              <div className="relative z-10 mt-6">
                <span className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/12 px-4 py-1.5 text-[12.5px] font-semibold text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-[#073D32]">
                  <span>Know More</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
