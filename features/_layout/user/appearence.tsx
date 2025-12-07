import {
  CheckIcon,
  MonitorIcon,
  MoonIcon,
  MoonStarIcon,
  SunIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
export function SelectAppearence() {
  const { theme, setTheme } = useTheme();
  return (
    <Popover>
      <PopoverTrigger className="flex w-full cursor-pointer items-center gap-2 px-3 py-2 text-sm hover:bg-secondary">
        <MoonIcon className="size-5 text-muted-foreground" />
        <span className="capitalize">Appearence: {theme} theme</span>
      </PopoverTrigger>
      <PopoverContent
        className="w-72 overflow-hidden rounded-xl border border-muted p-0 shadow-lg dark:bg-black"
        side="right"
      >
        <button
          className="flex w-full cursor-pointer items-center gap-2 px-3 py-2 text-sm hover:bg-secondary"
          onClick={() => setTheme("system")}
          type="button"
        >
          <MonitorIcon className="size-5 text-muted-foreground" />
          <span>Use device theme</span>
          {theme === "system" ? (
            <CheckIcon className="ml-auto size-5 text-muted-foreground" />
          ) : null}
        </button>
        <button
          className="flex w-full cursor-pointer items-center gap-2 px-3 py-2 text-sm hover:bg-secondary"
          onClick={() => setTheme("dark")}
          type="button"
        >
          <MoonStarIcon className="size-5 text-muted-foreground" />
          <span>Use Dark theme</span>
          {theme === "dark" ? (
            <CheckIcon className="ml-auto size-5 text-muted-foreground" />
          ) : null}
        </button>
        <button
          className="flex w-full cursor-pointer items-center gap-2 px-3 py-2 text-sm hover:bg-secondary"
          onClick={() => setTheme("light")}
          type="button"
        >
          <SunIcon className="size-5 text-muted-foreground" />
          <span>Use Light theme</span>
          {theme === "light" ? (
            <CheckIcon className="ml-auto size-5 text-muted-foreground" />
          ) : null}
        </button>
      </PopoverContent>
    </Popover>
  );
}
