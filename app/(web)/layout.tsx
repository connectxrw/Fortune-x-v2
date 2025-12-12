import SiteFooter from "@/features/_layout/site-footer";
import SiteHeader from "@/features/_layout/site-header";

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-svh flex-col bg-background dark:bg-black">
      <SiteHeader />
      <main className="relative flex min-h-svh flex-1 flex-col font-roboto">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
