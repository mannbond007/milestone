"use client";

import Link from "next/link";
import { ArrowRight, Cpu, GraduationCap } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLocale } from "@/components/providers/locale-provider";
import { DisciplineIcon, type DisciplineIconId } from "./discipline-icons";

interface FeaturedScholarship {
  id: string;
  iconId: DisciplineIconId;
  titleLine1: string;
  titleLine2: string;
  institution: string;
  course: string;
  scholarshipAmount: string;
  href: string;
  image: string;
  featured?: boolean;
  dark?: boolean;
}

const flagshipPrograms: FeaturedScholarship[] = [
  {
    id: "mbbs",
    iconId: "medical",
    titleLine1: "MBBS Medical",
    titleLine2: "Excellence Scholarship",
    institution: "Government Medical Colleges (AIIMS, State GMCs) & NMC Partner Universities",
    course: "MBBS (India & Abroad) • 5.5 Years",
    scholarshipAmount: "Up to ₹5,00,000",
    href: "/scholarships#mbbs-program",
    image: "/images/programs/mbbs.jpg",
    featured: true,
    dark: true,
  },
  {
    id: "btech",
    iconId: "engineering",
    titleLine1: "B.Tech Engineering",
    titleLine2: "Excellence Grant",
    institution: "IITs, NITs, IIITs & AICTE-Approved Engineering Institutions",
    course: "B.Tech / B.E. • 4 Years",
    scholarshipAmount: "Up to ₹4,00,000",
    href: "/scholarships#btech",
    image: "/images/programs/btech.jpg",
    featured: true,
  },
];

const pathwayPrograms: FeaturedScholarship[] = [
  {
    id: "law",
    iconId: "law",
    titleLine1: "National Legal",
    titleLine2: "Studies Fellowship",
    institution: "National Law Universities & BCI Law Colleges",
    course: "BA LLB / LLB • 5 / 3 Yrs",
    scholarshipAmount: "Up to ₹3,00,000",
    href: "/scholarships#law",
    image: "/images/programs/law.jpg",
  },
  {
    id: "bams",
    iconId: "medical",
    titleLine1: "AYUSH & Dental",
    titleLine2: "Sciences Grant",
    institution: "NCISM & DCI Recognized Medical Colleges",
    course: "BAMS / BDS / BHMS • 5.5 Yrs",
    scholarshipAmount: "Up to ₹3,00,000",
    href: "/scholarships#bams",
    image: "/images/programs/dental.jpg",
  },
  {
    id: "nursing",
    iconId: "nursing",
    titleLine1: "B.Sc Nursing &",
    titleLine2: "Healthcare Grant",
    institution: "Recognized Nursing Colleges & Hospitals",
    course: "B.Sc Nursing • 4 Yrs",
    scholarshipAmount: "Up to ₹2,00,000",
    href: "/scholarships#nursing",
    image: "/images/programs/nursing.jpg",
  },
  {
    id: "bba",
    iconId: "professional",
    titleLine1: "Management &",
    titleLine2: "Future Leaders Grant",
    institution: "IIMs, University Depts & AICTE B-Schools",
    course: "BBA / MBA / PGDM",
    scholarshipAmount: "Up to ₹2,00,000",
    href: "/scholarships#bba",
    image: "/images/programs/management.jpg",
  },
];

