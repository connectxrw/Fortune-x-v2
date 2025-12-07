import { KeyboardIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Separator } from "@/components/ui/separator";

export function KeyboardShortcuts() {
  return (
    <Dialog>
      <form>
        <DialogTrigger className="flex w-full cursor-pointer items-center gap-2 px-3 py-2 text-sm hover:bg-secondary">
          <KeyboardIcon className="size-5 text-muted-foreground" />
          <span>Keyboard Shortcuts</span>
        </DialogTrigger>
        <DialogContent className="sm:max-w-5xl" showCloseButton={false}>
          <DialogHeader>
            <DialogTitle>Keyboard Shortcuts</DialogTitle>
            <DialogDescription>
              These are the keyboard shortcuts for the site.
            </DialogDescription>
          </DialogHeader>
          <div className="flex max-w-xl flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">General Search</span>
              <KbdGroup>
                <Kbd>Ctrl</Kbd>
                <span>+</span>
                <Kbd>K</Kbd>
              </KbdGroup>
            </div>
            <Separator />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="ghost">Dismiss</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
