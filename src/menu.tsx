import {
    MenuTrigger,
    Popover as AriaPopover,
    Menu as AriaMenu,
    MenuItem as AriaMenuItem,
    type MenuTriggerProps,
    type PopoverProps as AriaPopoverProps,
    type MenuProps as AriaMenuProps,
    type MenuItemProps as AriaMenuItemProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"

const popover = tv({
    base: "min-w-[180px] overflow-hidden rounded-xl border border-sand bg-cream p-1 text-charcoal shadow-lg outline-none data-[entering]:animate-[modal-fade-in_120ms_ease-out] data-[exiting]:animate-[modal-fade-out_100ms_ease-in]",
})

const list = tv({ base: "flex flex-col gap-0.5 outline-none" })

const item = tv({
    base: "flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm outline-none transition-colors data-[disabled]:cursor-not-allowed data-[disabled]:opacity-40",
    variants: {
        variant: {
            default: "text-charcoal data-[hovered]:bg-sand/40 data-[focused]:bg-sand/40",
            danger: "text-danger data-[hovered]:bg-danger/10 data-[focused]:bg-danger/10",
        },
    },
    defaultVariants: { variant: "default" },
})

export interface MenuProps extends MenuTriggerProps {}

export function Menu(props: MenuProps) {
    return <MenuTrigger {...props} />
}

Menu.Popover = function MenuPopover({
                                        className,
                                        ...props
                                    }: Omit<AriaPopoverProps, "className"> & { className?: string }) {
    return <AriaPopover className={popover({ className })} {...props} />
}

Menu.List = function MenuList<T extends object>({
                                                    className,
                                                    ...props
                                                }: Omit<AriaMenuProps<T>, "className"> & { className?: string }) {
    return <AriaMenu className={list({ className })} {...props} />
}

Menu.Item = function MenuItem({
                                  variant,
                                  className,
                                  ...props
                              }: Omit<AriaMenuItemProps, "className"> & {
    variant?: "default" | "danger"
    className?: string
}) {
    return <AriaMenuItem className={item({ variant, className })} {...props} />
}