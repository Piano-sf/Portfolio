export type Lang = "th" | "en";

export interface ProjectItem {
  id: "expense-planner" | "drone-dashboard" | "project-lineoa" | "sar" | "iot-26";
  title: { th: string; en: string };
  subtitle: { th: string; en: string };
  badge?: { th: string; en: string };
  description: { th: string; en: string };
  highlights: { th: string[]; en: string[] };
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  featuredSpan: "large" | "medium";
}

export interface ExperienceItem {
  company: string;
  role: { th: string; en: string };
  period: { th: string; en: string };
  type: { th: string; en: string };
  highlight?: boolean;
  bullets: { th: string[]; en: string[] };
  skills: string[];
}

export interface AwardItem {
  year: string;
  title: { th: string; en: string };
  organization: { th: string; en: string };
  rank: { th: string; en: string };
  description: { th: string; en: string };
  type: "winner" | "competitor" | "hackathon" | "cert";
}

export const portfolioData = {
  profile: {
    name: {
      th: "สวิตตา ฟุ้งลัดดา",
      en: "Sawitta Fungladda",
    },
    nickname: {
      th: "เปียโน",
      en: "Piano",
    },
    role: {
      th: "Full-Stack & AI Engineer",
      en: "Full-Stack & AI Engineer",
    },
    tagline: {
      th: "นักศึกษาวิศวกรรมคอมพิวเตอร์และปัญญาประดิษฐ์ (UTCC · GPAX 3.61) ผู้เชี่ยวชาญการสร้างเว็บแอปพลิเคชันแบบ Full-Stack ระบบแดชบอร์ดเรียลไทม์ความหน่วงต่ำ และการผสาน AI เข้ากับงานวิศวกรรมซอฟต์แวร์จริง",
      en: "Computer & AI Engineering student (UTCC · GPAX 3.61) specializing in scalable Full-Stack web applications, zero-latency real-time dashboards, and practical AI integration.",
    },
    statusBadge: {
      th: "พร้อมเริ่มงาน / สหกิจศึกษา (Full-Stack & Software Engineering)",
      en: "Open to Full-Stack & Software Engineering Opportunities",
    },
    location: {
      th: "ลาดพร้าว, กรุงเทพมหานคร",
      en: "Lat Phrao, Bangkok, Thailand",
    },
    email: "sawitta.fld@gmail.com",
    phone: "092-839-8866",
    github: "https://github.com/Piano-sf",
    githubHandle: "Piano-sf",
    avatarUrl: "https://github.com/Piano-sf.png",
    cvUrl: "/CV_Sawitta_Fungladda.pdf",
    education: {
      university: {
        th: "มหาวิทยาลัยหอการค้าไทย (UTCC)",
        en: "University of the Thai Chamber of Commerce (UTCC)",
      },
      degree: {
        th: "วิศวกรรมศาสตรบัณฑิต สาขาวิศวกรรมคอมพิวเตอร์และปัญญาประดิษฐ์",
        en: "B.Eng. in Computer and Artificial Intelligence Engineering",
      },
      period: {
        th: "สิงหาคม 2023 – ปัจจุบัน",
        en: "August 2023 – Present",
      },
      gpax: "3.61",
    },
  },

  nav: {
    projects: { th: "ผลงานเด่น", en: "Projects" },
    experience: { th: "ประสบการณ์", en: "Experience" },
    awards: { th: "รางวัล & การแข่งขัน", en: "Awards" },
    skills: { th: "ทักษะเทคนิค", en: "Skills" },
    contact: { th: "ติดต่อ", en: "Contact" },
    previewCv: { th: "ดูเรซูเม่ (Preview CV)", en: "Preview CV" },
  },

  stats: [
    {
      value: "3.61",
      label: { th: "เกรดเฉลี่ยสะสม (GPAX)", en: "Cumulative GPAX" },
      sub: { th: "วิศวกรรมคอมพิวเตอร์และ AI", en: "Computer & AI Engineering" },
    },
    {
      value: "1st",
      label: { th: "รางวัลชนะเลิศอันดับ 1", en: "1st Place Winner" },
      sub: { th: "TESA Top Gun Rally 2025 (Command Post)", en: "TESA Top Gun Rally 2025 (Command Post)" },
    },
    {
      value: "5+",
      label: { th: "ระบบ Full-Stack & AI", en: "Full-Stack & AI Systems" },
      sub: { th: "ใช้งานจริงพร้อมซอร์สโค้ดบน GitHub", en: "Production-ready on GitHub" },
    },
    {
      value: "CardX",
      label: { th: "ประสบการณ์ฝึกงานวิศวกรรม", en: "Enterprise Engineering Intern" },
      sub: { th: "Full-Stack & Playwright Automation", en: "Full-Stack & Playwright Automation" },
    },
  ],

  projects: [
    {
      id: "drone-dashboard",
      title: {
        th: "Command Post Visualization",
        en: "Command Post Visualization",
      },
      subtitle: {
        th: "ระบบแดชบอร์ดศูนย์บัญชาการตรวจจับและติดตามโดรนแบบเรียลไทม์",
        en: "Real-Time Drone Defense & Command Post Dashboard",
      },
      badge: {
        th: "🏆 ชนะเลิศคะแนนสูงสุด TESA Top Gun Rally 2025",
        en: "🏆 Winner: Top Score Command Post (TESA 2025)",
      },
      description: {
        th: "ระบบแสดงผลพิกัดและสถานะโดรนทั้งฝั่งบุก (Offensive) และฝั่งป้องกัน (Defensive) แบบเรียลไทม์ความหน่วงต่ำ (Zero-Latency Stream) ช่วยให้ทีมตัดสินใจเชิงยุทธวิธีได้ทันทีในงานแข่งขันระบบสมองกลฝังตัวระดับประเทศ",
        en: "High-frequency tactical dashboard visualizing offensive and defensive drone telemetry streams with near-zero latency, enabling rapid situational awareness during national embedded systems competition.",
      },
      highlights: {
        th: [
          "แสดงผลพิกัดเรดาร์ เส้นทางการบิน และสถานะสัญญาณโดรนแบบ Real-time",
          "รองรับข้อมูลสตรีมความถี่สูงโดยไม่เกิดอาการหน้าจอกระตุก",
          "คว้ารางวัล Top Score Command Post Visualization ระดับประเทศ",
        ],
        en: [
          "Real-time radar telemetry, flight trajectories, and threat status visualization",
          "Engineered for zero-latency rendering under continuous high-frequency data streams",
          "Awarded 'Top Score Command Post Visualization' at TESA Top Gun Rally 2025",
        ],
      },
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "WebSockets / Real-time Stream"],
      githubUrl: "https://github.com/Piano-sf/drone-dashboard",
      featuredSpan: "large",
    },
    {
      id: "expense-planner",
      title: {
        th: "Paycheck Planner (Expense Tracker)",
        en: "Paycheck Planner (Expense Tracker)",
      },
      subtitle: {
        th: "เว็บแอปวางแผนจัดสรรเงินเดือนล่วงหน้าตามสูตร 50/30/20 และคำนวณภาษี ภ.ง.ด.91",
        en: "50/30/20 Paycheck Allocation & Thai Personal Income Tax (PND.91) Web App",
      },
      badge: {
        th: "🌐 เปิดใช้งานจริงบน Vercel",
        en: "🌐 Live Production App",
      },
      description: {
        th: "ระบบบริหารการเงินส่วนบุคคลที่เน้นการวางแผนก่อนใช้เงิน (Paycheck-first) จัดสรรรายได้ตามสัดส่วน 50/30/20 เปรียบเทียบแผนกับรายจ่ายจริง คำนวณยอดคงเหลือคาดการณ์สิ้นเดือน พร้อมโมดูลคำนวณภาษีเงินได้บุคคลธรรมดา",
        en: "Paycheck-first personal finance platform featuring 50/30/20 budget allocation, plan-vs-actual variance tracking, end-of-cycle balance forecasting, and an integrated Thai PND.91 tax calculator.",
      },
      highlights: {
        th: [
          "พัฒนาแบบ Full-Stack แยก Frontend (Nuxt 4) และ REST API (Express 5 + MongoDB Atlas)",
          "คำนวณภาษีเงินได้ขั้นบันไดพร้อมรายการลดหย่อนครบถ้วน",
          "ระบบยืนยันตัวตนด้วย JWT และกราฟสรุปกระแสเงินสดรายเดือน",
        ],
        en: [
          "Full-Stack architecture with Nuxt 4 (Vue 3) frontend and Express 5 + MongoDB Atlas API",
          "Progressive Thai tax bracket engine with comprehensive deduction calculations",
          "JWT authentication with interactive cash-flow & budget variance analytics",
        ],
      },
      tech: ["Nuxt 4 (Vue 3)", "TypeScript", "Express 5", "MongoDB Atlas", "Tailwind v4", "JWT"],
      githubUrl: "https://github.com/Piano-sf/expense-planner",
      liveUrl: "https://expense-planner-wbyk.vercel.app",
      featuredSpan: "large",
    },
    {
      id: "project-lineoa",
      title: {
        th: "AI Photo Retrieval LINE OA",
        en: "AI Photo Retrieval LINE OA",
      },
      subtitle: {
        th: "ระบบค้นหารูปภาพผู้ร่วมงานอัตโนมัติด้วย AI จดจำใบหน้าผ่าน LINE Official Account",
        en: "Automated Event Photo Retrieval via Facial Recognition & LINE Bot",
      },
      badge: {
        th: "🤖 Computer Vision + Cloud API",
        en: "🤖 Computer Vision + Cloud API",
      },
      description: {
        th: "แชตบอต LINE OA ที่ให้ผู้ร่วมงานส่งภาพใบหน้าตัวเองเพื่อค้นหารูปถ่ายในงานจากคลัง Google Drive อัตโนมัติด้วยโมเดล InsightFace (buffalo_l) พร้อมแดชบอร์ดผู้ดูแลระบบสำหรับตั้งค่า Token และซิงก์ข้อมูล",
        en: "End-to-end LINE chatbot allowing event attendees to upload a selfie and automatically retrieve all matching event photos from Google Drive using InsightFace (buffalo_l), paired with an admin control dashboard.",
      },
      highlights: {
        th: [
          "สกัด Face Embeddings ความแม่นยำสูงด้วย InsightFace (buffalo_l)",
          "เชื่อมต่อ Google Drive API เพื่อดึงและจับคู่ภาพอัตโนมัติ",
          "มีหน้า Admin Web Dashboard จัดการ LINE Token และรันบน Docker ได้ทันที",
        ],
        en: [
          "High-accuracy face embedding extraction and cosine similarity matching via InsightFace",
          "Automated Google Drive folder indexing and LINE Messaging API delivery",
          "Containerized with Docker and includes a web control panel for token management",
        ],
      },
      tech: ["Python", "Flask", "InsightFace (AI)", "Google Drive API", "LINE SDK", "Docker"],
      githubUrl: "https://github.com/Piano-sf/Project-LineOA",
      featuredSpan: "medium",
    },
    {
      id: "sar",
      title: {
        th: "QA Document Management System (SAR)",
        en: "QA Document Management System (SAR)",
      },
      subtitle: {
        th: "โครงงานปริญญาตรี — ระบบจัดทำ ส่งตรวจ และแจ้งเตือนเอกสารประกันคุณภาพ (มคอ.3 / มคอ.5)",
        en: "Senior Project — Academic Quality Assurance Document Workflow & Notification Platform",
      },
      badge: {
        th: "🎓 โครงงานปริญญาตรี (Senior Project)",
        en: "🎓 B.Eng. Senior Project",
      },
      description: {
        th: "เว็บแอปพลิเคชันบริหารจัดการเอกสารประกันคุณภาพการศึกษา (มคอ.3 และ มคอ.5) ครบวงจร ตั้งแต่อาจารย์สร้างเอกสาร ส่งตรวจ ติดตามสถานะ ไปจนถึงระบบแจ้งเตือนกำหนดส่งอัตโนมัติผ่านหน้าเว็บ อีเมล และ MS Teams",
        en: "Full-lifecycle academic QA document system (TQF 3 / TQF 5) supporting multi-role approval workflows, real-time status tracking, and automated deadline alerts via WebSockets, Email, and MS Teams.",
      },
      highlights: {
        th: [
          "ออกแบบฐานข้อมูลเชิงสัมพันธ์ด้วย Prisma ORM + MySQL รองรับหลายบทบาท (Role-based)",
          "แจ้งเตือนแบบเรียลไทม์ผ่าน Socket.io และตั้งเวลาเตือนล่วงหน้าด้วย Node-Cron",
          "ส่งออกรายงานและติดตามความคืบหน้าการส่งเอกสารระดับคณะ",
        ],
        en: [
          "Relational schema design with Prisma ORM + MySQL and strict Role-Based Access Control",
          "Real-time in-app notifications via Socket.io and scheduled cron reminders (Email / MS Teams)",
          "Executive dashboard tracking faculty-wide document submission compliance",
        ],
      },
      tech: ["React 19", "Express 5", "TypeScript", "Prisma ORM", "MySQL", "Socket.io", "Node-Cron"],
      githubUrl: "https://github.com/Piano-sf/SAR",
      featuredSpan: "medium",
    },
    {
      id: "iot-26",
      title: {
        th: "Pawsitive Care IoT Dashboard",
        en: "Pawsitive Care IoT Dashboard",
      },
      subtitle: {
        th: "ระบบติดตามสุขภาพแมวและกระบะทรายอัจฉริยะพร้อมผู้ช่วยสัตวแพทย์ AI",
        en: "Smart Cat Litter Box Telemetry & AI Veterinary Assistant",
      },
      badge: {
        th: "🌐 เปิดใช้งานจริง · IoT Healthcare 2025",
        en: "🌐 Live App · IoT Healthcare 2025",
      },
      description: {
        th: "ผลงานจากงานแข่งขัน IoT Exploratory: Innovating Healthcare (2025) เชื่อมต่อเซนเซอร์น้ำหนักและระยะทางผ่าน Firebase Realtime Database เพื่อวิเคราะห์ความเสี่ยงโรคนิ่ว/โรคไตในแมว พร้อมแชตบอตปรึกษาอาการเบื้องต้นด้วย Gemini AI",
        en: "Built for IoT Exploratory: Innovating Healthcare (2025). Streams load-cell and ultrasonic sensor data via Firebase RTDB to detect feline urinary/kidney anomalies, integrated with a Google Gemini AI vet chatbot.",
      },
      highlights: {
        th: [
          "ซิงก์ข้อมูลเซนเซอร์แบบเรียลไทม์ผ่าน Firebase Realtime Database",
          "ประเมินความเสี่ยงสุขภาพจากความถี่และน้ำหนักการขับถ่ายด้วยกราฟ Recharts",
          "ผสาน Google Gemini API เป็นผู้ช่วยวิเคราะห์อาการและให้คำแนะนำเบื้องต้น",
        ],
        en: [
          "Live sensor telemetry synchronization via Firebase Realtime Database",
          "Automated anomaly detection and trend visualization using Recharts",
          "Context-aware AI veterinary consultation powered by Google Gemini API",
        ],
      },
      tech: ["React 19", "Vite", "Firebase RTDB", "Google Gemini API", "Recharts", "Tailwind v4"],
      githubUrl: "https://github.com/Piano-sf/IOT-26",
      liveUrl: "https://iot-26.vercel.app",
      featuredSpan: "medium",
    },
  ] satisfies ProjectItem[],

  experiences: [
    {
      company: "CardX Co., Ltd. (SCB Group)",
      role: {
        th: "Full-Stack Engineering Intern",
        en: "Full-Stack Engineering Intern",
      },
      period: {
        th: "มิถุนายน 2026 – กันยายน 2026",
        en: "June 2026 – September 2026",
      },
      type: {
        th: "ฝึกงานสหกิจศึกษา (Enterprise FinTech)",
        en: "Internship · Enterprise FinTech",
      },
      highlight: true,
      bullets: {
        th: [
          "รับความต้องการจากทีม Business Analyst (BA) และพัฒนาเว็บแอปพลิเคชันสำหรับโปรเจค CANDA Automate Test (ระดับ Proof of Concept / POC) ร่วมกับทีม QA อย่างใกล้ชิด",
          "พัฒนาและดูแลชุดทดสอบอัตโนมัติ (Automated Testing) ด้วย Playwright โดยปรับปรุงเงื่อนไขการทดสอบให้แม่นยำและรองรับการเปลี่ยนแปลงของระบบ",
          "เรียนรู้และปฏิบัติงานจริงด้วยเทคโนโลยีระดับองค์กรในสภาพแวดล้อมทางวิศวกรรมซอฟต์แวร์ของธุรกิจการเงิน",
        ],
        en: [
          "Collaborated with Business Analysts (BA) to develop the web application for the CANDA Automate Test (POC) project, coordinating closely with QA engineers during verification.",
          "Engineered and maintained automated end-to-end test suites using Playwright, refining test conditions for reliability.",
          "Gained hands-on experience with enterprise technology stacks and agile workflows in a large-scale financial technology environment.",
        ],
      },
      skills: ["React", "TypeScript", "Playwright", "Automated Testing", "Enterprise Agile"],
    },
    {
      company: "The Ocean Go Co., Ltd.",
      role: {
        th: "Frontend Developer",
        en: "Frontend Developer",
      },
      period: {
        th: "กรกฎาคม 2025 – เมษายน 2026",
        en: "July 2025 – April 2026",
      },
      type: {
        th: "พาร์ตไทม์ (Part-time)",
        en: "Part-time",
      },
      bullets: {
        th: [
          "พัฒนาและดูแลรักษา UI ที่รองรับทุกขนาดหน้าจอ (Responsive UI) สำหรับเว็บและแอปพลิเคชันมือถือด้วย React และ React Native",
          "ทำงานร่วมกับทีม Backend เพื่อเชื่อมต่อ REST APIs และปรับปรุงประสบการณ์ใช้งาน (UX) ให้ลื่นไหลในทุกแพลตฟอร์ม",
        ],
        en: [
          "Developed and maintained responsive user interfaces for web and mobile applications using React and React Native.",
          "Collaborated closely with backend engineers to integrate APIs and optimize cross-platform user experience.",
        ],
      },
      skills: ["React", "React Native", "REST APIs", "Responsive UI"],
    },
    {
      company: "Math Talent Foundation",
      role: {
        th: "Full-Stack Developer",
        en: "Full-Stack Developer",
      },
      period: {
        th: "มิถุนายน 2025 – พฤศจิกายน 2025",
        en: "June 2025 – November 2025",
      },
      type: {
        th: "สัญญาจ้าง (Contract)",
        en: "Contract",
      },
      bullets: {
        th: [
          "ออกแบบและพัฒนาระบบบริหารจัดการการสอบแบบครบวงจร (End-to-End Exam Management System) ตั้งแต่ระบบรับสมัครไปจนถึงการออกใบประกาศนียบัตรอัตโนมัติ",
          "พัฒนา Admin Dashboard ที่มีความปลอดภัยสูงและออกแบบโครงสร้างฐานข้อมูลเพื่อรองรับข้อมูลผู้สมัครจำนวนมาก",
        ],
        en: [
          "Architected an end-to-end Exam Management System handling user registration through automated certificate generation.",
          "Developed a secure Admin Dashboard and database architecture tailored for high-volume applicant data.",
        ],
      },
      skills: ["Full-Stack Architecture", "Admin Dashboard", "Database Design", "High-Volume Data"],
    },
    {
      company: "Fastwork",
      role: {
        th: "Freelance Software & AI Developer",
        en: "Freelance Software & AI Developer",
      },
      period: {
        th: "ธันวาคม 2025 – ปัจจุบัน",
        en: "December 2025 – Present",
      },
      type: {
        th: "ฟรีแลนซ์ (Freelance)",
        en: "Freelance",
      },
      bullets: {
        th: [
          "พัฒนาแอปพลิเคชันตรวจจับนิ่วในไตด้วย AI (AI-powered Kidney Stone Detection) โดยใช้ Python ประมวลผลภาพทางการแพทย์และ React สำหรับหน้าเว็บแสดงผล",
          "เขียนสคริปต์ Python เฉพาะทางตามความต้องการของลูกค้า ทดสอบระบบเกม (QA & Game Testing) และจัดการโครงสร้างข้อมูล",
        ],
        en: [
          "Engineered an AI-powered Kidney Stone Detection web application utilizing Python for medical image processing and React for the frontend.",
          "Delivered custom Python automation scripts, comprehensive QA testing, and structured data pipelines for clients.",
        ],
      },
      skills: ["Python", "Medical Image Processing", "React", "QA Testing"],
    },
    {
      company: "Flowfusion Technology",
      role: {
        th: "Document Specialist",
        en: "Document Specialist",
      },
      period: {
        th: "มกราคม 2026 – กรกฎาคม 2026",
        en: "January 2026 – July 2026",
      },
      type: {
        th: "พาร์ตไทม์ / สัญญาจ้าง",
        en: "Contract / Part-time",
      },
      bullets: {
        th: [
          "วางโครงสร้างและจัดรูปแบบเอกสารทางการด้วยเครื่องมืออัตโนมัติ (Auto-generated TOC, Multilevel numbering) ตามมาตรฐานองค์กรอย่างแม่นยำ",
        ],
        en: [
          "Structured and formatted official corporate documents using automation tools, ensuring strict adherence to layout standards.",
        ],
      },
      skills: ["Document Automation", "Corporate Standards", "Quality Assurance"],
    },
    {
      company: "UTCC & KMUTNB",
      role: {
        th: "Teaching Assistant & STEM Instructor",
        en: "Teaching Assistant & STEM Instructor",
      },
      period: {
        th: "มิถุนายน 2025 – พฤศจิกายน 2025",
        en: "June 2025 – November 2025",
      },
      type: {
        th: "ผู้ช่วยสอนและวิทยากร (Academic)",
        en: "Academic & Workshop Instructor",
      },
      bullets: {
        th: [
          "ดูแลและให้คำปรึกษานักศึกษาในการเขียนโปรแกรมภาษา Python และ C พร้อมตรวจทานโค้ดและอธิบายตรรกะที่ซับซ้อนให้เข้าใจง่าย",
          "เป็นวิทยากรอบรมเชิงปฏิบัติการ Micro:bit และช่วยแก้ไขปัญหาเทคนิคในการอบรมระบบเครือข่าย (Network Training)",
        ],
        en: [
          "Mentored students in Python and C programming, conducting code reviews and breaking down complex algorithmic logic.",
          "Led hands-on Micro:bit STEM workshops and provided technical troubleshooting during Network Training sessions.",
        ],
      },
      skills: ["Python", "C Programming", "Micro:bit", "Network Troubleshooting", "Mentoring"],
    },
  ] satisfies ExperienceItem[],

  awards: [
    {
      year: "2025",
      title: {
        th: "ชนะเลิศคะแนนสูงสุดด้านการแสดงผลศูนย์บัญชาการ (Top Score Command Post Visualization)",
        en: "Winner — Top Score Command Post Visualization",
      },
      organization: {
        th: "การแข่งขันระบบสมองกลฝังตัวชิงแชมป์ประเทศไทย (TESA Top Gun Rally 2025)",
        en: "TESA Top Gun Rally 2025 (National Embedded Systems Competition)",
      },
      rank: { th: "รางวัลชนะเลิศ (Winner)", en: "1st Place Category Winner" },
      description: {
        th: "พัฒนาแดชบอร์ดศูนย์บัญชาการด้วย React และ TypeScript แสดงผลข้อมูลโดรนแบบเรียลไทม์ความหน่วงต่ำ ทำคะแนนสูงสุดในหมวด Command Post Visualization",
        en: "Engineered a zero-latency React & TypeScript tactical drone dashboard, achieving the highest score in the Command Post Visualization track.",
      },
      type: "winner",
    },
    {
      year: "2025",
      title: {
        th: "การแข่งขันนวัตกรรม IoT เพื่อสุขภาพ (IoT Exploratory: Innovating Healthcare)",
        en: "IoT Exploratory: Innovating Healthcare (2025)",
      },
      organization: {
        th: "ผู้เข้าร่วมการแข่งขันและพัฒนาระบบต้นแบบ Pawsitive Care",
        en: "Competition Participant · Built 'Pawsitive Care' Smart IoT Dashboard",
      },
      rank: { th: "ผู้เข้าร่วมการแข่งขัน", en: "Finalist / Participant" },
      description: {
        th: "พัฒนาระบบติดตามสุขภาพแมวอัจฉริยะด้วยเซนเซอร์ IoT, Firebase RTDB และแชตบอตสัตวแพทย์ Gemini AI",
        en: "Developed a real-time feline health monitoring dashboard combining IoT sensors, Firebase RTDB, and Google Gemini AI.",
      },
      type: "hackathon",
    },
    {
      year: "2025",
      title: {
        th: "การแข่งขัน Cyber Warrior Hackathon (2025)",
        en: "Cyber Warrior Hackathon (2025)",
      },
      organization: {
        th: "การแข่งขันทักษะด้านความมั่นคงปลอดภัยไซเบอร์และการแก้ปัญหาเชิงเทคนิค",
        en: "National Cybersecurity & Technical Problem-Solving Hackathon",
      },
      rank: { th: "ผู้เข้าร่วมการแข่งขัน", en: "Participant" },
      description: {
        th: "ร่วมแข่งขันแก้โจทย์ด้านความปลอดภัยทางไซเบอร์และวิศวกรรมซอฟต์แวร์ภายใต้เวลาจำกัด",
        en: "Competed in intensive cybersecurity challenges and rapid technical problem-solving scenarios.",
      },
      type: "hackathon",
    },
    {
      year: "2025",
      title: {
        th: "ประกาศนียบัตรวิชาชีพ Network Cabling for Engineering",
        en: "Certified: Network Cabling for Engineering — LINK (2025)",
      },
      organization: {
        th: "รับรองมาตรฐานโดย LINK",
        en: "Professional Certification by LINK",
      },
      rank: { th: "ผ่านการรับรองมาตรฐาน", en: "Certified" },
      description: {
        th: "ผ่านการอบรมและทดสอบทักษะการออกแบบและติดตั้งระบบสายสัญญาณเครือข่ายตามมาตรฐานวิศวกรรม",
        en: "Certified in enterprise-grade structured network cabling standards, termination, and hardware diagnostics.",
      },
      type: "cert",
    },
    {
      year: "2022",
      title: {
        th: "การแข่งขันทักษะความมั่นคงปลอดภัยไซเบอร์ (Women Thailand Cyber Top Talent)",
        en: "Women Thailand Cyber Top Talent (2022)",
      },
      organization: {
        th: "สำนักงานคณะกรรมการการรักษาความมั่นคงปลอดภัยไซเบอร์แห่งชาติ (สกมช. / NCSA)",
        en: "National Cyber Security Agency (NCSA Thailand)",
      },
      rank: { th: "ผู้เข้าแข่งขันระดับประเทศ", en: "National Competitor" },
      description: {
        th: "เข้าร่วมการแข่งขัน Capture The Flag (CTF) ด้านความมั่นคงปลอดภัยไซเบอร์ระดับประเทศ จุดประกายการเขียนโค้ดที่คำนึงถึงความปลอดภัยเป็นหลัก",
        en: "Competed in national Capture The Flag (CTF) cybersecurity challenges, building a strong foundation in secure coding practices.",
      },
      type: "competitor",
    },
  ] satisfies AwardItem[],

  leadership: [
    {
      role: {
        th: "วิทยากรศิษย์เก่าและรุ่นพี่ต้นแบบ (Alumni & Senior Guest Speaker)",
        en: "Guest Speaker — Engineering Freshmen Orientation 2026",
      },
      org: {
        th: "คณะวิศวกรรมศาสตร์ มหาวิทยาลัยหอการค้าไทย (สิงหาคม 2026)",
        en: "Faculty of Engineering, UTCC (August 2026)",
      },
    },
    {
      role: {
        th: "หัวหน้าฝ่ายสันทนาการและผู้ประสานงานโครงการ (Head of Recreation & Event Coordinator)",
        en: "Head of Recreation & Event Coordinator — Gear Freshy & Camp Freshy",
      },
      org: {
        th: "คณะวิศวกรรมศาสตร์ มหาวิทยาลัยหอการค้าไทย (สิงหาคม 2024 & กันยายน 2025)",
        en: "Faculty of Engineering, UTCC (August 2024 & September 2025)",
      },
    },
  ],

  skillCategories: [
    {
      title: { th: "ภาษาโปรแกรม (Languages)", en: "Programming Languages" },
      skills: ["TypeScript", "JavaScript (ES6+)", "Python", "SQL", "Java", "C / C++"],
    },
    {
      title: { th: "ส่วนหน้าบ้านและโมบายล์ (Frontend & Mobile)", en: "Frontend & Mobile" },
      skills: [
        "React 19",
        "Next.js (App Router)",
        "Nuxt 4 (Vue 3)",
        "React Native",
        "Tailwind CSS v4",
        "HTML5 / CSS3",
        "Recharts",
        "Figma",
      ],
    },
    {
      title: { th: "ส่วนหลังบ้านและฐานข้อมูล (Backend & Database)", en: "Backend & Databases" },
      skills: [
        "Node.js",
        "Express 5",
        "Flask",
        "Prisma ORM",
        "Mongoose",
        "MySQL",
        "MongoDB Atlas",
        "Firebase RTDB",
        "Socket.io / WebSockets",
      ],
    },
    {
      title: { th: "AI, ระบบทดสอบ และเครื่องมือวิศวกรรม (AI, QA & DevOps)", en: "AI, Testing & Infrastructure" },
      skills: [
        "InsightFace (Computer Vision)",
        "Google Gemini API",
        "Playwright (E2E Testing)",
        "Docker",
        "Git / GitHub",
        "Google Cloud & Drive API",
        "LINE Messaging SDK",
        "Micro:bit & Embedded IoT",
      ],
    },
  ],
};
