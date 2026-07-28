import {
    Tabs as AriaTabs,
    TabList as AriaTabList,
    Tab as AriaTab,
    TabPanels as AriaTabPanels,
    TabPanel as AriaTabPanel,
    SelectionIndicator,
    type TabsProps as AriaTabsProps,
    type TabListProps as AriaTabListProps,
    type TabProps as AriaTabProps,
    type TabPanelsProps as AriaTabPanelsProps,
    type TabPanelProps as AriaTabPanelProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import type { ReactNode } from "react"

const root = tv({
    base: "flex gap-2 data-[orientation=horizontal]:flex-col data-[orientation=vertical]:flex-row",
})

const list = tv({
    base: "flex overflow-x-auto pb-2 overflow-y-clip [scrollbar-width:none] data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:border-b data-[orientation=horizontal]:border-sand data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:border-r data-[orientation=vertical]:border-sand",
})

const tab = tv({
    base: "group relative flex cursor-pointer items-center rounded-full px-4 py-1.5 text-sm font-medium text-charcoal/60 outline-none transition-colors data-[hovered]:text-charcoal data-[selected]:text-cream data-[disabled]:cursor-not-allowed data-[disabled]:text-charcoal/20",
})

const indicator = tv({
    base: "absolute inset-0 rounded-full bg-accent motion-safe:transition-[translate,width,height] group-data-[disabled]:bg-sand",
})

const panels = tv({ base: "outline-none" })

const panel = tv({
    base: "p-3 text-sm text-charcoal outline-none transition-opacity duration-150 data-[entering]:opacity-0",
})
export interface TabProps extends Omit<AriaTabProps, "className" | "children"> {
    className?: string
    children: ReactNode
}

export interface TabsProps extends Omit<AriaTabsProps, "className"> {
    className?: string
}

export function Tabs({ className, ...props }: TabsProps) {
    return <AriaTabs className={root({ className })} {...props} />
}

Tabs.List = function TabList<T extends object>({
                                                   className,
                                                   ...props
                                               }: Omit<AriaTabListProps<T>, "className"> & { className?: string }) {
    return <AriaTabList className={list({ className })} {...props} />
}

Tabs.Tab = function Tab({ className, children, ...props }: TabProps) {
    return (
        <AriaTab className={tab({ className })} {...props}>
            <SelectionIndicator className={indicator({})} />
            <span className="relative">{children}</span>
        </AriaTab>
    )
}

Tabs.Panels = function TabPanels<T extends object>({
                                                       className,
                                                       ...props
                                                   }: Omit<AriaTabPanelsProps<T>, "className"> & { className?: string }) {
    return <AriaTabPanels className={panels({ className })} {...props} />
}

Tabs.Panel = function TabPanel({
                                   className,
                                   ...props
                               }: Omit<AriaTabPanelProps, "className"> & { className?: string }) {
    return <AriaTabPanel className={panel({ className })} {...props} />
}