import { createContext, useContext, type ComponentProps, type HTMLAttributes, type ReactNode } from "react"
import {
    DialogTrigger,
    ModalOverlay,
    Modal as AriaModal,
    Dialog as AriaDialog,
    Heading,
    Button as AriaButton,
    type ButtonProps as AriaButtonProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"

export const ModalCloseContext = createContext<() => void>(() => {})

const trigger = tv({
    base: "border-0 bg-transparent p-0 text-charcoal",
    variants: {
        variant: {
            block: "block w-full text-left",
            inline: "inline-flex w-auto items-center justify-center",
        },
    },
    defaultVariants: { variant: "block" },
})

const backdrop = tv({
    base: "fixed inset-0 z-50 flex items-center justify-center p-4 data-[entering]:animate-[modal-fade-in_150ms_ease-out] data-[exiting]:animate-[modal-fade-out_150ms_ease-in]",
    variants: {
        variant: {
            dark: "bg-charcoal/50",
            blur: "bg-charcoal/30 backdrop-blur-md",
        },
    },
    defaultVariants: { variant: "dark" },
})

const container = tv({
    base: "w-full outline-none data-[entering]:animate-[modal-pop-in_180ms_ease-out] data-[exiting]:animate-[modal-pop-out_150ms_ease-in]",
    variants: {
        size: {
            sm: "max-w-sm",
            md: "max-w-md",
            lg: "max-w-lg",
            cover: "max-h-[90vh] max-w-4xl",
            xl: "max-h-[90vh] max-w-7xl",
        },
    },
    defaultVariants: { size: "md" },
})

const dialogPanel = tv({
    base: "relative flex max-h-full flex-col rounded-2xl bg-cream p-6 text-charcoal shadow-xl outline-none",
})

const closeBtn = tv({
    base: "absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-charcoal/50 transition-colors hover:bg-sand/50 hover:text-charcoal",
})

const header = tv({ base: "flex flex-col gap-1 pb-4" })
const heading = tv({ base: "text-lg font-semibold text-charcoal" })
const body = tv({ base: "flex flex-1 flex-col gap-3 overflow-y-auto text-sm text-charcoal/80" })
const footer = tv({ base: "flex items-center justify-end gap-2 pt-5" })

type DivProps = Omit<HTMLAttributes<HTMLDivElement>, "className"> & { className?: string }

export interface ModalProps {
    children: ReactNode
    isOpen?: boolean
    defaultOpen?: boolean
    onOpenChange?: (isOpen: boolean) => void
}

export function Modal({ children, ...props }: ModalProps) {
    return <DialogTrigger {...props}>{children}</DialogTrigger>
}

Modal.Trigger = function ModalTrigger({
                                          variant,
                                          className,
                                          ...props
                                      }: Omit<AriaButtonProps, "className"> & {
    variant?: "block" | "inline"
    className?: string
}) {
    return <AriaButton className={trigger({ variant, className })} {...props} />
}

Modal.Backdrop = function ModalBackdrop({
                                            variant,
                                            className,
                                            ...props
                                        }: Omit<ComponentProps<typeof ModalOverlay>, "className"> & {
    variant?: "dark" | "blur"
    className?: string
}) {
    return <ModalOverlay className={backdrop({ variant, className })} {...props} />
}

Modal.Container = function ModalContainer({
                                              size,
                                              className,
                                              ...props
                                          }: Omit<ComponentProps<typeof AriaModal>, "className"> & {
    size?: "sm" | "md" | "lg" | "cover"
    className?: string
}) {
    return <AriaModal className={container({ size, className })} {...props} />
}

export interface ModalDialogProps {
    className?: string
    children: ReactNode
}

Modal.Dialog = function ModalDialog({ className, children }: ModalDialogProps) {
    return (
        <AriaDialog className={dialogPanel({ className })}>
            {({ close }) => (
                <ModalCloseContext.Provider value={close}>
                    {children}
                </ModalCloseContext.Provider>
            )}
        </AriaDialog>
    )
}

Modal.CloseTrigger = function ModalCloseTrigger({
                                                    className,
                                                    children,
                                                    ...props
                                                }: Omit<AriaButtonProps, "className"> & { className?: string }) {
    const close = useContext(ModalCloseContext)
    return (
        <AriaButton onPress={close} aria-label="Close" className={closeBtn({ className })} {...props}>
            {children ?? "✕"}
        </AriaButton>
    )
}

Modal.Header = function ModalHeader({ className, ...props }: DivProps) {
    return <div className={header({ className })} {...props} />
}

Modal.Heading = function ModalHeading({ className, ...props }: DivProps) {
    return <Heading slot="title" className={heading({ className })} {...props} />
}

Modal.Body = function ModalBody({ className, ...props }: DivProps) {
    return <div className={body({ className })} {...props} />
}

Modal.Footer = function ModalFooter({ className, ...props }: DivProps) {
    return <div className={footer({ className })} {...props} />
}