"use client";
import {
  BellIcon,
  BellOffIcon,
  BellRingIcon,
  CheckIcon,
  ChevronDownIcon,
  UserRoundXIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const dropdownItems = [
  { label: "All", icon: BellRingIcon, isActive: true },
  { label: "None", icon: BellOffIcon, isActive: false },
  { label: "Unfollow", icon: UserRoundXIcon, isActive: false },
];
export default function ProviderBtn({ className }: { className?: string }) {
  const hasFollowed = false;
  const isMobile = useIsMobile();

  if (!hasFollowed) {
    return <Button className="rounded-full">Follow</Button>;
  }
  if (isMobile && hasFollowed) {
    return <MobileProviderBtn />;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={cn(className)}>
        <Button className="rounded-full" variant="secondary">
          <BellIcon />
          <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0 lg:min-w-48">
        {dropdownItems.map((item) => {
          const Icon = item.icon;
          return (
            <DropdownMenuItem
              className="rounded-none px-3 py-2"
              key={item.label}
            >
              <Icon className="size-5 text-muted-foreground" />
              {item.label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function MobileProviderBtn() {
  const isMobile = useIsMobile();
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          className="rounded-full"
          size={isMobile ? "sm" : "default"}
          variant="secondary"
        >
          <BellIcon />
          <ChevronDownIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="mx-2 px-2 font-roboto">
        <DrawerHeader className="drawer-content:text-left group-data-[vaul-drawer-direction=top]/drawer-content:text-left">
          <DrawerTitle className="text-left">Notifications</DrawerTitle>
          <DrawerDescription className="sr-only">
            Choose how you want to be notified ?
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col gap-3 px-4 pb-4">
          {dropdownItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                className="flex items-center justify-between"
                key={item.label}
              >
                <div className="flex items-center gap-4">
                  <Icon />
                  <span className="font-normal text-sm capitalize">
                    {item.label}
                  </span>
                </div>
                {item.isActive && <CheckIcon className="" />}
              </div>
            );
          })}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
