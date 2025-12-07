import { Suspense } from "react";
import PageNavs from "@/features/handle/page-navs";
import PageTop from "@/features/handle/page-top";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout(props: LayoutProps<"/">) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      {props.children}
    </SidebarProvider>
  );
}
