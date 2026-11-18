"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Award, User } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { successStories } from "@/constants/home-data";
import { useLocale } from "@/components/providers/locale-provider";

const FEATURED_STORY_IDS = ["3", "2", "4", "1", "7", "8"];

export function SuccessStories() {
  const { t } = useLocale();
  const [activeIndex, setActiveIndex] = useState(0);

  const stories = FEATURED_STORY_IDS.map((id) =>
    successStories.find((s) => s.id === id)
  ).filter((s): s is NonNullable<typeof s> => Boolean(s));

  const activeStory = stories[activeIndex] ?? stories[0];

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
      className="relative overflow-hidden border-t border-[#DCE8E3] bg-[#FAFCFB] py-20 md:py-24 dark:border-[#162E26] dark:bg-[#07120F]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Clean Editorial Header */}
        <div className="mb-10 flex flex-col gap-6 border-b border-[#E3ECE8] pb-8 lg:flex-row lg:items-end lg:justify-between dark:border-[#162E26]">
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

          <ScrollReveal delay={0.08} className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4E3DC] bg-white text-[#142C25] shadow-xs transition-all hover:border-[#15966F] hover:text-[#15966F] dark:border-[#1E3B32] dark:bg-[#0D1E19] dark:text-white dark:hover:border-[#34D399] dark:hover:text-[#34D399]"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4E3DC] bg-white text-[#142C25] shadow-xs transition-all hover:border-[#15966F] hover:text-[#15966F] dark:border-[#1E3B32] dark:bg-[#0D1E19] dark:text-white dark:hover:border-[#34D399] dark:hover:text-[#34D399]"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

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

        {/* FEATURED SPEECH-BUBBLE TESTIMONIAL SHOWCASE (Matches reference design) */}
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#06362C] via-[#0B5343] to-[#127D60] p-6 sm:p-10 lg:p-12 shadow-[0_24px_54px_-16px_rgba(7,61,50,0.42)]">
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
              className="relative z-10 mb-3 select-none font-serif text-6xl leading-none text-white/95 sm:mb-4 sm:text-7xl"
            >
              &ldquo;
            </div>

            {/* White Speech-Bubble Card */}
            <div className="relative z-10 rounded-[24px] bg-white p-6 shadow-[0_20px_48px_-12px_rgba(4,35,28,0.35)] sm:p-9 lg:p-10 dark:bg-[#0D1E19] dark:border dark:border-[#1E3B32]">
              {/* Speech-bubble pointer tail at bottom-right */}
              <div
                aria-hidden="true"
                className="absolute -bottom-3.5 right-14 h-7 w-7 rotate-45 rounded-br-md bg-white dark:bg-[#0D1E19] dark:border-r dark:border-b dark:border-[#1E3B32]"
              />

              <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 lg:gap-10">
                {/* Left Overlapping Rounded Portrait Frame */}
                <div className="md:col-span-4 lg:col-span-4">
                  <div className="relative mx-auto aspect-[3/4] w-full max-w-[240px] overflow-hidden rounded-[22px] border-[4px] border-white bg-[#E8F5EF] shadow-[0_18px_36px_-10px_rgba(7,61,50,0.3)] md:-mt-16 dark:border-[#132E26] dark:bg-[#132E26]">
                    {activeStory.image ? (
                      <Image
                        src={activeStory.image}
                        alt={activeStory.name}
                        fill
                        sizes="(max-width: 768px) 240px, 280px"
                        className="object-cover object-top"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <User className="h-12 w-12 text-[#15966F]" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Quote + Scholar Attribution */}
                <div className="flex flex-col justify-between md:col-span-8 lg:col-span-8">
                  <blockquote className="text-[15.5px] leading-[1.75] text-[#1C332B] sm:text-[17px] dark:text-[#E2EFEA]">
                    {activeStory.fullStory || activeStory.quote.replace(/\.\.\.\s*Read More$/, "")}
                  </blockquote>

                  {/* Bottom Attribution Row */}
                  <div className="mt-7 flex flex-col gap-4 border-t border-[#E6F0EC] pt-5 sm:flex-row sm:items-end sm:justify-between dark:border-[#18332B]">
                    <div className="inline-flex items-center gap-2 self-start rounded-full border border-[#15966F]/20 bg-[#E8F5EF] px-3.5 py-1.5 text-[12px] font-bold text-[#073D32] dark:border-[#34D399]/25 dark:bg-[#132E26] dark:text-[#6EE7B7]">
                      <Award className="h-3.5 w-3.5 text-[#15966F] dark:text-[#34D399]" />
                      <span>Scholarship: {formatAmount(activeStory.scholarship)}</span>
                    </div>

                    <div className="sm:text-right">
                      <div className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#15966F] dark:text-[#34D399]">
                        <span className="hidden h-[1.5px] w-8 bg-[#15966F]/45 sm:inline-block dark:bg-[#34D399]/45" />
                        <span>{activeStory.currentEducation || activeStory.course}</span>
                      </div>
                      <div className="mt-0.5 font-heading text-[18px] font-bold uppercase tracking-tight text-[#073D32] dark:text-white">
                        {activeStory.name}
                      </div>
                      <div className="text-[12.5px] font-medium text-[#687A73] dark:text-[#A0B3AC]">
                        {activeStory.college}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom-center closing emerald quote mark */}
              <div
                aria-hidden="true"
                className="mt-3 text-center font-serif text-4xl leading-none text-[#15966F] dark:text-[#34D399]"
              >
                &rdquo;
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 6-SCHOLAR SELECTOR STRIP */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {stories.map((story, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={story.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`group flex items-center gap-3 rounded-2xl border p-3 text-left transition-all duration-200 ${
                  isActive
                    ? "border-[#15966F] bg-[#E8F5EF] shadow-[0_8px_20px_-8px_rgba(21,150,111,0.28)] dark:border-[#34D399] dark:bg-[#132E26]"
                    : "border-[#DCE8E3] bg-white hover:border-[#15966F]/45 hover:bg-[#F4FAF7] dark:border-[#1E3B32] dark:bg-[#0D1E19] dark:hover:border-[#34D399]/40"
                }`}
              >
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
