import type { HTMLAttributes } from "react"
import { tv } from "tailwind-variants"

const chip = tv({
    base: "inline-flex items-center gap-1 rounded-full font-semibold",
    variants: {
        variant: {
            default: "bg-sand text-charcoal",
            success: "bg-success/15 text-success",
            warning: "bg-warning/20 text-warning",
            danger: "bg-clay/10 text-clay",
            accented: "bg-indigo text-cream",
        },
        size: {
            sm: "px-2 py-0.5 text-[10px]",
            md: "px-2.5 py-1 text-xs",
            lg: "px-3 py-1.5 text-sm",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "md",
    },
})

const removeBtn = tv({
    base: "-mr-1 flex items-center justify-center rounded-full opacity-60 transition-opacity hover:opacity-100",
    variants: {
        size: {
            sm: "h-3 w-3",
            md: "h-3.5 w-3.5",
            lg: "h-4 w-4",
        },
    },
    defaultVariants: {
        size: "md",
    },
})

export interface ChipProps extends Omit<HTMLAttributes<HTMLSpanElement>, "className"> {
    variant?: "default" | "success" | "warning" | "danger" | "accented"
    size?: "sm" | "md" | "lg"
    onRemove?: () => void
    className?: string
}

export function Chip({ variant, size, onRemove, className, children, ...props }: ChipProps) {
    return (
        <span className={chip({ variant, size, className })} {...props}>
            {children}
            {onRemove && (
                <button
                    type="button"
                    onClick={onRemove}
                    aria-label="Remove"
                    className={removeBtn({ size })}
                >
                    ✕
                </button>
            )}
        </span>
    )
}