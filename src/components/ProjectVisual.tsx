"use client";

import React from "react";
import type { Lang, ProjectItem } from "@/data/portfolio";

export function ProjectVisual({ id, lang }: { id: ProjectItem["id"]; lang: Lang }) {
  switch (id) {
    case "drone-dashboard":
      return (
        <div className="relative h-52 w-full overflow-hidden rounded-xl border border-[#C6A16E]/30 bg-[#F4EFE6] p-4 text-[#292524] shadow-inner transition-colors duration-300 dark:border-[#C6A16E]/25 dark:bg-[#14110E] dark:text-[#E7E0D6]">
          {/* Radar Grid Background */}
          <div
            className="absolute inset-0 opacity-35 dark:opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, rgba(198, 161, 110, 0.45) 1px, transparent 1px), linear-gradient(to right, rgba(198, 161, 110, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(198, 161, 110, 0.12) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          {/* Top HUD Bar */}
          <div className="relative z-10 flex items-center justify-between border-b border-[#C6A16E]/25 pb-2 font-mono text-[11px]">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-600 dark:bg-emerald-400" />
              <span className="font-semibold tracking-wider text-[#6E502B] dark:text-[#E2C290]">
                CMD-POST // TESA-2025
              </span>
            </div>
            <span className="rounded border border-[#C6A16E]/30 bg-[#C6A16E]/15 px-2 py-0.5 text-[10px] font-semibold text-[#6E502B] dark:text-[#E2C290]">
              LATENCY: 4.2ms
            </span>
          </div>

          {/* Radar & Telemetry Split */}
          <div className="relative z-10 mt-3 grid grid-cols-12 gap-3">
            {/* Radar Circle */}
            <div className="col-span-5 flex items-center justify-center">
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-[#C6A16E]/45 bg-white/85 shadow-xs dark:border-[#C6A16E]/40 dark:bg-[#1F1A15]">
                <div className="h-20 w-20 rounded-full border border-[#C6A16E]/30" />
                <div className="absolute h-10 w-10 rounded-full border border-[#C6A16E]/25" />
                <div className="absolute h-full w-[1px] bg-[#C6A16E]/25" />
                <div className="absolute h-[1px] w-full bg-[#C6A16E]/25" />
                {/* Drone Blips */}
                <div className="absolute top-6 left-6 flex items-center gap-1">
                  <span className="h-2 w-2 animate-ping rounded-full bg-rose-500" />
                  <span className="h-2 w-2 rounded-full bg-rose-600 dark:bg-rose-500" />
                  <span className="font-mono text-[9px] font-bold text-rose-700 dark:text-rose-400">
                    ATK-01
                  </span>
                </div>
                <div className="absolute right-4 bottom-6 flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                  <span className="font-mono text-[9px] font-bold text-emerald-700 dark:text-emerald-300">
                    DEF-04
                  </span>
                </div>
              </div>
            </div>

            {/* Telemetry Cards */}
            <div className="col-span-7 flex flex-col justify-between space-y-2 font-mono text-[11px]">
              <div className="rounded-lg border border-[#D8CEBE] bg-white/95 p-2 shadow-2xs dark:border-[#C6A16E]/20 dark:bg-[#1E1915]">
                <div className="flex justify-between text-[10px] text-[#78716C] dark:text-[#A8A096]">
                  <span>{lang === "th" ? "โดรนฝั่งบุก (Offensive)" : "OFFENSIVE TRACK"}</span>
                  <span className="font-bold text-rose-600 dark:text-rose-400">LOCKED</span>
                </div>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xs font-bold text-[#1C1917] dark:text-[#F5EFE6]">
                    14.0768° N, 100.6015° E
                  </span>
                  <span className="text-[10px] font-semibold text-[#8A683B] dark:text-[#E2C290]">
                    ALT 128m
                  </span>
                </div>
              </div>

              <div className="rounded-lg border border-[#D8CEBE] bg-white/95 p-2 shadow-2xs dark:border-[#C6A16E]/20 dark:bg-[#1E1915]">
                <div className="flex justify-between text-[10px] text-[#78716C] dark:text-[#A8A096]">
                  <span>{lang === "th" ? "โดรนฝั่งป้องกัน (Defense)" : "DEFENSE INTERCEPT"}</span>
                  <span className="font-bold text-emerald-700 dark:text-emerald-400">ACTIVE</span>
                </div>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[#E6DEC8] dark:bg-[#2B241E]">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-[#B89158] to-[#E2C290]" />
                </div>
                <div className="mt-1 flex justify-between text-[10px] text-[#57534E] dark:text-[#D6CFC5]">
                  <span>STREAM: 60 FPS</span>
                  <span className="font-bold text-[#8A683B] dark:text-[#E2C290]">
                    🏆 TOP SCORE WINNER
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case "expense-planner":
      return (
        <div className="relative h-52 w-full overflow-hidden rounded-xl border border-[#C6A16E]/30 bg-gradient-to-br from-[#F7F3EB] via-white to-[#F2ECE1] p-4 text-[#1C1917] shadow-inner transition-colors duration-300 dark:border-[#C6A16E]/25 dark:from-[#161310] dark:via-[#1C1814] dark:to-[#241E17] dark:text-[#F5EFE6]">
          <div className="flex items-center justify-between border-b border-[#E6DEC8] pb-2.5 dark:border-[#C6A16E]/20">
            <div>
              <span className="text-[10px] font-semibold tracking-wider text-[#8A683B] uppercase dark:text-[#E2C290]">
                {lang === "th" ? "แผนจัดสรรเงินเดือน 50 / 30 / 20" : "50 / 30 / 20 PAYCHECK PLANNER"}
              </span>
              <div className="text-sm font-bold text-[#1C1917] dark:text-[#F5EFE6]">
                ฿45,000.00 / mo
              </div>
            </div>
            <span className="rounded-full border border-[#C6A16E]/40 bg-[#C6A16E]/15 px-2.5 py-0.5 text-[10px] font-semibold text-[#6E502B] dark:text-[#E2C290]">
              {lang === "th" ? "+ ภ.ง.ด.91 Tax Ready" : "+ PND.91 Tax Engine"}
            </span>
          </div>

          <div className="mt-3 space-y-2.5 text-xs">
            <div>
              <div className="mb-1 flex justify-between text-[11px]">
                <span className="font-medium text-[#44403C] dark:text-[#D6CFC5]">
                  {lang === "th" ? "50% ค่าใช้จ่ายจำเป็น (Needs)" : "50% Needs"}
                </span>
                <span className="font-mono font-semibold text-[#8A683B] dark:text-[#E2C290]">
                  ฿21,400 / ฿22,500
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-[#E6DEC8] dark:bg-[#2B241E]">
                <div className="h-full w-[48%] rounded-full bg-gradient-to-r from-[#9E7842] to-[#C6A16E]" />
              </div>
            </div>

            <div>
              <div className="mb-1 flex justify-between text-[11px]">
                <span className="font-medium text-[#44403C] dark:text-[#D6CFC5]">
                  {lang === "th" ? "30% ความต้องการส่วนตัว (Wants)" : "30% Wants"}
                </span>
                <span className="font-mono font-semibold text-amber-700 dark:text-amber-300">
                  ฿11,200 / ฿13,500
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-[#E6DEC8] dark:bg-[#2B241E]">
                <div className="h-full w-[28%] rounded-full bg-amber-600/80 dark:bg-amber-400/80" />
              </div>
            </div>

            <div>
              <div className="mb-1 flex justify-between text-[11px]">
                <span className="font-medium text-[#44403C] dark:text-[#D6CFC5]">
                  {lang === "th" ? "20% เงินออม & ลงทุน (Savings)" : "20% Savings & Tax Deduct"}
                </span>
                <span className="font-mono font-semibold text-emerald-700 dark:text-emerald-300">
                  ฿9,000 / ฿9,000
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-[#E6DEC8] dark:bg-[#2B241E]">
                <div className="h-full w-[20%] rounded-full bg-emerald-600 dark:bg-emerald-400" />
              </div>
            </div>
          </div>
        </div>
      );

    case "project-lineoa":
      return (
        <div className="relative h-44 w-full overflow-hidden rounded-xl border border-[#C6A16E]/30 bg-[#F4EFE6] p-3.5 text-[#1C1917] shadow-inner transition-colors duration-300 dark:border-[#C6A16E]/25 dark:bg-[#14110E] dark:text-[#F5EFE6]">
          <div className="flex items-center justify-between border-b border-[#C6A16E]/20 pb-2 text-[11px]">
            <span className="font-semibold text-[#8A683B] dark:text-[#E2C290]">
              LINE OA · InsightFace buffalo_l
            </span>
            <span className="font-mono text-[10px] text-[#78716C] dark:text-[#A8A096]">
              Drive API Sync
            </span>
          </div>
          <div className="mt-3 flex items-center gap-3">
            {/* Face Scan Box */}
            <div className="relative flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-lg border border-dashed border-[#C6A16E]/60 bg-white/85 dark:border-[#C6A16E]/50 dark:bg-[#1E1915]">
              <div className="h-10 w-10 rounded-full border-2 border-[#C6A16E] bg-[#C6A16E]/15" />
              <span className="mt-1.5 font-mono text-[9px] font-bold text-[#8A683B] dark:text-[#E2C290]">
                SIM: 98.4%
              </span>
            </div>
            {/* Chat Bubbles */}
            <div className="flex-1 space-y-2 text-[11px]">
              <div className="ml-auto w-fit rounded-2xl rounded-tr-none bg-gradient-to-r from-[#9E7842] to-[#C6A16E] px-3 py-1.5 font-medium text-white shadow-2xs dark:text-[#141210]">
                {lang === "th"
                  ? "ส่งรูปเซลฟี่เพื่อค้นหาภาพในงาน 📸"
                  : "Uploaded selfie to find event photos 📸"}
              </div>
              <div className="w-fit rounded-2xl rounded-tl-none border border-[#D8CEBE] bg-white px-3 py-1.5 text-[#292524] shadow-2xs dark:border-[#C6A16E]/20 dark:bg-[#1E1915] dark:text-[#E7E0D6]">
                {lang === "th"
                  ? "✅ พบภาพของคุณ 14 ภาพจาก Google Drive!"
                  : "✅ Found 14 matching photos in Google Drive!"}
              </div>
            </div>
          </div>
        </div>
      );

    case "sar":
      return (
        <div className="relative h-44 w-full overflow-hidden rounded-xl border border-[#C6A16E]/30 bg-[#F4EFE6] p-3.5 text-[#1C1917] shadow-inner transition-colors duration-300 dark:border-[#C6A16E]/25 dark:bg-[#14110E] dark:text-[#F5EFE6]">
          <div className="flex items-center justify-between border-b border-[#C6A16E]/20 pb-2 text-[11px]">
            <span className="font-semibold text-[#8A683B] dark:text-[#E2C290]">
              QA Workflow · มคอ.3 / มคอ.5
            </span>
            <span className="rounded border border-[#C6A16E]/30 bg-[#C6A16E]/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-[#6E502B] dark:text-[#E2C290]">
              Socket.io + Cron
            </span>
          </div>
          <div className="mt-3 space-y-2 text-[11px]">
            <div className="flex items-center justify-between rounded-lg border border-[#D8CEBE] bg-white px-3 py-2 shadow-2xs dark:border-[#C6A16E]/20 dark:bg-[#1E1915]">
              <div>
                <div className="font-semibold text-[#1C1917] dark:text-[#F5EFE6]">
                  CE401 — Artificial Intelligence
                </div>
                <div className="text-[10px] text-[#78716C] dark:text-[#A8A096]">
                  TQF 3 · Semester 1/2026
                </div>
              </div>
              <span className="rounded-full bg-emerald-600/15 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
                {lang === "th" ? "อนุมัติแล้ว" : "Approved"}
              </span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-[#C6A16E]/40 bg-white px-3 py-2 shadow-2xs dark:border-[#C6A16E]/30 dark:bg-[#1E1915]">
              <div>
                <div className="font-semibold text-[#1C1917] dark:text-[#F5EFE6]">
                  CE499 — Senior Project II
                </div>
                <div className="text-[10px] font-medium text-[#8A683B] dark:text-[#E2C290]">
                  {lang === "th"
                    ? "แจ้งเตือนผ่าน MS Teams & Email แล้ว"
                    : "Alert sent via MS Teams & Email"}
                </div>
              </div>
              <span className="rounded-full bg-[#C6A16E]/20 px-2.5 py-0.5 text-[10px] font-semibold text-[#6E502B] dark:text-[#E2C290]">
                {lang === "th" ? "รอตรวจ" : "In Review"}
              </span>
            </div>
          </div>
        </div>
      );

    case "iot-26":
      return (
        <div className="relative h-44 w-full overflow-hidden rounded-xl border border-[#C6A16E]/30 bg-[#F4EFE6] p-3.5 text-[#1C1917] shadow-inner transition-colors duration-300 dark:border-[#C6A16E]/25 dark:bg-[#14110E] dark:text-[#F5EFE6]">
          <div className="flex items-center justify-between border-b border-[#C6A16E]/20 pb-2 text-[11px]">
            <span className="font-semibold text-[#8A683B] dark:text-[#E2C290]">
              🐾 Pawsitive Care · Firebase RTDB
            </span>
            <span className="rounded border border-[#C6A16E]/30 bg-[#C6A16E]/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-[#6E502B] dark:text-[#E2C290]">
              Gemini AI Vet
            </span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center">
            <div className="rounded-lg border border-[#D8CEBE] bg-white p-2 shadow-2xs dark:border-[#C6A16E]/20 dark:bg-[#1E1915]">
              <div className="text-[10px] text-[#78716C] dark:text-[#A8A096]">
                {lang === "th" ? "น้ำหนักแมว" : "Cat Weight"}
              </div>
              <div className="mt-0.5 font-mono text-sm font-bold text-[#1C1917] dark:text-[#F5EFE6]">
                4.35 kg
              </div>
            </div>
            <div className="rounded-lg border border-[#D8CEBE] bg-white p-2 shadow-2xs dark:border-[#C6A16E]/20 dark:bg-[#1E1915]">
              <div className="text-[10px] text-[#78716C] dark:text-[#A8A096]">
                {lang === "th" ? "ความถี่วันนี้" : "Visits Today"}
              </div>
              <div className="mt-0.5 font-mono text-sm font-bold text-[#8A683B] dark:text-[#E2C290]">
                3 times
              </div>
            </div>
            <div className="rounded-lg border border-[#D8CEBE] bg-white p-2 shadow-2xs dark:border-[#C6A16E]/20 dark:bg-[#1E1915]">
              <div className="text-[10px] text-[#78716C] dark:text-[#A8A096]">
                {lang === "th" ? "ความเสี่ยงโรคไต" : "Risk Status"}
              </div>
              <div className="mt-0.5 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                {lang === "th" ? "ปกติ (Normal)" : "Normal"}
              </div>
            </div>
          </div>
          <div className="mt-2 rounded-lg border border-[#C6A16E]/35 bg-[#C6A16E]/10 px-2.5 py-1.5 text-[10px] text-[#5C4322] dark:border-[#C6A16E]/25 dark:text-[#E2C290]">
            🤖 <span className="font-semibold">Gemini Vet:</span>{" "}
            {lang === "th"
              ? "ระยะเวลาขับถ่ายเฉลี่ย 42 วินาที ไม่พบสัญญาณภาวะอุดตันทางเดินปัสสาวะ"
              : "Avg duration 42s. No feline lower urinary tract obstruction detected."}
          </div>
        </div>
      );
  }
}
