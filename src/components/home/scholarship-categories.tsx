"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
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

function GrantBadge({ amount, featured = false }: { amount: string; featured?: boolean }) {
  return (
    <span
      className={
        featured
          ? "inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/12 px-3 py-1 text-[12px] font-semibold text-white backdrop-blur-sm"
          : "inline-flex items-center gap-1.5 rounded-full border border-[#15966F]/15 bg-[#E8F5EF] px-2.5 py-1 text-[12px] font-semibold text-[#073D32] dark:border-[#34D399]/20 dark:bg-[#132E26] dark:text-[#6EE7B7]"
      }
    >
      <GraduationCap
        className={
          featured
            ? "h-3.5 w-3.5 text-[#6EE7B7]"
            : "h-3.5 w-3.5 text-[#15966F] dark:text-[#34D399]"
        }
      />
      <span>{amount}</span>
    </span>
  );
}

function Card3DWrapper({
  children,
  className,
  glowColor = "rgba(21, 150, 111, 0.09)",
}: {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 8; // subtle +/- 4 deg
    const rotateX = (0.5 - y) * 8;
    el.style.setProperty("--rx", `${rotateX.toFixed(2)}deg`);
    el.style.setProperty("--ry", `${rotateY.toFixed(2)}deg`);
    el.style.setProperty("--gx", `${(x * 100).toFixed(1)}%`);
    el.style.setProperty("--gy", `${(y * 100).toFixed(1)}%`);
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--gx", "50%");
    el.style.setProperty("--gy", "0%");
  };

  return (
    <div className="h-full [perspective:1100px]">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: "rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
        }}
        className={`relative h-full transition-transform duration-300 ease-out group-hover:-translate-y-1.5 ${className ?? ""}`}
      >
        {/* Subtle specular sheen tracking cursor */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(420px circle at var(--gx, 50%) var(--gy, 0%), ${glowColor}, transparent 65%)`,
          }}
        />
        {children}
      </div>
    </div>
  );
}

function HdrIconBadge({
  icon: Icon,
  featured = false,
}: {
  icon: LucideIcon;
  featured?: boolean;
}) {
  if (featured) {
    return (
      <span className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-[14px] border border-white/25 bg-gradient-to-b from-[#1A886D] via-[#126B55] to-[#083F33] text-[#A7F3D0] shadow-[0_8px_18px_-4px_rgba(4,39,32,0.55),inset_0_1px_0_rgba(255,255,255,0.38),inset_0_-2px_0_rgba(4,39,32,0.45)] transition-transform duration-300 group-hover:-translate-y-0.5">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent"
        />
        <Icon className="relative z-10 h-5 w-5" strokeWidth={2} />
      </span>
    );
  }

  return (
    <div className="relative z-10 -mt-10 inline-flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[15px] border-2 border-white bg-gradient-to-b from-[#FFFFFF] via-[#F2FBF7] to-[#D6F0E3] text-[#0B7453] ring-1 ring-[#073D32]/8 shadow-[0_10px_20px_-6px_rgba(7,61,50,0.25),0_3px_8px_-2px_rgba(7,61,50,0.1),inset_0_1px_0_rgba(255,255,255,1),inset_0_-2px_0_rgba(11,116,83,0.14)] transition-transform duration-300 group-hover:-translate-y-0.5 dark:border-[#0D1E19] dark:from-[#1D4B3D] dark:via-[#14372D] dark:to-[#0B221B] dark:text-[#6EE7B7] dark:ring-white/10 dark:shadow-[0_10px_20px_-6px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.16)]">
      {/* Crisp top specular highlight */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[46%] bg-gradient-to-b from-white/70 to-transparent dark:from-white/12"
      />
      <Icon className="relative z-10 h-[21px] w-[21px]" strokeWidth={2} />
    </div>
  );
}

function DisciplineCard({ category }: { category: DisciplineCategory }) {
  return (
    <Link href={category.href} className="group block h-full">
      <Card3DWrapper className="flex flex-col overflow-hidden rounded-[22px] border border-[#DCE8E3] border-b-[3px] border-b-[#C5DDD3] bg-white shadow-[0_14px_28px_-12px_rgba(7,61,50,0.14),0_4px_10px_-4px_rgba(7,61,50,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] transition-shadow duration-300 group-hover:border-[#15966F]/45 group-hover:border-b-[#15966F]/60 group-hover:shadow-[0_24px_46px_-14px_rgba(7,61,50,0.22),0_8px_18px_-6px_rgba(21,150,111,0.12)] dark:border-[#1E3B32] dark:border-b-[#122922] dark:bg-[#0D1E19] dark:shadow-[0_14px_28px_-12px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.05)] dark:group-hover:border-[#34D399]/40">
        {/* Top discipline photo (unobstructed, 4:3 friendly aspect ratio) */}
        <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#E8F5EF] dark:bg-[#132E26]">
          <img
            src={category.image}
            alt={`${category.title} scholarship students`}
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/10 to-transparent" />
        </div>

        {/* Card content */}
        <div className="flex flex-1 flex-col justify-between px-5 pb-5 pt-3.5">
          <div>
            <div className="flex items-start justify-between gap-2">
              <HdrIconBadge icon={category.icon} />
              <GrantBadge amount={category.amount} />
            </div>

            <h3 className="mt-3 font-heading text-[18px] font-bold leading-snug tracking-tight text-[#142C25] dark:text-white">
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
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F1F8F5] text-[#15966F] shadow-xs transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-[#15966F] group-hover:text-white dark:bg-[#143329] dark:text-[#34D399] dark:group-hover:bg-[#34D399] dark:group-hover:text-[#073D32]">
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Card3DWrapper>
    </Link>
  );
}

function FeaturedMedicalCard({ category }: { category: DisciplineCategory }) {
  return (
    <Link href={category.href} className="group block h-full">
      <Card3DWrapper
        glowColor="rgba(110, 231, 183, 0.14)"
        className="flex flex-col overflow-hidden rounded-[24px] border border-[#15966F]/40 border-b-[3px] border-b-[#042720] bg-gradient-to-br from-[#073D32] via-[#0B5243] to-[#116E59] text-white shadow-[0_20px_42px_-12px_rgba(7,61,50,0.42),0_6px_14px_-4px_rgba(7,61,50,0.22),inset_0_1px_0_rgba(255,255,255,0.14)] transition-shadow duration-300 group-hover:border-[#34D399]/60 group-hover:shadow-[0_30px_58px_-14px_rgba(21,150,111,0.48),0_10px_22px_-6px_rgba(7,61,50,0.3)] sm:flex-row"
      >
        {/* Subtle decorative glow */}
        <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[#15966F]/25 blur-3xl transition-opacity duration-500 group-hover:opacity-90" />

        {/* Left column: icon, featured badge, grant badge, title, courses, pill CTA */}
        <div className="relative z-10 flex flex-1 flex-col justify-between p-6 sm:w-[52%] sm:p-7">
          <div>
            <div className="flex flex-wrap items-center gap-2.5">
              <HdrIconBadge icon={category.icon} featured />
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FBBF24]/35 bg-[#FBBF24]/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#FDE68A]">
                <Crown className="h-3 w-3" />
                Featured
              </span>
            </div>

            <div className="mt-4">
              <GrantBadge amount={category.amount} featured />
            </div>

            <h3 className="mt-3.5 font-heading text-[26px] font-bold leading-tight tracking-tight text-white sm:text-[28px]">
              {category.title}
            </h3>

            <p className="mt-2 max-w-xs text-[14px] leading-relaxed text-[#D1FAE5]/90">
              {category.courses}
            </p>
          </div>

          <div className="mt-6">
            <span className="inline-flex items-center gap-3 rounded-full bg-white py-2 pl-4 pr-2 text-[13.5px] font-semibold text-[#073D32] shadow-[0_8px_20px_rgba(4,39,32,0.28)] transition-all duration-300 group-hover:bg-[#E8F5EF]">
              <span>Explore Scholarships</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#073D32] text-white transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </span>
          </div>
        </div>

        {/* Right column: unobstructed portrait photo matching 4:3 framing */}
        <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden sm:aspect-auto sm:w-[48%]">
          <img
            src={category.image}
            alt="Medical scholarship student"
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
          {/* Smooth gradient fade into left green background */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09463A] via-transparent to-transparent sm:bg-gradient-to-r sm:from-[#0C5747] sm:via-[#0C5747]/30 sm:to-transparent" />
        </div>
      </Card3DWrapper>
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
