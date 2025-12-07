"use client";
import {
  BookmarkIcon,
  EllipsisIcon,
  FlagIcon,
  PenIcon,
  Share2Icon,
  ShoppingBagIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";

export default function PostBtns() {
  const isMobile = useIsMobile();
  return (
    <div className="flex gap-2">
      <ButtonGroup>
        <Button
          className="rounded-full"
          size={isMobile ? "sm" : "default"}
          variant="secondary"
        >
          <ThumbsUpIcon />
          19
        </Button>
        <ButtonGroupSeparator />
        <Button
          className="rounded-full"
          size={isMobile ? "sm" : "default"}
          variant="secondary"
        >
          <ThumbsDownIcon />
        </Button>
      </ButtonGroup>
      <Button
        aria-label="Share"
        className="rounded-full"
        size={isMobile ? "sm" : "default"}
      >
        <ShoppingBagIcon />
        Order Now
      </Button>
      <Button
        aria-label="Download"
        className="rounded-full md:hidden"
        size={isMobile ? "sm" : "default"}
        variant="secondary"
      >
        <PenIcon />
        Edit
      </Button>
      <Button
        aria-label="Save"
        className="rounded-full md:hidden"
        size={isMobile ? "sm" : "default"}
        variant="secondary"
      >
        <BookmarkIcon />
        Save to bookmarks
      </Button>
      <Button
        aria-label="Report"
        className="rounded-full md:hidden"
        size={isMobile ? "sm" : "default"}
        variant="secondary"
      >
        <Share2Icon />
        Share
      </Button>
      <Button
        aria-label="Report"
        className="rounded-full md:hidden"
        size={isMobile ? "sm" : "default"}
        variant="secondary"
      >
        <FlagIcon />
        Report
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="hidden rounded-full md:flex"
            size="icon"
            variant="secondary"
          >
            <EllipsisIcon className="size-5 stroke-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="hidden p-0 md:block lg:min-w-48">
          <DropdownMenuItem className="rounded-none px-3 py-2">
            <PenIcon className="size-5 text-muted-foreground" />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem className="rounded-none px-3 py-2">
            <BookmarkIcon className="size-5 text-muted-foreground" />
            Save to bookmarks
          </DropdownMenuItem>
          <DropdownMenuItem className="rounded-none px-3 py-2">
            <Share2Icon className="size-5 text-muted-foreground" />
            Share
          </DropdownMenuItem>
          <DropdownMenuItem className="rounded-none px-3 py-2">
            <FlagIcon className="size-5 text-muted-foreground" />
            Report
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
