# Sawitta Fungladda Personal Portfolio (`Piano-sf/Portfolio`): LLM Implementation Spec

> Audience: an AI coding agent (or developer) implementing or maintaining this project.
> Read the whole file before modifying code. Follow the **Rules** (§0) and **Implementation Order** (§9) strictly.

---

## 0. Rules for the implementing agent (read first)

1. **Scope**: build only `MUST`; `SHOULD` after every `MUST` works; `COULD` only if time remains, in the order of §9; never `WON'T`.
2. **Exact Name Spelling**: The owner's Thai name MUST always be spelled **`สวิตตา ฟุ้งลัดดา`** (nickname **`เปียโน`**) and English name **`Sawitta Fungladda`** (nickname **`Piano`**). Never spell the Thai name as `สาวิตา`. Owned by `src/data/portfolio.ts`, `src/app/layout.tsx`, and `README.md`.
3. **Single Source of Content**: All bilingual copy (`th` / `en`), project metadata, experience bullets, awards, and skill categories MUST live in `src/data/portfolio.ts` as a strongly typed constant (`portfolioData`). UI components (`src/app/page.tsx`, `src/components/ProjectVisual.tsx`, `src/components/CvPreviewModal.tsx`) must never hardcode profile facts that belong in `portfolioData`.
4. **View-Only CV Preview (No Download)**: The CV preview modal (`src/components/CvPreviewModal.tsx`) MUST be strictly view-only in the browser. Never ship the raw `.pdf` file in `public/`, never render a download button or "Open in new tab" link, and always render the rasterized pages (`public/cv-page-1.jpg`, `public/cv-page-2.jpg`) with right-click disabled (`onContextMenu={(e) => e.preventDefault()}`), `draggable={false}`, `select-none`, and a transparent overlay div blocking direct image interaction.
5. **Theme & Palette Consistency**: Every section AND every project visual mockup (`src/components/ProjectVisual.tsx`) MUST support both **Light Mode** (`#FAF7F2` Warm Alabaster Ivory background, `#1C1917` text, `#8A683B` Bronze Gold accents) and **Dark Mode** (`#110F0D` Espresso Obsidian background, `#F5EFE6` text, `#C6A16E` / `#E2C290` Champagne Gold accents) matching the `public/logo-sf.jpg` brand mark.
6. **Tailwind v4 PostCSS Compilation**: Verified on `next@16.4.4` + `tailwindcss@4`: `postcss.config.mjs` MUST configure `@tailwindcss/postcss`, and `src/app/globals.css` MUST declare `@custom-variant dark (&:where(.dark, .dark *));` so class-based `.dark` toggling on `document.documentElement` works reliably.
7. **GitHub Pages BasePath Handling**: Verified on `next@16.4.4` static export (`output: "export"`): when `process.env.GITHUB_ACTIONS === "true"`, `next.config.ts` MUST set `basePath: "/Portfolio"` and expose `NEXT_PUBLIC_BASE_PATH: "/Portfolio"`. All local static `<img src>` paths (`logo-sf.jpg`, `cv-page-1.jpg`, `cv-page-2.jpg`) MUST prefix `process.env.NEXT_PUBLIC_BASE_PATH || ""` so images resolve both on `http://localhost:3005` and on `https://piano-sf.github.io/Portfolio/`.
8. **Lucide React Brand Icons**: Verified on `lucide-react@1.67.0`: brand icons like `Github` are removed from `lucide-react`. Render the GitHub mark using an inline SVG component (`GithubIcon` in `src/app/page.tsx`).
9. **Static Prerender Determinism**: Verified on `next@16.4.4`: calling `new Date()` directly inside a Client Component body triggers a prerender error (`blocking-prerender-current-time-client`). Use a static year string (`2026`) in the footer.
10. **Confidentiality**: Never include internal source code, internal URLs (`gitlab.int.cardx.co.th`), or proprietary details from the CardX internship; use only the public summary approved in `CV_Sawitta Fungladda.pdf`.
11. **Ambiguity**: choose the simplest option that satisfies §12 and leave a short code comment.

