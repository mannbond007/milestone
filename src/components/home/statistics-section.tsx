"use client";

import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Users, Trophy, Building2, TrendingUp } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLocale } from "@/components/providers/locale-provider";

export function StatisticsSection() {
  const { t } = useLocale();

  const stats = [
    {
      num: "01",
      value: 15000,
      suffix: "+",
      label: t("homeStats.students", "Students Supported"),
      subtext: "Across 15+ Indian states & union territories",
      icon: Users,
      backingGradient: "bg-gradient-to-br from-[#165243] via-[#103D32] to-[#0A2720]",
      badgeGradient: "bg-gradient-to-b from-[#1B6351] to-[#0E362C]",
      iconColor: "text-[#103D32] dark:text-[#34A880]",
    },
    {
      num: "02",
      value: 5200,
      suffix: "+",
      label: t("homeStats.scholarships", "Scholarship Opportunities"),
      subtext: "Merit & need-based grants up to ₹5,00,000",
      icon: Trophy,
      backingGradient: "bg-gradient-to-br from-[#23755E] via-[#1B5E4B] to-[#124234]",
      badgeGradient: "bg-gradient-to-b from-[#268067] to-[#175141]",
      iconColor: "text-[#1B5E4B] dark:text-[#34A880]",
    },
    {
      num: "03",
      value: 1750,
      suffix: "+",
      label: t("homeStats.institutions", "Partner Institutions"),
      subtext: "Recognized universities & medical colleges",
      icon: Building2,
      backingGradient: "bg-gradient-to-br from-[#2B9973] via-[#258B68] to-[#1A634A]",
      badgeGradient: "bg-gradient-to-b from-[#31A57D] to-[#1F7557]",
      iconColor: "text-[#258B68] dark:text-[#34A880]",
    },
    {
      num: "04",
      value: 96,
      suffix: "%",
      label: t("homeStats.successRate", "Success Rate"),
      subtext: "Verified scholar admission & grant realization",
      icon: TrendingUp,
      backingGradient: "bg-gradient-to-br from-[#35544B] via-[#2A473E] to-[#1C302A]",
      badgeGradient: "bg-gradient-to-b from-[#3C6156] to-[#243D35]",
      iconColor: "text-[#2A473E] dark:text-[#34A880]",
    },
  ];

  return (
    <section
      id="statistics"
      aria-label="Platform Statistics and Institutional Credibility"
      className="bg-[#F4F7F5] dark:bg-[#0B1411] pb-20 md:pb-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          {/* Outer Architectural Container */}
          <div className="rounded-[32px] bg-white/80 dark:bg-[#111E1A]/85 border border-[#D5E2DC] dark:border-[#21362E] px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 shadow-[0_24px_60px_-15px_rgba(16,61,50,0.08)]">
            {/* Clean Top Header Bar */}
            <div className="mb-11 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#DCE6E1] dark:border-[#21362E]">
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

            {/* 4-Column Layered 3D Perspective Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 lg:gap-7 pr-2 sm:pr-3">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="group relative pt-3 pr-3.5 pb-2">
                    {/* More Pronounced Angled & Tilted Backing Plate */}
                    <div
                      className={`
                        absolute top-0 right-0 bottom-1.5 left-3.5
                        rounded-[24px] ${stat.backingGradient}
                        -skew-y-3 rotate-[1.5deg] origin-bottom-left
                        transition-all duration-300 ease-out
                        group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-[2.2deg]
                        shadow-[0_18px_34px_-12px_rgba(16,61,50,0.42),inset_0_1px_0_rgba(255,255,255,0.2)]
                      `}
                      aria-hidden="true"
                    />

                    {/* Crisp Foreground White Card with Subtle Counter-Tilt */}
                    <div
                      className="
                        relative z-10 h-full
                        rounded-[24px] bg-gradient-to-b from-white via-white to-[#FAFDFB]
                        dark:from-[#15251F] dark:via-[#12201B] dark:to-[#0F1B17]
                        border border-[#E2ECE7] dark:border-[#263F36]
                        px-6 py-7 sm:px-6 sm:py-8
                        flex flex-col items-center text-center justify-between
                        min-h-[268px]
                        shadow-[0_24px_46px_-14px_rgba(16,61,50,0.20),0_6px_16px_-4px_rgba(16,61,50,0.08),inset_0_1.5px_0_rgba(255,255,255,0.95)]
                        dark:shadow-[0_24px_46px_-14px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)]
                        transition-transform duration-300 ease-out
                        group-hover:-translate-y-1.5
                      "
                    >
                      {/* Top Minimalist Icon with Soft Ring */}
                      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#F4F7F5] dark:bg-[#0D1814] border border-[#E2ECE7] dark:border-[#263F36] shadow-[inset_0_1px_2px_rgba(16,61,50,0.04)]">
                        <Icon className={`w-5 h-5 stroke-[1.75] ${stat.iconColor}`} />
                      </div>

                      {/* Center Metric & Copy */}
                      <div className="my-5 w-full">
                        <div className="font-heading text-3xl sm:text-[36px] font-extrabold tracking-[-0.03em] text-[#172923] dark:text-[#F2F7F5] leading-none">
                          <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                        </div>
                        <h3 className="mt-3 font-heading text-[12.5px] font-extrabold uppercase tracking-[0.08em] text-[#103D32] dark:text-[#34A880]">
                          {stat.label}
                        </h3>
                        <div className="w-8 h-[1.5px] bg-[#DCE6E1] dark:bg-[#263F36] mx-auto my-2.5 rounded-full" />
                        <p className="text-xs text-[#68756F] dark:text-[#9BB0A8] leading-relaxed max-w-[205px] mx-auto">
                          {stat.subtext}
                        </p>
                      </div>

                      {/* Bottom Sculpted 3D Circular Medallion (01–04) */}
                      <div
                        className={`
                          w-11 h-11 rounded-full ${stat.badgeGradient}
                          text-white font-heading text-xs font-bold tracking-wider
                          flex items-center justify-center
                          ring-4 ring-[#F4F7F5] dark:ring-[#0D1814]
                          shadow-[0_10px_18px_-4px_rgba(16,61,50,0.45),inset_0_1.5px_1px_rgba(255,255,255,0.35),inset_0_-2px_2px_rgba(0,0,0,0.25)]
                        `}
                      >
                        {stat.num}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
