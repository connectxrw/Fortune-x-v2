import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import LoginOptions from "@/features/auth/login-options";
import { LoginVideoBackground } from "@/features/auth/login-video-background";

export const metadata: Metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Left Side - Video Background */}
      <LoginVideoBackground />

      {/* Right Side - Login Form */}
      <div className="flex w-full flex-col items-center justify-center p-8 pb-2 lg:w-1/2 lg:p-12">
        <div className="flex h-full w-full max-w-md flex-col">
          <div className="flex flex-1 flex-col justify-center space-y-8">
            {/* Header */}
            <div className="space-y-2 text-center">
              <h1 className="mb-4 font-serif text-lg">
                Welcome to {siteConfig.name}
              </h1>
              <p className="font-sans text-[#878787] text-sm">
                Sign in or create an account
              </p>
            </div>
            <LoginOptions />
          </div>

          {/* Terms and Privacy Policy - Bottom aligned */}
          <div className="mt-auto text-center">
            <p className="font-sans text-[#878787] text-xs">
              By signing in you agree to our{" "}
              <Link
                className="text-[#878787] underline transition-colors hover:text-foreground"
                href="/"
              >
                Terms of service
              </Link>{" "}
              &{" "}
              <Link
                className="text-[#878787] underline transition-colors hover:text-foreground"
                href="/"
              >
                Privacy policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
