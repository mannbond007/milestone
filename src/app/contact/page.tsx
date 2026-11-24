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
  ShieldCheck,
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
    <div className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-gradient-to-br from-[#ECF6F1] via-[#F7FBF9] to-[#E5F3EC] pt-28 pb-20 sm:pt-32 sm:pb-24 dark:from-[#07120F] dark:via-[#091814] dark:to-[#0B1E18]">
      {/* Subtle Ambient Soft Light Accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-[#15966F]/10 blur-[110px] dark:bg-[#15966F]/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-[#34D399]/12 blur-[110px] dark:bg-[#34D399]/10"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1000px] px-4 sm:px-6 lg:px-8">
        {/* Overlapping Architectural Stage */}
        <div className="relative">
          {/* LEFT FLOATING OVERLAPPING CARD: Deep Forest Emerald Contact Us Card */}
          <div className="relative z-20 mx-3 -mb-7 overflow-hidden rounded-[24px] border border-white/15 bg-gradient-to-br from-[#06362C] via-[#0B4D3F] to-[#116854] p-7 text-white shadow-[0_32px_64px_-16px_rgba(7,61,50,0.52),0_8px_20px_-8px_rgba(7,61,50,0.32),inset_0_1px_1px_rgba(255,255,255,0.24)] sm:mx-6 sm:p-9 lg:absolute lg:left-0 lg:top-1/2 lg:mx-0 lg:mb-0 lg:w-[360px] lg:-translate-y-1/2 lg:p-9">
            {/* Specular Top Edge Sheen */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
            />
            {/* Subtle Micro-Dot Architectural Texture */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />
            {/* Internal Atmospheric Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full bg-[#34D399]/22 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -left-12 h-48 w-48 rounded-full bg-[#031F19]/65 blur-2xl"
            />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#86EFAC]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6EE7B7] shadow-[0_0_8px_rgba(110,231,183,0.9)]" />
                <span>Advisory Desk</span>
              </div>

              <h2 className="mt-2 font-heading text-[26px] font-bold tracking-tight text-white">
                Contact Us
              </h2>
              <div className="mt-2.5 h-[2px] w-10 rounded-full bg-gradient-to-r from-[#6EE7B7] to-transparent" />

              <div className="mt-7 space-y-2">
                {/* Address */}
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group -mx-2.5 flex items-start justify-between gap-3 rounded-2xl px-2.5 py-2.5 text-white/90 transition-all duration-200 hover:bg-white/[0.08] hover:text-white"
                >
                  <div className="flex items-start gap-3.5 min-w-0">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#86EFAC] shadow-xs transition-colors group-hover:border-[#6EE7B7]/40 group-hover:bg-white/18">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <span className="text-[13px] leading-[1.6] text-white/85 group-hover:text-white">
                      {OFFICE_ADDRESS}
                    </span>
                  </div>
                  <ArrowUpRight className="mt-1 h-3.5 w-3.5 shrink-0 text-white/0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#86EFAC]" />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${footerLinks.contact.email}`}
                  className="group -mx-2.5 flex items-center justify-between gap-3 rounded-2xl px-2.5 py-2.5 text-white/90 transition-all duration-200 hover:bg-white/[0.08] hover:text-white"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#86EFAC] shadow-xs transition-colors group-hover:border-[#6EE7B7]/40 group-hover:bg-white/18">
                      <Mail className="h-4 w-4" />
                    </span>
                    <span className="truncate text-[13.5px] font-medium text-white/90 group-hover:text-white">
                      {footerLinks.contact.email}
                    </span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-white/0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#86EFAC]" />
                </a>

                {/* Phone */}
                <a
                  href={`tel:${footerLinks.contact.phone.replace(/\s+/g, "")}`}
                  className="group -mx-2.5 flex items-center justify-between gap-3 rounded-2xl px-2.5 py-2.5 text-white/90 transition-all duration-200 hover:bg-white/[0.08] hover:text-white"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#86EFAC] shadow-xs transition-colors group-hover:border-[#6EE7B7]/40 group-hover:bg-white/18">
                      <Phone className="h-4 w-4" />
                    </span>
                    <span className="text-[14.5px] font-semibold tracking-wide text-white/95 group-hover:text-white">
                      {footerLinks.contact.phone}
                    </span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-white/0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#86EFAC]" />
                </a>
              </div>

              {/* Anchored Operating Hours Footer */}
              <div className="mt-6 flex items-center gap-3 border-t border-white/12 pt-5 text-white/80">
                <Clock className="h-4 w-4 shrink-0 text-[#6EE7B7]" />
                <span className="text-[12.5px] leading-snug">
                  {footerLinks.contact.hours}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT ELEVATED WHITE MAIN CARD: Get in Touch Form */}
          <div className="relative z-10 overflow-hidden rounded-[28px] border border-[#D4E6DF] border-b-[3px] border-b-[#BFD8CE] bg-white px-6 pb-9 pt-14 shadow-[0_38px_84px_-26px_rgba(7,61,50,0.16),0_8px_20px_-8px_rgba(7,61,50,0.06),inset_0_1px_0_rgba(255,255,255,1)] sm:px-10 sm:pb-12 sm:pt-16 lg:ml-[96px] lg:min-h-[545px] lg:py-12 lg:pl-[312px] lg:pr-12 dark:border-[#1E3B32] dark:border-b-[#122922] dark:bg-[#0D1E19] dark:shadow-[0_38px_84px_-26px_rgba(0,0,0,0.7)]">
            {/* Subtle Top Porcelain Specular Accent */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#15966F]/30 to-transparent"
            />

            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="flex h-15 w-15 items-center justify-center rounded-2xl border border-[#15966F]/20 bg-[#EBF7F1] text-[#0B7453] shadow-xs dark:border-[#34D399]/25 dark:bg-[#132E26] dark:text-[#34D399]">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h2 className="mt-5 font-heading text-2xl font-extrabold tracking-tight text-[#0E241E] dark:text-white">
                  Message Sent
                </h2>
                <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-[#52635C] dark:text-[#A0B3AC]">
                  Thank you, {fullName || "Student"}. Our scholarship counseling team will reply within 2 to 4 business hours.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#CFE2DA] bg-[#F7FBF9] px-5 py-2.5 text-[13px] font-semibold text-[#073D32] transition-colors hover:border-[#15966F]/50 hover:bg-white hover:text-[#15966F] cursor-pointer dark:border-[#1E3B32] dark:bg-[#132E26] dark:text-white"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Send Another Message</span>
                </button>
              </div>
            ) : (
              <div>
                <h1 className="font-heading text-3xl font-extrabold tracking-[-0.025em] text-[#0E241E] sm:text-[34px] sm:leading-[1.14] dark:text-white">
                  Get in{" "}
                  <span className="font-editorial font-normal italic text-[#15966F] dark:text-[#34D399]">
                    Touch
                  </span>
                </h1>
                <p className="mt-2 text-[14px] leading-relaxed text-[#5F736B] dark:text-[#A0B3AC]">
                  Feel free to drop us a line below and our counseling team will respond promptly.
                </p>

                <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="name"
                        className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#566B63] dark:text-[#8DA29A]"
                      >
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Aarav Sharma"
                        required
                        className="h-11.5 rounded-xl border-[#DFEBE6] bg-[#F5F9F7] px-4 text-[14px] text-[#0E241E] shadow-[inset_0_1px_2px_rgba(7,61,50,0.03)] placeholder:text-[#8DA199] transition-all hover:border-[#C5DDD3] focus-visible:border-[#15966F] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-[#15966F]/10 dark:border-[#18332B] dark:bg-[#0A1713] dark:text-white"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="phone"
                        className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#566B63] dark:text-[#8DA29A]"
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
                        className="h-11.5 rounded-xl border-[#DFEBE6] bg-[#F5F9F7] px-4 text-[14px] text-[#0E241E] shadow-[inset_0_1px_2px_rgba(7,61,50,0.03)] placeholder:text-[#8DA199] transition-all hover:border-[#C5DDD3] focus-visible:border-[#15966F] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-[#15966F]/10 dark:border-[#18332B] dark:bg-[#0A1713] dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="email"
                      className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#566B63] dark:text-[#8DA29A]"
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
                      className="h-11.5 rounded-xl border-[#DFEBE6] bg-[#F5F9F7] px-4 text-[14px] text-[#0E241E] shadow-[inset_0_1px_2px_rgba(7,61,50,0.03)] placeholder:text-[#8DA199] transition-all hover:border-[#C5DDD3] focus-visible:border-[#15966F] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-[#15966F]/10 dark:border-[#18332B] dark:bg-[#0A1713] dark:text-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="message"
                      className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#566B63] dark:text-[#8DA29A]"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type your message here..."
                      required
                      className="resize-none rounded-xl border-[#DFEBE6] bg-[#F5F9F7] px-4 py-3 text-[14px] leading-relaxed text-[#0E241E] shadow-[inset_0_1px_2px_rgba(7,61,50,0.03)] placeholder:text-[#8DA199] transition-all hover:border-[#C5DDD3] focus-visible:border-[#15966F] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-[#15966F]/10 dark:border-[#18332B] dark:bg-[#0A1713] dark:text-white"
                    />
                  </div>

                  <div className="flex flex-col items-start justify-between gap-4 pt-2 sm:flex-row sm:items-center">
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#073D32] to-[#11644E] py-2.5 pl-6 pr-2.5 text-[13px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_14px_28px_-8px_rgba(7,61,50,0.48)] transition-all duration-200 hover:-translate-y-0.5 hover:from-[#0A4E3F] hover:to-[#158062] cursor-pointer"
                    >
                      <span>Send Message</span>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#073D32] transition-transform duration-200 group-hover:translate-x-0.5">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </button>

                    <div className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#647770] dark:text-[#8DA29A]">
                      <ShieldCheck className="h-4 w-4 shrink-0 text-[#15966F] dark:text-[#34D399]" />
                      <span>Free &amp; Confidential Counseling</span>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
