"use client";

import { HouseIcon, LogInIcon, LogOutIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ThemeSwitcher } from "@/components/custom/theme-switcher";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import profile from "@/public/profile.svg";

// ============ Main Component ============
export default function UserPopover() {
  // const { isAuthenticated, isLoading } = useConvexAuth();
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

// ============ Authenticated User Popover ============
function AuthenticatedUserPopover() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    image: profile.src,
  };
  const router = useRouter();

  const handleSignOut = () => {
    router.push("/sign-in");
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
        <Link className="flex gap-3 p-3" href="/profile">
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

        {/* User Links Section */}
        <div>user links</div>

        <Separator />

        {/* Settings Section */}
        <div className="flex flex-col gap-1 p-3">
          <div className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-muted">
            <div className="flex items-center gap-3">
              <KbdGroup className="text-muted-foreground">
                <Kbd>⌘</Kbd>
                <Kbd>K</Kbd>
              </KbdGroup>
              <span>Command Menu</span>
            </div>
          </div>

          <div className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-muted">
            <span>Theme</span>
            <ThemeSwitcher />
          </div>
        </div>

        <Separator />

        {/* Actions Section */}
        <div className="flex flex-col gap-1 p-3">
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-muted"
            href="/home"
          >
            <HouseIcon className="size-4 text-muted-foreground" />
            <span>Home Page</span>
          </Link>

          <button
            className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-red-600 text-sm transition-colors hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/20"
            onClick={handleSignOut}
            type="button"
          >
            <LogOutIcon className="size-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

// ============ Unauthenticated User Popover ============
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

        {/* Settings Section */}
        <div className="flex flex-col gap-1 p-3">
          <div className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-muted">
            <div className="flex items-center gap-3">
              <KbdGroup className="text-muted-foreground">
                <Kbd>⌘</Kbd>
                <span>+</span>
                <Kbd>K</Kbd>
              </KbdGroup>
              <span>Command Menu</span>
            </div>
          </div>

          <div className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-muted">
            <ThemeSwitcher />
            <span>Theme</span>
          </div>
        </div>

        <Separator />

        {/* Actions Section */}
        <div className="flex flex-col gap-1 p-3">
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-muted"
            href="/home"
          >
            <HouseIcon className="size-4 text-muted-foreground" />
            <span>Home Page</span>
          </Link>

          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 font-medium text-primary text-sm transition-colors hover:bg-primary/10"
            href="/sign-in"
          >
            <LogInIcon className="size-4" />
            <span>Sign In or Sign Up</span>
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
}
