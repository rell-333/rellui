import {
    Checkbox as AriaCheckbox,
    type CheckboxProps as AriaCheckboxProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"

const root = tv({
    base: "group flex items-center gap-2 text-sm text-charcoal outline-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
})

const box = tv({
    base: "flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 border-sand bg-cream transition-colors group-data-[selected]:border-accent group-data-[selected]:bg-accent group-data-[indeterminate]:border-accent group-data-[indeterminate]:bg-accent group-data-[focus-visible]:outline-2 group-data-[focus-visible]:outline-offset-2 group-data-[focus-visible]:outline-accent",
})

const check = tv({
    base: "h-3 w-3 scale-50 text-cream opacity-0 transition-all duration-150 group-data-[selected]:scale-100 group-data-[selected]:opacity-100 group-data-[indeterminate]:scale-100 group-data-[indeterminate]:opacity-100",
})

export interface CheckboxProps extends Omit<AriaCheckboxProps, "className"> {
    className?: string
}

export function Checkbox({ className, children, ...props }: CheckboxProps) {
    return (
        <AriaCheckbox className={root({ className })} {...props}>
            {({ isIndeterminate }) => (
                <>
                    <div className={box({})}>
                        <svg viewBox="0 0 12 12" fill="none" className={check({})}>
                            {isIndeterminate ? (
                                <path d="M2 6h8" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                            ) : (
                                <path
                                    d="M2 6.5L4.5 9L10 3"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            )}
                        </svg>
                    </div>
                    {children}
                </>
            )}
        </AriaCheckbox>
    )
}