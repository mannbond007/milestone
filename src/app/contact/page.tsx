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
    <div className="relative overflow-hidden bg-[#FAFCFB] pt-28 pb-24 dark:bg-[#07120F]">
      {/* Subtle Top Ambient Wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[380px] bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(21,150,111,0.08),transparent_70%)] dark:bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(52,211,153,0.07),transparent_70%)]"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Simple Centered Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D4E6DF] bg-white px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#073D32] shadow-2xs dark:border-[#1E3B32] dark:bg-[#0D1E19] dark:text-[#6EE7B7]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#15966F]" />
            Contact Us
          </span>

          <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-[-0.03em] text-[#0E241E] sm:text-4xl lg:text-[42px] lg:leading-[1.14] dark:text-white">
            Get in Touch With{" "}
            <span className="font-editorial font-normal italic text-[#15966F] dark:text-[#34D399]">
              Our Team
            </span>
          </h1>

          <p className="mt-3 text-[15px] leading-relaxed text-[#52635C] dark:text-[#A0B3AC]">
            Have a question about scholarships, eligibility, or admissions? Send us a message or reach our counseling desk directly.
          </p>
        </div>

        {/* Single Unified Architectural 2-Column Card */}
        <div className="mt-12 overflow-hidden rounded-[28px] border border-[#D4E6DF] border-b-[3px] border-b-[#BCD8CC] bg-white shadow-[0_24px_56px_-26px_rgba(7,61,50,0.14),inset_0_1px_0_rgba(255,255,255,1)] dark:border-[#1E3B32] dark:border-b-[#122922] dark:bg-[#0D1E19]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* LEFT: Clean Contact Details */}
            <div className="flex flex-col justify-between border-b border-[#E3EFEA] bg-gradient-to-b from-[#F4FAF7] to-[#EBF7F1] p-7 sm:p-9 lg:col-span-5 lg:border-b-0 lg:border-r dark:border-[#18332B] dark:from-[#0C1D18] dark:to-[#10261F]">
              <div>
                <h2 className="font-heading text-xl font-bold tracking-tight text-[#0E241E] dark:text-white">
                  Contact Information
                </h2>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#52635C] dark:text-[#A0B3AC]">
                  Our scholarship counselors are available Monday to Saturday to assist students and parents.
                </p>

                <div className="mt-8 space-y-6">
                  {/* Phone */}
                  <a
                    href={`tel:${footerLinks.contact.phone.replace(/\s+/g, "")}`}
                    className="group flex items-start gap-3.5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#15966F]/15 bg-white text-[#0B7453] shadow-2xs transition-colors group-hover:bg-[#073D32] group-hover:text-white dark:border-[#34D399]/20 dark:bg-[#132E26] dark:text-[#34D399]">
                      <Phone className="h-4.5 w-4.5" />
                    </span>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#15966F] dark:text-[#34D399]">
                        Phone
                      </div>
                      <div className="mt-0.5 font-heading text-[15px] font-semibold text-[#0E241E] group-hover:text-[#073D32] dark:text-white">
                        {footerLinks.contact.phone}
                      </div>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${footerLinks.contact.email}`}
                    className="group flex items-start gap-3.5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#15966F]/15 bg-white text-[#0B7453] shadow-2xs transition-colors group-hover:bg-[#073D32] group-hover:text-white dark:border-[#34D399]/20 dark:bg-[#132E26] dark:text-[#34D399]">
                      <Mail className="h-4.5 w-4.5" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#15966F] dark:text-[#34D399]">
                        Email
                      </div>
                      <div className="mt-0.5 break-all font-heading text-[14.5px] font-semibold text-[#0E241E] group-hover:text-[#073D32] dark:text-white">
                        {footerLinks.contact.email}
                      </div>
                    </div>
                  </a>

                  {/* Address */}
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3.5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#15966F]/15 bg-white text-[#0B7453] shadow-2xs transition-colors group-hover:bg-[#073D32] group-hover:text-white dark:border-[#34D399]/20 dark:bg-[#132E26] dark:text-[#34D399]">
                      <MapPin className="h-4.5 w-4.5" />
                    </span>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#15966F] dark:text-[#34D399]">
                        Office
                      </div>
                      <div className="mt-0.5 text-[13.5px] leading-relaxed text-[#2C423B] group-hover:text-[#073D32] dark:text-[#D5E6DF]">
                        {OFFICE_ADDRESS}
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Simple Hours Footer */}
              <div className="mt-8 flex items-center gap-2.5 border-t border-[#D8E9E2] pt-5 text-[12.5px] font-medium text-[#465952] dark:border-[#1E3B32] dark:text-[#A0B3AC]">
                <Clock className="h-4 w-4 shrink-0 text-[#15966F] dark:text-[#34D399]" />
                <span>{footerLinks.contact.hours}</span>
              </div>
            </div>

            {/* RIGHT: Simple Contact Form */}
            <div className="p-7 sm:p-9 lg:col-span-7">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EBF7F1] text-[#0B7453] dark:bg-[#132E26] dark:text-[#34D399]">
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
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#CFE2DA] bg-white px-5 py-2 text-[13px] font-semibold text-[#073D32] transition-colors hover:border-[#15966F]/50 hover:text-[#15966F] cursor-pointer dark:border-[#1E3B32] dark:bg-[#132E26] dark:text-white"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
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
                        className="h-11 rounded-xl border-[#D5E4DE] bg-[#FAFCFB] px-3.5 text-[14px] text-[#0E241E] placeholder:text-[#8CA098] focus-visible:border-[#15966F] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-[#15966F]/10 dark:border-[#1E3B32] dark:bg-[#0A1713] dark:text-white"
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
                        className="h-11 rounded-xl border-[#D5E4DE] bg-[#FAFCFB] px-3.5 text-[14px] text-[#0E241E] placeholder:text-[#8CA098] focus-visible:border-[#15966F] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-[#15966F]/10 dark:border-[#1E3B32] dark:bg-[#0A1713] dark:text-white"
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
                      className="h-11 rounded-xl border-[#D5E4DE] bg-[#FAFCFB] px-3.5 text-[14px] text-[#0E241E] placeholder:text-[#8CA098] focus-visible:border-[#15966F] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-[#15966F]/10 dark:border-[#1E3B32] dark:bg-[#0A1713] dark:text-white"
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
                      className="resize-none rounded-xl border-[#D5E4DE] bg-[#FAFCFB] px-3.5 py-3 text-[14px] leading-relaxed text-[#0E241E] placeholder:text-[#8CA098] focus-visible:border-[#15966F] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-[#15966F]/10 dark:border-[#1E3B32] dark:bg-[#0A1713] dark:text-white"
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#073D32] to-[#11644E] py-3 pl-6 pr-3 text-[14px] font-semibold text-white shadow-[0_12px_26px_-8px_rgba(7,61,50,0.42)] transition-all duration-200 hover:-translate-y-0.5 hover:from-[#0A4E3F] hover:to-[#158062] cursor-pointer sm:w-auto"
                  >
                    <span>Send Message</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#073D32] transition-transform duration-200 group-hover:translate-x-0.5">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
