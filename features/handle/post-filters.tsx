"use client";
import { Button } from "@/components/ui/button";
import { useFilters } from "@/lib/nuqs-params";
import { cn } from "@/lib/utils";

export default function PostsFilterBtns({
  filters,
}: {
  filters: { label: string; slug: string }[];
}) {
  const [{ type }, setSearchParams] = useFilters();
  const onClear = () => setSearchParams({ type: "all" });

  return (
    <div className={cn("flex items-center gap-2")}>
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
