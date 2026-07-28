import { tv } from "tailwind-variants"
import type { HTMLAttributes } from "react"

const card = tv({
    slots: {
        base: "rounded-2xl border border-sand bg-cream text-charcoal shadow-sm",
        header: "flex flex-col gap-1 p-5 pb-4",
        title: "text-base font-semibold text-charcoal",
        description: "text-sm text-charcoal/60",
        content: "p-5",
        footer: "flex items-center gap-2 p-5 pt-0",
    },
})

const { base, header, title, description, content, footer } = card()

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, "className"> {
    className?: string
}

export function Card({ className, ...props }: CardProps) {
    return <div className={base({ className })} {...props} />
}

Card.Header = function CardHeader({ className, ...props }: CardProps) {
    return <div className={header({ className })} {...props} />
}

Card.Title = function CardTitle({ className, ...props }: CardProps) {
    return <h3 className={title({ className })} {...props} />
}

Card.Description = function CardDescription({ className, ...props }: CardProps) {
    return <p className={description({ className })} {...props} />
}

Card.Content = function CardContent({ className, ...props }: CardProps) {
    return <div className={content({ className })} {...props} />
}

Card.Footer = function CardFooter({ className, ...props }: CardProps) {
    return <div className={footer({ className })} {...props} />
}