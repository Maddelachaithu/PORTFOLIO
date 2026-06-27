# Maddela Chaitanya Kumar - Premium Cybersecurity Portfolio

An award-winning agency-grade, futuristic cybersecurity portfolio website designed for **Maddela Chaitanya Kumar**. Built with high-performance React 19, TypeScript, Tailwind CSS, Framer Motion, and a server-side Express backend integrated with the modern Google GenAI SDK.

---

## 🚀 Key Architectural Highlights

### 1. Visual Identity & "Cyber-Dark" HUD (Aesthetic Pairings)
* **Aesthetic**: Premium futuristic dark design utilizing glassmorphism, neon blue glow accents (`#00E5FF`), responsive cyber grids, and subtle console CRT scanlines.
* **Typography**: Clean display headings using **Space Grotesk** paired with **Inter** for readable paragraphs and **JetBrains Mono** for technical code/terminal outputs.
* **CyberBackground**: Custom HTML5 interactive Canvas background rendering particles and connection nodes that dynamically align and react organically to mouse coordinates.

### 2. Full-Stack Gemini AI Chatbot Twin
* **AI Security Agent**: Features "Chaitanya's AI Twin", an embedded recruiter assistant. Uses the server-side `@google/genai` SDK on Express to converse with recruiters, providing detailed, structured, and professional answers based directly on Chaitanya's actual resume context.
* **Safety Guard**: Includes lazy initialization of the GoogleGenAI instance to prevent system crashes if the secret key is missing in development, automatically falling back to an elegant automated diagnostic router.

### 3. Comprehensive Modular Sections
1. **Hero Screen**: High-impact introduction centering verified identity tags, interactive CTAs, terminal typing simulations, and an animated scroll tracker.
2. **About Bento**: Two-column layout showcasing Career Journey, Passions, Core Analytical Strengths, and an interactive Learning progress timeline.
3. **Interactive Timeline**: Vertical internship milestones vertical tree tracking roles, companies, duration, checkable key responsibilities, and technologies with glowing status tags.
4. **Tactical Skills HUD**: Glowing SVG Conic radar scanner mock matched with responsive category toggles and animated skill levels.
5. **Detailed Case Studies**: High-caliber cybersecurity projects presented in an expandable overlay case-study structure analyzing the Problem, Solution, Challenges, and concrete Outcomes.
6. **Industry Credentials**: Clean certificate displays showing credential IDs, dates, and live verifiers.
7. **Academic Foundations**: Degree programs, GPA highlights, and campus clubs.
8. **Stat Counters**: Dynamic metrics cards that count up on scroll using high-performance lightweight React custom triggers.
9. **GitHub Activity Mock**: High-fidelity custom developer dashboard featuring an interactive contributions heatmap, repository star highlights, and scrolling live commit logs.
10. **Secure Communications Console**: PGP-styled glassmorphic contact forms with secure transmission simulators.

---

## 🛠️ Technology Stack
* **Frontend**: React 19, Vite, Tailwind CSS v4, Motion (Framer Motion)
* **Backend**: Express v4, tsx (Node runner)
* **AI Integration**: `@google/genai` (Gemini 3.5 Flash Model)
* **Icons**: `lucide-react`
* **Bundle Compiler**: `esbuild` (Compiles full-stack server into self-contained `dist/server.cjs` for seamless zero-dependency production container deploys)

---

## 📂 File Directory Structure
```text
├── server.ts               # Full-stack Express server and Gemini chat routes
├── package.json            # Scripts, dependency libraries, build config
├── index.html              # Primary HTML mount
├── tsconfig.json           # TS compiling configurations
├── vite.config.ts          # Vite asset building presets
├── src/
│   ├── App.tsx             # Primary visual entry-point & coordinator
│   ├── index.css           # Global CSS variables, custom keyframe sweeps
│   ├── main.tsx            # React strict-mode DOM mount
│   ├── data/
│   │   └── resume.ts       # Central source of truth structured resume data
│   └── components/
│       ├── LoadingScreen.tsx    # Cyber deciphering initial loader screen
│       ├── ThemeToggle.tsx      # Dark-mode / Light-mode switch
│       ├── CyberBackground.tsx  # Dynamic particle node canvas background
│       ├── Hero.tsx             # Interactive introduction screen
│       ├── About.tsx            # Strengths, mission, learning timeline
│       ├── Experience.tsx       # Internship milestone vertical tabs
│       ├── Skills.tsx           # Conic radar scan and animated bars
│       ├── Projects.tsx         # Expandable case studies modal cards
│       ├── Certifications.tsx   # Verified industry credentials
│       ├── Education.tsx        # Degree programs & GPA summaries
│       ├── Achievements.tsx     # Animated counting milestone badges
│       ├── GithubDashboard.tsx  # Heatmap commits and pinned repos
│       ├── Contact.tsx          # Secure message transmission console
│       └── AiAssistant.tsx      # Recruiter AI twin terminal chatbot
```

---

## ⚡ Deployment & Hosting Guide

The application is fully pre-configured and optimized for deployment to **Vercel**, **Google Cloud Run**, or standard **Node.js** containers:

### Production Building
To compile the absolute client assets and package the Express server backend into a single self-contained CommonJS target:
```bash
npm run build
```
This automatically:
1. Compiles React SPA production-optimized static files into `dist/`.
2. Bundles `server.ts` into a fast, compiled `dist/server.cjs` using `esbuild`.

### Local Execution
To boot the compiled server and host the production build:
```bash
npm start
```
The application runs on port `3000` with full-stack capabilities intact!
