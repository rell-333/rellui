import { Button as AriaButton, type ButtonProps as AriaButtonProps } from "react-aria-components"
import { tv, type VariantProps } from "tailwind-variants"

const button = tv({
    base: "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-150 ease-out outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed data-[pressed]:scale-90",
    variants: {
        variant: {
            primary: "bg-charcoal text-cream hover:opacity-90 focus-visible:ring-charcoal",
            secondary: "bg-sand text-charcoal hover:opacity-90 focus-visible:ring-sand",
            danger: "bg-danger text-white hover:opacity-90 focus-visible:ring-danger",
        },
        size: {
            sm: "px-3 py-1.5 text-sm",
            md: "px-4 py-2 text-base",
            lg: "px-6 py-3 text-lg"
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
    },
})

export interface ButtonProps extends Omit<AriaButtonProps, "className">,
    VariantProps<typeof button> {
    className?: string
}

export function Button({ variant, size, className, ...props }: ButtonProps) {
    return <AriaButton className={button({variant, size, className})} {...props}/>
}