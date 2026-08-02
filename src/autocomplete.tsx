"use client"

import {
    Autocomplete as AriaAutocomplete,
    useFilter,
    TextField as AriaTextField,
    Input as AriaInput,
    ListBox as AriaListBox,
    ListBoxItem as AriaListBoxItem,
    Button as AriaButton,
    Popover as AriaPopover,
    type ListBoxItemProps as AriaListBoxItemProps,
    type Key,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import { createContext, useContext, useRef, useState, type RefObject, type ReactNode } from "react"

interface AutocompleteContextValue {
    isOpen: boolean
    setIsOpen: (open: boolean) => void
    selectedKey: Key | null
    onSelectionChange: (key: Key | null) => void
    triggerRef: RefObject<HTMLButtonElement | null>
}

const AutocompleteContext = createContext<AutocompleteContextValue | null>(null)

function useAutocompleteContext() {
    const ctx = useContext(AutocompleteContext)
    if (!ctx) throw new Error("Autocomplete.* components must be used inside <Autocomplete>")
    return ctx
}

const triggerButton = tv({
    base: "flex w-full items-center justify-between gap-2 rounded-xl border-[1.5px] border-sand bg-cream px-3 py-2 text-sm text-charcoal outline-none transition-colors data-[hovered]:border-charcoal/40 data-[focus-visible]:border-charcoal data-[focus-visible]:ring-2 data-[focus-visible]:ring-charcoal/20 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
})
const valueText = tv({ base: "flex-1 truncate text-left" })
const placeholderText = tv({ base: "flex-1 truncate text-left text-charcoal/40" })
const clearBtn = tv({
    base: "flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-charcoal/40 transition-colors hover:bg-sand/60 hover:text-charcoal",
})
const indicator = tv({ base: "shrink-0 text-charcoal/40" })
const popover = tv({
    base: "w-[--trigger-width] overflow-hidden rounded-xl border border-sand bg-cream p-2 shadow-lg outline-none data-[entering]:animate-[modal-fade-in_120ms_ease-out] data-[exiting]:animate-[modal-fade-out_100ms_ease-in]",
})
const searchWrap = tv({
    base: "mb-2 flex items-center rounded-lg border-[1.5px] border-sand bg-cream px-2 py-1.5 outline-none transition-colors data-[focus-within]:border-charcoal",
})
const searchInput = tv({ base: "w-full bg-transparent text-sm text-charcoal outline-none placeholder:text-charcoal/40" })
const list = tv({ base: "flex max-h-64 flex-col gap-0.5 overflow-auto outline-none" })
const item = tv({
    base: "flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm outline-none transition-colors data-[hovered]:bg-sand/40 data-[focused]:bg-sand/40 data-[selected]:font-semibold data-[disabled]:cursor-not-allowed data-[disabled]:opacity-40",
})

export interface AutocompleteProps {
    selectedKey?: Key | null
    onSelectionChange?: (key: Key | null) => void
    children: ReactNode
}

export function Autocomplete({ selectedKey = null, onSelectionChange, children }: AutocompleteProps) {
    const [isOpen, setIsOpen] = useState(false)
    const triggerRef = useRef<HTMLButtonElement>(null)

    return (
        <AutocompleteContext.Provider
            value={{ isOpen, setIsOpen, selectedKey, onSelectionChange: onSelectionChange ?? (() => {}), triggerRef }}
        >
            <div className="relative">{children}</div>
        </AutocompleteContext.Provider>
    )
}

Autocomplete.Trigger = function AutocompleteTrigger({ className, children }: { className?: string; children: ReactNode }) {
    const { isOpen, setIsOpen, triggerRef } = useAutocompleteContext()
    return (
        <AriaButton ref={triggerRef} className={triggerButton({ className })} onPress={() => setIsOpen(!isOpen)}>
            {children}
        </AriaButton>
    )
}

Autocomplete.Value = function AutocompleteValue({ placeholder = "Select…", children }: { placeholder?: string; children?: ReactNode }) {
    const { selectedKey } = useAutocompleteContext()
    if (!selectedKey || !children) return <span className={placeholderText()}>{placeholder}</span>
    return <span className={valueText()}>{children}</span>
}

Autocomplete.ClearButton = function AutocompleteClearButton({ className }: { className?: string }) {
    const { selectedKey, onSelectionChange } = useAutocompleteContext()
    if (!selectedKey) return null
    return (
        <AriaButton className={clearBtn({ className })} aria-label="Clear selection" onPress={() => onSelectionChange(null)}>
            ✕
        </AriaButton>
    )
}

Autocomplete.Indicator = function AutocompleteIndicator({ className }: { className?: string }) {
    return (
        <svg className={indicator({ className })} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="m6 9 6 6 6-6" />
        </svg>
    )
}

Autocomplete.Popover = function AutocompletePopover({ className, children }: { className?: string; children: ReactNode }) {
    const { isOpen, setIsOpen, triggerRef } = useAutocompleteContext()
    const { contains } = useFilter({ sensitivity: "base" })

    return (
        <AriaPopover isOpen={isOpen} onOpenChange={setIsOpen} triggerRef={triggerRef} className={popover({ className })}>
            <AriaAutocomplete filter={contains}>
                <AriaTextField aria-label="Search" className={searchWrap({})}>
                    <AriaInput placeholder="Search..." className={searchInput({})} />
                </AriaTextField>
                {children}
            </AriaAutocomplete>
        </AriaPopover>
    )
}

Autocomplete.List = function AutocompleteList({
                                                  className,
                                                  children,
                                                  renderEmptyState,
                                              }: {
    className?: string
    children: ReactNode
    renderEmptyState?: () => ReactNode
}) {
    const { selectedKey, onSelectionChange, setIsOpen } = useAutocompleteContext()
    return (
        <AriaListBox
            className={list({ className })}
            selectionMode="single"
            selectedKeys={selectedKey ? [selectedKey] : []}
            onSelectionChange={(keys) => {
                const key = Array.from(keys)[0] ?? null
                onSelectionChange(key)
                setIsOpen(false)
            }}
            renderEmptyState={renderEmptyState}
        >
            {children}
        </AriaListBox>
    )
}

Autocomplete.Item = function AutocompleteItem({ className, ...props }: Omit<AriaListBoxItemProps, "className"> & { className?: string }) {
    return <AriaListBoxItem className={item({ className })} {...props} />
}