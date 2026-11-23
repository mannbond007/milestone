"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Compass,
  Globe,
  GraduationCap,
  Laptop,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface JourneyMilestone {
  year: string;
  title: string;
  stat: string;
  statLabel: string;
  description: string;
  highlights: string[];
  icon: LucideIcon;
}

const journeyMilestones: JourneyMilestone[] = [
  {
    year: "2018",
    title: "Foundation Year",
    stat: "Day One",
    statLabel: "Program Launch",
    description:
      "Milestone Scholarship Program was established with a clear purpose: to remove financial barriers and bring structured academic guidance to deserving students.",
    highlights: ["Merit-first scholarship framework", "Dedicated student counselling desk"],
    icon: Compass,
  },
  {
    year: "2019",
    title: "First Cohort",
    stat: "500+",
    statLabel: "Inaugural Scholars",
    description:
      "500+ students received scholarships in our inaugural year across 5 states, validating our combined model of financial grants and personal mentorship.",
    highlights: ["Expanded across 5 Indian states", "Direct tuition fee support"],
    icon: GraduationCap,
  },
  {
    year: "2020",
    title: "Digital Expansion",
    stat: "100%",
    statLabel: "Online Access",
    description:
      "Launched online scholarship assessment tests and a fully digital application portal so students from remote towns could apply from home.",
    highlights: ["Remote scholarship assessments", "Paperless document verification"],
    icon: Laptop,
  },
  {
    year: "2021",
    title: "National Reach",
    stat: "2,000+",
    statLabel: "Active Scholars",
    description:
      "Expanded operations to 15+ states with 2,000+ scholars pursuing degrees in medicine, engineering, law, management, and pure sciences.",
    highlights: ["15+ state support hubs", "Multi-discipline scholarship tracks"],
    icon: Globe,
  },
  {
    year: "2023",
    title: "Mentorship Launch",
    stat: "100+",
    statLabel: "Industry Mentors",
    description:
      "Introduced 1-on-1 mentorship programs connecting scholars with 100+ doctors, engineers, legal professionals, and alumni from AIIMS, IITs, and IIMs.",
    highlights: ["1-on-1 career roadmap sessions", "Interview and exam prep workshops"],
    icon: Users,
  },
  {
    year: "2025",
    title: "15,000+ Scholars",
    stat: "15,000+",
    statLabel: "Lives Impacted",
    description:
      "Crossed the milestone of supporting 15,000+ students nationwide alongside 1,750+ partner institutions and a 96% scholar admission success rate.",
    highlights: ["1,750+ partner institutions", "96% verified admission rate"],
    icon: Trophy,
  },
];

