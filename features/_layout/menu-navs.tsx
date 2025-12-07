"use client";
import { ChevronRightIcon, HouseIcon } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { menuNavs, otherNavs, youNavs } from "@/config/data";
import { cn } from "@/lib/utils";

export default function MenuNavs() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-3">
      <Link
        className={cn(
          "flex items-center gap-1 rounded-lg p-2 text-primary/90 text-sm hover:bg-muted/70",
          pathname === "/" && "mx-3 bg-muted/70"
        )}
        href={"/"}
      >
        <HouseIcon className={cn("size-4 text-muted-foreground")} />
        <span
          className={cn(
            "font-normal text-sm",
            pathname === "/" && "font-medium text-primary"
          )}
        >
          Home
        </span>
      </Link>
      <Separator />
      <MenuCategories pathname={pathname} />
      <Separator />
      <MenuYou pathname={pathname} />
      <Separator />
      <MenuOther pathname={pathname} />
    </div>
  );
}

function MenuCategories({ pathname }: { pathname: string }) {
  return (
    <div className="px-3">
      <Link
        className={cn(
          "flex items-center gap-1 rounded-lg p-2 text-primary/90 text-sm hover:bg-muted/70"
        )}
        href={"/"}
      >
        <span className={cn("block font-medium text-[16px] leading-5.5")}>
          Categories
        </span>
        <ChevronRightIcon className={cn("size-4 text-muted-foreground")} />
      </Link>
      {menuNavs.map((nav) => (
        <div key={nav.title}>
          <Link
            className={cn(
              "flex items-center gap-4 rounded-lg p-2 text-primary/90 text-sm hover:bg-muted/70",
              pathname === nav.link && "bg-muted/70",
              !nav.active && "cursor-not-allowed opacity-50"
            )}
            href={nav.link as Route}
          >
            <nav.icon className={cn("size-6 text-muted-foreground")} />
            <span
              className={cn(
                "font-normal text-sm",
                pathname === nav.link && "font-medium text-primary"
              )}
            >
              {nav.title}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
}
function MenuYou({ pathname }: { pathname: string }) {
  return (
    <div className="px-3">
      <Link
        className={cn(
          "flex items-center gap-1 rounded-lg p-2 text-primary/90 text-sm hover:bg-muted/70"
        )}
        href={"/"}
      >
        <span className={cn("block font-medium text-[16px] leading-5.5")}>
          You
        </span>
        <ChevronRightIcon className={cn("size-4 text-muted-foreground")} />
      </Link>
      {youNavs.map((nav) => (
        <div key={nav.title}>
          <Link
            className={cn(
              "flex items-center gap-4 rounded-lg p-2 text-primary/90 text-sm hover:bg-muted/70",
              pathname === nav.link && "bg-muted/70",
              !nav.active && "cursor-not-allowed opacity-50"
            )}
            href={nav.link as Route}
          >
            <nav.icon className={cn("size-6 text-muted-foreground")} />
            <span
              className={cn(
                "font-normal text-sm",
                pathname === nav.link && "font-medium text-primary"
              )}
            >
              {nav.title}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
}

function MenuOther({ pathname }: { pathname: string }) {
  return (
    <div className="px-3">
      {otherNavs.map((nav) => (
        <div key={nav.title}>
          <Link
            className={cn(
              "flex items-center gap-4 rounded-lg p-2 text-primary/90 text-sm hover:bg-muted/70",
              pathname === nav.link && "bg-muted/70",
              !nav.active && "cursor-not-allowed opacity-50"
            )}
            href={nav.link as Route}
          >
            <nav.icon className={cn("size-6 text-muted-foreground")} />
            <span
              className={cn(
                "font-normal text-sm",
                pathname === nav.link && "font-medium text-primary"
              )}
            >
              {nav.title}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
}
