// src/avatar-group.tsx
import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from "react"
import { tv } from "tailwind-variants"
import { Avatar, type AvatarProps } from "./avatar"

const overflow = tv({
    base: "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-charcoal font-semibold text-cream ring-2 ring-cream select-none",
    variants: {
        size: {
            xs: "size-6 text-[10px]",
            sm: "size-8 text-xs",
            md: "size-10 text-sm",
            lg: "size-14 text-base",
            xl: "size-20 text-xl",
        },
    },
    defaultVariants: { size: "md" },
})

const stackItem = tv({
    base: "inline-flex shrink-0 ring-2 ring-cream rounded-full",
})

export interface AvatarGroupProps {
    children: ReactNode
    max?: number
    size?: AvatarProps["size"]
    className?: string
}

export function AvatarGroup({ children, max = 4, size = "md", className }: AvatarGroupProps) {
    const items = Children.toArray(children).filter(isValidElement) as ReactElement<AvatarProps>[]
    const visible = items.slice(0, max)
    const overflowCount = items.length - visible.length

    return (
        <div className={`flex items-center -space-x-3 ${className ?? ""}`}>
            {visible.map((child, i) => (
                <div key={i} className={stackItem()} style={{ zIndex: visible.length - i }}>
                    {cloneElement(child, { size })}
                </div>
            ))}
            {overflowCount > 0 && (
                <div className={overflow({ size })} style={{ zIndex: 0 }}>
                    +{overflowCount}
                </div>
            )}
        </div>
    )
}