---

## 1. Product summary

**Name:** Sawitta Fungladda Personal Engineering Portfolio (`Piano-sf/Portfolio`)
**One-liner:** A bilingual (TH/EN), dual-theme (Light/Dark) Bento Grid engineering portfolio for Sawitta Fungladda (Piano), showcasing 5 full-stack/AI GitHub projects, industry experience, national awards, and an in-browser view-only CV preview.
**Primary user:** Technical recruiters, hiring managers, and senior engineers evaluating Sawitta Fungladda for Full-Stack / Software & AI Engineering roles.
**Core user story:**
> "As a hiring manager or HR reviewer clicking Piano's portfolio link from her GitHub or resume, I want to scan her GPAX (3.61), CardX internship experience, TESA Top Gun 1st-place award, and 5 featured projects in Thai or English within 30 seconds, and read her 2-page CV directly in the browser without downloading files."

**UI language / theme:**
- **Languages (`MUST`)**: Thai (`th`, default) and English (`en`), toggled instantaneously via navbar state.
- **Color Modes (`MUST`)**: Dark Mode (default, `.dark` on `<html>`) and Light Mode, toggled via navbar state.

---

## 2. Tech stack (fixed)

| Layer | Choice | Notes (verified behaviour @ version) |
|---|---|---|
| Framework | Next.js `16.4.4` (App Router, Turbopack) | Configured with `output: "export"` in `next.config.ts` for static hosting on GitHub Pages. Disallows `new Date()` in Client Components during prerender (Rule 9). |
| UI Runtime | React `19.3.0` + TypeScript `5.x` | Strict TypeScript typing across `src/data/portfolio.ts` and all components. |
| Styling | Tailwind CSS `4.x` + `@tailwindcss/postcss` `4.3.4` | Requires `postcss.config.mjs` with `@tailwindcss/postcss` and `@custom-variant dark` in `src/app/globals.css` (Rule 6). |
| Icons | `lucide-react` `1.67.0` + Inline SVG | `lucide-react@1.67.0` does not export `Github`; `GithubIcon` is defined as an inline SVG component (Rule 8). |
| Typography | `next/font/google` (`Geist`, `Geist_Mono`, `Noto_Sans_Thai`) | Loaded in `src/app/layout.tsx` and bound to `--font-sans` and `--font-mono`. |
| Deployment | GitHub Actions (`actions/deploy-pages@v4`) | Builds `./out` with `GITHUB_ACTIONS="true"` and deploys to `https://piano-sf.github.io/Portfolio/`. |

**Why Next.js (App Router) Static Export on GitHub Pages:**
Demonstrates proficiency with the React / Next.js App Router ecosystem (complementing Nuxt 4 in `expense-planner` and React + Vite in `SAR`/`IOT-26`) while compiling to a zero-cost, zero-quota static bundle hosted on GitHub Pages.

---

## 3. Repository layout

```text
Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml                # GitHub Actions workflow building ./out and deploying to GitHub Pages
├── public/
│   ├── logo-sf.jpg                   # Cropped Champagne Gold "SF" geometric monogram logo
│   ├── cv-page-1.jpg                 # Rasterized page 1 of CV_Sawitta Fungladda.pdf (view-only)
│   └── cv-page-2.jpg                 # Rasterized page 2 of CV_Sawitta Fungladda.pdf (view-only)
├── src/
│   ├── app/
│   │   ├── globals.css               # Tailwind v4 import and @custom-variant dark rule
│   │   ├── layout.tsx                # Root HTML shell, Google fonts (Geist + Noto Sans Thai), metadata
│   │   └── page.tsx                  # Single-page Bento Grid portfolio (Hero, Projects, Experience, Awards, Skills, Contact)
│   ├── components/
│   │   ├── CvPreviewModal.tsx        # View-only 2-page CV modal (no download, context-menu blocked)
│   │   └── ProjectVisual.tsx         # Light/Dark responsive custom UI mockups for the 5 featured projects
│   └── data/
│       └── portfolio.ts              # Strongly typed TH/EN dictionary for profile, projects, experience, awards, skills
├── next.config.ts                    # Static export config + conditional /Portfolio basePath
├── postcss.config.mjs                # @tailwindcss/postcss plugin registration
├── package.json                      # Scripts and dependencies
├── portfolio-spec.llm.md             # This LLM implementation specification
├── hotcache.md                       # Project-level L1 state cache
├── handoff.md                        # Project-level task queue and decision log
└── README.md                         # Thai repository documentation
```

