"use client";
import {
  BanIcon,
  BookmarkIcon,
  CircleMinusIcon,
  EllipsisVerticalIcon,
  FlagIcon,
  PenIcon,
  Share2Icon,
  ThumbsUpIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Skeleton } from "@/components/ui/skeleton";

export function PostCardActions() {
  const isLoading = false;
  if (isLoading) {
    return (
      <Button
        className="block rounded-full text-muted-foreground"
        disabled
        size="icon"
        variant="ghost"
      >
        <Skeleton />
      </Button>
    );
  }
  return <PopoverCardActions />;
}

function PopoverCardActions() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="mt-2 rounded-full" size="icon" variant={"ghost"}>
          <EllipsisVerticalIcon className="size-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="z-10 w-60 overflow-hidden p-0" side="right">
        <div className="flex flex-col">
          <div className="flex cursor-pointer items-center gap-2 px-3 py-2 text-sm hover:bg-secondary">
            <PenIcon className="size-5 text-muted-foreground" />
            <span>Edit</span>
          </div>
          <div className="flex cursor-pointer items-center gap-2 px-3 py-2 text-sm hover:bg-secondary">
            <ThumbsUpIcon className="size-5 text-muted-foreground" />
            <span>Like</span>
          </div>
          <div className="flex cursor-pointer items-center gap-2 px-3 py-2 text-sm hover:bg-secondary">
            <BookmarkIcon className="size-5 text-muted-foreground" />
            <span>save to bookmark</span>
          </div>

          <div className="flex cursor-pointer items-center gap-2 px-3 py-2 text-sm hover:bg-secondary">
            <Share2Icon className="size-5 text-muted-foreground" />
            <span>Share</span>
          </div>
          <div className="flex cursor-pointer items-center gap-2 px-3 py-2 text-sm hover:bg-secondary">
            <BanIcon className="size-5 text-muted-foreground" />
            <span>Not interested</span>
          </div>
          <div className="flex cursor-pointer items-center gap-2 px-3 py-2 text-sm hover:bg-secondary">
            <CircleMinusIcon className="size-5 text-muted-foreground" />
            <span>Don&apos;t recommend this page</span>
          </div>
          <div className="flex cursor-pointer items-center gap-2 px-3 py-2 text-sm hover:bg-secondary">
            <FlagIcon className="size-5 text-muted-foreground" />
            <span>Report</span>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
