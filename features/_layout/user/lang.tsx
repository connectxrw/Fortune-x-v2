import { CheckIcon, LanguagesIcon } from "lucide-react";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const langs = [
  {
    name: "English (US)",
    value: "en",
  },
  {
    name: "English (UK)",
    value: "en-uk",
  },
  {
    name: "Kinyarwanda",
    value: "rw",
  },
];
export function SelectLanguage() {
  const [lang, setLang] = useState(langs[0]);
  return (
    <Popover>
      <PopoverTrigger className="flex w-full cursor-pointer items-center gap-2 px-3 py-2 text-sm hover:bg-secondary">
        <LanguagesIcon className="size-5 text-muted-foreground" />
        <span className="capitalize">Display Language: {lang.name}</span>
      </PopoverTrigger>
      <PopoverContent
        className="w-72 overflow-hidden rounded-xl border border-muted p-0 shadow-lg dark:bg-black"
        side="right"
      >
        {langs.map((lan) => (
          <button
            className="flex w-full cursor-pointer items-center gap-2 px-3 py-2 text-sm hover:bg-secondary"
            key={lan.value}
            onClick={() => setLang(lan)}
            type="button"
          >
            <span>{lan.name}</span>
            {lan.value === lang.value ? (
              <CheckIcon className="ml-auto size-5 text-muted-foreground" />
            ) : null}
          </button>
        ))}
      </PopoverContent>
    </Popover>
  );
}
