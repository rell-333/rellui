import {
    Popover as AriaPopover,
    type PopoverProps as AriaPopoverProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"

const popover = tv({
    base: "rounded-xl border border-sand bg-cream p-3 text-sm text-charcoal shadow-lg outline-none data-[entering]:animate-[modal-fade-in_120ms_ease-out] data-[exiting]:animate-[modal-fade-out_100ms_ease-in]",
})

export interface PopoverProps extends Omit<AriaPopoverProps, "className"> {
    className?: string
}

export function Popover({ className, ...props }: PopoverProps) {
    return <AriaPopover className={popover({ className })} {...props} />
}