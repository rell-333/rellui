import * as react from 'react';
import { InputHTMLAttributes, HTMLAttributes, ReactNode, ComponentProps, ReactElement } from 'react';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import { ButtonProps as ButtonProps$1, TextFieldProps as TextFieldProps$1, ModalOverlay, Modal as Modal$1, TableProps, TableHeaderProps, ColumnProps, TableBodyProps, CollectionProps, RowProps, CellProps, MenuTriggerProps, PopoverProps as PopoverProps$1, MenuProps as MenuProps$1, MenuItemProps, LinkProps, BreadcrumbsProps as BreadcrumbsProps$1, DateValue, CalendarProps as CalendarProps$1, CalendarGridProps, CalendarGridBodyProps, CalendarCellProps, CheckboxProps as CheckboxProps$1, DateFieldProps as DateFieldProps$1, DatePickerProps as DatePickerProps$1, DisclosureProps as DisclosureProps$1, DisclosureGroupProps as DisclosureGroupProps$1, DropZoneProps as DropZoneProps$1, MeterProps as MeterProps$1, RadioFieldProps, RadioGroupProps as RadioGroupProps$1, SelectProps as SelectProps$1, ListBoxItemProps, SwitchFieldProps, TooltipProps as TooltipProps$1, TabsProps as TabsProps$1, TabListProps, TabProps as TabProps$1, TabPanelsProps, TabPanelProps, AutocompleteProps as AutocompleteProps$1, ListBoxProps } from 'react-aria-components';
export { DialogTrigger, TooltipTrigger } from 'react-aria-components';

declare const button: tailwind_variants.TVReturnType<{
    variant: {
        primary: "bg-charcoal text-cream hover:opacity-90 focus-visible:ring-charcoal";
        secondary: "bg-sand text-charcoal hover:opacity-90 focus-visible:ring-sand";
        danger: "bg-danger text-white hover:opacity-90 focus-visible:ring-danger";
    };
    size: {
        sm: "px-3 py-1.5 text-sm";
        md: "px-4 py-2 text-base";
        lg: "px-6 py-3 text-lg";
    };
}, undefined, "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-150 ease-out outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed data-[pressed]:scale-90", {
    variant: {
        primary: "bg-charcoal text-cream hover:opacity-90 focus-visible:ring-charcoal";
        secondary: "bg-sand text-charcoal hover:opacity-90 focus-visible:ring-sand";
        danger: "bg-danger text-white hover:opacity-90 focus-visible:ring-danger";
    };
    size: {
        sm: "px-3 py-1.5 text-sm";
        md: "px-4 py-2 text-base";
        lg: "px-6 py-3 text-lg";
    };
}, undefined, tailwind_variants.TVReturnTypeLike<{
    variant: {
        primary: "bg-charcoal text-cream hover:opacity-90 focus-visible:ring-charcoal";
        secondary: "bg-sand text-charcoal hover:opacity-90 focus-visible:ring-sand";
        danger: "bg-danger text-white hover:opacity-90 focus-visible:ring-danger";
    };
    size: {
        sm: "px-3 py-1.5 text-sm";
        md: "px-4 py-2 text-base";
        lg: "px-6 py-3 text-lg";
    };
}, undefined>>;
interface ButtonProps extends Omit<ButtonProps$1, "className">, VariantProps<typeof button> {
    className?: string;
}
declare function Button({ variant, size, className, ...props }: ButtonProps): react.JSX.Element;

interface TextFieldProps extends Omit<TextFieldProps$1, "className"> {
    label?: string;
    description?: string;
    placeholder?: string;
    type?: InputHTMLAttributes<HTMLInputElement>["type"];
    className?: string;
}
declare function TextField({ label, description, placeholder, type, className, ...props }: TextFieldProps): react.JSX.Element;

interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, "className"> {
    className?: string;
}
declare function Card({ className, ...props }: CardProps): react.JSX.Element;
declare namespace Card {
    var Header: ({ className, ...props }: CardProps) => react.JSX.Element;
    var Title: ({ className, ...props }: CardProps) => react.JSX.Element;
    var Description: ({ className, ...props }: CardProps) => react.JSX.Element;
    var Content: ({ className, ...props }: CardProps) => react.JSX.Element;
    var Footer: ({ className, ...props }: CardProps) => react.JSX.Element;
}

