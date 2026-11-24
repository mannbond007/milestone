import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { FaqShowcase } from "@/components/faqs/faq-showcase";
import { faqs } from "@/constants/home-data";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about the Milestone Scholarship Program, including eligibility, application process, documents, and disbursement.",
};

const categories = [
  {
    name: "Get to Know MileStone Better",
    shortLabel: "Overview",
    questions: faqs,
  },
  {
    name: "Questions About Eligibility",
    shortLabel: "Eligibility",
    questions: [
      {
        question: "What is the minimum percentage required?",
        answer:
          "A minimum of 55% in your last qualifying examination is required. Some scholarship tracks may require higher marks between 60% and 70%.",
      },
      {
        question: "Is there an age limit?",
        answer:
          "Applicants should be between 16 and 30 years of age at the time of application.",
      },
      {
        question: "Can students from any state apply?",
        answer:
          "Yes, the Milestone Scholarship is open to students from all states and union territories of India.",
      },
      {
        question: "Are both merit and need-based grants available?",
        answer:
          "Yes. We award scholarships based on academic merit, assessment test performance, and documented family financial need.",
      },
    ],
  },
  {
    name: "Application & Disbursement",
    shortLabel: "Application",
    questions: [
      {
        question: "How long does the review process take?",
        answer:
          "Applications are reviewed within 7 to 10 working days after submission. You will receive updates via email and your student dashboard.",
      },
      {
        question: "Can I edit my application after submission?",
        answer:
          "Once submitted, applications cannot be edited directly. However, you can contact our support team for corrections within 48 hours of submission.",
      },
      {
        question: "What happens if my application is rejected?",
        answer:
          "You can reapply in the next scholarship cycle. Our counselors also provide constructive feedback to help strengthen your next application.",
      },
      {
        question: "How is the scholarship amount disbursed?",
        answer:
          "Approved scholarship grants are disbursed directly toward verified tuition or hostel fees with complete transparency and zero middlemen.",
      },
    ],
  },
];

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-white pb-20 pt-24 md:pb-24 md:pt-28 dark:bg-[#07120F]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#15966F]/20 bg-[#EBF7F1] px-3.5 py-1.5 dark:border-[#34D399]/25 dark:bg-[#112B23]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#15966F] dark:bg-[#34D399]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#073D32] dark:text-[#6EE7B7]">
              Help Center &amp; FAQs
            </span>
          </div>
          <h1 className="mt-4 font-heading text-3xl font-bold tracking-[-0.028em] text-[#0E241E] sm:text-4xl lg:text-[44px] dark:text-white">
            Frequently Asked{" "}
            <span className="font-editorial italic font-normal text-[#15966F] dark:text-[#34D399]">
              Questions
            </span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-[#5C6B64] dark:text-[#A0B3AC]">
            Find quick, clear answers about scholarships, eligibility, counseling, and disbursements.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <FaqShowcase categories={categories} showSearch />
        </ScrollReveal>
      </div>
    </div>
  );
}
