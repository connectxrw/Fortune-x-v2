"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export default function PageNavs() {
  const pathname = usePathname();
  const navs = [
    {
      label: "Home",
      href: "/@bistro",
    },
    {
      label: "Posts",
      href: "/@bistro/posts",
    },
    {
      label: "About",
      href: "/@bistro/about",
    },
    {
      label: "Contact",
      href: "/@bistro/contact",
    },
  ];

  return (
    <nav
      className={cn(
        "sticky top-15 w-full gap-4 border-border border-b bg-transparent"
      )}
    >
      <div className="flex items-center gap-4 transition-all duration-1000 ease-in">
        <ScrollArea className="w-screen overflow-hidden lg:w-full">
          <div className="mx-auto flex w-full items-center gap-4">
            {navs.map((nav) => (
              <NavItem
                href={nav.href}
                key={nav.href}
                label={nav.label}
                pathname={pathname}
              />
            ))}
          </div>
          <ScrollBar className="h-0 w-0" orientation="horizontal" />
        </ScrollArea>
      </div>
    </nav>
  );
}

function NavItem({
  pathname,
  href,
  label,
}: {
  pathname: string;
  href: string;
  label: string;
}) {
  return (
    <Link
      className={cn(
        "flex h-11 items-center border-b-2",
        pathname === href
          ? "border-primary"
          : "border-transparent hover:border-primary/60"
      )}
      href={href as Route}
    >
      <span
        className={cn(
          "group relative px-1 font-medium text-[16px] leading-5.5",
          pathname === href ? "text-primary" : "text-primary/80"
        )}
      >
        {label}
      </span>
    </Link>
  );
}
