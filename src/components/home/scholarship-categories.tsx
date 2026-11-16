"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
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
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLocale } from "@/components/providers/locale-provider";

interface DisciplineCategory {
  id: string;
  title: string;
  courses: string;
  amount: string;
  href: string;
  icon: LucideIcon;
  colSpan: string;
  variant: "featured" | "mint" | "light";
  badge?: string;
}

const scholarshipDisciplines: DisciplineCategory[] = [
  // Row 1 (5 + 4 + 3 = 12 cols)
  {
    id: "medical",
    title: "Medical",
    courses: "MBBS (India & Abroad), BDS, BAMS, BHMS & BUMS",
    amount: "Up to ₹5,00,000",
    href: "/scholarships#mbbs",
    icon: Stethoscope,
    colSpan: "lg:col-span-5",
    variant: "featured",
    badge: "Highest Grant",
  },
  {
    id: "engineering",
    title: "Engineering",
    courses: "B.Tech, B.E. & Emerging Technical Disciplines",
    amount: "Up to ₹4,00,000",
    href: "/scholarships#btech",
    icon: Cpu,
    colSpan: "lg:col-span-4",
    variant: "light",
  },
  {
    id: "law",
    title: "Law",
    courses: "BA LLB, BBA LLB & 3-Year LLB",
    amount: "Up to ₹3,00,000",
    href: "/scholarships#law",
    icon: Scale,
    colSpan: "lg:col-span-3",
    variant: "mint",
  },

  // Row 2 (3 + 3 + 3 + 3 = 12 cols)
  {
    id: "management",
    title: "Management",
    courses: "BBA, MBA & Post-Graduate PGDM",
    amount: "Up to ₹2,00,000",
    href: "/scholarships#bba",
    icon: Briefcase,
    colSpan: "lg:col-span-3",
    variant: "light",
  },
  {
    id: "nursing",
    title: "Nursing",
    courses: "B.Sc Nursing & Patient Care",
    amount: "Up to ₹2,00,000",
    href: "/scholarships#nursing",
    icon: HeartPulse,
    colSpan: "lg:col-span-3",
    variant: "light",
  },
  {
    id: "technology",
    title: "Technology",
    courses: "BCA, Computer Science & AI",
    amount: "Up to ₹2,00,000",
    href: "/scholarships#bca",
    icon: Monitor,
    colSpan: "lg:col-span-3",
    variant: "light",
  },
  {
    id: "professional",
    title: "Professional Courses",
    courses: "Pharmacy, Agriculture, Design & NEET/JEE",
    amount: "Up to ₹3,00,000",
    href: "/scholarships#pharmacy",
    icon: GraduationCap,
    colSpan: "lg:col-span-3",
    variant: "mint",
  },

  // Row 3 (4 + 4 + 4 = 12 cols)
  {
    id: "science",
    title: "Science",
    courses: "B.Sc Pure Sciences, Biotech & Research",
    amount: "Up to ₹2,00,000",
    href: "/scholarships#bsc",
    icon: FlaskConical,
    colSpan: "lg:col-span-4",
    variant: "light",
  },
  {
    id: "commerce",
    title: "Commerce",
    courses: "B.Com, Finance, Accounting & CA",
    amount: "Up to ₹1,50,000",
    href: "/scholarships#bcom",
    icon: Calculator,
    colSpan: "lg:col-span-4",
    variant: "light",
  },
  {
    id: "arts",
    title: "Arts",
    courses: "B.A. Humanities, Journalism & Media",
    amount: "Up to ₹1,50,000",
    href: "/scholarships#ba",
    icon: BookOpen,
    colSpan: "lg:col-span-4",
    variant: "light",
  },
];

