"use client";

import {
  CheckIcon,
  CopyIcon,
  ExternalLinkIcon,
  MessageSquareShareIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SendFeedbackDialog } from "../_layout/feedback";

export function NavSecondary() {
  const [open, setOpen] = useState(false);
  const [copy, setCopy] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("http://localhost:3000/p/@nyungwe");
    toast.success("Copied to clipboard");
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };
  return (
    <>
      <SidebarGroup className="mt-auto">
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="View public page">
                <Link href={"/p/@nyungwe"}>
                  <ExternalLinkIcon />
                  <span>View public page</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={handleCopy}
                tooltip="Copy public page link"
              >
                {copy ? <CheckIcon /> : <CopyIcon />}
                <span>{copy ? "Copied" : "Copy public page link"}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => setOpen(true)}
                tooltip="Send Feedback"
              >
                <MessageSquareShareIcon />
                <span>Send Feedback</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SendFeedbackDialog noTrigger onOpenChange={setOpen} open={open} />
    </>
  );
}
