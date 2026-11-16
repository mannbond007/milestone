import { SignUp } from "@clerk/nextjs";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create your Milestone Scholarship Program account and start your application.",
};

export default function SignUpPage() {
  const hasClerkKey = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="font-heading text-2xl font-extrabold tracking-tight text-primary dark:text-white">
            Create Your Account
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            Start your scholarship journey today
          </p>
        </div>

        {hasClerkKey ? (
          <SignUp
            appearance={{
              elements: {
                formButtonPrimary: "bg-accent hover:bg-accent-dark text-white",
                card: "shadow-none border border-border/50 rounded-2xl",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                socialButtonsBlockButton: "border-border/50 rounded-xl",
                formFieldInput: "rounded-xl border-border/50",
                footerActionLink: "text-accent hover:text-accent-dark",
              },
            }}
          />
        ) : (
          <div className="bg-card border border-border rounded-2xl p-8 text-center space-y-4 shadow-premium">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F3EE] dark:bg-[#172923] flex items-center justify-center mx-auto text-[#258B68]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="font-heading text-lg font-bold text-foreground">
              Applications &amp; Registration
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Online registration is currently in preview mode. Configure Clerk API keys in your environment variables to enable live student sign-up.
            </p>
            <div className="pt-2 flex flex-col gap-2.5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-10 px-5 rounded-xl bg-[#103D32] text-white text-xs font-semibold hover:bg-[#258B68] transition-colors"
              >
                Contact Admissions Desk
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
