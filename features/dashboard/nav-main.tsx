"use client";

import {
  ClapperboardIcon,
  LayoutDashboardIcon,
  PenToolIcon,
} from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const mainNav = [
  {
    title: "Dashboard",
    url: "/page",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Posts",
    url: "/page/posts",
    icon: ClapperboardIcon,
  },
  {
    title: "Customization",
    url: "/page/customization",
    icon: PenToolIcon,
  },
  // {
  //   title: "Settings",
  //   url: "/page/settings",
  //   icon: SettingsIcon,
  // },
  // {
  //   title: "Insights",
  //   url: "/page/insights",
  //   icon: ChartBarIcon,
  // },
];

export function NavMain() {
  const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {mainNav.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                className={pathname === item.url ? "bg-accent font-medium" : ""}
                tooltip={item.title}
              >
                <Link href={item.url as Route}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
