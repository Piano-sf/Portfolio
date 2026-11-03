import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-sans-thai",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "สวิตตา ฟุ้งลัดดา (เปียโน) | Full-Stack & AI Engineer Portfolio",
  description:
    "พอร์ตโฟลิโอและผลงานวิศวกรรมซอฟต์แวร์ของ สวิตตา ฟุ้งลัดดา (Sawitta Fungladda) — นักพัฒนาซอฟต์แวร์แบบ Full-Stack และปัญญาประดิษฐ์ (React, Next.js, Nuxt 4, TypeScript, Python, AI)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansThai.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-[#FAF7F2] font-sans text-[#1C1917] selection:bg-[#C6A16E] selection:text-[#141210] dark:bg-[#110F0D] dark:text-[#F5EFE6]">
        {children}
      </body>
    </html>
  );
}
