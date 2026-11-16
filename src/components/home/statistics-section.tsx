"use client";

import Image from "next/image";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import {
  Users,
  Trophy,
  Building2,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  Award,
  Globe,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLocale } from "@/components/providers/locale-provider";

export function StatisticsSection() {
  const { t } = useLocale();

  return (
    <section
      id="statistics"
      aria-label="Platform Statistics and Institutional Credibility"
      className="bg-[#F4F7F5] dark:bg-[#0B1411] pb-20 md:pb-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          {/* Outer Sculpted Architectural Bento Frame */}
          <div className="rounded-[32px] bg-white dark:bg-[#111E1A] border border-[#D5E2DC] dark:border-[#21362E] p-3.5 sm:p-5 shadow-[0_24px_60px_-15px_rgba(16,61,50,0.09)]">
            {/* Top Institutional Header Bar Inside Frame */}
            <div className="px-4 py-3 sm:px-6 sm:py-3.5 mb-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E6EFEA] dark:border-[#21362E]">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#258B68] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#258B68]" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#103D32] dark:text-[#34A880]">
                  {t("homeStats.badge", "OUR IMPACT")} • VERIFIED METRICS (2018–2026)
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {["NMC", "AICTE", "UGC", "BCI"].map((body) => (
                  <span
                    key={body}
                    className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F4F7F5] dark:bg-[#0B1411] text-[#103D32] dark:text-[#CBE6DA] border border-[#D5E2DC] dark:border-[#21362E]"
                  >
                    {body} Aligned
                  </span>
                ))}
              </div>
            </div>

            {/* 4-Column Bespoke Bento Stat Grid — All with Signature Concentric Curve Design */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
              {/* CARD 1: Lead Anchor Tile — Deep Imperial Forest Green */}
              <div className="group relative overflow-hidden rounded-[26px] bg-gradient-to-br from-[#103D32] via-[#0D3329] to-[#071E18] text-white p-7 sm:p-8 flex flex-col justify-between min-h-[255px] shadow-[0_14px_34px_-10px_rgba(16,61,50,0.3)] transition-all duration-300 hover:-translate-y-0.5">
                {/* Signature Double Concentric Curve Motif */}
                <div
                  className="absolute -right-12 -top-12 w-48 h-48 rounded-full border border-white/[0.11] bg-white/[0.02] pointer-events-none transition-transform duration-500 group-hover:scale-110"
                  aria-hidden="true"
                />
                <div
                  className="absolute -right-4 -top-4 w-28 h-28 rounded-full border border-white/[0.08] pointer-events-none transition-transform duration-500 group-hover:scale-105"
                  aria-hidden="true"
                />
                <div
                  className="absolute -left-16 -bottom-16 w-40 h-40 rounded-full border border-white/[0.06] pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#CBE6DA] bg-white/10 backdrop-blur-xs px-3 py-1.5 rounded-full border border-white/10">
                    <Sparkles className="w-3 h-3 text-[#34A880]" />
                    Scholar Network
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15 flex items-center justify-center text-[#34A880]">
                    <Users className="w-4.5 h-4.5" />
                  </div>
                </div>

                <div className="relative z-10 my-6">
                  <div className="font-heading text-4xl sm:text-[44px] font-extrabold tracking-[-0.03em] text-white leading-none">
                    <AnimatedCounter value={15000} suffix="+" />
                  </div>
                  <h3 className="mt-3 font-heading text-base font-bold text-white">
                    {t("homeStats.students", "Students Supported")}
                  </h3>
                  <p className="mt-1 text-xs text-[#CBE6DA]/85 leading-relaxed">
                    Across 15+ Indian states &amp; union territories
                  </p>
                </div>

                {/* Mini Scholar Avatar Footer */}
                <div className="relative z-10 pt-4 border-t border-white/12 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[
                      "/scholars/priya.png",
                      "/scholars/radhe.png",
                      "/scholars/sushma_v.png",
                    ].map((src, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full border border-[#103D32] overflow-hidden relative bg-[#258B68]"
                      >
                        <Image
                          src={src}
                          alt="Scholar"
                          fill
                          sizes="24px"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#34A880]">
                    Active Fellows
                  </span>
                </div>
              </div>

              {/* CARD 2: Scholarship Opportunities — Sculpted Alabaster Tile with Concentric Curves */}
              <div className="group relative overflow-hidden rounded-[26px] bg-gradient-to-br from-white via-[#F9FBFA] to-[#F1F7F4] dark:from-[#15241F] dark:via-[#111E1A] dark:to-[#0D1814] border border-[#D5E2DC] dark:border-[#21362E] hover:border-[#258B68]/60 p-7 sm:p-8 flex flex-col justify-between min-h-[255px] shadow-premium transition-all duration-300 hover:-translate-y-0.5">
                {/* Signature Double Concentric Curve Motif */}
                <div
                  className="absolute -right-12 -top-12 w-48 h-48 rounded-full border border-[#258B68]/[0.14] bg-[#E8F3EE]/40 dark:bg-[#258B68]/[0.05] pointer-events-none transition-transform duration-500 group-hover:scale-110"
                  aria-hidden="true"
                />
                <div
                  className="absolute -right-4 -top-4 w-28 h-28 rounded-full border border-[#258B68]/[0.10] pointer-events-none transition-transform duration-500 group-hover:scale-105"
                  aria-hidden="true"
                />
                <div
                  className="absolute -left-16 -bottom-16 w-40 h-40 rounded-full border border-[#258B68]/[0.07] pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#103D32] dark:text-[#34A880] bg-[#E8F3EE] dark:bg-[#172923] px-3 py-1.5 rounded-full border border-[#258B68]/15">
                    <Award className="w-3 h-3 text-[#258B68] dark:text-[#34A880]" />
                    Fellowships
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-white dark:bg-[#111E1A] border border-[#D5E2DC] dark:border-[#21362E] flex items-center justify-center text-[#103D32] dark:text-[#34A880] shadow-xs">
                    <Trophy className="w-4.5 h-4.5" />
                  </div>
                </div>

                <div className="relative z-10 my-6">
                  <div className="font-heading text-4xl sm:text-[44px] font-extrabold tracking-[-0.03em] text-[#172923] dark:text-[#F2F7F5] leading-none">
                    <AnimatedCounter value={5200} suffix="+" />
                  </div>
                  <h3 className="mt-3 font-heading text-base font-bold text-[#172923] dark:text-[#F2F7F5]">
                    {t("homeStats.scholarships", "Scholarship Opportunities")}
                  </h3>
                  <p className="mt-1 text-xs text-[#68756F] dark:text-[#9BB0A8] leading-relaxed">
                    Merit &amp; need-based tuition grants
                  </p>
                </div>

                <div className="relative z-10 pt-4 border-t border-[#DCE6E1] dark:border-[#21362E] flex items-center justify-between text-[11px]">
                  <span className="font-medium text-[#68756F] dark:text-[#9BB0A8]">
                    Max Grant Tier
                  </span>
                  <span className="font-bold text-[#103D32] dark:text-[#34A880] bg-[#E8F3EE] dark:bg-[#172923] px-2.5 py-0.5 rounded-md border border-[#258B68]/15">
                    Up to ₹5,00,000
                  </span>
                </div>
              </div>

              {/* CARD 3: Partner Institutions — Sculpted Alabaster Tile with Concentric Curves */}
              <div className="group relative overflow-hidden rounded-[26px] bg-gradient-to-br from-white via-[#F9FBFA] to-[#F1F7F4] dark:from-[#15241F] dark:via-[#111E1A] dark:to-[#0D1814] border border-[#D5E2DC] dark:border-[#21362E] hover:border-[#258B68]/60 p-7 sm:p-8 flex flex-col justify-between min-h-[255px] shadow-premium transition-all duration-300 hover:-translate-y-0.5">
                {/* Signature Double Concentric Curve Motif */}
                <div
                  className="absolute -right-12 -top-12 w-48 h-48 rounded-full border border-[#258B68]/[0.14] bg-[#E8F3EE]/40 dark:bg-[#258B68]/[0.05] pointer-events-none transition-transform duration-500 group-hover:scale-110"
                  aria-hidden="true"
                />
                <div
                  className="absolute -right-4 -top-4 w-28 h-28 rounded-full border border-[#258B68]/[0.10] pointer-events-none transition-transform duration-500 group-hover:scale-105"
                  aria-hidden="true"
                />
                <div
                  className="absolute -left-16 -bottom-16 w-40 h-40 rounded-full border border-[#258B68]/[0.07] pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#103D32] dark:text-[#34A880] bg-[#E8F3EE] dark:bg-[#172923] px-3 py-1.5 rounded-full border border-[#258B68]/15">
                    <Globe className="w-3 h-3 text-[#258B68] dark:text-[#34A880]" />
                    Institutions
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-white dark:bg-[#111E1A] border border-[#D5E2DC] dark:border-[#21362E] flex items-center justify-center text-[#103D32] dark:text-[#34A880] shadow-xs">
                    <Building2 className="w-4.5 h-4.5" />
                  </div>
                </div>

                <div className="relative z-10 my-6">
                  <div className="font-heading text-4xl sm:text-[44px] font-extrabold tracking-[-0.03em] text-[#172923] dark:text-[#F2F7F5] leading-none">
                    <AnimatedCounter value={1750} suffix="+" />
                  </div>
                  <h3 className="mt-3 font-heading text-base font-bold text-[#172923] dark:text-[#F2F7F5]">
                    {t("homeStats.institutions", "Partner Institutions")}
                  </h3>
                  <p className="mt-1 text-xs text-[#68756F] dark:text-[#9BB0A8] leading-relaxed">
                    Recognized universities &amp; medical colleges
                  </p>
                </div>

                <div className="relative z-10 pt-4 border-t border-[#DCE6E1] dark:border-[#21362E] flex items-center justify-between text-[11px]">
                  <span className="font-medium text-[#68756F] dark:text-[#9BB0A8]">
                    Coverage
                  </span>
                  <span className="font-bold text-[#103D32] dark:text-[#34A880] bg-[#E8F3EE] dark:bg-[#172923] px-2.5 py-0.5 rounded-md border border-[#258B68]/15">
                    India &amp; NMC Abroad
                  </span>
                </div>
              </div>

              {/* CARD 4: Success Rate — Tactile Soft Mint Accent Tile with Concentric Curves */}
              <div className="group relative overflow-hidden rounded-[26px] bg-gradient-to-br from-[#E8F3EE] via-[#E1EFE8] to-[#D6E9E0] dark:from-[#172923] dark:via-[#14241E] dark:to-[#0F1C18] border border-[#BFDCD0] dark:border-[#258B68]/30 p-7 sm:p-8 flex flex-col justify-between min-h-[255px] shadow-premium transition-all duration-300 hover:-translate-y-0.5">
                {/* Signature Double Concentric Curve Motif */}
                <div
                  className="absolute -right-12 -top-12 w-48 h-48 rounded-full border border-[#103D32]/[0.12] dark:border-white/[0.10] bg-white/35 dark:bg-white/[0.02] pointer-events-none transition-transform duration-500 group-hover:scale-110"
                  aria-hidden="true"
                />
                <div
                  className="absolute -right-4 -top-4 w-28 h-28 rounded-full border border-[#103D32]/[0.09] dark:border-white/[0.07] pointer-events-none transition-transform duration-500 group-hover:scale-105"
                  aria-hidden="true"
                />
                <div
                  className="absolute -left-16 -bottom-16 w-40 h-40 rounded-full border border-[#103D32]/[0.06] dark:border-white/[0.05] pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#103D32] dark:text-[#34A880] bg-white/90 dark:bg-[#111E1A] px-3 py-1.5 rounded-full border border-[#103D32]/10">
                    <ShieldCheck className="w-3 h-3 text-[#258B68] dark:text-[#34A880]" />
                    Verified Rate
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-white/95 dark:bg-[#111E1A] border border-[#103D32]/10 flex items-center justify-center text-[#103D32] dark:text-[#34A880] shadow-xs">
                    <TrendingUp className="w-4.5 h-4.5" />
                  </div>
                </div>

                <div className="relative z-10 my-6">
                  <div className="font-heading text-4xl sm:text-[44px] font-extrabold tracking-[-0.03em] text-[#103D32] dark:text-[#F2F7F5] leading-none">
                    <AnimatedCounter value={96} suffix="%" />
                  </div>
                  <h3 className="mt-3 font-heading text-base font-bold text-[#103D32] dark:text-[#F2F7F5]">
                    {t("homeStats.successRate", "Success Rate")}
                  </h3>
                  <p className="mt-1 text-xs text-[#172923]/80 dark:text-[#9BB0A8] leading-relaxed">
                    Verified scholar admission &amp; grant realization
                  </p>
                </div>

                {/* Visual 96% Progress Meter */}
                <div className="relative z-10 pt-4 border-t border-[#103D32]/12 dark:border-[#258B68]/25">
                  <div className="w-full h-2 rounded-full bg-white/85 dark:bg-[#0B1411] overflow-hidden p-0.5">
                    <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-[#103D32] to-[#258B68] dark:from-[#258B68] dark:to-[#34A880]" />
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
