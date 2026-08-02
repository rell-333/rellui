// src/avatar.tsx
import { useState } from "react"
import { tv, type VariantProps } from "tailwind-variants"

const avatar = tv({
    base: "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-sand font-semibold text-charcoal select-none leading-none align-top",
    variants: {
        size: {
            xs: "size-6 text-xs",
            sm: "size-8 text-sm",
            md: "size-10 text-base",
            lg: "size-14 text-lg",
            xl: "size-20 text-2xl",
        },
    },
    defaultVariants: {
        size: "md",
    },
})

export interface AvatarProps extends VariantProps<typeof avatar> {
    src?: string
    name?: string
    className?: string
    alt?: string
}

function getInitials(name?: string): string {
    if (!name) return "?"
    const parts = name.trim().split(/\s+/)
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export function Avatar({ src, name, size, className, alt }: AvatarProps) {
    const [hasError, setHasError] = useState(false)
    const showImage = src && !hasError

    return (
        <span className={avatar({ size, className })}>
            {showImage ? (
                <img
                    src={src}
                    alt={alt ?? name ?? "Avatar"}
                    className="h-full w-full object-cover"
                    onError={() => setHasError(true)}
                />
            ) : (
                <span aria-hidden={!!name} aria-label={!name ? "Avatar" : undefined}>
                    {getInitials(name)}
                </span>
            )}
        </span>
    )
}