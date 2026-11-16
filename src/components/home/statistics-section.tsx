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
      accentBg: "bg-[#103D32]",
      badgeBg: "bg-gradient-to-b from-[#175244] to-[#103D32]",
      iconColor: "text-[#103D32] dark:text-[#34A880]",
    },
    {
      num: "02",
      value: 5200,
      suffix: "+",
      label: t("homeStats.scholarships", "Scholarship Opportunities"),
      subtext: "Merit & need-based grants up to ₹5,00,000",
      icon: Trophy,
      accentBg: "bg-[#1B5E4B]",
      badgeBg: "bg-gradient-to-b from-[#23775F] to-[#1B5E4B]",
      iconColor: "text-[#1B5E4B] dark:text-[#34A880]",
    },
    {
      num: "03",
      value: 1750,
      suffix: "+",
      label: t("homeStats.institutions", "Partner Institutions"),
      subtext: "Recognized universities & medical colleges",
      icon: Building2,
      accentBg: "bg-[#258B68]",
      badgeBg: "bg-gradient-to-b from-[#2CA37A] to-[#258B68]",
      iconColor: "text-[#258B68] dark:text-[#34A880]",
    },
    {
      num: "04",
      value: 96,
      suffix: "%",
      label: t("homeStats.successRate", "Success Rate"),
      subtext: "Verified scholar admission & grant realization",
      icon: TrendingUp,
      accentBg: "bg-[#2A473E]",
      badgeBg: "bg-gradient-to-b from-[#365B4F] to-[#2A473E]",
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
          <div className="rounded-[32px] bg-white/70 dark:bg-[#111E1A]/80 border border-[#D5E2DC] dark:border-[#21362E] px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 shadow-[0_24px_60px_-15px_rgba(16,61,50,0.07)]">
            {/* Clean Top Header Bar */}
            <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#DCE6E1] dark:border-[#21362E]">
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-[#258B68]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#103D32] dark:text-[#34A880]">
                  {t("homeStats.badge", "OUR IMPACT")} • VERIFIED METRICS (2018–2026)
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {["NMC", "AICTE", "UGC", "BCI"].map((body) => (
                  <span
                    key={body}
                    className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white dark:bg-[#0B1411] text-[#103D32] dark:text-[#CBE6DA] border border-[#D5E2DC] dark:border-[#21362E]"
                  >
                    {body} Aligned
                  </span>
                ))}
              </div>
            </div>

            {/* 4-Column Layered 3D Perspective Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-7 pr-2 sm:pr-3">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="group relative pt-2 pr-3 pb-2">
                    {/* Angled / Offset Colored Backing Plate (3D Layer Behind) */}
                    <div
                      className={`
                        absolute top-0 right-0 bottom-1 left-3
                        rounded-[22px] ${stat.accentBg}
                        -skew-y-2 origin-bottom-left
                        transition-transform duration-300 ease-out
                        group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                        shadow-[0_14px_28px_-10px_rgba(16,61,50,0.35)]
                      `}
                      aria-hidden="true"
                    />

                    {/* Crisp Foreground White Card */}
                    <div
                      className="
                        relative z-10 h-full
                        rounded-[22px] bg-white dark:bg-[#14231E]
                        border border-[#E3ECE7] dark:border-[#253D34]
                        px-6 py-7 sm:px-6 sm:py-8
                        flex flex-col items-center text-center justify-between
                        min-h-[255px]
                        shadow-[0_20px_38px_-14px_rgba(16,61,50,0.18),0_4px_12px_-2px_rgba(16,61,50,0.06)]
                        dark:shadow-[0_20px_38px_-14px_rgba(0,0,0,0.55)]
                        transition-transform duration-300 ease-out
                        group-hover:-translate-y-1
                      "
                    >
                      {/* Top Centered Outline Icon */}
                      <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-[#F4F7F5] dark:bg-[#0E1A16] border border-[#E3ECE7] dark:border-[#253D34]">
                        <Icon className={`w-5 h-5 stroke-[1.8] ${stat.iconColor}`} />
                      </div>

                      {/* Center Metric & Copy */}
                      <div className="my-5">
                        <div className="font-heading text-3xl sm:text-[34px] font-extrabold tracking-tight text-[#172923] dark:text-[#F2F7F5] leading-none">
                          <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                        </div>
                        <h3 className="mt-2.5 font-heading text-[13px] font-extrabold uppercase tracking-[0.06em] text-[#103D32] dark:text-[#34A880]">
                          {stat.label}
                        </h3>
                        <p className="mt-1.5 text-xs text-[#68756F] dark:text-[#9BB0A8] leading-relaxed max-w-[200px] mx-auto">
                          {stat.subtext}
                        </p>
                      </div>

                      {/* Bottom Circular Numbered Badge (01–04) */}
                      <div
                        className={`
                          w-10 h-10 rounded-full ${stat.badgeBg}
                          text-white font-heading text-xs font-bold tracking-wider
                          flex items-center justify-center
                          shadow-[0_8px_16px_-4px_rgba(16,61,50,0.4),inset_0_1.5px_1px_rgba(255,255,255,0.3)]
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
