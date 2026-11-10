import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** `cn` du lab (`design/src/design-system/lib/cn.ts`) : une classe ajoutée remplace celle qu'elle contredit. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