### Scripts
| Command | Does |
|---|---|
| `npm run dev -- -p 3005` | Starts local development server at `http://localhost:3005` |
| `npm run build` | Type-checks and builds static export into `./out` |
| `npm run lint` | Runs ESLint checks |

### Git and hosting
- **Remote**: `https://github.com/Piano-sf/Portfolio.git` (`main` branch)
- **Live URL**: `https://piano-sf.github.io/Portfolio/`
- **Push Rule**: Always preview changes to the user and get confirmation before running `git commit` and `git push`.

### Environment variables
| File | Variable | Default | Purpose |
|---|---|---|---|
| `next.config.ts` | `GITHUB_ACTIONS` | `undefined` locally, `"true"` in CI | Switches `basePath` and `NEXT_PUBLIC_BASE_PATH` between `""` and `"/Portfolio"` (Rule 7) |

---

## 4. Data model (`src/data/portfolio.ts`)

### 4.1 Language & Localized Text Types
- `export type Lang = "th" | "en";`
- Every user-facing string is stored as `{ th: string; en: string }` (or `{ th: string[]; en: string[] }` for bullet lists).

### 4.2 Entities in `portfolioData`
1. **`profile`**:
   - `name`: `{ th: "สวิตตา ฟุ้งลัดดา", en: "Sawitta Fungladda" }` (Rule 2)
   - `nickname`: `{ th: "เปียโน", en: "Piano" }`
   - `role`: `{ th: "Full-Stack & AI Engineer", en: "Full-Stack & AI Engineer" }`
   - `email`: `"sawitta.fld@gmail.com"`, `phone`: `"092-839-8866"`, `github`: `"https://github.com/Piano-sf"`, `githubHandle`: `"Piano-sf"`
   - `education`: UTCC B.Eng. in Computer and Artificial Intelligence Engineering (`gpax: "3.61"`, August 2023 – Present)
2. **`stats`**: 4 highlight KPI cards (`3.61` GPAX, `1st` TESA Top Gun Rally 2025 Winner, `5+` Full-Stack & AI Systems, `CardX` Enterprise Engineering Intern).
3. **`projects` (`ProjectItem[]`)**:
   - `id`: `"drone-dashboard" | "expense-planner" | "project-lineoa" | "sar" | "iot-26"`
   - `featuredSpan`: `"large"` (3 of 6 cols on desktop for `drone-dashboard` and `expense-planner`) or `"medium"` (2 of 6 cols on desktop for `project-lineoa`, `sar`, `iot-26`).
   - `githubUrl` (required) and `liveUrl` (present on `expense-planner` and `iot-26`).
4. **`experiences` (`ExperienceItem[]`)**:
   - `CardX Co., Ltd. (SCB Group)` (`highlight: true`, spans 2 cols), `The Ocean Go Co., Ltd.`, `Math Talent Foundation`, `Fastwork`, `Flowfusion Technology`, `UTCC & KMUTNB`.
5. **`awards` (`AwardItem[]`)**:
   - TESA Top Gun Rally 2025 (`type: "winner"`), IoT Exploratory 2025, Cyber Warrior Hackathon 2025, LINK Network Cabling Certification 2025, Women Thailand Cyber Top Talent 2022.
