import {
    Tooltip as AriaTooltip,
    TooltipTrigger,
    OverlayArrow,
    type TooltipProps as AriaTooltipProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import type { ReactNode } from "react"

const tooltip = tv({
    base: "max-w-48 rounded-lg bg-charcoal px-2.5 py-1.5 text-xs text-cream shadow-lg outline-none data-[entering]:animate-[modal-fade-in_100ms_ease-out] data-[exiting]:animate-[modal-fade-out_80ms_ease-in]",
})

export interface TooltipProps extends Omit<AriaTooltipProps, "className" | "children"> {
    className?: string
    children: ReactNode
}

export function Tooltip({ className, children, ...props }: TooltipProps) {
    return (
        <AriaTooltip className={tooltip({ className })} offset={8} {...props}>
            <OverlayArrow>
                <svg width={8} height={8} viewBox="0 0 8 8" className="fill-charcoal">
                    <path d="M0 0 L4 4 L8 0" />
                </svg>
            </OverlayArrow>
            {children}
        </AriaTooltip>
    )
}

export { TooltipTrigger }