"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFilters } from "@/lib/nuqs-params";
import { cn } from "@/lib/utils";
export default function PostsFilterBtns({
  filters,
  className,
}: {
  filters: { label: string; slug: string }[];
  className?: string;
}) {
  const [{ type }, setSearchParams] = useFilters();
  const onClear = () => setSearchParams({ type: "all" });

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Button
        onClick={onClear}
        size="sm"
        variant={type === "all" ? "default" : "secondary"}
      >
        All
      </Button>
      {filters.map((f) => (
        <Button
          className="capitalize"
          key={f.label}
          onClick={() => setSearchParams({ type: f.slug })}
          size="sm"
          variant={type === f.slug ? "default" : "secondary"}
        >
          {f.label}
        </Button>
      ))}
    </div>
  );
}

export function PostsFilterBtnsSelect({
  filters,
  className,
}: {
  filters: { label: string; slug: string }[];
  className?: string;
}) {
  const [{ type }, setSearchParams] = useFilters();
  const onClear = () => setSearchParams({ type: "all" });
  const onSelect = (value: string) => {
    setSearchParams({ type: value });
  };
  return (
    <Select>
      <SelectTrigger className={cn("w-[180px]", className)}>
        <SelectValue placeholder="Select a type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>
            {type === "all"
              ? "All"
              : filters.find((f) => f.slug === type)?.label}
          </SelectLabel>
          <SelectItem onClick={onClear} value="all">
            All
          </SelectItem>
          {filters.map((f) => (
            <SelectItem
              key={f.label}
              onClick={() => onSelect(f.slug)}
              value={f.slug}
            >
              {f.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
