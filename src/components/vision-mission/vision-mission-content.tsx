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
    tag: "Evaluation",
    title: "Merit Assessment & Review",
    description:
      "Reviewing academic records, scholarship test performance, and financial need through fair, unbiased evaluation criteria.",
  },
  {
    step: "03",
    tag: "Grant Aid",
    title: "Scholarship Grant Approval",
    description:
      "Approving verified tuition, hostel, and study material grants directly to support deserving scholars with zero hidden fees.",
  },
  {
    step: "04",
    tag: "Mentorship",
    title: "Mentorship & Guidance",
    description:
      "Pairing selected scholars with subject experts, offering disciplined schedules, curated study materials, and regular progress reviews.",
  },
  {
    step: "05",
    tag: "Admissions",
    title: "College & Admission Counseling",
    description:
      "Guiding candidates through centralized counseling for NEET-UG, JEE, CLAT, and top partner institutions across India and abroad.",
  },
  {
    step: "06",
    tag: "Impact",
    title: "Success & Pay-It-Forward",
    description:
      "Guiding students into respected professional colleges and careers, nurturing a community that mentors the next generation.",
  },
];

export function VisionMissionContent() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white dark:bg-[#07120F]">
      {/* Hero Section: 3-Column Staggered Editorial Gallery (Inspired by Reference Layout) */}
      <section className="relative overflow-hidden border-b border-[#E3ECE8] bg-gradient-to-b from-[#F2FAF6] via-[#FAFCFB] to-white pb-16 pt-24 md:pb-24 md:pt-32 dark:border-[#162E26] dark:from-[#071511] dark:via-[#07120F] dark:to-[#07120F]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-12 h-80 w-80 rounded-full bg-[#15966F]/[0.08] blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="rounded-[32px] border border-[#DCE8E3] border-b-[3px] border-b-[#C5DDD3] bg-white p-5 shadow-[0_24px_60px_-20px_rgba(7,61,50,0.12),inset_0_1px_0_rgba(255,255,255,1)] sm:p-8 lg:p-10 dark:border-[#1E3B32] dark:border-b-[#122922] dark:bg-[#0D1E19]"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-7">
              {/* COLUMN 1: Vertically Centered Tall Scholar Card */}
              <div className="flex items-center">
                <Link
                  href="/scholarships#mbbs"
                  className="group relative block aspect-[3/4] w-full overflow-hidden rounded-[24px] bg-[#E8F5EF] shadow-[0_16px_36px_-14px_rgba(7,61,50,0.22)] md:aspect-[3/4.3] dark:bg-[#132E26]"
                >
                  <img
                    src="/images/categories/medical.jpg"
                    alt="Medical scholarship scholar"
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05231B]/55 via-transparent to-transparent" />

                  {/* Frosted Glass Bottom Pill Bar */}
                  <div className="absolute inset-x-3.5 bottom-3.5 flex items-center justify-between gap-2 rounded-full border border-white/60 bg-white/85 py-1.5 pl-4 pr-1.5 shadow-[0_10px_24px_rgba(5,35,27,0.25)] backdrop-blur-md transition-all duration-300 group-hover:bg-white">
                    <div className="min-w-0 leading-tight">
                      <span className="block truncate font-heading text-[13px] font-bold text-[#073D32]">
                        Medical Grants
                      </span>
                      <span className="block text-[11px] font-semibold text-[#15966F]">
                        Up to ₹5,00,000
                      </span>
                    </div>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#073D32] text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:bg-[#15966F]">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </div>

              {/* COLUMN 2: Stacked Two Editorial Cards */}
              <div className="flex flex-col gap-6 lg:gap-7">
                {/* Top Card */}
                <Link
                  href="/scholarships#btech"
                  className="group relative block aspect-[4/4.2] w-full overflow-hidden rounded-[24px] bg-[#E8F5EF] shadow-[0_16px_36px_-14px_rgba(7,61,50,0.2)] dark:bg-[#132E26]"
                >
                  <img
                    src="/images/categories/engineering.jpg"
                    alt="Engineering scholarship scholar"
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05231B]/55 via-transparent to-transparent" />

                  <div className="absolute inset-x-3.5 bottom-3.5 flex items-center justify-between gap-2 rounded-full border border-white/60 bg-white/85 py-1.5 pl-4 pr-1.5 shadow-[0_10px_24px_rgba(5,35,27,0.25)] backdrop-blur-md transition-all duration-300 group-hover:bg-white">
                    <div className="min-w-0 leading-tight">
                      <span className="block truncate font-heading text-[13px] font-bold text-[#073D32]">
                        Engineering Aid
                      </span>
                      <span className="block text-[11px] font-semibold text-[#15966F]">
                        Up to ₹4,00,000
                      </span>
                    </div>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#073D32] text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:bg-[#15966F]">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>

                {/* Bottom Card */}
                <Link
                  href="/achievers"
                  className="group relative block aspect-[4/3.1] w-full overflow-hidden rounded-[24px] bg-[#E8F5EF] shadow-[0_16px_36px_-14px_rgba(7,61,50,0.2)] dark:bg-[#132E26]"
                >
                  <img
                    src="/images/hero/hero-graduation-hdr.jpg"
                    alt="MileStone Scholarship graduates"
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05231B]/55 via-transparent to-transparent" />

                  <div className="absolute inset-x-3.5 bottom-3.5 flex items-center justify-between gap-2 rounded-full border border-white/60 bg-white/85 py-1.5 pl-4 pr-1.5 shadow-[0_10px_24px_rgba(5,35,27,0.25)] backdrop-blur-md transition-all duration-300 group-hover:bg-white">
                    <div className="min-w-0 leading-tight">
                      <span className="block truncate font-heading text-[13px] font-bold text-[#073D32]">
                        15,000+ Scholars
                      </span>
                      <span className="block text-[11px] font-semibold text-[#15966F]">
                        96% Success Rate
                      </span>
                    </div>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#073D32] text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:bg-[#15966F]">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </div>

              {/* COLUMN 3: Top Editorial Vision & Mission Text + Bottom Tall Card */}
              <div className="flex flex-col justify-between gap-6 lg:gap-7">
                {/* Top-Right Highlighted Editorial Title Block */}
                <div className="pt-2 md:px-1 md:pt-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#15966F]/20 bg-[#EBF7F1] px-3 py-1 dark:border-[#34D399]/25 dark:bg-[#132E26]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#15966F] dark:bg-[#34D399]" />
                    <span className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#073D32] dark:text-[#6EE7B7]">
                      Our North Star
                    </span>
                  </div>

                  <h1 className="mt-4 font-heading text-3xl font-bold leading-[1.1] tracking-[-0.028em] text-[#0E241E] sm:text-4xl lg:text-[40px] dark:text-white">
                    Vision &amp;{" "}
                    <span className="block font-editorial italic font-normal text-[#15966F] dark:text-[#34D399]">
                      Mission
                    </span>
                  </h1>

                  <p className="mt-3.5 text-[14px] leading-[1.68] text-[#5C6B64] sm:text-[14.5px] dark:text-[#A0B3AC]">
                    Empowering deserving students beyond financial limits with merit scholarships, structured mentorship, and equitable education access.
                  </p>
                </div>

                {/* Bottom Tall Scholar Card */}
                <Link
                  href="/sign-up"
                  className="group relative block aspect-[3/3.9] w-full overflow-hidden rounded-[24px] bg-[#E8F5EF] shadow-[0_16px_36px_-14px_rgba(7,61,50,0.22)] dark:bg-[#132E26]"
                >
                  <img
                    src="/images/ecosystem/university.jpg"
                    alt="Apply for Milestone Scholarship"
                    className="h-full w-full object-cover object-[72%_20%] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05231B]/60 via-transparent to-transparent" />

                  <div className="absolute inset-x-3.5 bottom-3.5 flex items-center justify-between gap-2 rounded-full border border-white/60 bg-white/85 py-1.5 pl-4 pr-1.5 shadow-[0_10px_24px_rgba(5,35,27,0.25)] backdrop-blur-md transition-all duration-300 group-hover:bg-white">
                    <div className="min-w-0 leading-tight">
                      <span className="block truncate font-heading text-[13px] font-bold text-[#073D32]">
                        Apply Now
                      </span>
                      <span className="block text-[11px] font-semibold text-[#15966F]">
                        2025–26 Cycle Open
                      </span>
                    </div>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#073D32] text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:bg-[#15966F]">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
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

          <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-12">
            {journeySteps.map((step, idx) => (
              <ScrollReveal key={step.step} delay={idx * 0.06} className="relative h-full">
                <div className="group relative h-full pl-7 pt-8">
                  {/* Flush Horizontal Dotted Connector between columns on each row (Desktop) */}
                  {idx % 3 !== 2 && (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute left-full top-[calc(50%+16px)] z-0 hidden w-[76px] -translate-y-1/2 items-center lg:flex"
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
                    className="absolute left-0 top-0 z-0 flex h-[100px] w-[100px] items-start justify-start rounded-[24px] border border-white/20 bg-gradient-to-br from-[#06382E] via-[#0E5C48] to-[#15966F] pl-4 pt-3 shadow-[0_16px_32px_-8px_rgba(7,61,50,0.42),inset_0_1px_0_rgba(255,255,255,0.28)] transition-transform duration-300 group-hover:-translate-y-1"
                  >
                    <span className="font-heading text-[17px] font-bold leading-none tracking-wider text-white">
                      {step.step}
                    </span>
                  </div>

                  {/* Frosted Glass Step Card */}
                  <div className="relative z-10 flex h-full flex-col justify-between overflow-hidden rounded-[22px] border-[1.5px] border-white/95 border-b-[3px] border-b-[#C7DED4] bg-gradient-to-br from-white/80 via-white/70 to-[#EFF9F4]/85 p-6 ring-1 ring-[#073D32]/[0.06] shadow-[0_18px_44px_-14px_rgba(7,61,50,0.14),inset_0_1.5px_0_rgba(255,255,255,1)] backdrop-blur-2xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#15966F]/40 dark:border-[#1E3B32] dark:border-b-[#122922] dark:from-[#0F241E]/85 dark:to-[#112A22]/85">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -left-8 -top-8 h-28 w-28 rounded-full bg-[#15966F]/18 blur-2xl"
                    />
                    <div className="relative z-10">
                      <div className="flex justify-end pl-14">
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
