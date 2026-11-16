import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Calculator,
  Cpu,
  Crown,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  Monitor,
  Scale,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

interface DisciplineCategory {
  id: string;
  title: string;
  courses: string;
  amount: string;
  href: string;
  image: string;
  icon: LucideIcon;
  featured?: boolean;
}

const scholarshipDisciplines: DisciplineCategory[] = [
  {
    id: "medical",
    title: "Medical",
    courses: "MBBS (India & Abroad), BDS, BAMS, BHMS & BUMS",
    amount: "Up to ₹5,00,000",
    href: "/scholarships#mbbs",
    image: "/images/categories/medical.jpg",
    icon: Stethoscope,
    featured: true,
  },
  {
    id: "engineering",
    title: "Engineering",
    courses: "B.Tech, B.E. & Emerging Technical Disciplines",
    amount: "Up to ₹4,00,000",
    href: "/scholarships#btech",
    image: "/images/categories/engineering.jpg",
    icon: Cpu,
  },
  {
    id: "law",
    title: "Law",
    courses: "BA LLB, BBA LLB & 3-Year LLB",
    amount: "Up to ₹3,00,000",
    href: "/scholarships#law",
    image: "/images/categories/law.jpg",
    icon: Scale,
  },
  {
    id: "management",
    title: "Management",
    courses: "BBA, MBA & Post-Graduate PGDM",
    amount: "Up to ₹2,00,000",
    href: "/scholarships#bba",
    image: "/images/categories/management.jpg",
    icon: Briefcase,
  },
  {
    id: "nursing",
    title: "Nursing",
    courses: "B.Sc Nursing & Patient Care",
    amount: "Up to ₹2,00,000",
    href: "/scholarships#nursing",
    image: "/images/categories/nursing.jpg",
    icon: HeartPulse,
  },
  {
    id: "technology",
    title: "Technology",
    courses: "BCA, Computer Science & AI",
    amount: "Up to ₹2,00,000",
    href: "/scholarships#bca",
    image: "/images/categories/technology.jpg",
    icon: Monitor,
  },
  {
    id: "professional",
    title: "Professional Courses",
    courses: "Pharmacy, Agriculture, Design & NEET/JEE",
    amount: "Up to ₹3,00,000",
    href: "/scholarships#pharmacy",
    image: "/images/categories/professional.jpg",
    icon: GraduationCap,
  },
  {
    id: "science",
    title: "Science",
    courses: "B.Sc Pure Sciences, Biotech & Research",
    amount: "Up to ₹2,00,000",
    href: "/scholarships#bsc",
    image: "/images/categories/science.jpg",
    icon: FlaskConical,
  },
  {
    id: "commerce",
    title: "Commerce",
    courses: "B.Com, Finance, Accounting & CA",
    amount: "Up to ₹1,50,000",
    href: "/scholarships#bcom",
    image: "/images/categories/commerce.jpg",
    icon: Calculator,
  },
  {
    id: "arts",
    title: "Arts",
    courses: "B.A. Humanities, Journalism & Media",
    amount: "Up to ₹1,50,000",
    href: "/scholarships#ba",
    image: "/images/categories/arts.jpg",
    icon: BookOpen,
  },
];

function GrantPill({ amount }: { amount: string }) {
  const [prefix, value] = amount.startsWith("Up to ")
    ? ["Up to", amount.replace("Up to ", "")]
    : ["Grant", amount];

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/95 px-3 py-1.5 shadow-[0_6px_18px_rgba(7,61,50,0.14)] backdrop-blur-md">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E8F5EF] text-[#15966F]">
        <GraduationCap className="h-3.5 w-3.5" />
      </span>
      <div className="leading-tight">
        <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#687A73]">
          {prefix}
        </span>
        <span className="block font-heading text-[13px] font-bold tracking-tight text-[#073D32]">
          {value}
        </span>
      </div>
    </div>
  );
}

