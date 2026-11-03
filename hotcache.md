# Hotcache: Piano-sf/Portfolio

> Read this and `handoff.md` before any action. State only: what is true now. Cap ~500 words.
> **Last updated**: 2026-11-04 · **Commit**: `9932a8c` (pushed to `origin/main`)

## Goal
เว็บพอร์ตโฟลิโอออนไลน์ของ **สวิตตา ฟุ้งลัดดา (เปียโน / Sawitta Fungladda)** สำหรับใช้ยื่นสมัครงานและสหกิจศึกษาสาย Full-Stack & AI Engineer (`portfolio-spec.llm.md`)

## Stack
- **Framework**: Next.js `16.4.4` (App Router, Static Export `output: "export"`) + React `19.3.0` + TypeScript `5`
- **Styling**: Tailwind CSS `v4` + `@tailwindcss/postcss` (`postcss.config.mjs`)
- **Theme**: **Warm Champagne Gold & Ivory** (`#FAF7F2` Light / `#110F0D` Dark / `#C6A16E` Champagne Gold) พร้อมโลโก้ `public/logo-sf.jpg`
- **Hosting**: GitHub Pages ผ่าน GitHub Actions (`.github/workflows/deploy.yml`)

## Built so far
- หน้าเว็บ Single-Page Bento Grid รองรับ 2 ภาษา (`TH` / `EN`) และสลับโหมดสี (`Dark` / `Light`) ได้ทันที (`src/app/page.tsx`, `src/data/portfolio.ts`)
- ภาพจำลองอินเทอร์เฟซเฉพาะตัวของทั้ง 5 โปรเจคหลักที่ปรับสีตามโหมดมืด/สว่าง (`src/components/ProjectVisual.tsx`)
- หน้าต่างดูเรซูเม่แบบอ่านบนหน้าเว็บอย่างเดียว ห้ามดาวน์โหลด (`src/components/CvPreviewModal.tsx`, `public/cv-page-1.jpg`, `public/cv-page-2.jpg`)
- เอกสารสเปก `portfolio-spec.llm.md` และ `README.md` ภาษาไทย

## Where things run
- **Production (GitHub Pages)**: `https://piano-sf.github.io/Portfolio/`
- **Local Dev**: `http://localhost:3005` (`npm run dev -- -p 3005`)

## Environment quirks
- ดู `portfolio-spec.llm.md §0` (Rules 6–9): ต้องมี `postcss.config.mjs` สำหรับ Tailwind v4, ห้ามใช้ `new Date()` ใน Client Component ตอน prerender, และรูปภาพใน `public/` ต้องต่อพาธด้วย `process.env.NEXT_PUBLIC_BASE_PATH || ""` เสมอ

## Key files
- `portfolio-spec.llm.md`: สเปกหลักของโปรเจค (Single source of truth)
- `src/data/portfolio.ts`: ข้อมูลโปรไฟล์ ประสบการณ์ รางวัล และโปรเจคทั้ง 2 ภาษา
- `src/app/page.tsx`: โครงสร้างหน้าเว็บหลัก
- `src/components/ProjectVisual.tsx`: กราฟิกจำลองของทั้ง 5 โปรเจค
- `src/components/CvPreviewModal.tsx`: หน้าต่างดูเรซูเม่แบบ View-only
