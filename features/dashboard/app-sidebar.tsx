"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://github.com/RobinMalfait.png",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Posts",
      url: "#",
      icon: ClapperboardIcon,
    },
    {
      title: "Customization",
      url: "#",
      icon: PenToolIcon,
    },
    {
      title: "Notifications",
      url: "#",
      icon: BellIcon,
    },
    {
      title: "Insights",
      url: "#",
      icon: ChartBarIcon,
    },
  ],

  navSecondary: [
    {
      title: "View public page",
      url: "#",
      icon: ExternalLinkIcon,
    },
    {
      title: "Copy public page link",
      url: "#",
      icon: CopyIcon,
    },
    {
      title: "Settings",
      url: "#",
      icon: SettingsIcon,
    },
    {
      title: "Send Feedback",
      url: "#",
      icon: MessageSquareShareIcon,
    },
  ],
};

import {
  BellIcon,
  ChartBarIcon,
  ClapperboardIcon,
  CopyIcon,
  ExternalLinkIcon,
  LayoutDashboardIcon,
  MessageSquareShareIcon,
  PenToolIcon,
  SearchIcon,
  SettingsIcon,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";
import { NavUser } from "./nav-user";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton size="lg">
              <Avatar className="size-8 rounded-lg">
                <AvatarImage src="https://github.com/RobinMalfait.png" />
                <AvatarFallback>R</AvatarFallback>
              </Avatar>
              <span className="font-semibold text-base">Acme Inc.</span>
            </SidebarMenuButton>
            <Button
              className="size-8 group-data-[collapsible=icon]:hidden"
              size="icon"
              variant="ghost"
            >
              <SearchIcon />
              <span className="sr-only">Search</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary className="mt-auto" items={data.navSecondary} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
