import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
export function BusinessName() {
  return (
    <div className="w-full max-w-3xl">
      <div className="space-y-2">
        <Label className="font-medium text-base" htmlFor="name">
          Name
        </Label>
        <p className="text-muted-foreground text-sm">
          Choose a page name that represents you and your content. You can
          change your name twice in 14 days.
        </p>
      </div>
      <div className="flex flex-col gap-4 pt-6">
        <Input id="name" placeholder="Business Name" />
        <Button className="w-fit rounded-full" size="sm" variant={"secondary"}>
          Save Changes
        </Button>
      </div>
    </div>
  );
}

export function BusinessHandle() {
  return (
    <div className="w-full max-w-3xl">
      <div className="space-y-2">
        <Label className="font-medium text-base" htmlFor="handle">
          Handle
        </Label>
        <p className="text-muted-foreground text-sm">
          Choose your unique handle by adding letters and numbers. You can
          change your handle back within 14 days. Handles can be changed twice
          every 14 days.
        </p>
      </div>
      <div className="flex flex-col gap-4 pt-6">
        <div className="flex w-full flex-col gap-2">
          <Input className="w-full" id="handle" placeholder="Business Handle" />
          <p className="text-muted-foreground text-sm">
            https://www.youtube.com/@Lecon-tin
          </p>
        </div>
        <Button className="w-fit rounded-full" size="sm" variant={"secondary"}>
          Save Changes
        </Button>
      </div>
    </div>
  );
}

export function BusinessDescription() {
  return (
    <div className="w-full max-w-3xl">
      <Label className="font-medium text-base" htmlFor="description">
        Description
      </Label>

      <div className="flex flex-col gap-4 pt-6">
        <Textarea
          className="min-h-[150px]"
          id="description"
          placeholder="Tell viewers about your business."
        />
        <Button className="w-fit rounded-full" size="sm" variant={"secondary"}>
          Save Changes
        </Button>
      </div>
    </div>
  );
}

export function BusinessLinks() {
  return (
    <div className="w-full max-w-3xl">
      <Label className="font-medium text-base" htmlFor="description">
        Links
      </Label>
      <p className="text-muted-foreground text-sm">
        Share external links with your viewers. They'll be visible on your
        channel profile and about page.
      </p>
      <Button
        className="mt-6 w-fit rounded-full"
        size="sm"
        variant={"secondary"}
      >
        <PlusIcon />
        Add Links
      </Button>
    </div>
  );
}

export function BusinessContactInfo() {
  return (
    <div className="w-full max-w-3xl">
      <div className="space-y-2">
        <Label className="font-medium text-base" htmlFor="name">
          Contact Info
        </Label>
        <p className="text-muted-foreground text-sm">
          Let people know how to contact you with business inquiries. The email
          address you enter may appear in the About section of your channel and
          be visible to viewers.
        </p>
      </div>
      <div className="flex flex-col gap-4 pt-6">
        <Input id="name" placeholder="your email address" />
        <Button className="w-fit rounded-full" size="sm" variant={"secondary"}>
          Save Changes
        </Button>
      </div>
    </div>
  );
}
