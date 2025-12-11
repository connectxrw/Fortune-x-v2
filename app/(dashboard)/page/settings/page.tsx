import DevPage from "@/features/dashboard/dev-page";
import { SiteHeader } from "@/features/dashboard/site-header";

export default function SettingsPage() {
  return (
    <>
      <SiteHeader title="Settings" />
      <div className="@container/main flex flex-col gap-10 px-4 lg:p-6 lg:pb-10">
        <DevPage />
      </div>
    </>
  );
}
