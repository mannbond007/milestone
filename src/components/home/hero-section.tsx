"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, ShieldCheck } from "lucide-react";
import { useLocale } from "@/components/providers/locale-provider";

export function HeroSection() {
  const { t } = useLocale();

  return (
    <section
      id="hero"
      className="bg-[#F4F7F5] dark:bg-[#0B1411] pt-6 pb-10 md:pt-8 md:pb-14"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          {/* LEFT COLUMN: Primary Architectural Hero Card (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7 relative overflow-hidden rounded-[28px] bg-white dark:bg-[#111E1A] border border-[#D5E2DC] dark:border-[#21362E] p-8 sm:p-11 lg:p-14 flex flex-col justify-between shadow-premium"
          >
            {/* Subtle Ambient Radial Light in Top Right */}
            <div
              className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(37,139,104,0.09)_0%,transparent_70%)] pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10">
              {/* Dual-Segment Luxury Eyebrow Pill */}
              <div className="inline-flex items-center gap-2.5 p-1 pr-4 rounded-full bg-[#F2F7F4] dark:bg-[#172923] border border-[#D5E2DC] dark:border-[#258B68]/30 mb-8">
                <span className="px-2.5 py-1 rounded-full bg-[#103D32] text-white dark:bg-[#34A880] dark:text-[#0B1411] text-[10px] font-bold uppercase tracking-wider">
                  2025–26
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#103D32] dark:text-[#CBE6DA]">
                  {t("hero.badge", "INDIA'S PREMIER SCHOLARSHIP PLATFORM")}
                </span>
              </div>

              {/* Commanding Editorial Headline */}
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[58px] font-bold tracking-[-0.03em] text-[#172923] dark:text-[#F2F7F5] leading-[1.06]">
                {t("hero.headlinePart1", "Your Dreams Deserve")}
                <span className="block mt-2 font-editorial italic font-normal text-[#258B68] dark:text-[#34A880] tracking-[-0.01em]">
                  {t("hero.headlinePart2", "A Scholarship.")}
                </span>
              </h1>

              {/* Supporting Description */}
              <p className="mt-6 text-base sm:text-[17px] text-[#5C6B64] dark:text-[#9BB0A8] max-w-xl leading-[1.7] font-normal">
                {t(
                  "hero.subtitle",
                  "Unlock educational opportunities with scholarships across Medical, Engineering, Management, Law, Science and more. We help students turn their academic ambitions into reality."
                )}
              </p>

              {/* High-Craft Tactile CTAs */}
              <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  href="/sign-up"
                  id="hero-apply-btn"
                  className="inline-flex items-center justify-between sm:justify-center gap-3.5 h-13 pl-6 pr-2.5 rounded-full text-sm font-semibold bg-[#103D32] hover:bg-[#172923] text-white dark:bg-[#34A880] dark:hover:bg-[#258B68] dark:text-[#0B1411] dark:hover:text-white transition-all duration-200 shadow-[0_10px_25px_-6px_rgba(16,61,50,0.35)] group"
                >
                  <span>{t("hero.applyNow", "Apply for Scholarship")}</span>
                  <span className="w-8 h-8 rounded-full bg-[#258B68] dark:bg-[#0B1411]/15 flex items-center justify-center text-white dark:text-[#0B1411] group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>

                <Link
                  href="/scholarships"
                  id="hero-explore-btn"
                  className="inline-flex items-center justify-center h-13 px-7 rounded-full text-sm font-semibold bg-[#F8FAF8] dark:bg-[#0B1411] hover:bg-[#E8F3EE] dark:hover:bg-[#172923] text-[#172923] dark:text-[#F2F7F5] border border-[#D5E2DC] dark:border-[#21362E] transition-colors duration-200"
                >
                  <span>{t("hero.exploreScholarships", "Explore Opportunities")}</span>
                </Link>
              </div>
            </div>

            {/* Bottom Trust & Scholar Proof Bar Inside Main Tile */}
            <div className="relative z-10 mt-12 pt-7 border-t border-[#E4EDE8] dark:border-[#21362E] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="flex -space-x-2.5">
                  {[
                    { src: "/scholars/priya.png", alt: "Priya" },
                    { src: "/scholars/radhe.png", alt: "Radhe" },
                    { src: "/scholars/sushma_v.png", alt: "Sushma" },
                    { src: "/scholars/kiran_k.png", alt: "Kiran" },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full border-2 border-white dark:border-[#111E1A] overflow-hidden bg-[#E8F3EE] relative"
                    >
                      <Image
                        src={s.src}
                        alt={s.alt}
                        fill
                        sizes="36px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-bold text-[#172923] dark:text-[#F2F7F5]">
                    Joined by 15,000+ Scholars
                  </p>
                  <p className="text-[11px] text-[#68756F] dark:text-[#9BB0A8]">
                    Across 15+ States in India
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F4F7F5] dark:bg-[#0B1411] border border-[#E4EDE8] dark:border-[#21362E] text-xs font-medium text-[#172923] dark:text-[#F2F7F5]">
                <ShieldCheck className="w-4 h-4 text-[#258B68] dark:text-[#34A880] shrink-0" />
                <span>NMC • AICTE • UGC Aligned</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Asymmetrical Bento Grid Image Composition (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="lg:col-span-5 flex items-stretch"
          >
            <div className="w-full grid grid-cols-12 gap-3.5 sm:gap-4 items-stretch">
              {/* Main Image (60–65% width -> 7 of 12 cols): Large Vertical HDR Campus Portrait */}
              <div className="col-span-12 sm:col-span-7 relative min-h-[360px] sm:min-h-[480px] lg:min-h-full rounded-[22px] overflow-hidden bg-[#E8F3EE] dark:bg-[#172923] border border-[#D5E2DC] dark:border-[#21362E] shadow-[0_10px_28px_-8px_rgba(16,61,50,0.08)]">
                <Image
                  src="/images/hero/hero-main-student-hdr.jpg"
                  alt="Smiling Indian college student holding books on university campus"
                  fill
                  priority
                  quality={100}
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover object-center"
                />

                {/* Sculpted 3D Floating Scholarship Achievement Badge */}
                <div
                  className="
                    absolute bottom-3.5 left-3.5 right-3.5
                    rounded-[20px] px-4 py-3.5
                    bg-gradient-to-b from-white via-[#FAFDFB] to-[#EDF5F0]
                    dark:from-[#182B25] dark:via-[#12211C] dark:to-[#0C1713]
                    border border-white/90 dark:border-[#2A453B]
                    shadow-[0_20px_38px_-10px_rgba(10,38,31,0.38),0_6px_14px_-4px_rgba(16,61,50,0.22),inset_0_1.5px_0_rgba(255,255,255,0.95),inset_0_-2px_0_rgba(16,61,50,0.08)]
                    dark:shadow-[0_20px_38px_-10px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-2px_0_rgba(0,0,0,0.35)]
                    backdrop-blur-md
                    flex items-center justify-between gap-3
                    transition-transform duration-300 hover:-translate-y-0.5
                  "
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {/* 3D Embossed Emerald Crest Icon */}
                    <div
                      className="
                        w-10 h-10 rounded-[14px] shrink-0
                        bg-gradient-to-b from-[#2E9E77] via-[#258B68] to-[#103D32]
                        flex items-center justify-center text-white
                        border border-[#47BA92]/40
                        shadow-[0_8px_16px_-4px_rgba(16,61,50,0.45),inset_0_1.5px_1px_rgba(255,255,255,0.45),inset_0_-2px_2px_rgba(7,30,24,0.45)]
                      "
                    >
                      <Award className="w-5 h-5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]" />
                    </div>

                    <div className="min-w-0">
                      <p className="font-heading text-[15px] font-extrabold tracking-tight text-[#103D32] dark:text-[#F2F7F5] leading-tight truncate">
                        15,000+ Scholars
                      </p>
                      <p className="text-[11px] font-medium text-[#5C6B64] dark:text-[#9BB0A8] mt-0.5 truncate">
                        Verified Milestone Fellows
                      </p>
                    </div>
                  </div>

                  {/* Tactile 3D Verified Pill */}
                  <div
                    className="
                      inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full shrink-0
                      bg-gradient-to-b from-[#E8F3EE] to-[#D5EAE0]
                      dark:from-[#1D352D] dark:to-[#13251F]
                      border border-[#258B68]/25
                      shadow-[0_2px_6px_-1px_rgba(16,61,50,0.12),inset_0_1px_0_rgba(255,255,255,0.85)]
                      dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
                    "
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#258B68] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-b from-[#34A880] to-[#103D32] shadow-[0_1px_2px_rgba(16,61,50,0.4)]" />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#103D32] dark:text-[#34A880]">
                      Verified
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Supporting Column (35–40% width -> 5 of 12 cols): Top & Bottom Small HDR Images */}
              <div className="col-span-12 sm:col-span-5 grid grid-cols-2 sm:grid-cols-1 gap-3.5 sm:gap-4">
                {/* Top Small Image: Students studying together in modern university library */}
                <div className="relative min-h-[190px] sm:min-h-[230px] lg:min-h-0 lg:h-full rounded-[22px] overflow-hidden bg-[#E8F3EE] dark:bg-[#172923] border border-[#D5E2DC] dark:border-[#21362E] shadow-[0_10px_28px_-8px_rgba(16,61,50,0.08)]">
                  <Image
                    src="/images/hero/hero-study-group-hdr.jpg"
                    alt="Indian university students studying together in modern library"
                    fill
                    priority
                    quality={100}
                    unoptimized
                    sizes="(max-width: 1024px) 50vw, 600px"
                    className="object-cover object-center"
                  />
                </div>

                {/* Bottom Small Image: Graduation & celebrating academic achievement */}
                <div className="relative min-h-[190px] sm:min-h-[230px] lg:min-h-0 lg:h-full rounded-[22px] overflow-hidden bg-[#E8F3EE] dark:bg-[#172923] border border-[#D5E2DC] dark:border-[#21362E] shadow-[0_10px_28px_-8px_rgba(16,61,50,0.08)]">
                  <Image
                    src="/images/hero/hero-graduation-hdr.jpg"
                    alt="Indian university graduates celebrating convocation achievement"
                    fill
                    priority
                    quality={100}
                    unoptimized
                    sizes="(max-width: 1024px) 50vw, 600px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
