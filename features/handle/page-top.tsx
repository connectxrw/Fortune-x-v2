import { CircleCheckIcon, PlusIcon } from "lucide-react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function PageTop() {
  return (
    <div className="container">
      <AspectRatio className="overflow-hidden rounded-lg" ratio={535 / 86}>
        <Image
          alt="my image"
          className="h-full max-h-[172px] w-full rounded-lg object-cover transition-all duration-300 ease-in group-hover:scale-105"
          height={172}
          src={"/banner.jpeg"}
          width={1070}
        />
      </AspectRatio>
      <div className="flex items-center gap-4 pt-5 lg:pt-1">
        <Avatar className="size-20 lg:size-40">
          <AvatarImage src="https://github.com/RobinMalfait.png" />
          <AvatarFallback>R</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-4">
            <h3 className="font-bold text-lg tracking-tight lg:text-4xl">
              Robin Malfait
            </h3>
            <CircleCheckIcon className="size-5 fill-primary text-background" />
          </div>
          <div className="flex flex-col items-center gap-2 lg:flex-row">
            <p className="font-medium">@robin.malfait</p>
            <div className="flex items-center gap-2 text-muted-foreground text-xs lg:text-sm">
              <p className="">123 followers</p>
              <p className="">60 posts</p>
            </div>
          </div>
          <ProfileBtns className="hidden lg:flex" />
        </div>
      </div>
      <ProfileBtns className="pt-2 lg:hidden" />
    </div>
  );
}

function ProfileBtns({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <div className="flex items-center">
        <p className="text-muted-foreground">
          Best restaurant in kigali from china
        </p>
        <p className="font-medium">...more</p>
      </div>
      <div className="flex items-center gap-3">
        <Button className="w-fit rounded-full">
          <PlusIcon />
          Follow
        </Button>
        <Button className="hidden w-fit rounded-full" variant={"secondary"}>
          Customize page
        </Button>
        <Button className="hidden w-fit rounded-full" variant={"secondary"}>
          Manage posts
        </Button>
      </div>
    </div>
  );
}
