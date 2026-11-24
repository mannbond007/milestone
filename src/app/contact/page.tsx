"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Clock,
  HelpCircle,
  Mail,
  MapPin,
  Phone,
  RotateCcw,
  Send,
  ShieldCheck,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { footerLinks } from "@/constants/navigation";

const INQUIRY_TOPICS = [
  "Scholarship Eligibility",
  "MBBS & Medical",
  "Engineering & MBA",
  "Scholarship Test",
  "Document Support",
  "General Inquiry",
] as const;

const QUALIFICATIONS = [
  "Class 12 / Appearing",
  "Undergraduate Student",
  "Graduate / Post-Graduate",
  "Parent / Guardian",
] as const;

const OFFICE_ADDRESS =
  "Nawal Kishore Road, Behind the CBI Office, Front of Padmakar Bhawan, Hazratganj, Lucknow, Uttar Pradesh 226001";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Nawal+Kishore+Road+Hazratganj+Lucknow+226001";

const ADVISORY_STEPS = [
  {
    step: "01",
    title: "Stream-Specific Routing",
    description:
      "Your inquiry is assigned to a counselor specializing in Medical, Engineering, Management, or Undergraduate pathways.",
  },
  {
    step: "02",
    title: "Eligibility & Document Review",
    description:
      "We evaluate your academic profile against active 2025-26 merit and need-based scholarship criteria.",
  },
  {
    step: "03",
    title: "Direct Guidance Callback",
    description:
      "Receive a clear phone or email response outlining next steps, verified deadlines, and zero-fee counseling support.",
  },
];

