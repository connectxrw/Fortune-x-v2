import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
export default function PagePicture() {
  return (
    <div className="w-full max-w-3xl">
      <h3 className="font-medium">Page Picture</h3>
      <p className="text-muted-foreground text-sm">
        Your profile picture will appear where your channel is presented on
        FortuneX.
      </p>
      <div className="flex gap-8 pt-6">
        <div className="flex h-[160px] w-full max-w-[290px] items-center justify-center overflow-hidden bg-muted p-4 lg:rounded-lg">
          <Avatar className="size-28">
            <AvatarImage src="/profile.svg" />
            <AvatarFallback>UC</AvatarFallback>
          </Avatar>
        </div>
        <div className="space-y-4">
          <p className="text-muted-foreground text-sm">
            It&apos;s recommended to use a picture that&apos;s at least 98 x 98
            pixels and 4MB or less. Use a PNG or GIF (no animations) file. Make
            sure your picture follows the YouTube Community Guidelines.
          </p>
          <div className="flex gap-2">
            <Button className="rounded-full" variant={"secondary"}>
              Change
            </Button>
            <Button className="rounded-full" variant={"secondary"}>
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
