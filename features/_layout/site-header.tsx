import { BellIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { AddNewTop } from "./add-new";
import { MenuSheet } from "./menu-sheet";
import SearchTop from "./search-top";
import UserPopover from "./user-popover";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 py-4 backdrop-blur-lg supports-backdrop-filter:bg-background/50">
      <div className={cn("container flex w-full items-center justify-between")}>
        <div className="flex items-center gap-1 md:gap-3">
          <MenuSheet />
          <Link
            className="font-mono font-semibold text-xl capitalize italic tracking-tighter md:text-2xl"
            href={"/"}
          >
            {siteConfig.name}
          </Link>
        </div>

        <div className="hidden w-full lg:flex">
          <Suspense>
            <SearchTop />
          </Suspense>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <Button
            className="rounded-full lg:hidden"
            size={"icon-sm"}
            variant={"ghost"}
          >
            <SearchIcon />
          </Button>
          <AddNewTop />
          <Button className="rounded-full" size="icon-lg" variant={"ghost"}>
            <BellIcon className="size-6" />
          </Button>
          <UserPopover />
        </div>
      </div>
    </header>
  );
}
