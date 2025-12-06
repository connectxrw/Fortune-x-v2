"use client";
import { ChevronRightIcon, HouseIcon } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { menuNavs } from "@/config/data";
import { cn } from "@/lib/utils";

export default function MenuNavs() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-3">
      <Link
        className={cn(
          "flex items-center gap-1 rounded-lg p-1.5 text-primary/90 text-sm hover:bg-muted/70",
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
      <div className="px-3">
        <Link
          className={cn(
            "flex items-center gap-1 rounded-lg p-1.5 text-primary/90 text-sm hover:bg-muted/70"
          )}
          href={"/categories"}
        >
          <span className={cn("block font-medium text-lg")}>Categories</span>
          <ChevronRightIcon className={cn("size-4 text-muted-foreground")} />
        </Link>
        {menuNavs.map((nav) => (
          <div key={nav.title}>
            <Link
              className={cn(
                "flex items-center gap-1 rounded-lg p-2 text-primary/90 text-sm hover:bg-muted/70",
                pathname === nav.link && "bg-muted/70",
                !nav.active && "cursor-not-allowed opacity-50"
              )}
              href={nav.link as Route}
            >
              <nav.icon className={cn("size-5 text-muted-foreground")} />
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
    </div>
  );
}