function DisciplineCard({ item }: { item: DisciplineCategory }) {
  const Icon = item.icon;
  const isFeatured = item.variant === "featured";
  const isMint = item.variant === "mint";

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="h-full"
    >
      <Link
        href={item.href}
        className={`group relative overflow-hidden h-full min-h-[248px] flex flex-col justify-between p-6 sm:p-7 rounded-[24px] transition-all duration-300 ${
          isFeatured
            ? "bg-gradient-to-br from-[#073D32] via-[#06332A] to-[#031F19] text-white border border-[#15966F]/35 shadow-[0_18px_40px_-12px_rgba(7,61,50,0.38)] hover:shadow-[0_24px_56px_-10px_rgba(21,150,111,0.38)] hover:border-[#15966F]/70"
            : isMint
            ? "bg-gradient-to-br from-[#E8F5EF] via-[#F2FAF6] to-[#FAFCFB] dark:from-[#132922] dark:via-[#10221C] dark:to-[#0C1A15] text-[#142C25] dark:text-[#F2F7F5] border border-[#C3E3D5] dark:border-[#15966F]/30 shadow-[0_8px_24px_-8px_rgba(7,61,50,0.06)] hover:shadow-[0_18px_36px_-10px_rgba(7,61,50,0.12)] hover:border-[#15966F]/60"
            : "bg-gradient-to-br from-[#FAFCFB] via-white to-[#F2F8F5] dark:from-[#15241F] dark:via-[#111E1A] dark:to-[#0D1814] text-[#142C25] dark:text-[#F2F7F5] border border-[#DCE8E2] dark:border-[#21362E] shadow-[0_8px_24px_-8px_rgba(7,61,50,0.05)] hover:shadow-[0_18px_36px_-10px_rgba(7,61,50,0.11)] hover:border-[#15966F]/55"
        }`}
      >
        {/* Subtle Decorative Background Circles */}
        <div
          className={`absolute -right-12 -top-12 w-44 h-44 rounded-full border pointer-events-none transition-transform duration-500 ease-out group-hover:scale-110 group-hover:translate-x-1 ${
            isFeatured
              ? "border-[#15966F]/25 bg-[#15966F]/10"
              : isMint
              ? "border-[#15966F]/15 bg-white/45 dark:bg-[#15966F]/5"
              : "border-[#15966F]/12 bg-[#E8F5EF]/50 dark:bg-[#15966F]/5"
          }`}
          aria-hidden="true"
        />
        <div
          className={`absolute -right-4 -top-4 w-24 h-24 rounded-full border pointer-events-none transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-0.5 ${
            isFeatured
              ? "border-white/10"
              : "border-[#15966F]/10"
          }`}
          aria-hidden="true"
        />
        {isFeatured && (
          <div
            className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-[#15966F]/15 blur-2xl opacity-60 group-hover:opacity-95 transition-opacity duration-500 pointer-events-none"
            aria-hidden="true"
          />
        )}

        {/* ZONE 1: Top Bar — Category Icon & Prominent Scholarship Amount Badge */}
        <div className="relative z-10 flex items-start justify-between gap-3">
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3 ${
              isFeatured
                ? "bg-white/10 border border-white/15 text-[#34D399] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
                : isMint
                ? "bg-white dark:bg-[#111E1A] border border-[#15966F]/20 text-[#073D32] dark:text-[#34A880] shadow-xs"
                : "bg-[#E8F5EF] dark:bg-[#172923] border border-[#15966F]/15 text-[#073D32] dark:text-[#34A880] group-hover:bg-[#073D32] group-hover:text-white dark:group-hover:bg-[#15966F] dark:group-hover:text-[#0B1411] transition-colors"
            }`}
          >
            <Icon className="w-5 h-5 stroke-[1.9]" />
          </div>

          <div className="flex flex-col items-end gap-1.5">
            {isFeatured && item.badge && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#A7F3D0]">
                <Sparkles className="w-3 h-3 text-[#34D399]" />
                {item.badge}
              </span>
            )}
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ${
                isFeatured
                  ? "bg-[#15966F] text-white shadow-[0_4px_12px_-2px_rgba(21,150,111,0.5)]"
                  : isMint
                  ? "bg-white dark:bg-[#111E1A] text-[#073D32] dark:text-[#34A880] border border-[#15966F]/20 shadow-2xs"
                  : "bg-[#E8F5EF] dark:bg-[#172923] text-[#073D32] dark:text-[#34A880] border border-[#15966F]/15"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isFeatured ? "bg-white" : "bg-[#15966F]"
                }`}
              />
              {item.amount}
            </span>
          </div>
        </div>

        {/* ZONE 2: Discipline Name & Course Information */}
        <div className="relative z-10 my-6">
          <h3
            className={`font-heading font-bold tracking-tight leading-snug transition-colors ${
              isFeatured
                ? "text-2xl sm:text-[26px] text-white"
                : "text-xl text-[#142C25] dark:text-[#F2F7F5] group-hover:text-[#15966F] dark:group-hover:text-[#34A880]"
            }`}
          >
            {item.title}
          </h3>
          <p
            className={`mt-2 text-[13px] sm:text-sm leading-relaxed ${
              isFeatured
                ? "text-[#D1EAE0] max-w-md"
                : "text-[#687A73] dark:text-[#9BB0A8]"
            }`}
          >
            {item.courses}
          </p>
        </div>

        {/* ZONE 3: Clean Footer Action Bar */}
        <div
          className={`relative z-10 pt-4 border-t flex items-center justify-between gap-3 ${
            isFeatured
              ? "border-white/15"
              : "border-[#DCE8E2]/80 dark:border-[#21362E]"
          }`}
        >
          <span
            className={`text-xs font-semibold tracking-wide ${
              isFeatured
                ? "text-[#A7F3D0]"
                : "text-[#073D32] dark:text-[#34A880]"
            }`}
          >
            {isFeatured ? "Explore Medical Pathway" : "Explore Scholarships"}
          </span>

          <span
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
              isFeatured
                ? "bg-white/12 text-white group-hover:bg-[#15966F]"
                : "bg-[#E8F5EF] dark:bg-[#172923] text-[#073D32] dark:text-[#34A880] group-hover:bg-[#073D32] group-hover:text-white dark:group-hover:bg-[#15966F] dark:group-hover:text-[#0B1411]"
            }`}
          >
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export function ScholarshipCategories() {
  const { t } = useLocale();

  return (
    <section
      id="scholarship-categories"
      className="py-20 md:py-28 bg-[#FAFCFB] dark:bg-[#0B1411] border-t border-[#DCE8E2] dark:border-[#21362E]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <ScrollReveal className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F5EF] dark:bg-[#172923] border border-[#15966F]/20 text-[11px] font-bold uppercase tracking-[0.16em] text-[#073D32] dark:text-[#34A880] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#15966F]" />
              <span>{t("homeCategories.badge", "ACADEMIC DISCIPLINES")}</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#142C25] dark:text-[#F2F7F5] leading-[1.12]">
              Find the Right Path for{" "}
              <span className="font-editorial italic font-normal text-[#15966F] dark:text-[#34A880]">
                Your Future
              </span>
            </h2>

            <p className="mt-3.5 text-base sm:text-lg text-[#687A73] dark:text-[#9BB0A8] leading-relaxed">
              {t(
                "homeCategories.subheading",
                "Explore scholarship opportunities across diverse academic disciplines."
              )}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <Link
              href="/scholarships"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-white dark:bg-[#111E1A] text-[#073D32] dark:text-[#34A880] border border-[#DCE8E2] dark:border-[#21362E] hover:border-[#15966F] transition-colors group shrink-0"
            >
              <span>{t("homeCategories.viewAll", "View All Scholarships")}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </ScrollReveal>
        </div>

        {/* 12-Column Responsive Scholarship Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          {scholarshipDisciplines.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              delay={idx * 0.03}
              className={item.colSpan}
            >
              <DisciplineCard item={item} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
