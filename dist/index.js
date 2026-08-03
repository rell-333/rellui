"use client"

// src/button.tsx
import { Button as AriaButton } from "react-aria-components";
import { tv } from "tailwind-variants";
import { jsx } from "react/jsx-runtime";
var button = tv({
  base: "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-150 ease-out outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed data-[pressed]:scale-90",
  variants: {
    variant: {
      primary: "bg-charcoal text-cream hover:opacity-90 focus-visible:ring-charcoal",
      secondary: "bg-sand text-charcoal hover:opacity-90 focus-visible:ring-sand",
      danger: "bg-danger text-white hover:opacity-90 focus-visible:ring-danger",
      ghost: "bg-transparent text-charcoal hover:bg-sand/40 focus-visible:ring-sand"
    },
    size: {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
});
function Button({ variant, size, className, ...props }) {
  return /* @__PURE__ */ jsx(AriaButton, { className: button({ variant, size, className }), ...props });
}

// src/text-field.tsx
import {
  TextField as AriaTextField,
  Label,
  Input as AriaInput,
  Text,
  FieldError
} from "react-aria-components";
import { tv as tv2 } from "tailwind-variants";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var input = tv2({
  base: "w-full rounded-xl border-[1.5px] border-sand bg-cream px-3 py-2 text-sm text-charcoal outline-none transition-colors placeholder:text-charcoal/40 focus:border-charcoal focus:ring-2 focus:ring-charcoal/20 data-[invalid]:border-clay data-[invalid]:ring-clay/20 disabled:opacity-50 disabled:cursor-not-allowed"
});
function TextField({ label: label2, description: description2, placeholder, type, className, ...props }) {
  return /* @__PURE__ */ jsxs(AriaTextField, { className: "flex flex-col gap-1", ...props, children: [
    label2 && /* @__PURE__ */ jsx2(Label, { className: "text-sm font-medium text-charcoal", children: label2 }),
    /* @__PURE__ */ jsx2(
      AriaInput,
      {
        placeholder,
        type,
        className: input({ className })
      }
    ),
    description2 && /* @__PURE__ */ jsx2(Text, { slot: "description", className: "text-xs text-charcoal/60", children: description2 }),
    /* @__PURE__ */ jsx2(FieldError, { className: "text-xs text-clay" })
  ] });
}

// src/card.tsx
import { tv as tv3 } from "tailwind-variants";
import { jsx as jsx3 } from "react/jsx-runtime";
var card = tv3({
  slots: {
    base: "rounded-2xl border border-sand bg-cream text-charcoal shadow-sm",
    header: "flex flex-col gap-1 p-5 pb-4",
    title: "text-base font-semibold text-charcoal",
    description: "text-sm text-charcoal/60",
    content: "p-5",
    footer: "flex items-center gap-2 p-5 pt-0"
  }
});
var { base, header, title, description, content, footer } = card();
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsx3("div", { className: base({ className }), ...props });
}
Card.Header = function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx3("div", { className: header({ className }), ...props });
};
Card.Title = function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx3("h3", { className: title({ className }), ...props });
};
Card.Description = function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx3("p", { className: description({ className }), ...props });
};
Card.Content = function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx3("div", { className: content({ className }), ...props });
};
Card.Footer = function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx3("div", { className: footer({ className }), ...props });
};

