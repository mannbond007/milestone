"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Stethoscope,
  Cpu,
  Briefcase,
  Scale,
  HeartPulse,
  FlaskConical,
  Calculator,
  BookOpen,
  Monitor,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLocale } from "@/components/providers/locale-provider";

interface BentoCategory {
  id: string;
  title: string;
  subtitle: string;
  amount: string;
  href: string;
  icon: LucideIcon;
  colSpan: string;
  variant: "dark" | "mint" | "white";
}

const bentoCategories: BentoCategory[] = [
  // Row 1: Flagship Pathways (5 + 4 + 3 = 12 cols)
  {
    id: "medical",
    title: "Medical",
    subtitle: "MBBS (India & Abroad), BDS, BAMS, BHMS & BUMS",
    amount: "Up to ₹5,00,000",
    href: "/scholarships#mbbs",
    icon: Stethoscope,
    colSpan: "lg:col-span-5",
    variant: "dark",
  },
  {
    id: "engineering",
    title: "Engineering",
    subtitle: "B.Tech, B.E. & Emerging Technical Disciplines",
    amount: "Up to ₹4,00,000",
    href: "/scholarships#btech",
    icon: Cpu,
    colSpan: "lg:col-span-4",
    variant: "white",
  },
  {
    id: "law",
    title: "Law",
    subtitle: "BA LLB, BBA LLB & 3-Year LLB",
    amount: "Up to ₹3,00,000",
    href: "/scholarships#law",
    icon: Scale,
    colSpan: "lg:col-span-3",
    variant: "mint",
  },

  // Row 2: Professional & Applied Streams (3 + 3 + 3 + 3 = 12 cols)
  {
    id: "management",
    title: "Management",
    subtitle: "BBA, MBA & Post-Graduate PGDM",
    amount: "Up to ₹2,00,000",
    href: "/scholarships#bba",
    icon: Briefcase,
    colSpan: "lg:col-span-3",
    variant: "white",
  },
  {
    id: "nursing",
    title: "Nursing",
    subtitle: "B.Sc Nursing & Patient Care",
    amount: "Up to ₹2,00,000",
    href: "/scholarships#nursing",
    icon: HeartPulse,
    colSpan: "lg:col-span-3",
    variant: "white",
  },
  {
    id: "technology",
    title: "Technology",
    subtitle: "BCA, Computer Science & AI",
    amount: "Up to ₹2,00,000",
    href: "/scholarships#bca",
    icon: Monitor,
    colSpan: "lg:col-span-3",
    variant: "white",
  },
  {
    id: "professional",
    title: "Professional Courses",
    subtitle: "Pharmacy, Agriculture, Design & NEET/JEE",
    amount: "Up to ₹3,00,000",
    href: "/scholarships#pharmacy",
    icon: GraduationCap,
    colSpan: "lg:col-span-3",
    variant: "mint",
  },

  // Row 3: Degree Foundations (4 + 4 + 4 = 12 cols)
  {
    id: "science",
    title: "Science",
    subtitle: "B.Sc Pure Sciences, Biotech & Research",
    amount: "Up to ₹2,00,000",
    href: "/scholarships#bsc",
    icon: FlaskConical,
    colSpan: "lg:col-span-4",
    variant: "white",
  },
  {
    id: "commerce",
    title: "Commerce",
    subtitle: "B.Com, Finance, Accounting & CA",
    amount: "Up to ₹1,50,000",
    href: "/scholarships#bcom",
    icon: Calculator,
    colSpan: "lg:col-span-4",
    variant: "white",
  },
  {
    id: "arts",
    title: "Arts",
    subtitle: "B.A. Humanities, Journalism & Media",
    amount: "Up to ₹1,50,000",
    href: "/scholarships#ba",
    icon: BookOpen,
    colSpan: "lg:col-span-4",
    variant: "white",
  },
];

