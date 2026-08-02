// src/spinner.tsx
import { tv, type VariantProps } from "tailwind-variants"

const spinner = tv({
    base: "inline-block animate-spin rounded-full border-solid border-current border-r-transparent",
    variants: {
        size: {
            sm: "h-4 w-4 border-2",
            md: "h-6 w-6 border-2",
            lg: "h-10 w-10 border-[3px]",
        },
        variant: {
            default: "text-charcoal",
            inverse: "text-cream",
            muted: "text-charcoal/50",
            primary: "text-charcoal",
            secondary: "text-sand",
            danger: "text-danger",
        },
    },
    defaultVariants: {
        size: "md",
        variant: "default",
    },
})

export interface SpinnerProps extends VariantProps<typeof spinner> {
    className?: string
    label?: string
}

export function Spinner({ size, variant, className, label = "Loading" }: SpinnerProps) {
    return (
        <span
            role="status"
            aria-label={label}
            className={spinner({ size, variant, className })}
        />
    )
}