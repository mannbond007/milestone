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
  { name: "General", questions: faqs },
  {
    name: "Eligibility",
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
    ],
  },
  {
    name: "Application",
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
    ],
  },
];

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-[#FAFCFB] pb-20 pt-28 md:pb-28 md:pt-36 dark:bg-[#07120F]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <FaqShowcase categories={categories} showCategoryTabs />
        </ScrollReveal>
      </div>
    </div>
  );
}
