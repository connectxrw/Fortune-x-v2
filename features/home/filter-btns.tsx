"use client";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import { useFilters } from "@/lib/nuqs-params";
import { cn } from "@/lib/utils";

export default function FilterBtns({
  filters,
}: {
  filters: { label: string; slug: string }[];
}) {
  const pathname = usePathname();
  const [{ type }, setSearchParams] = useFilters();
  const onClear = () => setSearchParams({ type: "all" });

  return (
    <div
      className={cn(
        "container w-full overflow-hidden pt-5 lg:pt-7",
        pathname !== "/" && "hidden"
      )}
    >
      <div className={cn("relative")}>
        <Carousel
          className="flex w-full items-center justify-between"
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 3,
          }}
        >
          <CarouselContent className="-ml-1 max-w-5xl lg:max-w-6xl">
            <CarouselItem className="w-fit basis-auto pl-2">
              <Button
                onClick={onClear}
                size="sm"
                variant={type === "all" ? "default" : "secondary"}
              >
                All
              </Button>
            </CarouselItem>
            {filters.map((f) => (
              <CarouselItem className="w-fit basis-auto pl-2" key={f.label}>
                <Button
                  className="capitalize"
                  onClick={() => setSearchParams({ type: f.slug })}
                  size="sm"
                  variant={type === f.slug ? "default" : "secondary"}
                >
                  {f.label}
                </Button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div
            className={cn(
              "hidden items-center justify-end md:flex",
              filters.length <= 6 && "hidden"
            )}
          >
            <CarouselNext className="relative inset-0 h-8 w-8 translate-x-0 translate-y-0 text-gray-700 dark:bg-none dark:text-gray-300" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