export function ScholarshipCategories() {
  const { t } = useLocale();

  return (
    <section
      id="scholarship-categories"
      className="py-20 md:py-28 bg-white dark:bg-[#111E1A] border-t border-[#D5E2DC] dark:border-[#21362E]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Editorial Header */}
        <ScrollReveal className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F3EE] dark:bg-[#172923] text-[11px] font-bold uppercase tracking-[0.14em] text-[#103D32] dark:text-[#34A880] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#258B68]" />
            <span>{t("homeCategories.badge", "SCHOLARSHIP CATEGORIES")}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#172923] dark:text-[#F2F7F5] leading-[1.12]">
            Find the Right Path for{" "}
            <span className="font-editorial italic font-normal text-[#258B68] dark:text-[#34A880]">
              Your Future
            </span>
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#68756F] dark:text-[#9BB0A8] leading-relaxed">
            {t(
              "homeCategories.subheading",
              "Explore scholarship opportunities across diverse academic disciplines."
            )}
          </p>
        </ScrollReveal>

        {/* 12-COLUMN ASYMMETRICAL BENTO GRID WITH CONCENTRIC CURVE MOTIF */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
          {bentoCategories.map((item, idx) => {
            const Icon = item.icon;
            const isDark = item.variant === "dark";
            const isMint = item.variant === "mint";

            return (
              <ScrollReveal
                key={item.id}
                delay={idx * 0.03}
                className={item.colSpan}
              >
                <Link
                  href={item.href}
                  className={`group relative overflow-hidden h-full min-h-[220px] flex flex-col justify-between p-7 sm:p-8 rounded-[26px] transition-all duration-300 hover:-translate-y-0.5 ${
                    isDark
                      ? "bg-gradient-to-br from-[#103D32] via-[#0D3329] to-[#071E18] text-white border border-[#103D32] shadow-[0_14px_34px_-10px_rgba(16,61,50,0.28)]"
                      : isMint
                      ? "bg-gradient-to-br from-[#E8F3EE] via-[#E1EFE8] to-[#D6E9E0] dark:from-[#172923] dark:to-[#0F1C18] text-[#172923] dark:text-[#F2F7F5] border border-[#BFDCD0] dark:border-[#258B68]/30 shadow-premium"
                      : "bg-gradient-to-br from-white via-[#F9FBFA] to-[#F1F7F4] dark:from-[#15241F] dark:via-[#111E1A] dark:to-[#0D1814] text-[#172923] dark:text-[#F2F7F5] border border-[#D5E2DC] dark:border-[#21362E] hover:border-[#258B68]/60 dark:hover:border-[#34A880] shadow-premium"
                  }`}
                >
                  {/* Signature Concentric Curve Motif */}
                  <div
                    className={`absolute -right-12 -top-12 w-44 h-44 rounded-full border pointer-events-none transition-transform duration-500 group-hover:scale-110 ${
                      isDark
                        ? "border-white/[0.11] bg-white/[0.02]"
                        : isMint
                        ? "border-[#103D32]/[0.11] dark:border-white/[0.09] bg-white/30 dark:bg-white/[0.02]"
                        : "border-[#258B68]/[0.13] bg-[#E8F3EE]/40 dark:bg-[#258B68]/[0.05]"
                    }`}
                    aria-hidden="true"
                  />
                  <div
                    className={`absolute -right-4 -top-4 w-26 h-26 rounded-full border pointer-events-none transition-transform duration-500 group-hover:scale-105 ${
                      isDark
                        ? "border-white/[0.08]"
                        : isMint
                        ? "border-[#103D32]/[0.08] dark:border-white/[0.06]"
                        : "border-[#258B68]/[0.09]"
                    }`}
                    aria-hidden="true"
                  />

                  {/* Top Row: Icon + Grant Pill */}
                  <div className="relative z-10 flex items-center justify-between gap-3">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-colors shadow-2xs ${
                        isDark
                          ? "bg-white/10 border border-white/15 text-[#34A880]"
                          : isMint
                          ? "bg-white dark:bg-[#111E1A] border border-[#103D32]/10 text-[#103D32] dark:text-[#34A880]"
                          : "bg-white dark:bg-[#111E1A] border border-[#D5E2DC] dark:border-[#21362E] text-[#103D32] dark:text-[#34A880] group-hover:bg-[#103D32] group-hover:text-white dark:group-hover:bg-[#34A880] dark:group-hover:text-[#0B1411]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          isDark
                            ? "bg-white/12 text-white border border-white/15"
                            : isMint
                            ? "bg-white/90 dark:bg-[#111E1A] text-[#103D32] dark:text-[#34A880] border border-[#103D32]/10"
                            : "bg-[#E8F3EE] dark:bg-[#172923] text-[#103D32] dark:text-[#34A880] border border-[#258B68]/15"
                        }`}
                      >
                        {item.amount}
                      </span>
                      <ArrowUpRight
                        className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                          isDark
                            ? "text-[#CBE6DA]"
                            : "text-[#68756F] group-hover:text-[#258B68] dark:group-hover:text-[#34A880]"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Bottom Content: Title + 1-Line Subtitle */}
                  <div className="relative z-10 mt-8">
                    <h3
                      className={`font-heading text-xl sm:text-2xl font-bold tracking-tight ${
                        isDark
                          ? "text-white"
                          : "text-[#172923] dark:text-[#F2F7F5] group-hover:text-[#258B68] dark:group-hover:text-[#34A880]"
                      } transition-colors`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`mt-1.5 text-xs sm:text-sm leading-relaxed ${
                        isDark
                          ? "text-[#CBE6DA]"
                          : "text-[#68756F] dark:text-[#9BB0A8]"
                      }`}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
