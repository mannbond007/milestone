"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  RotateCcw,
} from "lucide-react";
import { Input } from "@/components/ui/input";
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
    <div className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-gradient-to-br from-[#EEF7F2] via-[#F6FBF8] to-[#E6F4EC] pt-28 pb-20 sm:pt-32 sm:pb-24 dark:bg-[#07120F] dark:from-[#07120F] dark:via-[#091814] dark:to-[#0B1E18]">
      {/* Subtle Ambient Soft Light Accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-[#15966F]/10 blur-[110px] dark:bg-[#15966F]/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-[#34D399]/12 blur-[110px] dark:bg-[#34D399]/10"
      />

      <div className="relative z-10 mx-auto w-full max-w-[980px] px-4 sm:px-6 lg:px-8">
        {/* Overlapping Architectural Stage */}
        <div className="relative">
          {/* LEFT FLOATING OVERLAPPING CARD: Deep Forest Emerald Contact Us Card */}
          <div className="relative z-20 mx-3 -mb-7 overflow-hidden rounded-[24px] border border-white/15 bg-gradient-to-br from-[#073D32] via-[#0B5142] to-[#116955] p-7 text-white shadow-[0_28px_60px_-16px_rgba(7,61,50,0.48),inset_0_1px_1px_rgba(255,255,255,0.22)] sm:mx-6 sm:p-9 lg:absolute lg:left-0 lg:top-1/2 lg:mx-0 lg:mb-0 lg:w-[355px] lg:-translate-y-1/2 lg:p-10">
            {/* Subtle Internal Specular & Ambient Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#34D399]/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-[#04241D]/60 blur-2xl"
            />

            <div className="relative z-10">
              <h2 className="font-heading text-[26px] font-bold tracking-tight text-white">
                Contact Us
              </h2>
              <div className="mt-2.5 h-[2.5px] w-10 rounded-full bg-[#6EE7B7]" />

              <div className="mt-8 space-y-6">
                {/* Address */}
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 text-white/90 transition-colors hover:text-white"
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#86EFAC] transition-colors group-hover:bg-white/20">
                    <MapPin className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-[13.5px] leading-[1.6] text-white/85 group-hover:text-white">
                    {OFFICE_ADDRESS}
                  </span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${footerLinks.contact.email}`}
                  className="group flex items-center gap-4 text-white/90 transition-colors hover:text-white"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#86EFAC] transition-colors group-hover:bg-white/20">
                    <Mail className="h-4.5 w-4.5" />
                  </span>
                  <span className="truncate text-[14px] font-medium text-white/90 group-hover:text-white">
                    {footerLinks.contact.email}
                  </span>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${footerLinks.contact.phone.replace(/\s+/g, "")}`}
                  className="group flex items-center gap-4 text-white/90 transition-colors hover:text-white"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#86EFAC] transition-colors group-hover:bg-white/20">
                    <Phone className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-[14.5px] font-medium tracking-wide text-white/95 group-hover:text-white">
                    {footerLinks.contact.phone}
                  </span>
                </a>

                {/* Hours */}
                <div className="flex items-center gap-4 text-white/85">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#86EFAC]">
                    <Clock className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-[13px] leading-snug text-white/80">
                    {footerLinks.contact.hours}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT ELEVATED WHITE MAIN CARD: Get in Touch Form */}
          <div className="relative z-10 rounded-[28px] border border-[#DCECE5] bg-white px-6 pb-9 pt-14 shadow-[0_32px_72px_-24px_rgba(7,61,50,0.16),inset_0_1px_0_rgba(255,255,255,1)] sm:px-10 sm:pb-12 sm:pt-16 lg:ml-[96px] lg:min-h-[540px] lg:py-14 lg:pl-[315px] lg:pr-14 dark:border-[#1E3B32] dark:bg-[#0D1E19] dark:shadow-[0_32px_72px_-24px_rgba(0,0,0,0.65)]">
            {submitted ? (
              <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
                <div className="flex h-15 w-15 items-center justify-center rounded-2xl border border-[#15966F]/20 bg-[#EBF7F1] text-[#0B7453] dark:border-[#34D399]/25 dark:bg-[#132E26] dark:text-[#34D399]">
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
                <h1 className="font-heading text-3xl font-extrabold tracking-[-0.025em] text-[#0E241E] sm:text-[34px] dark:text-white">
                  Get in{" "}
                  <span className="font-editorial font-normal italic text-[#15966F] dark:text-[#34D399]">
                    Touch
                  </span>
                </h1>
                <p className="mt-2 text-[14.5px] text-[#647770] dark:text-[#A0B3AC]">
                  Feel free to drop us a line below and our advisors will respond promptly.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Input
                      id="name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your Name"
                      aria-label="Your Name"
                      required
                      className="h-12 rounded-xl border-[#E6F0EC] bg-[#F4F8F6] px-4 text-[14px] text-[#0E241E] shadow-none placeholder:text-[#8CA098] transition-all focus-visible:border-[#15966F] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-[#15966F]/10 dark:border-[#18332B] dark:bg-[#0A1713] dark:text-white"
                    />
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone Number"
                      aria-label="Phone Number"
                      required
                      className="h-12 rounded-xl border-[#E6F0EC] bg-[#F4F8F6] px-4 text-[14px] text-[#0E241E] shadow-none placeholder:text-[#8CA098] transition-all focus-visible:border-[#15966F] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-[#15966F]/10 dark:border-[#18332B] dark:bg-[#0A1713] dark:text-white"
                    />
                  </div>

                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    aria-label="Your Email"
                    required
                    className="h-12 rounded-xl border-[#E6F0EC] bg-[#F4F8F6] px-4 text-[14px] text-[#0E241E] shadow-none placeholder:text-[#8CA098] transition-all focus-visible:border-[#15966F] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-[#15966F]/10 dark:border-[#18332B] dark:bg-[#0A1713] dark:text-white"
                  />

                  <Textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here..."
                    aria-label="Your Message"
                    required
                    className="resize-none rounded-xl border-[#E6F0EC] bg-[#F4F8F6] px-4 py-3.5 text-[14px] leading-relaxed text-[#0E241E] shadow-none placeholder:text-[#8CA098] transition-all focus-visible:border-[#15966F] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-[#15966F]/10 dark:border-[#18332B] dark:bg-[#0A1713] dark:text-white"
                  />

                  <div className="pt-2">
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#073D32] to-[#11644E] py-3 pl-7 pr-3 text-[13.5px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_14px_28px_-8px_rgba(7,61,50,0.48)] transition-all duration-200 hover:-translate-y-0.5 hover:from-[#0A4E3F] hover:to-[#158062] cursor-pointer"
                    >
                      <span>Send</span>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#073D32] transition-transform duration-200 group-hover:translate-x-0.5">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </button>
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
