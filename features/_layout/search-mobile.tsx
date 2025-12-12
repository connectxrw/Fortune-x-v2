import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { ArrowLeftIcon, MicIcon, SearchIcon } from "lucide-react";

export function SearchMobileSheet() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <SearchIcon />
      </SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader className="sr-only">
          <SheetTitle>Search</SheetTitle>
          <SheetDescription>
            Search for users, groups, and more.
          </SheetDescription>
        </SheetHeader>
        <div className="flex items-center gap-3 px-4 py-2">
          <SheetClose>
            <ArrowLeftIcon />
          </SheetClose>
          <Input
            id="sheet-demo-name"
            className="rounded-full bg-muted h-8 shadow-none"
            placeholder="Search FortuneX"
          />
          <Button variant={"secondary"} size="icon-sm" className="rounded-full">
            <MicIcon />
          </Button>
        </div>
        <SheetFooter>
          <Button type="submit">Search</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
