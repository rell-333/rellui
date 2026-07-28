import {
    DisclosureGroup as AriaDisclosureGroup,
    type DisclosureGroupProps as AriaDisclosureGroupProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"

const group = tv({ base: "flex flex-col gap-2" })

export interface DisclosureGroupProps extends Omit<AriaDisclosureGroupProps, "className"> {
    className?: string
}

export function DisclosureGroup({ className, ...props }: DisclosureGroupProps) {
    return <AriaDisclosureGroup className={group({ className })} {...props} />
}