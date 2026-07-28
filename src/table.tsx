import {
    Table as AriaTable,
    TableHeader as AriaTableHeader,
    TableBody as AriaTableBody,
    Row as AriaRow,
    Cell as AriaCell,
    Column as AriaColumn,
    Collection as AriaCollection,
    type TableProps as AriaTableProps,
    type TableHeaderProps as AriaTableHeaderProps,
    type TableBodyProps as AriaTableBodyProps,
    type RowProps as AriaRowProps,
    type CellProps as AriaCellProps,
    type ColumnProps as AriaColumnProps,
    type CollectionProps as AriaCollectionProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import type { HTMLAttributes, ReactNode } from "react"

const wrapper = tv({ base: "overflow-hidden rounded-2xl border border-sand" })
const scroll = tv({ base: "overflow-auto rellui-scrollbar" })
const content = tv({ base: "w-full border-collapse text-sm" })
const header = tv({ base: "bg-sand/30" })
const column = tv({
    base: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-charcoal/60 outline-none",
})
const row = tv({
    base: "border-t border-sand/60 outline-none data-[hovered]:bg-sand/10 data-[selected]:bg-accent/10",
})
const cell = tv({ base: "px-4 py-3 text-charcoal outline-none" })

type DivProps = Omit<HTMLAttributes<HTMLDivElement>, "className"> & { className?: string }

export function Table({ className, ...props }: DivProps) {
    return <div className={wrapper({ className })} {...props} />
}

Table.ScrollContainer = function TableScrollContainer({ className, ...props }: DivProps) {
    return <div className={scroll({ className })} {...props} />
}

Table.Content = function TableContent({
                                          className,
                                          ...props
                                      }: Omit<AriaTableProps, "className"> & { className?: string }) {
    return <AriaTable className={content({ className })} {...props} />
}

Table.Header = function TableHeader<T extends object>({
                                                          className,
                                                          ...props
                                                      }: Omit<AriaTableHeaderProps<T>, "className"> & { className?: string }) {
    return <AriaTableHeader className={header({ className })} {...props} />
}

Table.Column = function TableColumn({
                                        className,
                                        ...props
                                    }: Omit<AriaColumnProps, "className"> & { className?: string }) {
    return <AriaColumn className={column({ className })} {...props} />
}

Table.Body = function TableBody<T extends object>({
                                                      className,
                                                      ...props
                                                  }: Omit<AriaTableBodyProps<T>, "className"> & { className?: string }) {
    return <AriaTableBody className={className} {...props} />
}

Table.Collection = function TableCollection<T extends object>(props: AriaCollectionProps<T>) {
    return <AriaCollection {...props} />
}

Table.Row = function TableRow<T extends object>({
                                                    className,
                                                    ...props
                                                }: Omit<AriaRowProps<T>, "className"> & { className?: string }) {
    return <AriaRow className={row({ className })} {...props} />
}

Table.Cell = function TableCell({
                                    className,
                                    ...props
                                }: Omit<AriaCellProps, "className"> & { className?: string }) {
    return <AriaCell className={cell({ className })} {...props} />
}

export interface EmptyStateProps {
    children: ReactNode
    className?: string
}

const emptyState = tv({ base: "flex flex-col items-center justify-center gap-2 p-10 text-center text-sm text-charcoal/50" })

export function EmptyState({ className, ...props }: EmptyStateProps) {
    return <div className={emptyState({ className })} {...props} />
}