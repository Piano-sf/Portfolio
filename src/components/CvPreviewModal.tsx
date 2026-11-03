"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, Download, FileText } from "lucide-react";
import type { Lang } from "@/data/portfolio";

interface CvPreviewModalProps {
  open: boolean;
  onClose: () => void;
  cvUrl: string;
  lang: Lang;
}

export function CvPreviewModal({ open, onClose, cvUrl, lang }: CvPreviewModalProps) {
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 backdrop-blur-sm sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="CV Preview"
    >
      <div
        className="flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-[#E6DEC8] bg-[#FAF7F2] shadow-2xl dark:border-[#C6A16E]/25 dark:bg-[#1A1613]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E6DEC8] px-5 py-3.5 dark:border-[#C6A16E]/20">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#C6A16E]/30 bg-[#C6A16E]/15 text-[#8A683B] dark:text-[#E2C290]">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1C1917] dark:text-[#F5EFE6]">
                {lang === "th"
                  ? "เรซูเม่ — สวิตตา ฟุ้งลัดดา (CV_Sawitta_Fungladda.pdf)"
                  : "Curriculum Vitae — Sawitta Fungladda"}
              </h3>
              <p className="text-xs text-[#78716C] dark:text-[#A8A096]">
                {lang === "th"
                  ? "ตัวอย่างเอกสารเรซูเม่ฉบับเต็ม (2 หน้า)"
                  : "Full 2-page PDF Resume Preview"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#D8CEBE] bg-white px-3 py-1.5 text-xs font-medium text-[#44403C] transition hover:border-[#C6A16E] dark:border-[#332C25] dark:bg-[#241F1B] dark:text-[#E7E0D6] dark:hover:border-[#C6A16E]/50"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              {lang === "th" ? "เปิดแท็บใหม่" : "Open in New Tab"}
            </a>
            <a
              href={cvUrl}
              download="CV_Sawitta_Fungladda.pdf"
              className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#B89158] to-[#D4B27C] px-3.5 py-1.5 text-xs font-semibold text-[#141210] shadow-xs transition hover:brightness-105"
            >
              <Download className="h-3.5 w-3.5" />
              {lang === "th" ? "ดาวน์โหลด PDF" : "Download PDF"}
            </a>
            <button
              onClick={onClose}
              className="ml-1 rounded-lg p-1.5 text-[#78716C] transition hover:bg-[#EFECE6] hover:text-[#1C1917] dark:text-[#A8A096] dark:hover:bg-[#241F1B] dark:hover:text-white"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="relative flex-1 bg-[#EFECE6] dark:bg-[#0D0B0A]">
          <iframe
            src={`${cvUrl}#view=FitH`}
            title="Sawitta Fungladda CV Preview"
            className="h-full w-full border-0"
          />
        </div>
      </div>
    </div>
  );
}
