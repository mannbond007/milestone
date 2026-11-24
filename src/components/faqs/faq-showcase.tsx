"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Mail,
  Phone,
  Plus,
  Search,
  ShieldCheck,
  X,
} from "lucide-react";
import { footerLinks } from "@/constants/navigation";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  name: string;
  shortLabel?: string;
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
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [openKey, setOpenKey] = useState<string>("");

  const hasMultipleCategories = categories.length > 1;

  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const scoped =
      selectedCategory === "All"
        ? categories
        : categories.filter((c) => (c.shortLabel || c.name) === selectedCategory);

    if (!query) return scoped;

    return scoped
      .map((cat) => ({
        ...cat,
        questions: cat.questions.filter(
          (item) =>
            item.question.toLowerCase().includes(query) ||
            item.answer.toLowerCase().includes(query)
        ),
      }))
      .filter((cat) => cat.questions.length > 0);
  }, [categories, searchQuery, selectedCategory]);

  return (
    <div className="mx-auto max-w-6xl">
      {/* Search + Quick Category Filter Pills */}
      {showSearch && (
        <div className="mx-auto mb-12 max-w-2xl">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#15966F] dark:text-[#34D399]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. eligibility, MBBS, documents, disbursement)..."
              aria-label="Search frequently asked questions"
              className="h-12 w-full rounded-full border border-[#D4E3DC] bg-white pl-12 pr-12 text-[14px] text-[#0E241E] shadow-[0_10px_28px_-12px_rgba(7,61,50,0.14),inset_0_1px_0_rgba(255,255,255,1)] outline-none transition-all placeholder:text-[#869991] focus:border-[#15966F] focus:ring-4 focus:ring-[#15966F]/10 dark:border-[#1E3B32] dark:bg-[#0D1E19] dark:text-white dark:focus:border-[#34D399]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-[#687A73] transition-colors hover:bg-[#EBF7F1] hover:text-[#073D32] cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {hasMultipleCategories && (
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {["All", ...categories.map((c) => c.shortLabel || c.name)].map(
                (label) => {
                  const isActive = selectedCategory === label;
                  return (
                    <button
                      key={label}
                      type="button"
                      onClick={() => setSelectedCategory(label)}
                      className={`rounded-full px-4 py-1.5 text-[12.5px] font-semibold transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-[#073D32] text-white shadow-[0_6px_16px_-4px_rgba(7,61,50,0.35)] dark:bg-[#15966F]"
                          : "border border-[#DCE8E3] bg-white text-[#465952] hover:border-[#15966F]/45 hover:text-[#073D32] dark:border-[#1E3B32] dark:bg-[#0D1E19] dark:text-[#A0B3AC] dark:hover:text-white"
                      }`}
                    >
                      {label}
                    </button>
                  );
                }
              )}
            </div>
          )}
        </div>
      )}

      {/* Categorized 2-Column Symmetrical FAQ Sections */}
      {filteredCategories.length === 0 ? (
        <div className="rounded-[24px] border border-[#DCE8E3] bg-[#FAFCFB] p-10 text-center dark:border-[#1E3B32] dark:bg-[#0D1E19]">
          <p className="font-heading text-[17px] font-bold text-[#0E241E] dark:text-white">
            No matching questions found
          </p>
          <p className="mt-1.5 text-[14px] text-[#5C6B64] dark:text-[#A0B3AC]">
            Try another keyword or clear your filter to browse all questions.
          </p>
        </div>
      ) : (
        <div>
          {filteredCategories.map((cat, ci) => {
            const sectionIndex = String(ci + 1).padStart(2, "0");
            return (
              <div key={cat.name}>
                {/* Tapered 3D Beveled Divider Between Sections */}
                {ci > 0 && (
                  <div
                    aria-hidden="true"
                    className="my-12 h-[2px] w-full bg-gradient-to-r from-transparent via-[#C6DDD3] to-transparent shadow-[0_1px_0_rgba(255,255,255,0.95)] dark:via-[#1E3B32] dark:shadow-none"
                  />
                )}

                {/* Centered Category Header */}
                <div className="mb-8 text-center">
                  {hasMultipleCategories && (
                    <span className="inline-block text-[10.5px] font-bold uppercase tracking-[0.22em] text-[#15966F] dark:text-[#34D399]">
                      {sectionIndex} &bull; {cat.shortLabel || "Section"}
                    </span>
                  )}
                  <h2
                    className={`mt-1.5 font-heading font-bold tracking-[-0.025em] text-[#0E241E] dark:text-white ${
                      compactHeader
                        ? "text-2xl sm:text-3xl"
                        : "text-2xl sm:text-[32px]"
                    }`}
                  >
                    {cat.name}
                  </h2>
                  {cat.subtitle && (
                    <p className="mx-auto mt-2 max-w-xl text-[14.5px] leading-relaxed text-[#5C6B64] dark:text-[#A0B3AC]">
                      {cat.subtitle}
                    </p>
                  )}
                </div>

                {/* Symmetrical 2-Column Tactile Accordion Grid */}
                <div className="grid grid-cols-1 items-start gap-3.5 md:grid-cols-2 md:gap-4">
                  {cat.questions.map((faq, idx) => {
                    const key = `${cat.name}-${idx}`;
                    const isOpen = openKey === key;

                    return (
                      <div
                        key={key}
                        className={`group relative overflow-hidden rounded-[18px] border transition-all duration-300 ease-out ${
                          isOpen
                            ? "border-[#15966F]/45 border-b-[2px] border-b-[#15966F]/60 bg-white shadow-[0_18px_38px_-14px_rgba(7,61,50,0.16),inset_0_1px_0_rgba(255,255,255,1)] dark:border-[#34D399]/45 dark:bg-[#0D1E19]"
                            : "border-[#DCE8E3] bg-gradient-to-b from-white to-[#F7FBF9] shadow-[0_3px_10px_-4px_rgba(7,61,50,0.06),inset_0_1px_0_rgba(255,255,255,1)] hover:-translate-y-0.5 hover:border-[#15966F]/35 hover:shadow-[0_12px_26px_-12px_rgba(7,61,50,0.13)] dark:border-[#18332B] dark:from-[#0D1E19] dark:to-[#0A1713] dark:shadow-none dark:hover:border-[#34D399]/35"
                        }`}
                      >
                        {/* Subtle top emerald highlight strip when open */}
                        <span
                          aria-hidden="true"
                          className={`pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#073D32] via-[#15966F] to-[#34D399] transition-opacity duration-300 ${
                            isOpen ? "opacity-100" : "opacity-0"
                          }`}
                        />

                        <button
                          type="button"
                          onClick={() => setOpenKey(isOpen ? "" : key)}
                          aria-expanded={isOpen}
                          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer focus:outline-none sm:px-6 sm:py-4.5"
                        >
                          <span
                            className={`font-heading text-[14.5px] font-semibold leading-snug tracking-tight transition-colors duration-200 sm:text-[15px] ${
                              isOpen
                                ? "text-[#073D32] dark:text-white"
                                : "text-[#0E241E] group-hover:text-[#073D32] dark:text-[#E7F3EE]"
                            }`}
                          >
                            {faq.question}
                          </span>

                          <span
                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                              isOpen
                                ? "border-[#073D32] bg-[#073D32] text-white shadow-sm dark:border-[#15966F] dark:bg-[#15966F]"
                                : "border-[#DCE8E3] bg-[#EBF7F1] text-[#15966F] group-hover:border-[#15966F]/40 group-hover:bg-[#E1F3EA] dark:border-[#1E3B32] dark:bg-[#132E26] dark:text-[#34D399]"
                            }`}
                          >
                            <Plus
                              className={`h-3.5 w-3.5 transition-transform duration-300 ease-out ${
                                isOpen ? "rotate-45" : "rotate-0"
                              }`}
                              strokeWidth={2.4}
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
                            <div className="border-t border-[#EDF4F0] px-5 pb-5 pt-3.5 sm:px-6 dark:border-[#18332B]">
                              <p className="text-[13.5px] leading-[1.72] text-[#5C6B64] sm:text-[14px] dark:text-[#A0B3AC]">
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
            );
          })}
        </div>
      )}

      {/* Architectural Counseling & Direct Support Hub */}
      <div className="relative mt-16 overflow-hidden rounded-[28px] border border-[#D4E6DF] border-b-[3px] border-b-[#BCD8CC] bg-gradient-to-br from-white via-[#FAFCFB] to-[#EBF7F1] p-6 shadow-[0_24px_56px_-24px_rgba(7,61,50,0.16),inset_0_1px_0_rgba(255,255,255,1)] sm:p-8 lg:p-10 dark:border-[#1E3B32] dark:border-b-[#122922] dark:from-[#0C1C17] dark:via-[#0D1E19] dark:to-[#112A22]">
        {/* Top Luminous Accent Hairline */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#15966F]/45 to-transparent"
        />
        {/* Subtle Corner Ambient Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#15966F]/[0.07] blur-3xl dark:bg-[#34D399]/[0.06]"
        />

        <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Advisory Message, Trust Pillars & Actions */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4E6DF] bg-white px-3.5 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#073D32] shadow-2xs dark:border-[#1E3B32] dark:bg-[#132E26] dark:text-[#6EE7B7]">
              <span className="h-2 w-2 rounded-full bg-[#15966F] shadow-[0_0_0_3px_rgba(21,150,111,0.18)]" />
              <span>Scholarship Advisory Desk</span>
            </div>

            <h3 className="mt-4 font-heading text-2xl font-extrabold tracking-[-0.025em] text-[#0E241E] sm:text-[30px] sm:leading-[1.18] dark:text-white">
              Still have a specific{" "}
              <span className="font-editorial font-normal italic text-[#15966F] dark:text-[#34D399]">
                question?
              </span>
            </h3>

            <p className="mt-3 max-w-xl text-[14.5px] leading-[1.72] text-[#52635C] dark:text-[#A0B3AC]">
              Whether you need clarity on eligibility benchmarks, document verification, scholarship test schedules, or MBBS, Engineering, and MBA pathways, our dedicated academic counselors provide clear, zero-fee guidance for students and parents.
            </p>

            {/* 3 Institutional Service Guarantees */}
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2.5">
              {[
                "100% Free Counseling",
                "Document & Eligibility Check",
                "Same-Day Response",
              ].map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#1B3A31] dark:text-[#D5E6DF]"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#15966F] dark:text-[#34D399]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Primary & Secondary Actions */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#073D32] to-[#11644E] py-2.5 pl-5 pr-2.5 text-[13.5px] font-semibold text-white shadow-[0_12px_26px_-8px_rgba(7,61,50,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:from-[#0A4E3F] hover:to-[#158062]"
              >
                <span>Speak with a Counselor</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#073D32] transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>

              {showViewAllLink ? (
                <Link
                  href="/faqs"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#CFE2DA] bg-white px-5 py-2.5 text-[13.5px] font-semibold text-[#073D32] shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#15966F]/50 hover:text-[#15966F] dark:border-[#1E3B32] dark:bg-[#132E26] dark:text-white"
                >
                  <span>Browse All FAQs</span>
                </Link>
              ) : (
                <Link
                  href="/sign-up"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#CFE2DA] bg-white px-5 py-2.5 text-[13.5px] font-semibold text-[#073D32] shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#15966F]/50 hover:text-[#15966F] dark:border-[#1E3B32] dark:bg-[#132E26] dark:text-white"
                >
                  <span>Start 2025-26 Application</span>
                  <ArrowUpRight className="h-4 w-4 text-[#15966F] dark:text-[#34D399]" />
                </Link>
              )}
            </div>
          </div>

          {/* Right Column: Direct Contact Channels Panel */}
          <div className="lg:col-span-5">
            <div className="rounded-[22px] border border-[#DCE8E3] bg-white/95 p-4 shadow-[0_14px_34px_-16px_rgba(7,61,50,0.12),inset_0_1px_0_rgba(255,255,255,1)] sm:p-5 dark:border-[#1E3B32] dark:bg-[#0A1713]/90">
              <div className="mb-3.5 flex items-center justify-between px-1">
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#15966F] dark:text-[#34D399]">
                  Direct Support Channels
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#5C6B64] dark:text-[#A0B3AC]">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#15966F] dark:text-[#34D399]" />
                  Verified Desk
                </span>
              </div>

              <div className="space-y-2.5">
                {/* Helpline Card */}
                <a
                  href={`tel:${footerLinks.contact.phone.replace(/\s+/g, "")}`}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-[#E6F0EC] bg-[#FAFCFB] p-3.5 transition-all duration-200 hover:border-[#15966F]/40 hover:bg-white hover:shadow-[0_8px_20px_-10px_rgba(7,61,50,0.14)] dark:border-[#18332B] dark:bg-[#0D1E19] dark:hover:border-[#34D399]/40"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#15966F]/15 bg-[#EBF7F1] text-[#0B7453] transition-colors group-hover:bg-[#073D32] group-hover:text-white dark:border-[#34D399]/20 dark:bg-[#132E26] dark:text-[#34D399]">
                      <Phone className="h-4.5 w-4.5" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-[#687A73] dark:text-[#8DA29A]">
                        Scholarship Helpline
                      </div>
                      <div className="truncate font-heading text-[14.5px] font-bold text-[#0E241E] group-hover:text-[#073D32] dark:text-white">
                        {footerLinks.contact.phone}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-[#869991] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#15966F]" />
                </a>

                {/* Email Card */}
                <a
                  href={`mailto:${footerLinks.contact.email}`}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-[#E6F0EC] bg-[#FAFCFB] p-3.5 transition-all duration-200 hover:border-[#15966F]/40 hover:bg-white hover:shadow-[0_8px_20px_-10px_rgba(7,61,50,0.14)] dark:border-[#18332B] dark:bg-[#0D1E19] dark:hover:border-[#34D399]/40"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#15966F]/15 bg-[#EBF7F1] text-[#0B7453] transition-colors group-hover:bg-[#073D32] group-hover:text-white dark:border-[#34D399]/20 dark:bg-[#132E26] dark:text-[#34D399]">
                      <Mail className="h-4.5 w-4.5" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-[#687A73] dark:text-[#8DA29A]">
                        Email Advisory Desk
                      </div>
                      <div className="truncate font-heading text-[14px] font-bold text-[#0E241E] group-hover:text-[#073D32] dark:text-white">
                        {footerLinks.contact.email}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-[#869991] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#15966F]" />
                </a>
              </div>

              {/* Operating Hours Strip */}
              <div className="mt-3.5 flex items-center gap-2 rounded-xl bg-[#F2F9F6] px-3.5 py-2.5 text-[12px] font-medium text-[#465952] dark:bg-[#112620] dark:text-[#A0B3AC]">
                <Clock className="h-3.5 w-3.5 shrink-0 text-[#15966F] dark:text-[#34D399]" />
                <span>{footerLinks.contact.hours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
