import {
    Breadcrumbs as AriaBreadcrumbs,
    Breadcrumb as AriaBreadcrumb,
    Link as AriaLink,
    type BreadcrumbsProps as AriaBreadcrumbsProps,
    type LinkProps as AriaLinkProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import type { ReactNode } from "react"

const list = tv({ base: "m-0 flex list-none items-center gap-1 p-0" })

const item = tv({
    base: "flex items-center text-sm [&:not(:last-child)]:after:ml-2 [&:not(:last-child)]:after:text-charcoal/30 [&:not(:last-child)]:after:content-['/']",
})

const link = tv({
    base: "rounded-sm text-charcoal/60 outline-none transition-colors data-[hovered]:text-charcoal data-[focus-visible]:outline-2 data-[focus-visible]:outline-offset-2 data-[focus-visible]:outline-charcoal",
})

const current = tv({ base: "font-semibold text-charcoal" })

export interface BreadcrumbsProps<T extends object> extends Omit<AriaBreadcrumbsProps<T>, "className"> {
    className?: string
}

export function Breadcrumbs<T extends object>({ className, ...props }: BreadcrumbsProps<T>) {
    return <AriaBreadcrumbs className={list({ className })} {...props} />
}

export interface BreadcrumbItemProps extends Omit<AriaLinkProps, "className" | "children"> {
    href?: string
    children: ReactNode
    className?: string
}

Breadcrumbs.Item = function BreadcrumbItem({ href, children, className, ...props }: BreadcrumbItemProps) {
    return (
        <AriaBreadcrumb className={item({})}>
            {href ? (
                <AriaLink href={href} className={link({ className })} {...props}>
                    {children}
                </AriaLink>
            ) : (
                <span aria-current="page" className={current({ className })}>
                    {children}
                </span>
            )}
        </AriaBreadcrumb>
    )
}