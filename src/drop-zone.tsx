import {
    DropZone as AriaDropZone,
    type DropZoneProps as AriaDropZoneProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"

const zone = tv({
    base: "flex min-h-24 w-full items-center justify-center rounded-2xl border-2 border-dashed border-sand p-6 text-center text-sm text-charcoal/60 outline-none transition-colors data-[focus-visible]:border-accent data-[drop-target]:border-accent data-[drop-target]:bg-accent/5 data-[drop-target]:text-accent",
})

export interface DropZoneProps extends Omit<AriaDropZoneProps, "className"> {
    className?: string
}

export function DropZone({ className, ...props }: DropZoneProps) {
    return <AriaDropZone className={zone({ className })} {...props} />
}