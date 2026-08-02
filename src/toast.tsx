import {
    UNSTABLE_Toast as AriaToast,
    UNSTABLE_ToastContent as AriaToastContent,
    UNSTABLE_ToastQueue as AriaToastQueue,
    UNSTABLE_ToastRegion as AriaToastRegion,
    Text,
    Button as AriaButton,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import { flushSync } from "react-dom"

interface ToastData {
    title: string
    description?: string
    variant?: "default" | "success" | "warning" | "danger"
}

let activeTransition: ReturnType<Document["startViewTransition"]> | null = null

export const toastQueue = new AriaToastQueue<ToastData>({
    maxVisibleToasts: 5,
    wrapUpdate(fn) {
        if (typeof document !== "undefined" && "startViewTransition" in document && !activeTransition) {
            const transition = document.startViewTransition(() => {
                flushSync(fn)
            })
            activeTransition = transition
            transition.finished.finally(() => {
                activeTransition = null
            })
        } else {
            fn()
        }
    },
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

const region = tv({ base: "fixed bottom-4 right-4 z-[100] outline-none rellui-toast-region" })

const panel = tv({
    base: "flex w-80 items-start gap-3 rounded-2xl border p-4 shadow-lg outline-none",
    variants: {
        variant: {
            default: "border-sand bg-cream text-charcoal",
            success: "border-success/30 bg-success/10 text-success",
            warning: "border-warning/30 bg-warning/10 text-warning",
            danger: "border-danger/30 bg-danger/10 text-danger",
        },
    },
    defaultVariants: { variant: "default" },
})

const titleStyle = tv({ base: "text-sm font-semibold" })
const descriptionStyle = tv({ base: "mt-0.5 truncate text-xs opacity-80" })
const closeBtn = tv({ base: "ml-auto shrink-0 rounded-full p-1 text-current opacity-60 transition-opacity hover:opacity-100" })

export function Toaster() {
    return (
        <AriaToastRegion queue={toastQueue} className={region({})}>
            {({ toast: t }) => (
                <AriaToast
                    toast={t}
                    className={panel({ variant: t.content.variant })}
                    style={{
                        viewTransitionName: t.key,
                        viewTransitionClass: "rellui-toast",
                    } as React.CSSProperties}
                >
                    <AriaToastContent className="flex min-w-0 flex-col">
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
            )}
        </AriaToastRegion>
    )
}