6. **`leadership`** & **`skillCategories`**:
   - 2 leadership roles at UTCC Engineering and 4 categorized skill groups (Languages, Frontend & Mobile, Backend & Databases, AI/QA/DevOps).

---

## 5. UI & Component Logic

### 5.1 Theme & Language State (`src/app/page.tsx`)
- `lang` state defaults to `"th"`. Clicking the `TH / EN` button toggles between `"th"` and `"en"` without page reload.
- `isDark` state defaults to `true`. A `useEffect` synchronizes `document.documentElement.classList.toggle("dark", isDark)` (Rule 6).

### 5.2 Custom Project Mockups (`src/components/ProjectVisual.tsx`)
- Pure presentational switch component keyed by `project.id` and `lang`.
- Must use Light/Dark adaptive classes (`bg-[#F4EFE6] dark:bg-[#14110E]`, `bg-white dark:bg-[#1E1915]`, Champagne Gold borders `border-[#C6A16E]/30`) so switching to Light Mode transitions every mockup card smoothly (Rule 5).

### 5.3 View-Only CV Modal (`src/components/CvPreviewModal.tsx`)
- Controlled by `cvOpen` boolean state in `src/app/page.tsx`.
- Closes on `Escape` keydown or backdrop click.
- Displays `cv-page-1.jpg` and `cv-page-2.jpg` inside a non-selectable, right-click-disabled container with a transparent overlay div (`<div className="absolute inset-0 z-10" />`) and a `View Only / โหมดอ่านอย่างเดียว` badge (Rule 4).

---

## 6. API specification

Not applicable — this is a 100% static client-rendered / pre-rendered Next.js export (`output: "export"`).

---

## 7. Validation and errors

- **Compile-time validation**: `npm run build` enforces TypeScript strict mode (`satisfies ProjectItem[]`, `satisfies ExperienceItem[]`, `satisfies AwardItem[]`) and verifies that all static routes prerender cleanly.

---

## 8. Frontend requirements (`MUST` / `SHOULD`)

- **`MUST` — Brand Header**: Top sticky navbar featuring the cropped Champagne Gold `SF` logo (`public/logo-sf.jpg`), Thai/English name, section anchor links, `Preview CV` CTA button, `TH/EN` toggle, and `Light/Dark` toggle.
- **`MUST` — Hero Bento Grid**: 8-column main intro card + 4-column UTCC Education & contact card + 4-card KPI strip (`3.61`, `1st`, `5+`, `CardX`).
- **`MUST` — 5 Featured Projects Bento Grid**: 6-column responsive grid where the top 2 projects (`drone-dashboard`, `expense-planner`) span 3 columns each and the remaining 3 projects (`project-lineoa`, `sar`, `iot-26`) span 2 columns each, each topped with its custom `ProjectVisual`.
- **`MUST` — Experience, Awards & Skills Sections**: Complete bilingual rendering of all 6 professional experiences, 5 national awards/certifications, 2 leadership roles, and 4 technical skill categories.
- **`MUST` — View-Only CV Modal**: Triggered from the navbar, hero CTA, contact CTA, and footer; renders both CV pages without download links (Rule 4).

---

## 9. Implementation order (follow strictly)

1. **Scaffold & PostCSS setup**: Initialize Next.js + TypeScript + Tailwind v4, configure `postcss.config.mjs` with `@tailwindcss/postcss` and `src/app/globals.css` with `@custom-variant dark` (Rule 6).
   - *Gate*: `npm run build` succeeds.
2. **Static assets & CV rasterization**: Place cropped `logo-sf.jpg`, `cv-page-1.jpg`, and `cv-page-2.jpg` in `public/`. Ensure no `.pdf` file remains in `public/` (Rule 4).
   - *Gate*: `ls public/cv-page-1.jpg public/cv-page-2.jpg public/logo-sf.jpg` succeeds and `ls public/*.pdf` returns no matches.
