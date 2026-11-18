import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  variant?: "navbar" | "footer" | "mobile";
  className?: string;
  linkToHome?: boolean;
}

export function BrandLogo({
  variant = "navbar",
  className,
  linkToHome = true,
}: BrandLogoProps) {
  const isFooter = variant === "footer";
  const isMobile = variant === "mobile";

  const imageElement = (
    <div className={cn("group relative inline-flex items-center", className)}>
      {/* Subtle warm-gold & emerald ambient glow behind the plaque */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#C89B3C]/22 via-[#15966F]/18 to-[#C89B3C]/22 blur-md transition-opacity duration-300",
          isFooter
            ? "opacity-75 group-hover:opacity-100"
            : "opacity-45 group-hover:opacity-85"
        )}
      />

      {/* Crisp elevated 3D logo plaque */}
      <div
        className={cn(
          "relative inline-flex items-center overflow-hidden bg-white transition-all duration-300 ease-out",
          "border border-[#E5DCC8]/80 ring-1 ring-[#15966F]/10",
          "shadow-[0_8px_20px_-6px_rgba(7,61,50,0.16),0_3px_10px_-3px_rgba(184,137,56,0.18),inset_0_1px_0_rgba(255,255,255,1)]",
          "group-hover:-translate-y-0.5 group-hover:border-[#C89B3C]/55 group-hover:shadow-[0_14px_28px_-6px_rgba(7,61,50,0.22),0_5px_14px_-3px_rgba(184,137,56,0.26)]",
          isFooter
            ? "rounded-2xl px-3.5 py-2.5"
            : isMobile
            ? "rounded-xl px-2 py-1"
            : "rounded-xl px-2.5 py-1.5"
        )}
      >
        {/* Subtle top glass sheen */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/60 to-transparent"
        />

        <Image
          src="/images/milestone-scholarship-logo-cropped-hq.png"
          alt="MileStone Scholarship Program"
          width={3756}
          height={1014}
          priority={variant !== "footer"}
          className={cn(
            "relative z-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.015]",
            isFooter && "h-11 max-w-[230px] sm:h-12",
            variant === "navbar" &&
              "h-8 max-w-[185px] sm:h-9 md:h-10 md:max-w-[220px]",
            isMobile && "h-7 max-w-[160px] sm:h-8"
          )}
        />
      </div>
    </div>
  );

  if (!linkToHome) {
    return imageElement;
  }

  return (
    <Link
      href="/"
      id="brand-logo-link"
      className="inline-flex items-center rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#15966F]/40"
      aria-label="MileStone Scholarship Program Homepage"
    >
      {imageElement}
    </Link>
  );
}
