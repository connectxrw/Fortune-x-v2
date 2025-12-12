import { MessageSquareShareIcon } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export function SendFeedbackDialog({
  open,
  onOpenChange,
  noTrigger,
  className,
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  noTrigger?: boolean;
  className?: string;
}) {
  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
      <form>
        {!noTrigger && (
          <DialogTrigger asChild>
            <div
              className={cn(
                "flex cursor-pointer items-center gap-2 px-3 py-2 text-sm hover:bg-secondary",
                className
              )}
            >
              <MessageSquareShareIcon className="size-5 text-muted-foreground" />
              <span>Send feedback</span>
            </div>
          </DialogTrigger>
        )}
        <DialogContent
          className="max-w-full rounded-none md:max-w-[425px] md:rounded-lg lg:max-w-xl"
          showCloseButton={false}
        >
          <DialogHeader>
            <DialogTitle>Send feedback to FortuneX</DialogTitle>
            <DialogDescription>
              Send feedback to FortuneX. Click send when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="Enter your email"
                type="email"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="feedback">
                Describe your feedback (required)
              </Label>
              <Textarea
                className="min-h-[100px]"
                id="feedback"
                name="feedback"
                placeholder="Tell us what prompted this feedback..."
              />
            </div>
          </div>
          <DialogFooter className="flex flex-row">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Send</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
