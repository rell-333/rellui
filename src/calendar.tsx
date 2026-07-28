import {
    Calendar as AriaCalendar,
    CalendarGrid as AriaCalendarGrid,
    CalendarGridHeader as AriaCalendarGridHeader,
    CalendarHeaderCell as AriaCalendarHeaderCell,
    CalendarGridBody as AriaCalendarGridBody,
    CalendarCell as AriaCalendarCell,
    CalendarHeading as AriaCalendarHeading,
    Button as AriaButton,
    type CalendarProps as AriaCalendarProps,
    type CalendarGridProps as AriaCalendarGridProps,
    type CalendarGridBodyProps as AriaCalendarGridBodyProps,
    type CalendarCellProps as AriaCalendarCellProps,
    type ButtonProps as AriaButtonProps,
} from "react-aria-components"
import type { DateValue } from "react-aria-components"
import { tv } from "tailwind-variants"
import type { HTMLAttributes, ReactElement } from "react"

const root = tv({ base: "w-fit" })
const header = tv({ base: "mb-3 flex items-center justify-between gap-2" })
const heading = tv({ base: "text-sm font-semibold text-charcoal" })
const navBtn = tv({
    base: "flex h-7 w-7 items-center justify-center rounded-full text-charcoal/60 outline-none transition-colors data-[hovered]:bg-sand/50 data-[hovered]:text-charcoal data-[disabled]:opacity-30",
})
const grid = tv({ base: "border-collapse" })
const headerCell = tv({ base: "pb-1 text-xs font-semibold text-charcoal/40" })
const cell = tv({
    base: "flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-sm text-charcoal outline-none data-[hovered]:bg-sand/50 data-[hovered]:transition-colors data-[hovered]:duration-150 data-[selected]:bg-accent data-[selected]:text-cream data-[unavailable]:cursor-not-allowed data-[unavailable]:text-charcoal/20 data-[disabled]:cursor-not-allowed data-[disabled]:text-charcoal/20 data-[outside-month]:text-charcoal/25 data-[focus-visible]:outline-2 data-[focus-visible]:outline-offset-2 data-[focus-visible]:outline-accent",
})

type DivProps = Omit<HTMLAttributes<HTMLDivElement>, "className"> & { className?: string }

export interface CalendarProps<T extends DateValue> extends Omit<AriaCalendarProps<T>, "className"> {
    className?: string
}

export function Calendar<T extends DateValue>({ className, ...props }: CalendarProps<T>) {
    return <AriaCalendar className={root({ className })} {...props} />
}

Calendar.Header = function CalendarHeader({ className, ...props }: DivProps) {
    return <div className={header({ className })} {...props} />
}

Calendar.Heading = function CalendarHeading({ className, ...props }: DivProps) {
    return <AriaCalendarHeading className={heading({ className })} {...props} />
}

Calendar.NavButton = function CalendarNavButton({
                                                    className,
                                                    ...props
                                                }: Omit<AriaButtonProps, "className"> & { className?: string }) {
    return <AriaButton className={navBtn({ className })} {...props} />
}

Calendar.Grid = function CalendarGrid({
                                          className,
                                          ...props
                                      }: Omit<AriaCalendarGridProps, "className"> & { className?: string }) {
    return <AriaCalendarGrid className={grid({ className })} {...props} />
}

Calendar.GridHeader = function CalendarGridHeader({
                                                      children,
                                                  }: {
    children: (day: string) => ReactElement
}) {
    return <AriaCalendarGridHeader>{children}</AriaCalendarGridHeader>
}

Calendar.HeaderCell = function CalendarHeaderCell({ className, ...props }: DivProps) {
    return <AriaCalendarHeaderCell className={headerCell({ className })} {...props} />
}

Calendar.GridBody = function CalendarGridBody({
                                                  className,
                                                  ...props
                                              }: Omit<AriaCalendarGridBodyProps, "className"> & { className?: string }) {
    return <AriaCalendarGridBody className={className} {...props} />
}

Calendar.Cell = function CalendarCell({
                                          className,
                                          ...props
                                      }: Omit<AriaCalendarCellProps, "className"> & { className?: string }) {
    return <AriaCalendarCell className={cell({ className })} {...props} />
}