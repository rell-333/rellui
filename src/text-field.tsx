import {
    TextField as AriaTextField,
    Label,
    Input as AriaInput,
    Text,
    FieldError,
    type TextFieldProps as AriaTextFieldProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import type { InputHTMLAttributes } from "react"

const input = tv({
    base: "w-full rounded-xl border-[1.5px] border-sand bg-cream px-3 py-2 text-sm text-charcoal outline-none transition-colors placeholder:text-charcoal/40 focus:border-charcoal focus:ring-2 focus:ring-charcoal/20 data-[invalid]:border-clay data-[invalid]:ring-clay/20 disabled:opacity-50 disabled:cursor-not-allowed",
})

export interface TextFieldProps extends Omit<AriaTextFieldProps, "className"> {
    label?: string
    description?: string
    placeholder?: string
    type?: InputHTMLAttributes<HTMLInputElement>["type"]
    className?: string
}

export function TextField({ label, description, placeholder, type, className, ...props }: TextFieldProps) {
    return (
        <AriaTextField className="flex flex-col gap-1" {...props}>
            {label && <Label className="text-sm font-medium text-charcoal">{label}</Label>}
            <AriaInput
                placeholder={placeholder}
                type={type}
                className={input({ className })}
            />
            {description && (
                <Text slot="description" className="text-xs text-charcoal/60">
                    {description}
                </Text>
            )}
            <FieldError className="text-xs text-clay" />
        </AriaTextField>
    )
}