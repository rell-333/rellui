import {
    Select as AriaSelect,
    SelectValue,
    Button as AriaButton,
    Popover as AriaPopover,
    ListBox as AriaListBox,
    ListBoxItem as AriaListBoxItem,
    Label,
    Text,
    FieldError,
    type SelectProps as AriaSelectProps,
    type ListBoxItemProps as AriaListBoxItemProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import type { ReactNode } from "react"

const root = tv({ base: "flex flex-col gap-1.5" })

const trigger = tv({
    base: "flex w-full items-center gap-2 rounded-xl border-[1.5px] border-sand bg-cream px-3 py-2 text-left text-sm text-charcoal outline-none transition-colors data-[hovered]:border-charcoal/30 data-[pressed]:bg-sand/20 data-[focus-visible]:border-charcoal data-[focus-visible]:ring-2 data-[focus-visible]:ring-charcoal/20 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
})

const value = tv({
    base: "flex-1 truncate",
    variants: {
        placeholder: {
            true: "text-charcoal/40",
        },
    },
})

const chevron = tv({ base: "h-3 w-3 shrink-0 text-charcoal/50" })

const popover = tv({
    base: "min-w-(--trigger-width) overflow-hidden rounded-xl border border-sand bg-cream p-1 text-charcoal shadow-lg outline-none data-[entering]:animate-[modal-fade-in_120ms_ease-out] data-[exiting]:animate-[modal-fade-out_100ms_ease-in]",
})

const listbox = tv({ base: "flex max-h-64 flex-col gap-0.5 overflow-auto outline-none" })

const item = tv({
    base: "flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm outline-none transition-colors data-[hovered]:bg-sand/40 data-[focused]:bg-sand/40 data-[selected]:font-semibold data-[disabled]:cursor-not-allowed data-[disabled]:opacity-40",
})

export interface SelectProps<T extends object> extends Omit<AriaSelectProps<T>, "className" | "children"> {
    label?: string
    description?: string
    className?: string
    children: ReactNode | ((item: T) => ReactNode)
    items?: Iterable<T>
}

export function Select<T extends object>({
                                             label,
                                             description,
                                             className,
                                             children,
                                             items,
                                             ...props
                                         }: SelectProps<T>) {
    return (
        <AriaSelect className={root({ className })} {...props}>
            {label && <Label className="text-sm font-medium text-charcoal">{label}</Label>}
            <AriaButton className={trigger({})}>
                <SelectValue className={value({})} />
                <svg viewBox="0 0 12 12" fill="none" className={chevron({})}>
                    <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </AriaButton>
            {description && (
                <Text slot="description" className="text-xs text-charcoal/60">
                    {description}
                </Text>
            )}
            <FieldError className="text-xs text-clay" />
            <AriaPopover className={popover({})}>
                <AriaListBox className={listbox({})} items={items}>
                    {children}
                </AriaListBox>
            </AriaPopover>
        </AriaSelect>
    )
}

export interface SelectItemProps extends Omit<AriaListBoxItemProps, "className"> {
    className?: string
}

Select.Item = function SelectItem({ className, ...props }: SelectItemProps) {
    return <AriaListBoxItem className={item({ className })} {...props} />
}