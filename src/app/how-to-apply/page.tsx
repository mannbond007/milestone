import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Apply",
  description:
    "Step-by-step guide on how to apply for the MileStone Scholarship Program.",
};

const steps = [
  {
    number: "01",
    stage: "Registration",
    meta: "2 Mins Online",
    iconSrc: "/images/how-to-apply/step-1-account.jpg",
    title: "Create Your Account",
    description:
      "Register on the MileStone portal using your email or Google account and set up your student profile.",
  },
  {
    number: "02",
    stage: "Application",
    meta: "Personal & Academic",
    iconSrc: "/images/how-to-apply/step-2-form.jpg",
    title: "Fill Application Form",
    description:
      "Complete the guided application form with your academic records, preferred course pathway, and personal details.",
  },
  {
    number: "03",
    stage: "Documentation",
    meta: "Digital Upload",
    iconSrc: "/images/how-to-apply/step-3-upload.jpg",
    title: "Upload Documents",
    description:
      "Submit clear scans of your Aadhaar card, marksheets, passport photograph, and applicable eligibility certificates.",
  },
  {
    number: "04",
    stage: "Assessment",
    meta: "Online Test",
    iconSrc: "/images/how-to-apply/step-4-test.jpg",
    title: "Take Scholarship Test",
    description:
      "Appear for the online MileStone scholarship assessment tailored to your chosen academic stream and qualification.",
  },
  {
    number: "05",
    stage: "Evaluation",
    meta: "7 to 10 Working Days",
    iconSrc: "/images/how-to-apply/step-5-review.jpg",
    title: "Application Review",
    description:
      "Our academic committee verifies your documents, reviews test performance, and shortlists eligible scholars.",
  },
  {
    number: "06",
    stage: "Disbursement",
    meta: "Direct Grant",
    iconSrc: "/images/how-to-apply/step-6-award.jpg",
    title: "Receive Scholarship",
    description:
      "Approved candidates receive official scholarship confirmation and structured financial disbursement.",
  },
];

const documents = [
  "Aadhaar Card (front & back)",
  "Class 10th Marksheet",
  "Class 12th Marksheet (if applicable)",
  "Passport-size Photograph",
  "Income Certificate",
  "Caste Certificate (if applicable)",
  "Domicile Certificate",
  "College Admission Letter (if available)",
];