type DivProps$2 = Omit<HTMLAttributes<HTMLDivElement>, "className"> & {
    className?: string;
};
interface ModalProps {
    children: ReactNode;
    isOpen?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
}
declare function Modal({ children, ...props }: ModalProps): react.JSX.Element;
declare namespace Modal {
    var Trigger: ({ variant, className, ...props }: Omit<ButtonProps$1, "className"> & {
        variant?: "block" | "inline";
        className?: string;
    }) => react.JSX.Element;
    var Backdrop: ({ variant, className, ...props }: Omit<ComponentProps<typeof ModalOverlay>, "className"> & {
        variant?: "dark" | "blur";
        className?: string;
    }) => react.JSX.Element;
    var Container: ({ size, className, ...props }: Omit<ComponentProps<typeof Modal$1>, "className"> & {
        size?: "sm" | "md" | "lg" | "cover";
        className?: string;
    }) => react.JSX.Element;
    var Dialog: ({ className, children }: ModalDialogProps) => react.JSX.Element;
    var CloseTrigger: ({ className, children, ...props }: Omit<ButtonProps$1, "className"> & {
        className?: string;
    }) => react.JSX.Element;
    var Header: ({ className, ...props }: DivProps$2) => react.JSX.Element;
    var Heading: ({ className, ...props }: DivProps$2) => react.JSX.Element;
    var Body: ({ className, ...props }: DivProps$2) => react.JSX.Element;
    var Footer: ({ className, ...props }: DivProps$2) => react.JSX.Element;
}
interface ModalDialogProps {
    className?: string;
    children: ReactNode;
}

interface ChipProps extends Omit<HTMLAttributes<HTMLSpanElement>, "className"> {
    variant?: "default" | "success" | "warning" | "danger" | "accented";
    onRemove?: () => void;
    className?: string;
}
declare function Chip({ variant, onRemove, className, children, ...props }: ChipProps): react.JSX.Element;

type DivProps$1 = Omit<HTMLAttributes<HTMLDivElement>, "className"> & {
    className?: string;
};
declare function Table({ className, ...props }: DivProps$1): react.JSX.Element;
declare namespace Table {
    var ScrollContainer: ({ className, ...props }: DivProps$1) => react.JSX.Element;
    var Content: ({ className, ...props }: Omit<TableProps, "className"> & {
        className?: string;
    }) => react.JSX.Element;
    var Header: <T extends object>({ className, ...props }: Omit<TableHeaderProps<T>, "className"> & {
        className?: string;
    }) => react.JSX.Element;
    var Column: ({ className, ...props }: Omit<ColumnProps, "className"> & {
        className?: string;
    }) => react.JSX.Element;
    var Body: <T extends object>({ className, ...props }: Omit<TableBodyProps<T>, "className"> & {
        className?: string;
    }) => react.JSX.Element;
    var Collection: <T extends object>(props: CollectionProps<T>) => react.JSX.Element;
    var Row: <T extends object>({ className, ...props }: Omit<RowProps<T>, "className"> & {
        className?: string;
    }) => react.JSX.Element;
    var Cell: ({ className, ...props }: Omit<CellProps, "className"> & {
        className?: string;
    }) => react.JSX.Element;
}
interface EmptyStateProps {
    children: ReactNode;
    className?: string;
}
declare function EmptyState({ className, ...props }: EmptyStateProps): react.JSX.Element;

interface MenuProps extends MenuTriggerProps {
}
declare function Menu(props: MenuProps): react.JSX.Element;
declare namespace Menu {
    var Popover: ({ className, ...props }: Omit<PopoverProps$1, "className"> & {
        className?: string;
    }) => react.JSX.Element;
    var List: <T extends object>({ className, ...props }: Omit<MenuProps$1<T>, "className"> & {
        className?: string;
    }) => react.JSX.Element;
    var Item: ({ variant, className, ...props }: Omit<MenuItemProps, "className"> & {
        variant?: "default" | "danger";
        className?: string;
    }) => react.JSX.Element;
}

declare const toast: ((title: string, description?: string) => void) & {
    success: (title: string, description?: string) => void;
    warning: (title: string, description?: string) => void;
    danger: (title: string, description?: string) => void;
};
declare function Toaster(): react.JSX.Element;

interface BreadcrumbsProps<T extends object> extends Omit<BreadcrumbsProps$1<T>, "className"> {
    className?: string;
}
declare function Breadcrumbs<T extends object>({ className, ...props }: BreadcrumbsProps<T>): react.JSX.Element;
declare namespace Breadcrumbs {
    var Item: ({ href, children, className, ...props }: BreadcrumbItemProps) => react.JSX.Element;
}
interface BreadcrumbItemProps extends Omit<LinkProps, "className" | "children"> {
    href?: string;
    children: ReactNode;
    className?: string;
}

