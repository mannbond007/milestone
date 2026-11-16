"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Banknote,
  Building2,
  FileCheck2,
  UserCheck,
  Compass,
  ArrowUpRight,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLocale } from "@/components/providers/locale-provider";

export function BenefitsSection() {
  const { t } = useLocale();

  return (
    <section
      id="benefits"
      className="py-20 md:py-28 bg-[#F4F7F5] dark:bg-[#0B1411] border-t border-[#D5E2DC] dark:border-[#21362E]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Editorial Header */}
        <ScrollReveal className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#172923] border border-[#D5E2DC] dark:border-[#258B68]/25 text-[11px] font-bold uppercase tracking-[0.14em] text-[#103D32] dark:text-[#34A880] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#258B68]" />
            <span>{t("homeBenefits.badge", "WHY CHOOSE MILESTONE")}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#172923] dark:text-[#F2F7F5] leading-[1.12]">
            A Complete Academic &amp;{" "}
            <span className="font-editorial italic font-normal text-[#258B68] dark:text-[#34A880]">
              Scholarship Ecosystem
            </span>
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#68756F] dark:text-[#9BB0A8] leading-relaxed">
            {t(
              "homeBenefits.subtitle",
              "Structured financial grants paired with dedicated academic mentorship and admission guidance."
            )}
          </p>
        </ScrollReveal>

        {/* 12-COLUMN BENTO GRID FOR THE 5 CORE SERVICES — WITH CONCENTRIC CURVES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
          {/* BENTO TILE 1: Scholarship Guidance (7 cols) */}
          <ScrollReveal className="lg:col-span-7">
            <div className="group relative overflow-hidden h-full min-h-[290px] rounded-[28px] bg-gradient-to-br from-white via-[#F9FBFA] to-[#F1F7F4] dark:from-[#15241F] dark:via-[#111E1A] dark:to-[#0D1814] border border-[#D5E2DC] dark:border-[#21362E] p-8 sm:p-10 flex flex-col justify-between shadow-premium">
              {/* Signature Double Concentric Curve Motif */}
              <div
                className="absolute -right-14 -top-14 w-56 h-56 rounded-full border border-[#258B68]/[0.14] bg-[#E8F3EE]/40 dark:bg-[#258B68]/[0.05] pointer-events-none transition-transform duration-500 group-hover:scale-110"
                aria-hidden="true"
              />
              <div
                className="absolute -right-4 -top-4 w-32 h-32 rounded-full border border-[#258B68]/[0.10] pointer-events-none transition-transform duration-500 group-hover:scale-105"
                aria-hidden="true"
              />

              <div className="relative z-10 flex items-center justify-between gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E8F3EE] dark:bg-[#172923] border border-[#258B68]/15 flex items-center justify-center text-[#103D32] dark:text-[#34A880]">
                  <Banknote className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#E8F3EE] dark:bg-[#172923] text-[#103D32] dark:text-[#34A880] border border-[#258B68]/15">
                  Up to ₹5,00,000 Grant Aid
                </span>
              </div>

              <div className="relative z-10 mt-10">
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#172923] dark:text-[#F2F7F5] tracking-tight">
                  Scholarship Guidance
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#68756F] dark:text-[#9BB0A8] leading-relaxed max-w-xl">
                  Merit and need-based financial support, tuition fee concessions, hostel fee waivers, and educational reward programs tailored for post-Class 12 and post-graduation scholars.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* BENTO TILE 2: University Assistance with Campus Photography (5 cols) */}
          <ScrollReveal delay={0.05} className="lg:col-span-5">
            <div className="group relative h-full min-h-[290px] rounded-[28px] overflow-hidden bg-[#103D32] border border-[#D5E2DC] dark:border-[#21362E] p-8 sm:p-10 flex flex-col justify-between text-white shadow-premium">
              <Image
                src="/scholars/sushma_v.png"
                alt="University lecture room"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071E18]/95 via-[#0D3329]/60 to-[#103D32]/25" />

              {/* Signature Concentric Curve Overlay */}
              <div
                className="absolute -right-12 -top-12 w-48 h-48 rounded-full border border-white/[0.15] pointer-events-none transition-transform duration-500 group-hover:scale-110"
                aria-hidden="true"
              />
              <div
                className="absolute -right-4 -top-4 w-28 h-28 rounded-full border border-white/[0.10] pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10 flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-white/15 backdrop-blur-md border border-white/15 flex items-center justify-center text-white">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/15 text-white">
                  1,750+ Partner Institutions
                </span>
              </div>

              <div className="relative z-10 mt-10">
                <h3 className="font-heading text-2xl font-bold tracking-tight text-white">
                  University Assistance
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#CBE6DA] leading-relaxed">
                  Objective institution selection across Government Medical Colleges, NMC-compliant abroad universities, NITs, and AICTE institutions.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* BENTO TILE 3: Application Support (4 cols) */}
          <ScrollReveal delay={0.08} className="lg:col-span-4">
            <div className="group relative overflow-hidden h-full min-h-[250px] rounded-[28px] bg-gradient-to-br from-[#E8F3EE] via-[#E1EFE8] to-[#D6E9E0] dark:from-[#172923] dark:to-[#0F1C18] border border-[#BFDCD0] dark:border-[#258B68]/30 p-8 flex flex-col justify-between shadow-premium">
              {/* Signature Double Concentric Curve Motif */}
              <div
                className="absolute -right-12 -top-12 w-44 h-44 rounded-full border border-[#103D32]/[0.12] dark:border-white/[0.10] bg-white/35 dark:bg-white/[0.02] pointer-events-none transition-transform duration-500 group-hover:scale-110"
                aria-hidden="true"
              />
              <div
                className="absolute -right-4 -top-4 w-26 h-26 rounded-full border border-[#103D32]/[0.08] dark:border-white/[0.06] pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10 w-11 h-11 rounded-2xl bg-white dark:bg-[#111E1A] border border-[#103D32]/10 flex items-center justify-center text-[#103D32] dark:text-[#34A880]">
                <FileCheck2 className="w-5 h-5" />
              </div>

              <div className="relative z-10 mt-8">
                <h3 className="font-heading text-xl font-bold text-[#103D32] dark:text-[#F2F7F5]">
                  Application Support
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#172923]/80 dark:text-[#9BB0A8] leading-relaxed">
                  End-to-end assistance with online registration, document verification checklists, and scholarship assessment test preparation.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* BENTO TILE 4: Personalized Counselling (4 cols) */}
          <ScrollReveal delay={0.12} className="lg:col-span-4">
            <div className="group relative overflow-hidden h-full min-h-[250px] rounded-[28px] bg-gradient-to-br from-white via-[#F9FBFA] to-[#F1F7F4] dark:from-[#15241F] dark:via-[#111E1A] dark:to-[#0D1814] border border-[#D5E2DC] dark:border-[#21362E] p-8 flex flex-col justify-between shadow-premium">
              {/* Signature Double Concentric Curve Motif */}
              <div
                className="absolute -right-12 -top-12 w-44 h-44 rounded-full border border-[#258B68]/[0.14] bg-[#E8F3EE]/40 dark:bg-[#258B68]/[0.05] pointer-events-none transition-transform duration-500 group-hover:scale-110"
                aria-hidden="true"
              />
              <div
                className="absolute -right-4 -top-4 w-26 h-26 rounded-full border border-[#258B68]/[0.10] pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10 w-11 h-11 rounded-2xl bg-[#E8F3EE] dark:bg-[#172923] border border-[#258B68]/15 flex items-center justify-center text-[#103D32] dark:text-[#34A880]">
                <UserCheck className="w-5 h-5" />
              </div>

              <div className="relative z-10 mt-8">
                <h3 className="font-heading text-xl font-bold text-[#172923] dark:text-[#F2F7F5]">
                  Personalized Counselling
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#68756F] dark:text-[#9BB0A8] leading-relaxed">
                  1-on-1 academic mentorship and career roadmap sessions with senior educators from AIIMS, IITs, IIMs, and the legal profession.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* BENTO TILE 5: Admission Guidance (4 cols) */}
          <ScrollReveal delay={0.16} className="lg:col-span-4">
            <Link
              href="/how-to-apply"
              className="group relative overflow-hidden h-full min-h-[250px] rounded-[28px] bg-gradient-to-br from-[#103D32] via-[#0D3329] to-[#071E18] text-white p-8 flex flex-col justify-between shadow-[0_14px_34px_-10px_rgba(16,61,50,0.28)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              {/* Signature Double Concentric Curve Motif */}
              <div
                className="absolute -right-12 -top-12 w-44 h-44 rounded-full border border-white/[0.11] bg-white/[0.02] pointer-events-none transition-transform duration-500 group-hover:scale-110"
                aria-hidden="true"
              />
              <div
                className="absolute -right-4 -top-4 w-26 h-26 rounded-full border border-white/[0.08] pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10 flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-[#34A880]">
                  <Compass className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#CBE6DA] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>

              <div className="relative z-10 mt-8">
                <h3 className="font-heading text-xl font-bold text-white">
                  Admission Guidance
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#CBE6DA] leading-relaxed">
                  Structured support through centralized entrance counselling for NEET-UG, AYUSH, JEE/JoSAA, CLAT, and MBA/PGDM admissions.
                </p>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
