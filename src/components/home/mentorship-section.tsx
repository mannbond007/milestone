"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { mentors, type Mentor } from "@/constants/home-data";
import {
  CheckCircle2,
  Star,
  Users,
  Award,
  Building2,
  ArrowUpRight,
  X,
  Sparkles,
  Send,
  User,
  Mail,
  GraduationCap,
} from "lucide-react";
import { useLocale } from "@/components/providers/locale-provider";

export function MentorshipSection() {
  const { t } = useLocale();
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    course: "",
    topic: "",
  });

  const handleBookSession = (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setSubmitted(false);
    setFormData({ studentName: "", email: "", course: "", topic: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="mentorship"
      className="py-20 md:py-28 bg-[#F8FAF8] dark:bg-[#0B1411] border-b border-[#DCE6E1] dark:border-[#21362E]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.14em] bg-[#E8F3EE] dark:bg-[#172923] text-[#103D32] dark:text-[#34A880] border border-[#258B68]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#258B68] dark:bg-[#34A880]" />
            <span>{t("homeMentorship.badge", "Academic Advisory Board")}</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#172923] dark:text-[#F2F7F5] leading-[1.18]">
            {t("homeMentorship.titlePart1", "Learn From Senior")}{" "}
            <span className="text-[#258B68] dark:text-[#34A880]">
              {t("homeMentorship.titlePart2", "Faculty & Industry Mentors")}
            </span>
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#68756F] dark:text-[#9BB0A8] leading-relaxed">
            {t(
              "homeMentorship.subtitle",
              "Receive 1-on-1 academic roadmaps, entrance preparation advice, and career counselling from experienced professors and practitioners."
            )}
          </p>
        </ScrollReveal>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor, idx) => (
            <ScrollReveal key={mentor.id || idx} delay={idx * 0.05}>
              <div className="group h-full flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-[#111E1A] border border-[#DCE6E1] dark:border-[#21362E] hover:border-[#258B68] dark:hover:border-[#34A880] transition-all duration-200 shadow-premium">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-16 h-16 rounded-2xl object-cover border border-[#DCE6E1] dark:border-[#21362E]"
                      />
                      <span
                        className="absolute -bottom-1 -right-1 bg-[#258B68] text-white rounded-full p-0.5 border border-white dark:border-[#111E1A]"
                        title="Verified Faculty Mentor"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-md bg-[#E8F3EE] dark:bg-[#172923] text-[#103D32] dark:text-[#34A880]">
                        <Star className="w-3 h-3 fill-current" />
                        {mentor.rating.toFixed(1)}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#68756F] dark:text-[#9BB0A8]">
                        <Award className="w-3 h-3 text-[#258B68] dark:text-[#34A880]" />
                        {mentor.experience}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#172923] dark:text-[#F2F7F5] group-hover:text-[#258B68] dark:group-hover:text-[#34A880] transition-colors">
                    {mentor.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#258B68] dark:text-[#34A880] mt-0.5">
                    {mentor.designation}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-[#68756F] dark:text-[#9BB0A8] mt-1">
                    <Building2 className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{mentor.institution}</span>
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#68756F] dark:text-[#9BB0A8] leading-relaxed mt-3.5 line-clamp-3">
                    {mentor.description}
                  </p>

                  {mentor.expertiseTags && (
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {mentor.expertiseTags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="text-[11px] font-medium bg-[#F8FAF8] dark:bg-[#0B1411] text-[#172923] dark:text-[#F2F7F5] px-2.5 py-0.5 rounded-md border border-[#DCE6E1] dark:border-[#21362E]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-[#DCE6E1] dark:border-[#21362E] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-[#68756F] dark:text-[#9BB0A8]">
                    <Users className="w-3.5 h-3.5 text-[#258B68] dark:text-[#34A880]" />
                    <span>
                      <strong className="text-[#172923] dark:text-[#F2F7F5]">{mentor.menteesCount}</strong>{" "}
                      {t("homeMentorship.mentees", "Mentees")}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleBookSession(mentor)}
                    className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#E8F3EE] dark:bg-[#172923] hover:bg-[#103D32] hover:text-white dark:hover:bg-[#34A880] dark:hover:text-[#0B1411] text-[#103D32] dark:text-[#34A880] transition-colors cursor-pointer"
                  >
                    <span>{t("homeMentorship.connect", "Request Guidance")}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Guidance Booking Modal */}
      {selectedMentor && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#103D32]/60 dark:bg-black/75 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setSelectedMentor(null)}
        >
          <div
            className="relative w-full max-w-lg bg-white dark:bg-[#111E1A] rounded-2xl border border-[#DCE6E1] dark:border-[#21362E] shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedMentor(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full border border-[#DCE6E1] dark:border-[#21362E] flex items-center justify-center text-[#68756F] hover:text-[#172923] dark:hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {!submitted ? (
              <>
                <div className="flex items-center gap-4 border-b border-[#DCE6E1] dark:border-[#21362E] pb-5 mb-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={selectedMentor.image}
                    alt={selectedMentor.name}
                    className="w-14 h-14 rounded-xl object-cover border border-[#DCE6E1] dark:border-[#21362E]"
                  />
                  <div>
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#103D32] dark:text-[#34A880] bg-[#E8F3EE] dark:bg-[#172923] px-2 py-0.5 rounded">
                      {t("homeMentorship.modalBadge", "Request Guidance Session")}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-[#172923] dark:text-[#F2F7F5] mt-1">
                      {selectedMentor.name}
                    </h3>
                    <p className="text-xs text-[#68756F] dark:text-[#9BB0A8]">
                      {selectedMentor.designation} ({selectedMentor.institution})
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#172923] dark:text-[#F2F7F5] mb-1">
                      {t("homeMentorship.nameLabel", "Your Full Name *")}
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#68756F]" />
                      <input
                        type="text"
                        required
                        placeholder={t("homeMentorship.namePlaceholder", "e.g. Rahul Sharma")}
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        className="w-full pl-9 pr-4 py-2.5 text-sm bg-[#F8FAF8] dark:bg-[#0B1411] border border-[#DCE6E1] dark:border-[#21362E] rounded-xl focus:outline-none focus:border-[#258B68]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#172923] dark:text-[#F2F7F5] mb-1">
                      {t("homeMentorship.emailLabel", "Email Address *")}
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#68756F]" />
                      <input
                        type="email"
                        required
                        placeholder={t("homeMentorship.emailPlaceholder", "e.g. rahul@example.com")}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-9 pr-4 py-2.5 text-sm bg-[#F8FAF8] dark:bg-[#0B1411] border border-[#DCE6E1] dark:border-[#21362E] rounded-xl focus:outline-none focus:border-[#258B68]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#172923] dark:text-[#F2F7F5] mb-1">
                      {t("homeMentorship.courseLabel", "Current Course / Class *")}
                    </label>
                    <div className="relative">
                      <GraduationCap className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#68756F]" />
                      <input
                        type="text"
                        required
                        placeholder={t("homeMentorship.coursePlaceholder", "e.g. Class 12 / B.Tech 2nd Year")}
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full pl-9 pr-4 py-2.5 text-sm bg-[#F8FAF8] dark:bg-[#0B1411] border border-[#DCE6E1] dark:border-[#21362E] rounded-xl focus:outline-none focus:border-[#258B68]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#172923] dark:text-[#F2F7F5] mb-1">
                      {t("homeMentorship.topicLabel", "Topic for Mentorship *")}
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder={t(
                        "homeMentorship.topicPlaceholder",
                        "Briefly describe what you'd like to discuss..."
                      )}
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full p-3 text-sm bg-[#F8FAF8] dark:bg-[#0B1411] border border-[#DCE6E1] dark:border-[#21362E] rounded-xl focus:outline-none focus:border-[#258B68]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-11 bg-[#103D32] hover:bg-[#258B68] text-white dark:bg-[#34A880] dark:text-[#0B1411] font-semibold text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t("homeMentorship.submitBtn", "Submit Mentorship Request")}</span>
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="w-14 h-14 bg-[#E8F3EE] dark:bg-[#172923] text-[#258B68] dark:text-[#34A880] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#172923] dark:text-[#F2F7F5]">
                  {t("homeMentorship.successTitle", "Request Submitted!")}
                </h3>
                <p className="text-xs sm:text-sm text-[#68756F] dark:text-[#9BB0A8] mt-2 leading-relaxed">
                  Thank you, <strong className="text-[#172923] dark:text-white">{formData.studentName}</strong>. Your mentorship request for{" "}
                  <strong className="text-[#258B68] dark:text-[#34A880]">{selectedMentor.name}</strong> has been received.
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedMentor(null)}
                  className="mt-6 px-6 py-2.5 bg-[#103D32] text-white dark:bg-[#34A880] dark:text-[#0B1411] font-semibold text-xs rounded-xl cursor-pointer"
                >
                  {t("homeMentorship.doneBtn", "Done")}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
