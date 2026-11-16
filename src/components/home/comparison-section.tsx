"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { Check, X, Award } from "lucide-react";
import { useLocale } from "@/components/providers/locale-provider";

const comparisonData = [
  {
    feature: "Tuition Fee Concession & Aid",
    milestone: "Up to 100% Fee Concessions & Grants (Up to ₹5L)",
    traditional: "Full Self-Funded Fees (₹5L – ₹50L)",
  },
  {
    feature: "1-on-1 Senior Faculty Mentorship",
    milestone: "Dedicated AIIMS / IIT / IIM Alumni Mentors",
    traditional: "No Dedicated Mentorship Provided",
  },
  {
    feature: "Scholarship Test & Merit Ranking",
    milestone: "Transparent Phase 1 & Phase 2 Evaluation",
    traditional: "Opaque or No Entrance Assistance",
  },
  {
    feature: "Competitive Exam Prep Support",
    milestone: "NEET, JEE & CLAT Study Guidance & Mocks",
    traditional: "Expensive Separate Coaching Fees",
  },
  {
    feature: "Disbursement & Financial Support",
    milestone: "Direct Institutional Fee Concessions within 30 Days",
    traditional: "Long Delays or Unclear Approvals",
  },
];

export function ComparisonSection() {
  const { t } = useLocale();

  return (
    <section className="py-20 md:py-24 bg-white dark:bg-[#111E1A] border-b border-[#DCE6E1] dark:border-[#21362E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            badge={t("homeComparison.badge", "Program Comparison")}
            title={
              <>
                {t("homeComparison.titlePart1", "MileStone Ecosystem vs")}{" "}
                <span className="text-[#258B68] dark:text-[#34A880]">
                  {t("homeComparison.titlePart2", "Traditional Admission")}
                </span>
              </>
            }
            subtitle={t(
              "homeComparison.subtitle",
              "Compare how the MileStone Scholarship Program reduces financial burden and provides structured academic mentorship."
            )}
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="max-w-5xl mx-auto overflow-x-auto rounded-2xl border border-[#DCE6E1] dark:border-[#21362E] bg-white dark:bg-[#0B1411] shadow-premium">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-[#F8FAF8] dark:bg-[#111E1A] text-[#172923] dark:text-[#F2F7F5] border-b border-[#DCE6E1] dark:border-[#21362E]">
                  <th className="p-4 sm:p-5 w-1/3 font-heading font-bold text-xs uppercase tracking-wider text-[#68756F] dark:text-[#9BB0A8]">
                    {t("homeComparison.featureCol", "Key Feature / Benefit")}
                  </th>
                  <th className="p-4 sm:p-5 w-1/3 bg-[#E8F3EE] dark:bg-[#172923] text-[#103D32] dark:text-[#34A880] border-x border-[#258B68]/20">
                    <div className="flex items-center gap-2 font-heading font-bold text-sm">
                      <Award className="w-4 h-4 text-[#258B68] dark:text-[#34A880]" />
                      <span>{t("homeComparison.milestoneCol", "MileStone Program")}</span>
                    </div>
                  </th>
                  <th className="p-4 sm:p-5 w-1/3 font-heading font-bold text-xs uppercase tracking-wider text-[#68756F] dark:text-[#9BB0A8]">
                    {t("homeComparison.traditionalCol", "Traditional Direct Route")}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DCE6E1] dark:divide-[#21362E]">
                {comparisonData.map((row, idx) => {
                  const feature = t(`comparisonRowsList.${idx}.feature`, row.feature);
                  const milestone = t(`comparisonRowsList.${idx}.milestone`, row.milestone);
                  const traditional = t(`comparisonRowsList.${idx}.traditional`, row.traditional);

                  return (
                    <tr
                      key={idx}
                      className="hover:bg-[#F8FAF8]/60 dark:hover:bg-[#111E1A]/60 transition-colors"
                    >
                      <td className="p-4 sm:p-5 font-semibold text-xs sm:text-sm text-[#172923] dark:text-[#F2F7F5]">
                        {feature}
                      </td>
                      <td className="p-4 sm:p-5 bg-[#E8F3EE]/35 dark:bg-[#172923]/30 border-x border-[#258B68]/15">
                        <div className="flex items-start gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-[#258B68] text-white flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span className="text-xs sm:text-sm font-semibold text-[#103D32] dark:text-[#F2F7F5]">
                            {milestone}
                          </span>
                        </div>
                      </td>
                      <td className="p-4 sm:p-5">
                        <div className="flex items-start gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-[#DCE6E1] dark:bg-[#21362E] text-[#68756F] dark:text-[#9BB0A8] flex items-center justify-center shrink-0 mt-0.5">
                            <X className="w-3 h-3 stroke-[2.5]" />
                          </div>
                          <span className="text-xs sm:text-sm text-[#68756F] dark:text-[#9BB0A8]">
                            {traditional}
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
