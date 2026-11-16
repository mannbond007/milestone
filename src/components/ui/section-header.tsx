"use client";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  badge?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  lineColor?: "primary" | "gold";
}

export function SectionHeader({
  title,
  subtitle,
  badge,
  align = "center",
  className,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-14",
        align === "center" ? "text-center max-w-3xl mx-auto" : "text-left max-w-2xl",
        className
      )}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.14em] bg-[#E8F3EE] dark:bg-[#172923] text-[#103D32] dark:text-[#34A880] border border-[#258B68]/20">
          <span className="h-1.5 w-1.5 rounded-full bg-[#258B68] dark:bg-[#34A880]" />
          <span>{badge}</span>
        </div>
      )}
      <h2
        className={cn(
          "font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#172923] dark:text-[#F2F7F5] leading-[1.2] text-balance",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg text-[#68756F] dark:text-[#9BB0A8] leading-relaxed text-pretty font-normal",
            align === "center" && "mx-auto max-w-2xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
