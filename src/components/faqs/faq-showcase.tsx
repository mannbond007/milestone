"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, GraduationCap } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  name: string;
  questions: FaqItem[];
}

interface FaqShowcaseProps {
  categories: FaqCategory[];
  showCategoryTabs?: boolean;
  showViewAllLink?: boolean;
}

export function FaqShowcase({
  categories,
  showCategoryTabs = true,
  showViewAllLink = false,
}: FaqShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<string>(
    categories[0]?.name ?? "General"
  );
  const [openKey, setOpenKey] = useState<string>("0");

  const currentQuestions =
    categories.find((c) => c.name === activeCategory)?.questions ??
    categories[0]?.questions ??
    [];

  const handleCategoryChange = (name: string) => {
    setActiveCategory(name);
    setOpenKey("0");
  };

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-[#14554E] bg-gradient-to-br from-[#053633] via-[#074440] to-[#0B5A53] p-6 text-white shadow-[0_28px_64px_-18px_rgba(4,40,37,0.48)] sm:p-10 lg:p-14">
      {/* Subtle ambient teal glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#19B585]/18 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#032321]/70 blur-3xl"
      />

      <div className="relative z-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Left Column: Sticky Intro + Still Have Questions Card */}
        <div className="flex flex-col justify-between lg:sticky lg:top-28 lg:col-span-5">
          <div>
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.08] px-3.5 py-1.5 backdrop-blur-sm">
              <GraduationCap className="h-3.5 w-3.5 text-[#34D399]" />
              <span className="text-[11.5px] font-semibold tracking-wide text-[#D1F5E8]">
                Your Questions. Answered
              </span>
            </div>

            <h2 className="mt-5 font-heading text-3xl font-bold leading-[1.08] tracking-[-0.025em] text-white sm:text-4xl lg:text-[44px]">
              Frequently
              <span className="block">
                Asked{" "}
                <span className="font-editorial italic font-normal text-[#6EE7B7]">
                  Questions
                </span>
              </span>
            </h2>

            <p className="mt-4 max-w-md text-[14.5px] leading-[1.7] text-[#B7DDD6] sm:text-[15.5px]">
              Clear answers regarding eligibility criteria, document verification, scholarship assessment tests, and grant disbursement timelines.
            </p>
          </div>

          {/* Still Have Questions Card */}
          <div className="mt-8 rounded-[22px] border border-white/15 bg-white/[0.06] p-6 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] sm:p-7">
            <h3 className="font-heading text-[20px] font-bold tracking-tight text-white">
              Still Have Questions?
            </h3>
            <p className="mt-2.5 text-[13.5px] leading-[1.68] text-[#B7DDD6]">
              Every student&apos;s academic journey is unique. If you need clarity on eligibility, documents, or partner colleges, our counseling team is ready to help.
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-[#9BCAC2]">
              Reach out anytime Monday through Saturday and we will guide you through every step.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#1ED788] px-5 py-2.5 text-[13.5px] font-bold text-[#052B27] shadow-[0_10px_24px_-6px_rgba(30,215,136,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#34E59A]"
              >
                <span>Speak with a Counselor</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>

              {showViewAllLink && (
                <Link
                  href="/faqs"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/[0.06] px-4 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-white/[0.12]"
                >
                  <span>View All FAQs</span>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Category Tabs (optional) + Accordion Stack */}
        <div className="lg:col-span-7">
          {showCategoryTabs && categories.length > 1 && (
            <div className="mb-5 flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const isActive = cat.name === activeCategory;
                return (
                  <button
                    key={cat.name}
                    type="button"
                    onClick={() => handleCategoryChange(cat.name)}
                    className={`rounded-full px-4 py-1.5 text-[12.5px] font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-[#1ED788] text-[#052B27] shadow-[0_6px_16px_-4px_rgba(30,215,136,0.4)]"
                        : "border border-white/15 bg-white/[0.06] text-[#C8E9E2] hover:bg-white/[0.12] hover:text-white"
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>
          )}

          <div className="space-y-3.5">
            {currentQuestions.map((faq, idx) => {
              const key = String(idx);
              const isOpen = openKey === key;

              return (
                <div
                  key={`${activeCategory}-${idx}`}
                  className={`overflow-hidden rounded-[18px] border transition-all duration-200 ${
                    isOpen
                      ? "border-[#34D399]/40 bg-white/[0.1] shadow-[0_14px_34px_-12px_rgba(3,30,28,0.45)]"
                      : "border-white/15 bg-white/[0.05] hover:border-white/25 hover:bg-white/[0.08]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenKey(isOpen ? "" : key)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4.5 text-left sm:px-6 sm:py-5"
                  >
                    <span className="font-heading text-[16px] font-bold leading-snug tracking-tight text-white sm:text-[17.5px]">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-all duration-200 ${
                        isOpen
                          ? "border-[#34D399]/50 bg-[#1ED788]/20 text-[#6EE7B7]"
                          : "border-white/15 bg-white/[0.08] text-white/90"
                      }`}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 sm:px-6 sm:pb-6">
                      <p className="text-[14px] leading-[1.72] text-[#CBE7E1] sm:text-[14.5px]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
