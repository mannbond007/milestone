"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, User } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { successStories } from "@/constants/home-data";
import { useLocale } from "@/components/providers/locale-provider";

export function SuccessStories() {
  const { t } = useLocale();

  const leadStory = successStories.find((s) => s.id === "3") || successStories[0];
  const secondaryStories = successStories.filter((s) =>
    ["2", "4"].includes(s.id)
  );

  const formatAmount = (val: string) => {
    if (val.startsWith("₹")) return val;
    return `₹${val.replace("/-", "")}`;
  };

  return (
    <section
      id="success-stories-preview"
      className="py-20 md:py-28 bg-[#F4F7F5] dark:bg-[#0B1411] border-t border-[#D5E2DC] dark:border-[#21362E]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <ScrollReveal className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#172923] border border-[#D5E2DC] dark:border-[#258B68]/25 text-[11px] font-bold uppercase tracking-[0.14em] text-[#103D32] dark:text-[#34A880] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#258B68]" />
              <span>STUDENT SUCCESS STORIES</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#172923] dark:text-[#F2F7F5] leading-[1.12]">
              Real Students. Real Opportunities.{" "}
              <span className="font-editorial italic font-normal text-[#258B68] dark:text-[#34A880]">
                Real Success.
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <Link
              href="/achievers"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#103D32] dark:text-[#34A880] hover:text-[#258B68] transition-colors group"
            >
              <span>{t("homeScholars.moreStories", "View All Scholar Stories")}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>

        {/* 12-COLUMN EDITORIAL BENTO GRID WITH CONCENTRIC CURVES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          {/* LEFT BENTO TILE: Lead Scholar Story (7 Cols) */}
          {leadStory && (
            <ScrollReveal className="lg:col-span-7">
              <article className="group relative overflow-hidden h-full rounded-[28px] bg-gradient-to-br from-[#103D32] via-[#0D3329] to-[#071E18] text-white p-8 sm:p-10 lg:p-12 flex flex-col justify-between shadow-[0_14px_34px_-10px_rgba(16,61,50,0.28)]">
                {/* Signature Double Concentric Curve Motif */}
                <div
                  className="absolute -right-14 -top-14 w-56 h-56 rounded-full border border-white/[0.11] bg-white/[0.02] pointer-events-none transition-transform duration-500 group-hover:scale-110"
                  aria-hidden="true"
                />
                <div
                  className="absolute -right-4 -top-4 w-32 h-32 rounded-full border border-white/[0.08] pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-3 mb-8">
                    <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-white/12 border border-white/15 text-white">
                      Scholarship: {formatAmount(leadStory.scholarship)}
                    </span>
                    <span className="text-xs text-[#CBE6DA]">
                      {leadStory.currentEducation || leadStory.course}
                    </span>
                  </div>

                  <blockquote className="text-base sm:text-lg lg:text-xl text-white/95 leading-[1.7] font-normal">
                    &ldquo;{leadStory.fullStory || leadStory.quote.replace(/\.\.\.\s*Read More$/, "")}&rdquo;
                  </blockquote>
                </div>

                <div className="relative z-10 mt-10 pt-6 border-t border-white/15 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-13 h-13 rounded-2xl overflow-hidden bg-white/10 relative shrink-0 border border-white/20">
                      {leadStory.image ? (
                        <Image
                          src={leadStory.image}
                          alt={leadStory.name}
                          fill
                          sizes="52px"
                          className="object-cover"
                        />
                      ) : (
                        <User className="w-6 h-6 text-white m-auto" />
                      )}
                    </div>
                    <div>
                      <div className="font-heading text-lg font-bold text-white">
                        {leadStory.name}
                      </div>
                      <div className="text-xs text-[#CBE6DA] mt-0.5">
                        {leadStory.college}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          )}

          {/* RIGHT STACKED BENTO COLUMN: 2 Supporting Scholar Tiles (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
            {secondaryStories.map((story, idx) => {
              const isMint = idx === 1;
              return (
                <ScrollReveal key={story.id} delay={(idx + 1) * 0.06} className="flex-1">
                  <article
                    className={`group relative overflow-hidden h-full rounded-[28px] p-7 sm:p-8 flex flex-col justify-between border shadow-premium ${
                      isMint
                        ? "bg-gradient-to-br from-[#E8F3EE] via-[#E1EFE8] to-[#D6E9E0] dark:from-[#172923] dark:to-[#0F1C18] border-[#BFDCD0] dark:border-[#258B68]/30"
                        : "bg-gradient-to-br from-white via-[#F9FBFA] to-[#F1F7F4] dark:from-[#15241F] dark:via-[#111E1A] dark:to-[#0D1814] border-[#D5E2DC] dark:border-[#21362E]"
                    }`}
                  >
                    {/* Signature Double Concentric Curve Motif */}
                    <div
                      className={`absolute -right-12 -top-12 w-44 h-44 rounded-full border pointer-events-none transition-transform duration-500 group-hover:scale-110 ${
                        isMint
                          ? "border-[#103D32]/[0.11] dark:border-white/[0.09] bg-white/30 dark:bg-white/[0.02]"
                          : "border-[#258B68]/[0.13] bg-[#E8F3EE]/40 dark:bg-[#258B68]/[0.05]"
                      }`}
                      aria-hidden="true"
                    />
                    <div
                      className={`absolute -right-4 -top-4 w-26 h-26 rounded-full border pointer-events-none ${
                        isMint
                          ? "border-[#103D32]/[0.08] dark:border-white/[0.06]"
                          : "border-[#258B68]/[0.09]"
                      }`}
                      aria-hidden="true"
                    />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between gap-2 mb-5">
                        <span
                          className={`text-xs font-bold px-3 py-1 rounded-full ${
                            isMint
                              ? "bg-white/90 dark:bg-[#111E1A] text-[#103D32] dark:text-[#34A880] border border-[#103D32]/10"
                              : "bg-[#E8F3EE] dark:bg-[#172923] text-[#103D32] dark:text-[#34A880] border border-[#258B68]/15"
                          }`}
                        >
                          Scholarship: {formatAmount(story.scholarship)}
                        </span>
                      </div>

                      <blockquote className="text-sm text-[#172923] dark:text-[#F2F7F5] leading-[1.7] line-clamp-4">
                        &ldquo;{story.fullStory || story.quote.replace(/\.\.\.\s*Read More$/, "")}&rdquo;
                      </blockquote>
                    </div>

                    <div className="relative z-10 mt-6 pt-5 border-t border-[#DCE6E1] dark:border-[#21362E] flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl overflow-hidden bg-white relative shrink-0 border border-[#DCE6E1] dark:border-[#21362E]">
                        {story.image ? (
                          <Image
                            src={story.image}
                            alt={story.name}
                            fill
                            sizes="44px"
                            className="object-cover"
                          />
                        ) : (
                          <User className="w-5 h-5 text-[#68756F] m-auto" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <div className="font-heading text-base font-bold text-[#172923] dark:text-[#F2F7F5] truncate">
                          {story.name}
                        </div>
                        <div className="text-xs text-[#68756F] dark:text-[#9BB0A8] truncate">
                          {story.currentEducation || story.course} • {story.college}
                        </div>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
