import {
    UNSTABLE_Toast as AriaToast,
    UNSTABLE_ToastContent as AriaToastContent,
    UNSTABLE_ToastQueue as AriaToastQueue,
    UNSTABLE_ToastRegion as AriaToastRegion,
    Text,
    Button as AriaButton,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import type { ReactNode } from "react"

interface ToastData {
    title: string
    description?: string
    variant?: "default" | "success" | "warning" | "danger"
}

export const toastQueue = new AriaToastQueue<ToastData>({
    maxVisibleToasts: 5,
})

function queueToast(variant: ToastData["variant"], title: string, description?: string) {
    toastQueue.add({ title, description, variant }, { timeout: 5000 })
}

export const toast = Object.assign(
    (title: string, description?: string) => queueToast("default", title, description),
    {
        success: (title: string, description?: string) => queueToast("success", title, description),
        warning: (title: string, description?: string) => queueToast("warning", title, description),
        danger: (title: string, description?: string) => queueToast("danger", title, description),
    },
)

const region = tv({
    base: "fixed bottom-4 right-4 z-[9999] flex flex-col gap-2 outline-none rellui-toast-region",
})

const panel = tv({
    base: "flex w-80 items-start gap-3 rounded-2xl border p-4 shadow-xl outline-none transition-all duration-300 ease-out data-[entering]:translate-x-4 data-[entering]:opacity-0 data-[exiting]:translate-x-4 data-[exiting]:opacity-0",
    variants: {
        variant: {
            default: "border-charcoal bg-charcoal text-cream",
            success: "border-success bg-success text-cream",
            warning: "border-warning bg-warning text-charcoal",
            danger: "border-danger bg-danger text-cream",
        },
    },
    defaultVariants: { variant: "default" },
})

const iconWrap = tv({
    base: "flex size-6 shrink-0 items-center justify-center rounded-full",
    variants: {
        variant: {
            default: "bg-cream/15",
            success: "bg-cream/20",
            warning: "bg-charcoal/10",
            danger: "bg-cream/20",
        },
    },
    defaultVariants: { variant: "default" },
})

const titleStyle = tv({ base: "text-sm font-semibold" })
const descriptionStyle = tv({ base: "mt-0.5 break-words text-xs opacity-90" })
const closeBtn = tv({
    base: "ml-auto shrink-0 rounded-full p-1 text-current opacity-70 transition-opacity hover:opacity-100 hover:bg-cream/15",
})

const ICONS: Record<NonNullable<ToastData["variant"]>, ReactNode> = {
    default: (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v5" strokeLinecap="round" />
            <circle cx="12" cy="16" r="0.5" fill="currentColor" />
        </svg>
    ),
    success: (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    warning: (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M12 9v4" strokeLinecap="round" />
            <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" strokeLinejoin="round" />
            <circle cx="12" cy="16.5" r="0.5" fill="currentColor" />
        </svg>
    ),
    danger: (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="9" />
            <path d="m9 9 6 6M15 9l-6 6" strokeLinecap="round" />
        </svg>
    ),
}

export function Toaster() {
    return (
        <AriaToastRegion queue={toastQueue} className={region({})}>
            {({ toast: t }) => {
                const variant = t.content.variant ?? "default"
                return (
                    <AriaToast toast={t} className={panel({ variant })}>
                        <span className={iconWrap({ variant })}>{ICONS[variant]}</span>
                        <AriaToastContent className="flex min-w-0 flex-1 flex-col">
                            <Text slot="title" className={titleStyle({})}>
                                {t.content.title}
                            </Text>
                            {t.content.description && (
                                <Text slot="description" className={descriptionStyle({})}>
                                    {t.content.description}
                                </Text>
                            )}
                        </AriaToastContent>
                        <AriaButton slot="close" aria-label="Close" className={closeBtn({})}>
                            ✕
                        </AriaButton>
                    </AriaToast>
                )
            }}
        </AriaToastRegion>
    )
}