export default function ContactPage() {
  const [selectedTopic, setSelectedTopic] = useState<string>(INQUIRY_TOPICS[0]);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [qualification, setQualification] = useState<string>(QUALIFICATIONS[0]);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    setReferenceId(`MS-2025-${randomCode}`);
    setSubmitted(true);
  }

  function handleReset() {
    setFullName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setSelectedTopic(INQUIRY_TOPICS[0]);
    setQualification(QUALIFICATIONS[0]);
    setSubmitted(false);
  }

  return (
    <div className="relative overflow-hidden bg-[#FAFCFB] pt-28 pb-24 dark:bg-[#07120F]">
      {/* Subtle Top Institutional Ambient Wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[440px] bg-[radial-gradient(ellipse_75%_65%_at_50%_0%,rgba(21,150,111,0.09),transparent_72%)] dark:bg-[radial-gradient(ellipse_75%_65%_at_50%_0%,rgba(52,211,153,0.08),transparent_72%)]"
      />

      {/* Editorial Hero Header */}
      <section className="relative z-10 pb-10 sm:pb-12">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4E6DF] bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#073D32] shadow-2xs dark:border-[#1E3B32] dark:bg-[#0D1E19] dark:text-[#6EE7B7]">
            <span className="h-2 w-2 rounded-full bg-[#15966F] shadow-[0_0_0_3px_rgba(21,150,111,0.18)]" />
            <span>Scholarship Advisory Desk</span>
            <span className="text-[#B8CFC6] dark:text-[#2A4E43]">&bull;</span>
            <span className="text-[#15966F] dark:text-[#34D399]">Hazratganj, Lucknow</span>
          </div>

          <h1 className="mt-5 font-heading text-3xl font-extrabold tracking-[-0.03em] text-[#0E241E] sm:text-4xl lg:text-[46px] lg:leading-[1.12] dark:text-white">
            Connect With Our{" "}
            <span className="font-editorial font-normal italic text-[#15966F] dark:text-[#34D399]">
              Counseling Team
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.72] text-[#52635C] sm:text-[16px] dark:text-[#A0B3AC]">
            Reach out directly for clarity on scholarship eligibility, test schedules, document verification, and accredited admission pathways across India.
          </p>
        </div>
      </section>

      {/* Quick Direct Contact Channels Strip */}
      <section className="relative z-10 pb-10 sm:pb-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Phone Channel */}
            <a
              href={`tel:${footerLinks.contact.phone.replace(/\s+/g, "")}`}
              className="group relative flex items-start justify-between gap-4 rounded-[22px] border border-[#DCE8E3] border-b-[2.5px] border-b-[#C7DED4] bg-white p-5 shadow-[0_12px_28px_-16px_rgba(7,61,50,0.12),inset_0_1px_0_rgba(255,255,255,1)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#15966F]/45 hover:shadow-[0_18px_36px_-16px_rgba(7,61,50,0.18)] dark:border-[#1E3B32] dark:bg-[#0D1E19]"
            >
              <div className="flex items-start gap-3.5 min-w-0">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#15966F]/15 bg-[#EBF7F1] text-[#0B7453] transition-colors group-hover:bg-[#073D32] group-hover:text-white dark:border-[#34D399]/20 dark:bg-[#132E26] dark:text-[#34D399]">
                  <Phone className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#15966F] dark:text-[#34D399]">
                    Call Helpline
                  </div>
                  <div className="mt-1 font-heading text-[16px] font-bold text-[#0E241E] dark:text-white">
                    {footerLinks.contact.phone}
                  </div>
                  <p className="mt-0.5 text-[12.5px] text-[#5C6B64] dark:text-[#A0B3AC]">
                    Mon - Sat, 9:30 AM - 6:00 PM IST
                  </p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-[#869991] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#15966F]" />
            </a>

            {/* Email Channel */}
            <a
              href={`mailto:${footerLinks.contact.email}`}
              className="group relative flex items-start justify-between gap-4 rounded-[22px] border border-[#DCE8E3] border-b-[2.5px] border-b-[#C7DED4] bg-white p-5 shadow-[0_12px_28px_-16px_rgba(7,61,50,0.12),inset_0_1px_0_rgba(255,255,255,1)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#15966F]/45 hover:shadow-[0_18px_36px_-16px_rgba(7,61,50,0.18)] dark:border-[#1E3B32] dark:bg-[#0D1E19]"
            >
              <div className="flex items-start gap-3.5 min-w-0">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#15966F]/15 bg-[#EBF7F1] text-[#0B7453] transition-colors group-hover:bg-[#073D32] group-hover:text-white dark:border-[#34D399]/20 dark:bg-[#132E26] dark:text-[#34D399]">
                  <Mail className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#15966F] dark:text-[#34D399]">
                    Email Desk
                  </div>
                  <div className="mt-1 truncate font-heading text-[15px] font-bold text-[#0E241E] dark:text-white">
                    {footerLinks.contact.email}
                  </div>
                  <p className="mt-0.5 text-[12.5px] text-[#5C6B64] dark:text-[#A0B3AC]">
                    Replies within 2 to 4 business hours
                  </p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-[#869991] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#15966F]" />
            </a>

            {/* Office Channel */}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-start justify-between gap-4 rounded-[22px] border border-[#DCE8E3] border-b-[2.5px] border-b-[#C7DED4] bg-white p-5 shadow-[0_12px_28px_-16px_rgba(7,61,50,0.12),inset_0_1px_0_rgba(255,255,255,1)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#15966F]/45 hover:shadow-[0_18px_36px_-16px_rgba(7,61,50,0.18)] dark:border-[#1E3B32] dark:bg-[#0D1E19]"
            >
              <div className="flex items-start gap-3.5 min-w-0">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#15966F]/15 bg-[#EBF7F1] text-[#0B7453] transition-colors group-hover:bg-[#073D32] group-hover:text-white dark:border-[#34D399]/20 dark:bg-[#132E26] dark:text-[#34D399]">
                  <MapPin className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#15966F] dark:text-[#34D399]">
                    Counseling Office
                  </div>
                  <div className="mt-1 font-heading text-[15.5px] font-bold text-[#0E241E] dark:text-white">
                    Hazratganj, Lucknow
                  </div>
                  <p className="mt-0.5 text-[12.5px] text-[#5C6B64] dark:text-[#A0B3AC]">
                    Nawal Kishore Road, PIN 226001
                  </p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-[#869991] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#15966F]" />
            </a>
          </div>
        </div>
      </section>

      {/* Main 12-Column Split Workspace */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            {/* LEFT (7 Cols): Interactive Scholarship Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-[28px] border border-[#D4E6DF] border-b-[3px] border-b-[#BCD8CC] bg-white p-6 shadow-[0_24px_56px_-24px_rgba(7,61,50,0.14),inset_0_1px_0_rgba(255,255,255,1)] sm:p-8 lg:p-9 dark:border-[#1E3B32] dark:border-b-[#122922] dark:bg-[#0D1E19]">
                {/* Top Accent Hairline */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#15966F]/50 to-transparent"
                />

                {submitted ? (
                  <div className="py-10 text-center sm:py-14">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#15966F]/25 bg-[#EBF7F1] text-[#0B7453] shadow-xs dark:border-[#34D399]/25 dark:bg-[#132E26] dark:text-[#34D399]">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>

                    <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#D4E6DF] bg-[#FAFCFB] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#073D32] dark:border-[#1E3B32] dark:bg-[#0A1713] dark:text-[#6EE7B7]">
                      <span>Reference ID: {referenceId}</span>
                    </div>

                    <h2 className="mt-4 font-heading text-2xl font-extrabold tracking-tight text-[#0E241E] dark:text-white">
                      Inquiry Received, {fullName || "Student"}
                    </h2>

                    <p className="mx-auto mt-2.5 max-w-md text-[14.5px] leading-relaxed text-[#52635C] dark:text-[#A0B3AC]">
                      Your message regarding{" "}
                      <span className="font-semibold text-[#073D32] dark:text-[#6EE7B7]">
                        {selectedTopic}
                      </span>{" "}
                      has been logged with our advisory desk. An academic counselor will reach out within 2 to 4 business hours.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center gap-2 rounded-full border border-[#CFE2DA] bg-white px-5 py-2.5 text-[13.5px] font-semibold text-[#073D32] transition-colors hover:border-[#15966F]/50 hover:text-[#15966F] cursor-pointer dark:border-[#1E3B32] dark:bg-[#132E26] dark:text-white"
                      >
                        <RotateCcw className="h-4 w-4" />
                        <span>Send Another Inquiry</span>
                      </button>

                      <Link
                        href="/scholarships"
                        className="inline-flex items-center gap-2 rounded-full bg-[#073D32] px-5 py-2.5 text-[13.5px] font-semibold text-white transition-colors hover:bg-[#0D5747] dark:bg-[#15966F]"
                      >
                        <span>Explore Scholarships</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#15966F] dark:text-[#34D399]">
                        Direct Counseling Form
                      </span>
                      <h2 className="mt-1.5 font-heading text-2xl font-extrabold tracking-[-0.02em] text-[#0E241E] dark:text-white">
                        Send Your Query to an Advisor
                      </h2>
                      <p className="mt-1.5 text-[14px] leading-relaxed text-[#5C6B64] dark:text-[#A0B3AC]">
                        Select a topic and share your details so we can connect you with the right scholarship counselor.
                      </p>
                    </div>

                    {/* Topic Selection Pills */}
                    <div className="space-y-2.5">
                      <Label className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#3B4E47] dark:text-[#A0B3AC]">
                        Topic of Inquiry
                      </Label>
                      <div className="flex flex-wrap gap-2">
                        {INQUIRY_TOPICS.map((topic) => {
                          const isActive = selectedTopic === topic;
                          return (
                            <button
                              key={topic}
                              type="button"
                              onClick={() => setSelectedTopic(topic)}
                              className={`rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold transition-all duration-200 cursor-pointer ${
                                isActive
                                  ? "bg-[#073D32] text-white shadow-[0_6px_16px_-4px_rgba(7,61,50,0.35)] dark:bg-[#15966F]"
                                  : "border border-[#DCE8E3] bg-[#FAFCFB] text-[#465952] hover:border-[#15966F]/45 hover:bg-white hover:text-[#073D32] dark:border-[#1E3B32] dark:bg-[#0A1713] dark:text-[#A0B3AC] dark:hover:text-white"
                              }`}
                            >
                              {topic}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Row 1: Full Name + Phone */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="name"
                          className="text-[12.5px] font-semibold text-[#1B3A31] dark:text-[#D5E6DF]"
                        >
                          Full Name <span className="text-[#15966F]">*</span>
                        </Label>
                        <Input
                          id="name"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Aarav Sharma"
                          required
                          className="h-11.5 rounded-xl border-[#D5E4DE] bg-[#FAFCFB] px-3.5 text-[14px] text-[#0E241E] placeholder:text-[#8CA098] focus-visible:border-[#15966F] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-[#15966F]/10 dark:border-[#1E3B32] dark:bg-[#0A1713] dark:text-white"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label
                          htmlFor="phone"
                          className="text-[12.5px] font-semibold text-[#1B3A31] dark:text-[#D5E6DF]"
                        >
                          Phone Number <span className="text-[#15966F]">*</span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          required
                          className="h-11.5 rounded-xl border-[#D5E4DE] bg-[#FAFCFB] px-3.5 text-[14px] text-[#0E241E] placeholder:text-[#8CA098] focus-visible:border-[#15966F] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-[#15966F]/10 dark:border-[#1E3B32] dark:bg-[#0A1713] dark:text-white"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email + Current Qualification */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="email"
                          className="text-[12.5px] font-semibold text-[#1B3A31] dark:text-[#D5E6DF]"
                        >
                          Email Address <span className="text-[#15966F]">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="aarav.sharma@email.com"
                          required
                          className="h-11.5 rounded-xl border-[#D5E4DE] bg-[#FAFCFB] px-3.5 text-[14px] text-[#0E241E] placeholder:text-[#8CA098] focus-visible:border-[#15966F] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-[#15966F]/10 dark:border-[#1E3B32] dark:bg-[#0A1713] dark:text-white"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label
                          htmlFor="qualification"
                          className="text-[12.5px] font-semibold text-[#1B3A31] dark:text-[#D5E6DF]"
                        >
                          Academic Profile
                        </Label>
                        <select
                          id="qualification"
                          value={qualification}
                          onChange={(e) => setQualification(e.target.value)}
                          className="h-11.5 w-full rounded-xl border border-[#D5E4DE] bg-[#FAFCFB] px-3.5 text-[14px] text-[#0E241E] outline-none transition-all focus:border-[#15966F] focus:bg-white focus:ring-4 focus:ring-[#15966F]/10 dark:border-[#1E3B32] dark:bg-[#0A1713] dark:text-white"
                        >
                          {QUALIFICATIONS.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 3: Detailed Message */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="message"
                        className="text-[12.5px] font-semibold text-[#1B3A31] dark:text-[#D5E6DF]"
                      >
                        How Can We Help? <span className="text-[#15966F]">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Share your preferred course (e.g. MBBS, B.Tech, MBA), current marks or exam details, and any specific questions..."
                        required
                        className="resize-none rounded-xl border-[#D5E4DE] bg-[#FAFCFB] px-3.5 py-3 text-[14px] leading-relaxed text-[#0E241E] placeholder:text-[#8CA098] focus-visible:border-[#15966F] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-[#15966F]/10 dark:border-[#1E3B32] dark:bg-[#0A1713] dark:text-white"
                      />
                    </div>

                    {/* Privacy & Zero-Fee Assurance */}
                    <div className="flex items-start gap-3 rounded-2xl border border-[#DCECE5] bg-[#F4FAF7] p-4 dark:border-[#18332B] dark:bg-[#0A1713]">
                      <ShieldCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#15966F] dark:text-[#34D399]" />
                      <p className="text-[12.5px] leading-relaxed text-[#4E615A] dark:text-[#A0B3AC]">
                        Your personal details remain strictly confidential. MileStone counseling is 100% free and we never share student contact information with external advertisers.
                      </p>
                    </div>

                    {/* Primary Submit CTA */}
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      className="group flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#073D32] to-[#11644E] px-6 py-3.5 text-[14.5px] font-semibold text-white shadow-[0_14px_30px_-8px_rgba(7,61,50,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:from-[#0A4E3F] hover:to-[#158062] cursor-pointer"
                    >
                      <span>Submit Scholarship Inquiry</span>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#073D32] transition-transform duration-200 group-hover:translate-x-0.5">
                        <Send className="h-3.5 w-3.5" />
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* RIGHT (5 Cols): Office Directory, Hours & Advisory Process */}
            <div className="space-y-6 lg:col-span-5">
              {/* Regional Office & Hours Card */}
              <div className="relative overflow-hidden rounded-[26px] border border-[#D4E6DF] border-b-[3px] border-b-[#BCD8CC] bg-gradient-to-br from-white via-[#FAFCFB] to-[#EBF7F1] p-6 shadow-[0_18px_42px_-20px_rgba(7,61,50,0.14),inset_0_1px_0_rgba(255,255,255,1)] sm:p-7 dark:border-[#1E3B32] dark:from-[#0C1C17] dark:to-[#112A22]">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#15966F] dark:text-[#34D399]">
                    Regional Office
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-[#073D32] shadow-2xs dark:bg-[#132E26] dark:text-[#6EE7B7]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#15966F]" />
                    Open Mon - Sat
                  </span>
                </div>

                <h3 className="mt-3 font-heading text-[19px] font-bold tracking-tight text-[#0E241E] dark:text-white">
                  MileStone Counseling Center, Lucknow
                </h3>

                <div className="mt-3.5 flex items-start gap-3 text-[13.5px] leading-[1.68] text-[#52635C] dark:text-[#A0B3AC]">
                  <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#15966F] dark:text-[#34D399]" />
                  <span>{OFFICE_ADDRESS}</span>
                </div>

                {/* Hours Schedule */}
                <div className="mt-5 space-y-2.5 rounded-2xl border border-[#DCE8E3] bg-white/90 p-4 text-[13px] dark:border-[#18332B] dark:bg-[#0A1713]/85">
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#15966F] dark:text-[#34D399]">
                    <Clock className="h-3.5 w-3.5" />
                    <span>Counseling Hours</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-[#EDF4F0] pb-2 dark:border-[#18332B]">
                    <span className="font-medium text-[#52635C] dark:text-[#A0B3AC]">
                      Monday to Saturday
                    </span>
                    <span className="font-semibold text-[#0E241E] dark:text-white">
                      9:30 AM - 6:00 PM IST
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-0.5">
                    <span className="font-medium text-[#52635C] dark:text-[#A0B3AC]">
                      Sunday
                    </span>
                    <span className="font-medium text-[#687A73] dark:text-[#8DA29A]">
                      Email Desk Monitored
                    </span>
                  </div>
                </div>

                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-[#073D32] transition-colors hover:text-[#15966F] dark:text-[#6EE7B7] dark:hover:text-[#34D399]"
                >
                  <span>Get Directions on Google Maps</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              {/* What Happens Next Card */}
              <div className="rounded-[26px] border border-[#DCE8E3] bg-white p-6 shadow-[0_14px_34px_-18px_rgba(7,61,50,0.10)] sm:p-7 dark:border-[#1E3B32] dark:bg-[#0D1E19]">
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#15966F] dark:text-[#34D399]">
                  What Happens Next
                </span>
                <h3 className="mt-1.5 font-heading text-[18px] font-bold tracking-tight text-[#0E241E] dark:text-white">
                  Structured Response Process
                </h3>

                <div className="mt-5 space-y-4">
                  {ADVISORY_STEPS.map((item) => (
                    <div key={item.step} className="flex items-start gap-3.5">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[#DCE8E3] bg-[#F2F9F6] font-heading text-[12px] font-bold text-[#073D32] dark:border-[#1E3B32] dark:bg-[#132E26] dark:text-[#6EE7B7]">
                        {item.step}
                      </span>
                      <div>
                        <div className="font-heading text-[14px] font-bold text-[#0E241E] dark:text-white">
                          {item.title}
                        </div>
                        <p className="mt-0.5 text-[13px] leading-relaxed text-[#5C6B64] dark:text-[#A0B3AC]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Self-Service Resources */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Link
                  href="/faqs"
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-[#DCE8E3] bg-white px-4 py-3.5 shadow-2xs transition-all hover:border-[#15966F]/45 hover:shadow-sm dark:border-[#1E3B32] dark:bg-[#0D1E19]"
                >
                  <div className="flex items-center gap-2.5">
                    <HelpCircle className="h-4.5 w-4.5 text-[#15966F] dark:text-[#34D399]" />
                    <span className="text-[13px] font-semibold text-[#0E241E] group-hover:text-[#073D32] dark:text-white">
                      Read FAQs
                    </span>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-[#869991] transition-transform group-hover:translate-x-0.5 group-hover:text-[#15966F]" />
                </Link>

                <Link
                  href="/important-dates"
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-[#DCE8E3] bg-white px-4 py-3.5 shadow-2xs transition-all hover:border-[#15966F]/45 hover:shadow-sm dark:border-[#1E3B32] dark:bg-[#0D1E19]"
                >
                  <div className="flex items-center gap-2.5">
                    <CalendarDays className="h-4.5 w-4.5 text-[#15966F] dark:text-[#34D399]" />
                    <span className="text-[13px] font-semibold text-[#0E241E] group-hover:text-[#073D32] dark:text-white">
                      2025-26 Dates
                    </span>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-[#869991] transition-transform group-hover:translate-x-0.5 group-hover:text-[#15966F]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
