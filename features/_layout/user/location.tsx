import { CheckIcon, GlobeIcon } from "lucide-react";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const countries = [
  {
    name: "Rwanda",
    value: "rw",
  },
  {
    name: "Uganda",
    value: "ug",
  },
  {
    name: "Burundi",
    value: "bur",
  },
];
export function SelectLocation() {
  const [country, setCountry] = useState(countries[0]);
  return (
    <Popover>
      <PopoverTrigger className="flex w-full cursor-pointer items-center gap-2 px-3 py-2 text-sm hover:bg-secondary">
        <GlobeIcon className="size-5 text-muted-foreground" />
        <span className="capitalize">Location: {country.name}</span>
      </PopoverTrigger>
      <PopoverContent
        className="w-72 overflow-hidden rounded-xl border border-muted p-0 shadow-lg dark:bg-black"
        side="right"
      >
        {countries.map((c) => (
          <button
            className="flex w-full cursor-pointer items-center gap-2 px-3 py-2 text-sm hover:bg-secondary"
            key={c.value}
            onClick={() => setCountry(c)}
            type="button"
          >
            <span>{c.name}</span>
            {c.value === country.value ? (
              <CheckIcon className="ml-auto size-5 text-muted-foreground" />
            ) : null}
          </button>
        ))}
      </PopoverContent>
    </Popover>
  );
}
