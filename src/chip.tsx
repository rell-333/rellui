import type { HTMLAttributes } from "react"
import { tv } from "tailwind-variants"

const chip = tv({
    base: "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold",
    variants: {
        variant: {
            default: "bg-sand text-charcoal",
            success: "bg-success/15 text-success",
            warning: "bg-warning/20 text-warning",
            danger: "bg-clay/10 text-clay",
            accented: "bg-indigo text-cream",
        },
    },
    defaultVariants: {
        variant: "default",
    },
})

const removeBtn = tv({
    base: "-mr-1 flex h-3.5 w-3.5 items-center justify-center rounded-full opacity-60 transition-opacity hover:opacity-100",
})

export interface ChipProps extends Omit<HTMLAttributes<HTMLSpanElement>, "className"> {
    variant?: "default" | "success" | "warning" | "danger" | "accented"
    onRemove?: () => void
    className?: string
}

export function Chip({ variant, onRemove, className, children, ...props }: ChipProps) {
    return (
        <span className={chip({ variant, className })} {...props}>
            {children}
            {onRemove && (
                <button
                    type="button"
                    onClick={onRemove}
                    aria-label="Remove"
                    className={removeBtn({})}
                >
                    ✕
                </button>
            )}
        </span>
    )
}