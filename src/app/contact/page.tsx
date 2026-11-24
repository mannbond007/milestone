"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  RotateCcw,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { footerLinks } from "@/constants/navigation";

const OFFICE_ADDRESS =
  "Nawal Kishore Road, Behind the CBI Office, Front of Padmakar Bhawan, Hazratganj, Lucknow 226001";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Nawal+Kishore+Road+Hazratganj+Lucknow+226001";

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleReset() {
    setFullName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setSubmitted(false);
  }

  return (
    <div className="relative overflow-hidden bg-[#F5FAF7] pt-24 pb-16 sm:pt-28 sm:pb-20 dark:bg-[#07120F]">
      {/* Soft Layered Ambient Light Orbs for True Glass Refraction */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(21,150,111,0.16),transparent_68%)] blur-2xl dark:bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.12),transparent_68%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-[36%] h-72 w-72 rounded-full bg-[#15966F]/12 blur-[95px] dark:bg-[#15966F]/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[8%] right-[8%] h-80 w-80 rounded-full bg-[#34D399]/14 blur-[110px] dark:bg-[#34D399]/10"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Compact Centered Editorial Header */}
        <div className="mx-auto max-w-xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/75 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#073D32] shadow-[0_6px_18px_-8px_rgba(7,61,50,0.15),inset_0_1px_0_rgba(255,255,255,1)] backdrop-blur-md dark:border-white/10 dark:bg-[#0D1E19]/80 dark:text-[#6EE7B7]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#15966F] shadow-[0_0_0_3px_rgba(21,150,111,0.2)]" />
            Contact Us
          </span>

          <h1 className="mt-3.5 font-heading text-3xl font-extrabold tracking-[-0.03em] text-[#0E241E] sm:text-[40px] sm:leading-[1.12] dark:text-white">
            Get in Touch With{" "}
            <span className="font-editorial font-normal italic text-[#15966F] dark:text-[#34D399]">
              Our Team
            </span>
          </h1>

          <p className="mt-2.5 text-[14.5px] leading-relaxed text-[#52635C] sm:text-[15px] dark:text-[#A0B3AC]">
            Have a question about scholarships, eligibility, or admissions? Send us a message or reach our counseling desk directly.
          </p>
        </div>

        {/* Ultra-Premium Frosted Glass 2-Column Card */}
        <div className="relative mt-9 overflow-hidden rounded-[30px] border border-white/85 bg-white/65 ring-1 ring-[#15966F]/12 shadow-[0_28px_70px_-24px_rgba(7,61,50,0.18),0_4px_14px_-4px_rgba(7,61,50,0.06),inset_0_1px_1px_rgba(255,255,255,0.95)] backdrop-blur-2xl sm:mt-10 dark:border-white/10 dark:bg-[#0D1E19]/70 dark:ring-[#34D399]/15 dark:shadow-[0_28px_70px_-24px_rgba(0,0,0,0.65)]">
          {/* Specular Top Glass Edge Highlight */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-90 dark:via-[#34D399]/40"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* LEFT: Frosted Mint Glass Contact Panel */}
            <div className="flex flex-col justify-between border-b border-white/70 bg-gradient-to-br from-[#E6F6EE]/75 via-[#F2FAF6]/65 to-white/50 p-6 backdrop-blur-xl sm:p-8 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-9 dark:border-white/10 dark:from-[#102921]/80 dark:via-[#0D211B]/75 dark:to-[#0A1814]/70">
              <div>
                <h2 className="font-heading text-[20px] font-bold tracking-tight text-[#0E241E] dark:text-white">
                  Contact Information
                </h2>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#4F635B] dark:text-[#A0B3AC]">
                  Our scholarship counselors are available Monday to Saturday to assist students and parents.
                </p>

                <div className="mt-6 space-y-3">
                  {/* Phone Glass Tile */}
                  <a
                    href={`tel:${footerLinks.contact.phone.replace(/\s+/g, "")}`}
                    className="group flex items-center justify-between gap-3 rounded-2xl border border-white/85 bg-white/60 p-3.5 shadow-[0_6px_18px_-10px_rgba(7,61,50,0.12),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-[#15966F]/30 hover:bg-white/90 dark:border-white/10 dark:bg-[#0D1E19]/65 dark:hover:border-[#34D399]/35 dark:hover:bg-[#112922]"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#15966F]/15 bg-[#EBF7F1]/90 text-[#0B7453] transition-colors group-hover:bg-[#073D32] group-hover:text-white dark:border-[#34D399]/20 dark:bg-[#132E26] dark:text-[#34D399]">
                        <Phone className="h-4.5 w-4.5" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#15966F] dark:text-[#34D399]">
                          Phone
                        </div>
                        <div className="mt-0.5 font-heading text-[14.5px] font-semibold text-[#0E241E] dark:text-white">
                          {footerLinks.contact.phone}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-[#869991] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#15966F]" />
                  </a>

                  {/* Email Glass Tile */}
                  <a
                    href={`mailto:${footerLinks.contact.email}`}
                    className="group flex items-center justify-between gap-3 rounded-2xl border border-white/85 bg-white/60 p-3.5 shadow-[0_6px_18px_-10px_rgba(7,61,50,0.12),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-[#15966F]/30 hover:bg-white/90 dark:border-white/10 dark:bg-[#0D1E19]/65 dark:hover:border-[#34D399]/35 dark:hover:bg-[#112922]"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#15966F]/15 bg-[#EBF7F1]/90 text-[#0B7453] transition-colors group-hover:bg-[#073D32] group-hover:text-white dark:border-[#34D399]/20 dark:bg-[#132E26] dark:text-[#34D399]">
                        <Mail className="h-4.5 w-4.5" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#15966F] dark:text-[#34D399]">
                          Email
                        </div>
                        <div className="mt-0.5 truncate font-heading text-[14px] font-semibold text-[#0E241E] dark:text-white">
                          {footerLinks.contact.email}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-[#869991] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#15966F]" />
                  </a>

                  {/* Office Address Glass Tile */}
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between gap-3 rounded-2xl border border-white/85 bg-white/60 p-3.5 shadow-[0_6px_18px_-10px_rgba(7,61,50,0.12),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-[#15966F]/30 hover:bg-white/90 dark:border-white/10 dark:bg-[#0D1E19]/65 dark:hover:border-[#34D399]/35 dark:hover:bg-[#112922]"
                  >
                    <div className="flex items-start gap-3.5 min-w-0">
                      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#15966F]/15 bg-[#EBF7F1]/90 text-[#0B7453] transition-colors group-hover:bg-[#073D32] group-hover:text-white dark:border-[#34D399]/20 dark:bg-[#132E26] dark:text-[#34D399]">
                        <MapPin className="h-4.5 w-4.5" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#15966F] dark:text-[#34D399]">
                          Office
                        </div>
                        <div className="mt-0.5 text-[13px] leading-[1.58] text-[#2C423B] dark:text-[#D5E6DF]">
                          {OFFICE_ADDRESS}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[#869991] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#15966F]" />
                  </a>
                </div>
              </div>

              {/* Frosted Operating Hours Pill */}
              <div className="mt-6 flex items-center gap-2.5 rounded-xl border border-white/85 bg-white/60 px-3.5 py-2.5 text-[12px] font-medium text-[#465952] shadow-[inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-md dark:border-white/10 dark:bg-[#0A1713]/70 dark:text-[#A0B3AC]">
                <Clock className="h-3.5 w-3.5 shrink-0 text-[#15966F] dark:text-[#34D399]" />
                <span>{footerLinks.contact.hours}</span>
              </div>
            </div>

            {/* RIGHT: Luminous Frosted Contact Form */}
            <div className="flex flex-col justify-between bg-white/45 p-6 sm:p-8 lg:col-span-7 lg:p-9 dark:bg-transparent">
              {submitted ? (
                <div className="my-auto flex flex-col items-center justify-center py-10 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#15966F]/20 bg-[#EBF7F1] text-[#0B7453] shadow-xs dark:border-[#34D399]/25 dark:bg-[#132E26] dark:text-[#34D399]">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-bold text-[#0E241E] dark:text-white">
                    Message Sent
                  </h3>
                  <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-[#52635C] dark:text-[#A0B3AC]">
                    Thank you, {fullName || "Student"}. Our counseling team will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#CFE2DA] bg-white/90 px-5 py-2 text-[13px] font-semibold text-[#073D32] shadow-2xs transition-colors hover:border-[#15966F]/50 hover:text-[#15966F] cursor-pointer dark:border-white/15 dark:bg-[#132E26] dark:text-white"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex h-full flex-col justify-between space-y-5"
                >
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="name"
                          className="text-[12.5px] font-semibold text-[#1B3A31] dark:text-[#D5E6DF]"
                        >
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Your full name"
                          required
                          className="h-11 rounded-xl border-white/90 bg-white/75 px-3.5 text-[14px] text-[#0E241E] ring-1 ring-[#D4E4DD] shadow-[inset_0_1px_2px_rgba(7,61,50,0.03)] backdrop-blur-md placeholder:text-[#8CA098] transition-all focus-visible:border-[#15966F] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-[#15966F]/12 dark:border-white/10 dark:bg-[#0A1713]/75 dark:text-white dark:ring-[#1E3B32]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label
                          htmlFor="phone"
                          className="text-[12.5px] font-semibold text-[#1B3A31] dark:text-[#D5E6DF]"
                        >
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          required
                          className="h-11 rounded-xl border-white/90 bg-white/75 px-3.5 text-[14px] text-[#0E241E] ring-1 ring-[#D4E4DD] shadow-[inset_0_1px_2px_rgba(7,61,50,0.03)] backdrop-blur-md placeholder:text-[#8CA098] transition-all focus-visible:border-[#15966F] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-[#15966F]/12 dark:border-white/10 dark:bg-[#0A1713]/75 dark:text-white dark:ring-[#1E3B32]"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="email"
                        className="text-[12.5px] font-semibold text-[#1B3A31] dark:text-[#D5E6DF]"
                      >
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        required
                        className="h-11 rounded-xl border-white/90 bg-white/75 px-3.5 text-[14px] text-[#0E241E] ring-1 ring-[#D4E4DD] shadow-[inset_0_1px_2px_rgba(7,61,50,0.03)] backdrop-blur-md placeholder:text-[#8CA098] transition-all focus-visible:border-[#15966F] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-[#15966F]/12 dark:border-white/10 dark:bg-[#0A1713]/75 dark:text-white dark:ring-[#1E3B32]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="message"
                        className="text-[12.5px] font-semibold text-[#1B3A31] dark:text-[#D5E6DF]"
                      >
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="How can we help you?"
                        required
                        className="resize-none rounded-xl border-white/90 bg-white/75 px-3.5 py-3 text-[14px] leading-relaxed text-[#0E241E] ring-1 ring-[#D4E4DD] shadow-[inset_0_1px_2px_rgba(7,61,50,0.03)] backdrop-blur-md placeholder:text-[#8CA098] transition-all focus-visible:border-[#15966F] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-[#15966F]/12 dark:border-white/10 dark:bg-[#0A1713]/75 dark:text-white dark:ring-[#1E3B32]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-start justify-between gap-4 pt-1 sm:flex-row sm:items-center">
                    <span className="text-[12px] text-[#5C6B64] dark:text-[#8DA29A]">
                      Typical response within 2 to 4 business hours.
                    </span>

                    <button
                      id="contact-submit-btn"
                      type="submit"
                      className="group inline-flex w-full shrink-0 items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#073D32] to-[#11644E] py-2.5 pl-5.5 pr-2.5 text-[13.5px] font-semibold text-white shadow-[0_12px_26px_-8px_rgba(7,61,50,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:from-[#0A4E3F] hover:to-[#158062] cursor-pointer sm:w-auto"
                    >
                      <span>Send Message</span>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#073D32] transition-transform duration-200 group-hover:translate-x-0.5">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
