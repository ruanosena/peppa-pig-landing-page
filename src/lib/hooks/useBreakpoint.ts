import { create } from "@kodingdotninja/use-tailwind-breakpoint";
import resolveConfig from "tailwindcss/resolveConfig";

import tailwindConfig from "../../../tailwind.config";

const config = resolveConfig(tailwindConfig);

export const { useBreakpoint } = create(
  config.theme.screens as Record<
    "xs" | "2xl" | "sm" | "md" | "lg" | "xl",
    string
  >,
);