type DivProps = Omit<HTMLAttributes<HTMLDivElement>, "className"> & {
    className?: string;
};
interface CalendarProps<T extends DateValue> extends Omit<CalendarProps$1<T>, "className"> {
    className?: string;
}
declare function Calendar<T extends DateValue>({ className, ...props }: CalendarProps<T>): react.JSX.Element;
declare namespace Calendar {
    var Header: ({ className, ...props }: DivProps) => react.JSX.Element;
    var Heading: ({ className, ...props }: DivProps) => react.JSX.Element;
    var NavButton: ({ className, ...props }: Omit<ButtonProps$1, "className"> & {
        className?: string;
    }) => react.JSX.Element;
    var Grid: ({ className, ...props }: Omit<CalendarGridProps, "className"> & {
        className?: string;
    }) => react.JSX.Element;
    var GridHeader: ({ children, }: {
        children: (day: string) => ReactElement;
    }) => react.JSX.Element;
    var HeaderCell: ({ className, ...props }: DivProps) => react.JSX.Element;
    var GridBody: ({ className, ...props }: Omit<CalendarGridBodyProps, "className"> & {
        className?: string;
    }) => react.JSX.Element;
    var Cell: ({ className, ...props }: Omit<CalendarCellProps, "className"> & {
        className?: string;
    }) => react.JSX.Element;
}

interface CheckboxProps extends Omit<CheckboxProps$1, "className"> {
    className?: string;
}
declare function Checkbox({ className, children, ...props }: CheckboxProps): react.JSX.Element;

interface DateFieldProps<T extends DateValue> extends Omit<DateFieldProps$1<T>, "className"> {
    label?: string;
    description?: string;
    className?: string;
}
declare function DateField<T extends DateValue>({ label, description, className, ...props }: DateFieldProps<T>): react.JSX.Element;

interface DatePickerProps<T extends DateValue> extends Omit<DatePickerProps$1<T>, "className"> {
    label?: string;
    description?: string;
    className?: string;
    children: ReactNode;
}
declare function DatePicker<T extends DateValue>({ label, description, className, children, ...props }: DatePickerProps<T>): react.JSX.Element;

interface DisclosureProps extends Omit<DisclosureProps$1, "className"> {
    className?: string;
}
declare function Disclosure({ className, ...props }: DisclosureProps): react.JSX.Element;
declare namespace Disclosure {
    var Trigger: ({ className, children, ...props }: Omit<ButtonProps$1, "className" | "children"> & {
        className?: string;
        children: ReactNode;
    }) => react.JSX.Element;
    var Panel: ({ className, children }: DisclosurePanelProps) => react.JSX.Element;
}
interface DisclosurePanelProps {
    className?: string;
    children: ReactNode;
}

interface DisclosureGroupProps extends Omit<DisclosureGroupProps$1, "className"> {
    className?: string;
}
declare function DisclosureGroup({ className, ...props }: DisclosureGroupProps): react.JSX.Element;

interface DropZoneProps extends Omit<DropZoneProps$1, "className"> {
    className?: string;
}
declare function DropZone({ className, ...props }: DropZoneProps): react.JSX.Element;

type Variant = "image" | "audio" | "default";
interface FileUploadProps {
    variant?: Variant;
    acceptedFileTypes?: string[];
    validate?: (file: File) => string | null;
    hint?: string;
    className?: string;
    onFileSelect: (file: File | null) => void;
}
declare function FileUpload({ variant, acceptedFileTypes, validate, hint, className, onFileSelect, }: FileUploadProps): react.JSX.Element;

interface MeterProps extends Omit<MeterProps$1, "className"> {
    label?: string;
    className?: string;
}
declare function Meter({ label: labelText, className, ...props }: MeterProps): react.JSX.Element;

interface RadioGroupProps extends Omit<RadioGroupProps$1, "className" | "children"> {
    label?: string;
    description?: string;
    className?: string;
    children: ReactNode;
}
declare function RadioGroup({ label, description, className, children, ...props }: RadioGroupProps): react.JSX.Element;
interface RadioProps extends Omit<RadioFieldProps, "className" | "children"> {
    description?: string;
    className?: string;
    children: ReactNode;
}
declare function Radio({ className, description, children, ...props }: RadioProps): react.JSX.Element;