export default function HowToApplyPage() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#EDF6F2] via-[#F6FBF8] to-[#ECF6F1] pt-28 pb-24 sm:pt-32 dark:from-[#07120F] dark:via-[#091814] dark:to-[#07120F]">
      {/* Subtle Ambient Top Radial Highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[440px] bg-[radial-gradient(ellipse_75%_60%_at_50%_0%,rgba(21,150,111,0.11),transparent_72%)] dark:bg-[radial-gradient(ellipse_75%_60%_at_50%_0%,rgba(52,211,153,0.09),transparent_72%)]"
      />

      {/* Centered Editorial Header */}
      <section className="relative z-10 pb-14 sm:pb-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4E6DF] bg-white/90 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#073D32] shadow-2xs backdrop-blur-sm dark:border-[#1E3B32] dark:bg-[#0D1E19] dark:text-[#6EE7B7]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#15966F] shadow-[0_0_0_3px_rgba(21,150,111,0.18)]" />
            <span>Application Guide</span>
            <span className="text-[#B8CFC6] dark:text-[#2A4E43]">&bull;</span>
            <span className="text-[#15966F] dark:text-[#34D399]">6 Simple Steps</span>
          </div>

          <h1 className="mt-5 font-heading text-3xl font-extrabold tracking-[-0.03em] text-[#0E241E] sm:text-4xl lg:text-[44px] lg:leading-[1.12] dark:text-white">
            Simple Application{" "}
            <span className="font-editorial font-normal italic text-[#15966F] dark:text-[#34D399]">
              Flow
            </span>
          </h1>

          <p className="mx-auto mt-3.5 max-w-xl text-[15px] leading-[1.72] text-[#52635C] sm:text-[16px] dark:text-[#A0B3AC]">
            Follow six clear, structured steps from student registration to scholarship award. Every stage is completely online and guided.
          </p>
        </div>
      </section>

      {/* Alternating Centered Vertical Timeline */}
      <section className="relative z-10 pb-20 sm:pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Desktop Central Vertical Spine */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-4 left-5 top-4 w-[2px] bg-gradient-to-b from-[#15966F]/25 via-[#073D32]/55 to-[#15966F]/45 md:left-1/2 md:-translate-x-1/2 dark:from-[#34D399]/25 dark:via-[#34D399]/55 dark:to-[#34D399]/30"
            />

            {/* Timeline Steps */}
            <div className="space-y-8 md:space-y-10">
              {steps.map((step, index) => {
                const isLeft = index % 2 === 0;
                const cardContent = (
                  <div className="group relative overflow-hidden rounded-[22px] border border-white/95 bg-white p-6 shadow-[0_20px_48px_-22px_rgba(7,61,50,0.16),0_4px_12px_-4px_rgba(7,61,50,0.05),inset_0_1px_0_rgba(255,255,255,1)] ring-1 ring-[#DCECE5] transition-all duration-300 hover:-translate-y-1 hover:ring-[#15966F]/40 hover:shadow-[0_28px_60px_-20px_rgba(7,61,50,0.22)] dark:border-[#1E3B32] dark:bg-[#0D1E19] dark:ring-[#1E3B32]">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#073D32] via-[#15966F] to-[#34D399] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3.5">
                        <span className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[#DCECE5] bg-[#F5FAF8] p-1.5 shadow-[0_8px_18px_-10px_rgba(7,61,50,0.2),inset_0_1px_0_rgba(255,255,255,1)] transition-transform duration-300 group-hover:scale-105 dark:border-white/10 dark:bg-white">
                          <Image
                            src={step.iconSrc}
                            alt={step.title}
                            width={56}
                            height={56}
                            quality={95}
                            className="h-full w-full object-contain mix-blend-multiply"
                          />
                        </span>
                        <div>
                          <h2 className="font-heading text-[16.5px] font-bold tracking-tight text-[#0E241E] dark:text-white">
                            {step.title}
                          </h2>
                          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#15966F] md:hidden dark:text-[#34D399]">
                            Step {step.number} &bull; {step.stage}
                          </span>
                        </div>
                      </div>
                      <span className="shrink-0 rounded-full border border-[#E2EFEA] bg-[#F5FAF8] px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-[#566B63] dark:border-[#1E3B32] dark:bg-[#132E26] dark:text-[#8DA29A]">
                        {step.meta}
                      </span>
                    </div>
                    <p className="mt-3.5 text-[13.5px] leading-[1.68] text-[#566961] dark:text-[#A0B3AC]">
                      {step.description}
                    </p>
                  </div>
                );

                return (
                  <div
                    key={step.number}
                    className="relative grid grid-cols-1 items-center gap-4 pl-14 md:grid-cols-[1fr_76px_1fr] md:gap-0 md:pl-0"
                  >
                    {/* LEFT SLOT (Desktop: Card on odd steps, Stage Label on even steps) */}
                    <div
                      className={
                        isLeft
                          ? "md:pr-5"
                          : "hidden md:flex md:items-center md:justify-end md:pr-6"
                      }
                    >
                      {isLeft ? (
                        cardContent
                      ) : (
                        <div className="flex items-center gap-4 text-right">
                          <div>
                            <div className="font-heading text-[15px] font-bold uppercase tracking-[0.18em] text-[#2B4940] dark:text-[#A7D7C5]">
                              Step {step.number}
                            </div>
                            <div className="mt-0.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#15966F] dark:text-[#34D399]">
                              {step.stage}
                            </div>
                          </div>
                          <span
                            aria-hidden="true"
                            className="h-12 w-px border-r border-dashed border-[#A9C9BC] dark:border-[#254A3E]"
                          />
                        </div>
                      )}
                    </div>

                    {/* CENTER NODE (Mobile: pinned left on spine; Desktop: exact center) */}
                    <div className="absolute left-5 top-8 flex -translate-x-1/2 items-center justify-center md:static md:translate-x-0">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#CBE2D8] bg-white/95 shadow-[0_8px_20px_-6px_rgba(7,61,50,0.22)] ring-4 ring-[#E5F4EC] dark:border-[#24493D] dark:bg-[#0D1E19] dark:ring-[#0A1D17]">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#073D32] dark:bg-[#34D399]" />
                      </span>
                    </div>

                    {/* RIGHT SLOT (Desktop: Stage Label on odd steps, Card on even steps; Mobile: always renders even-step card) */}
                    <div
                      className={
                        isLeft
                          ? "hidden md:flex md:items-center md:justify-start md:pl-6"
                          : "md:pl-5"
                      }
                    >
                      {isLeft ? (
                        <div className="flex items-center gap-4 text-left">
                          <span
                            aria-hidden="true"
                            className="h-12 w-px border-l border-dashed border-[#A9C9BC] dark:border-[#254A3E]"
                          />
                          <div>
                            <div className="font-heading text-[15px] font-bold uppercase tracking-[0.18em] text-[#2B4940] dark:text-[#A7D7C5]">
                              Step {step.number}
                            </div>
                            <div className="mt-0.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#15966F] dark:text-[#34D399]">
                              {step.stage}
                            </div>
                          </div>
                        </div>
                      ) : (
                        cardContent
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Terminal Arrowhead on the Spine */}
            <div
              aria-hidden="true"
              className="mt-6 flex pl-[13px] md:justify-center md:pl-0"
            >
              <span className="h-0 w-0 border-x-[6px] border-t-[9px] border-x-transparent border-t-[#073D32] dark:border-t-[#34D399]" />
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents Checklist & Closing CTA */}
      <section className="relative z-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[28px] border border-[#D4E6DF] border-b-[3px] border-b-[#BFD8CE] bg-white p-7 shadow-[0_28px_64px_-24px_rgba(7,61,50,0.14),inset_0_1px_0_rgba(255,255,255,1)] sm:p-10 dark:border-[#1E3B32] dark:border-b-[#122922] dark:bg-[#0D1E19]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#15966F]/40 to-transparent"
            />

            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#15966F] dark:text-[#34D399]">
                <ShieldCheck className="h-3.5 w-3.5" />
                Document Checklist
              </span>
              <h2 className="mt-2 font-heading text-2xl font-extrabold tracking-[-0.025em] text-[#0E241E] sm:text-[28px] dark:text-white">
                Required Documents
              </h2>
              <p className="mx-auto mt-1.5 max-w-lg text-[14px] text-[#5C6B64] dark:text-[#A0B3AC]">
                Keep clear digital copies ready before starting your application for a smooth, uninterrupted submission.
              </p>
            </div>

            <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {documents.map((doc) => (
                <li
                  key={doc}
                  className="flex items-center gap-3 rounded-xl border border-[#E6F0EC] bg-[#F6FAF8] px-4 py-3 text-[13.5px] font-medium text-[#1D352E] transition-colors hover:border-[#15966F]/35 hover:bg-white dark:border-[#18332B] dark:bg-[#0A1713] dark:text-[#D5E6DF]"
                >
                  <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-[#15966F] dark:text-[#34D399]" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
              <Link
                href="/sign-up"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#073D32] to-[#11644E] py-3 pl-6 pr-3 text-[14px] font-semibold text-white shadow-[0_14px_30px_-8px_rgba(7,61,50,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:from-[#0A4E3F] hover:to-[#158062]"
              >
                <span>Start Your Application</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#073D32] transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-[#CFE2DA] bg-white px-5 py-3 text-[13.5px] font-semibold text-[#073D32] shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#15966F]/50 hover:text-[#15966F] dark:border-[#1E3B32] dark:bg-[#132E26] dark:text-white"
              >
                Speak with a Counselor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
