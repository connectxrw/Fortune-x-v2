"use client";

import {
  CircleQuestionMarkIcon,
  LogInIcon,
  LogOutIcon,
  MessageSquareShareIcon,
  SettingsIcon,
  SquareUserIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import profile from "@/public/profile.svg";
import { SelectAppearence } from "./appearence";
import { KeyboardShortcuts } from "./keyoard";
import { SelectLanguage } from "./lang";
import { SelectLocation } from "./location";

export default function UserPopover() {
  const isAuthenticated = true;
  const isLoading = false;

  if (isLoading) {
    return <Skeleton className="size-10 rounded-full" />;
  }

  return isAuthenticated ? (
    <AuthenticatedUserPopover />
  ) : (
    <UnauthenticatedUserPopover />
  );
}

function AuthenticatedUserPopover() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    image: profile.src,
  };

  if (!user) return null;

  const getUserInitials = () => {
    if (!user?.name) return "U";
    return user.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Popover>
      <PopoverTrigger className="cursor-pointer">
        <Avatar className="size-10 bg-primary transition-opacity hover:opacity-80">
          <AvatarImage
            alt={user.name || "User"}
            className="rounded-full"
            src={user.image || profile.src}
          />

          <AvatarFallback>{getUserInitials()}</AvatarFallback>
        </Avatar>
      </PopoverTrigger>

      <PopoverContent className="mr-6 w-72 rounded-xl border border-muted p-0 shadow-lg dark:bg-black">
        {/* User Profile Section */}
        <Link className="flex gap-3 p-3" href="/">
          <Avatar className="size-10">
            <AvatarImage
              alt={user.name || "User"}
              src={user.image || profile.src}
            />
            <AvatarFallback>{getUserInitials()}</AvatarFallback>
          </Avatar>
          <div className="flex min-w-0 flex-col justify-center text-sm">
            <p className="truncate font-medium">{user.name}</p>
            <p className="truncate text-muted-foreground">@caleb</p>
          </div>
        </Link>
        <Separator />

        <div className="py-2">
          <Link
            className="flex cursor-pointer items-center gap-2 px-3 py-2 text-sm hover:bg-secondary"
            href="/page"
          >
            <SquareUserIcon className="size-5 text-muted-foreground" />
            <span>My profile</span>
          </Link>

          <div className="flex cursor-pointer items-center gap-2 px-3 py-2 text-sm hover:bg-secondary">
            <FaGoogle className="size-5 text-muted-foreground" />
            <span>Google Account</span>
          </div>
          <div className="flex cursor-pointer items-center gap-2 px-3 py-2 text-sm hover:bg-secondary">
            <SettingsIcon className="size-5 text-muted-foreground" />
            <span>Settings</span>
          </div>

          <div className="flex cursor-pointer items-center gap-2 px-3 py-2 text-sm hover:bg-secondary">
            <LogOutIcon className="size-5 text-muted-foreground" />
            <span>Sign out</span>
          </div>
        </div>

        <Separator />

        <PublicUserNavs />

        <Separator />

        <HelpNavs />
      </PopoverContent>
    </Popover>
  );
}

function UnauthenticatedUserPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild className="cursor-pointer">
        <Button
          className="rounded-full transition-opacity hover:opacity-80"
          size="icon-lg"
        >
          <UserIcon className="size-5" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="mr-6 w-64 rounded-xl border border-muted p-0 shadow-lg dark:bg-black">
        {/* Welcome Section */}
        <div className="flex flex-col gap-2 p-4">
          <h3 className="font-semibold text-base">Welcome!</h3>
          <p className="text-muted-foreground text-sm">
            Sign in to access your account and enjoy all features.
          </p>
        </div>

        <Separator />
        <div className="py-2">
          <div className="flex cursor-pointer items-center gap-2 px-3 py-2 text-sm hover:bg-secondary">
            <LogInIcon className="size-5 text-muted-foreground" />
            <span>Sign in</span>
          </div>
        </div>
        <Separator />

        <PublicUserNavs />

        <Separator />

        <HelpNavs />
      </PopoverContent>
    </Popover>
  );
}

function PublicUserNavs() {
  return (
    <div className="py-2">
      <SelectAppearence />
      <SelectLanguage />
      <SelectLocation />
      <KeyboardShortcuts />
    </div>
  );
}

function HelpNavs() {
  return (
    <div className="py-2">
      <div className="flex cursor-pointer items-center gap-2 px-3 py-2 text-sm hover:bg-secondary">
        <CircleQuestionMarkIcon className="size-5 text-muted-foreground" />
        <span>Help</span>
      </div>

      <div className="flex cursor-pointer items-center gap-2 px-3 py-2 text-sm hover:bg-secondary">
        <MessageSquareShareIcon className="size-5 text-muted-foreground" />
        <span>Send feedback</span>
      </div>
    </div>
  );
}
