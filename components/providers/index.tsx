"use client";
import { AppProgressProvider } from "@bprogress/next";
// import { Analytics } from "@vercel/analytics/next";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Toaster } from "@/components/ui/sonner";
// import ConvexClientProvider from "../ConvexClientProvider";
import { TailwindIndicator } from "../custom/tailwind-indicator";
import { ThemeProvider } from "./theme-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    // <ConvexClientProvider>
    <NuqsAdapter>
      <ThemeProvider>
        <AppProgressProvider
          color="var(--foreground)"
          delay={500}
          height="2px"
          options={{ showSpinner: false }}
        >
          {children}
        </AppProgressProvider>
        <Toaster closeButton expand position="bottom-right" />
        <TailwindIndicator />
        {/* <Analytics /> */}
      </ThemeProvider>
    </NuqsAdapter>
    // </ConvexClientProvider>
  );
}
