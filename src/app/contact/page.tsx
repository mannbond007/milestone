"use client";

import { useState } from "react";
import Image from "next/image";
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
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Full-Bleed Twilight Emerald Glass Showcase Frame */}
        <div className="relative overflow-hidden rounded-[30px] border border-[#CFE2DA] bg-[#05231D] shadow-[0_32px_80px_-28px_rgba(7,61,50,0.42)] dark:border-white/15">
          {/* Bespoke Twilight University Archway & Emerald Lake Backdrop */}
          <Image
            src="/images/contact/contact-backdrop.jpg"
            alt="MileStone Scholarship twilight university courtyard and emerald reflecting water"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1152px"
            className="object-cover object-center"
          />

          {/* Balanced Atmospheric Vignette for Effortless Legibility */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#041D18]/78 via-[#05231D]/30 to-[#041D18]/48"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#031612]/80 via-transparent to-[#041D18]/25"
          />

          {/* Inner Content Grid */}
          <div className="relative z-10 grid min-h-[580px] grid-cols-1 items-center gap-8 p-6 sm:p-10 lg:grid-cols-12 lg:gap-10 lg:p-12">
            {/* LEFT: Editorial Title & Subtle Frosted Contact Dock */}
            <div className="flex h-full flex-col justify-between lg:col-span-6">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.2em] text-white/95 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#6EE7B7] shadow-[0_0_8px_rgba(110,231,183,0.9)]" />
                  Contact Us
                </span>

                <h1 className="mt-4 max-w-md font-heading text-3xl font-extrabold tracking-[-0.025em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] sm:text-4xl lg:text-[42px] lg:leading-[1.12]">
                  Get in Touch With{" "}
                  <span className="font-editorial font-normal italic text-[#86EFAC]">
                    Our Team
                  </span>
                </h1>

                <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-white/80 drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]">
                  Speak directly with our scholarship counseling desk for guidance on eligibility, test schedules, and admissions.
                </p>
              </div>

              {/* Compact Translucent Contact Details Dock */}
              <div className="mt-8 max-w-md rounded-2xl border border-white/18 bg-[#041F19]/55 p-4.5 shadow-[0_18px_40px_-14px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-xl sm:p-5">
                <div className="space-y-3.5">
                  <a
                    href={`tel:${footerLinks.contact.phone.replace(/\s+/g, "")}`}
                    className="group flex items-center justify-between gap-3 text-white/90 transition-colors hover:text-white"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#6EE7B7]">
                        <Phone className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">
                          Phone
                        </div>
                        <div className="font-heading text-[14.5px] font-semibold">
                          {footerLinks.contact.phone}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-white/45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#6EE7B7]" />
                  </a>

                  <div className="h-px bg-white/10" />

                  <a
                    href={`mailto:${footerLinks.contact.email}`}
                    className="group flex items-center justify-between gap-3 text-white/90 transition-colors hover:text-white"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#6EE7B7]">
                        <Mail className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">
                          Email
                        </div>
                        <div className="truncate font-heading text-[14px] font-semibold">
                          {footerLinks.contact.email}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-white/45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#6EE7B7]" />
                  </a>

                  <div className="h-px bg-white/10" />

                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between gap-3 text-white/90 transition-colors hover:text-white"
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#6EE7B7]">
                        <MapPin className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">
                          Office
                        </div>
                        <div className="mt-0.5 text-[12.5px] leading-relaxed text-white/85">
                          {OFFICE_ADDRESS}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-white/45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#6EE7B7]" />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT: Signature Floating Translucent Frosted-Glass Form Card */}
            <div className="lg:col-span-6">
              <div className="mx-auto w-full max-w-[460px] rounded-[24px] border border-white/25 bg-white/[0.11] p-6 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.48),inset_0_1px_1px_rgba(255,255,255,0.38)] backdrop-blur-2xl sm:p-8 lg:ml-auto lg:mr-0">
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/25 bg-white/15 text-[#6EE7B7] backdrop-blur-md">
                      <CheckCircle2 className="h-7 w-7" />
                    </div>
                    <h2 className="mt-4 font-heading text-2xl font-bold text-white">
                      Message Sent
                    </h2>
                    <p className="mt-2 text-[14px] leading-relaxed text-white/80">
                      Thank you, {fullName || "Student"}. Our counseling team will get back to you within 2 to 4 business hours.
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-5 py-2.5 text-[13px] font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/25 cursor-pointer"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                      <span>Send Another Message</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="mb-5 text-center">
                      <h2 className="font-heading text-[24px] font-bold tracking-tight text-white">
                        Send Us a Message
                      </h2>
                      <p className="mt-1 text-[13px] text-white/75">
                        We typically reply within 2 to 4 business hours.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="name"
                          className="text-[12px] font-medium text-white/90"
                        >
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Aarav Sharma"
                          required
                          className="h-10.5 rounded-xl border-white/40 bg-white/95 px-3.5 text-[13.5px] text-[#0E241E] shadow-xs placeholder:text-[#7D9189] focus-visible:border-white focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-[#6EE7B7]/30"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label
                          htmlFor="phone"
                          className="text-[12px] font-medium text-white/90"
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
                          className="h-10.5 rounded-xl border-white/40 bg-white/95 px-3.5 text-[13.5px] text-[#0E241E] shadow-xs placeholder:text-[#7D9189] focus-visible:border-white focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-[#6EE7B7]/30"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="email"
                        className="text-[12px] font-medium text-white/90"
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
                        className="h-10.5 rounded-xl border-white/40 bg-white/95 px-3.5 text-[13.5px] text-[#0E241E] shadow-xs placeholder:text-[#7D9189] focus-visible:border-white focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-[#6EE7B7]/30"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="message"
                        className="text-[12px] font-medium text-white/90"
                      >
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="How can we help you?"
                        required
                        className="resize-none rounded-xl border-white/40 bg-white/95 px-3.5 py-2.5 text-[13.5px] leading-relaxed text-[#0E241E] shadow-xs placeholder:text-[#7D9189] focus-visible:border-white focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-[#6EE7B7]/30"
                      />
                    </div>

                    <button
                      id="contact-submit-btn"
                      type="submit"
                      className="group mt-1 flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-gradient-to-r from-[#073D32] via-[#0F5D4B] to-[#073D32] text-[14px] font-semibold text-white shadow-[0_14px_30px_-8px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:from-[#0A4E40] hover:via-[#14745E] hover:to-[#0A4E40] cursor-pointer"
                    >
                      <span>Send Message</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </button>

                    <div className="flex items-center justify-center gap-1.5 pt-1 text-[11.5px] text-white/75">
                      <Clock className="h-3.5 w-3.5 text-[#6EE7B7]" />
                      <span>{footerLinks.contact.hours}</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
