"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CheckCircle2, ArrowRight, Search, Sparkles } from "lucide-react";
import Link from "next/link";
import { useLocale } from "@/components/providers/locale-provider";

export function ScholarshipFinder() {
  const { t } = useLocale();
  const [stream, setStream] = useState("medical");
  const [percentage, setPercentage] = useState("75-85");
  const [income, setIncome] = useState("under5");
  const [submittedStream, setSubmittedStream] = useState<string>("medical");

  const getResult = (activeStream: string) => {
    if (activeStream === "medical") {
      return {
        title: t("finder.results.medicalTitle", "MBBS & Healthcare Excellence Scholarship"),
        amount: "Up to ₹5,00,000",
        description: t(
          "finder.results.medicalDesc",
          "Full or partial tuition fee coverage, hostel stipend, and 1-on-1 mentorship with former AIIMS professors."
        ),
        benefits: [
          t("finder.results.medicalBenefit1", "Tuition Fee Concession"),
          t("finder.results.medicalBenefit2", "Hostel & Book Support"),
          t("finder.results.medicalBenefit3", "AIIMS Faculty Mentorship"),
          t("finder.results.medicalBenefit4", "NEET Counselling Guidance"),
        ],
        href: "/scholarships#mbbs-program",
      };
    } else if (activeStream === "engineering") {
      return {
        title: t("finder.results.engineeringTitle", "B.Tech & Future Tech Innovators Grant"),
        amount: "Up to ₹4,00,000",
        description: t(
          "finder.results.engineeringDesc",
          "Engineering scholarship for tech builders with IIT alumni mentorship and academic support."
        ),
        benefits: [
          t("finder.results.engBenefit1", "Tuition Fee Concession"),
          t("finder.results.engBenefit2", "IIT Alumni Mentorship"),
          t("finder.results.engBenefit3", "Skill & Coding Workshops"),
          t("finder.results.engBenefit4", "Career & Placement Support"),
        ],
        href: "/scholarships#btech",
      };
    } else if (activeStream === "law") {
      return {
        title: t("finder.results.lawTitle", "National Legal Studies Scholarship"),
        amount: "Up to ₹3,00,000",
        description: t(
          "finder.results.lawDesc",
          "Support for BA LLB and CLAT aspirants with senior legal guidance and academic fee waivers."
        ),
        benefits: [
          t("finder.results.lawBenefit1", "Tuition Fee Waiver"),
          t("finder.results.lawBenefit2", "Senior Advocate Mentorship"),
          t("finder.results.lawBenefit3", "CLAT & Judicial Prep"),
          t("finder.results.lawBenefit4", "Moot Court Exposure"),
        ],
        href: "/scholarships#law",
      };
    } else {
      return {
        title: t("finder.results.generalTitle", "Milestone All-Stream Merit & Need Aid"),
        amount: "Up to ₹2,50,000",
        description: t(
          "finder.results.generalDesc",
          "Comprehensive financial support and guidance for BBA, BCA, B.Sc, B.Com and professional courses."
        ),
        benefits: [
          t("finder.results.genBenefit1", "Tuition Fee Concessions"),
          t("finder.results.genBenefit2", "1-on-1 Career Counseling"),
          t("finder.results.genBenefit3", "Skill Development Programs"),
          t("finder.results.genBenefit4", "Admission & Placement Aid"),
        ],
        href: "/scholarships",
      };
    }
  };

  const handleSearch = () => {
    setSubmittedStream(stream);
  };

  const matchingResult = getResult(submittedStream);

  return (
    <section
      id="scholarship-finder"
      className="py-16 md:py-24 bg-white dark:bg-[#111E1A] border-b border-[#DCE6E1] dark:border-[#21362E]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="rounded-3xl bg-[#F8FAF8] dark:bg-[#0B1411] border border-[#DCE6E1] dark:border-[#21362E] p-6 sm:p-8 lg:p-10 shadow-premium">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Left Column: Finder Controls (5 cols) */}
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.14em] bg-[#E8F3EE] dark:bg-[#172923] text-[#103D32] dark:text-[#34A880] border border-[#258B68]/20">
                    <Sparkles className="w-3 h-3" />
                    {t("finder.badge", "Instant Grant Estimator")}
                  </span>
                  <h2 className="mt-3 font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#172923] dark:text-[#F2F7F5] leading-tight">
                    {t("finder.titlePart1", "Check Your")}{" "}
                    <span className="text-[#258B68] dark:text-[#34A880]">
                      {t("finder.titlePart2", "Scholarship Eligibility")}
                    </span>
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-[#68756F] dark:text-[#9BB0A8] leading-relaxed">
                    {t(
                      "finder.subtitle",
                      "Select your academic stream, qualifying marks, and family income bracket to preview matching grant tiers."
                    )}
                  </p>
                </div>

                <div className="space-y-3.5">
                  <div>
                    <label
                      htmlFor="finder-stream"
                      className="block text-xs font-semibold text-[#172923] dark:text-[#F2F7F5] mb-1.5"
                    >
                      {t("finder.streamLabel", "Target Academic Stream")}
                    </label>
                    <select
                      id="finder-stream"
                      value={stream}
                      onChange={(e) => setStream(e.target.value)}
                      className="w-full h-11 px-3.5 text-xs sm:text-sm bg-white dark:bg-[#111E1A] text-[#172923] dark:text-[#F2F7F5] border border-[#DCE6E1] dark:border-[#21362E] rounded-xl font-medium focus:outline-none focus:border-[#258B68]"
                    >
                      <option value="medical">
                        {t("finder.streams.medical", "Medical (MBBS / BAMS / BDS)")}
                      </option>
                      <option value="engineering">
                        {t("finder.streams.engineering", "Engineering (B.Tech / B.E.)")}
                      </option>
                      <option value="law">
                        {t("finder.streams.law", "Law (BA LLB / LLB)")}
                      </option>
                      <option value="management">
                        {t("finder.streams.management", "Management & Commerce (BBA / MBA / B.Com)")}
                      </option>
                      <option value="science">
                        {t("finder.streams.science", "Science & Computer Apps (B.Sc / BCA)")}
                      </option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label
                        htmlFor="finder-score"
                        className="block text-xs font-semibold text-[#172923] dark:text-[#F2F7F5] mb-1.5"
                      >
                        {t("finder.scoreLabel", "Qualifying Score")}
                      </label>
                      <select
                        id="finder-score"
                        value={percentage}
                        onChange={(e) => setPercentage(e.target.value)}
                        className="w-full h-11 px-3 text-xs sm:text-sm bg-white dark:bg-[#111E1A] text-[#172923] dark:text-[#F2F7F5] border border-[#DCE6E1] dark:border-[#21362E] rounded-xl font-medium focus:outline-none focus:border-[#258B68]"
                      >
                        <option value="90+">{t("finder.scores.top", "90% & Above")}</option>
                        <option value="75-85">{t("finder.scores.high", "75% – 89%")}</option>
                        <option value="60-74">{t("finder.scores.qualifying", "60% – 74%")}</option>
                        <option value="55-59">{t("finder.scores.standard", "55% – 59%")}</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="finder-income"
                        className="block text-xs font-semibold text-[#172923] dark:text-[#F2F7F5] mb-1.5"
                      >
                        {t("finder.incomeLabel", "Annual Family Income")}
                      </label>
                      <select
                        id="finder-income"
                        value={income}
                        onChange={(e) => setIncome(e.target.value)}
                        className="w-full h-11 px-3 text-xs sm:text-sm bg-white dark:bg-[#111E1A] text-[#172923] dark:text-[#F2F7F5] border border-[#DCE6E1] dark:border-[#21362E] rounded-xl font-medium focus:outline-none focus:border-[#258B68]"
                      >
                        <option value="under3">{t("finder.incomes.under3", "Under ₹3.0 Lakhs")}</option>
                        <option value="under5">{t("finder.incomes.under5", "₹3.0L – ₹5.0 Lakhs")}</option>
                        <option value="above5">{t("finder.incomes.above5", "Above ₹5.0 Lakhs")}</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleSearch}
                    className="w-full h-11 rounded-xl bg-[#103D32] hover:bg-[#258B68] text-white dark:bg-[#34A880] dark:text-[#0B1411] font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Search className="w-4 h-4" />
                    <span>{t("finder.searchBtn", "Check Matching Scholarship Grant")}</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Matched Result Card (7 cols) */}
              <div className="lg:col-span-7 h-full">
                <div className="h-full rounded-2xl bg-white dark:bg-[#111E1A] border border-[#DCE6E1] dark:border-[#21362E] p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-[#DCE6E1] dark:border-[#21362E]">
                      <div>
                        <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#258B68] dark:text-[#34A880] bg-[#E8F3EE] dark:bg-[#172923] px-2.5 py-1 rounded-md">
                          {t("finder.matchedBadge", "Recommended Program")}
                        </span>
                        <h3 className="mt-2.5 font-heading text-xl sm:text-2xl font-bold text-[#172923] dark:text-[#F2F7F5]">
                          {matchingResult.title}
                        </h3>
                        <p className="mt-1.5 text-xs sm:text-sm text-[#68756F] dark:text-[#9BB0A8] leading-relaxed">
                          {matchingResult.description}
                        </p>
                      </div>

                      <div className="sm:text-right flex-shrink-0 bg-[#E8F3EE]/60 dark:bg-[#172923] px-4 py-3 rounded-xl border border-[#258B68]/20">
                        <span className="text-[11px] font-medium text-[#68756F] dark:text-[#9BB0A8] block">
                          {t("finder.grantCoverage", "Maximum Grant Tier")}
                        </span>
                        <span className="font-heading text-xl sm:text-2xl font-extrabold text-[#103D32] dark:text-[#34A880]">
                          {matchingResult.amount}
                        </span>
                      </div>
                    </div>

                    {/* Included Benefits Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
                      {matchingResult.benefits.map((b, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAF8] dark:bg-[#0B1411] border border-[#DCE6E1] dark:border-[#21362E] text-xs font-semibold text-[#172923] dark:text-[#F2F7F5]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#258B68] dark:text-[#34A880] flex-shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#DCE6E1] dark:border-[#21362E] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-xs text-[#68756F] dark:text-[#9BB0A8]">
                      Subject to document verification &amp; scholarship assessment score.
                    </p>
                    <div className="flex items-center gap-3 shrink-0">
                      <Link
                        href={matchingResult.href}
                        className="text-xs font-semibold text-[#172923] dark:text-[#F2F7F5] hover:text-[#258B68] px-3 py-2"
                      >
                        Program Details
                      </Link>
                      <Link
                        href="/sign-up"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#258B68] hover:bg-[#103D32] text-white text-xs font-semibold transition-colors"
                      >
                        <span>{t("finder.applyBtn", "Apply for This Grant")}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
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
