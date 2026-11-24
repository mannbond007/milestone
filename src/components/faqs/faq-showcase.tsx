"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  GraduationCap,
  MessageSquare,
  Search,
  X,
} from "lucide-react";

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
  showSearch?: boolean;
  showViewAllLink?: boolean;
}

export function FaqShowcase({
  categories,
  showCategoryTabs = true,
  showSearch = false,
  showViewAllLink = false,
}: FaqShowcaseProps) {
  const hasMultipleCategories = showCategoryTabs && categories.length > 1;
  const [activeCategory, setActiveCategory] = useState<string>(
    hasMultipleCategories ? "All" : (categories[0]?.name ?? "General")
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [openKey, setOpenKey] = useState<string>("0");

  const allQuestions = useMemo(
    () =>
      categories.flatMap((cat) =>
        cat.questions.map((q) => ({ ...q, category: cat.name }))
      ),
    [categories]
  );

  const visibleQuestions = useMemo(() => {
    const base =
      activeCategory === "All"
        ? allQuestions
        : allQuestions.filter((q) => q.category === activeCategory);

    const query = searchQuery.trim().toLowerCase();
    if (!query) return base;

    return base.filter(
      (item) =>
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query)
    );
  }, [activeCategory, allQuestions, searchQuery]);

  const handleCategoryChange = (name: string) => {
    setActiveCategory(name);
    setOpenKey("0");
  };

  return (
    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
      {/* Left Column: Sticky Editorial Intro + Search + Still Have Questions Card */}
      <div className="lg:sticky lg:top-28 lg:col-span-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#15966F]/20 bg-white px-3.5 py-1.5 shadow-[0_4px_14px_-6px_rgba(7,61,50,0.1)] dark:border-[#34D399]/25 dark:bg-[#112B23] dark:shadow-none">
          <GraduationCap className="h-3.5 w-3.5 text-[#15966F] dark:text-[#34D399]" />
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#073D32] dark:text-[#6EE7B7]">
            Your Questions. Answered
          </span>
        </div>

        <h2 className="mt-4 font-heading text-3xl font-bold leading-[1.1] tracking-[-0.028em] text-[#0E241E] sm:text-4xl lg:text-[42px] dark:text-white">
          Frequently Asked{" "}
          <span className="relative inline-block font-editorial italic font-normal text-[#15966F] dark:text-[#34D399]">
            Questions
            <svg
              aria-hidden="true"
              viewBox="0 0 180 12"
              fill="none"
              className="pointer-events-none absolute -bottom-1 left-0 h-2.5 w-full text-[#15966F]/45 dark:text-[#34D399]/45"
              preserveAspectRatio="none"
            >
              <path
                d="M2 9.5C46 3.5 134 2.5 178 8.5"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>

        <p className="mt-3.5 max-w-md text-[15px] leading-[1.7] text-[#5C6B64] dark:text-[#A0B3AC]">
          Clear answers on scholarship eligibility, verification documents, assessment tests, and grant disbursement timelines.
        </p>

        {/* Live Search Filter (enabled on /faqs page) */}
        {showSearch && (
          <div className="relative mt-6 max-w-md">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#687A73]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setOpenKey("0");
              }}
              placeholder="Search questions (e.g. eligibility, percentage)..."
              aria-label="Search frequently asked questions"
              className="h-11 w-full rounded-full border border-[#DCE8E3] bg-white pl-10 pr-10 text-[13.5px] text-[#0E241E] shadow-2xs outline-none transition-colors placeholder:text-[#869991] focus:border-[#15966F] dark:border-[#1E3B32] dark:bg-[#0D1E19] dark:text-white dark:focus:border-[#34D399]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-[#687A73] hover:bg-[#EBF7F1] hover:text-[#073D32] cursor-pointer"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        )}

        {/* Still Have Questions Support Card */}
        <div className="mt-6 rounded-[22px] border border-[#DCE8E3] border-b-[3px] border-b-[#C5DDD3] bg-white p-5 shadow-[0_12px_28px_-14px_rgba(7,61,50,0.12)] sm:p-6 dark:border-[#1E3B32] dark:border-b-[#122922] dark:bg-[#0D1E19]">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EBF7F1] text-[#15966F] dark:bg-[#132E26] dark:text-[#34D399]">
              <MessageSquare className="h-4 w-4" />
            </span>
            <h3 className="font-heading text-[17px] font-bold tracking-tight text-[#0E241E] dark:text-white">
              Still Have Questions?
            </h3>
          </div>

          <p className="mt-2.5 text-[13.5px] leading-[1.65] text-[#5C6B64] dark:text-[#A0B3AC]">
            Speak directly with our admissions and scholarship counseling desk Monday through Saturday for personalized guidance.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#073D32] to-[#11644E] py-2 pl-4 pr-1.5 text-[13px] font-semibold text-white shadow-[0_8px_20px_-6px_rgba(7,61,50,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:from-[#0A4E3F] hover:to-[#158062]"
            >
              <span>Speak with a Counselor</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#073D32] transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>

            {showViewAllLink && (
              <Link
                href="/faqs"
                className="inline-flex items-center gap-1 rounded-full border border-[#D4E3DC] bg-[#FAFCFB] px-4 py-2 text-[13px] font-semibold text-[#073D32] transition-colors hover:border-[#15966F]/45 hover:bg-white hover:text-[#15966F] dark:border-[#1E3B32] dark:bg-[#132E26] dark:text-white"
              >
                <span>View All FAQs</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Right Column: Segmented Category Tabs + Smooth Zero-Jerk Accordion Stack */}
      <div className="lg:col-span-7">
        {hasMultipleCategories && (
          <div className="mb-5 flex flex-wrap items-center gap-2">
            {["All", ...categories.map((c) => c.name)].map((tab) => {
              const isActive = tab === activeCategory;
              const count =
                tab === "All"
                  ? allQuestions.length
                  : categories.find((c) => c.name === tab)?.questions.length ?? 0;

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => handleCategoryChange(tab)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[12.5px] font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#073D32] text-white shadow-[0_6px_16px_-4px_rgba(7,61,50,0.35)] dark:bg-[#15966F]"
                      : "border border-[#DCE8E3] bg-white text-[#465952] hover:border-[#15966F]/45 hover:text-[#073D32] dark:border-[#1E3B32] dark:bg-[#0D1E19] dark:text-[#A0B3AC] dark:hover:text-white"
                  }`}
                >
                  <span>{tab}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-[#EBF7F1] text-[#15966F] dark:bg-[#132E26] dark:text-[#6EE7B7]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {visibleQuestions.length === 0 ? (
          <div className="rounded-[20px] border border-[#DCE8E3] bg-white p-8 text-center dark:border-[#1E3B32] dark:bg-[#0D1E19]">
            <p className="font-heading text-[16px] font-bold text-[#0E241E] dark:text-white">
              No matching questions found
            </p>
            <p className="mt-1 text-[13.5px] text-[#5C6B64] dark:text-[#A0B3AC]">
              Try a different keyword or reach out directly to our counseling team.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {visibleQuestions.map((faq, idx) => {
              const key = `${faq.category}-${idx}`;
              const isOpen = openKey === key || (openKey === "0" && idx === 0);
              const num = String(idx + 1).padStart(2, "0");

              return (
                <div
                  key={key}
                  className={`relative overflow-hidden rounded-[20px] border transition-all duration-300 ease-out ${
                    isOpen
                      ? "border-[#15966F]/40 border-b-[2px] border-b-[#15966F]/55 bg-white shadow-[0_14px_34px_-14px_rgba(7,61,50,0.16)] dark:border-[#34D399]/40 dark:bg-[#0D1E19]"
                      : "border-[#DCE8E3] bg-white hover:border-[#15966F]/35 hover:shadow-[0_8px_22px_-12px_rgba(7,61,50,0.1)] dark:border-[#1E3B32] dark:bg-[#0D1E19]"
                  }`}
                >
                  {/* Active left emerald indicator */}
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-y-3 left-0 w-[3px] rounded-r-full bg-[#15966F] transition-opacity duration-300 dark:bg-[#34D399] ${
                      isOpen ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() => setOpenKey(isOpen ? "__none__" : key)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer focus:outline-none sm:px-6 sm:py-4.5"
                  >
                    <div className="flex min-w-0 items-center gap-3.5">
                      <span
                        className={`font-heading text-[12px] font-bold tracking-wider transition-colors duration-200 ${
                          isOpen
                            ? "text-[#15966F] dark:text-[#34D399]"
                            : "text-[#8FA39B] dark:text-[#5B756B]"
                        }`}
                      >
                        {num}
                      </span>
                      <span className="font-heading text-[15px] font-bold leading-snug tracking-tight text-[#0E241E] sm:text-[16px] dark:text-white">
                        {faq.question}
                      </span>
                    </div>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                        isOpen
                          ? "border-[#15966F] bg-[#073D32] text-white dark:border-[#34D399] dark:bg-[#15966F]"
                          : "border-[#DCE8E3] bg-[#F4FAF7] text-[#073D32] dark:border-[#1E3B32] dark:bg-[#132E26] dark:text-[#6EE7B7]"
                      }`}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ease-out ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </span>
                  </button>

                  {/* Smooth CSS Grid Row Collapse/Expand (Zero Jerk) */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-4.5 pl-12 pt-0 sm:px-6 sm:pb-5 sm:pl-[52px]">
                        <p className="text-[14px] leading-[1.7] text-[#5C6B64] sm:text-[14.5px] dark:text-[#A0B3AC]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
