"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  MapPin,
  FileText,
  ExternalLink,
  Trophy,
  Briefcase,
  GraduationCap,
  Code2,
  Sparkles,
  Sun,
  Moon,
  CheckCircle2,
  Phone,
  Award,
  Layers,
  Users,
  ArrowUpRight,
} from "lucide-react";
import { portfolioData, type Lang } from "@/data/portfolio";
import { ProjectVisual } from "@/components/ProjectVisual";
import { CvPreviewModal } from "@/components/CvPreviewModal";

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export default function PortfolioPage() {
  const [lang, setLang] = useState<Lang>("th");
  const [isDark, setIsDark] = useState<boolean>(true);
  const [cvOpen, setCvOpen] = useState<boolean>(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  const { profile, nav, stats, projects, experiences, awards, leadership, skillCategories } =
    portfolioData;

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1917] transition-colors duration-300 dark:bg-[#110F0D] dark:text-[#F5EFE6]">
      {/* Subtle Top Champagne Gold Ambient Glow */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[440px] bg-gradient-to-b from-[#C6A16E]/15 via-[#E2C290]/5 to-transparent dark:from-[#C6A16E]/15 dark:via-[#8A683B]/5 dark:to-transparent" />

      {/* Sticky Navigation */}
      <header className="sticky top-0 z-40 border-b border-[#E6DEC8]/90 bg-[#FAF7F2]/85 backdrop-blur-md dark:border-[#C6A16E]/20 dark:bg-[#110F0D]/85">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
          <a href="#" className="group flex items-center gap-3">
            {/* Champagne Gold SF Logo */}
            <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-[#C6A16E]/50 bg-[#1B1714] shadow-sm transition group-hover:scale-105 group-hover:border-[#E2C290]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-sf.jpg"
                alt="SF Logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <span className="block text-sm font-bold tracking-tight text-[#1C1917] dark:text-[#F5EFE6]">
                {profile.name[lang]}
              </span>
              <span className="block font-mono text-[11px] text-[#8A683B] dark:text-[#D4B27C]">
                @{profile.githubHandle} · {profile.nickname[lang]}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-6 text-sm font-medium text-[#57534E] md:flex dark:text-[#D6CFC5]">
            <a
              href="#projects"
              className="transition hover:text-[#8A683B] dark:hover:text-[#E2C290]"
            >
              {nav.projects[lang]}
            </a>
            <a
              href="#experience"
              className="transition hover:text-[#8A683B] dark:hover:text-[#E2C290]"
            >
              {nav.experience[lang]}
            </a>
            <a
              href="#awards"
              className="transition hover:text-[#8A683B] dark:hover:text-[#E2C290]"
            >
              {nav.awards[lang]}
            </a>
            <a
              href="#skills"
              className="transition hover:text-[#8A683B] dark:hover:text-[#E2C290]"
            >
              {nav.skills[lang]}
            </a>
            <a
              href="#contact"
              className="transition hover:text-[#8A683B] dark:hover:text-[#E2C290]"
            >
              {nav.contact[lang]}
            </a>
          </nav>

          {/* Controls: CV Preview + Language Toggle + Theme Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCvOpen(true)}
              className="hidden cursor-pointer items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#B89158] via-[#C6A16E] to-[#DFC08E] px-3.5 py-2 text-xs font-semibold text-[#141210] shadow-xs transition hover:brightness-105 sm:inline-flex"
            >
              <FileText className="h-3.5 w-3.5" />
              {nav.previewCv[lang]}
            </button>

            {/* TH / EN Toggle */}
            <button
              onClick={() => setLang(lang === "th" ? "en" : "th")}
              className="inline-flex h-9 cursor-pointer items-center gap-1 rounded-xl border border-[#D8CEBE] bg-white/90 px-2.5 font-mono text-xs font-semibold text-[#44403C] transition hover:border-[#C6A16E] dark:border-[#C6A16E]/25 dark:bg-[#1B1714] dark:text-[#E7E0D6]"
              title="Switch Language (TH / EN)"
            >
              <span
                className={
                  lang === "th" ? "font-bold text-[#8A683B] dark:text-[#E2C290]" : "opacity-45"
                }
              >
                TH
              </span>
              <span className="opacity-30">/</span>
              <span
                className={
                  lang === "en" ? "font-bold text-[#8A683B] dark:text-[#E2C290]" : "opacity-45"
                }
              >
                EN
              </span>
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-[#D8CEBE] bg-white/90 text-[#44403C] transition hover:border-[#C6A16E] dark:border-[#C6A16E]/25 dark:bg-[#1B1714] dark:text-[#E2C290]"
              aria-label="Toggle color theme"
              title="Toggle Light / Dark Mode"
            >
              {isDark ? (
                <Sun className="h-4 w-4 text-[#E2C290]" />
              ) : (
                <Moon className="h-4 w-4 text-[#8A683B]" />
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl space-y-24 px-4 py-10 sm:px-6 sm:py-16">
        {/* ==================== HERO BENTO SECTION ==================== */}
        <section className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Main Intro Bento Card (8 cols) */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#E6DEC8] bg-white/95 p-6 shadow-xs sm:p-9 lg:col-span-8 dark:border-[#C6A16E]/20 dark:bg-[#181411]/90">
            <div>
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#C6A16E]/40 bg-[#C6A16E]/10 px-3.5 py-1 text-xs font-medium text-[#6E502B] dark:border-[#C6A16E]/35 dark:bg-[#C6A16E]/15 dark:text-[#E2C290]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                {profile.statusBadge[lang]}
              </div>

              <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-[#1C1917] sm:text-5xl dark:text-[#F5EFE6]">
                {profile.name[lang]}{" "}
                <span className="font-normal text-[#8A683B] dark:text-[#E2C290]">
                  ({profile.nickname[lang]})
                </span>
              </h1>

              <p className="mt-2 font-mono text-base font-semibold text-[#8A683B] sm:text-lg dark:text-[#D4B27C]">
                {profile.role[lang]}
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#57534E] sm:text-base dark:text-[#D6CFC5]">
                {profile.tagline[lang]}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setCvOpen(true)}
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-[#B89158] via-[#C6A16E] to-[#DFC08E] px-5 py-3 text-sm font-semibold text-[#141210] shadow-sm transition hover:brightness-105"
              >
                <FileText className="h-4 w-4" />
                {nav.previewCv[lang]}
              </button>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#D8CEBE] bg-[#FAF7F2] px-5 py-3 text-sm font-semibold text-[#292524] transition hover:border-[#C6A16E] hover:bg-[#F3EDE2] dark:border-[#C6A16E]/30 dark:bg-[#221D18] dark:text-[#F5EFE6] dark:hover:border-[#E2C290]"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub (@{profile.githubHandle})
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-[#E6DEC8] bg-white px-4 py-3 text-sm font-medium text-[#44403C] transition hover:border-[#C6A16E] dark:border-[#C6A16E]/20 dark:bg-[#1B1714] dark:text-[#D6CFC5]"
              >
                <Mail className="h-4 w-4 text-[#8A683B] dark:text-[#E2C290]" />
                {profile.email}
              </a>
            </div>
          </div>

          {/* Right Profile & Education Bento Card (4 cols) */}
          <div className="flex flex-col justify-between gap-4 rounded-3xl border border-[#E6DEC8] bg-white/95 p-6 shadow-xs lg:col-span-4 dark:border-[#C6A16E]/20 dark:bg-[#181411]/90">
            <div className="flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.avatarUrl}
                alt={profile.name.en}
                className="h-20 w-20 rounded-2xl border-2 border-[#C6A16E]/50 object-cover shadow-md"
              />
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#8A683B] dark:text-[#D4B27C]">
                  {lang === "th" ? "ข้อมูลการศึกษา" : "Education"}
                </div>
                <div className="mt-0.5 text-base font-bold text-[#1C1917] dark:text-[#F5EFE6]">
                  UTCC Engineering
                </div>
                <div className="mt-1 inline-flex items-center gap-1.5 rounded-md border border-[#C6A16E]/35 bg-[#C6A16E]/15 px-2 py-0.5 font-mono text-xs font-bold text-[#6E502B] dark:text-[#E2C290]">
                  GPAX {profile.education.gpax}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#E6DEC8] bg-[#FAF7F2] p-4 dark:border-[#C6A16E]/15 dark:bg-[#120F0D]">
              <div className="flex items-start gap-2.5">
                <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-[#8A683B] dark:text-[#E2C290]" />
                <div className="text-xs leading-relaxed">
                  <div className="font-semibold text-[#1C1917] dark:text-[#F5EFE6]">
                    {profile.education.degree[lang]}
                  </div>
                  <div className="mt-0.5 text-[#78716C] dark:text-[#A8A096]">
                    {profile.education.university[lang]}
                  </div>
                  <div className="mt-1 font-mono text-[11px] font-medium text-[#8A683B] dark:text-[#D4B27C]">
                    {profile.education.period[lang]}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-xs text-[#57534E] dark:text-[#A8A096]">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-[#8A683B] dark:text-[#E2C290]" />
                <span>{profile.location[lang]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-[#8A683B] dark:text-[#E2C290]" />
                <span className="font-mono">{profile.phone}</span>
              </div>
            </div>
          </div>

          {/* 4 Metric Bento Strip */}
          {stats.map((st, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-[#E6DEC8] bg-white/95 p-5 shadow-2xs lg:col-span-3 dark:border-[#C6A16E]/20 dark:bg-[#181411]/85"
            >
              <div className="bg-gradient-to-r from-[#8A683B] to-[#C6A16E] bg-clip-text font-mono text-2xl font-extrabold text-transparent sm:text-3xl dark:from-[#E2C290] dark:to-[#B89158]">
                {st.value}
              </div>
              <div className="mt-1 text-sm font-bold text-[#1C1917] dark:text-[#F5EFE6]">
                {st.label[lang]}
              </div>
              <div className="mt-0.5 text-xs text-[#78716C] dark:text-[#A8A096]">
                {st.sub[lang]}
              </div>
            </div>
          ))}
        </section>

        {/* ==================== FEATURED PROJECTS (BENTO GRID) ==================== */}
        <section id="projects" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#8A683B] dark:text-[#E2C290]">
                <Code2 className="h-4 w-4" />
                {lang === "th" ? "5 ผลงานเด่นบน GitHub" : "5 Featured GitHub Repositories"}
              </div>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-[#1C1917] sm:text-3xl dark:text-[#F5EFE6]">
                {lang === "th"
                  ? "โปรเจคและระบบที่พัฒนาใช้งานจริง"
                  : "Featured Engineering Projects"}
              </h2>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8A683B] hover:underline dark:text-[#E2C290]"
            >
              {lang === "th" ? "ดู Repositories ทั้งหมดบน GitHub" : "View all repositories on GitHub"}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-6">
            {projects.map((project) => {
              const spanClass =
                project.featuredSpan === "large" ? "lg:col-span-3" : "lg:col-span-2";

              return (
                <article
                  key={project.id}
                  className={`group flex flex-col justify-between rounded-3xl border border-[#E6DEC8] bg-white/95 p-6 shadow-xs transition hover:-translate-y-0.5 hover:border-[#C6A16E] hover:shadow-md dark:border-[#C6A16E]/20 dark:bg-[#181411]/90 dark:hover:border-[#E2C290]/60 ${spanClass}`}
                >
                  <div>
                    {/* Custom Interactive UI Mockup */}
                    <ProjectVisual id={project.id} lang={lang} />

                    {/* Badge */}
                    {project.badge && (
                      <div className="mt-4 inline-flex items-center rounded-full border border-[#C6A16E]/35 bg-[#C6A16E]/10 px-3 py-0.5 text-[11px] font-semibold text-[#6E502B] dark:border-[#C6A16E]/30 dark:bg-[#C6A16E]/15 dark:text-[#E2C290]">
                        {project.badge[lang]}
                      </div>
                    )}

                    {/* Title & Subtitle */}
                    <h3 className="mt-2.5 text-xl font-bold text-[#1C1917] dark:text-[#F5EFE6]">
                      {project.title[lang]}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-[#8A683B] dark:text-[#D4B27C]">
                      {project.subtitle[lang]}
                    </p>

                    {/* Description */}
                    <p className="mt-3 text-xs leading-relaxed text-[#57534E] sm:text-sm dark:text-[#D6CFC5]">
                      {project.description[lang]}
                    </p>

                    {/* Key Highlights */}
                    <ul className="mt-4 space-y-1.5 text-xs text-[#57534E] dark:text-[#D6CFC5]">
                      {project.highlights[lang].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#9E7842] dark:text-[#E2C290]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 border-t border-[#E6DEC8]/80 pt-4 dark:border-[#C6A16E]/15">
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-[#E6DEC8] bg-[#FAF7F2] px-2 py-0.5 font-mono text-[11px] text-[#44403C] dark:border-[#C6A16E]/20 dark:bg-[#120F0D] dark:text-[#D6CFC5]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="mt-4 flex items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#B89158] to-[#D4B27C] px-3.5 py-2 text-xs font-semibold text-[#141210] transition hover:brightness-105"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          {lang === "th" ? "เว็บใช้งานจริง (Live Demo)" : "Live Demo"}
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl border border-[#D8CEBE] bg-[#FAF7F2] px-3.5 py-2 text-xs font-semibold text-[#292524] transition hover:border-[#C6A16E] hover:bg-[#F3EDE2] dark:border-[#C6A16E]/30 dark:bg-[#221D18] dark:text-[#E7E0D6] dark:hover:border-[#E2C290]"
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                        {lang === "th" ? "ซอร์สโค้ด (GitHub)" : "Source Code"}
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ==================== PROFESSIONAL EXPERIENCE ==================== */}
        <section id="experience" className="scroll-mt-24 space-y-8">
          <div>
            <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#8A683B] dark:text-[#E2C290]">
              <Briefcase className="h-4 w-4" />
              {lang === "th" ? "ประสบการณ์ทำงานและสหกิจศึกษา" : "Professional Experience"}
            </div>
            <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-[#1C1917] sm:text-3xl dark:text-[#F5EFE6]">
              {lang === "th"
                ? "ประสบการณ์วิศวกรรมซอฟต์แวร์และการทำงานจริง"
                : "Industry & Engineering Experience"}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`flex flex-col justify-between rounded-3xl border p-6 shadow-xs ${
                  exp.highlight
                    ? "border-[#C6A16E]/60 bg-gradient-to-br from-[#C6A16E]/12 via-white to-white md:col-span-2 dark:border-[#C6A16E]/50 dark:from-[#C6A16E]/15 dark:via-[#181411] dark:to-[#181411]"
                    : "border-[#E6DEC8] bg-white/95 dark:border-[#C6A16E]/20 dark:bg-[#181411]/90"
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center rounded-full border border-[#C6A16E]/30 bg-[#C6A16E]/10 px-3 py-0.5 font-mono text-xs font-semibold text-[#6E502B] dark:text-[#E2C290]">
                      {exp.type[lang]}
                    </span>
                    <span className="font-mono text-xs text-[#78716C] dark:text-[#A8A096]">
                      {exp.period[lang]}
                    </span>
                  </div>

                  <h3 className="mt-3 text-lg font-bold text-[#1C1917] sm:text-xl dark:text-[#F5EFE6]">
                    {exp.role[lang]}{" "}
                    <span className="text-[#8A683B] dark:text-[#E2C290]">@ {exp.company}</span>
                  </h3>

                  <ul className="mt-3 space-y-2 text-xs leading-relaxed text-[#57534E] sm:text-sm dark:text-[#D6CFC5]">
                    {exp.bullets[lang].map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C6A16E]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-[#E6DEC8]/80 pt-3 dark:border-[#C6A16E]/15">
                  {exp.skills.map((sk) => (
                    <span
                      key={sk}
                      className="rounded-md border border-[#E6DEC8] bg-[#FAF7F2] px-2.5 py-0.5 font-mono text-[11px] font-medium text-[#44403C] dark:border-[#C6A16E]/20 dark:bg-[#120F0D] dark:text-[#D6CFC5]"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== AWARDS, HACKATHONS & LEADERSHIP ==================== */}
        <section id="awards" className="scroll-mt-24 space-y-8">
          <div>
            <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#8A683B] dark:text-[#E2C290]">
              <Trophy className="h-4 w-4" />
              {lang === "th" ? "รางวัลและการแข่งขันระดับประเทศ" : "Awards, Hackathons & Leadership"}
            </div>
            <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-[#1C1917] sm:text-3xl dark:text-[#F5EFE6]">
              {lang === "th"
                ? "รางวัลเกียรติยศ ใบรับรอง และกิจกรรมผู้นำ"
                : "Honors, Certifications & Extracurricular Leadership"}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
            {/* Awards List (8 cols) */}
            <div className="space-y-4 lg:col-span-8">
              {awards.map((aw, i) => (
                <div
                  key={i}
                  className={`rounded-3xl border p-5 shadow-xs transition ${
                    aw.type === "winner"
                      ? "border-[#C6A16E] bg-gradient-to-r from-[#C6A16E]/20 via-white to-white dark:border-[#E2C290]/60 dark:from-[#C6A16E]/20 dark:via-[#181411] dark:to-[#181411]"
                      : "border-[#E6DEC8] bg-white/95 dark:border-[#C6A16E]/20 dark:bg-[#181411]/90"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 text-xs font-bold ${
                        aw.type === "winner"
                          ? "bg-gradient-to-r from-[#B89158] to-[#DFC08E] text-[#141210]"
                          : "border border-[#C6A16E]/30 bg-[#C6A16E]/10 text-[#6E502B] dark:text-[#E2C290]"
                      }`}
                    >
                      <Award className="h-3.5 w-3.5" />
                      {aw.rank[lang]}
                    </span>
                    <span className="font-mono text-xs font-semibold text-[#78716C] dark:text-[#A8A096]">
                      {aw.year}
                    </span>
                  </div>

                  <h3 className="mt-2.5 text-base font-bold text-[#1C1917] sm:text-lg dark:text-[#F5EFE6]">
                    {aw.title[lang]}
                  </h3>
                  <div className="text-xs font-medium text-[#8A683B] dark:text-[#D4B27C]">
                    {aw.organization[lang]}
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[#57534E] sm:text-sm dark:text-[#D6CFC5]">
                    {aw.description[lang]}
                  </p>
                </div>
              ))}
            </div>

            {/* Leadership & Extracurricular Card (4 cols) */}
            <div className="flex flex-col justify-between rounded-3xl border border-[#E6DEC8] bg-white/95 p-6 shadow-xs lg:col-span-4 dark:border-[#C6A16E]/20 dark:bg-[#181411]/90">
              <div>
                <div className="inline-flex items-center gap-2 rounded-xl border border-[#C6A16E]/35 bg-[#C6A16E]/15 px-3 py-1.5 text-xs font-bold text-[#6E502B] dark:text-[#E2C290]">
                  <Users className="h-4 w-4" />
                  {lang === "th" ? "ภาวะผู้นำและกิจกรรมคณะ" : "Leadership & Community"}
                </div>

                <h3 className="mt-4 text-lg font-bold text-[#1C1917] dark:text-[#F5EFE6]">
                  {lang === "th"
                    ? "การสื่อสารและการบริหารจัดการทีม"
                    : "Team Management & Communication"}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#57534E] dark:text-[#D6CFC5]">
                  {lang === "th"
                    ? "นอกเหนือจากงานวิศวกรรมซอฟต์แวร์ เปียโนยังได้รับความไว้วางใจให้เป็นผู้นำกิจกรรมรับน้องและวิทยากรถ่ายทอดประสบการณ์ให้รุ่นน้องคณะวิศวกรรมศาสตร์"
                    : "Alongside software engineering, Piano actively leads student initiatives, freshman orientation camps, and technical mentoring at UTCC Faculty of Engineering."}
                </p>

                <div className="mt-6 space-y-4">
                  {leadership.map((ld, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-[#E6DEC8] bg-[#FAF7F2] p-4 dark:border-[#C6A16E]/15 dark:bg-[#120F0D]"
                    >
                      <div className="text-xs font-bold text-[#1C1917] dark:text-[#F5EFE6]">
                        {ld.role[lang]}
                      </div>
                      <div className="mt-1 text-[11px] text-[#78716C] dark:text-[#A8A096]">
                        {ld.org[lang]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-[#C6A16E]/30 bg-[#C6A16E]/10 p-4 text-xs text-[#57534E] dark:text-[#D6CFC5]">
                <div className="font-semibold text-[#6E502B] dark:text-[#E2C290]">
                  {lang === "th" ? "จุดแข็งในการทำงานร่วมกับทีม (Soft Skills)" : "Core Soft Skills"}
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {[
                    lang === "th" ? "การคิดวิเคราะห์เชิงระบบ" : "Analytical Thinking",
                    lang === "th" ? "การทำงานร่วมกับทีม BA/QA" : "Cross-functional Collaboration",
                    lang === "th" ? "การปรับตัวและเรียนรู้เร็ว" : "Fast Learner & Adaptable",
                  ].map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-[#E6DEC8] bg-white px-2 py-0.5 text-[11px] font-medium text-[#292524] shadow-2xs dark:border-[#C6A16E]/20 dark:bg-[#181411] dark:text-[#E7E0D6]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== TECHNICAL SKILLS BENTO ==================== */}
        <section id="skills" className="scroll-mt-24 space-y-8">
          <div>
            <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#8A683B] dark:text-[#E2C290]">
              <Layers className="h-4 w-4" />
              {lang === "th" ? "ทักษะและเครื่องมือทางเทคนิค" : "Technical Arsenal"}
            </div>
            <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-[#1C1917] sm:text-3xl dark:text-[#F5EFE6]">
              {lang === "th" ? "เทคโนโลยีที่ใช้พัฒนาโปรเจค" : "Tech Stack & Engineering Tools"}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-[#E6DEC8] bg-white/95 p-6 shadow-xs dark:border-[#C6A16E]/20 dark:bg-[#181411]/90"
              >
                <h3 className="text-base font-bold text-[#1C1917] dark:text-[#F5EFE6]">
                  {cat.title[lang]}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.skills.map((sk) => (
                    <span
                      key={sk}
                      className="rounded-xl border border-[#E6DEC8] bg-[#FAF7F2] px-3 py-1.5 font-mono text-xs font-medium text-[#292524] transition hover:border-[#C6A16E] hover:text-[#8A683B] dark:border-[#C6A16E]/20 dark:bg-[#120F0D] dark:text-[#E7E0D6] dark:hover:border-[#E2C290] dark:hover:text-[#E2C290]"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== CONTACT / CTA FOOTER ==================== */}
        <section
          id="contact"
          className="scroll-mt-24 rounded-3xl border border-[#C6A16E]/45 bg-gradient-to-br from-[#C6A16E]/15 via-white to-[#E2C290]/15 p-8 text-center shadow-xs sm:p-12 dark:border-[#C6A16E]/35 dark:from-[#C6A16E]/15 dark:via-[#181411] dark:to-[#8A683B]/10"
        >
          <div className="mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C6A16E]/40 bg-[#C6A16E]/15 px-3.5 py-1 text-xs font-semibold text-[#6E502B] dark:text-[#E2C290]">
              <Sparkles className="h-3.5 w-3.5" />
              {lang === "th" ? "พร้อมพูดคุยและเริ่มงาน" : "Available for Interviews"}
            </span>
            <h2 className="mt-4 text-2xl font-extrabold text-[#1C1917] sm:text-4xl dark:text-[#F5EFE6]">
              {lang === "th"
                ? "สนใจร่วมงานหรือพูดคุยเพิ่มเติม ติดต่อเปียโนได้เลยค่ะ"
                : "Let’s Build Impactful Software Together"}
            </h2>
            <p className="mt-3 text-sm text-[#57534E] sm:text-base dark:text-[#D6CFC5]">
              {lang === "th"
                ? "สามารถเปิดดูเรซูเม่ฉบับเต็มได้ทันทีจากปุ่มด้านล่าง หรือติดต่อผ่านอีเมลและโทรศัพท์ได้โดยตรงค่ะ"
                : "Preview my full CV right in your browser or reach out directly via email or phone."}
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setCvOpen(true)}
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-[#B89158] via-[#C6A16E] to-[#DFC08E] px-6 py-3 text-sm font-semibold text-[#141210] shadow-sm transition hover:brightness-105"
              >
                <FileText className="h-4 w-4" />
                {nav.previewCv[lang]}
              </button>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-[#D8CEBE] bg-white px-5 py-3 text-sm font-semibold text-[#292524] transition hover:border-[#C6A16E] dark:border-[#C6A16E]/30 dark:bg-[#221D18] dark:text-[#F5EFE6]"
              >
                <Mail className="h-4 w-4 text-[#8A683B] dark:text-[#E2C290]" />
                {profile.email}
              </a>

              <a
                href={`tel:${profile.phone.replace(/-/g, "")}`}
                className="inline-flex items-center gap-2 rounded-xl border border-[#D8CEBE] bg-white px-5 py-3 font-mono text-sm font-semibold text-[#292524] transition hover:border-[#C6A16E] dark:border-[#C6A16E]/30 dark:bg-[#221D18] dark:text-[#F5EFE6]"
              >
                <Phone className="h-4 w-4 text-[#8A683B] dark:text-[#E2C290]" />
                {profile.phone}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E6DEC8] py-8 text-center text-xs text-[#78716C] dark:border-[#C6A16E]/20 dark:text-[#A8A096]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6">
          <div>
            © 2026 {profile.name[lang]} ({profile.nickname[lang]}). Built with
            Next.js, TypeScript & Tailwind CSS v4.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8A683B] dark:hover:text-[#E2C290]"
            >
              GitHub (@{profile.githubHandle})
            </a>
            <button
              onClick={() => setCvOpen(true)}
              className="cursor-pointer hover:text-[#8A683B] dark:hover:text-[#E2C290]"
            >
              {nav.previewCv[lang]}
            </button>
          </div>
        </div>
      </footer>

      {/* CV Preview Modal */}
      <CvPreviewModal
        open={cvOpen}
        onClose={() => setCvOpen(false)}
        cvUrl={profile.cvUrl}
        lang={lang}
      />
    </div>
  );
}
