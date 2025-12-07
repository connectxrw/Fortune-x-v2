"use client";
import { LoaderIcon, SearchIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { debounce } from "nuqs";
import { useTransition } from "react";
import { AiSearchIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { getAiLinks, useFilters } from "@/lib/nuqs-params";

export default function SearchTop() {
  const [isPending, startTransition] = useTransition();
  const [{ query }, setSearchParams] = useFilters({
    startTransition,
  });
  const onClear = () => setSearchParams({ query: "" });

  return (
    <div className="container mx-auto mt-6 flex w-full max-w-170 items-center justify-center gap-6 md:mt-3 lg:mt-0">
      <InputGroup className="min-h-10 rounded-full bg-background shadow-none">
        <InputGroupInput
          onChange={(e) => {
            startTransition(async () => {
              await setSearchParams(
                { query: e.target.value },
                {
                  limitUrlUpdates: e.target.value.length
                    ? debounce(500)
                    : undefined,
                }
              );
            });
          }}
          placeholder="Search..."
          value={query || ""}
        />
        <InputGroupAddon>
          {isPending ? <LoaderIcon className="animate-spin" /> : <SearchIcon />}
        </InputGroupAddon>
        {query && !isPending && (
          <InputGroupAddon align="inline-end">
            <Button
              className="rounded-full"
              onClick={onClear}
              size="icon-sm"
              variant={"ghost"}
            >
              <XIcon />
            </Button>
          </InputGroupAddon>
        )}

        <InputGroupAddon align="inline-end" className="pr-0.5">
          <Button
            asChild
            className="rounded-full"
            size="sm"
            variant={"secondary"}
          >
            <Link href={getAiLinks({ query })}>
              <AiSearchIcon className="fill-primary" />
              AI Mode
            </Link>
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
