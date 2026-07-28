import { tv } from "tailwind-variants"
import type { HTMLAttributes } from "react"

const skeleton = tv({
    base: "animate-pulse rounded-md bg-sand/50",
})

export interface SkeletonProps extends Omit<HTMLAttributes<HTMLDivElement>, "className"> {
    className?: string
}

export function Skeleton({ className, ...props }: SkeletonProps) {
    return <div className={skeleton({ className })} {...props} />
}