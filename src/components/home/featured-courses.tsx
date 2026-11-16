"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLocale } from "@/components/providers/locale-provider";

interface FeaturedScholarship {
  id: string;
  title: string;
  institution: string;
  course: string;
  scholarshipAmount: string;
  eligibility: string;
  deadline: string;
  href: string;
  colSpan: string;
  featured?: boolean;
}

const featuredScholarships: FeaturedScholarship[] = [
  // Row 1: Two Wide Flagship Bento Cards (6 + 6 = 12 cols)
  {
    id: "mbbs",
    title: "MBBS Medical Excellence Scholarship",
    institution: "Government Medical Colleges (AIIMS, State GMCs) & NMC Partner Universities",
    course: "MBBS (India & Abroad) • 5.5 Years",
    scholarshipAmount: "Up to ₹5,00,000",
    eligibility: "NEET-UG qualified, 60%+ in Class 12 PCB",
    deadline: "2025–26 Cycle Open",
    href: "/scholarships#mbbs-program",
    colSpan: "lg:col-span-6",
    featured: true,
  },
  {
    id: "btech",
    title: "B.Tech Engineering Excellence Grant",
    institution: "IITs, NITs, IIITs & AICTE-Approved Engineering Institutions",
    course: "B.Tech / B.E. • 4 Years",
    scholarshipAmount: "Up to ₹4,00,000",
    eligibility: "JEE qualified or 70%+ in Class 12 PCM",
    deadline: "2025–26 Cycle Open",
    href: "/scholarships#btech",
    colSpan: "lg:col-span-6",
    featured: true,
  },

  // Row 2: Four Compact Bento Cards (3 + 3 + 3 + 3 = 12 cols)
  {
    id: "law",
    title: "National Legal Studies Fellowship",
    institution: "National Law Universities & BCI Law Colleges",
    course: "BA LLB / LLB • 5 / 3 Yrs",
    scholarshipAmount: "Up to ₹3,00,000",
    eligibility: "CLAT qualified or 60%+ in 12th",
    deadline: "Cycle Open",
    href: "/scholarships#law",
    colSpan: "lg:col-span-3",
  },
  {
    id: "bams",
    title: "AYUSH & Dental Sciences Grant",
    institution: "NCISM & DCI Recognized Medical Colleges",
    course: "BAMS / BDS / BHMS • 5.5 Yrs",
    scholarshipAmount: "Up to ₹3,00,000",
    eligibility: "NEET qualified, 55%+ in 12th",
    deadline: "Cycle Open",
    href: "/scholarships#bams",
    colSpan: "lg:col-span-3",
  },
  {
    id: "nursing",
    title: "B.Sc Nursing & Healthcare Grant",
    institution: "Recognized Nursing Colleges & Hospitals",
    course: "B.Sc Nursing • 4 Yrs",
    scholarshipAmount: "Up to ₹2,00,000",
    eligibility: "55%+ in Class 12 Science",
    deadline: "Cycle Open",
    href: "/scholarships#nursing",
    colSpan: "lg:col-span-3",
  },
  {
    id: "bba",
    title: "Management & Future Leaders Grant",
    institution: "IIMs, University Depts & AICTE B-Schools",
    course: "BBA / MBA / PGDM",
    scholarshipAmount: "Up to ₹2,00,000",
    eligibility: "60%+ in 12th or Graduation",
    deadline: "Cycle Open",
    href: "/scholarships#bba",
    colSpan: "lg:col-span-3",
  },
];

