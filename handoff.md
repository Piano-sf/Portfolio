# Handoff: Piano-sf/Portfolio

> For the next session: read this after `hotcache.md`, then start with item 1 under "Next". Cap ~500 words.
> **Last updated**: 2026-11-04

## Status
2026-11-04: พัฒนาและส่งมอบเว็บ `Piano-sf/Portfolio` ครบตาม `portfolio-spec.llm.md` ทุกข้อ บิลด์ผ่าน 100% และออนไลน์บน GitHub Pages ที่ `https://piano-sf.github.io/Portfolio/` เรียบร้อยแล้ว งานถัดไปคือการ commit ไฟล์เอกสารสเปก (`portfolio-spec.llm.md`, `hotcache.md`, `handoff.md`) ขึ้น repo เมื่อผู้ใช้ยืนยัน

## Decided, don't reopen (unless the user asks)

| Topic | Decision | Recorded in |
|---|---|---|
| ชื่อภาษาไทย | สะกดว่า **สวิตตา ฟุ้งลัดดา (เปียโน)** เสมอ | `portfolio-spec.llm.md §0` Rule 2 |
| Tech Stack & Hosting | Next.js 16 Static Export + TS + Tailwind v4 บน GitHub Pages | `portfolio-spec.llm.md §2` |
| โทนสีและโลโก้ | โลโก้ `SF` โทน **Warm Champagne Gold & Ivory** รองรับทั้ง Light/Dark Mode | `portfolio-spec.llm.md §0` Rule 5 |
| การแสดงผลเรซูเม่ | **โหมดอ่านอย่างเดียว (View-Only)** บนหน้าเว็บ ห้ามดาวน์โหลดไฟล์ PDF | `portfolio-spec.llm.md §0` Rule 4 |

## Checked myself (no need to ask the user)
- ทดสอบ `GITHUB_ACTIONS=true npm run build` ผ่านสมบูรณ์ ไม่มี CSS หรือ TypeScript warning
- ยืนยัน `https://piano-sf.github.io/Portfolio/` ตอบกลับ `HTTP/2 200 OK`

## User must do
- ไม่มีรายการค้างสำหรับตัวเว็บ `Portfolio` (ออนไลน์สมบูรณ์แล้ว)

## Open work / Not verified
- รอผู้ใช้ตรวจทานไฟล์ `portfolio-spec.llm.md`, `hotcache.md`, `handoff.md` ก่อนสั่ง `git commit` และ `git push`

## Next
1. แสดงตัวอย่าง `portfolio-spec.llm.md` ให้ผู้ใช้ตรวจทาน แล้ว commit & push ขึ้น `Piano-sf/Portfolio` เมื่อผู้ใช้ยืนยัน

## Standing user rules
- "ก่อน push ต้อง preview ให้ดูก่อนนะคะ"
- "เรื่องการ review cv ค่ะคือเราไม่ให้ดาวน์โหลดได้นะคะ เป็นเพียงการรีวิวบนหน้าเว็บเท่านั้นค่ะ"
