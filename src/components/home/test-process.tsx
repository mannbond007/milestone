"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { scholarshipProcessSteps } from "@/constants/home-data";
import { useLocale } from "@/components/providers/locale-provider";

export function TestProcess() {
  const { t } = useLocale();

  return (
    <section
      id="test-process"
      className="py-20 md:py-28 bg-[#F8FAF8] dark:bg-[#0B1411] border-b border-[#DCE6E1] dark:border-[#21362E]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <ScrollReveal className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.14em] bg-[#E8F3EE] dark:bg-[#172923] text-[#103D32] dark:text-[#34A880] border border-[#258B68]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#258B68] dark:bg-[#34A880]" />
              <span>{t("homeProcess.badge", "Application Workflow")}</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#172923] dark:text-[#F2F7F5] leading-[1.18]">
              {t("homeProcess.titlePart1", "How the Scholarship")}{" "}
              <span className="text-[#258B68] dark:text-[#34A880]">
                {t("homeProcess.titlePart2", "Process Works")}
              </span>
            </h2>

            <p className="mt-3 text-base sm:text-lg text-[#68756F] dark:text-[#9BB0A8] leading-relaxed">
              {t(
                "homeProcess.subtitle",
                "A structured 6-stage pathway from online registration and assessment to institutional admission and grant benefit realization."
              )}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Link
              href="/how-to-apply"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-xl text-xs font-semibold bg-white dark:bg-[#111E1A] hover:bg-[#E8F3EE] dark:hover:bg-[#172923] text-[#103D32] dark:text-[#F2F7F5] border border-[#DCE6E1] dark:border-[#21362E] transition-colors"
            >
              <span>Read Application Guidelines</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </ScrollReveal>
        </div>

        {/* 6-Step Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {scholarshipProcessSteps.map((step, idx) => {
            const Icon = step.icon;
            const stepTitle = t(`processStepsList.${idx}.title`, step.title);
            const stepDesc = t(`processStepsList.${idx}.desc`, step.description);

            return (
              <ScrollReveal key={step.step} delay={idx * 0.05}>
                <div className="h-full flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-[#111E1A] border border-[#DCE6E1] dark:border-[#21362E] hover:border-[#258B68] dark:hover:border-[#34A880] transition-all duration-200 shadow-premium">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-[#E8F3EE] dark:bg-[#172923] text-[#103D32] dark:text-[#34A880]">
                        {t("homeProcess.stepPrefix", "Step")} 0{step.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#F8FAF8] dark:bg-[#0B1411] border border-[#DCE6E1] dark:border-[#21362E] flex items-center justify-center text-[#258B68] dark:text-[#34A880]">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-[#172923] dark:text-[#F2F7F5]">
                      {stepTitle}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-[13.5px] text-[#68756F] dark:text-[#9BB0A8] leading-relaxed">
                      {stepDesc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
