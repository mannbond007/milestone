"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronRight,
  HeartHandshake,
  Rocket,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const coreValues = [
  {
    num: "01",
    icon: ShieldCheck,
    title: "Integrity & Trust",
    description:
      "Ensuring an unbiased, highly transparent, and merit-based selection process that values genuine need and potential above all.",
  },
  {
    num: "02",
    icon: Award,
    title: "Academic Excellence",
    description:
      "Partnering with expert mentors and providing quality resources to guide students toward exceptional academic achievements.",
  },
  {
    num: "03",
    icon: HeartHandshake,
    title: "Empathy & Support",
    description:
      "Fostering an inclusive, warm ecosystem that listens to personal constraints and provides holistic academic and financial assistance.",
  },
  {
    num: "04",
    icon: TrendingUp,
    title: "Continuous Growth",
    description:
      "Constantly expanding our scholarship reach and upgrading mentor programs to adapt to evolving career paths and student needs.",
  },
];

const journeySteps = [
  {
    step: "01",
    tag: "Discovery",
    title: "Eligibility & Discovery",
    description:
      "Reaching out to deserving candidates across India and identifying potential through transparent, comprehensive evaluation.",
  },
  {
    step: "02",
    tag: "Mentorship",
    title: "Mentorship & Guidance",
    description:
      "Pairing selected scholars with subject experts, offering disciplined schedules, curated study materials, and regular progress reviews.",
  },
  {
    step: "03",
    tag: "Impact",
    title: "Success & Pay-It-Forward",
    description:
      "Guiding students into respected professional colleges and careers, nurturing a community that guides the next generation.",
  },
];

