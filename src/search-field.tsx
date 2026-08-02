// src/search-field.tsx
import {
    SearchField as AriaSearchField,
    Input as AriaInput,
    Button as AriaButton,
    type SearchFieldProps as AriaSearchFieldProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"

const field = tv({
    base: "group relative flex w-full items-center",
})

const input = tv({
    base: "w-full rounded-xl border-[1.5px] border-sand bg-cream py-2 pl-9 pr-8 text-sm text-charcoal outline-none transition-colors placeholder:text-charcoal/40 focus:border-charcoal focus:ring-2 focus:ring-charcoal/20 disabled:opacity-50 disabled:cursor-not-allowed",
})

const icon = tv({
    base: "pointer-events-none absolute left-3 h-4 w-4 text-charcoal/40",
})

const clearBtn = tv({
    base: "absolute right-2 flex h-5 w-5 items-center justify-center rounded-full text-charcoal/40 transition-colors hover:bg-sand/60 hover:text-charcoal group-data-[empty]:invisible",
})

export interface SearchFieldProps extends Omit<AriaSearchFieldProps, "className"> {
    className?: string
    placeholder?: string
}

export function SearchField({ className, placeholder = "Search…", ...props }: SearchFieldProps) {
    return (
        <AriaSearchField className={field({ className })} {...props}>
            <svg
                className={icon()}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
            >
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
            </svg>
            <AriaInput className={input()} placeholder={placeholder} />
            <AriaButton className={clearBtn()} aria-label="Clear search">
                ✕
            </AriaButton>
        </AriaSearchField>
    )
}