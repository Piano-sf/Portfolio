"use client";

import React, { useEffect } from "react";
import { X, FileText, ShieldCheck } from "lucide-react";
import type { Lang } from "@/data/portfolio";

interface CvPreviewModalProps {
  open: boolean;
  onClose: () => void;
  lang: Lang;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function CvPreviewModal({ open, onClose, lang }: CvPreviewModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-6"
      onClick={onClose}
      onContextMenu={(e) => e.preventDefault()}
      role="dialog"
      aria-modal="true"
      aria-label="CV Preview"
    >
      <div
        className="flex h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[#E6DEC8] bg-[#FAF7F2] shadow-2xl dark:border-[#C6A16E]/30 dark:bg-[#1A1613]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header (View-Only, No Download / External Links) */}
        <div className="flex items-center justify-between gap-3 border-b border-[#E6DEC8] px-5 py-3.5 dark:border-[#C6A16E]/20">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#C6A16E]/30 bg-[#C6A16E]/15 text-[#8A683B] dark:text-[#E2C290]">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1C1917] dark:text-[#F5EFE6]">
                {lang === "th"
                  ? "เรซูเม่ — สวิตตา ฟุ้งลัดดา (เปียโน)"
                  : "Curriculum Vitae — Sawitta Fungladda"}
              </h3>
              <p className="text-xs text-[#78716C] dark:text-[#A8A096]">
                {lang === "th"
                  ? "สำหรับอ่านบนหน้าเว็บเท่านั้น (View-only · 2 หน้า)"
                  : "In-browser preview only (View-only · 2 pages)"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="hidden items-center gap-1.5 rounded-full border border-[#C6A16E]/35 bg-[#C6A16E]/10 px-3 py-1 text-[11px] font-medium text-[#6E502B] sm:inline-flex dark:text-[#E2C290]">
              <ShieldCheck className="h-3.5 w-3.5" />
              {lang === "th" ? "โหมดอ่านอย่างเดียว" : "View Only"}
            </span>

            <button
              onClick={onClose}
              className="cursor-pointer rounded-lg p-1.5 text-[#78716C] transition hover:bg-[#EFECE6] hover:text-[#1C1917] dark:text-[#A8A096] dark:hover:bg-[#241F1B] dark:hover:text-white"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Scrollable 2-Page Document Viewer (Right-click & Drag disabled) */}
        <div
          className="flex-1 space-y-6 overflow-y-auto bg-[#EFECE6] p-4 select-none sm:p-8 dark:bg-[#0D0B0A]"
          onContextMenu={(e) => e.preventDefault()}
        >
          {[1, 2].map((pageNum) => (
            <div
              key={pageNum}
              className="relative mx-auto max-w-3xl overflow-hidden rounded-xl border border-[#D8CEBE] bg-white shadow-lg dark:border-[#C6A16E]/20"
            >
              {/* Page Number Badge */}
              <div className="absolute top-3 right-3 z-10 rounded-full bg-black/65 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-[#E2C290] backdrop-blur-xs">
                {lang === "th" ? `หน้า ${pageNum} / 2` : `Page ${pageNum} / 2`}
              </div>

              {/* Transparent Protective Overlay to prevent direct image dragging/saving */}
              <div className="absolute inset-0 z-10" />

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${basePath}/cv-page-${pageNum}.jpg`}
                alt={`Sawitta Fungladda CV Page ${pageNum}`}
                draggable={false}
                className="pointer-events-none block h-auto w-full select-none"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
