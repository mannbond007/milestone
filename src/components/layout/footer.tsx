"use client";

import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { BrandLogo } from "@/components/navigation/brand-logo";
import { footerLinks } from "@/constants/navigation";
import { useLocale } from "@/components/providers/locale-provider";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer
      id="main-footer"
      className="relative overflow-hidden border-t border-[#DCE8E3] bg-[#FAFCFB] text-[#142C25] transition-colors duration-200 dark:border-[#162E26] dark:bg-[#07120F] dark:text-[#F2F7F5]"
    >
      {/* Subtle top ambient highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#15966F]/35 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        {/* Top Brand + Quick-Start Strip */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#E3ECE8] pb-10 lg:flex-row lg:items-center dark:border-[#162E26]">
          <div className="max-w-md space-y-3">
            <BrandLogo variant="footer" />
            <p className="text-[13.5px] leading-relaxed text-[#5C6B64] dark:text-[#A0B3AC]">
              {t(
                "footer.tagline",
                "Empowering dreams beyond financial limits. A dedicated education, scholarship, and admission guidance platform for students across India."
              )}
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {["NMC Aligned", "AICTE Aligned", "UGC Aligned", "BCI Aligned"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-[#DCE8E3] bg-white px-2.5 py-1 text-[10.5px] font-semibold tracking-wide text-[#073D32] dark:border-[#1E3B32] dark:bg-[#0D1E19] dark:text-[#6EE7B7]"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="flex flex-col gap-3 rounded-2xl border border-[#DCE8E3] bg-white p-4 shadow-[0_10px_28px_-14px_rgba(7,61,50,0.12)] sm:flex-row sm:items-center sm:p-5 dark:border-[#1E3B32] dark:bg-[#0D1E19]">
            <div className="sm:pr-4">
              <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#15966F] dark:text-[#34D399]">
                2025–26 Admissions
              </div>
              <div className="mt-0.5 font-heading text-[15px] font-bold text-[#073D32] dark:text-white">
                Need Scholarship Guidance?
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              <Link
                href="/sign-up"
                className="group inline-flex items-center gap-2 rounded-full bg-[#073D32] px-4 py-2 text-[12.5px] font-semibold text-white shadow-sm transition-all hover:bg-[#0D5747] dark:bg-[#15966F] dark:hover:bg-[#19AC80]"
              >
                <span>Apply Now</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-[#D4E3DC] bg-[#F7FBF9] px-4 py-2 text-[12.5px] font-semibold text-[#073D32] transition-colors hover:border-[#15966F]/45 hover:bg-white dark:border-[#1E3B32] dark:bg-[#132E26] dark:text-white"
              >
                Counseling
              </Link>
            </div>
          </div>
        </div>

        {/* Main 12-Column Navigation & Contact Grid */}
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Contact Column (4 Cols) */}
          <div className="space-y-3.5 lg:col-span-4">
            <h4 className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#073D32] dark:text-[#6EE7B7]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#15966F] dark:bg-[#34D399]" />
              Contact &amp; Support
            </h4>

            <div className="space-y-3 pt-1 text-[13px] text-[#5C6B64] dark:text-[#A0B3AC]">
              <a
                href={`tel:${footerLinks.contact.phone.replace(/\s+/g, "")}`}
                className="group flex items-center gap-3 rounded-xl border border-transparent p-1.5 -ml-1.5 transition-colors hover:border-[#DCE8E3] hover:bg-white dark:hover:border-[#1E3B32] dark:hover:bg-[#0D1E19]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E8F5EF] text-[#15966F] dark:bg-[#132E26] dark:text-[#34D399]">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="font-semibold text-[#142C25] group-hover:text-[#15966F] dark:text-white dark:group-hover:text-[#34D399]">
                  {footerLinks.contact.phone}
                </span>
              </a>

              <a
                href={`mailto:${footerLinks.contact.email}`}
                className="group flex items-center gap-3 rounded-xl border border-transparent p-1.5 -ml-1.5 transition-colors hover:border-[#DCE8E3] hover:bg-white dark:hover:border-[#1E3B32] dark:hover:bg-[#0D1E19]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E8F5EF] text-[#15966F] dark:bg-[#132E26] dark:text-[#34D399]">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="font-semibold text-[#142C25] group-hover:text-[#15966F] dark:text-white dark:group-hover:text-[#34D399]">
                  {footerLinks.contact.email}
                </span>
              </a>

              <div className="flex items-start gap-3 p-1.5 -ml-1.5">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E8F5EF] text-[#15966F] dark:bg-[#132E26] dark:text-[#34D399]">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="leading-relaxed">
                  {t("footer.addressValue", footerLinks.contact.address)}
                </span>
              </div>
            </div>
          </div>

          {/* Column: Quick Links (2 Cols) */}
          <div className="space-y-4 lg:col-span-2">
            <h4 className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#073D32] dark:text-[#6EE7B7]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#15966F] dark:bg-[#34D399]" />
              {t("footer.quickLinks", "Quick Links")}
            </h4>
            <ul className="space-y-2.5 text-[13.5px]">
              {footerLinks.quickLinks.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="inline-block text-[#5C6B64] transition-all duration-200 hover:translate-x-0.5 hover:text-[#15966F] dark:text-[#A0B3AC] dark:hover:text-[#34D399]"
                  >
                    {t(`nav.${item.key}`, item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column: Scholarships (3 Cols) */}
          <div className="space-y-4 lg:col-span-3">
            <h4 className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#073D32] dark:text-[#6EE7B7]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#15966F] dark:bg-[#34D399]" />
              {t("footer.scholarshipsTitle", "Scholarships")}
            </h4>
            <ul className="space-y-2.5 text-[13.5px]">
              {footerLinks.scholarships.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="inline-block text-[#5C6B64] transition-all duration-200 hover:translate-x-0.5 hover:text-[#15966F] dark:text-[#A0B3AC] dark:hover:text-[#34D399]"
                  >
                    {t(`nav.${item.key}`, item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column: Educational Pathways (3 Cols) */}
          <div className="space-y-4 lg:col-span-3">
            <h4 className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#073D32] dark:text-[#6EE7B7]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#15966F] dark:bg-[#34D399]" />
              {t("footer.coursesTitle", "Educational Pathways")}
            </h4>
            <ul className="space-y-2.5 text-[13.5px]">
              {footerLinks.courses.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="inline-block text-[#5C6B64] transition-all duration-200 hover:translate-x-0.5 hover:text-[#15966F] dark:text-[#A0B3AC] dark:hover:text-[#34D399]"
                  >
                    {t(`nav.${item.key}`, item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Regulatory & Advisory Disclaimer */}
        <div className="mt-10 rounded-2xl border border-[#DCE8E3] bg-white px-4 py-3.5 shadow-2xs dark:border-[#1E3B32] dark:bg-[#0D1E19]">
          <div className="flex items-start gap-3 text-[12px] leading-relaxed text-[#5C6B64] dark:text-[#A0B3AC]">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#15966F] dark:text-[#34D399]" />
            <p>
              {t(
                "footer.disclaimer",
                "MileStone Scholarship is an education, scholarship, and admission guidance platform. Scholarship awards are distinct from counselling services. No admission guarantees are made."
              )}
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-[#E3ECE8] pt-6 text-[12.5px] text-[#5C6B64] sm:flex-row dark:border-[#162E26] dark:text-[#A0B3AC]">
          <div>
            &copy; {new Date().getFullYear()}{" "}
            {t("footer.rights", "MileStone Scholarship Program. All rights reserved.")}
          </div>
          <div className="flex items-center gap-6 font-medium">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-[#073D32] dark:hover:text-[#34D399]"
            >
              {t("footer.privacy", "Privacy Policy")}
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-[#073D32] dark:hover:text-[#34D399]"
            >
              {t("footer.terms", "Terms & Conditions")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