interface SelectProps<T extends object> extends Omit<SelectProps$1<T>, "className" | "children"> {
    label?: string;
    description?: string;
    className?: string;
    children: ReactNode | ((item: T) => ReactNode);
    items?: Iterable<T>;
}
declare function Select<T extends object>({ label, description, className, children, items, ...props }: SelectProps<T>): react.JSX.Element;
declare namespace Select {
    var Item: ({ className, ...props }: SelectItemProps) => react.JSX.Element;
}
interface SelectItemProps extends Omit<ListBoxItemProps, "className"> {
    className?: string;
}

interface SwitchProps extends Omit<SwitchFieldProps, "className" | "children"> {
    className?: string;
    children: ReactNode;
}
declare function Switch({ className, children, ...props }: SwitchProps): react.JSX.Element;

interface SkeletonProps extends Omit<HTMLAttributes<HTMLDivElement>, "className"> {
    className?: string;
}
declare function Skeleton({ className, ...props }: SkeletonProps): react.JSX.Element;

interface PopoverProps extends Omit<PopoverProps$1, "className"> {
    className?: string;
}
declare function Popover({ className, ...props }: PopoverProps): react.JSX.Element;

interface TooltipProps extends Omit<TooltipProps$1, "className" | "children"> {
    className?: string;
    children: ReactNode;
}
declare function Tooltip({ className, children, ...props }: TooltipProps): react.JSX.Element;

interface TabProps extends Omit<TabProps$1, "className" | "children"> {
    className?: string;
    children: ReactNode;
}
interface TabsProps extends Omit<TabsProps$1, "className"> {
    className?: string;
}
declare function Tabs({ className, ...props }: TabsProps): react.JSX.Element;
declare namespace Tabs {
    var List: <T extends object>({ className, ...props }: Omit<TabListProps<T>, "className"> & {
        className?: string;
    }) => react.JSX.Element;
    var Tab: ({ className, children, ...props }: TabProps) => react.JSX.Element;
    var Panels: <T extends object>({ className, ...props }: Omit<TabPanelsProps<T>, "className"> & {
        className?: string;
    }) => react.JSX.Element;
    var Panel: ({ className, ...props }: Omit<TabPanelProps, "className"> & {
        className?: string;
    }) => react.JSX.Element;
}

interface AutocompleteProps extends Omit<AutocompleteProps$1, "children"> {
    placeholder?: string;
    "aria-label"?: string;
    children: ReactNode;
}
declare function Autocomplete({ placeholder, "aria-label": ariaLabel, children, ...props }: AutocompleteProps): react.JSX.Element;
declare namespace Autocomplete {
    var List: <T extends object>({ className, ...props }: Omit<ListBoxProps<T>, "className"> & {
        className?: string;
    }) => react.JSX.Element;
    var Item: ({ className, ...props }: Omit<ListBoxItemProps, "className"> & {
        className?: string;
    }) => react.JSX.Element;
}

interface AlertDialogProps {
    isOpen?: ModalProps["isOpen"];
    defaultOpen?: ModalProps["defaultOpen"];
    onOpenChange?: ModalProps["onOpenChange"];
    title: string;
    description?: ReactNode;
    actionLabel?: string;
    cancelLabel?: string;
    onAction: () => void | Promise<void>;
    isDestructive?: boolean;
}
declare function AlertDialog({ isOpen, defaultOpen, onOpenChange, title, description, actionLabel, cancelLabel, onAction, isDestructive, }: AlertDialogProps): react.JSX.Element;

export { AlertDialog, type AlertDialogProps, Autocomplete, type AutocompleteProps, type BreadcrumbItemProps, Breadcrumbs, type BreadcrumbsProps, Button, type ButtonProps, Calendar, type CalendarProps, Card, type CardProps, Checkbox, type CheckboxProps, Chip, type ChipProps, DateField, type DateFieldProps, DatePicker, type DatePickerProps, Disclosure, DisclosureGroup, type DisclosureGroupProps, type DisclosureProps, DropZone, type DropZoneProps, EmptyState, FileUpload, type FileUploadProps, Menu, type MenuProps, Meter, type MeterProps, Modal, type ModalProps, Popover, type PopoverProps, Radio, RadioGroup, type RadioGroupProps, type RadioProps, Select, type SelectItemProps, type SelectProps, Skeleton, type SkeletonProps, Switch, type SwitchProps, Table, Tabs, type TabsProps, TextField, type TextFieldProps, Toaster, Tooltip, type TooltipProps, toast };
