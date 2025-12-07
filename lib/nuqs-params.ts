import { useQueryStates } from "nuqs";
import { createLoader, type Options, parseAsString } from "nuqs/server";
import { createTypedLink } from "@/lib/typed-links";

const searchParams = {
  query: parseAsString.withDefault(""),
  type: parseAsString.withDefault("all"),
};

export const loadFilters = createLoader(searchParams);

export const useFilters = (options: Options = {}) =>
  useQueryStates(searchParams, {
    ...options,
    shallow: false,
  });

export const getAiLinks = createTypedLink("/", searchParams);
