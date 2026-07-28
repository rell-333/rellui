import {
    Disclosure as AriaDisclosure,
    DisclosurePanel as AriaDisclosurePanel,
    Button as AriaButton,
    Heading,
    type DisclosureProps as AriaDisclosureProps,
    type ButtonProps as AriaButtonProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import type { ReactNode } from "react"

const root = tv({
    base: "group overflow-hidden rounded-2xl border border-sand bg-cream",
})

const trigger = tv({
    base: "flex w-full items-center gap-2 border-0 bg-transparent px-4 py-3 text-left text-sm font-semibold text-charcoal outline-none transition-colors data-[hovered]:bg-sand/30 data-[focus-visible]:outline-2 data-[focus-visible]:outline-offset-[-2px] data-[focus-visible]:outline-accent",
})

const chevron = tv({
    base: "h-3 w-3 shrink-0 text-charcoal/50 transition-transform duration-150 group-data-[expanded]:rotate-90",
})

const panel = tv({
    base: "h-(--disclosure-panel-height) overflow-clip border-t border-sand/60 motion-safe:transition-[height] motion-safe:duration-250",
})

const panelInner = tv({ base: "px-4 py-3 text-sm text-charcoal/80" })

export interface DisclosureProps extends Omit<AriaDisclosureProps, "className"> {
    className?: string
}

export function Disclosure({ className, ...props }: DisclosureProps) {
    return <AriaDisclosure className={root({ className })} {...props} />
}

Disclosure.Trigger = function DisclosureTrigger({
                                                    className,
                                                    children,
                                                    ...props
                                                }: Omit<AriaButtonProps, "className" | "children"> & {
    className?: string
    children: ReactNode
}) {
    return (
        <Heading className="m-0">
            <AriaButton slot="trigger" className={trigger({ className })} {...props}>
                <svg viewBox="0 0 12 12" fill="none" className={chevron({})}>
                    <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {children}
            </AriaButton>
        </Heading>
    )
}

export interface DisclosurePanelProps {
    className?: string
    children: ReactNode
}

Disclosure.Panel = function DisclosurePanel({ className, children }: DisclosurePanelProps) {
    return (
        <AriaDisclosurePanel className={panel({ className })}>
            <div className={panelInner({})}>{children}</div>
        </AriaDisclosurePanel>
    )
}