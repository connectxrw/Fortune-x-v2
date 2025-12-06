"use client";
// import { useConvexAuth } from "convex/react";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AddNewTop() {
  // const { isAuthenticated, isLoading } = useConvexAuth();
  const isAuthenticated = true;
  const isLoading = false;

  if (!isAuthenticated || isLoading) {
    return (
      <Button
        asChild
        className="hidden rounded-full lg:flex"
        disabled={isLoading}
        variant={"secondary"}
      >
        <Link className="flex items-center gap-2 font-medium" href="/sign-in">
          <PlusIcon className="size-6" />
          <span>Create</span>
        </Link>
      </Button>
    );
  }

  return (
    <Button
      asChild
      className="hidden rounded-full lg:flex"
      variant={"secondary"}
    >
      <Link href="/business/new">
        <PlusIcon className="size-6" />
        <span>Create</span>
      </Link>
    </Button>
  );
}
