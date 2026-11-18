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
  const isMobile = variant === "mobile";

  const imageElement = (
    <div className={cn("group relative inline-flex items-center", className)}>
      {/* Subtle greenish emerald ambient glow behind the plaque */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#15966F]/25 via-[#34D399]/22 to-[#073D32]/25 opacity-60 blur-md transition-opacity duration-300 group-hover:opacity-95"
      />

      {/* Crisp elevated 3D logo plaque — identical dimensions for navbar & footer */}
      <div
        className={cn(
          "relative inline-flex items-center overflow-hidden bg-white transition-all duration-300 ease-out",
          "border border-[#DCE8E3] ring-1 ring-[#15966F]/12",
          "shadow-[0_8px_20px_-6px_rgba(7,61,50,0.18),0_3px_10px_-3px_rgba(21,150,111,0.2)]",
          "group-hover:-translate-y-0.5 group-hover:border-[#15966F]/45 group-hover:shadow-[0_14px_28px_-6px_rgba(7,61,50,0.24),0_6px_16px_-3px_rgba(21,150,111,0.3)]",
          isMobile
            ? "rounded-xl px-2 py-1"
            : "rounded-xl px-2.5 py-1.5 sm:rounded-2xl sm:px-3 sm:py-2"
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
            isMobile
              ? "h-7 max-w-[155px] sm:h-8"
              : "h-8 max-w-[165px] sm:h-9 sm:max-w-[195px] md:h-10 md:max-w-[215px]"
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