3. **Data dictionary (`src/data/portfolio.ts`)**: Author complete bilingual data with exact Thai spelling `สวิตตา ฟุ้งลัดดา` (Rule 2, Rule 3).
   - *Gate*: `npx tsc --noEmit` passes with zero errors.
4. **Components (`ProjectVisual.tsx`, `CvPreviewModal.tsx`) & Page (`page.tsx`)**: Implement Warm Champagne Gold & Ivory Light/Dark theme across all sections and mockups (Rule 5, Rule 7, Rule 8, Rule 9).
   - *Gate*: `GITHUB_ACTIONS=true npm run build` exits `0` with zero CSS warnings.
5. **GitHub Pages CI/CD (`.github/workflows/deploy.yml`)**: Configure workflow and repository Pages settings.
   - *Gate*: `curl -s -I https://piano-sf.github.io/Portfolio/` returns `HTTP/2 200`.

---

## 10. Out of scope (`WON'T` in this version)

- **Downloadable PDF Resume**: Users must not be able to download the raw `.pdf` file from the website (Rule 4).
- **Backend Contact Form / Database**: Contact uses direct `mailto:` and `tel:` links; no server endpoints or database.
- **Proprietary Internship Code**: No screenshots or internal details from CardX internal repositories (Rule 10).

---

## 11. Production-minded checklist

- Zero API keys, tokens, or secrets in the repository.
- Static export (`./out`) works under sub-path `/Portfolio` on GitHub Pages without broken images or uncompiled CSS.

### 11.1 Deploy (`MUST`)
- Automated via `.github/workflows/deploy.yml` on every push to `main`, publishing to `https://piano-sf.github.io/Portfolio/`.

---

## 12. Acceptance criteria

1. **Thai Name Accuracy (Rule 2)**: Running `grep -rn "สาวิตา" src/ README.md` returns 0 matches, and `grep -rn "สวิตตา ฟุ้งลัดดา" src/ README.md` matches `portfolio.ts`, `layout.tsx`, and `README.md`.
2. **View-Only CV Enforcement (Rule 4)**: `public/` contains `cv-page-1.jpg` and `cv-page-2.jpg` and zero `.pdf` files; `CvPreviewModal.tsx` contains no `<a download>` or external link to a PDF.
3. **Light & Dark Theme Completeness (Rule 5, Rule 6)**: Toggling the theme button switches `document.documentElement.classList` between `.dark` and light mode, updating the page background (`#110F0D` ↔ `#FAF7F2`), all Bento cards, and all 5 `ProjectVisual` mockups.
4. **Clean Static Build (Rule 6, Rule 7, Rule 9)**: Running `GITHUB_ACTIONS=true npm run build` exits with code `0`, generates `./out/index.html`, and emits zero PostCSS `@custom-variant` warnings.
5. **Live GitHub Pages Deployment**: `curl -s -I https://piano-sf.github.io/Portfolio/` returns `HTTP/2 200`.

---

## 13. Glossary

- **Bento Grid**: A modular asymmetrical card layout inspired by editorial and modern developer interfaces where key metrics, project mockups, and credentials are grouped into distinct visual tiles.
- **Champagne Gold & Ivory Theme**: The custom brand palette derived from `public/logo-sf.jpg` (`#C6A16E` / `#E2C290` metallic champagne gold, `#FAF7F2` warm ivory light background, `#110F0D` espresso obsidian dark background).
- **ProjectVisual**: The custom React component (`src/components/ProjectVisual.tsx`) rendering interactive-style UI mockups (radar HUD, 50/30/20 budget bars, LINE OA face scan, QA workflow cards, IoT telemetry) for each of the 5 featured projects.
- **View-Only CV Modal**: The modal component (`src/components/CvPreviewModal.tsx`) that displays rasterized resume pages in-browser with right-click and drag protection instead of offering a downloadable PDF.
