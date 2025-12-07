"use client";
import { cn } from "@/lib/utils";
import { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const pathname = usePathname();

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