export function JourneyTimeline() {
  const [activeIndex, setActiveIndex] = useState(journeyMilestones.length - 1);
  const progressPercent = (activeIndex / (journeyMilestones.length - 1)) * 100;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + journeyMilestones.length) % journeyMilestones.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % journeyMilestones.length);
  };

  return (
    <section className="relative overflow-hidden border-t border-[#E3ECE8] bg-white py-20 md:py-28 dark:border-[#162E26] dark:bg-[#0B1411]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-[#15966F]/[0.06] blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#15966F]/20 bg-[#EBF7F1] px-3.5 py-1.5 dark:border-[#34D399]/25 dark:bg-[#112B23]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#15966F] ring-2 ring-[#15966F]/25 dark:bg-[#34D399] dark:ring-[#34D399]/25" />
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#073D32] dark:text-[#6EE7B7]">
                Our Journey
              </span>
            </div>

            <h2 className="mt-4 font-heading text-3xl font-bold leading-[1.12] tracking-[-0.028em] text-[#0E241E] sm:text-4xl lg:text-[44px] dark:text-white">
              Milestones{" "}
              <span className="font-editorial italic font-normal text-[#15966F] dark:text-[#34D399]">
                Along The Way
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <span className="mr-1 text-[12px] font-bold tracking-wider text-[#687A73] dark:text-[#8DA39B]">
              0{activeIndex + 1} / 0{journeyMilestones.length}
            </span>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous milestone"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4E3DC] bg-white text-[#073D32] shadow-xs transition-all hover:border-[#15966F] hover:bg-[#EBF7F1] hover:text-[#15966F] dark:border-[#1E3B32] dark:bg-[#0D1E19] dark:text-white dark:hover:border-[#34D399]"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next milestone"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#073D32] text-white shadow-[0_8px_18px_-4px_rgba(7,61,50,0.4)] transition-all hover:bg-[#15966F] dark:bg-[#15966F] dark:hover:bg-[#1EA87E]"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </ScrollReveal>

        {/* Interactive Horizontal Year Scrubber Track */}
        <ScrollReveal delay={0.08}>
          <div className="relative mb-8">
            {/* Desktop Track Line */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-8 right-8 top-6 hidden h-[3px] rounded-full bg-[#E3ECE8] md:block dark:bg-[#18332B]"
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#073D32] via-[#15966F] to-[#34D399] shadow-[0_0_12px_rgba(21,150,111,0.45)] transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Year Nodes */}
            <div className="flex gap-2.5 overflow-x-auto pb-2 snap-x md:grid md:grid-cols-6 md:gap-4 md:overflow-visible md:pb-0">
              {journeyMilestones.map((item, idx) => {
                const isActive = idx === activeIndex;
                const isPast = idx < activeIndex;
                const Icon = item.icon;

                return (
                  <button
                    key={item.year}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className="group relative flex shrink-0 snap-start flex-col items-center text-center focus:outline-none md:w-full"
                  >
                    <span
                      className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border-2 transition-all duration-300 ${
                        isActive
                          ? "scale-110 border-[#15966F] bg-gradient-to-b from-[#0C5A48] to-[#073D32] text-white shadow-[0_12px_24px_-6px_rgba(21,150,111,0.5)] dark:border-[#34D399] dark:from-[#15966F] dark:to-[#0B5243]"
                          : isPast
                          ? "border-[#15966F]/40 bg-[#E8F5EF] text-[#15966F] group-hover:border-[#15966F] dark:border-[#34D399]/35 dark:bg-[#132E26] dark:text-[#6EE7B7]"
                          : "border-[#DCE8E3] bg-white text-[#687A73] group-hover:border-[#15966F]/50 group-hover:text-[#073D32] dark:border-[#1E3B32] dark:bg-[#0D1E19] dark:text-[#8DA39B]"
                      }`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </span>

                    <span
                      className={`mt-3 font-heading text-[14px] font-bold tracking-tight transition-colors ${
                        isActive
                          ? "text-[#073D32] dark:text-[#6EE7B7]"
                          : "text-[#687A73] group-hover:text-[#0E241E] dark:text-[#8DA39B] dark:group-hover:text-white"
                      }`}
                    >
                      {item.year}
                    </span>

                    <span className="mt-0.5 hidden text-[11px] font-medium text-[#687A73] md:block dark:text-[#8DA39B]">
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Zero-Jerk Grid-Stacked Milestone Spotlight Card */}
        <ScrollReveal delay={0.12}>
          <div className="relative overflow-hidden rounded-[28px] border border-[#DCE8E3] border-b-[3px] border-b-[#C5DDD3] bg-gradient-to-br from-[#FAFCFB] via-white to-[#EFF8F3] p-6 shadow-[0_20px_50px_-16px_rgba(7,61,50,0.12),inset_0_1px_0_rgba(255,255,255,1)] sm:p-10 lg:p-12 dark:border-[#1E3B32] dark:border-b-[#122922] dark:from-[#0E211B] dark:via-[#0D1E19] dark:to-[#112A22]">
            <div className="grid">
              {journeyMilestones.map((item, idx) => {
                const isCurrent = idx === activeIndex;
                const Icon = item.icon;
                return (
                  <div
                    key={item.year}
                    aria-hidden={!isCurrent}
                    className={`col-start-1 row-start-1 grid grid-cols-1 items-center gap-8 transition-all duration-500 ease-out lg:grid-cols-12 lg:gap-12 ${
                      isCurrent
                        ? "z-10 translate-y-0 opacity-100"
                        : "pointer-events-none z-0 translate-y-2 select-none opacity-0"
                    }`}
                  >
                    {/* Left Visual Year & Stat Plaque */}
                    <div className="lg:col-span-5">
                      <div className="flex flex-col justify-between rounded-[22px] border border-[#DCE8E3] bg-white p-6 shadow-[0_12px_28px_-14px_rgba(7,61,50,0.12)] sm:p-8 dark:border-[#1E3B32] dark:bg-[#0B1915]">
                        <div className="flex items-center justify-between">
                          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#15966F]/20 bg-gradient-to-b from-[#FFFFFF] via-[#ECF8F2] to-[#D2EFE1] text-[#0B7453] shadow-[0_8px_16px_-6px_rgba(7,61,50,0.2),inset_0_1.5px_0_rgba(255,255,255,1)] dark:border-[#34D399]/25 dark:from-[#1B4538] dark:to-[#0F2A22] dark:text-[#6EE7B7]">
                            <Icon className="h-6 w-6" strokeWidth={2} />
                          </span>
                          <span className="rounded-full bg-[#E8F5EF] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#073D32] dark:bg-[#132E26] dark:text-[#6EE7B7]">
                            Chapter 0{idx + 1}
                          </span>
                        </div>

                        <div className="mt-6">
                          <div className="font-editorial italic text-6xl font-normal leading-none text-[#15966F] sm:text-7xl dark:text-[#34D399]">
                            {item.year}
                          </div>
                          <div className="mt-4 flex items-baseline gap-2.5 border-t border-[#E6F0EC] pt-4 dark:border-[#18332B]">
                            <span className="font-heading text-2xl font-bold tracking-tight text-[#073D32] dark:text-white">
                              {item.stat}
                            </span>
                            <span className="text-[12.5px] font-medium text-[#687A73] dark:text-[#A0B3AC]">
                              {item.statLabel}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Milestone Story & Highlights */}
                    <div className="lg:col-span-7">
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#15966F] dark:text-[#34D399]">
                        Milestone {item.year}
                      </span>

                      <h3 className="mt-2 font-heading text-2xl font-bold tracking-tight text-[#0E241E] sm:text-3xl lg:text-[34px] dark:text-white">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-[15.5px] leading-[1.75] text-[#5C6B64] sm:text-[17px] dark:text-[#A0B3AC]">
                        {item.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-3">
                        {item.highlights.map((hl) => (
                          <span
                            key={hl}
                            className="inline-flex items-center gap-2 rounded-full border border-[#DCE8E3] bg-white px-4 py-2 text-[13px] font-semibold text-[#073D32] shadow-2xs dark:border-[#1E3B32] dark:bg-[#0B1915] dark:text-[#E2EFEA]"
                          >
                            <CheckCircle2 className="h-4 w-4 text-[#15966F] dark:text-[#34D399]" />
                            <span>{hl}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
