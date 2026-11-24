"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, MessageSquare, Plus, Search, X } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  name: string;
  subtitle?: string;
  questions: FaqItem[];
}

interface FaqShowcaseProps {
  categories: FaqCategory[];
  showSearch?: boolean;
  showViewAllLink?: boolean;
  compactHeader?: boolean;
}

export function FaqShowcase({
  categories,
  showSearch = false,
  showViewAllLink = false,
  compactHeader = false,
}: FaqShowcaseProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [openKey, setOpenKey] = useState<string>("");

  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return categories;

    return categories
      .map((cat) => ({
        ...cat,
        questions: cat.questions.filter(
          (item) =>
            item.question.toLowerCase().includes(query) ||
            item.answer.toLowerCase().includes(query)
        ),
      }))
      .filter((cat) => cat.questions.length > 0);
  }, [categories, searchQuery]);

  return (
    <div className="mx-auto max-w-6xl">
      {/* Optional Centered Search Bar */}
      {showSearch && (
        <div className="mx-auto mb-12 max-w-xl">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#687A73]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. eligibility, MBBS, documents)..."
              aria-label="Search frequently asked questions"
              className="h-12 w-full rounded-full border border-[#D8E6DF] bg-white pl-11 pr-11 text-[14px] text-[#0E241E] shadow-[0_6px_20px_-8px_rgba(7,61,50,0.1)] outline-none transition-all placeholder:text-[#869991] focus:border-[#15966F] focus:ring-2 focus:ring-[#15966F]/15 dark:border-[#1E3B32] dark:bg-[#0D1E19] dark:text-white dark:focus:border-[#34D399]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-[#687A73] transition-colors hover:bg-[#EBF7F1] hover:text-[#073D32] cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Categorized 2-Column Clean FAQ Sections */}
      {filteredCategories.length === 0 ? (
        <div className="rounded-[22px] border border-[#DCE8E3] bg-white p-10 text-center dark:border-[#1E3B32] dark:bg-[#0D1E19]">
          <p className="font-heading text-[17px] font-bold text-[#0E241E] dark:text-white">
            No matching questions found
          </p>
          <p className="mt-1.5 text-[14px] text-[#5C6B64] dark:text-[#A0B3AC]">
            Try another keyword or reach out directly to our scholarship counseling desk.
          </p>
        </div>
      ) : (
        <div className="divide-y divide-[#E3ECE8] dark:divide-[#18332B]">
          {filteredCategories.map((cat, ci) => (
            <div
              key={cat.name}
              className={ci === 0 ? "pb-12" : "py-12 first:pt-0 last:pb-0"}
            >
              {/* Centered Category Title */}
              <div className="mb-8 text-center">
                <h2
                  className={`font-heading font-bold tracking-[-0.025em] text-[#0E241E] dark:text-white ${
                    compactHeader
                      ? "text-2xl sm:text-3xl"
                      : "text-2xl sm:text-[32px]"
                  }`}
                >
                  {cat.name}
                </h2>
                {cat.subtitle && (
                  <p className="mt-2 text-[14.5px] text-[#5C6B64] dark:text-[#A0B3AC]">
                    {cat.subtitle}
                  </p>
                )}
              </div>

              {/* Clean 2-Column Symmetrical FAQ Grid (items-start prevents adjacent card stretch) */}
              <div className="grid grid-cols-1 items-start gap-3.5 md:grid-cols-2 md:gap-4">
                {cat.questions.map((faq, idx) => {
                  const key = `${cat.name}-${idx}`;
                  const isOpen = openKey === key;

                  return (
                    <div
                      key={key}
                      className={`overflow-hidden rounded-[16px] border transition-all duration-300 ease-out ${
                        isOpen
                          ? "border-[#15966F]/40 bg-white shadow-[0_14px_32px_-14px_rgba(7,61,50,0.15)] dark:border-[#34D399]/40 dark:bg-[#0D1E19]"
                          : "border-[#E3ECE8] bg-[#F7FAF8] hover:border-[#15966F]/35 hover:bg-white hover:shadow-[0_8px_22px_-12px_rgba(7,61,50,0.1)] dark:border-[#18332B] dark:bg-[#0B1915] dark:hover:bg-[#0D1E19]"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenKey(isOpen ? "" : key)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer focus:outline-none sm:px-6"
                      >
                        <span className="font-heading text-[14.5px] font-semibold leading-snug text-[#0E241E] sm:text-[15px] dark:text-white">
                          {faq.question}
                        </span>

                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                            isOpen
                              ? "bg-[#073D32] text-white dark:bg-[#15966F]"
                              : "bg-transparent text-[#15966F] dark:text-[#34D399]"
                          }`}
                        >
                          <Plus
                            className={`h-4 w-4 transition-transform duration-300 ease-out ${
                              isOpen ? "rotate-45" : "rotate-0"
                            }`}
                            strokeWidth={2.2}
                          />
                        </span>
                      </button>

                      {/* Smooth Zero-Jerk Grid-Row Expand */}
                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="border-t border-[#EDF3F0] px-5 pb-4.5 pt-3 sm:px-6 dark:border-[#18332B]">
                            <p className="text-[13.5px] leading-[1.7] text-[#5C6B64] sm:text-[14px] dark:text-[#A0B3AC]">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Compact Clean Bottom Support Bar */}
      <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-[22px] border border-[#DCE8E3] bg-[#FAFCFB] px-6 py-5 sm:flex-row sm:px-8 dark:border-[#1E3B32] dark:bg-[#0D1E19]">
        <div className="flex items-center gap-3.5 text-center sm:text-left">
          <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EBF7F1] text-[#15966F] sm:flex dark:bg-[#132E26] dark:text-[#34D399]">
            <MessageSquare className="h-4.5 w-4.5" />
          </span>
          <div>
            <div className="font-heading text-[15.5px] font-bold text-[#0E241E] dark:text-white">
              Still have a specific question?
            </div>
            <p className="text-[13px] text-[#5C6B64] dark:text-[#A0B3AC]">
              Our scholarship counseling team is available Monday through Saturday.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
          {showViewAllLink && (
            <Link
              href="/faqs"
              className="inline-flex items-center rounded-full border border-[#D4E3DC] bg-white px-4 py-2 text-[13px] font-semibold text-[#073D32] transition-colors hover:border-[#15966F]/45 hover:text-[#15966F] dark:border-[#1E3B32] dark:bg-[#132E26] dark:text-white"
            >
              View All FAQs
            </Link>
          )}
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#073D32] to-[#11644E] py-2 pl-4 pr-2 text-[13px] font-semibold text-white shadow-[0_8px_18px_-6px_rgba(7,61,50,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:from-[#0A4E3F] hover:to-[#158062]"
          >
            <span>Speak with a Counselor</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#073D32] transition-transform duration-200 group-hover:translate-x-0.5">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
