import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BellRing,
  CalendarDays,
  CheckCircle2,
  Clock,
  FileCheck2,
  ShieldCheck,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { importantDates } from "@/constants/home-data";

export const metadata: Metadata = {
  title: "Important Dates",
  description:
    "Key dates for the Milestone Scholarship Program, including registration, assessment test, results, counseling, and disbursement timelines.",
};

function parseShortDate(dateStr: string) {
  const parts = dateStr.replace(",", "").split(" ");
  const month = (parts[0] || "").slice(0, 3).toUpperCase();
  const day = parts[1] || "";
  const year = parts[2] || "";
  return { month, day, year };
}

export default function ImportantDatesPage() {
  const completedCount = importantDates.filter((d) => d.status === "completed").length;
  const ongoingItem = importantDates.find((d) => d.status === "ongoing") || importantDates[0];
  const upcomingCount = importantDates.filter((d) => d.status === "upcoming").length;
  const progressPercent = Math.round(
    ((completedCount + 0.5) / importantDates.length) * 100
  );

  return (
    <div className="min-h-screen bg-white dark:bg-[#07120F]">
      {/* Hero Section: Editorial Split + Live Cycle Progress Card */}
      <section className="relative overflow-hidden border-b border-[#E3ECE8] bg-gradient-to-b from-[#F1F9F5] via-[#FAFCFB] to-white pb-14 pt-28 md:pb-20 md:pt-36 dark:border-[#162E26] dark:from-[#081713] dark:via-[#07120F] dark:to-[#07120F]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#15966F]/[0.08] blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Column */}
            <ScrollReveal className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#15966F]/20 bg-white/90 px-3.5 py-1.5 shadow-[0_4px_14px_-6px_rgba(7,61,50,0.12)] dark:border-[#34D399]/25 dark:bg-[#112B23] dark:shadow-none">
                <span className="h-1.5 w-1.5 rounded-full bg-[#15966F] ring-2 ring-[#15966F]/25 dark:bg-[#34D399]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#073D32] dark:text-[#6EE7B7]">
                  Academic Schedule
                </span>
                <span className="h-3 w-[1px] bg-[#15966F]/25 dark:bg-[#34D399]/25" />
                <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#15966F] dark:text-[#34D399]">
                  2025–26 Cycle
                </span>
              </div>

              <h1 className="mt-5 font-heading text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-[#0E241E] sm:text-5xl lg:text-[54px] dark:text-white">
                Important{" "}
                <span className="relative inline-block font-editorial italic font-normal text-[#15966F] dark:text-[#34D399]">
                  Dates
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 150 12"
                    fill="none"
                    className="pointer-events-none absolute -bottom-1 left-0 h-2.5 w-full text-[#15966F]/45 dark:text-[#34D399]/45"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 9.5C38 3.5 112 2.5 148 8.5"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                &amp; Timeline
              </h1>

              <p className="mt-5 max-w-xl text-[15.5px] leading-[1.7] text-[#5C6B64] sm:text-[17px] dark:text-[#A0B3AC]">
                Stay on track with every key milestone of the Milestone Scholarship Program, from online registration and scholarship tests to counseling and direct grant disbursement.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/sign-up"
                  className="group inline-flex h-11 items-center gap-2.5 rounded-full bg-gradient-to-r from-[#073D32] to-[#11644E] pl-5 pr-1.5 text-[13.5px] font-semibold text-white shadow-[0_10px_24px_-6px_rgba(7,61,50,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:from-[#0A4E3F] hover:to-[#158062]"
                >
                  <span>Apply Now</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#073D32] transition-transform duration-200 group-hover:translate-x-0.5">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>

                <Link
                  href="/how-to-apply"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-[#D4E3DC] bg-white px-5 text-[13.5px] font-semibold text-[#073D32] shadow-2xs transition-all duration-200 hover:border-[#15966F]/45 hover:text-[#15966F] dark:border-[#1E3B32] dark:bg-[#0D1E19] dark:text-white"
                >
                  How to Apply
                </Link>
              </div>
            </ScrollReveal>

            {/* Right Column: Live Cycle Status Summary Card */}
            <ScrollReveal delay={0.1} className="lg:col-span-5">
              <div className="rounded-[26px] border border-[#DCE8E3] border-b-[3px] border-b-[#C5DDD3] bg-white p-6 shadow-[0_20px_48px_-16px_rgba(7,61,50,0.14),inset_0_1px_0_rgba(255,255,255,1)] sm:p-7 dark:border-[#1E3B32] dark:border-b-[#122922] dark:bg-[#0D1E19]">
                <div className="flex items-center justify-between gap-3 border-b border-[#E6F0EC] pb-4 dark:border-[#18332B]">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EBF7F1] text-[#15966F] dark:bg-[#132E26] dark:text-[#34D399]">
                      <CalendarDays className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#687A73] dark:text-[#8DA39B]">
                        Current Cycle Status
                      </div>
                      <div className="font-heading text-[14px] font-bold text-[#073D32] dark:text-white">
                        {ongoingItem.title}
                      </div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#15966F]/25 bg-[#EBF7F1] px-3 py-1 text-[11px] font-bold text-[#0B7453] dark:border-[#34D399]/30 dark:bg-[#132E26] dark:text-[#6EE7B7]">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#15966F] dark:bg-[#34D399]" />
                    Ongoing
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mt-5">
                  <div className="flex items-center justify-between text-[12px] font-semibold">
                    <span className="text-[#5C6B64] dark:text-[#A0B3AC]">
                      Cycle Progress
                    </span>
                    <span className="text-[#073D32] dark:text-[#6EE7B7]">
                      {progressPercent}% Complete
                    </span>
                  </div>
                  <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-[#E8F2ED] dark:bg-[#142D25]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#073D32] via-[#15966F] to-[#34D399]"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                {/* 3-Stat Breakdown */}
                <div className="mt-6 grid grid-cols-3 divide-x divide-[#E6F0EC] rounded-2xl border border-[#E6F0EC] bg-[#FAFCFB] py-3.5 text-center dark:divide-[#18332B] dark:border-[#18332B] dark:bg-[#0B1915]">
                  <div>
                    <div className="font-heading text-xl font-bold text-[#073D32] dark:text-white">
                      {completedCount}
                    </div>
                    <div className="text-[11px] font-medium text-[#687A73] dark:text-[#8DA39B]">
                      Completed
                    </div>
                  </div>
                  <div>
                    <div className="font-heading text-xl font-bold text-[#15966F] dark:text-[#34D399]">
                      1
                    </div>
                    <div className="text-[11px] font-medium text-[#687A73] dark:text-[#8DA39B]">
                      Ongoing
                    </div>
                  </div>
                  <div>
                    <div className="font-heading text-xl font-bold text-[#0E241E] dark:text-white">
                      {upcomingCount}
                    </div>
                    <div className="text-[11px] font-medium text-[#687A73] dark:text-[#8DA39B]">
                      Upcoming
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Schedule Cards Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#15966F] dark:text-[#34D399]">
                Complete Schedule
              </p>
              <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-[#0E241E] sm:text-3xl dark:text-white">
                6 Key Application{" "}
                <span className="font-editorial italic font-normal text-[#15966F] dark:text-[#34D399]">
                  Milestones
                </span>
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-[12px] font-semibold">
              <span className="inline-flex items-center gap-1.5 text-[#0B7453] dark:text-[#6EE7B7]">
                <span className="h-2 w-2 rounded-full bg-[#15966F]" />
                Completed
              </span>
              <span className="inline-flex items-center gap-1.5 text-[#073D32] dark:text-white">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#34D399]" />
                Ongoing
              </span>
              <span className="inline-flex items-center gap-1.5 text-[#687A73] dark:text-[#8DA39B]">
                <span className="h-2 w-2 rounded-full bg-[#C5DDD3] dark:bg-[#2A4B40]" />
                Upcoming
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {importantDates.map((item, i) => {
              const Icon = item.icon;
              const { month, day, year } = parseShortDate(item.date);
              const isOngoing = item.status === "ongoing";
              const isCompleted = item.status === "completed";
              const stepNum = String(i + 1).padStart(2, "0");

              return (
                <ScrollReveal key={item.title} delay={i * 0.06} className="h-full">
                  <div
                    className={`group relative flex h-full items-start gap-4 overflow-hidden rounded-[24px] border border-b-[3px] p-5 transition-all duration-300 hover:-translate-y-1 sm:gap-5 sm:p-6 ${
                      isOngoing
                        ? "border-[#15966F]/45 border-b-[#15966F]/65 bg-gradient-to-br from-white via-[#F4FBF7] to-[#E6F5EE] shadow-[0_18px_40px_-14px_rgba(21,150,111,0.22)] dark:border-[#34D399]/40 dark:from-[#0F261F] dark:to-[#133329]"
                        : "border-[#DCE8E3] border-b-[#C5DDD3] bg-white shadow-[0_12px_28px_-14px_rgba(7,61,50,0.11)] hover:border-[#15966F]/45 hover:shadow-[0_20px_40px_-14px_rgba(7,61,50,0.17)] dark:border-[#1E3B32] dark:border-b-[#122922] dark:bg-[#0D1E19]"
                    }`}
                  >
                    {/* Tactile 3D Calendar Date Tile */}
                    <div
                      className={`flex w-[72px] shrink-0 flex-col items-center justify-center rounded-2xl border py-3 text-center transition-transform duration-300 group-hover:scale-105 ${
                        isOngoing
                          ? "border-[#15966F] bg-gradient-to-b from-[#0E6A54] to-[#073D32] text-white shadow-[0_10px_20px_-6px_rgba(7,61,50,0.45)]"
                          : isCompleted
                          ? "border-[#15966F]/25 bg-gradient-to-b from-white via-[#ECF8F2] to-[#D6F0E3] text-[#073D32] shadow-[0_8px_16px_-6px_rgba(7,61,50,0.16)] dark:border-[#34D399]/25 dark:from-[#1B4538] dark:to-[#0F2A22] dark:text-[#6EE7B7]"
                          : "border-[#DCE8E3] bg-[#F7FBF9] text-[#465952] dark:border-[#1E3B32] dark:bg-[#11261F] dark:text-[#A0B3AC]"
                      }`}
                    >
                      <span
                        className={`text-[10px] font-bold uppercase tracking-[0.16em] ${
                          isOngoing
                            ? "text-[#A7F3D0]"
                            : isCompleted
                            ? "text-[#15966F] dark:text-[#34D399]"
                            : "text-[#687A73]"
                        }`}
                      >
                        {month}
                      </span>
                      <span className="mt-0.5 font-heading text-2xl font-bold leading-none">
                        {day}
                      </span>
                      <span
                        className={`mt-1 text-[10px] font-semibold ${
                          isOngoing ? "text-white/80" : "text-[#687A73] dark:text-[#8DA39B]"
                        }`}
                      >
                        {year}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 font-heading text-[11px] font-bold uppercase tracking-wider text-[#687A73] dark:text-[#8DA39B]">
                          <Icon className="h-3.5 w-3.5 text-[#15966F] dark:text-[#34D399]" />
                          <span>Stage {stepNum}</span>
                        </span>

                        {isCompleted && (
                          <span className="inline-flex items-center gap-1 rounded-full border border-[#15966F]/20 bg-[#EBF7F1] px-2.5 py-0.5 text-[11px] font-bold text-[#0B7453] dark:border-[#34D399]/25 dark:bg-[#132E26] dark:text-[#6EE7B7]">
                            <CheckCircle2 className="h-3 w-3" />
                            <span>Completed</span>
                          </span>
                        )}
                        {isOngoing && (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#073D32] px-3 py-0.5 text-[11px] font-bold text-white shadow-xs dark:bg-[#15966F]">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#6EE7B7]" />
                            <span>Ongoing Now</span>
                          </span>
                        )}
                        {!isCompleted && !isOngoing && (
                          <span className="inline-flex items-center gap-1 rounded-full border border-[#DCE8E3] bg-[#F7FBF9] px-2.5 py-0.5 text-[11px] font-semibold text-[#5C6B64] dark:border-[#1E3B32] dark:bg-[#11261F] dark:text-[#A0B3AC]">
                            <Clock className="h-3 w-3" />
                            <span>Upcoming</span>
                          </span>
                        )}
                      </div>

                      <h3 className="mt-2.5 font-heading text-[18.5px] font-bold tracking-tight text-[#0E241E] sm:text-[19.5px] dark:text-white">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 text-[13.5px] leading-[1.65] text-[#5C6B64] sm:text-[14px] dark:text-[#A0B3AC]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Candidate Reminders & Next-Step Strip */}
      <section className="border-t border-[#E3ECE8] bg-[#FAFCFB] py-16 md:py-20 dark:border-[#162E26] dark:bg-[#081511]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                icon: FileCheck2,
                title: "Keep Documents Verified",
                description:
                  "Ensure Class 10/12 marksheets, ID proof, and income certificates are scanned and ready before counseling.",
              },
              {
                icon: BellRing,
                title: "Track Merit List Updates",
                description:
                  "Shortlisted scholars receive SMS and email notifications along with dashboard updates for every stage.",
              },
              {
                icon: ShieldCheck,
                title: "Direct Grant Disbursal",
                description:
                  "Approved scholarship amounts are transferred directly without middlemen or processing charges.",
              },
            ].map((note, idx) => {
              const NoteIcon = note.icon;
              return (
                <ScrollReveal key={note.title} delay={idx * 0.06}>
                  <div className="h-full rounded-[22px] border border-[#DCE8E3] bg-white p-6 shadow-2xs dark:border-[#1E3B32] dark:bg-[#0D1E19]">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#EBF7F1] text-[#15966F] dark:bg-[#132E26] dark:text-[#34D399]">
                      <NoteIcon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-heading text-[16.5px] font-bold text-[#0E241E] dark:text-white">
                      {note.title}
                    </h3>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#5C6B64] dark:text-[#A0B3AC]">
                      {note.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
