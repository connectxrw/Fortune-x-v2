import { SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/features/dashboard/app-sidebar";
import { SiteHeader } from "@/features/dashboard/site-header";

export default function Page() {
  return (
    <>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="container flex flex-1 flex-col">user dashboard</div>
      </SidebarInset>
    </>
  );
}
