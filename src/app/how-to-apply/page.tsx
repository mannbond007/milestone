import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Camera,
  FileCheck2,
  FileText,
  GraduationCap,
  IdCard,
  MapPin,
  ShieldCheck,
  Wallet,
} from "lucide-react";

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
  {
    title: "Aadhaar Card",
    note: "Clear front & back scan",
    required: true,
    icon: IdCard,
  },
  {
    title: "Class 10th Marksheet",
    note: "Board marksheet / certificate",
    required: true,
    icon: GraduationCap,
  },
  {
    title: "Class 12th Marksheet",
    note: "Senior secondary record",
    required: false,
    tag: "If Applicable",
    icon: GraduationCap,
  },
  {
    title: "Passport Photograph",
    note: "Recent clear color photo",
    required: true,
    icon: Camera,
  },
  {
    title: "Income Certificate",
    note: "Issued by competent authority",
    required: true,
    icon: Wallet,
  },
  {
    title: "Caste Certificate",
    note: "Category verification proof",
    required: false,
    tag: "If Applicable",
    icon: FileText,
  },
  {
    title: "Domicile Certificate",
    note: "State residency proof",
    required: true,
    icon: MapPin,
  },
  {
    title: "College Admission Letter",
    note: "Provisional or final allotment",
    required: false,
    tag: "If Available",
    icon: Building2,
  },
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
        <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Desktop Central Vertical Spine */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-4 left-5 top-4 w-[1.5px] bg-gradient-to-b from-[#15966F]/25 via-[#073D32]/50 to-[#15966F]/35 md:left-1/2 md:-translate-x-1/2 dark:from-[#34D399]/25 dark:via-[#34D399]/55 dark:to-[#34D399]/30"
            />

            {/* Timeline Steps */}
            <div className="space-y-6 md:space-y-8">
              {steps.map((step, index) => {
                const isLeft = index % 2 === 0;
                const cardContent = (
                  <div className="group relative overflow-hidden rounded-[22px] border border-[#E2EEE9] bg-white px-6 py-6 shadow-[0_16px_40px_-20px_rgba(7,61,50,0.14),0_2px_6px_-2px_rgba(7,61,50,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#15966F]/35 hover:shadow-[0_24px_52px_-18px_rgba(7,61,50,0.2)] sm:px-7 sm:py-6.5 dark:border-[#1E3B32] dark:bg-[#0D1E19]">
                    <div className="flex items-center gap-5">
                      {/* Full-Resolution Ultra-HD Floating 3D Icon */}
                      <div className="relative h-16 w-16 shrink-0 transition-transform duration-300 group-hover:scale-105 sm:h-[72px] sm:w-[72px] dark:rounded-2xl dark:bg-white dark:p-1.5">
                        <Image
                          src={step.iconSrc}
                          alt={step.title}
                          width={180}
                          height={180}
                          quality={100}
                          unoptimized
                          className="h-full w-full object-contain mix-blend-multiply"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                          <h2 className="font-heading text-[17px] font-bold tracking-tight text-[#0E241E] dark:text-white">
                            {step.title}
                          </h2>
                          <span className="text-[11.5px] font-semibold text-[#15966F] dark:text-[#34D399]">
                            {step.meta}
                          </span>
                        </div>
                        <p className="mt-1.5 text-[14px] leading-[1.68] text-[#5B6E66] dark:text-[#A0B3AC]">
                          {step.description}
                        </p>
                      </div>
                    </div>
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
                          ? "md:pr-4"
                          : "hidden md:flex md:items-center md:justify-end md:pr-5"
                      }
                    >
                      {isLeft ? (
                        cardContent
                      ) : (
                        <div className="flex items-center gap-4 text-right">
                          <div>
                            <div className="font-heading text-[13.5px] font-bold uppercase tracking-[0.2em] text-[#28453C] dark:text-[#A7D7C5]">
                              Step {step.number}
                            </div>
                            <div className="mt-0.5 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-[#15966F] dark:text-[#34D399]">
                              {step.stage}
                            </div>
                          </div>
                          <span
                            aria-hidden="true"
                            className="h-11 w-px border-r border-dashed border-[#B2CFC3] dark:border-[#254A3E]"
                          />
                        </div>
                      )}
                    </div>

                    {/* CENTER NODE (Mobile: pinned left on spine; Desktop: exact center) */}
                    <div className="absolute left-5 top-7 flex -translate-x-1/2 items-center justify-center md:static md:translate-x-0">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#CBE2D8] bg-white shadow-[0_6px_16px_-6px_rgba(7,61,50,0.2)] ring-4 ring-[#E5F4EC] dark:border-[#24493D] dark:bg-[#0D1E19] dark:ring-[#0A1D17]">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#073D32] dark:bg-[#34D399]" />
                      </span>
                    </div>

                    {/* RIGHT SLOT (Desktop: Stage Label on odd steps, Card on even steps; Mobile: always renders even-step card) */}
                    <div
                      className={
                        isLeft
                          ? "hidden md:flex md:items-center md:justify-start md:pl-5"
                          : "md:pl-4"
                      }
                    >
                      {isLeft ? (
                        <div className="flex items-center gap-4 text-left">
                          <span
                            aria-hidden="true"
                            className="h-11 w-px border-l border-dashed border-[#B2CFC3] dark:border-[#254A3E]"
                          />
                          <div>
                            <div className="font-heading text-[13.5px] font-bold uppercase tracking-[0.2em] text-[#28453C] dark:text-[#A7D7C5]">
                              Step {step.number}
                            </div>
                            <div className="mt-0.5 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-[#15966F] dark:text-[#34D399]">
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

      {/* Required Documents Architectural Readiness Hub */}
      <section className="relative z-10">
        <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[28px] border border-[#D4E6DF] border-b-[3px] border-b-[#BFD8CE] bg-white shadow-[0_32px_72px_-26px_rgba(7,61,50,0.16),inset_0_1px_0_rgba(255,255,255,1)] dark:border-[#1E3B32] dark:border-b-[#122922] dark:bg-[#0D1E19]">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* LEFT (4 Cols): Deep Forest Editorial Summary, Specs & Primary CTA */}
              <div className="relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#06362C] via-[#0B4F40] to-[#116955] p-7 text-white sm:p-9 lg:col-span-4">
                {/* Subtle Architectural Micro-Dot Pattern */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
                    backgroundSize: "18px 18px",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full bg-[#34D399]/20 blur-3xl"
                />

                <div className="relative z-10">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#86EFAC]">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Document Checklist
                  </span>

                  <h2 className="mt-4 font-heading text-2xl font-extrabold tracking-[-0.025em] text-white sm:text-[28px] sm:leading-[1.16]">
                    Required{" "}
                    <span className="font-editorial font-normal italic text-[#86EFAC]">
                      Documents
                    </span>
                  </h2>

                  <p className="mt-2.5 text-[13.5px] leading-[1.68] text-white/80">
                    Keep clear digital scans ready before starting your application so verification completes smoothly without delays.
                  </p>

                  {/* Upload Specifications Panel */}
                  <div className="mt-6 space-y-2.5 rounded-2xl border border-white/15 bg-white/[0.07] p-4 backdrop-blur-md">
                    <div className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#86EFAC]">
                      Upload Guidelines
                    </div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[12.5px]">
                      <span className="text-white/70">Accepted Formats</span>
                      <span className="font-semibold text-white">PDF, JPG, PNG</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[12.5px]">
                      <span className="text-white/70">Max File Size</span>
                      <span className="font-semibold text-white">2 MB per file</span>
                    </div>
                    <div className="flex items-center justify-between text-[12.5px]">
                      <span className="text-white/70">Verification</span>
                      <span className="font-semibold text-[#86EFAC]">100% Digital</span>
                    </div>
                  </div>
                </div>

                {/* Primary & Secondary Actions */}
                <div className="relative z-10 mt-7 flex flex-col gap-2.5">
                  <Link
                    href="/sign-up"
                    className="group flex w-full items-center justify-between rounded-full bg-white py-2.5 pl-5 pr-2.5 text-[13.5px] font-bold text-[#073D32] shadow-[0_14px_28px_-10px_rgba(0,0,0,0.38)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#F2FAF6]"
                  >
                    <span>Start Your Application</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#073D32] text-white transition-transform duration-200 group-hover:translate-x-0.5">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>

                  <Link
                    href="/contact"
                    className="flex w-full items-center justify-center rounded-full border border-white/20 bg-white/[0.06] px-5 py-2.5 text-[13px] font-semibold text-white/90 transition-colors hover:bg-white/15 hover:text-white"
                  >
                    Speak with a Counselor
                  </Link>
                </div>
              </div>

              {/* RIGHT (8 Cols): Structured 2-Column Document Directory */}
              <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-8 lg:p-9">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-5">
                    <div>
                      <h3 className="font-heading text-[18px] font-bold tracking-tight text-[#0E241E] dark:text-white">
                        Verification Portfolio
                      </h3>
                      <p className="mt-0.5 text-[13px] text-[#5C6B64] dark:text-[#A0B3AC]">
                        5 mandatory items &bull; 3 conditional documents based on category
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#DCECE5] bg-[#F4FAF7] px-3 py-1 text-[11px] font-bold text-[#073D32] dark:border-[#1E3B32] dark:bg-[#132E26] dark:text-[#6EE7B7]">
                      <FileCheck2 className="h-3.5 w-3.5 text-[#15966F] dark:text-[#34D399]" />
                      8 Documents Total
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {documents.map((doc) => {
                      const DocIcon = doc.icon;
                      return (
                        <div
                          key={doc.title}
                          className="group flex items-start justify-between gap-3 rounded-2xl border border-[#E3EFEA] bg-[#F8FCFA] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#15966F]/40 hover:bg-white hover:shadow-[0_12px_26px_-14px_rgba(7,61,50,0.16)] dark:border-[#18332B] dark:bg-[#0A1713] dark:hover:border-[#34D399]/35 dark:hover:bg-[#10251F]"
                        >
                          <div className="flex items-start gap-3 min-w-0">
                            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#15966F]/15 bg-[#EBF7F1] text-[#073D32] transition-colors group-hover:bg-[#073D32] group-hover:text-white dark:border-[#34D399]/20 dark:bg-[#132E26] dark:text-[#34D399]">
                              <DocIcon className="h-4 w-4" />
                            </span>
                            <div className="min-w-0">
                              <div className="font-heading text-[14px] font-bold leading-snug text-[#0E241E] dark:text-white">
                                {doc.title}
                              </div>
                              <div className="mt-0.5 text-[12px] text-[#60736B] dark:text-[#8DA29A]">
                                {doc.note}
                              </div>
                            </div>
                          </div>

                          <span
                            className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                              doc.required
                                ? "bg-[#E6F6EE] text-[#073D32] dark:bg-[#133529] dark:text-[#6EE7B7]"
                                : "bg-[#EEF3F1] text-[#5B6E66] dark:bg-[#172822] dark:text-[#8DA29A]"
                            }`}
                          >
                            {doc.required ? "Required" : doc.tag}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Security & Privacy Note */}
                <div className="mt-6 flex items-center gap-2.5 rounded-xl border border-[#E5F0EB] bg-[#F5FAF8] px-4 py-3 text-[12.5px] text-[#4E625A] dark:border-[#18332B] dark:bg-[#0A1713] dark:text-[#A0B3AC]">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-[#15966F] dark:text-[#34D399]" />
                  <span>
                    All uploaded records are encrypted and reviewed exclusively by the MileStone Scholarship Evaluation Committee.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
