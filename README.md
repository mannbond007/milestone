# MileStone Scholarship Program

A modern, bilingual (English & Hindi) education, scholarship, and admission guidance platform built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **Prisma (PostgreSQL)**, and **Clerk Authentication**.

MileStone helps students across India discover merit- and need-based scholarships, explore post-Class 12 and post-graduation pathways (MBBS India & Abroad, BDS, BAMS, BHMS, BUMS, Engineering, Management, Law, Nursing, and more), and connect with academic counselors.

---

## Key Features

- **Editorial Bento Grid Homepage**: Responsive 12-column Bento architecture featuring an asymmetrical hero composition, verified impact statistics (`15,000+` Students, `5,200+` Scholarships, `1,750+` Partner Institutions, `96%` Success Rate), 10 core scholarship disciplines, service pillars, featured opportunities, and scholar testimonials.
- **Bilingual Internationalization (`EN` / `HI`)**: Full English and Hindi translation support via `src/messages/en.json` and `src/messages/hi.json` with cookie (`NEXT_LOCALE`) and `localStorage` persistence.
- **Adaptive Light & Dark Themes**: Custom institutional color tokens (`#103D32` Deep Forest Green, `#258B68` Primary Emerald, `#E8F3EE` Soft Mint, `#F4F7F5` Off-White) with system-preference detection and zero-flicker hydration.
- **Comprehensive Public Directory**:
  - Scholarship programs & detailed structures (`/scholarships`)
  - Interactive academic stream explorer & course guides (`/courses`, `/courses/[slug]`)
  - Editorial blog & scholarship guides (`/blog`, `/blog/[slug]`)
  - Scholar success stories (`/achievers`, `/success-stories`)
  - Application steps, assessment test guidelines, important dates, FAQs, and contact desk (`/how-to-apply`, `/scholarship-test`, `/important-dates`, `/faqs`, `/contact`)
- **Env-Aware Authentication & Database Architecture**:
  - **Zero-Key Preview Ready**: Deploys cleanly to Vercel without requiring API keys for public browsing.
  - **Clerk & PostgreSQL Ready**: Conditionally activates Clerk authentication (`@clerk/nextjs`) and Prisma ORM (`prisma/schema.prisma`) when environment variables are configured for Student (`/dashboard/*`) and Admin (`/admin/*`) portals.

---

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js `16.2.6` (App Router) |
| **UI Library** | React `19.2.4`, TypeScript `5` |
| **Styling** | Tailwind CSS v4, `tw-animate-css`, Base UI / ShadCN |
| **Animations** | Framer Motion `12.x` (with `prefers-reduced-motion` support) |
| **Icons & Typography** | Lucide React, `Plus Jakarta Sans`, `Playfair Display`, `Inter` |
| **Database & ORM** | PostgreSQL + Prisma `6.19.3` |
| **Authentication** | Clerk (`@clerk/nextjs` v7) |

---

## Project Structure

```text
├── prisma/
│   └── schema.prisma            # PostgreSQL schema (User, Scholarship, Application, Exam, Notification, Blog)
├── public/
│   ├── images/                  # Brand logo & HDR hero photography
│   └── scholars/                # Verified scholar portraits
├── src/
│   ├── actions/                 # Server actions (user & application workflows)
│   ├── app/                     # App Router pages (public, /dashboard, /admin, /sign-in, /sign-up)
│   ├── components/
│   │   ├── home/                # Homepage Bento sections (Hero, Stats, Categories, Benefits, Stories, CTA)
│   │   ├── layout/              # Sticky Navbar & Footer
│   │   ├── navigation/          # BrandLogo, LanguageSelector, ThemeToggle
│   │   ├── providers/           # ThemeProvider & LocaleProvider
│   │   └── ui/                  # Reusable UI primitives
│   ├── constants/               # Navigation, blog data, and home data
│   ├── lib/                     # Prisma singleton, server i18n, and utilities
│   ├── messages/                # en.json & hi.json translation dictionaries
│   ├── middleware.ts            # Env-aware Clerk middleware
│   └── types/                   # Shared TypeScript interfaces
├── .env.example                 # Environment variable template
└── package.json
```

---

## Getting Started

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
npm install
```

### 2. Run Locally (Preview Mode — No API Keys Required)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Enable Database & Authentication (Optional / Full Stack)

Copy `.env.example` to `.env.local` and configure your PostgreSQL and Clerk credentials:

```bash
cp .env.example .env.local
```

```env
DATABASE_URL="postgresql://user:password@host:5432/milestone?sslmode=require"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
```

Then push the Prisma schema and generate the client:

```bash
npx prisma generate
npx prisma db push
```

---

## Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Generate Prisma Client and build production bundle |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint across the codebase |
| `npx tsc --noEmit` | Run TypeScript type checking |

---

## Deployment on Vercel

1. Push this repository to GitHub.
2. Import the project in **Vercel** (`vercel.com/new`).
3. Click **Deploy** — the build script (`prisma generate && next build --webpack`) compiles cleanly out of the box even before environment variables are added.
4. When ready to enable live student accounts and database persistence, add the variables from `.env.example` in **Vercel → Project Settings → Environment Variables** and redeploy.

---

## Contact & Advisory Notice

- **Email**: `milestonescholarship@gmail.com`
- **Phone**: `+91 95544 66699`
- **Location**: Hazratganj, Lucknow, Uttar Pradesh, India

> *MileStone Scholarship is an education, scholarship, and admission guidance platform. Scholarship awards are distinct from counselling services and are subject to eligibility verification and institutional policies.*
