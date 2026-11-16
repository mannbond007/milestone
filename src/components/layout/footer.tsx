"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
import { BrandLogo } from "@/components/navigation/brand-logo";
import { footerLinks } from "@/constants/navigation";
import { useLocale } from "@/components/providers/locale-provider";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer
      id="main-footer"
      className="border-t border-[#DCE6E1] dark:border-[#21362E] bg-white dark:bg-[#08100D] text-[#172923] dark:text-[#F2F7F5] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand & Mission Column (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="footer" />
            <p className="text-sm text-[#68756F] dark:text-[#9BB0A8] leading-relaxed max-w-sm">
              {t(
                "footer.tagline",
                "Empowering dreams beyond financial limits. A dedicated education, scholarship, and admission guidance platform for students across India."
              )}
            </p>

            <div className="pt-2 space-y-2.5 text-xs text-[#68756F] dark:text-[#9BB0A8]">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#258B68] dark:text-[#34A880] flex-shrink-0" />
                <a
                  href={`tel:${footerLinks.contact.phone.replace(/\s+/g, "")}`}
                  className="hover:text-[#103D32] dark:hover:text-[#34A880] transition-colors font-medium"
                >
                  {footerLinks.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#258B68] dark:text-[#34A880] flex-shrink-0" />
                <a
                  href={`mailto:${footerLinks.contact.email}`}
                  className="hover:text-[#103D32] dark:hover:text-[#34A880] transition-colors font-medium"
                >
                  {footerLinks.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#258B68] dark:text-[#34A880] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {t("footer.addressValue", footerLinks.contact.address)}
                </span>
              </div>
            </div>
          </div>

          {/* Column: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#103D32] dark:text-[#34A880]">
              {t("footer.quickLinks", "Quick Links")}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerLinks.quickLinks.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-[#68756F] dark:text-[#9BB0A8] hover:text-[#103D32] dark:hover:text-[#34A880] transition-colors"
                  >
                    {t(`nav.${item.key}`, item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column: Scholarships */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#103D32] dark:text-[#34A880]">
              {t("footer.scholarshipsTitle", "Scholarships")}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerLinks.scholarships.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-[#68756F] dark:text-[#9BB0A8] hover:text-[#103D32] dark:hover:text-[#34A880] transition-colors"
                  >
                    {t(`nav.${item.key}`, item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column: Educational Pathways (Courses) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#103D32] dark:text-[#34A880]">
              {t("footer.coursesTitle", "Educational Pathways")}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerLinks.courses.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-[#68756F] dark:text-[#9BB0A8] hover:text-[#103D32] dark:hover:text-[#34A880] transition-colors"
                  >
                    {t(`nav.${item.key}`, item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Regulatory & Advisory Disclaimer */}
        <div className="mt-10 pt-6 border-t border-[#DCE6E1] dark:border-[#21362E]">
          <div className="p-3.5 rounded-xl bg-[#F8FAF8] dark:bg-[#111E1A] border border-[#DCE6E1] dark:border-[#21362E] text-[11px] text-[#68756F] dark:text-[#9BB0A8] leading-relaxed flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#258B68] dark:text-[#34A880] mt-0.5 flex-shrink-0" />
            <p>
              {t(
                "footer.disclaimer",
                "MileStone Scholarship is an education, scholarship, and admission guidance platform. Scholarship awards are distinct from counselling services. No admission guarantees are made."
              )}
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-6 pt-6 border-t border-[#DCE6E1] dark:border-[#21362E] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#68756F] dark:text-[#9BB0A8]">
          <div>
            &copy; {new Date().getFullYear()}{" "}
            {t("footer.rights", "MileStone Scholarship Program. All rights reserved.")}
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-[#103D32] dark:hover:text-[#34A880] transition-colors"
            >
              {t("footer.privacy", "Privacy Policy")}
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#103D32] dark:hover:text-[#34A880] transition-colors"
            >
              {t("footer.terms", "Terms & Conditions")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