function FlagshipProgramCard({ item }: { item: FeaturedScholarship }) {
  const isDark = Boolean(item.dark);

  return (
    <Link
      href={item.href}
      className={`group relative flex h-full min-h-[278px] flex-col justify-between overflow-hidden rounded-[26px] border border-b-[3px] p-7 transition-all duration-300 hover:-translate-y-1 sm:p-8 ${
        isDark
          ? "border-[#15966F]/40 border-b-[#04231C] bg-gradient-to-br from-[#052B22] via-[#0B4F3E] to-[#148263] text-white shadow-[0_18px_40px_-14px_rgba(7,61,50,0.42),inset_0_1px_0_rgba(255,255,255,0.14)] hover:border-[#34D399]/60 hover:shadow-[0_26px_54px_-14px_rgba(21,150,111,0.46)]"
          : "border-[#DCE8E3] border-b-[#C5DDD3] bg-gradient-to-br from-white via-[#F9FCFA] to-[#EBF7F1] text-[#142C25] shadow-[0_14px_30px_-14px_rgba(7,61,50,0.13),inset_0_1px_0_rgba(255,255,255,0.95)] hover:border-[#15966F]/45 hover:shadow-[0_24px_46px_-14px_rgba(7,61,50,0.2)] dark:border-[#1E3B32] dark:border-b-[#122922] dark:from-[#0E211B] dark:via-[#0D1E19] dark:to-[#112A22] dark:text-white"
      }`}
    >
      {/* Bottom-right 3D editorial illustration */}
      <div className="pointer-events-none relative mt-5 h-40 w-full overflow-hidden rounded-2xl sm:mt-0 sm:absolute sm:bottom-0 sm:right-0 sm:h-[78%] sm:w-[46%] sm:rounded-none">
        <img
          src={item.image}
          alt={item.titleLine1}
          className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          loading="lazy"
        />
        {isDark ? (
          <>
            <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#0B503F] via-[#0B503F]/35 to-transparent" />
            <div className="hidden sm:block absolute inset-0 bg-gradient-to-b from-[#0C5745] via-transparent to-transparent" />
          </>
        ) : (
          <>
            <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#F6FBF8] via-[#F6FBF8]/45 to-transparent dark:from-[#0E211B] dark:via-[#0E211B]/55" />
            <div className="hidden sm:block absolute inset-0 bg-gradient-to-b from-[#F6FBF8] via-transparent to-transparent dark:from-[#0E211B]" />
          </>
        )}
      </div>

      {/* Top Pills */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2.5">
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[12px] font-semibold ${
            isDark
              ? "border border-white/20 bg-white/12 text-white backdrop-blur-md"
              : "border border-[#15966F]/15 bg-[#E8F5EF] text-[#073D32] dark:border-[#34D399]/20 dark:bg-[#132E26] dark:text-[#6EE7B7]"
          }`}
        >
          {item.id === "mbbs" ? (
            <GraduationCap className="h-3.5 w-3.5 text-[#6EE7B7]" />
          ) : (
            <Cpu className="h-3.5 w-3.5 text-[#15966F] dark:text-[#34D399]" />
          )}
          <span>{item.course}</span>
        </span>

        <span
          className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-[12px] font-bold tracking-tight ${
            isDark
              ? "border border-white/20 bg-white/15 text-white backdrop-blur-md"
              : "border border-[#15966F]/15 bg-[#E8F5EF] text-[#073D32] dark:border-[#34D399]/20 dark:bg-[#132E26] dark:text-[#6EE7B7]"
          }`}
        >
          {item.scholarshipAmount}
        </span>
      </div>

      {/* Title, Subtitle & CTA */}
      <div className="relative z-10 mt-6 flex max-w-[330px] flex-col justify-between">
        <div>
          <h3
            className={`font-heading text-[24px] font-bold leading-[1.12] tracking-tight sm:text-[26px] ${
              isDark ? "text-white" : "text-[#073D32] dark:text-white"
            }`}
          >
            {item.titleLine1}
            <span
              className={`block ${
                isDark
                  ? "text-[#A7F3D0]"
                  : "text-[#15966F] dark:text-[#34D399]"
              }`}
            >
              {item.titleLine2}
            </span>
          </h3>

          <p
            className={`mt-2.5 text-[13.5px] leading-relaxed ${
              isDark
                ? "text-[#D1FAE5]/90"
                : "text-[#5C6B64] dark:text-[#A0B3AC]"
            }`}
          >
            {item.institution}
          </p>
        </div>

        <div className="mt-6">
          <span
            className={`inline-flex items-center gap-3 rounded-full py-1.5 pl-4 pr-1.5 text-[13px] font-semibold transition-all duration-300 ${
              isDark
                ? "bg-white text-[#073D32] shadow-[0_6px_16px_rgba(4,35,28,0.28)] group-hover:bg-[#E8F5EF]"
                : "border border-[#D4E3DC] bg-white text-[#073D32] shadow-sm group-hover:border-[#15966F]/45 dark:border-[#1E3B32] dark:bg-[#132E26] dark:text-white"
            }`}
          >
            <span>View Details</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#15966F] text-white transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}

function PathwayProgramCard({ item }: { item: FeaturedScholarship }) {
  return (
    <Link
      href={item.href}
      className="group relative flex h-full min-h-[252px] flex-col justify-between overflow-hidden rounded-[22px] border border-[#DCE8E3] border-b-[3px] border-b-[#C5DDD3] bg-gradient-to-br from-white via-[#F9FCFA] to-[#EDF7F2] p-6 shadow-[0_12px_26px_-12px_rgba(7,61,50,0.11),inset_0_1px_0_rgba(255,255,255,0.95)] transition-all duration-300 hover:-translate-y-1 hover:border-[#15966F]/45 hover:shadow-[0_22px_40px_-14px_rgba(7,61,50,0.18)] dark:border-[#1E3B32] dark:border-b-[#122922] dark:from-[#0E211B] dark:via-[#0D1E19] dark:to-[#112A22]"
    >
      {/* Compact Bottom-Right 3D Object */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-[48%] w-[44%] overflow-hidden">
        <img
          src={item.image}
          alt={item.titleLine1}
          className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.05]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F6FBF8] via-[#F6FBF8]/45 to-transparent dark:from-[#0D1E19] dark:via-[#0D1E19]/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F6FBF8] via-transparent to-transparent dark:from-[#0D1E19]" />
      </div>

      {/* Top Row: HD Duotone Icon + Grant Pill */}
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#15966F]/15 bg-[#E8F5EF] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] dark:border-[#34D399]/20 dark:bg-[#132E26]">
            <DisciplineIcon id={item.iconId} className="h-6 w-6" />
          </span>

          <span className="inline-flex items-center whitespace-nowrap rounded-full border border-[#15966F]/15 bg-[#E8F5EF] px-3 py-1 text-[11.5px] font-bold text-[#073D32] dark:border-[#34D399]/20 dark:bg-[#132E26] dark:text-[#6EE7B7]">
            {item.scholarshipAmount}
          </span>
        </div>

        <h3 className="mt-4 font-heading text-[17.5px] font-bold leading-snug tracking-tight text-[#142C25] dark:text-white">
          {item.titleLine1}
          <span className="block">{item.titleLine2}</span>
        </h3>

        <p className="mt-2 max-w-[74%] text-[12.5px] leading-relaxed text-[#687A73] dark:text-[#A0B3AC]">
          {item.institution}
        </p>
      </div>

      {/* Bottom-left View Details Pill */}
      <div className="relative z-10 mt-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#D4E3DC] bg-white py-1.5 pl-3.5 pr-1.5 text-[12px] font-semibold text-[#142C25] shadow-xs transition-all duration-300 group-hover:border-[#15966F]/45 group-hover:text-[#073D32] dark:border-[#1E3B32] dark:bg-[#132E26] dark:text-white">
          <span>View Details</span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#15966F] text-white transition-transform duration-300 group-hover:translate-x-0.5">
            <ArrowRight className="h-3 w-3" />
          </span>
        </span>
      </div>
    </Link>
  );
}

export function FeaturedCourses() {
  const { t } = useLocale();

  return (
    <section
      id="featured-courses"
      className="relative overflow-hidden border-t border-[#DCE8E3] bg-white py-20 md:py-24 dark:border-[#162E26] dark:bg-[#0B1411]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Clean Editorial Header */}
        <div className="mb-10 flex flex-col gap-6 border-b border-[#E3ECE8] pb-8 lg:flex-row lg:items-end lg:justify-between dark:border-[#162E26]">
          <ScrollReveal className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-lg border border-[#15966F]/20 bg-[#EBF7F1] px-3 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] dark:border-[#34D399]/25 dark:bg-[#112B23] dark:shadow-none">
              <span className="h-1.5 w-1.5 rounded-full bg-[#15966F] ring-2 ring-[#15966F]/25 dark:bg-[#34D399] dark:ring-[#34D399]/25" />
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#073D32] dark:text-[#6EE7B7]">
                {t("homeCourses.badge", "FEATURED OPPORTUNITIES")}
              </span>
              <span className="h-3 w-[1px] bg-[#15966F]/25 dark:bg-[#34D399]/25" />
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#15966F] dark:text-[#34D399]">
                6 Flagship Grants
              </span>
            </div>

            <h2 className="mt-4 font-heading text-3xl font-bold leading-[1.12] tracking-[-0.025em] text-[#142C25] sm:text-4xl lg:text-[42px] dark:text-white">
              Featured Scholarship{" "}
              <span className="relative inline-block font-editorial italic font-normal text-[#15966F] dark:text-[#34D399]">
                Opportunities
                <svg
                  aria-hidden="true"
                  viewBox="0 0 210 12"
                  fill="none"
                  className="pointer-events-none absolute -bottom-1 left-0 h-2.5 w-full text-[#15966F]/45 dark:text-[#34D399]/45"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9.5C54 3.5 156 2.5 208 8.5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-[#687A73] sm:text-base dark:text-[#A0B3AC]">
              {t(
                "homeCourses.subtitle",
                "Verified scholarship programs across medical, engineering, law, healthcare, and management pathways."
              )}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="shrink-0">
            <Link
              href="/scholarships"
              id="view-all-courses-btn"
              className="group/all inline-flex items-center gap-3 rounded-full border border-[#D4E3DC] bg-white px-5 py-2.5 text-[13.5px] font-semibold text-[#142C25] shadow-[0_2px_10px_rgba(7,61,50,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#15966F]/45 hover:text-[#15966F] hover:shadow-[0_8px_20px_-6px_rgba(7,61,50,0.14)] dark:border-[#1E3B32] dark:bg-[#0D1E19] dark:text-white dark:hover:border-[#34D399]/50 dark:hover:text-[#34D399]"
            >
              <span>{t("homeCourses.viewAll", "Browse All 16+ Scholarship Programs")}</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E8F5EF] text-[#15966F] transition-transform duration-300 group-hover/all:translate-x-0.5 dark:bg-[#143329] dark:text-[#34D399]">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </ScrollReveal>
        </div>

        {/* Row 1: Two Wide Flagship Cards */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {flagshipPrograms.map((item, idx) => (
            <ScrollReveal key={item.id} delay={idx * 0.05} className="lg:col-span-6">
              <FlagshipProgramCard item={item} />
            </ScrollReveal>
          ))}
        </div>

        {/* Row 2: Four Clean Pathway Cards */}
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pathwayPrograms.map((item, idx) => (
            <ScrollReveal key={item.id} delay={0.1 + idx * 0.04}>
              <PathwayProgramCard item={item} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