// src/modal.tsx
import { createContext, useContext } from "react";
import {
  DialogTrigger,
  ModalOverlay,
  Modal as AriaModal,
  Dialog as AriaDialog,
  Heading,
  Button as AriaButton2
} from "react-aria-components";
import { tv as tv4 } from "tailwind-variants";
import { jsx as jsx4 } from "react/jsx-runtime";
var ModalCloseContext = createContext(() => {
});
var trigger = tv4({
  base: "border-0 bg-transparent p-0 text-charcoal",
  variants: {
    variant: {
      block: "block w-full text-left",
      inline: "inline-flex w-auto items-center justify-center"
    }
  },
  defaultVariants: { variant: "block" }
});
var backdrop = tv4({
  base: "fixed inset-0 z-50 flex items-center justify-center p-4 data-[entering]:animate-[modal-fade-in_150ms_ease-out] data-[exiting]:animate-[modal-fade-out_150ms_ease-in]",
  variants: {
    variant: {
      dark: "bg-charcoal/50",
      blur: "bg-charcoal/30 backdrop-blur-md"
    }
  },
  defaultVariants: { variant: "dark" }
});
var container = tv4({
  base: "w-full outline-none data-[entering]:animate-[modal-pop-in_180ms_ease-out] data-[exiting]:animate-[modal-pop-out_150ms_ease-in]",
  variants: {
    size: {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      cover: "max-h-[90vh] max-w-4xl",
      xl: "max-h-[90vh] max-w-7xl"
    }
  },
  defaultVariants: { size: "md" }
});
var dialogPanel = tv4({
  base: "relative flex max-h-full flex-col rounded-2xl bg-cream p-6 text-charcoal shadow-xl outline-none"
});
var closeBtn = tv4({
  base: "absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-charcoal/50 transition-colors hover:bg-sand/50 hover:text-charcoal"
});
var header2 = tv4({ base: "flex flex-col gap-1 pb-4" });
var heading = tv4({ base: "text-lg font-semibold text-charcoal" });
var body = tv4({ base: "flex flex-1 flex-col gap-3 overflow-y-auto text-sm text-charcoal/80" });
var footer2 = tv4({ base: "flex items-center justify-end gap-2 pt-5" });
function Modal({ children, ...props }) {
  return /* @__PURE__ */ jsx4(DialogTrigger, { ...props, children });
}
Modal.Trigger = function ModalTrigger({
  variant,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx4(AriaButton2, { className: trigger({ variant, className }), ...props });
};
Modal.Backdrop = function ModalBackdrop({
  variant,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx4(ModalOverlay, { className: backdrop({ variant, className }), ...props });
};
Modal.Container = function ModalContainer({
  size,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx4(AriaModal, { className: container({ size, className }), ...props });
};
Modal.Dialog = function ModalDialog({ className, children }) {
  return /* @__PURE__ */ jsx4(AriaDialog, { className: dialogPanel({ className }), children: ({ close }) => /* @__PURE__ */ jsx4(ModalCloseContext.Provider, { value: close, children }) });
};
Modal.CloseTrigger = function ModalCloseTrigger({
  className,
  children,
  ...props
}) {
  const close = useContext(ModalCloseContext);
  return /* @__PURE__ */ jsx4(AriaButton2, { onPress: close, "aria-label": "Close", className: closeBtn({ className }), ...props, children: children ?? "\u2715" });
};
Modal.Header = function ModalHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx4("div", { className: header2({ className }), ...props });
};
Modal.Heading = function ModalHeading({ className, ...props }) {
  return /* @__PURE__ */ jsx4(Heading, { slot: "title", className: heading({ className }), ...props });
};
Modal.Body = function ModalBody({ className, ...props }) {
  return /* @__PURE__ */ jsx4("div", { className: body({ className }), ...props });
};
Modal.Footer = function ModalFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx4("div", { className: footer2({ className }), ...props });
};

// src/chip.tsx
import { tv as tv5 } from "tailwind-variants";
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var chip = tv5({
  base: "inline-flex items-center gap-1 rounded-full font-semibold",
  variants: {
    variant: {
      default: "bg-sand text-charcoal",
      success: "bg-success/15 text-success",
      warning: "bg-warning/20 text-warning",
      danger: "bg-clay/10 text-clay",
      accented: "bg-indigo text-cream",
      draft: "bg-charcoal/10 text-charcoal/60"
    },
    size: {
      sm: "px-2 py-0.5 text-[10px]",
      md: "px-2.5 py-1 text-xs",
      lg: "px-3 py-1.5 text-sm"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md"
  }
});
var removeBtn = tv5({
  base: "-mr-1 flex items-center justify-center rounded-full opacity-60 transition-opacity hover:opacity-100",
  variants: {
    size: {
      sm: "h-3 w-3",
      md: "h-3.5 w-3.5",
      lg: "h-4 w-4"
    }
  },
  defaultVariants: {
    size: "md"
  }
});
function Chip({ variant, size, onRemove, className, children, ...props }) {
  return /* @__PURE__ */ jsxs2("span", { className: chip({ variant, size, className }), ...props, children: [
    children,
    onRemove && /* @__PURE__ */ jsx5(
      "button",
      {
        type: "button",
        onClick: onRemove,
        "aria-label": "Remove",
        className: removeBtn({ size }),
        children: "\u2715"
      }
    )
  ] });
}

// src/table.tsx
import {
  Table as AriaTable,
  TableHeader as AriaTableHeader,
  TableBody as AriaTableBody,
  Row as AriaRow,
  Cell as AriaCell,
  Column as AriaColumn,
  Collection as AriaCollection,
  TableLoadMoreItem as AriaTableLoadMoreItem
} from "react-aria-components";
import { tv as tv6 } from "tailwind-variants";
import { jsx as jsx6 } from "react/jsx-runtime";
var wrapper = tv6({ base: "w-full overflow-hidden rounded-2xl border border-sand" });
var scroll = tv6({ base: "overflow-auto rellui-scrollbar" });
var content2 = tv6({ base: "w-full border-collapse text-sm" });
var header3 = tv6({ base: "bg-sand/30" });
var column = tv6({
  base: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-charcoal/60 outline-none"
});
var row = tv6({
  base: "border-t border-sand/60 outline-none data-[hovered]:bg-sand/10 data-[selected]:bg-accent/10"
});
var cell = tv6({ base: "px-4 py-3 text-charcoal outline-none" });
var loadMore = tv6({
  base: "flex items-center justify-center gap-2 border-t border-sand/60 px-4 py-4 text-sm text-charcoal/50"
});
function Table({ className, ...props }) {
  return /* @__PURE__ */ jsx6("div", { className: wrapper({ className }), ...props });
}
Table.ScrollContainer = function TableScrollContainer({ className, ...props }) {
  return /* @__PURE__ */ jsx6("div", { className: scroll({ className }), ...props });
};
Table.Content = function TableContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx6(AriaTable, { className: content2({ className }), ...props });
};
Table.Header = function TableHeader({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx6(AriaTableHeader, { className: header3({ className }), ...props });
};
Table.Column = function TableColumn({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx6(AriaColumn, { className: column({ className }), ...props });
};
Table.Body = function TableBody({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx6(AriaTableBody, { className, ...props });
};
Table.Collection = function TableCollection(props) {
  return /* @__PURE__ */ jsx6(AriaCollection, { ...props });
};
Table.Row = function TableRow({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx6(AriaRow, { className: row({ className }), ...props });
};
Table.Cell = function TableCell({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx6(AriaCell, { className: cell({ className }), ...props });
};
Table.LoadMore = function TableLoadMore({
  isLoading,
  onLoadMore,
  scrollOffset,
  className,
  children
}) {
  return /* @__PURE__ */ jsx6(
    AriaTableLoadMoreItem,
    {
      isLoading,
      onLoadMore,
      scrollOffset,
      children: /* @__PURE__ */ jsx6("div", { className: loadMore({ className }), children })
    }
  );
};
var emptyState = tv6({ base: "flex flex-col items-center justify-center gap-2 p-10 text-center text-sm text-charcoal/50" });
function EmptyState({ className, ...props }) {
  return /* @__PURE__ */ jsx6("div", { className: emptyState({ className }), ...props });
}

// src/menu.tsx
import {
  MenuTrigger,
  Popover as AriaPopover,
  Menu as AriaMenu,
  MenuItem as AriaMenuItem
} from "react-aria-components";
import { tv as tv7 } from "tailwind-variants";
import { jsx as jsx7 } from "react/jsx-runtime";
var popover = tv7({
  base: "min-w-[180px] overflow-hidden rounded-xl border border-sand bg-cream p-1 text-charcoal shadow-lg outline-none data-[entering]:animate-[modal-fade-in_120ms_ease-out] data-[exiting]:animate-[modal-fade-out_100ms_ease-in]"
});
var list = tv7({ base: "flex flex-col gap-0.5 outline-none" });
var item = tv7({
  base: "flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm outline-none transition-colors data-[disabled]:cursor-not-allowed data-[disabled]:opacity-40",
  variants: {
    variant: {
      default: "text-charcoal data-[hovered]:bg-sand/40 data-[focused]:bg-sand/40",
      danger: "text-danger data-[hovered]:bg-danger/10 data-[focused]:bg-danger/10"
    }
  },
  defaultVariants: { variant: "default" }
});
function Menu(props) {
  return /* @__PURE__ */ jsx7(MenuTrigger, { ...props });
}
Menu.Popover = function MenuPopover({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx7(AriaPopover, { className: popover({ className }), ...props });
};
Menu.List = function MenuList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx7(AriaMenu, { className: list({ className }), ...props });
};
Menu.Item = function MenuItem({
  variant,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx7(AriaMenuItem, { className: item({ variant, className }), ...props });
};

// src/toast.tsx
import {
  UNSTABLE_Toast as AriaToast,
  UNSTABLE_ToastContent as AriaToastContent,
  UNSTABLE_ToastQueue as AriaToastQueue,
  UNSTABLE_ToastRegion as AriaToastRegion,
  Text as Text2,
  Button as AriaButton3
} from "react-aria-components";
import { tv as tv8 } from "tailwind-variants";
import { jsx as jsx8, jsxs as jsxs3 } from "react/jsx-runtime";
var toastQueue = new AriaToastQueue({
  maxVisibleToasts: 5
});
function queueToast(variant, title2, description2) {
  toastQueue.add({ title: title2, description: description2, variant }, { timeout: 5e3 });
}
var toast = Object.assign(
  (title2, description2) => queueToast("default", title2, description2),
  {
    success: (title2, description2) => queueToast("success", title2, description2),
    warning: (title2, description2) => queueToast("warning", title2, description2),
    danger: (title2, description2) => queueToast("danger", title2, description2)
  }
);
var region = tv8({
  base: "fixed bottom-4 right-4 z-[9999] flex flex-col gap-2 outline-none rellui-toast-region"
});
var panel = tv8({
  base: "flex w-80 items-start gap-3 rounded-2xl border p-4 shadow-xl outline-none transition-all duration-300 ease-out data-[entering]:translate-x-4 data-[entering]:opacity-0 data-[exiting]:translate-x-4 data-[exiting]:opacity-0",
  variants: {
    variant: {
      default: "border-charcoal bg-charcoal text-cream",
      success: "border-success bg-success text-cream",
      warning: "border-warning bg-warning text-charcoal",
      danger: "border-danger bg-danger text-cream"
    }
  },
  defaultVariants: { variant: "default" }
});
var iconWrap = tv8({
  base: "flex size-6 shrink-0 items-center justify-center rounded-full",
  variants: {
    variant: {
      default: "bg-cream/15",
      success: "bg-cream/20",
      warning: "bg-charcoal/10",
      danger: "bg-cream/20"
    }
  },
  defaultVariants: { variant: "default" }
});
var titleStyle = tv8({ base: "text-sm font-semibold" });
var descriptionStyle = tv8({ base: "mt-0.5 break-words text-xs opacity-90" });
var closeBtn2 = tv8({
  base: "ml-auto shrink-0 rounded-full p-1 text-current opacity-70 transition-opacity hover:opacity-100 hover:bg-cream/15"
});
var ICONS = {
  default: /* @__PURE__ */ jsxs3("svg", { viewBox: "0 0 24 24", width: "14", height: "14", fill: "none", stroke: "currentColor", strokeWidth: 2, children: [
    /* @__PURE__ */ jsx8("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ jsx8("path", { d: "M12 8v5", strokeLinecap: "round" }),
    /* @__PURE__ */ jsx8("circle", { cx: "12", cy: "16", r: "0.5", fill: "currentColor" })
  ] }),
  success: /* @__PURE__ */ jsx8("svg", { viewBox: "0 0 24 24", width: "14", height: "14", fill: "none", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsx8("path", { d: "m5 13 4 4L19 7", strokeLinecap: "round", strokeLinejoin: "round" }) }),
  warning: /* @__PURE__ */ jsxs3("svg", { viewBox: "0 0 24 24", width: "14", height: "14", fill: "none", stroke: "currentColor", strokeWidth: 2, children: [
    /* @__PURE__ */ jsx8("path", { d: "M12 9v4", strokeLinecap: "round" }),
    /* @__PURE__ */ jsx8("path", { d: "M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z", strokeLinejoin: "round" }),
    /* @__PURE__ */ jsx8("circle", { cx: "12", cy: "16.5", r: "0.5", fill: "currentColor" })
  ] }),
  danger: /* @__PURE__ */ jsxs3("svg", { viewBox: "0 0 24 24", width: "14", height: "14", fill: "none", stroke: "currentColor", strokeWidth: 2, children: [
    /* @__PURE__ */ jsx8("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ jsx8("path", { d: "m9 9 6 6M15 9l-6 6", strokeLinecap: "round" })
  ] })
};
function Toaster() {
  return /* @__PURE__ */ jsx8(AriaToastRegion, { queue: toastQueue, className: region({}), children: ({ toast: t }) => {
    const variant = t.content.variant ?? "default";
    return /* @__PURE__ */ jsxs3(AriaToast, { toast: t, className: panel({ variant }), children: [
      /* @__PURE__ */ jsx8("span", { className: iconWrap({ variant }), children: ICONS[variant] }),
      /* @__PURE__ */ jsxs3(AriaToastContent, { className: "flex min-w-0 flex-1 flex-col", children: [
        /* @__PURE__ */ jsx8(Text2, { slot: "title", className: titleStyle({}), children: t.content.title }),
        t.content.description && /* @__PURE__ */ jsx8(Text2, { slot: "description", className: descriptionStyle({}), children: t.content.description })
      ] }),
      /* @__PURE__ */ jsx8(AriaButton3, { slot: "close", "aria-label": "Close", className: closeBtn2({}), children: "\u2715" })
    ] });
  } });
}

// src/breadcrumbs.tsx
import {
  Breadcrumbs as AriaBreadcrumbs,
  Breadcrumb as AriaBreadcrumb,
  Link as AriaLink
} from "react-aria-components";
import { tv as tv9 } from "tailwind-variants";
import { jsx as jsx9 } from "react/jsx-runtime";
var list2 = tv9({ base: "m-0 flex list-none items-center gap-1 p-0" });
var item2 = tv9({
  base: "flex items-center text-sm [&:not(:last-child)]:after:ml-2 [&:not(:last-child)]:after:text-charcoal/30 [&:not(:last-child)]:after:content-['/']"
});
var link = tv9({
  base: "rounded-sm text-charcoal/60 outline-none transition-colors data-[hovered]:text-charcoal data-[focus-visible]:outline-2 data-[focus-visible]:outline-offset-2 data-[focus-visible]:outline-charcoal"
});
var current = tv9({ base: "font-semibold text-charcoal" });
function Breadcrumbs({ className, ...props }) {
  return /* @__PURE__ */ jsx9(AriaBreadcrumbs, { className: list2({ className }), ...props });
}
Breadcrumbs.Item = function BreadcrumbItem({ href, onPress, children, className, ...props }) {
  const isInteractive = Boolean(href) || Boolean(onPress);
  return /* @__PURE__ */ jsx9(AriaBreadcrumb, { className: item2({}), children: isInteractive ? /* @__PURE__ */ jsx9(
    AriaLink,
    {
      ...href ? { href } : {},
      onPress,
      className: link({ className }),
      ...props,
      children
    }
  ) : /* @__PURE__ */ jsx9("span", { "aria-current": "page", className: current({ className }), children }) });
};

// src/calendar.tsx
import {
  Calendar as AriaCalendar,
  CalendarGrid as AriaCalendarGrid,
  CalendarGridHeader as AriaCalendarGridHeader,
  CalendarHeaderCell as AriaCalendarHeaderCell,
  CalendarGridBody as AriaCalendarGridBody,
  CalendarCell as AriaCalendarCell,
  CalendarHeading as AriaCalendarHeading,
  Button as AriaButton4
} from "react-aria-components";
import { tv as tv10 } from "tailwind-variants";
import { jsx as jsx10 } from "react/jsx-runtime";
var root = tv10({ base: "w-fit" });
var header4 = tv10({ base: "mb-3 flex items-center justify-between gap-2" });
var heading2 = tv10({ base: "text-sm font-semibold text-charcoal" });
var navBtn = tv10({
  base: "flex h-7 w-7 items-center justify-center rounded-full text-charcoal/60 outline-none transition-colors data-[hovered]:bg-sand/50 data-[hovered]:text-charcoal data-[disabled]:opacity-30"
});
var grid = tv10({ base: "border-collapse" });
var headerCell = tv10({ base: "pb-1 text-xs font-semibold text-charcoal/40" });
var cell2 = tv10({
  base: "flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-sm text-charcoal outline-none data-[hovered]:bg-sand/50 data-[hovered]:transition-colors data-[hovered]:duration-150 data-[selected]:bg-accent data-[selected]:text-cream data-[unavailable]:cursor-not-allowed data-[unavailable]:text-charcoal/20 data-[disabled]:cursor-not-allowed data-[disabled]:text-charcoal/20 data-[outside-month]:text-charcoal/25 data-[focus-visible]:outline-2 data-[focus-visible]:outline-offset-2 data-[focus-visible]:outline-accent"
});
function Calendar({ className, ...props }) {
  return /* @__PURE__ */ jsx10(AriaCalendar, { className: root({ className }), ...props });
}
Calendar.Header = function CalendarHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx10("div", { className: header4({ className }), ...props });
};
Calendar.Heading = function CalendarHeading({ className, ...props }) {
  return /* @__PURE__ */ jsx10(AriaCalendarHeading, { className: heading2({ className }), ...props });
};
Calendar.NavButton = function CalendarNavButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx10(AriaButton4, { className: navBtn({ className }), ...props });
};
Calendar.Grid = function CalendarGrid({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx10(AriaCalendarGrid, { className: grid({ className }), ...props });
};
Calendar.GridHeader = function CalendarGridHeader({
  children
}) {
  return /* @__PURE__ */ jsx10(AriaCalendarGridHeader, { children });
};
Calendar.HeaderCell = function CalendarHeaderCell({ className, ...props }) {
  return /* @__PURE__ */ jsx10(AriaCalendarHeaderCell, { className: headerCell({ className }), ...props });
};
Calendar.GridBody = function CalendarGridBody({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx10(AriaCalendarGridBody, { className, ...props });
};
Calendar.Cell = function CalendarCell({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx10(AriaCalendarCell, { className: cell2({ className }), ...props });
};

// src/checkbox.tsx
import {
  Checkbox as AriaCheckbox
} from "react-aria-components";
import { tv as tv11 } from "tailwind-variants";
import { Fragment, jsx as jsx11, jsxs as jsxs4 } from "react/jsx-runtime";
var root2 = tv11({
  base: "group flex items-center gap-2 text-sm text-charcoal outline-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50"
});
var box = tv11({
  base: "flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 border-sand bg-cream transition-colors group-data-[selected]:border-accent group-data-[selected]:bg-accent group-data-[indeterminate]:border-accent group-data-[indeterminate]:bg-accent group-data-[focus-visible]:outline-2 group-data-[focus-visible]:outline-offset-2 group-data-[focus-visible]:outline-accent"
});
var check = tv11({
  base: "h-3 w-3 scale-50 text-cream opacity-0 transition-all duration-150 group-data-[selected]:scale-100 group-data-[selected]:opacity-100 group-data-[indeterminate]:scale-100 group-data-[indeterminate]:opacity-100"
});
function Checkbox({ className, children, ...props }) {
  return /* @__PURE__ */ jsx11(AriaCheckbox, { className: root2({ className }), ...props, children: ({ isIndeterminate }) => /* @__PURE__ */ jsxs4(Fragment, { children: [
    /* @__PURE__ */ jsx11("div", { className: box({}), children: /* @__PURE__ */ jsx11("svg", { viewBox: "0 0 12 12", fill: "none", className: check({}), children: isIndeterminate ? /* @__PURE__ */ jsx11("path", { d: "M2 6h8", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" }) : /* @__PURE__ */ jsx11(
      "path",
      {
        d: "M2 6.5L4.5 9L10 3",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ) }) }),
    children
  ] }) });
}

// src/date-field.tsx
import {
  DateField as AriaDateField,
  DateInput as AriaDateInput,
  DateSegment as AriaDateSegment,
  Label as Label2,
  Text as Text3,
  FieldError as FieldError2
} from "react-aria-components";
import { tv as tv12 } from "tailwind-variants";
import { jsx as jsx12, jsxs as jsxs5 } from "react/jsx-runtime";
var group = tv12({
  base: "flex w-fit items-center rounded-xl border-[1.5px] border-sand bg-cream px-3 py-2 text-sm text-charcoal outline-none transition-colors focus-within:border-charcoal focus-within:ring-2 focus-within:ring-charcoal/20 data-[invalid]:border-clay data-[invalid]:ring-clay/20"
});
var segment = tv12({
  base: "rounded px-0.5 tabular-nums outline-none data-[placeholder]:text-charcoal/40 data-[focused]:bg-accent data-[focused]:text-cream data-[disabled]:opacity-50"
});
function DateField({
  label: label2,
  description: description2,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs5(AriaDateField, { className: "flex flex-col gap-1.5", ...props, children: [
    label2 && /* @__PURE__ */ jsx12(Label2, { className: "text-sm font-medium text-charcoal", children: label2 }),
    /* @__PURE__ */ jsx12(AriaDateInput, { className: group({ className }), children: (seg) => /* @__PURE__ */ jsx12(AriaDateSegment, { segment: seg, className: segment({}) }) }),
    description2 && /* @__PURE__ */ jsx12(Text3, { slot: "description", className: "text-xs text-charcoal/60", children: description2 }),
    /* @__PURE__ */ jsx12(FieldError2, { className: "text-xs text-clay" })
  ] });
}

// src/date-picker.tsx
import {
  DatePicker as AriaDatePicker,
  Group as AriaGroup,
  DateInput as AriaDateInput2,
  DateSegment as AriaDateSegment2,
  Popover as AriaPopover2,
  Dialog as AriaDialog2,
  Button as AriaButton5,
  Label as Label3,
  Text as Text4,
  FieldError as FieldError3
} from "react-aria-components";
import { tv as tv13 } from "tailwind-variants";
import { jsx as jsx13, jsxs as jsxs6 } from "react/jsx-runtime";
var group2 = tv13({
  base: "flex items-center gap-2 rounded-xl border-[1.5px] border-sand bg-cream px-3 py-2 text-sm text-charcoal outline-none transition-colors data-[focus-within]:border-charcoal data-[focus-within]:ring-2 data-[focus-within]:ring-charcoal/20 data-[invalid]:border-clay data-[invalid]:ring-clay/20"
});
var segment2 = tv13({
  base: "rounded px-0.5 tabular-nums outline-none data-[placeholder]:text-charcoal/40 data-[focused]:bg-accent data-[focused]:text-cream data-[disabled]:opacity-50"
});
var triggerBtn = tv13({
  base: "ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-charcoal/50 outline-none transition-colors data-[hovered]:bg-sand/50 data-[hovered]:text-charcoal data-[pressed]:bg-sand/70"
});
var popover2 = tv13({
  base: "rounded-2xl border border-sand bg-cream p-4 text-charcoal shadow-lg outline-none data-[entering]:animate-[modal-fade-in_150ms_ease-out] data-[exiting]:animate-[modal-fade-out_120ms_ease-in]"
});
function DatePicker({
  label: label2,
  description: description2,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs6(AriaDatePicker, { className: `flex flex-col gap-1.5 ${className ?? ""}`, ...props, children: [
    label2 && /* @__PURE__ */ jsx13(Label3, { className: "text-sm font-medium text-charcoal", children: label2 }),
    /* @__PURE__ */ jsxs6(AriaGroup, { className: group2({}), children: [
      /* @__PURE__ */ jsx13(AriaDateInput2, { className: "flex flex-1", children: (seg) => /* @__PURE__ */ jsx13(AriaDateSegment2, { segment: seg, className: segment2({}) }) }),
      /* @__PURE__ */ jsx13(AriaButton5, { className: triggerBtn({}), children: "\u25BE" })
    ] }),
    description2 && /* @__PURE__ */ jsx13(Text4, { slot: "description", className: "text-xs text-charcoal/60", children: description2 }),
    /* @__PURE__ */ jsx13(FieldError3, { className: "text-xs text-clay" }),
    /* @__PURE__ */ jsx13(AriaPopover2, { className: popover2({}), children: /* @__PURE__ */ jsx13(AriaDialog2, { className: "outline-none", children }) })
  ] });
}

// src/disclosure.tsx
import {
  Disclosure as AriaDisclosure,
  DisclosurePanel as AriaDisclosurePanel,
  Button as AriaButton6,
  Heading as Heading2
} from "react-aria-components";
import { tv as tv14 } from "tailwind-variants";
import { jsx as jsx14, jsxs as jsxs7 } from "react/jsx-runtime";
var root3 = tv14({
  base: "group overflow-hidden rounded-2xl border border-sand bg-cream"
});
var trigger2 = tv14({
  base: "flex w-full items-center gap-2 border-0 bg-transparent px-4 py-3 text-left text-sm font-semibold text-charcoal outline-none transition-colors data-[hovered]:bg-sand/30 data-[focus-visible]:outline-2 data-[focus-visible]:outline-offset-[-2px] data-[focus-visible]:outline-accent"
});
var chevron = tv14({
  base: "h-3 w-3 shrink-0 text-charcoal/50 transition-transform duration-150 group-data-[expanded]:rotate-90"
});
var panel2 = tv14({
  base: "h-(--disclosure-panel-height) overflow-clip border-t border-sand/60 motion-safe:transition-[height] motion-safe:duration-250"
});
var panelInner = tv14({ base: "px-4 py-3 text-sm text-charcoal/80" });
function Disclosure({ className, ...props }) {
  return /* @__PURE__ */ jsx14(AriaDisclosure, { className: root3({ className }), ...props });
}
Disclosure.Trigger = function DisclosureTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx14(Heading2, { className: "m-0", children: /* @__PURE__ */ jsxs7(AriaButton6, { slot: "trigger", className: trigger2({ className }), ...props, children: [
    /* @__PURE__ */ jsx14("svg", { viewBox: "0 0 12 12", fill: "none", className: chevron({}), children: /* @__PURE__ */ jsx14("path", { d: "M4 2l4 4-4 4", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }) }),
    children
  ] }) });
};
Disclosure.Panel = function DisclosurePanel({ className, children }) {
  return /* @__PURE__ */ jsx14(AriaDisclosurePanel, { className: panel2({ className }), children: /* @__PURE__ */ jsx14("div", { className: panelInner({}), children }) });
};

// src/disclosure-group.tsx
import {
  DisclosureGroup as AriaDisclosureGroup
} from "react-aria-components";
import { tv as tv15 } from "tailwind-variants";
import { jsx as jsx15 } from "react/jsx-runtime";
var group3 = tv15({ base: "flex flex-col gap-2" });
function DisclosureGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx15(AriaDisclosureGroup, { className: group3({ className }), ...props });
}

// src/drop-zone.tsx
import {
  DropZone as AriaDropZone
} from "react-aria-components";
import { tv as tv16 } from "tailwind-variants";
import { jsx as jsx16 } from "react/jsx-runtime";
var zone = tv16({
  base: "flex min-h-24 w-full items-center justify-center rounded-2xl border-2 border-dashed border-sand p-6 text-center text-sm text-charcoal/60 outline-none transition-colors data-[focus-visible]:border-accent data-[drop-target]:border-accent data-[drop-target]:bg-accent/5 data-[drop-target]:text-accent"
});
function DropZone({ className, ...props }) {
  return /* @__PURE__ */ jsx16(AriaDropZone, { className: zone({ className }), ...props });
}

// src/file-upload.tsx
import { useState } from "react";
import {
  DropZone as AriaDropZone2,
  FileTrigger,
  Button as AriaButton7
} from "react-aria-components";
import { tv as tv17 } from "tailwind-variants";
import { jsx as jsx17, jsxs as jsxs8 } from "react/jsx-runtime";
var zone2 = tv17({
  base: "relative flex min-h-32 w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-sand bg-sand/10 p-6 text-center outline-none transition-colors data-[focus-visible]:border-accent data-[drop-target]:border-accent data-[drop-target]:bg-accent/5"
});
var hintStyle = tv17({ base: "text-xs text-charcoal/50" });
var fileNameStyle = tv17({ base: "max-w-full truncate text-xs font-medium text-charcoal" });
var errorStyle = tv17({ base: "text-xs text-clay" });
var browseBtn = tv17({ base: "text-xs font-semibold text-accent underline outline-none" });
var clearBtn = tv17({
  base: "absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-charcoal/60 text-white outline-none transition-colors data-[hovered]:bg-charcoal/80"
});
var ICONS2 = {
  image: /* @__PURE__ */ jsxs8("svg", { viewBox: "0 0 24 24", fill: "none", className: "h-8 w-8 text-charcoal/30", children: [
    /* @__PURE__ */ jsx17("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", stroke: "currentColor", strokeWidth: 1.5 }),
    /* @__PURE__ */ jsx17("circle", { cx: "8.5", cy: "8.5", r: "1.5", fill: "currentColor" }),
    /* @__PURE__ */ jsx17("path", { d: "M21 15l-5-5-9 9", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })
  ] }),
  audio: /* @__PURE__ */ jsxs8("svg", { viewBox: "0 0 24 24", fill: "none", className: "h-8 w-8 text-charcoal/30", children: [
    /* @__PURE__ */ jsx17("path", { d: "M9 18V5l12-2v13", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ jsx17("circle", { cx: "6", cy: "18", r: "3", stroke: "currentColor", strokeWidth: 1.5 }),
    /* @__PURE__ */ jsx17("circle", { cx: "18", cy: "16", r: "3", stroke: "currentColor", strokeWidth: 1.5 })
  ] }),
  default: /* @__PURE__ */ jsxs8("svg", { viewBox: "0 0 24 24", fill: "none", className: "h-8 w-8 text-charcoal/30", children: [
    /* @__PURE__ */ jsx17("path", { d: "M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z", stroke: "currentColor", strokeWidth: 1.5, strokeLinejoin: "round" }),
    /* @__PURE__ */ jsx17("path", { d: "M14 2v5h5", stroke: "currentColor", strokeWidth: 1.5, strokeLinejoin: "round" })
  ] })
};
var DEFAULT_ACCEPT = {
  image: ["image/*"],
  audio: ["audio/*"],
  default: void 0
};
var DEFAULT_HINT = {
  image: "PNG, JPG, or GIF \u2014 click or drag to upload",
  audio: "MP3, WAV, or FLAC \u2014 click or drag to upload",
  default: "Click or drag a file to upload"
};
function FileUpload({
  variant = "default",
  acceptedFileTypes,
  validate,
  hint,
  className,
  onFileSelect
}) {
  const [fileName, setFileName] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);
  const accept = acceptedFileTypes ?? DEFAULT_ACCEPT[variant];
  async function acceptFile(file) {
    setError(null);
    const validationError = await validate?.(file);
    if (validationError) {
      setError(validationError);
      return;
    }
    if (preview) URL.revokeObjectURL(preview);
    setFileName(file.name);
    setPreview(variant === "image" ? URL.createObjectURL(file) : null);
    onFileSelect(file);
  }
  function clear() {
    if (preview) URL.revokeObjectURL(preview);
    setPreview(null);
    setFileName(null);
    setError(null);
    onFileSelect(null);
  }
  return /* @__PURE__ */ jsxs8("div", { className: "flex flex-col gap-1", children: [
    /* @__PURE__ */ jsxs8(
      AriaDropZone2,
      {
        className: zone2({ className }),
        getDropOperation: (types) => !accept || accept.some((t) => types.has(t.replace("/*", "/"))) ? "copy" : "cancel",
        onDrop: async (e) => {
          const item5 = e.items.find((i) => i.kind === "file");
          if (item5) acceptFile(await item5.getFile());
        },
        children: [
          fileName && /* @__PURE__ */ jsx17("button", { type: "button", onClick: clear, className: clearBtn({}), "aria-label": "Remove file", children: "\u2715" }),
          preview ? /* @__PURE__ */ jsx17("img", { src: preview, alt: "preview", className: "h-24 w-24 rounded-xl object-cover" }) : !fileName ? ICONS2[variant] : null,
          fileName && !preview && /* @__PURE__ */ jsx17("p", { className: fileNameStyle({}), children: fileName }),
          /* @__PURE__ */ jsx17(
            FileTrigger,
            {
              acceptedFileTypes: accept,
              onSelect: (files) => {
                const file = files?.[0];
                if (file) acceptFile(file);
              },
              children: /* @__PURE__ */ jsx17(AriaButton7, { className: browseBtn({}), children: fileName ? "Choose a different file" : "Click to browse" })
            }
          ),
          /* @__PURE__ */ jsx17("p", { className: hintStyle({}), children: hint ?? DEFAULT_HINT[variant] })
        ]
      }
    ),
    error && /* @__PURE__ */ jsx17("p", { className: errorStyle({}), children: error })
  ] });
}

// src/meter.tsx
import { Meter as AriaMeter } from "react-aria-components";
import { tv as tv18 } from "tailwind-variants";
import { Fragment as Fragment2, jsx as jsx18, jsxs as jsxs9 } from "react/jsx-runtime";
var root4 = tv18({ base: "flex w-full flex-col gap-1.5" });
var labelRow = tv18({ base: "flex items-center justify-between text-sm" });
var label = tv18({ base: "font-medium text-charcoal" });
var value = tv18({ base: "text-charcoal/60" });
var track = tv18({ base: "h-2 w-full overflow-hidden rounded-full bg-sand/50" });
function fillColor(percentage) {
  if (percentage < 70) return "bg-success";
  if (percentage < 90) return "bg-warning";
  return "bg-danger";
}
function Meter({ label: labelText, className, ...props }) {
  return /* @__PURE__ */ jsx18(AriaMeter, { className: root4({ className }), ...props, children: ({ percentage, valueText: valueText2 }) => /* @__PURE__ */ jsxs9(Fragment2, { children: [
    /* @__PURE__ */ jsxs9("div", { className: labelRow({}), children: [
      labelText && /* @__PURE__ */ jsx18("span", { className: label({}), children: labelText }),
      /* @__PURE__ */ jsx18("span", { className: value({}), children: valueText2 })
    ] }),
    /* @__PURE__ */ jsx18("div", { className: track({}), children: /* @__PURE__ */ jsx18(
      "div",
      {
        className: `h-full rounded-full transition-all duration-300 ${fillColor(percentage)}`,
        style: { width: `${percentage}%` }
      }
    ) })
  ] }) });
}

// src/radio-group.tsx
import {
  RadioGroup as AriaRadioGroup,
  RadioField as AriaRadioField,
  RadioButton as AriaRadioButton,
  Label as Label4,
  Text as Text5,
  FieldError as FieldError4
} from "react-aria-components";
import { tv as tv19 } from "tailwind-variants";
import { Fragment as Fragment3, jsx as jsx19, jsxs as jsxs10 } from "react/jsx-runtime";
var group4 = tv19({ base: "flex flex-col gap-2" });
var itemsRow = tv19({
  base: "flex gap-4",
  variants: {
    orientation: {
      horizontal: "flex-row flex-wrap",
      vertical: "flex-col"
    }
  },
  defaultVariants: { orientation: "vertical" }
});
var radioButton = tv19({
  base: "group flex items-center gap-2 text-sm text-charcoal outline-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50"
});
var dot = tv19({
  base: "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-sand bg-cream transition-colors group-data-[selected]:border-accent group-data-[focus-visible]:outline-2 group-data-[focus-visible]:outline-offset-2 group-data-[focus-visible]:outline-accent"
});
var dotInner = tv19({
  base: "h-2.5 w-2.5 scale-0 rounded-full bg-accent transition-transform duration-150 group-data-[selected]:scale-100"
});
function RadioGroup({ label: label2, description: description2, className, children, ...props }) {
  return /* @__PURE__ */ jsx19(AriaRadioGroup, { className: group4({ className }), ...props, children: (renderProps) => /* @__PURE__ */ jsxs10(Fragment3, { children: [
    label2 && /* @__PURE__ */ jsx19(Label4, { className: "text-sm font-medium text-charcoal", children: label2 }),
    /* @__PURE__ */ jsx19("div", { className: itemsRow({ orientation: renderProps.orientation }), children }),
    description2 && /* @__PURE__ */ jsx19(Text5, { slot: "description", className: "text-xs text-charcoal/60", children: description2 }),
    /* @__PURE__ */ jsx19(FieldError4, { className: "text-xs text-clay" })
  ] }) });
}
function Radio({ className, description: description2, children, ...props }) {
  return /* @__PURE__ */ jsxs10(AriaRadioField, { className: "flex flex-col gap-1", ...props, children: [
    /* @__PURE__ */ jsxs10(AriaRadioButton, { className: radioButton({ className }), children: [
      /* @__PURE__ */ jsx19("span", { className: dot({}), children: /* @__PURE__ */ jsx19("span", { className: dotInner({}) }) }),
      children
    ] }),
    description2 && /* @__PURE__ */ jsx19(Text5, { slot: "description", className: "ml-6.5 text-xs text-charcoal/60", children: description2 })
  ] });
}

// src/select.tsx
import {
  Select as AriaSelect,
  SelectValue,
  Button as AriaButton8,
  Popover as AriaPopover3,
  ListBox as AriaListBox,
  ListBoxItem as AriaListBoxItem,
  Label as Label5,
  Text as Text6,
  FieldError as FieldError5
} from "react-aria-components";
import { tv as tv20 } from "tailwind-variants";
import { jsx as jsx20, jsxs as jsxs11 } from "react/jsx-runtime";
var root5 = tv20({ base: "flex flex-col gap-1.5" });
var trigger3 = tv20({
  base: "flex w-full items-center gap-2 rounded-xl border-[1.5px] border-sand bg-cream px-3 py-2 text-left text-sm text-charcoal outline-none transition-colors data-[hovered]:border-charcoal/30 data-[pressed]:bg-sand/20 data-[focus-visible]:border-charcoal data-[focus-visible]:ring-2 data-[focus-visible]:ring-charcoal/20 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50"
});
var value2 = tv20({
  base: "flex-1 truncate",
  variants: {
    placeholder: {
      true: "text-charcoal/40"
    }
  }
});
var chevron2 = tv20({ base: "h-3 w-3 shrink-0 text-charcoal/50" });
var popover3 = tv20({
  base: "min-w-(--trigger-width) overflow-hidden rounded-xl border border-sand bg-cream p-1 text-charcoal shadow-lg outline-none data-[entering]:animate-[modal-fade-in_120ms_ease-out] data-[exiting]:animate-[modal-fade-out_100ms_ease-in]"
});
var listbox = tv20({ base: "flex max-h-64 flex-col gap-0.5 overflow-auto outline-none" });
var item3 = tv20({
  base: "flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm outline-none transition-colors data-[hovered]:bg-sand/40 data-[focused]:bg-sand/40 data-[selected]:font-semibold data-[disabled]:cursor-not-allowed data-[disabled]:opacity-40"
});
function Select({
  label: label2,
  description: description2,
  className,
  children,
  items,
  ...props
}) {
  return /* @__PURE__ */ jsxs11(AriaSelect, { className: root5({ className }), ...props, children: [
    label2 && /* @__PURE__ */ jsx20(Label5, { className: "text-sm font-medium text-charcoal", children: label2 }),
    /* @__PURE__ */ jsxs11(AriaButton8, { className: trigger3({}), children: [
      /* @__PURE__ */ jsx20(SelectValue, { className: value2({}) }),
      /* @__PURE__ */ jsx20("svg", { viewBox: "0 0 12 12", fill: "none", className: chevron2({}), children: /* @__PURE__ */ jsx20("path", { d: "M2.5 4.5L6 8l3.5-3.5", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }) })
    ] }),
    description2 && /* @__PURE__ */ jsx20(Text6, { slot: "description", className: "text-xs text-charcoal/60", children: description2 }),
    /* @__PURE__ */ jsx20(FieldError5, { className: "text-xs text-clay" }),
    /* @__PURE__ */ jsx20(AriaPopover3, { className: popover3({}), children: /* @__PURE__ */ jsx20(AriaListBox, { className: listbox({}), items, children }) })
  ] });
}
Select.Item = function SelectItem({ className, ...props }) {
  return /* @__PURE__ */ jsx20(AriaListBoxItem, { className: item3({ className }), ...props });
};

// src/switch.tsx
import {
  SwitchField as AriaSwitchField,
  SwitchButton as AriaSwitchButton
} from "react-aria-components";
import { tv as tv21 } from "tailwind-variants";
import { jsx as jsx21, jsxs as jsxs12 } from "react/jsx-runtime";
var button2 = tv21({
  base: "group flex items-center gap-2 text-sm text-charcoal outline-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50"
});
var track2 = tv21({
  base: "flex h-6 w-10 shrink-0 items-center rounded-full bg-sand px-0.5 transition-colors group-data-[selected]:bg-accent group-data-[focus-visible]:outline-2 group-data-[focus-visible]:outline-offset-2 group-data-[focus-visible]:outline-accent"
});
var thumb = tv21({
  base: "h-5 w-5 rounded-full bg-cream shadow-sm transition-transform duration-150 group-data-[selected]:translate-x-4"
});
function Switch({ className, children, ...props }) {
  return /* @__PURE__ */ jsx21(AriaSwitchField, { ...props, children: /* @__PURE__ */ jsxs12(AriaSwitchButton, { className: button2({ className }), children: [
    /* @__PURE__ */ jsx21("span", { className: track2({}), children: /* @__PURE__ */ jsx21("span", { className: thumb({}) }) }),
    children
  ] }) });
}

// src/skeleton.tsx
import { tv as tv22 } from "tailwind-variants";
import { jsx as jsx22 } from "react/jsx-runtime";
var skeleton = tv22({
  base: "animate-pulse rounded-md bg-sand/50"
});
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx22("div", { className: skeleton({ className }), ...props });
}

// src/popover.tsx
import {
  Popover as AriaPopover4
} from "react-aria-components";
import { tv as tv23 } from "tailwind-variants";
import { jsx as jsx23 } from "react/jsx-runtime";
var popover4 = tv23({
  base: "rounded-xl border border-sand bg-cream p-3 text-sm text-charcoal shadow-lg outline-none data-[entering]:animate-[modal-fade-in_120ms_ease-out] data-[exiting]:animate-[modal-fade-out_100ms_ease-in]"
});
function Popover({ className, ...props }) {
  return /* @__PURE__ */ jsx23(AriaPopover4, { className: popover4({ className }), ...props });
}

// src/index.ts
import { DialogTrigger as DialogTrigger2 } from "react-aria-components";

// src/tooltip.tsx
import {
  Tooltip as AriaTooltip,
  TooltipTrigger,
  OverlayArrow
} from "react-aria-components";
import { tv as tv24 } from "tailwind-variants";
import { jsx as jsx24, jsxs as jsxs13 } from "react/jsx-runtime";
var tooltip = tv24({
  base: "max-w-48 rounded-lg bg-charcoal px-2.5 py-1.5 text-xs text-cream shadow-lg outline-none data-[entering]:animate-[modal-fade-in_100ms_ease-out] data-[exiting]:animate-[modal-fade-out_80ms_ease-in]"
});
function Tooltip({ className, children, ...props }) {
  return /* @__PURE__ */ jsxs13(AriaTooltip, { className: tooltip({ className }), offset: 8, ...props, children: [
    /* @__PURE__ */ jsx24(OverlayArrow, { children: /* @__PURE__ */ jsx24("svg", { width: 8, height: 8, viewBox: "0 0 8 8", className: "fill-charcoal", children: /* @__PURE__ */ jsx24("path", { d: "M0 0 L4 4 L8 0" }) }) }),
    children
  ] });
}

// src/tabs.tsx
import {
  Tabs as AriaTabs,
  TabList as AriaTabList,
  Tab as AriaTab,
  TabPanels as AriaTabPanels,
  TabPanel as AriaTabPanel,
  SelectionIndicator
} from "react-aria-components";
import { tv as tv25 } from "tailwind-variants";
import { jsx as jsx25, jsxs as jsxs14 } from "react/jsx-runtime";
var root6 = tv25({
  base: "flex gap-2 data-[orientation=horizontal]:flex-col data-[orientation=vertical]:flex-row"
});
var list3 = tv25({
  base: "flex overflow-x-auto pb-2 overflow-y-clip [scrollbar-width:none] data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:border-b data-[orientation=horizontal]:border-sand data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:border-r data-[orientation=vertical]:border-sand"
});
var tab = tv25({
  base: "group relative flex cursor-pointer items-center rounded-full px-4 py-1.5 text-sm font-medium text-charcoal/60 outline-none transition-colors data-[hovered]:text-charcoal data-[selected]:text-cream data-[disabled]:cursor-not-allowed data-[disabled]:text-charcoal/20"
});
var indicator = tv25({
  base: "absolute inset-0 rounded-full bg-accent motion-safe:transition-[translate,width,height] group-data-[disabled]:bg-sand"
});
var panels = tv25({ base: "outline-none" });
var panel3 = tv25({
  base: "p-3 text-sm text-charcoal outline-none transition-opacity duration-150 data-[entering]:opacity-0"
});
function Tabs({ className, ...props }) {
  return /* @__PURE__ */ jsx25(AriaTabs, { className: root6({ className }), ...props });
}
Tabs.List = function TabList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx25(AriaTabList, { className: list3({ className }), ...props });
};
Tabs.Tab = function Tab({ className, children, ...props }) {
  return /* @__PURE__ */ jsxs14(AriaTab, { className: tab({ className }), ...props, children: [
    /* @__PURE__ */ jsx25(SelectionIndicator, { className: indicator({}) }),
    /* @__PURE__ */ jsx25("span", { className: "relative", children })
  ] });
};
Tabs.Panels = function TabPanels({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx25(AriaTabPanels, { className: panels({ className }), ...props });
};
Tabs.Panel = function TabPanel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx25(AriaTabPanel, { className: panel3({ className }), ...props });
};

// src/autocomplete.tsx
import {
  Autocomplete as AriaAutocomplete,
  useFilter,
  TextField as AriaTextField2,
  Input as AriaInput2,
  ListBox as AriaListBox2,
  ListBoxItem as AriaListBoxItem2,
  Button as AriaButton9,
  Popover as AriaPopover5
} from "react-aria-components";
import { tv as tv26 } from "tailwind-variants";
import { createContext as createContext2, useContext as useContext2, useRef, useState as useState2 } from "react";
import { jsx as jsx26, jsxs as jsxs15 } from "react/jsx-runtime";
var AutocompleteContext = createContext2(null);
function useAutocompleteContext() {
  const ctx = useContext2(AutocompleteContext);
  if (!ctx) throw new Error("Autocomplete.* components must be used inside <Autocomplete>");
  return ctx;
}
var triggerDiv = tv26({
  base: "flex w-full cursor-pointer items-center justify-between gap-2 rounded-xl border-[1.5px] border-sand bg-cream px-3 py-2 text-sm text-charcoal outline-none transition-colors hover:border-charcoal/40 focus-visible:border-charcoal focus-visible:ring-2 focus-visible:ring-charcoal/20 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
});
var valueText = tv26({ base: "flex-1 truncate text-left" });
var placeholderText = tv26({ base: "flex-1 truncate text-left text-charcoal/40" });
var clearBtn2 = tv26({
  base: "flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-charcoal/40 transition-colors hover:bg-sand/60 hover:text-charcoal"
});
var indicator2 = tv26({ base: "shrink-0 text-charcoal/40" });
var popover5 = tv26({
  base: "w-[var(--trigger-width)] overflow-hidden rounded-xl border border-sand bg-cream p-2 shadow-lg outline-none data-[entering]:animate-[modal-fade-in_120ms_ease-out] data-[exiting]:animate-[modal-fade-out_100ms_ease-in]"
});
var searchWrap = tv26({
  base: "mb-2 flex items-center rounded-lg border-[1.5px] border-sand bg-cream px-2 py-1.5 outline-none transition-colors data-[focus-within]:border-charcoal"
});
var searchInput = tv26({ base: "w-full bg-transparent text-sm text-charcoal outline-none placeholder:text-charcoal/40" });
var list4 = tv26({ base: "flex max-h-64 flex-col gap-0.5 overflow-auto outline-none" });
var item4 = tv26({
  base: "flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm outline-none transition-colors data-[hovered]:bg-sand/40 data-[focused]:bg-sand/40 data-[selected]:font-semibold data-[disabled]:cursor-not-allowed data-[disabled]:opacity-40"
});
function Autocomplete({ selectedKey = null, onSelectionChange, children }) {
  const [isOpen, setIsOpen] = useState2(false);
  const triggerRef = useRef(null);
  return /* @__PURE__ */ jsx26(
    AutocompleteContext.Provider,
    {
      value: { isOpen, setIsOpen, selectedKey, onSelectionChange: onSelectionChange ?? (() => {
      }), triggerRef },
      children: /* @__PURE__ */ jsx26("div", { className: "relative", children })
    }
  );
}
Autocomplete.Trigger = function AutocompleteTrigger({ className, children }) {
  const { isOpen, setIsOpen, triggerRef } = useAutocompleteContext();
  return /* @__PURE__ */ jsx26(
    "div",
    {
      ref: triggerRef,
      role: "button",
      tabIndex: 0,
      "aria-haspopup": "listbox",
      "aria-expanded": isOpen,
      className: triggerDiv({ className }),
      onClick: () => setIsOpen(!isOpen),
      onKeyDown: (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsOpen(!isOpen);
        }
      },
      children
    }
  );
};
Autocomplete.Value = function AutocompleteValue({ placeholder = "Select\u2026", children }) {
  const { selectedKey } = useAutocompleteContext();
  if (!selectedKey || !children) return /* @__PURE__ */ jsx26("span", { className: placeholderText(), children: placeholder });
  return /* @__PURE__ */ jsx26("span", { className: valueText(), children });
};
Autocomplete.ClearButton = function AutocompleteClearButton({ className }) {
  const { selectedKey, onSelectionChange } = useAutocompleteContext();
  if (!selectedKey) return null;
  return /* @__PURE__ */ jsx26("span", { onClick: (e) => e.stopPropagation(), onKeyDown: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsx26(AriaButton9, { className: clearBtn2({ className }), "aria-label": "Clear selection", onPress: () => onSelectionChange(null), children: "\u2715" }) });
};
Autocomplete.Indicator = function AutocompleteIndicator({ className }) {
  return /* @__PURE__ */ jsx26("svg", { className: indicator2({ className }), width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", children: /* @__PURE__ */ jsx26("path", { d: "m6 9 6 6 6-6" }) });
};
Autocomplete.Popover = function AutocompletePopover({ className, children }) {
  const { isOpen, setIsOpen, triggerRef } = useAutocompleteContext();
  const { contains } = useFilter({ sensitivity: "base" });
  return /* @__PURE__ */ jsx26(
    AriaPopover5,
    {
      isOpen,
      onOpenChange: setIsOpen,
      triggerRef,
      className: popover5({ className }),
      children: /* @__PURE__ */ jsxs15(AriaAutocomplete, { filter: contains, children: [
        /* @__PURE__ */ jsx26(AriaTextField2, { "aria-label": "Search", className: searchWrap({}), children: /* @__PURE__ */ jsx26(AriaInput2, { placeholder: "Search...", className: searchInput({}) }) }),
        children
      ] })
    }
  );
};
Autocomplete.List = function AutocompleteList({
  className,
  children,
  renderEmptyState
}) {
  const { selectedKey, onSelectionChange, setIsOpen } = useAutocompleteContext();
  return /* @__PURE__ */ jsx26(
    AriaListBox2,
    {
      className: list4({ className }),
      selectionMode: "single",
      selectedKeys: selectedKey ? [selectedKey] : [],
      onSelectionChange: (keys) => {
        const key = Array.from(keys)[0] ?? null;
        onSelectionChange(key);
        setIsOpen(false);
      },
      renderEmptyState,
      children
    }
  );
};
Autocomplete.Item = function AutocompleteItem({ className, ...props }) {
  return /* @__PURE__ */ jsx26(AriaListBoxItem2, { className: item4({ className }), ...props });
};

// src/alert-dialog.tsx
import { useContext as useContext3, useState as useState3 } from "react";
import { Fragment as Fragment4, jsx as jsx27, jsxs as jsxs16 } from "react/jsx-runtime";
function AlertDialog({
  isOpen,
  defaultOpen,
  onOpenChange,
  title: title2,
  description: description2,
  actionLabel = "Confirm",
  cancelLabel = "Cancel",
  onAction,
  isDestructive = false
}) {
  const [isActionLoading, setIsActionLoading] = useState3(false);
  return /* @__PURE__ */ jsx27(Modal, { isOpen, defaultOpen, onOpenChange, children: /* @__PURE__ */ jsx27(Modal.Backdrop, { isOpen, onOpenChange, children: /* @__PURE__ */ jsx27(Modal.Container, { size: "sm", children: /* @__PURE__ */ jsxs16(Modal.Dialog, { children: [
    /* @__PURE__ */ jsx27(Modal.Header, { children: /* @__PURE__ */ jsx27(Modal.Heading, { children: title2 }) }),
    description2 && /* @__PURE__ */ jsx27(Modal.Body, { children: description2 }),
    /* @__PURE__ */ jsx27(Modal.Footer, { children: /* @__PURE__ */ jsx27(
      AlertDialogActions,
      {
        actionLabel,
        cancelLabel,
        onAction,
        isDestructive,
        isActionLoading,
        setIsActionLoading
      }
    ) })
  ] }) }) }) });
}
function AlertDialogActions({
  actionLabel,
  cancelLabel,
  onAction,
  isDestructive,
  isActionLoading,
  setIsActionLoading
}) {
  const close = useContext3(ModalCloseContext);
  return /* @__PURE__ */ jsxs16(Fragment4, { children: [
    /* @__PURE__ */ jsx27(Button, { variant: "secondary", size: "sm", onPress: close, children: cancelLabel }),
    /* @__PURE__ */ jsx27(
      Button,
      {
        variant: isDestructive ? "danger" : "primary",
        size: "sm",
        isDisabled: isActionLoading,
        onPress: async () => {
          setIsActionLoading(true);
          try {
            await onAction();
          } finally {
            setIsActionLoading(false);
          }
        },
        children: isActionLoading ? "Working\u2026" : actionLabel
      }
    )
  ] });
}

// src/spinner.tsx
import { tv as tv27 } from "tailwind-variants";
import { jsx as jsx28 } from "react/jsx-runtime";
var spinner = tv27({
  base: "inline-block animate-spin rounded-full border-solid border-current border-r-transparent",
  variants: {
    size: {
      sm: "h-4 w-4 border-2",
      md: "h-6 w-6 border-2",
      lg: "h-10 w-10 border-[3px]"
    },
    variant: {
      default: "text-charcoal",
      inverse: "text-cream",
      muted: "text-charcoal/50",
      primary: "text-charcoal",
      secondary: "text-sand",
      danger: "text-danger"
    }
  },
  defaultVariants: {
    size: "md",
    variant: "default"
  }
});
function Spinner({ size, variant, className, label: label2 = "Loading" }) {
  return /* @__PURE__ */ jsx28(
    "span",
    {
      role: "status",
      "aria-label": label2,
      className: spinner({ size, variant, className })
    }
  );
}

// src/avatar.tsx
import { useState as useState4 } from "react";
import { tv as tv28 } from "tailwind-variants";
import { jsx as jsx29 } from "react/jsx-runtime";
var avatar = tv28({
  base: "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-sand font-semibold text-charcoal select-none leading-none align-top",
  variants: {
    size: {
      xs: "size-6 text-xs",
      sm: "size-8 text-sm",
      md: "size-10 text-base",
      lg: "size-14 text-lg",
      xl: "size-20 text-2xl"
    }
  },
  defaultVariants: {
    size: "md"
  }
});
function getInitials(name) {
  if (!name) return "?";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
function Avatar({ src, name, size, className, alt }) {
  const [hasError, setHasError] = useState4(false);
  const showImage = src && !hasError;
  return /* @__PURE__ */ jsx29("span", { className: avatar({ size, className }), children: showImage ? /* @__PURE__ */ jsx29(
    "img",
    {
      src,
      alt: alt ?? name ?? "Avatar",
      className: "h-full w-full object-cover",
      onError: () => setHasError(true)
    }
  ) : /* @__PURE__ */ jsx29("span", { "aria-hidden": !!name, "aria-label": !name ? "Avatar" : void 0, children: getInitials(name) }) });
}

// src/avatar-group.tsx
import { Children, cloneElement, isValidElement } from "react";
import { tv as tv29 } from "tailwind-variants";
import { jsx as jsx30, jsxs as jsxs17 } from "react/jsx-runtime";
var overflow = tv29({
  base: "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-charcoal font-semibold text-cream ring-2 ring-cream select-none",
  variants: {
    size: {
      xs: "size-6 text-[10px]",
      sm: "size-8 text-xs",
      md: "size-10 text-sm",
      lg: "size-14 text-base",
      xl: "size-20 text-xl"
    }
  },
  defaultVariants: { size: "md" }
});
var stackItem = tv29({
  base: "inline-flex shrink-0 ring-2 ring-cream rounded-full"
});
function AvatarGroup({ children, max = 4, size = "md", className }) {
  const items = Children.toArray(children).filter(isValidElement);
  const visible = items.slice(0, max);
  const overflowCount = items.length - visible.length;
  return /* @__PURE__ */ jsxs17("div", { className: `flex items-center -space-x-3 ${className ?? ""}`, children: [
    visible.map((child, i) => /* @__PURE__ */ jsx30("div", { className: stackItem(), style: { zIndex: visible.length - i }, children: cloneElement(child, { size }) }, i)),
    overflowCount > 0 && /* @__PURE__ */ jsxs17("div", { className: overflow({ size }), style: { zIndex: 0 }, children: [
      "+",
      overflowCount
    ] })
  ] });
}

// src/search-field.tsx
import {
  SearchField as AriaSearchField,
  Input as AriaInput3,
  Button as AriaButton10
} from "react-aria-components";
import { tv as tv30 } from "tailwind-variants";
import { jsx as jsx31, jsxs as jsxs18 } from "react/jsx-runtime";
var field = tv30({
  base: "group relative flex w-full items-center"
});
var input2 = tv30({
  base: "w-full rounded-xl border-[1.5px] border-sand bg-cream py-2 pl-9 pr-8 text-sm text-charcoal outline-none transition-colors placeholder:text-charcoal/40 focus:border-charcoal focus:ring-2 focus:ring-charcoal/20 disabled:opacity-50 disabled:cursor-not-allowed [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none"
});
var icon = tv30({
  base: "pointer-events-none absolute left-3 h-4 w-4 text-charcoal/40"
});
var clearBtn3 = tv30({
  base: "absolute right-2 flex h-5 w-5 items-center justify-center rounded-full text-charcoal/40 transition-colors hover:bg-sand/60 hover:text-charcoal group-data-[empty]:invisible"
});
function SearchField({ className, placeholder = "Search\u2026", ...props }) {
  return /* @__PURE__ */ jsxs18(AriaSearchField, { className: field({ className }), ...props, children: [
    /* @__PURE__ */ jsxs18(
      "svg",
      {
        className: icon(),
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        "aria-hidden": "true",
        children: [
          /* @__PURE__ */ jsx31("circle", { cx: "11", cy: "11", r: "7" }),
          /* @__PURE__ */ jsx31("path", { d: "m21 21-4.3-4.3" })
        ]
      }
    ),
    /* @__PURE__ */ jsx31(AriaInput3, { className: input2(), placeholder }),
    /* @__PURE__ */ jsx31(AriaButton10, { className: clearBtn3(), "aria-label": "Clear search", children: "\u2715" })
  ] });
}

// src/audio-player.tsx
import { useEffect, useRef as useRef2, useState as useState5 } from "react";
import { tv as tv31 } from "tailwind-variants";
import { jsx as jsx32, jsxs as jsxs19 } from "react/jsx-runtime";
var timeText = tv31({ base: "text-xs text-charcoal/40 tabular-nums" });
var iconBtn = tv31({
  base: "flex shrink-0 items-center justify-center text-charcoal/40 outline-none transition-colors hover:text-charcoal disabled:cursor-not-allowed disabled:opacity-40 data-[focus-visible]:outline-2 data-[focus-visible]:outline-offset-2 data-[focus-visible]:outline-accent"
});
var popover6 = tv31({
  base: "absolute bottom-full mb-3 flex items-center justify-center rounded-full border border-sand bg-cream p-2 shadow-lg"
});
function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}
function AudioPlayer({ src, filename, className }) {
  const audioRef = useRef2(null);
  const volumeWrapperRef = useRef2(null);
  const [isPlaying, setIsPlaying] = useState5(false);
  const [currentTime, setCurrentTime] = useState5(0);
  const [duration, setDuration] = useState5(0);
  const [volume, setVolume] = useState5(80);
  const [isMuted, setIsMuted] = useState5(false);
  const [showVolume, setShowVolume] = useState5(false);
  const [downloading, setDownloading] = useState5(false);
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration || 0);
    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume / 100;
    }
  }, [volume, isMuted]);
  useEffect(() => {
    function handleClickOutside(e) {
      if (volumeWrapperRef.current && !volumeWrapperRef.current.contains(e.target)) {
        setShowVolume(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      void audio.play();
    }
    setIsPlaying(!isPlaying);
  }
  function handleScrub(e) {
    const audio = audioRef.current;
    if (!audio) return;
    const newTime = Number(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  }
  async function handleDownload() {
    setDownloading(true);
    try {
      const res = await fetch(src);
      const blob = await res.blob();
      const objectUrl = URL.createObjectURL(blob);
      const link2 = document.createElement("a");
      link2.href = objectUrl;
      link2.download = filename ?? "track";
      document.body.appendChild(link2);
      link2.click();
      document.body.removeChild(link2);
      URL.revokeObjectURL(objectUrl);
    } catch {
    } finally {
      setDownloading(false);
    }
  }
  const scrubPercent = duration ? currentTime / duration * 100 : 0;
  const volumePercent = isMuted ? 0 : volume;
  return /* @__PURE__ */ jsxs19(Card, { className: `w-full p-5 pt-8 ${className ?? ""}`, children: [
    /* @__PURE__ */ jsx32("audio", { ref: audioRef, src, preload: "metadata" }),
    /* @__PURE__ */ jsxs19("div", { className: "flex flex-col gap-3", children: [
      /* @__PURE__ */ jsxs19("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ jsx32(
          "input",
          {
            type: "range",
            min: 0,
            max: duration || 100,
            step: 1,
            value: currentTime,
            onChange: handleScrub,
            "aria-label": "Seek",
            className: "rellui-audio-range",
            style: { "--fill-percent": `${scrubPercent}%` }
          }
        ),
        /* @__PURE__ */ jsxs19("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx32("span", { className: timeText(), children: formatTime(currentTime) }),
          /* @__PURE__ */ jsx32("span", { className: timeText(), children: formatTime(duration) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs19("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx32("div", { className: "flex w-6 shrink-0 justify-center", children: /* @__PURE__ */ jsx32(
          "button",
          {
            type: "button",
            onClick: handleDownload,
            disabled: downloading,
            "aria-label": "Download",
            className: iconBtn(),
            children: downloading ? /* @__PURE__ */ jsx32("svg", { viewBox: "0 0 24 24", width: "16", height: "16", className: "animate-spin", fill: "none", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsx32("path", { d: "M21 12a9 9 0 1 1-9-9", strokeLinecap: "round" }) }) : /* @__PURE__ */ jsxs19("svg", { viewBox: "0 0 24 24", width: "16", height: "16", fill: "none", stroke: "currentColor", strokeWidth: 2, children: [
              /* @__PURE__ */ jsx32("path", { d: "M12 3v12", strokeLinecap: "round" }),
              /* @__PURE__ */ jsx32("path", { d: "m7 11 5 5 5-5", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ jsx32("path", { d: "M5 21h14", strokeLinecap: "round" })
            ] })
          }
        ) }),
        /* @__PURE__ */ jsx32("div", { className: "flex flex-1 justify-center", children: /* @__PURE__ */ jsx32(
          Button,
          {
            variant: "primary",
            onPress: togglePlay,
            "aria-label": isPlaying ? "Pause" : "Play",
            className: "!size-11 !rounded-full !p-0",
            children: isPlaying ? /* @__PURE__ */ jsxs19("svg", { viewBox: "0 0 24 24", width: "16", height: "16", fill: "currentColor", children: [
              /* @__PURE__ */ jsx32("rect", { x: "6", y: "4", width: "4", height: "16", rx: "1" }),
              /* @__PURE__ */ jsx32("rect", { x: "14", y: "4", width: "4", height: "16", rx: "1" })
            ] }) : /* @__PURE__ */ jsx32("svg", { viewBox: "0 0 24 24", width: "16", height: "16", fill: "currentColor", className: "ml-0.5", children: /* @__PURE__ */ jsx32("path", { d: "M6 4l14 8-14 8V4z" }) })
          }
        ) }),
        /* @__PURE__ */ jsxs19("div", { ref: volumeWrapperRef, className: "relative flex w-6 shrink-0 justify-center", children: [
          showVolume && /* @__PURE__ */ jsx32("div", { className: popover6(), children: /* @__PURE__ */ jsx32(
            "input",
            {
              type: "range",
              min: 0,
              max: 100,
              step: 1,
              value: volumePercent,
              onChange: (e) => {
                const newVolume = Number(e.target.value);
                setVolume(newVolume);
                if (newVolume > 0) setIsMuted(false);
              },
              "aria-label": "Volume",
              className: "rellui-audio-range rellui-audio-range--vertical",
              style: { "--fill-percent": `${volumePercent}%` }
            }
          ) }),
          /* @__PURE__ */ jsx32(
            "button",
            {
              type: "button",
              onClick: () => setShowVolume(!showVolume),
              "aria-label": "Volume",
              className: iconBtn(),
              children: isMuted || volume === 0 ? /* @__PURE__ */ jsxs19("svg", { viewBox: "0 0 24 24", width: "16", height: "16", fill: "none", stroke: "currentColor", strokeWidth: 2, children: [
                /* @__PURE__ */ jsx32("path", { d: "M11 5 6 9H2v6h4l5 4V5z", strokeLinecap: "round", strokeLinejoin: "round" }),
                /* @__PURE__ */ jsx32("path", { d: "m17 9 4 6M21 9l-4 6", strokeLinecap: "round" })
              ] }) : /* @__PURE__ */ jsxs19("svg", { viewBox: "0 0 24 24", width: "16", height: "16", fill: "none", stroke: "currentColor", strokeWidth: 2, children: [
                /* @__PURE__ */ jsx32("path", { d: "M11 5 6 9H2v6h4l5 4V5z", strokeLinecap: "round", strokeLinejoin: "round" }),
                /* @__PURE__ */ jsx32("path", { d: "M15.5 8.5a5 5 0 0 1 0 7", strokeLinecap: "round" })
              ] })
            }
          )
        ] })
      ] })
    ] })
  ] });
}
export {
  AlertDialog,
  AudioPlayer,
  Autocomplete,
  Avatar,
  AvatarGroup,
  Breadcrumbs,
  Button,
  Calendar,
  Card,
  Checkbox,
  Chip,
  DateField,
  DatePicker,
  DialogTrigger2 as DialogTrigger,
  Disclosure,
  DisclosureGroup,
  DropZone,
  EmptyState,
  FileUpload,
  Menu,
  Meter,
  Modal,
  Popover,
  Radio,
  RadioGroup,
  SearchField,
  Select,
  Skeleton,
  Spinner,
  Switch,
  Table,
  Tabs,
  TextField,
  Toaster,
  Tooltip,
  TooltipTrigger,
  toast
};
