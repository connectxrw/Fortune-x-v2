import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MenuNavs from "./menu-navs";

export function MenuSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="rounded-full" size="icon-lg" variant={"ghost"}>
          <MenuIcon className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="rounded-r-2xl border border-muted lg:max-w-xs dark:bg-black"
        side="left"
      >
        <SheetHeader>
          <SheetTitle>
            <Link
              className="flex items-center gap-2 font-bold text-lg"
              href="/"
            >
              FortuneX
            </Link>
          </SheetTitle>
          <SheetDescription className="sr-only">FortuneX Menu</SheetDescription>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-13rem)]">
          <MenuNavs />
        </ScrollArea>
        <SheetFooter>
          <Button asChild variant={"outline"}>
            <Link href="/waiting-list">Join Waiting List</Link>
          </Button>
          <Button asChild>
            <Link href="/business/new">Add Your Business</Link>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
