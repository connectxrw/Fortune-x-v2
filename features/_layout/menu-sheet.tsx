import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";
import MenuNavs from "./menu-navs";

export function MenuSheet({ children }: { children: React.ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        className="border border-muted lg:max-w-2xs dark:bg-black"
        side="left"
      >
        <SheetHeader className="px-3 pb-0">
          <SheetTitle className="flex items-center gap-1 md:gap-3">
            <SheetClose asChild>
              <Button className="rounded-full" size="icon-lg" variant={"ghost"}>
                <MenuIcon className="size-6" />
              </Button>
            </SheetClose>
            <Link
              className="font-mono font-semibold text-xl capitalize italic tracking-tighter md:text-2xl"
              href={"/"}
            >
              {siteConfig.name}
            </Link>
          </SheetTitle>
          <SheetDescription className="sr-only">FortuneX Menu</SheetDescription>
        </SheetHeader>
        <div className="no-scrollbar overflow-y-auto">
          <MenuNavs />
        </div>
        <SheetFooter>
          <Button asChild variant={"secondary"}>
            <Link href="/">Join Waiting List</Link>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