export function FeaturedCourses() {
  const { t } = useLocale();

  return (
    <section
      id="featured-courses"
      className="py-20 md:py-28 bg-white dark:bg-[#111E1A] border-t border-[#D5E2DC] dark:border-[#21362E]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <ScrollReveal className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F3EE] dark:bg-[#172923] text-[11px] font-bold uppercase tracking-[0.14em] text-[#103D32] dark:text-[#34A880] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#258B68]" />
              <span>{t("homeCourses.badge", "FEATURED OPPORTUNITIES")}</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#172923] dark:text-[#F2F7F5] leading-[1.12]">
              Featured Scholarship{" "}
              <span className="font-editorial italic font-normal text-[#258B68] dark:text-[#34A880]">
                Opportunities
              </span>
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-[#68756F] dark:text-[#9BB0A8] leading-relaxed">
              {t(
                "homeCourses.subtitle",
                "Verified scholarship programs across medical, engineering, law, healthcare, and management pathways."
              )}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <Link
              href="/scholarships"
              id="view-all-courses-btn"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#103D32] dark:text-[#34A880] hover:text-[#258B68] transition-colors group"
            >
              <span>{t("homeCourses.viewAll", "View All Scholarships")}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>

        {/* 12-COLUMN ASYMMETRICAL BENTO GRID WITH CONCENTRIC CURVE MOTIF */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
          {featuredScholarships.map((item, idx) => {
            const isPrimaryFeatured = idx === 0;
            return (
              <ScrollReveal
                key={item.id}
                delay={idx * 0.04}
                className={item.colSpan}
              >
                <article
                  className={`group relative overflow-hidden h-full flex flex-col justify-between rounded-[28px] transition-all duration-300 hover:-translate-y-0.5 ${
                    isPrimaryFeatured
                      ? "bg-gradient-to-br from-[#103D32] via-[#0D3329] to-[#071E18] text-white border border-[#103D32] shadow-[0_14px_34px_-10px_rgba(16,61,50,0.28)]"
                      : "bg-gradient-to-br from-white via-[#F9FBFA] to-[#F1F7F4] dark:from-[#15241F] dark:via-[#111E1A] dark:to-[#0D1814] border border-[#D5E2DC] dark:border-[#21362E] hover:border-[#258B68]/60 dark:hover:border-[#34A880] shadow-premium hover:shadow-card-hover"
                  } ${item.featured ? "p-8 sm:p-9" : "p-6 sm:p-7"}`}
                >
                  {/* Signature Double Concentric Curve Motif */}
                  <div
                    className={`absolute -right-12 -top-12 w-48 h-48 rounded-full border pointer-events-none transition-transform duration-500 group-hover:scale-110 ${
                      isPrimaryFeatured
                        ? "border-white/[0.11] bg-white/[0.02]"
                        : "border-[#258B68]/[0.13] bg-[#E8F3EE]/40 dark:bg-[#258B68]/[0.05]"
                    }`}
                    aria-hidden="true"
                  />
                  <div
                    className={`absolute -right-4 -top-4 w-28 h-28 rounded-full border pointer-events-none transition-transform duration-500 group-hover:scale-105 ${
                      isPrimaryFeatured
                        ? "border-white/[0.08]"
                        : "border-[#258B68]/[0.09]"
                    }`}
                    aria-hidden="true"
                  />

                  <div className="relative z-10">
                    {/* Top Row: Course Pill & Grant Amount */}
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <span
                        className={`text-xs font-medium ${
                          isPrimaryFeatured
                            ? "text-[#CBE6DA]"
                            : "text-[#68756F] dark:text-[#9BB0A8]"
                        }`}
                      >
                        {item.course}
                      </span>
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          isPrimaryFeatured
                            ? "bg-white/12 text-white border border-white/15"
                            : "bg-[#E8F3EE] dark:bg-[#172923] text-[#103D32] dark:text-[#34A880] border border-[#258B68]/15"
                        }`}
                      >
                        {item.scholarshipAmount}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className={`font-heading font-bold leading-snug transition-colors ${
                        isPrimaryFeatured
                          ? "text-white"
                          : "text-[#172923] dark:text-[#F2F7F5] group-hover:text-[#258B68] dark:group-hover:text-[#34A880]"
                      } ${item.featured ? "text-xl sm:text-2xl" : "text-lg"}`}
                    >
                      {item.title}
                    </h3>

                    {/* Institution */}
                    <p
                      className={`mt-2 text-xs sm:text-sm leading-relaxed ${
                        isPrimaryFeatured
                          ? "text-[#CBE6DA]"
                          : "text-[#68756F] dark:text-[#9BB0A8]"
                      }`}
                    >
                      {item.institution}
                    </p>
                  </div>

                  {/* Footer Row */}
                  <div
                    className={`relative z-10 mt-8 pt-5 border-t flex items-center justify-between gap-3 ${
                      isPrimaryFeatured
                        ? "border-white/15"
                        : "border-[#DCE6E1] dark:border-[#21362E]"
                    }`}
                  >
                    <span
                      className={`text-xs truncate ${
                        isPrimaryFeatured
                          ? "text-[#CBE6DA]"
                          : "text-[#68756F] dark:text-[#9BB0A8]"
                      }`}
                    >
                      {item.eligibility}
                    </span>

                    <Link
                      href={item.href}
                      className={`inline-flex items-center gap-1 text-xs font-bold transition-colors shrink-0 ${
                        isPrimaryFeatured
                          ? "text-[#34A880] hover:text-white"
                          : "text-[#103D32] dark:text-[#F2F7F5] group-hover:text-[#258B68] dark:group-hover:text-[#34A880]"
                      }`}
                    >
                      <span>{t("common.viewDetails", "View Details")}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
