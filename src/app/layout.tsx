import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LocaleProvider } from "@/components/providers/locale-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { cookies } from "next/headers";
import type { Locale } from "@/components/providers/locale-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MileStone Scholarship Program | Education & Scholarship Guidance",
    template: "%s | MileStone Scholarship Program",
  },
  description:
    "Unlock educational opportunities with scholarships across Medical, Engineering, Management, Law, Science and more. We help students turn their academic ambitions into reality.",
  keywords: [
    "MileStone Scholarship",
    "scholarships after 12th",
    "scholarships after graduation",
    "MBBS in India",
    "MBBS Abroad",
    "BDS scholarship",
    "BAMS",
    "BHMS",
    "BUMS",
    "engineering scholarships",
    "MBA admission guidance",
  ],
  authors: [{ name: "MileStone Scholarship Program" }],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let cookieLocale: Locale = "en";
  try {
    const cookieStore = await cookies();
    const stored = cookieStore.get("NEXT_LOCALE")?.value;
    if (stored === "hi" || stored === "en") {
      cookieLocale = stored;
    }
  } catch {
    // Fallback to default locale
  }

  const hasClerkKey = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

  const appContent = (
    <ThemeProvider defaultTheme="light" storageKey="milestone-theme">
      <LocaleProvider defaultLocale={cookieLocale}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </LocaleProvider>
    </ThemeProvider>
  );

  return (
    <html
      lang={cookieLocale}
      className={`${inter.variable} ${plusJakarta.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-[#258B68]/20 selection:text-[#103D32] dark:selection:bg-[#35A880]/30 dark:selection:text-white overflow-x-hidden" suppressHydrationWarning>
        {hasClerkKey ? <ClerkProvider>{appContent}</ClerkProvider> : appContent}
      </body>
    </html>
  );
}
