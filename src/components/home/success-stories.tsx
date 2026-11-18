"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Award, BadgeCheck, User } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { successStories } from "@/constants/home-data";
import { useLocale } from "@/components/providers/locale-provider";

const FEATURED_STORY_IDS = ["3", "2", "4", "1", "7", "8"];

export function SuccessStories() {
  const { t } = useLocale();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const stories = FEATURED_STORY_IDS.map((id) =>
    successStories.find((s) => s.id === id)
  ).filter((s): s is NonNullable<typeof s> => Boolean(s));

  const activeStory = stories[activeIndex] ?? stories[0];

  useEffect(() => {
    if (isPaused || stories.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stories.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused, stories.length]);

  const formatAmount = (val: string) => {
    if (val.startsWith("₹")) return val;
    return `₹${val.replace("/-", "")}`;
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % stories.length);
  };

  if (!activeStory) return null;

  return (
    <section
      id="success-stories-preview"
      className="relative overflow-hidden border-t border-[#DCE8E3] bg-[#FAFCFB] py-12 sm:py-16 md:py-24 dark:border-[#162E26] dark:bg-[#07120F]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Clean Editorial Header */}
        <div className="mb-6 flex flex-col gap-4 border-b border-[#E3ECE8] pb-6 sm:mb-10 sm:gap-6 sm:pb-8 lg:flex-row lg:items-end lg:justify-between dark:border-[#162E26]">
          <ScrollReveal className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-lg border border-[#15966F]/20 bg-[#EBF7F1] px-3 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] dark:border-[#34D399]/25 dark:bg-[#112B23] dark:shadow-none">
              <span className="h-1.5 w-1.5 rounded-full bg-[#15966F] ring-2 ring-[#15966F]/25 dark:bg-[#34D399] dark:ring-[#34D399]/25" />
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#073D32] dark:text-[#6EE7B7]">
                STUDENT SUCCESS STORIES
              </span>
              <span className="h-3 w-[1px] bg-[#15966F]/25 dark:bg-[#34D399]/25" />
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#15966F] dark:text-[#34D399]">
                {stories.length} Verified Scholars
              </span>
            </div>

            <h2 className="mt-4 font-heading text-3xl font-bold leading-[1.12] tracking-[-0.025em] text-[#142C25] sm:text-4xl lg:text-[42px] dark:text-white">
              Real Students. Real Opportunities.{" "}
              <span className="relative inline-block font-editorial italic font-normal text-[#15966F] dark:text-[#34D399]">
                Real Success.
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
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="shrink-0">
            <Link
              href="/achievers"
              className="group/all inline-flex items-center gap-3 rounded-full border border-[#D4E3DC] bg-white px-5 py-2.5 text-[13.5px] font-semibold text-[#142C25] shadow-[0_2px_10px_rgba(7,61,50,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#15966F]/45 hover:text-[#15966F] dark:border-[#1E3B32] dark:bg-[#0D1E19] dark:text-white dark:hover:border-[#34D399]/50 dark:hover:text-[#34D399]"
            >
              <span>{t("homeScholars.moreStories", "View All Scholar Stories")}</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E8F5EF] text-[#15966F] transition-transform duration-300 group-hover/all:translate-x-0.5 dark:bg-[#143329] dark:text-[#34D399]">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </ScrollReveal>
        </div>

        {/* FEATURED SPEECH-BUBBLE TESTIMONIAL SHOWCASE (Zero-jerk, smooth crossfade + auto-advance) */}
        <ScrollReveal>
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") handlePrev();
              if (e.key === "ArrowRight") handleNext();
            }}
            tabIndex={0}
            aria-roledescription="carousel"
            aria-label="Scholar Testimonials"
            className="relative overflow-hidden rounded-[22px] bg-gradient-to-br from-[#06362C] via-[#0B5343] to-[#127D60] p-4 shadow-[0_24px_54px_-16px_rgba(7,61,50,0.42)] outline-none focus-visible:ring-2 focus-visible:ring-[#6EE7B7] sm:rounded-[30px] sm:p-10 lg:p-12"
          >
            {/* Subtle geometric backdrop facet */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#15966F]/25 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-0 h-44 w-full bg-gradient-to-t from-[#04231C]/35 to-transparent"
            />

            {/* Top-left large white opening quote mark */}
            <div
              aria-hidden="true"
              className="relative z-10 mb-1.5 select-none font-serif text-4xl leading-none text-white/95 sm:mb-4 sm:text-7xl"
            >
              &ldquo;
            </div>

            {/* White Speech-Bubble Card — Grid-stacked slides guarantee zero height jump/jerk */}
            <div className="relative z-10 flex flex-col justify-between rounded-[18px] bg-white p-4 shadow-[0_20px_48px_-12px_rgba(4,35,28,0.35)] sm:rounded-[24px] sm:p-9 lg:p-10 dark:bg-[#0D1E19] dark:border dark:border-[#1E3B32]">
              {/* Speech-bubble pointer tail at bottom-right */}
              <div
                aria-hidden="true"
                className="absolute -bottom-3 right-10 h-6 w-6 rotate-45 rounded-br-md bg-white sm:-bottom-3.5 sm:right-14 sm:h-7 sm:w-7 dark:bg-[#0D1E19] dark:border-r dark:border-b dark:border-[#1E3B32]"
              />

              <div className="grid flex-1 grid-cols-1 items-start gap-4 md:grid-cols-12 md:gap-8 lg:gap-10">
                {/* Left Overlapping Rounded Portrait Frame — Compact on mobile, tall overlapping on md+ */}
                <div className="md:col-span-4 lg:col-span-4">
                  <div className="relative mx-auto h-[136px] w-[112px] overflow-hidden rounded-[16px] border-[3px] border-white bg-[#E8F5EF] shadow-[0_12px_26px_-8px_rgba(7,61,50,0.28)] sm:h-[180px] sm:w-[148px] md:-mt-16 md:h-[310px] md:w-[235px] md:rounded-[22px] md:border-[4px] md:shadow-[0_18px_36px_-10px_rgba(7,61,50,0.3)] dark:border-[#132E26] dark:bg-[#132E26]">
                    {stories.map((story, idx) => {
                      const isCurrent = idx === activeIndex;
                      return (
                        <div
                          key={story.id}
                          aria-hidden={!isCurrent}
                          className={`absolute inset-0 transition-all duration-500 ease-out ${
                            isCurrent
                              ? "opacity-100 scale-100 z-10"
                              : "opacity-0 scale-[0.97] z-0 pointer-events-none"
                          }`}
                        >
                          {story.image ? (
                            <Image
                              src={story.image}
                              alt={story.name}
                              fill
                              sizes="240px"
                              className="object-cover object-top"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center">
                              <User className="h-12 w-12 text-[#15966F]" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Quote + Scholar Attribution — All 6 stacked in same grid cell (0px height jump) */}
                <div className="grid md:col-span-8 lg:col-span-8">
                  {stories.map((story, idx) => {
                    const isCurrent = idx === activeIndex;
                    return (
                      <div
                        key={story.id}
                        aria-hidden={!isCurrent}
                        className={`col-start-1 row-start-1 flex h-full flex-col justify-between transition-all duration-500 ease-out ${
                          isCurrent
                            ? "opacity-100 translate-y-0 z-10"
                            : "opacity-0 translate-y-1.5 z-0 pointer-events-none select-none"
                        }`}
                      >
                        <blockquote className="text-[14px] leading-[1.65] text-[#1C332B] sm:text-[17px] sm:leading-[1.75] dark:text-[#E2EFEA]">
                          {story.fullStory || story.quote.replace(/\.\.\.\s*Read More$/, "")}
                        </blockquote>

                        {/* Bottom Attribution Row */}
                        <div className="mt-4 flex flex-col gap-3 border-t border-[#E6F0EC] pt-3.5 sm:mt-7 sm:flex-row sm:items-end sm:justify-between sm:gap-4 sm:pt-5 dark:border-[#18332B]">
                          <div className="flex flex-wrap items-center gap-1.5 self-start sm:gap-2">
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#15966F]/20 bg-[#E8F5EF] px-3 py-1 text-[11.5px] font-bold text-[#073D32] sm:gap-2 sm:px-3.5 sm:py-1.5 sm:text-[12px] dark:border-[#34D399]/25 dark:bg-[#132E26] dark:text-[#6EE7B7]">
                              <Award className="h-3.5 w-3.5 text-[#15966F] dark:text-[#34D399]" />
                              <span>Scholarship: {formatAmount(story.scholarship)}</span>
                            </span>
                            <span className="inline-flex items-center gap-1 rounded-full border border-[#DCE8E3] bg-[#F7FBF9] px-2.5 py-1 text-[10.5px] font-semibold text-[#687A73] sm:py-1.5 sm:text-[11px] dark:border-[#1E3B32] dark:bg-[#11261F] dark:text-[#A0B3AC]">
                              <BadgeCheck className="h-3.5 w-3.5 text-[#15966F] dark:text-[#34D399]" />
                              <span>Verified {story.year || "2024"}</span>
                            </span>
                          </div>

                          <div className="sm:text-right">
                            <div className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#15966F] sm:gap-2.5 sm:text-[11px] dark:text-[#34D399]">
                              <span className="hidden h-[1.5px] w-8 bg-[#15966F]/45 sm:inline-block dark:bg-[#34D399]/45" />
                              <span>{story.currentEducation || story.course}</span>
                            </div>
                            <div className="mt-0.5 font-heading text-[16px] font-bold uppercase tracking-tight text-[#073D32] sm:text-[18px] dark:text-white">
                              {story.name}
                            </div>
                            <div className="text-[12px] font-medium text-[#687A73] sm:text-[12.5px] dark:text-[#A0B3AC]">
                              {story.college}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom-center closing emerald quote mark */}
              <div
                aria-hidden="true"
                className="mt-1.5 text-center font-serif text-2xl leading-none text-[#15966F] sm:mt-3 sm:text-4xl dark:text-[#34D399]"
              >
                &rdquo;
              </div>
            </div>

            {/* Highlighted Testimonial Scroll Controls inside bottom of showcase */}
            <div className="relative z-10 mt-4 flex items-center justify-between gap-3 sm:mt-7 sm:gap-4">
              <div className="flex items-center gap-2">
                <span className="mr-2 rounded-full bg-white/15 px-3 py-1 text-[11.5px] font-bold tracking-wider text-white backdrop-blur-sm">
                  0{activeIndex + 1} / 0{stories.length}
                </span>
                {stories.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`View testimonial from ${s.name}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeIndex
                        ? "w-7 bg-[#6EE7B7]"
                        : "w-2 bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="inline-flex h-10 items-center gap-1.5 rounded-full border border-white/30 bg-white/15 px-4 text-[12.5px] font-semibold text-white shadow-[0_6px_16px_rgba(4,35,28,0.28)] backdrop-blur-md transition-all duration-200 hover:-translate-x-0.5 hover:bg-white hover:text-[#073D32]"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">Prev</span>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="inline-flex h-10 items-center gap-1.5 rounded-full bg-white px-4 text-[12.5px] font-bold text-[#073D32] shadow-[0_8px_22px_rgba(4,35,28,0.38)] transition-all duration-200 hover:translate-x-0.5 hover:bg-[#A7F3D0]"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 6-SCHOLAR SELECTOR STRIP — Horizontal snap strip on mobile, 6-col grid on desktop */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="mt-4 flex gap-2.5 overflow-x-auto pb-1 snap-x snap-mandatory sm:mt-6 lg:grid lg:grid-cols-6 lg:gap-3 lg:overflow-visible lg:pb-0"
        >
          {stories.map((story, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={story.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`group relative flex min-w-[172px] shrink-0 snap-start items-center gap-2.5 overflow-hidden rounded-2xl border p-2.5 text-left transition-all duration-300 lg:min-w-0 lg:gap-3 lg:p-3 ${
                  isActive
                    ? "-translate-y-0.5 border-[#15966F] bg-[#E8F5EF] shadow-[0_10px_24px_-8px_rgba(21,150,111,0.3)] dark:border-[#34D399] dark:bg-[#132E26]"
                    : "border-[#DCE8E3] bg-white hover:-translate-y-0.5 hover:border-[#15966F]/45 hover:bg-[#F4FAF7] hover:shadow-sm dark:border-[#1E3B32] dark:bg-[#0D1E19] dark:hover:border-[#34D399]/40"
                }`}
              >
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-[#073D32] via-[#15966F] to-[#34D399]"
                  />
                )}
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-white bg-[#E8F5EF] shadow-xs dark:border-[#1E3B32]">
                  {story.image ? (
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      sizes="40px"
                      className="object-cover object-top"
                    />
                  ) : (
                    <User className="m-auto h-5 w-5 text-[#15966F]" />
                  )}
                </div>
                <div className="min-w-0">
                  <div
                    className={`truncate font-heading text-[13px] font-bold ${
                      isActive
                        ? "text-[#073D32] dark:text-white"
                        : "text-[#142C25] dark:text-[#E2EFEA]"
                    }`}
                  >
                    {story.name}
                  </div>
                  <div className="truncate text-[11px] font-medium text-[#687A73] dark:text-[#8DA39B]">
                    {story.course} • {formatAmount(story.scholarship)}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
