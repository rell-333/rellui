import {
    Autocomplete as AriaAutocomplete,
    useFilter,
    TextField as AriaTextField,
    Input as AriaInput,
    ListBox as AriaListBox,
    ListBoxItem as AriaListBoxItem,
    type AutocompleteProps as AriaAutocompleteProps,
    type ListBoxProps as AriaListBoxProps,
    type ListBoxItemProps as AriaListBoxItemProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import type { ReactNode } from "react"

const inputWrap = tv({
    base: "flex items-center rounded-xl border-[1.5px] border-sand bg-cream px-3 py-2 outline-none transition-colors data-[focus-within]:border-charcoal data-[focus-within]:ring-2 data-[focus-within]:ring-charcoal/20",
})

const input = tv({
    base: "w-full bg-transparent text-sm text-charcoal outline-none placeholder:text-charcoal/40",
})

const list = tv({ base: "mt-2 flex max-h-64 flex-col gap-0.5 overflow-auto outline-none" })

const item = tv({
    base: "flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm outline-none transition-colors data-[hovered]:bg-sand/40 data-[focused]:bg-sand/40 data-[selected]:font-semibold data-[disabled]:cursor-not-allowed data-[disabled]:opacity-40",
})

export interface AutocompleteProps extends Omit<AriaAutocompleteProps, "children"> {
    placeholder?: string
    "aria-label"?: string
    children: ReactNode
}

export function Autocomplete({ placeholder, "aria-label": ariaLabel, children, ...props }: AutocompleteProps) {
    const { contains } = useFilter({ sensitivity: "base" })
    return (
        <AriaAutocomplete filter={contains} {...props}>
            <AriaTextField aria-label={ariaLabel ?? placeholder ?? "Search"} className={inputWrap({})}>
                <AriaInput placeholder={placeholder ?? "Search..."} className={input({})} />
            </AriaTextField>
            {children}
        </AriaAutocomplete>
    )
}

Autocomplete.List = function AutocompleteList<T extends object>({
                                                                    className,
                                                                    ...props
                                                                }: Omit<AriaListBoxProps<T>, "className"> & { className?: string }) {
    return <AriaListBox className={list({ className })} {...props} />
}

Autocomplete.Item = function AutocompleteItem({
                                                  className,
                                                  ...props
                                              }: Omit<AriaListBoxItemProps, "className"> & { className?: string }) {
    return <AriaListBoxItem className={item({ className })} {...props} />
}