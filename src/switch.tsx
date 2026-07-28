import {
    SwitchField as AriaSwitchField,
    SwitchButton as AriaSwitchButton,
    type SwitchFieldProps as AriaSwitchFieldProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import type { ReactNode } from "react"

const button = tv({
    base: "group flex items-center gap-2 text-sm text-charcoal outline-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
})

const track = tv({
    base: "flex h-6 w-10 shrink-0 items-center rounded-full bg-sand px-0.5 transition-colors group-data-[selected]:bg-accent group-data-[focus-visible]:outline-2 group-data-[focus-visible]:outline-offset-2 group-data-[focus-visible]:outline-accent",
})

const thumb = tv({
    base: "h-5 w-5 rounded-full bg-cream shadow-sm transition-transform duration-150 group-data-[selected]:translate-x-4",
})

export interface SwitchProps extends Omit<AriaSwitchFieldProps, "className" | "children"> {
    className?: string
    children: ReactNode
}

export function Switch({ className, children, ...props }: SwitchProps) {
    return (
        <AriaSwitchField {...props}>
            <AriaSwitchButton className={button({ className })}>
                <span className={track({})}>
                    <span className={thumb({})} />
                </span>
                {children}
            </AriaSwitchButton>
        </AriaSwitchField>
    )
}