import {
    DateField as AriaDateField,
    DateInput as AriaDateInput,
    DateSegment as AriaDateSegment,
    Label,
    Text,
    FieldError,
    type DateFieldProps as AriaDateFieldProps,
    type DateValue,
} from "react-aria-components"
import { tv } from "tailwind-variants"

const group = tv({
    base: "flex w-fit items-center rounded-xl border-[1.5px] border-sand bg-cream px-3 py-2 text-sm text-charcoal outline-none transition-colors focus-within:border-charcoal focus-within:ring-2 focus-within:ring-charcoal/20 data-[invalid]:border-clay data-[invalid]:ring-clay/20",
})

const segment = tv({
    base: "rounded px-0.5 tabular-nums outline-none data-[placeholder]:text-charcoal/40 data-[focused]:bg-accent data-[focused]:text-cream data-[disabled]:opacity-50",
})

export interface DateFieldProps<T extends DateValue> extends Omit<AriaDateFieldProps<T>, "className"> {
    label?: string
    description?: string
    className?: string
}

export function DateField<T extends DateValue>({
                                                   label,
                                                   description,
                                                   className,
                                                   ...props
                                               }: DateFieldProps<T>) {
    return (
        <AriaDateField className="flex flex-col gap-1.5" {...props}>
            {label && <Label className="text-sm font-medium text-charcoal">{label}</Label>}
            <AriaDateInput className={group({ className })}>
                {(seg) => <AriaDateSegment segment={seg} className={segment({})} />}
            </AriaDateInput>
            {description && (
                <Text slot="description" className="text-xs text-charcoal/60">
                    {description}
                </Text>
            )}
            <FieldError className="text-xs text-clay" />
        </AriaDateField>
    )
}