import { BellIcon, MenuIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { homeFilters } from "@/config/data";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { AddNewTop } from "./add-new";
import FilterBtns from "./filter-btns";
import { MenuSheet } from "./menu-sheet";
import { SearchMobileSheet } from "./search-mobile";
import SearchTop from "./search-top";
import UserPopover from "./user/user-popover";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 py-2 backdrop-blur-lg supports-backdrop-filter:bg-background/80 md:py-2">
      <div className={cn("container flex w-full items-center justify-between")}>
        <div className="flex items-center gap-1 md:gap-3">
          <MenuSheet>
            <Button
              className="hidden rounded-full lg:flex"
              size="icon-lg"
              variant={"ghost"}
            >
              <MenuIcon className="size-6" />
            </Button>
          </MenuSheet>
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
          <SearchMobileSheet />
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
      <Suspense>
        <FilterBtns filters={homeFilters} />
      </Suspense>
    </header>
  );
}
