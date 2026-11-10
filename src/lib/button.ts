import { cva } from "class-variance-authority";
import { cn } from "./cn";
import { buttonCompoundVariants, buttonVariantAxes, type ButtonTone, type ButtonVariant } from "./button-styles";

/**
 * Classes de `Button` (design/src/design-system/primitives/button.tsx), évaluées au build. `button-styles.ts`
 * est copié tel quel depuis le lab.
 */
export const buttonStyles = cva(
  "jo-transition jo-focus inline-flex min-w-11 items-center justify-center gap-2 rounded-jo-sm font-semibold whitespace-nowrap select-none disabled:cursor-not-allowed disabled:opacity-40 enabled:cursor-pointer jo-pressed:scale-[.98]",
  {
    variants: {
      ...buttonVariantAxes,
      size: {
        L: "jo-type-headline min-h-12 px-5",
        M: "jo-type-callout relative min-h-10 px-4 font-semibold after:absolute after:inset-x-0 after:-inset-y-0.5",
        S: "jo-type-callout relative min-h-8 px-3 font-semibold after:absolute after:inset-x-0 after:-inset-y-1.5",
      },
      full: { true: "w-full" },
    },
    compoundVariants: [...buttonCompoundVariants],
    defaultVariants: { variant: "filled", tone: "accent", size: "L" },
  },
);

export type ButtonOptions = { variant?: ButtonVariant; tone?: ButtonTone; size?: "L" | "M" | "S"; full?: boolean };

/** Lien au style bouton (`LinkButton` du lab). */
export const linkButtonClass = (options: ButtonOptions = {}, className?: string) =>
  cn(buttonStyles(options), "cursor-pointer no-underline active:scale-[.98]", className);

/** Classes d'`IconButton` (design/src/design-system/primitives/icon-button.tsx), `plain` + `neutral`, taille S. */
export const iconButtonStyles = cva(
  "jo-transition jo-focus relative grid flex-none place-items-center rounded-jo-full disabled:cursor-not-allowed disabled:opacity-40 enabled:cursor-pointer jo-pressed:scale-[.94]",
  {
    variants: {
      ...buttonVariantAxes,
      size: { L: "size-12", M: "size-11", S: "size-9 after:absolute after:-inset-1" },
    },
    compoundVariants: [...buttonCompoundVariants],
    defaultVariants: { variant: "plain", tone: "neutral", size: "M" },
  },
);

export const iconButtonClass = iconButtonStyles({ size: "S" });
