import { BellIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { homeFilters } from "@/config/data";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import FilterBtns from "../home/filter-btns";
import { AddNewTop } from "./add-new";
import { MenuSheet } from "./menu-sheet";
import SearchTop from "./search-top";
import UserPopover from "./user-popover";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 py-3 backdrop-blur-lg supports-backdrop-filter:bg-background/50 md:py-4">
      <div
        className={cn("flex w-full items-center justify-between px-2 md:px-5")}
      >
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

        <div className="ml-auto flex items-center gap-1 md:gap-2">
          <Button
            className="rounded-full lg:hidden"
            size={"icon-sm"}
            variant={"ghost"}
          >
            <SearchIcon />
          </Button>
          <AddNewTop />
          <Button
            className="hidden rounded-full md:flex"
            size="icon-lg"
            variant={"ghost"}
          >
            <BellIcon className="size-6" />
          </Button>
          <UserPopover />
        </div>
      </div>
      <div className="container w-full overflow-hidden pt-6">
        <Suspense>
          <FilterBtns filters={homeFilters} />
        </Suspense>
      </div>
    </header>
  );
}
