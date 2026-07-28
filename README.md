# rellui

A personal React component library built on [React Aria Components](https://react-spectrum.adobe.com/react-aria/) and [tailwind-variants](https://www.tailwind-variants.org/), styled with Tailwind CSS v4. Same spirit as RellUI (the GLua/PAC3 component library), for the web.

Every component wraps a real React Aria primitive underneath — accessibility (keyboard nav, ARIA roles, focus management) comes for free from React Aria; rellui adds the visual layer and a compound, dot-notation API (`Modal.Trigger`, `Card.Title`, `Table.Row`) on top.

## Install

Inside a project:

```bash
npm i @rell333/rellui@lastest
```


Requires **React 19+** and **Tailwind CSS v4**.

In your `globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Liter&display=swap');
@import "tailwindcss";
@import "@rell333/rellui/theme.css";
@source "../node_modules/@rell333/rellui/dist";
```

The `@source` line is what lets Tailwind generate utility classes from rellui's compiled output — without it, every component renders completely unstyled.

## Theming

`theme.css` defines two layers of design tokens:

**Literal palette** — decorative colors named for what they are: `gold`, `sage`, `indigo`, `blush`, `clay`, `charcoal`, `cream`, `mint`, `sand`. Use these for anything where "whatever this theme's version of that color is" is the right behavior — backgrounds, borders, icon tiles.

**Semantic roles** — `success`, `warning`, `danger`, `accent`. Use these anywhere a *meaning* has to survive a theme swap. This distinction exists because of a real bug: Chip's first version used literal tokens (sage for success, gold for warning) directly, and it worked fine under the warm theme — but under mono, sage and gold both just become shades of grey, silently breaking every status color at once. The fix was adding a second token layer that each theme defines independently, so success can stay green under mono even though the theme's literal sage doesn't.

**Rule of thumb going forward:** if a component's color choice is about *identity* (this is a danger button, this is a success chip), use the semantic token. If it's about *decoration* (an icon tile, a background tint), the literal palette is fine.

Two themes ship today — `warm` (the default palette) and `mono` (black/grey/red) — toggled via a `data-theme` attribute:

```tsx
<html data-theme="warm">
```

```tsx
document.documentElement.setAttribute("data-theme", "mono")
```

Adding a third theme means adding a new `[data-theme="..."]` block defining all thirteen tokens (9 literal + 4 semantic) — nothing in any component needs to change.

## Components

**Form:** Button, TextField, Checkbox, Switch, RadioGroup/Radio, Select, DateField, DatePicker, Calendar, FileUpload, DropZone, FileTrigger

**Overlay:** Modal, Popover, Menu, Tooltip, Toast/Toaster

**Navigation:** Breadcrumbs, Tabs, Disclosure/DisclosureGroup

**Data display:** Card, Table, Chip, Meter, Skeleton, Autocomplete

Every component's props extend the underlying React Aria props (`Omit<AriaXProps, "className">` plus a plain `className?: string`), so anything React Aria supports — `isDisabled`, validation, controlled/uncontrolled state — works without rellui needing to re-declare it.

# Stack

- React Aria Components — behavior and accessibility
- tailwind-variants — variant-based styling
- Tailwind CSS v4 — utility classes, CSS-first theming
- tsup — build (ESM output, bundled types)
- Liter (Google Fonts) — default typeface, loaded via theme.css
