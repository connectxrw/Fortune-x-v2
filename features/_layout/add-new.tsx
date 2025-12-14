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
        className="rounded-full lg:flex"
        disabled={isLoading}
        // variant={"secondary"}
      >
        <PlusIcon className="size-6" />
        <span>Post</span>
      </Button>
    );
  }

  return (
    <>
      <Button asChild className="hidden rounded-full md:flex">
        <Link href="/page/posts/new">
          <PlusIcon />
          <span>Post</span>
        </Link>
      </Button>
      <Button asChild className="rounded-full md:hidden" variant={"ghost"}>
        <Link href="/page/posts/new">
          <PlusIcon className="size-6" />
        </Link>
      </Button>
    </>
  );
}