function DisciplineCard({ category }: { category: DisciplineCategory }) {
  const Icon = category.icon;

  return (
    <Link
      href={category.href}
      className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-[#DCE8E3] bg-white shadow-[0_8px_24px_-12px_rgba(7,61,50,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-[#15966F]/45 hover:shadow-[0_20px_40px_-16px_rgba(7,61,50,0.18)] dark:border-[#1E3B32] dark:bg-[#0D1E19] dark:hover:border-[#34D399]/40"
    >
      {/* Top discipline photo */}
      <div className="relative h-[156px] w-full overflow-hidden bg-[#E8F5EF] dark:bg-[#132E26]">
        <img
          src={category.image}
          alt={`${category.title} scholarship students`}
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        <div className="absolute right-3 top-3 z-10">
          <GrantPill amount={category.amount} />
        </div>
      </div>

      {/* Card content */}
      <div className="flex flex-1 flex-col justify-between px-5 pb-5 pt-4">
        <div>
          <div className="relative z-10 -mt-9 mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-white bg-[#E8F5EF] text-[#15966F] shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5 dark:border-[#0D1E19] dark:bg-[#132E26] dark:text-[#34D399]">
            <Icon className="h-5 w-5" />
          </div>

          <h3 className="font-heading text-[18px] font-bold leading-snug tracking-tight text-[#142C25] dark:text-white">
            {category.title}
          </h3>

          <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#687A73] dark:text-[#A0B3AC]">
            {category.courses}
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-[#EFF5F2] pt-3.5 dark:border-[#18332B]">
          <span className="text-[13px] font-semibold text-[#15966F] transition-colors group-hover:text-[#073D32] dark:text-[#34D399] dark:group-hover:text-white">
            Explore Scholarships
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F1F8F5] text-[#15966F] transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-[#15966F] group-hover:text-white dark:bg-[#143329] dark:text-[#34D399] dark:group-hover:bg-[#34D399] dark:group-hover:text-[#073D32]">
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function FeaturedMedicalCard({ category }: { category: DisciplineCategory }) {
  const Icon = category.icon;

  return (
    <Link
      href={category.href}
      className="group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-[24px] border border-[#15966F]/35 bg-gradient-to-br from-[#073D32] via-[#0B5243] to-[#116E59] text-white shadow-[0_18px_40px_-14px_rgba(7,61,50,0.38)] transition-all duration-300 hover:-translate-y-1 hover:border-[#34D399]/60 hover:shadow-[0_26px_52px_-16px_rgba(21,150,111,0.45)] sm:flex-row"
    >
      {/* Subtle decorative glow */}
      <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[#15966F]/25 blur-3xl transition-opacity duration-500 group-hover:opacity-90" />

      {/* Left column: icon, featured badge, title, courses, pill CTA */}
      <div className="relative z-10 flex flex-1 flex-col justify-between p-6 sm:max-w-[56%] sm:p-7">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#6EE7B7] backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
              <Icon className="h-5 w-5" />
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FBBF24]/35 bg-[#FBBF24]/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#FDE68A]">
              <Crown className="h-3 w-3" />
              Featured
            </span>
          </div>

          <h3 className="mt-5 font-heading text-[26px] font-bold leading-tight tracking-tight text-white sm:text-[28px]">
            {category.title}
          </h3>

          <p className="mt-2 max-w-xs text-[14px] leading-relaxed text-[#D1FAE5]/90">
            {category.courses}
          </p>
        </div>

        <div className="mt-6">
          <span className="inline-flex items-center gap-3 rounded-full bg-white py-2 pl-4 pr-2 text-[13.5px] font-semibold text-[#073D32] shadow-md transition-all duration-300 group-hover:bg-[#E8F5EF]">
            <span>Explore Scholarships</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#073D32] text-white transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </span>
        </div>
      </div>

      {/* Right column: portrait photo blended into deep forest green */}
      <div className="relative h-56 w-full shrink-0 overflow-hidden sm:h-auto sm:w-[46%]">
        <img
          src={category.image}
          alt="Medical scholarship student"
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        {/* Smooth gradient fade into left green background */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09463A] via-transparent to-transparent sm:bg-gradient-to-r sm:from-[#0C5747] sm:via-[#0C5747]/35 sm:to-transparent" />
      </div>

      {/* Floating top-right grant pill */}
      <div className="absolute right-4 top-4 z-20">
        <GrantPill amount={category.amount} />
      </div>
    </Link>
  );
}

export function ScholarshipCategories() {
  const [medical, engineering, law, management, nursing, technology, professional, ...more] =
    scholarshipDisciplines;

  return (
    <section
      id="disciplines"
      className="relative overflow-hidden bg-[#FAFCFB] py-16 sm:py-20 dark:bg-[#07120F]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#15966F]/20 bg-[#E8F5EF] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#073D32] dark:border-[#34D399]/25 dark:bg-[#112B23] dark:text-[#6EE7B7]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#15966F] dark:bg-[#34D399]" />
            Academic Disciplines
          </div>

          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-[#142C25] sm:text-4xl lg:text-[42px] lg:leading-[1.15] dark:text-white">
            Find the Right Path for{" "}
            <span className="font-editorial italic font-normal text-[#15966F] dark:text-[#34D399]">
              Your Future
            </span>
          </h2>

          <p className="mt-3 text-[15.5px] leading-relaxed text-[#687A73] sm:text-base dark:text-[#A0B3AC]">
            Explore scholarship opportunities across diverse academic disciplines.
          </p>
        </div>

        {/* Row 1: Featured Medical (6 cols) + Engineering (3 cols) + Law (3 cols) */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
          <div className="md:col-span-2 lg:col-span-6">
            <FeaturedMedicalCard category={medical} />
          </div>
          <div className="lg:col-span-3">
            <DisciplineCard category={engineering} />
          </div>
          <div className="lg:col-span-3">
            <DisciplineCard category={law} />
          </div>
        </div>

        {/* Row 2: Management, Nursing, Technology, Professional Courses */}
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[management, nursing, technology, professional].map((category) => (
            <DisciplineCard key={category.id} category={category} />
          ))}
        </div>

        {/* Row 3: Science, Commerce, Arts */}
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {more.map((category) => (
            <DisciplineCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
