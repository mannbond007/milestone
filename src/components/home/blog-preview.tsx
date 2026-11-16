"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { blogPreviews } from "@/constants/home-data";
import { formatDate } from "@/lib/utils";
import { useLocale } from "@/components/providers/locale-provider";

export function BlogPreview() {
  const { t } = useLocale();

  return (
    <section
      id="blog-preview"
      className="py-20 md:py-28 bg-white dark:bg-[#111E1A] border-b border-[#DCE6E1] dark:border-[#21362E]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <ScrollReveal className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.14em] bg-[#E8F3EE] dark:bg-[#172923] text-[#103D32] dark:text-[#34A880] border border-[#258B68]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#258B68] dark:bg-[#34A880]" />
              <span>{t("homeBlog.badge", "Academic Insights & Guides")}</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#172923] dark:text-[#F2F7F5] leading-[1.18]">
              {t("homeBlog.titlePart1", "Latest From Our")}{" "}
              <span className="text-[#258B68] dark:text-[#34A880]">
                {t("homeBlog.titlePart2", "Editorial Desk")}
              </span>
            </h2>

            <p className="mt-3 text-base sm:text-lg text-[#68756F] dark:text-[#9BB0A8] leading-relaxed">
              {t(
                "homeBlog.subtitle",
                "In-depth guides on medical and engineering scholarships, test preparation blueprints, and post-Class 12 career pathways."
              )}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-xl text-xs font-semibold bg-[#F8FAF8] dark:bg-[#0B1411] hover:bg-[#E8F3EE] dark:hover:bg-[#172923] text-[#103D32] dark:text-[#F2F7F5] border border-[#DCE6E1] dark:border-[#21362E] transition-colors"
            >
              <span>{t("homeBlog.readAll", "Read All Articles")}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </ScrollReveal>
        </div>

        {/* 3-Column Editorial Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPreviews.slice(0, 3).map((post, i) => (
            <ScrollReveal key={post.id} delay={i * 0.06}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <article className="bg-[#F8FAF8] dark:bg-[#0B1411] rounded-2xl border border-[#DCE6E1] dark:border-[#21362E] hover:border-[#258B68] dark:hover:border-[#34A880] overflow-hidden transition-all duration-200 shadow-premium hover:shadow-card-hover h-full flex flex-col">
                  <div className="h-48 relative overflow-hidden bg-[#E8F3EE]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3.5 left-3.5">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#103D32]/90 text-white backdrop-blur-xs">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-[#172923] dark:text-[#F2F7F5] text-base sm:text-lg mb-2.5 group-hover:text-[#258B68] dark:group-hover:text-[#34A880] transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#68756F] dark:text-[#9BB0A8] leading-relaxed line-clamp-2 mb-5">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-xs text-[#68756F] dark:text-[#9BB0A8] pt-4 border-t border-[#DCE6E1] dark:border-[#21362E]">
                      <span>{formatDate(post.date)}</span>
                      <span className="flex items-center gap-1 font-medium text-[#103D32] dark:text-[#34A880]">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
