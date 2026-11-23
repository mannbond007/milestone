import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { Shield, Eye, Heart, Target, Users, Award, Compass, Lightbulb, BookOpen, Zap, Palette, Puzzle, Sparkles, GraduationCap, Laptop, Globe, Trophy, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Program",
  description: "Learn about the Milestone Scholarship Program, our mission, vision, and commitment to empowering students across India.",
};

const values = [
  { icon: Shield, image: "/images/values/trust.jpg", title: "Trust & Transparency", description: "Every scholarship decision is made with complete transparency and fairness." },
  { icon: Eye, image: "/images/values/equal.jpg", title: "Equal Opportunity", description: "We believe every student deserves access to quality education regardless of background." },
  { icon: Heart, image: "/images/values/student.jpg", title: "Student-First", description: "Our programs are designed with students at the center of every decision." },
  { icon: Target, image: "/images/values/excellence.jpg", title: "Excellence", description: "We set high standards and help students achieve academic and professional excellence." },
  { icon: Users, image: "/images/values/community.jpg", title: "Community", description: "Building a nationwide community of scholars who support and uplift each other." },
  { icon: Award, image: "/images/values/impact.jpg", title: "Impact", description: "Measuring success by the real-world impact we create in students' lives." },
];

const milestones = [
  {
    year: "2018",
    stat: "Foundation",
    title: "Foundation Year",
    description: "Milestone Scholarship Program was established with a clear mission to make quality higher education accessible to deserving students.",
    points: [
      "Built a transparent merit and need-based evaluation process",
      "Set up our first dedicated student guidance desk",
    ],
    icon: Compass,
  },
  {
    year: "2019",
    stat: "500+ Scholars",
    title: "First Cohort",
    description: "500+ students received scholarships in our inaugural year across 5 states, validating our combined grant and mentorship approach.",
    points: [
      "Direct tuition fee support across undergraduate programs",
      "Partnered with initial network of recognized colleges",
    ],
    icon: GraduationCap,
  },
  {
    year: "2020",
    stat: "100% Online",
    title: "Digital Expansion",
    description: "Launched online scholarship assessment tests and a fully digital application portal so students from remote towns could apply easily.",
    points: [
      "Introduced remote proctored scholarship assessments",
      "Streamlined online document verification checklists",
    ],
    icon: Laptop,
  },
  {
    year: "2021",
    stat: "2,000+ Scholars",
    title: "National Reach",
    description: "Expanded operations to 15+ states with 2,000+ scholars pursuing degrees across Medical, Engineering, Law, and Management.",
    points: [
      "Established regional counseling hubs in 15+ states",
      "Added dedicated MBBS, B.Tech, and LLB grant tracks",
    ],
    icon: Globe,
  },
  {
    year: "2023",
    stat: "100+ Mentors",
    title: "Mentorship Launch",
    description: "Introduced structured 1-on-1 mentorship programs with 100+ industry professionals and senior educators.",
    points: [
      "Mentors from AIIMS, IITs, IIMs, and leading law firms",
      "Added career roadmap and interview prep workshops",
    ],
    icon: Users,
  },
  {
    year: "2025",
    stat: "15,000+ Scholars",
    title: "15,000+ Scholars",
    description: "Crossed the milestone of supporting 15,000+ students nationwide alongside 1,750+ partner institutions and a 96% admission success rate.",
    points: [
      "Scholarships up to ₹5,00,000 across 10 academic disciplines",
      "1,750+ NMC, AICTE, UGC, and BCI aligned partner institutions",
    ],
    icon: Trophy,
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#DCE8E3] bg-[#FAFCFB] py-16 md:py-24 dark:border-[#162E26] dark:bg-[#07120F]">
        {/* Subtle emerald radial depth — clean & understated */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#15966F]/[0.07] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-24 h-[340px] w-[340px] rounded-full bg-[#073D32]/[0.05] blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Split Architectural Hero */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Editorial Column */}
            <ScrollReveal className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-lg border border-[#15966F]/20 bg-[#EBF7F1] px-3 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] dark:border-[#34D399]/25 dark:bg-[#112B23] dark:shadow-none">
                <span className="h-1.5 w-1.5 rounded-full bg-[#15966F] ring-2 ring-[#15966F]/25 dark:bg-[#34D399] dark:ring-[#34D399]/25" />
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#073D32] dark:text-[#6EE7B7]">
                  About Us
                </span>
                <span className="h-3 w-[1px] bg-[#15966F]/25 dark:bg-[#34D399]/25" />
                <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#15966F] dark:text-[#34D399]">
                  Est. 2018
                </span>
              </div>

              <h1 className="mt-5 font-heading text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-[#0E241E] sm:text-5xl lg:text-[54px] dark:text-white">
                Building India&apos;s{" "}
                <span className="relative inline-block font-editorial italic font-normal text-[#15966F] dark:text-[#34D399]">
                  Most Trusted
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 210 12"
                    fill="none"
                    className="pointer-events-none absolute -bottom-1 left-0 h-2.5 w-full text-[#15966F]/45 dark:text-[#34D399]/45"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 9.5C54 3.5 156 2.5 208 8.5"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className="mt-1 block">Scholarship Ecosystem</span>
              </h1>

              <p className="mt-5 max-w-xl text-[16px] leading-[1.7] text-[#5C6B64] sm:text-[17.5px] dark:text-[#A0B3AC]">
                Since 2018, we&apos;ve been committed to breaking financial barriers in education and empowering the next generation of leaders, doctors, engineers, and changemakers.
              </p>

              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <Link
                  href="/scholarships"
                  className="group inline-flex h-12 items-center justify-between gap-3 rounded-full bg-gradient-to-r from-[#073D32] to-[#11644E] pl-6 pr-2 text-[13.5px] font-semibold text-white shadow-[0_10px_24px_-6px_rgba(7,61,50,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:from-[#0A4E3F] hover:to-[#158062] sm:justify-center"
                >
                  <span>Explore Scholarships</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#073D32] transition-transform duration-200 group-hover:translate-x-0.5">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[#D4E3DC] bg-white px-6 text-[13.5px] font-semibold text-[#073D32] shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#15966F]/45 hover:text-[#15966F] dark:border-[#1E3B32] dark:bg-[#0D1E19] dark:text-white dark:hover:border-[#34D399]/50"
                >
                  Speak with a Counselor
                </Link>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] font-medium text-[#5C6B64] dark:text-[#A0B3AC]">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#15966F] dark:text-[#34D399]" />
                  NMC, AICTE &amp; UGC Aligned
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#15966F] dark:text-[#34D399]" />
                  100% Transparent Merit Process
                </span>
              </div>
            </ScrollReveal>

            {/* Right Framed Editorial Visual */}
            <ScrollReveal delay={0.1} className="lg:col-span-5">
              <div className="overflow-hidden rounded-[26px] border border-[#DCE8E3] border-b-[3px] border-b-[#C5DDD3] bg-white p-2.5 shadow-[0_22px_50px_-16px_rgba(7,61,50,0.16)] dark:border-[#1E3B32] dark:border-b-[#122922] dark:bg-[#0D1E19]">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px] bg-[#E8F5EF] dark:bg-[#132E26]">
                  <Image
                    src="/images/hero/hero-study-group-hdr.jpg"
                    alt="MileStone scholars collaborating on campus"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 460px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 px-3 py-3.5">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#15966F] dark:text-[#34D399]">
                      Verified Scholar Network
                    </div>
                    <div className="text-[13px] font-semibold text-[#073D32] dark:text-white">
                      Empowering Students Across India
                    </div>
                  </div>
                  <div className="flex items-center -space-x-2 shrink-0">
                    {["/scholars/gauri_pa.png", "/scholars/giridev.png", "/scholars/kiran_k.png", "/scholars/rahul.png"].map(
                      (src, idx) => (
                        <div
                          key={src}
                          className="h-8 w-8 overflow-hidden rounded-full border-2 border-white bg-[#E8F5EF] shadow-xs dark:border-[#0D1E19]"
                        >
                          <img
                            src={src}
                            alt={`Scholar ${idx + 1}`}
                            className="h-full w-full object-cover object-top"
                          />
                        </div>
                      )
                    )}
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#073D32] text-[10px] font-bold text-white shadow-xs dark:border-[#0D1E19] dark:bg-[#15966F]">
                      +15k
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Executive 3-Metric Impact Board */}
          <ScrollReveal delay={0.16}>
            <div className="mt-12 overflow-hidden rounded-[24px] border border-[#DCE8E3] border-b-[3px] border-b-[#C5DDD3] bg-white p-6 shadow-[0_16px_38px_-14px_rgba(7,61,50,0.1)] sm:p-8 dark:border-[#1E3B32] dark:border-b-[#122922] dark:bg-[#0D1E19]">
              <div className="grid grid-cols-1 divide-y divide-[#E6F0EC] text-center md:grid-cols-3 md:divide-x md:divide-y-0 dark:divide-[#18332B]">
                {/* Metric 1 */}
                <div className="flex flex-col items-center justify-center px-4 py-4 md:py-2">
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#15966F] dark:text-[#34D399]">
                    Our Reach
                  </span>
                  <h3 className="mt-2 font-heading text-4xl font-bold tracking-tight text-[#073D32] md:text-[44px] dark:text-white">
                    15,000+
                  </h3>
                  <p className="mt-1.5 max-w-[220px] text-[13.5px] leading-relaxed text-[#687A73] dark:text-[#A0B3AC]">
                    Deserving scholars supported across India
                  </p>
                </div>

                {/* Metric 2 */}
                <div className="flex flex-col items-center justify-center px-4 py-4 md:py-2">
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#15966F] dark:text-[#34D399]">
                    Mentorship Network
                  </span>
                  <h3 className="mt-2 font-heading text-4xl font-bold tracking-tight text-[#073D32] md:text-[44px] dark:text-white">
                    100+
                  </h3>
                  <p className="mt-1.5 max-w-[220px] text-[13.5px] leading-relaxed text-[#687A73] dark:text-[#A0B3AC]">
                    Industry experts &amp; counseling partners
                  </p>
                  <div className="mt-3 rounded-full border border-[#15966F]/15 bg-[#E8F5EF] px-3 py-1 text-[11px] font-semibold text-[#073D32] dark:border-[#34D399]/20 dark:bg-[#132E26] dark:text-[#6EE7B7]">
                    Google &bull; IITs &bull; AIIMS
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="flex flex-col items-center justify-center px-4 py-4 md:py-2">
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#15966F] dark:text-[#34D399]">
                    National Presence
                  </span>
                  <h3 className="mt-2 font-heading text-4xl font-bold tracking-tight text-[#073D32] md:text-[44px] dark:text-white">
                    15+
                  </h3>
                  <p className="mt-1.5 max-w-[220px] text-[13.5px] leading-relaxed text-[#687A73] dark:text-[#A0B3AC]">
                    States covered with local support hubs
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-[#15966F]/20 bg-[#E8F5EF] px-3 py-1 text-[11px] font-semibold text-[#0B7453] dark:border-[#34D399]/25 dark:bg-[#132E26] dark:text-[#6EE7B7]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#15966F] animate-pulse dark:bg-[#34D399]" />
                    Active Expansion
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="relative group overflow-hidden bg-white dark:bg-slate-900/40 rounded-3xl border border-slate-200 dark:border-slate-800/80 p-8 md:p-10 flex flex-col justify-between shadow-premium hover:shadow-card-hover hover:border-accent/30 -translate-y-0 hover:-translate-y-1.5 transition-all duration-500 h-full">
                {/* Decorative glows inside the card */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute inset-0 bg-grid opacity-[0.02] dark:opacity-[0.04] pointer-events-none" />
                
                {/* Watermark Icon */}
                <Compass className="absolute -bottom-8 -right-8 h-40 w-40 text-accent/[0.04] dark:text-accent/[0.02] group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 dark:bg-accent/20 border border-accent/20 group-hover:bg-accent group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-500 shrink-0">
                      <Compass className="h-6 w-6 text-accent group-hover:text-white transition-colors duration-500" />
                    </div>
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-accent/5 text-accent border border-accent/20">Our Mission</span>
                  </div>
                  
                  <h3 className="font-heading text-2xl md:text-3xl font-black text-primary dark:text-white mb-6 leading-tight group-hover:text-accent transition-colors duration-300">
                    Empowering Dreams Beyond Financial Limits
                  </h3>
                  
                  <div className="text-slate-600 dark:text-slate-300 leading-relaxed space-y-6 text-base">
                    <p className="font-medium text-slate-800 dark:text-slate-200 border-l-3 border-accent pl-4 py-1 bg-accent/[0.02] dark:bg-accent/[0.01]">
                      Our mission is to identify, support, and empower deserving and talented students from every background, whether they belong to rural areas, towns, or cities, and whether they need financial assistance or structured guidance, mentorship, and opportunities.
                    </p>
                    <p className="relative pl-6 before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-accent before:shadow-sm">
                      Through the Milestone Scholarship Program, we aim to provide scholarships, rewards, mentorship, career counseling, academic support, skill development, and opportunity-driven initiatives that help students move confidently toward their goals.
                    </p>
                    <p className="relative pl-6 before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-accent before:shadow-sm">
                      Our mission is not only to reduce financial barriers in education, but also to bridge the gap between students and the right direction, awareness, mentorship, and opportunities required for success.
                    </p>
                    <p className="relative pl-6 before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-accent before:shadow-sm">
                      We strive to create an ecosystem where every student receives equal encouragement, recognition, and support based on talent, dedication, and potential.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="relative group overflow-hidden bg-white dark:bg-slate-900/40 rounded-3xl border border-slate-200 dark:border-slate-800/80 p-8 md:p-10 flex flex-col justify-between shadow-premium hover:shadow-card-hover hover:border-accent/30 -translate-y-0 hover:-translate-y-1.5 transition-all duration-500 h-full">
                {/* Decorative glows inside the card */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute inset-0 bg-grid opacity-[0.02] dark:opacity-[0.04] pointer-events-none" />
                
                {/* Watermark Icon */}
                <Lightbulb className="absolute -bottom-8 -right-8 h-40 w-40 text-accent/[0.04] dark:text-accent/[0.02] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 dark:bg-accent/20 border border-accent/20 group-hover:bg-accent group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-500 shrink-0">
                      <Lightbulb className="h-6 w-6 text-accent group-hover:text-white transition-colors duration-500" />
                    </div>
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-accent/5 text-accent border border-accent/20">Our Vision</span>
                  </div>
                  
                  <h3 className="font-heading text-2xl md:text-3xl font-black text-primary dark:text-white mb-6 leading-tight group-hover:text-accent transition-colors duration-300">
                    A Future Where Talent Wins Over Privilege
                  </h3>
                  
                  <div className="text-slate-600 dark:text-slate-300 leading-relaxed space-y-6 text-base">
                    <p className="font-medium text-slate-800 dark:text-slate-200 border-l-3 border-accent pl-4 py-1 bg-accent/[0.02] dark:bg-accent/[0.01]">
                      Our vision is to build a future where every student, whether from a village, town, or city, gets equal access to quality education, guidance, mentorship, and opportunities needed to achieve their dreams.
                    </p>
                    <p className="relative pl-6 before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-accent before:shadow-sm">
                      Milestone Scholarship Program is not limited only to financially weak students. While we strongly support students from rural, underserved, and economically challenged backgrounds, we also believe that many talented students, regardless of their financial condition, need the right mentorship, direction, motivation, and opportunities to unlock their true potential.
                    </p>
                    <p className="relative pl-6 before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-accent before:shadow-sm">
                      Through scholarships, rewards, educational support, mentorship, career guidance, and opportunity-based initiatives, we aim to empower all deserving and talented students without discrimination. Our goal is to ensure that no student is held back due to lack of financial support, proper guidance, awareness, or opportunity.
                    </p>
                    <p className="relative pl-6 before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-accent before:shadow-sm">
                      We envision creating future doctors, professionals, innovators, leaders, and responsible citizens whose success is defined by talent, hard work, determination, and the opportunities they receive, not by their background, location, or financial status.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Program Architecture — Distinct Open Editorial 3-Column + Cinematic Band */}
      <section className="relative overflow-hidden border-y border-[#E3ECE8] bg-white py-20 md:py-28 dark:border-[#162E26] dark:bg-[#0B1411]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Centered Minimal Editorial Statement (Breaks left-aligned header monotony) */}
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#15966F] dark:text-[#34D399]">
              Program Architecture
            </p>
            <h2 className="mt-3.5 font-heading text-3xl font-bold leading-[1.14] tracking-[-0.028em] text-[#0E241E] sm:text-4xl lg:text-[46px] dark:text-white">
              Built Around the Scholar,{" "}
              <span className="inline-block whitespace-nowrap font-editorial italic font-normal text-[#15966F] dark:text-[#34D399]">
                Not Paperwork.
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15.5px] leading-relaxed text-[#5C6B64] sm:text-[17px] dark:text-[#A0B3AC]">
              A complete ecosystem of support with every stage built around clear mentorship, practical resources, and transparent guidance.
            </p>
          </ScrollReveal>

          {/* Open Architectural 3-Column Grid (3D Beveled Dividers & Highlighted 3D Numerals) */}
          <ScrollReveal delay={0.1}>
            <div className="relative mt-14">
              {/* Top 3D Beveled Architectural Line */}
              <div
                aria-hidden="true"
                className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#B8D5C8] to-transparent shadow-[0_1px_0_rgba(255,255,255,0.95),0_2px_6px_rgba(7,61,50,0.08)] dark:via-[#214539] dark:shadow-[0_1px_0_rgba(255,255,255,0.05)]"
              />

              <div className="grid grid-cols-1 md:grid-cols-3">
                {[
                  {
                    num: "01",
                    metric: "24–72h",
                    metricLabel: "Fast Application Review",
                    title: "Streamlined Grants & Rapid Support",
                    description:
                      "Simple digital registration, transparent document verification checklists, and prompt scholarship disbursals supporting tuition and hostel fees.",
                  },
                  {
                    num: "02",
                    metric: "100+",
                    metricLabel: "AIIMS, IIT & IIM Mentors",
                    title: "1-on-1 Expert Mentorship",
                    description:
                      "Connect directly with established doctors, engineers, legal professionals, and dedicated academic counselors who help map your career.",
                  },
                  {
                    num: "03",
                    metric: "16+",
                    metricLabel: "Verified Grant Pathways",
                    title: "All-in-One Career Ecosystem",
                    description:
                      "Access specialized scholarship assessment preparation, structured study resources, and centralized entrance counselling under one roof.",
                  },
                ].map((pillar, idx) => (
                  <div
                    key={pillar.num}
                    className="group relative flex flex-col justify-between py-8 transition-colors duration-300 md:px-8 md:py-10 first:md:pl-2 last:md:pr-2"
                  >
                    {/* 3D Vertical Recessed Divider between columns */}
                    {idx > 0 && (
                      <>
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#C6DDD3] to-transparent shadow-[0_1px_0_rgba(255,255,255,0.9)] md:hidden dark:via-[#1E3B32] dark:shadow-none"
                        />
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-y-6 left-0 hidden w-[2px] bg-gradient-to-b from-transparent via-[#B8D5C8] to-transparent shadow-[1px_0_0_rgba(255,255,255,0.95),2px_0_6px_rgba(7,61,50,0.07)] md:block dark:via-[#214539] dark:shadow-[1px_0_0_rgba(255,255,255,0.04)]"
                        />
                      </>
                    )}

                    <div>
                      <div className="flex items-center justify-between gap-4">
                        {/* Highlighted 3D Editorial Numeral Plaque */}
                        <span className="inline-flex h-12 min-w-[56px] items-center justify-center rounded-2xl border border-[#15966F]/25 bg-gradient-to-b from-[#FFFFFF] via-[#EAF7F1] to-[#CFECE0] px-3 font-editorial italic text-[28px] font-bold leading-none text-[#073D32] shadow-[0_10px_20px_-6px_rgba(7,61,50,0.22),0_3px_6px_-2px_rgba(21,150,111,0.16),inset_0_1.5px_0_rgba(255,255,255,1),inset_0_-2px_0_rgba(11,116,83,0.18)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-[#15966F]/55 group-hover:text-[#15966F] group-hover:shadow-[0_14px_26px_-6px_rgba(21,150,111,0.3)] dark:border-[#34D399]/30 dark:from-[#1B4538] dark:via-[#13352B] dark:to-[#0B221B] dark:text-[#6EE7B7] dark:shadow-[0_10px_20px_-6px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)]">
                          {pillar.num}
                        </span>

                        <div className="text-right">
                          <div className="font-heading text-lg font-bold tracking-tight text-[#073D32] dark:text-white">
                            {pillar.metric}
                          </div>
                          <div className="text-[11px] font-semibold uppercase tracking-wider text-[#687A73] dark:text-[#8DA39B]">
                            {pillar.metricLabel}
                          </div>
                        </div>
                      </div>

                      <h3 className="mt-6 font-heading text-[20px] font-bold tracking-tight text-[#0E241E] dark:text-white">
                        {pillar.title}
                      </h3>

                      <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#5C6B64] dark:text-[#A0B3AC]">
                        {pillar.description}
                      </p>
                    </div>

                    {/* 3D Tactile Emerald Accent Pill Line */}
                    <div className="mt-7 h-[4px] w-12 rounded-full bg-gradient-to-r from-[#073D32] via-[#15966F] to-[#34D399] shadow-[0_3px_8px_rgba(21,150,111,0.32),inset_0_1px_0_rgba(255,255,255,0.45)] transition-all duration-300 group-hover:w-24" />
                  </div>
                ))}
              </div>

              {/* Bottom 3D Beveled Architectural Line */}
              <div
                aria-hidden="true"
                className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#B8D5C8] to-transparent shadow-[0_1px_0_rgba(255,255,255,0.95),0_2px_6px_rgba(7,61,50,0.08)] dark:via-[#214539] dark:shadow-[0_1px_0_rgba(255,255,255,0.05)]"
              />
            </div>
          </ScrollReveal>

          {/* Wide Cinematic Editorial Campus Band */}
          <ScrollReveal delay={0.16}>
            <div className="group relative mt-12 overflow-hidden rounded-[28px] border border-[#143D32] bg-gradient-to-br from-[#05231B] via-[#073429] to-[#0B4B3B] p-6 shadow-[0_24px_56px_-16px_rgba(7,61,50,0.28)] sm:p-8 lg:p-10">
              <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
                {/* Left Content: Quote + CTA */}
                <div className="relative z-10 lg:col-span-7">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#86DFB8]">
                    Direct Aid &bull; Zero Middlemen &bull; 100% Merit
                  </span>
                  <p className="mt-3 font-editorial italic text-2xl leading-snug text-white sm:text-[28px] lg:text-[30px]">
                    &ldquo;Every component of the MileStone program is engineered to remove friction between talent and opportunity.&rdquo;
                  </p>
                  <div className="mt-7">
                    <Link
                      href="/how-to-apply"
                      className="group/cta inline-flex items-center gap-3 rounded-full bg-white py-2.5 pl-5 pr-2 text-[13.5px] font-bold text-[#073D32] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E8F5EF]"
                    >
                      <span>Explore How to Apply</span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#073D32] text-white transition-transform duration-200 group-hover/cta:translate-x-0.5">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Right Clean Inset Framed Portrait (Crisp edges, balanced subject framing) */}
                <div className="lg:col-span-5">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[20px] ring-1 ring-white/15 shadow-[0_18px_40px_-10px_rgba(3,20,15,0.55)]">
                    <Image
                      src="/images/ecosystem/university.jpg"
                      alt="MileStone scholar on university campus"
                      fill
                      sizes="(max-width: 1024px) 100vw, 480px"
                      className="object-cover object-[72%_22%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values: Luminous 2-Column 3D Icon Card Showcase */}
      <section className="relative overflow-hidden border-t border-[#E3ECE8] bg-gradient-to-b from-[#EDF8F3] via-[#FAFCFB] to-white py-20 md:py-28 dark:border-[#162E26] dark:from-[#081713] dark:via-[#07120F] dark:to-[#07120F]">
        {/* Soft ambient mint depth & subtle corner dot matrix */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#15966F]/[0.09] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-6 right-8 h-32 w-48 opacity-35 dark:opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1.5px 1.5px, #15966F 1.2px, transparent 0)",
            backgroundSize: "16px 16px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top Header Row + Floating 3D Graduation Artwork */}
          <div className="mb-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <ScrollReveal className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#15966F]/20 bg-white/85 px-3.5 py-1.5 shadow-[0_4px_14px_-6px_rgba(7,61,50,0.12),inset_0_1px_0_rgba(255,255,255,1)] backdrop-blur-sm dark:border-[#34D399]/25 dark:bg-[#112B23] dark:shadow-none">
                <span className="h-1.5 w-1.5 rounded-full bg-[#15966F] ring-2 ring-[#15966F]/25 dark:bg-[#34D399] dark:ring-[#34D399]/25" />
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#073D32] dark:text-[#6EE7B7]">
                  Our Core Values
                </span>
              </div>

              <h2 className="mt-4 font-heading text-3xl font-bold leading-[1.1] tracking-[-0.028em] text-[#0E241E] sm:text-4xl lg:text-[46px] dark:text-white">
                What We{" "}
                <span className="relative inline-block font-editorial italic font-normal text-[#15966F] dark:text-[#34D399]">
                  Stand For
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 180 12"
                    fill="none"
                    className="pointer-events-none absolute -bottom-1 left-0 h-2.5 w-full text-[#15966F]/50 dark:text-[#34D399]/50"
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

              <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-[#5C6B64] sm:text-[16.5px] dark:text-[#A0B3AC]">
                Six foundational standards that guide every scholarship decision, mentorship pairing, and student commitment.
              </p>
            </ScrollReveal>

            {/* Right Seamless Floating 3D Graduation Artwork (Zero box edge) */}
            <ScrollReveal delay={0.08} className="hidden lg:col-span-5 lg:block">
              <div className="relative ml-auto aspect-[16/10] w-full max-w-[440px] [mask-image:radial-gradient(ellipse_68%_68%_at_62%_50%,black_34%,transparent_86%)]">
                <Image
                  src="/images/ecosystem/scholarship.jpg"
                  alt="Graduation cap and academic books"
                  fill
                  sizes="440px"
                  className="scale-[1.12] object-cover object-[78%_50%] mix-blend-multiply transition-transform duration-700 hover:scale-[1.16] dark:mix-blend-normal"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* 2-Column Horizontal 3D Value Cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            {values.map((val, i) => {
              const num = String(i + 1).padStart(2, "0");
              return (
                <ScrollReveal key={val.title} delay={i * 0.05}>
                  <div className="group relative flex h-full items-center gap-4 overflow-hidden rounded-[24px] border border-[#DCE8E3] border-b-[3px] border-b-[#C5DDD3] bg-gradient-to-br from-white via-white to-[#F7FCF9] px-5 py-5 shadow-[0_12px_30px_-14px_rgba(7,61,50,0.12),inset_0_1px_0_rgba(255,255,255,1)] transition-all duration-300 hover:-translate-y-1 hover:border-[#15966F]/45 hover:border-b-[#15966F]/60 hover:shadow-[0_24px_46px_-16px_rgba(7,61,50,0.19),0_6px_16px_-6px_rgba(21,150,111,0.12)] sm:gap-5 sm:px-6 sm:py-5 dark:border-[#1E3B32] dark:border-b-[#122922] dark:from-[#0E211B] dark:via-[#0D1E19] dark:to-[#112A22] dark:hover:border-[#34D399]/40">
                    {/* Subtle hover glow in top-right */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#15966F]/[0.08] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                    />

                    {/* Left 3D Studio Icon seamlessly blended onto card */}
                    <div className="relative z-10 h-20 w-20 shrink-0 sm:h-24 sm:w-24">
                      <img
                        src={val.image}
                        alt={val.title}
                        className="h-full w-full object-contain mix-blend-multiply transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-[1.06] dark:rounded-2xl dark:mix-blend-normal"
                        loading="lazy"
                      />
                    </div>

                    {/* Center Number, Title & Description */}
                    <div className="relative z-10 min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center rounded-md bg-[#EBF7F1] px-2 py-0.5 font-heading text-[11px] font-bold tracking-wider text-[#15966F] dark:bg-[#132E26] dark:text-[#6EE7B7]">
                          {num}
                        </span>
                        <span className="h-[1px] w-7 bg-gradient-to-r from-[#C5DDD3] to-transparent dark:from-[#214539]" />
                      </div>
                      <h3 className="mt-1.5 font-heading text-[18px] font-bold leading-snug tracking-tight text-[#0E241E] transition-colors duration-200 group-hover:text-[#073D32] sm:text-[19px] dark:text-white">
                        {val.title}
                      </h3>
                      <p className="mt-1 text-[13.5px] leading-relaxed text-[#5C6B64] sm:text-[14px] dark:text-[#A0B3AC]">
                        {val.description}
                      </p>
                    </div>

                    {/* Right Tactile Circular Arrow Indicator */}
                    <span
                      aria-hidden="true"
                      className="relative z-10 hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#15966F]/15 bg-[#EBF7F1] text-[#15966F] shadow-[0_4px_10px_-2px_rgba(21,150,111,0.16)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:border-transparent group-hover:bg-[#15966F] group-hover:text-white group-hover:shadow-[0_8px_18px_-4px_rgba(21,150,111,0.45)] sm:flex dark:border-[#34D399]/20 dark:bg-[#132E26] dark:text-[#34D399] dark:group-hover:bg-[#34D399] dark:group-hover:text-[#073D32]"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline: Frosted Glass Overlapping Badge + Dotted Snake Connector Journey */}
      <section className="relative overflow-hidden border-t border-[#E3ECE8] bg-gradient-to-b from-[#F4FAF7] via-[#FAFCFB] to-white py-20 md:py-28 dark:border-[#162E26] dark:from-[#081612] dark:via-[#07120F] dark:to-[#07120F]">
        {/* Soft ambient mint depth */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-28 h-96 w-96 -translate-x-1/2 rounded-full bg-[#15966F]/[0.07] blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Clean Editorial Header */}
          <ScrollReveal className="mx-auto mb-14 max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#15966F]/20 bg-white/90 px-3.5 py-1.5 shadow-[0_4px_14px_-6px_rgba(7,61,50,0.12)] dark:border-[#34D399]/25 dark:bg-[#112B23] dark:shadow-none">
              <span className="h-1.5 w-1.5 rounded-full bg-[#15966F] ring-2 ring-[#15966F]/25 dark:bg-[#34D399] dark:ring-[#34D399]/25" />
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#073D32] dark:text-[#6EE7B7]">
                Our Journey
              </span>
            </div>

            <h2 className="mt-4 font-heading text-3xl font-bold leading-[1.12] tracking-[-0.028em] text-[#0E241E] sm:text-4xl lg:text-[44px] dark:text-white">
              Milestones{" "}
              <span className="relative inline-block font-editorial italic font-normal text-[#15966F] dark:text-[#34D399]">
                Along The Way
                <svg
                  aria-hidden="true"
                  viewBox="0 0 210 12"
                  fill="none"
                  className="pointer-events-none absolute -bottom-1 left-0 h-2.5 w-full text-[#15966F]/45 dark:text-[#34D399]/45"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9.5C54 3.5 156 2.5 208 8.5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <p className="mt-4 text-[15.5px] leading-relaxed text-[#5C6B64] sm:text-[16.5px] dark:text-[#A0B3AC]">
              Seven years of steady scholar impact across India, from our first cohort to over 15,000 students.
            </p>
          </ScrollReveal>

          {/* 2-Column Snake Glassmorphic Journey Grid */}
          <div className="relative grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-16">
            {milestones.map((item, i) => {
              const num = String(i + 1).padStart(2, "0");
              const Icon = item.icon;
              // Snake ordering on desktop: 01 -> 02, 04 <- 03, 05 -> 06 (chronological on mobile)
              const desktopOrderClass =
                i === 2
                  ? "lg:order-4"
                  : i === 3
                  ? "lg:order-3"
                  : i === 4
                  ? "lg:order-5"
                  : i === 5
                  ? "lg:order-6"
                  : `lg:order-${i + 1}`;

              return (
                <ScrollReveal
                  key={item.year}
                  delay={i * 0.06}
                  className={`relative ${desktopOrderClass}`}
                >
                  <div className="group relative pl-5 pt-5 sm:pl-6 sm:pt-6">
                    {/* Dotted Snake Connector Paths (Desktop) */}
                    {i === 0 && (
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-7 left-10 -right-12 hidden h-10 rounded-bl-[24px] border-b-2 border-l-2 border-dotted border-[#15966F]/55 lg:block"
                      />
                    )}
                    {i === 1 && (
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-14 right-14 hidden h-16 w-12 rounded-br-[24px] border-b-2 border-r-2 border-dotted border-[#15966F]/55 lg:block"
                      />
                    )}
                    {i === 2 && (
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -left-14 top-1/2 hidden w-16 -translate-y-1/2 border-t-2 border-dotted border-[#15966F]/55 lg:block"
                      />
                    )}
                    {i === 3 && (
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-14 left-12 hidden h-16 w-12 rounded-bl-[24px] border-b-2 border-l-2 border-dotted border-[#15966F]/55 lg:block"
                      />
                    )}
                    {i === 4 && (
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-14 top-1/2 hidden w-16 -translate-y-1/2 border-t-2 border-dotted border-[#15966F]/55 lg:block"
                      />
                    )}

                    {/* Overlapping Deep Emerald-Forest Squircle Badge (Blurs smoothly through glass card) */}
                    <div
                      aria-hidden="true"
                      className="absolute left-0 top-0 z-0 flex h-[108px] w-[108px] items-start justify-start rounded-[26px] bg-gradient-to-br from-[#073D32] via-[#0F614C] to-[#15966F] pl-3.5 pt-2.5 shadow-[0_16px_32px_-8px_rgba(7,61,50,0.45)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-[1.03] dark:from-[#15966F] dark:via-[#0D5A46] dark:to-[#073D32]"
                    >
                      <span className="font-heading text-[22px] font-bold leading-none tracking-tight text-white">
                        {num}
                      </span>
                    </div>

                    {/* Frosted Translucent Glass Card */}
                    <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/95 bg-white/75 p-6 shadow-[0_20px_50px_-14px_rgba(7,61,50,0.16),inset_0_1.5px_0_rgba(255,255,255,1)] backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#15966F]/35 group-hover:bg-white/85 group-hover:shadow-[0_28px_56px_-14px_rgba(7,61,50,0.22)] sm:p-7 dark:border-[#1E3B32]/90 dark:bg-[#0D1E19]/80 dark:shadow-[0_20px_48px_-14px_rgba(0,0,0,0.5)]">
                      {/* Header Row inside Glass Card */}
                      <div className="flex items-center justify-between gap-3 pl-10">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#15966F]/20 bg-[#EBF7F1]/90 px-3 py-1 font-heading text-[12px] font-bold tracking-wider text-[#073D32] dark:border-[#34D399]/25 dark:bg-[#132E26] dark:text-[#6EE7B7]">
                          <Icon className="h-3.5 w-3.5 text-[#15966F] dark:text-[#34D399]" />
                          <span>{item.year}</span>
                        </span>

                        <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-[#15966F] dark:text-[#34D399]">
                          {item.stat}
                        </span>
                      </div>

                      <h3 className="mt-4 font-heading text-[20px] font-bold tracking-tight text-[#0E241E] sm:text-[22px] dark:text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-[14px] leading-[1.68] text-[#5C6B64] dark:text-[#A0B3AC]">
                        {item.description}
                      </p>

                      <ul className="mt-4 space-y-2 border-t border-[#E6F0EC]/90 pt-3.5 dark:border-[#18332B]">
                        {item.points.map((pt) => (
                          <li
                            key={pt}
                            className="flex items-start gap-2 text-[13px] leading-snug text-[#465952] dark:text-[#B7CDC4]"
                          >
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#15966F] dark:text-[#34D399]" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing Accountability & Next-Step Band */}
      <section className="border-t border-[#E3ECE8] bg-[#FAFCFB] py-16 md:py-24 dark:border-[#162E26] dark:bg-[#07120F]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-[28px] border border-[#DCE8E3] border-b-[3px] border-b-[#C5DDD3] bg-white p-7 shadow-[0_18px_46px_-18px_rgba(7,61,50,0.12)] sm:p-10 lg:p-12 dark:border-[#1E3B32] dark:border-b-[#122922] dark:bg-[#0D1E19]">
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-7">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#15966F] dark:text-[#34D399]">
                    Ready To Begin
                  </span>
                  <h2 className="mt-3 font-heading text-2xl font-bold leading-tight tracking-tight text-[#0E241E] sm:text-3xl lg:text-[36px] dark:text-white">
                    Take the Next Step Toward Your{" "}
                    <span className="font-editorial italic font-normal text-[#15966F] dark:text-[#34D399]">
                      Academic Goals
                    </span>
                  </h2>
                  <p className="mt-3.5 max-w-xl text-[15px] leading-relaxed text-[#5C6B64] dark:text-[#A0B3AC]">
                    Whether you are preparing for MBBS, Engineering, Law, Nursing, or Management, our counselors will help you find the right scholarship track with zero processing fees.
                  </p>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Link
                      href="/sign-up"
                      className="group inline-flex h-12 items-center justify-between gap-3 rounded-full bg-gradient-to-r from-[#073D32] to-[#11644E] pl-6 pr-2 text-[13.5px] font-semibold text-white shadow-[0_10px_24px_-6px_rgba(7,61,50,0.38)] transition-all duration-200 hover:-translate-y-0.5 hover:from-[#0A4E3F] hover:to-[#158062] sm:justify-center"
                    >
                      <span>Apply for 2025–26 Cycle</span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#073D32] transition-transform duration-200 group-hover:translate-x-0.5">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>

                    <Link
                      href="/scholarships"
                      className="inline-flex h-12 items-center justify-center rounded-full border border-[#D4E3DC] bg-[#FAFCFB] px-6 text-[13.5px] font-semibold text-[#073D32] transition-all duration-200 hover:border-[#15966F]/50 hover:bg-white hover:text-[#15966F] dark:border-[#1E3B32] dark:bg-[#132E26] dark:text-white"
                    >
                      Browse All Scholarships
                    </Link>
                  </div>
                </div>

                {/* Right Accountability Checklist */}
                <div className="space-y-3.5 lg:col-span-5">
                  {[
                    {
                      title: "Verified Institutional Network",
                      detail: "1,750+ NMC, AICTE, UGC, and BCI aligned partner colleges across India and abroad.",
                    },
                    {
                      title: "Zero Application Barriers",
                      detail: "Free academic counseling, transparent eligibility checks, and clear documentation help.",
                    },
                    {
                      title: "Dedicated Mentorship Support",
                      detail: "Guidance from 100+ alumni and educators from AIIMS, IITs, IIMs, and NLUs.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-3 rounded-2xl border border-[#E6F0EC] bg-[#FAFCFB] p-4 dark:border-[#18332B] dark:bg-[#11261F]"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#15966F] dark:text-[#34D399]" />
                      <div>
                        <div className="font-heading text-[14px] font-bold text-[#0E241E] dark:text-white">
                          {item.title}
                        </div>
                        <p className="mt-0.5 text-[12.5px] leading-relaxed text-[#5C6B64] dark:text-[#A0B3AC]">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
