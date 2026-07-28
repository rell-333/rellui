import {
    RadioGroup as AriaRadioGroup,
    RadioField as AriaRadioField,
    RadioButton as AriaRadioButton,
    Label,
    Text,
    FieldError,
    type RadioGroupProps as AriaRadioGroupProps,
    type RadioFieldProps as AriaRadioFieldProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import type { ReactNode } from "react"

const group = tv({ base: "flex flex-col gap-2" })
const itemsRow = tv({
    base: "flex gap-4",
    variants: {
        orientation: {
            horizontal: "flex-row flex-wrap",
            vertical: "flex-col",
        },
    },
    defaultVariants: { orientation: "vertical" },
})

const radioButton = tv({
    base: "group flex items-center gap-2 text-sm text-charcoal outline-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
})

const dot = tv({
    base: "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-sand bg-cream transition-colors group-data-[selected]:border-accent group-data-[focus-visible]:outline-2 group-data-[focus-visible]:outline-offset-2 group-data-[focus-visible]:outline-accent",
})

const dotInner = tv({
    base: "h-2.5 w-2.5 scale-0 rounded-full bg-accent transition-transform duration-150 group-data-[selected]:scale-100",
})

export interface RadioGroupProps extends Omit<AriaRadioGroupProps, "className" | "children"> {
    label?: string
    description?: string
    className?: string
    children: ReactNode
}

export function RadioGroup({ label, description, className, children, ...props }: RadioGroupProps) {
    return (
        <AriaRadioGroup className={group({ className })} {...props}>
            {(renderProps) => (
                <>
                    {label && <Label className="text-sm font-medium text-charcoal">{label}</Label>}
                    <div className={itemsRow({ orientation: renderProps.orientation })}>
                        {children}
                    </div>
                    {description && (
                        <Text slot="description" className="text-xs text-charcoal/60">
                            {description}
                        </Text>
                    )}
                    <FieldError className="text-xs text-clay" />
                </>
            )}
        </AriaRadioGroup>
    )
}

export interface RadioProps extends Omit<AriaRadioFieldProps, "className" | "children"> {
    description?: string
    className?: string
    children: ReactNode
}

export function Radio({ className, description, children, ...props }: RadioProps) {
    return (
        <AriaRadioField className="flex flex-col gap-1" {...props}>
            <AriaRadioButton className={radioButton({ className })}>
                <span className={dot({})}>
                    <span className={dotInner({})} />
                </span>
                {children}
            </AriaRadioButton>
            {description && (
                <Text slot="description" className="ml-6.5 text-xs text-charcoal/60">
                    {description}
                </Text>
            )}
        </AriaRadioField>
    )
}