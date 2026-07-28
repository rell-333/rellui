import type { ReactNode } from "react"
import {
    DatePicker as AriaDatePicker,
    Group as AriaGroup,
    DateInput as AriaDateInput,
    DateSegment as AriaDateSegment,
    Popover as AriaPopover,
    Dialog as AriaDialog,
    Button as AriaButton,
    Label,
    Text,
    FieldError,
    type DatePickerProps as AriaDatePickerProps,
    type DateValue,
} from "react-aria-components"
import { tv } from "tailwind-variants"

const group = tv({
    base: "flex items-center gap-2 rounded-xl border-[1.5px] border-sand bg-cream px-3 py-2 text-sm text-charcoal outline-none transition-colors data-[focus-within]:border-charcoal data-[focus-within]:ring-2 data-[focus-within]:ring-charcoal/20 data-[invalid]:border-clay data-[invalid]:ring-clay/20",
})

const segment = tv({
    base: "rounded px-0.5 tabular-nums outline-none data-[placeholder]:text-charcoal/40 data-[focused]:bg-accent data-[focused]:text-cream data-[disabled]:opacity-50",
})

const triggerBtn = tv({
    base: "ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-charcoal/50 outline-none transition-colors data-[hovered]:bg-sand/50 data-[hovered]:text-charcoal data-[pressed]:bg-sand/70",
})

const popover = tv({
    base: "rounded-2xl border border-sand bg-cream p-4 text-charcoal shadow-lg outline-none data-[entering]:animate-[modal-fade-in_150ms_ease-out] data-[exiting]:animate-[modal-fade-out_120ms_ease-in]",
})

export interface DatePickerProps<T extends DateValue> extends Omit<AriaDatePickerProps<T>, "className"> {
    label?: string
    description?: string
    className?: string
    children: ReactNode
}

export function DatePicker<T extends DateValue>({
                                                    label,
                                                    description,
                                                    className,
                                                    children,
                                                    ...props
                                                }: DatePickerProps<T>) {
    return (
        <AriaDatePicker className={`flex flex-col gap-1.5 ${className ?? ""}`} {...props}>
            {label && <Label className="text-sm font-medium text-charcoal">{label}</Label>}
            <AriaGroup className={group({})}>
                <AriaDateInput className="flex flex-1">
                    {(seg) => <AriaDateSegment segment={seg} className={segment({})} />}
                </AriaDateInput>
                <AriaButton className={triggerBtn({})}>▾</AriaButton>
            </AriaGroup>
            {description && (
                <Text slot="description" className="text-xs text-charcoal/60">
                    {description}
                </Text>
            )}
            <FieldError className="text-xs text-clay" />
            <AriaPopover className={popover({})}>
                <AriaDialog className="outline-none">{children}</AriaDialog>
            </AriaPopover>
        </AriaDatePicker>
    )
}