export function VisionMissionContent() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white dark:bg-[#07120F]">
      {/* Hero Section: Clean Split + Floating Tilted Scholar Cards */}
      <section className="relative overflow-hidden border-b border-[#E3ECE8] bg-gradient-to-br from-[#F2FAF6] via-[#FAFCFB] to-[#EBF7F1] pb-16 pt-28 md:pb-24 md:pt-36 dark:border-[#162E26] dark:from-[#071511] dark:via-[#07120F] dark:to-[#0A1F19]">
        {/* Soft ambient emerald glow behind right card cluster */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[8%] top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-[#15966F]/16 blur-[100px] dark:bg-[#15966F]/22"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
            {/* Left Column: Clean, Tight Editorial Copy + CTA */}
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#15966F]/20 bg-white/90 px-3.5 py-1.5 shadow-[0_4px_14px_-6px_rgba(7,61,50,0.12)] dark:border-[#34D399]/25 dark:bg-[#112B23] dark:shadow-none"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#15966F] ring-2 ring-[#15966F]/25 dark:bg-[#34D399]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#073D32] dark:text-[#6EE7B7]">
                  Our North Star
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="mt-5 font-heading text-4xl font-bold leading-[1.06] tracking-[-0.03em] text-[#0E241E] sm:text-5xl lg:text-[58px] dark:text-white"
              >
                Empower Dreams,
                <span className="block">Build Futures</span>
                <span className="font-editorial italic font-normal text-[#15966F] dark:text-[#34D399]">
                  Together.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="mt-5 max-w-lg text-[16px] leading-[1.7] text-[#5C6B64] sm:text-[17px] dark:text-[#A0B3AC]"
              >
                Our vision and mission unite structured mentorship, merit scholarships, and academic guidance so capable students never fall behind due to finances.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.24 }}
                className="mt-8 flex flex-col items-start gap-3"
              >
                <Link
                  href="/sign-up"
                  className="group inline-flex h-12 items-center gap-3 rounded-full bg-gradient-to-r from-[#073D32] to-[#11644E] pl-6 pr-2 text-[14px] font-semibold text-white shadow-[0_12px_26px_-6px_rgba(7,61,50,0.42)] transition-all duration-200 hover:-translate-y-0.5 hover:from-[#0A4E3F] hover:to-[#158062]"
                >
                  <span>Apply for Scholarship</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#073D32] transition-transform duration-200 group-hover:translate-x-0.5">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>

                <span className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#687A73] dark:text-[#8DA39B]">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#15966F] dark:text-[#34D399]" />
                  <span>2025–26 Cycle Open &bull; 15,000+ Scholars Supported</span>
                </span>
              </motion.div>
            </div>

            {/* Right Column: Interactive Floating Tilted Scholar Cards Collage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative mx-auto w-full max-w-[500px] lg:col-span-6 lg:max-w-none"
            >
              {/* Desktop Floating Collage (3 tilted interactive glass cards) */}
              <div className="relative hidden h-[390px] sm:block">
                {/* Card 1: Top-Left Deep Forest Glass Card */}
                <div className="group absolute left-4 top-2 z-10 w-[198px] -rotate-4 rounded-[24px] border border-[#15966F]/35 bg-gradient-to-br from-[#073D32] via-[#0B5243] to-[#12725A] p-5 text-white shadow-[0_22px_48px_-14px_rgba(7,61,50,0.45),inset_0_1px_0_rgba(255,255,255,0.2)] transition-all duration-300 hover:z-30 hover:-translate-y-2 hover:rotate-0">
                  <div className="mx-auto h-20 w-20 overflow-hidden rounded-full border-[3px] border-white/85 bg-[#E8F5EF] shadow-md">
                    <img
                      src="/scholars/priya_bk.png"
                      alt="Priya B. K."
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="mt-4">
                    <div className="font-heading text-[16px] font-bold leading-tight text-white">
                      Priya B. K.
                    </div>
                    <div className="mt-0.5 text-[12px] text-[#C8E9DC]">
                      Civil Engineering
                    </div>
                    <div className="mt-3 inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-[#6EE7B7]">
                      <span className="h-2 w-2 rounded-full bg-[#34D399]" />
                      <span>Scholar</span>
                    </div>
                  </div>
                </div>

                {/* Card 2: Top-Right Luminous Frosted Card */}
                <div className="group absolute right-2 top-8 z-10 w-[198px] rotate-4 rounded-[24px] border border-white/95 bg-white/85 p-5 shadow-[0_22px_48px_-14px_rgba(7,61,50,0.18),inset_0_1.5px_0_rgba(255,255,255,1)] backdrop-blur-xl transition-all duration-300 hover:z-30 hover:-translate-y-2 hover:rotate-0 dark:border-[#1E3B32] dark:bg-[#0D1E19]/90">
                  <div className="mx-auto h-20 w-20 overflow-hidden rounded-full border-[3px] border-[#E8F5EF] bg-[#E8F5EF] shadow-sm dark:border-[#1E3B32]">
                    <img
                      src="/scholars/vishwajeet.png"
                      alt="Vishwajeet Ghosh"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="mt-4">
                    <div className="font-heading text-[16px] font-bold leading-tight text-[#0E241E] dark:text-white">
                      Vishwajeet G.
                    </div>
                    <div className="mt-0.5 text-[12px] text-[#5C6B64] dark:text-[#A0B3AC]">
                      MBA &bull; Symbiosis
                    </div>
                    <div className="mt-3 inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-[#15966F] dark:text-[#34D399]">
                      <span className="h-2 w-2 rounded-full bg-[#15966F] dark:bg-[#34D399]" />
                      <span>Scholar</span>
                    </div>
                  </div>
                </div>

                {/* Card 3: Bottom-Center Overlapping Frosted Card */}
                <div className="group absolute bottom-1 left-[28%] z-20 w-[204px] -rotate-2 rounded-[24px] border border-[#15966F]/20 bg-gradient-to-br from-white/95 via-[#F7FCF9]/95 to-[#E8F5EF]/95 p-5 shadow-[0_26px_54px_-14px_rgba(7,61,50,0.22),inset_0_1.5px_0_rgba(255,255,255,1)] backdrop-blur-xl transition-all duration-300 hover:z-30 hover:-translate-y-2 hover:rotate-0 dark:border-[#244E40] dark:from-[#0F241E]/95 dark:to-[#133228]/95">
                  <div className="mx-auto h-20 w-20 overflow-hidden rounded-full border-[3px] border-white bg-[#E8F5EF] shadow-md dark:border-[#1E3B32]">
                    <img
                      src="/scholars/sushma_v.png"
                      alt="Sushma V."
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="mt-4">
                    <div className="font-heading text-[16px] font-bold leading-tight text-[#0E241E] dark:text-white">
                      Sushma V.
                    </div>
                    <div className="mt-0.5 text-[12px] text-[#5C6B64] dark:text-[#A0B3AC]">
                      B.Com &bull; Bangalore
                    </div>
                    <div className="mt-3 inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-[#15966F] dark:text-[#34D399]">
                      <span className="h-2 w-2 rounded-full bg-[#15966F] dark:bg-[#34D399]" />
                      <span>Scholar</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clean Mobile 3-Card Horizontal Strip */}
              <div className="grid grid-cols-3 gap-2.5 sm:hidden">
                {[
                  { name: "Priya B. K.", role: "B.Tech", img: "/scholars/priya_bk.png", dark: true },
                  { name: "Vishwajeet", role: "MBA", img: "/scholars/vishwajeet.png", dark: false },
                  { name: "Sushma V.", role: "B.Com", img: "/scholars/sushma_v.png", dark: false },
                ].map((s) => (
                  <div
                    key={s.name}
                    className={`rounded-2xl border p-3 text-center shadow-sm ${
                      s.dark
                        ? "border-[#15966F]/30 bg-gradient-to-b from-[#073D32] to-[#0F5E4A] text-white"
                        : "border-[#DCE8E3] bg-white text-[#0E241E] dark:border-[#1E3B32] dark:bg-[#0D1E19] dark:text-white"
                    }`}
                  >
                    <div className="mx-auto h-12 w-12 overflow-hidden rounded-full border-2 border-white">
                      <img src={s.img} alt={s.name} className="h-full w-full object-cover object-top" />
                    </div>
                    <div className="mt-2 truncate font-heading text-[12px] font-bold">
                      {s.name}
                    </div>
                    <div className={`text-[10.5px] ${s.dark ? "text-[#A7F3D0]" : "text-[#687A73]"}`}>
                      {s.role}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Split Cards: Our Vision & Program Objective */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Vision Card */}
            <ScrollReveal delay={0.08} className="h-full">
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-[#DCE8E3] border-b-[3px] border-b-[#C5DDD3] bg-white p-7 shadow-[0_16px_40px_-16px_rgba(7,61,50,0.12),inset_0_1px_0_rgba(255,255,255,1)] transition-all duration-300 hover:-translate-y-1 hover:border-[#15966F]/45 hover:shadow-[0_24px_50px_-16px_rgba(7,61,50,0.18)] sm:p-10 dark:border-[#1E3B32] dark:border-b-[#122922] dark:bg-[#0D1E19]">
                <div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl border border-[#15966F]/20 bg-gradient-to-b from-white via-[#ECF8F2] to-[#D2EFE1] text-[#0B7453] shadow-[0_8px_18px_-6px_rgba(7,61,50,0.22),inset_0_1.5px_0_rgba(255,255,255,1)] transition-transform duration-300 group-hover:scale-105 dark:border-[#34D399]/25 dark:from-[#1B4538] dark:to-[#0F2A22] dark:text-[#6EE7B7]">
                      <Rocket className="h-6 w-6" strokeWidth={2} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#15966F] dark:text-[#34D399]">
                        The Dream
                      </span>
                      <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0E241E] sm:text-[28px] dark:text-white">
                        Our Vision
                      </h2>
                    </div>
                  </div>

                  <p className="mt-6 text-[15.5px] leading-[1.72] text-[#465952] sm:text-[16.5px] dark:text-[#C4D9D1]">
                    To create a focused, high-discipline, and future-ready academic ecosystem where students receive direct mentorship, resource assistance, and opportunities from an early stage to achieve their career goals.
                  </p>

                  <div className="mt-6 space-y-3.5">
                    {[
                      {
                        label: "Early Direction",
                        text: "Steer young aspirants in the right direction before critical exam milestones.",
                      },
                      {
                        label: "Quality Materials",
                        text: "Remove geographical barriers to top-tier academic books and assessments.",
                      },
                      {
                        label: "Equitable Ecosystem",
                        text: "Bridge the support gap between well-resourced and underserved families.",
                      },
                    ].map((point) => (
                      <div
                        key={point.label}
                        className="flex items-start gap-3 rounded-xl border border-[#EAF2EE] bg-[#FAFCFB] p-3.5 dark:border-[#18332B] dark:bg-[#10241E]"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#15966F] dark:text-[#34D399]" />
                        <p className="text-[14px] leading-relaxed text-[#5C6B64] dark:text-[#A0B3AC]">
                          <strong className="font-semibold text-[#0E241E] dark:text-white">
                            {point.label}:
                          </strong>{" "}
                          {point.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-[#15966F]/15 bg-[#EBF7F1]/75 px-5 py-4 dark:border-[#34D399]/20 dark:bg-[#112B23]">
                  <p className="font-editorial italic text-[17px] leading-snug text-[#073D32] sm:text-[19px] dark:text-[#86DFB8]">
                    &ldquo;Focused Learning Today. Successful Career Tomorrow.&rdquo;
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Mission / Program Objective Card */}
            <ScrollReveal delay={0.14} className="h-full">
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-[#15966F]/25 border-b-[3px] border-b-[#15966F]/45 bg-gradient-to-br from-white via-[#F6FBF8] to-[#E8F5EE] p-7 shadow-[0_16px_40px_-16px_rgba(7,61,50,0.14),inset_0_1px_0_rgba(255,255,255,1)] transition-all duration-300 hover:-translate-y-1 hover:border-[#15966F]/50 hover:shadow-[0_24px_50px_-16px_rgba(21,150,111,0.2)] sm:p-10 dark:border-[#244E40] dark:border-b-[#16362C] dark:from-[#0F241E] dark:via-[#0D1E19] dark:to-[#133228]">
                <div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-b from-[#0E6A54] to-[#073D32] text-white shadow-[0_10px_22px_-6px_rgba(7,61,50,0.4)] transition-transform duration-300 group-hover:scale-105 dark:from-[#15966F] dark:to-[#0B5243]">
                      <Target className="h-6 w-6" strokeWidth={2} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#15966F] dark:text-[#34D399]">
                        The Action
                      </span>
                      <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0E241E] sm:text-[28px] dark:text-white">
                        Program Objective
                      </h2>
                    </div>
                  </div>

                  <p className="mt-6 text-[15.5px] leading-[1.72] text-[#465952] sm:text-[16.5px] dark:text-[#C4D9D1]">
                    The Milestone Scholarship Program identifies deserving students early on and provides dependable financial aid alongside structured academic and personal accountability support.
                  </p>

                  <div className="mt-6 space-y-3.5">
                    {[
                      {
                        label: "Targeted Financial Aid",
                        text: "Fully or partially cover coaching, textbooks, hostel fees, or institutional tuition.",
                      },
                      {
                        label: "Structured Mentorship",
                        text: "Direct connection with senior scholars, engineers, doctors, and counselors.",
                      },
                      {
                        label: "Empowered Careers",
                        text: "Remove the mental stress of finances so candidates can perform at their peak.",
                      },
                    ].map((point) => (
                      <div
                        key={point.label}
                        className="flex items-start gap-3 rounded-xl border border-[#DCEAE4] bg-white/85 p-3.5 dark:border-[#1E3B32] dark:bg-[#0B1915]/80"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#15966F] dark:text-[#34D399]" />
                        <p className="text-[14px] leading-relaxed text-[#5C6B64] dark:text-[#A0B3AC]">
                          <strong className="font-semibold text-[#0E241E] dark:text-white">
                            {point.label}:
                          </strong>{" "}
                          {point.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-[#D6E7DF] pt-5 dark:border-[#1E3B32]">
                  <span className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#073D32] dark:text-[#6EE7B7]">
                    Milestone Scholarship Initiative
                  </span>
                  <span className="rounded-full bg-white px-3 py-1 text-[11px] font-bold text-[#15966F] shadow-2xs dark:bg-[#132E26] dark:text-[#34D399]">
                    Up to ₹5,00,000 Aid
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values Section: Open 4-Column Architectural Grid with 3D Beveled Lines */}
      <section className="relative z-10 border-y border-[#E3ECE8] bg-[#FAFCFB] py-20 md:py-24 dark:border-[#162E26] dark:bg-[#081511]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#15966F] dark:text-[#34D399]">
              How We Operate
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-[1.12] tracking-[-0.025em] text-[#0E241E] sm:text-4xl lg:text-[42px] dark:text-white">
              Our Core{" "}
              <span className="font-editorial italic font-normal text-[#15966F] dark:text-[#34D399]">
                Values
              </span>
            </h2>
            <p className="mt-3.5 text-[15.5px] leading-relaxed text-[#5C6B64] dark:text-[#A0B3AC]">
              These principles guide every scholarship awarded, every mentorship session held, and every long-term commitment we make.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="relative mt-14">
              <div
                aria-hidden="true"
                className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#B8D5C8] to-transparent shadow-[0_1px_0_rgba(255,255,255,0.95)] dark:via-[#214539] dark:shadow-none"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {coreValues.map((val, idx) => {
                  const IconComponent = val.icon;
                  return (
                    <div
                      key={val.title}
                      className="group relative flex flex-col justify-between px-4 py-8 sm:px-6 md:py-10"
                    >
                      {idx > 0 && (
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-y-6 left-0 hidden w-[2px] bg-gradient-to-b from-transparent via-[#B8D5C8] to-transparent shadow-[1px_0_0_rgba(255,255,255,0.95)] lg:block dark:via-[#214539] dark:shadow-none"
                        />
                      )}

                      <div>
                        <div className="flex items-center justify-between">
                          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#15966F]/20 bg-gradient-to-b from-white via-[#ECF8F2] to-[#D2EFE1] text-[#0B7453] shadow-[0_8px_16px_-6px_rgba(7,61,50,0.2),inset_0_1.5px_0_rgba(255,255,255,1)] transition-transform duration-300 group-hover:-translate-y-0.5 dark:border-[#34D399]/25 dark:from-[#1B4538] dark:to-[#0F2A22] dark:text-[#6EE7B7]">
                            <IconComponent className="h-5 w-5" strokeWidth={2} />
                          </span>
                          <span className="font-editorial italic text-2xl font-semibold text-[#15966F]/45 transition-colors group-hover:text-[#15966F] dark:text-[#34D399]/40">
                            {val.num}
                          </span>
                        </div>

                        <h3 className="mt-5 font-heading text-[18.5px] font-bold tracking-tight text-[#0E241E] dark:text-white">
                          {val.title}
                        </h3>
                        <p className="mt-2 text-[14px] leading-[1.68] text-[#5C6B64] dark:text-[#A0B3AC]">
                          {val.description}
                        </p>
                      </div>

                      <div className="mt-6 h-[3px] w-10 rounded-full bg-gradient-to-r from-[#073D32] to-[#15966F] transition-all duration-300 group-hover:w-20" />
                    </div>
                  );
                })}
              </div>

              <div
                aria-hidden="true"
                className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#B8D5C8] to-transparent shadow-[0_1px_0_rgba(255,255,255,0.95)] dark:via-[#214539] dark:shadow-none"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Scholar Lifecycle Roadmap: 3-Step Frosted Glass Progression */}
      <section className="relative z-10 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mx-auto mb-14 max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#15966F]/20 bg-[#EBF7F1] px-3.5 py-1.5 dark:border-[#34D399]/25 dark:bg-[#112B23]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#15966F] ring-2 ring-[#15966F]/25 dark:bg-[#34D399] dark:ring-[#34D399]/25" />
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#073D32] dark:text-[#6EE7B7]">
                The Scholar Lifecycle
              </span>
            </div>

            <h2 className="mt-4 font-heading text-3xl font-bold leading-[1.12] tracking-[-0.025em] text-[#0E241E] sm:text-4xl lg:text-[42px] dark:text-white">
              From Dream to{" "}
              <span className="font-editorial italic font-normal text-[#15966F] dark:text-[#34D399]">
                Reality
              </span>
            </h2>
            <p className="mt-3.5 text-[15.5px] leading-relaxed text-[#5C6B64] dark:text-[#A0B3AC]">
              We do not just award grants. We build structured support steps to transition promising students into accomplished professionals.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
            {journeySteps.map((step, idx) => (
              <ScrollReveal key={step.step} delay={idx * 0.1} className="relative h-full">
                <div className="group relative h-full pl-6 pt-7">
                  {/* Flush Horizontal Dotted Connector to Next Card on Desktop */}
                  {idx < journeySteps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute left-full top-[calc(50%+14px)] z-0 hidden w-[72px] -translate-y-1/2 items-center lg:flex"
                    >
                      <span className="flex-1 border-t-2 border-dotted border-[#15966F]/55 dark:border-[#34D399]/45" />
                      <span className="mx-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#15966F]/25 bg-[#EBF7F1] text-[#15966F] dark:border-[#34D399]/30 dark:bg-[#132E26] dark:text-[#6EE7B7]">
                        <ChevronRight className="h-3.5 w-3.5" strokeWidth={2.4} />
                      </span>
                      <span className="flex-1 border-t-2 border-dotted border-[#15966F]/55 dark:border-[#34D399]/45" />
                    </div>
                  )}

                  {/* Overlapping Deep Emerald Step Badge */}
                  <div
                    aria-hidden="true"
                    className="absolute left-0 top-0 z-0 flex h-[92px] w-[92px] items-start justify-start rounded-[22px] border border-white/20 bg-gradient-to-br from-[#06382E] via-[#0E5C48] to-[#15966F] pl-3.5 pt-2.5 shadow-[0_14px_28px_-8px_rgba(7,61,50,0.42)] transition-transform duration-300 group-hover:-translate-y-1"
                  >
                    <span className="font-heading text-[17px] font-bold leading-none text-white">
                      {step.step}
                    </span>
                  </div>

                  {/* Frosted Glass Step Card */}
                  <div className="relative z-10 flex h-full flex-col justify-between overflow-hidden rounded-[22px] border-[1.5px] border-white/95 border-b-[3px] border-b-[#C7DED4] bg-gradient-to-br from-white/85 via-white/75 to-[#EFF9F4]/85 p-6 ring-1 ring-[#073D32]/[0.06] shadow-[0_18px_44px_-14px_rgba(7,61,50,0.14),inset_0_1.5px_0_rgba(255,255,255,1)] backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#15966F]/40 dark:border-[#1E3B32] dark:border-b-[#122922] dark:from-[#0F241E]/85 dark:to-[#112A22]/85">
                    <div>
                      <div className="flex justify-end pl-12">
                        <span className="rounded-full border border-[#15966F]/18 bg-[#EBF7F1] px-3 py-1 font-heading text-[11px] font-bold uppercase tracking-wider text-[#0B7453] dark:border-[#34D399]/25 dark:bg-[#132E26] dark:text-[#6EE7B7]">
                          {step.tag}
                        </span>
                      </div>
                      <h3 className="mt-5 font-heading text-[19px] font-bold tracking-tight text-[#0E241E] dark:text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2.5 text-[14px] leading-[1.7] text-[#5C6B64] dark:text-[#A0B3AC]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="relative z-10 border-t border-[#E3ECE8] bg-[#FAFCFB] py-16 md:py-24 dark:border-[#162E26] dark:bg-[#081511]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-[30px] border border-[#DCE8E3] border-b-[3px] border-b-[#C5DDD3] bg-gradient-to-br from-white via-[#F9FCFA] to-[#EBF7F1] p-8 text-center shadow-[0_22px_54px_-18px_rgba(7,61,50,0.12),inset_0_1px_0_rgba(255,255,255,1)] sm:p-12 md:p-14 dark:border-[#1E3B32] dark:border-b-[#122922] dark:from-[#0E211B] dark:via-[#0D1E19] dark:to-[#112A22]">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#15966F]/20 bg-[#EBF7F1] px-3.5 py-1.5 dark:border-[#34D399]/25 dark:bg-[#112B23]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#15966F] ring-2 ring-[#15966F]/25 dark:bg-[#34D399]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#073D32] dark:text-[#6EE7B7]">
                  Let&apos;s Build the Future
                </span>
              </div>

              <h2 className="mt-5 font-heading text-3xl font-bold tracking-[-0.025em] text-[#0E241E] sm:text-4xl dark:text-white">
                Be Part of{" "}
                <span className="font-editorial italic font-normal text-[#15966F] dark:text-[#34D399]">
                  Our Mission
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-[15.5px] leading-relaxed text-[#5C6B64] dark:text-[#A0B3AC]">
                Whether you are a deserving student looking for scholarship support or an educator wishing to mentor young talent, your step matters.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
                <Link
                  href="/sign-up"
                  className="group inline-flex h-12 w-full items-center justify-between gap-3 rounded-full bg-gradient-to-r from-[#073D32] to-[#11644E] pl-6 pr-2 text-[13.5px] font-semibold text-white shadow-[0_10px_24px_-6px_rgba(7,61,50,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:from-[#0A4E3F] hover:to-[#158062] sm:w-auto sm:justify-center"
                >
                  <span>Apply for Scholarship</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#073D32] transition-transform duration-200 group-hover:translate-x-0.5">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>

                <Link
                  href="/courses"
                  className="inline-flex h-12 w-full items-center justify-center rounded-full border border-[#D4E3DC] bg-white px-7 text-[13.5px] font-semibold text-[#073D32] shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#15966F]/50 hover:text-[#15966F] sm:w-auto dark:border-[#1E3B32] dark:bg-[#132E26] dark:text-white"
                >
                  Explore Courses
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
