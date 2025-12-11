"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { SubmitButton } from "@/components/custom/submit-button";

export function GoogleSignIn() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="relative w-full">
      <SubmitButton
        className="h-[40px] w-full border border-[#0e0e0e] bg-[#0e0e0e] px-6 py-4 font-medium font-sans text-sm text-white transition-colors hover:bg-[#1a1a1a] disabled:opacity-50 dark:border-white dark:bg-white/90 dark:text-[#0e0e0e] dark:hover:bg-white"
        isSubmitting={isLoading}
        type="button"
      >
        <div className="flex items-center justify-center gap-2">
          <FcGoogle className="grayscale" size={16} />
          <span>Continue with Google</span>
        </div>
      </SubmitButton>
    </div>
  );
}
