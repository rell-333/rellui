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

## Known gaps

Not yet built: TagGroup (keyboard-navigable removable tag list, distinct from Chip's individual remove buttons), TextArea, ProgressBar (indeterminate/determinate loading — distinct from Meter, which is for known quantities against thresholds), NumberField, Slider.

Button's `danger` variant still uses the literal `clay` token directly rather than the semantic `danger` token — the one remaining inconsistency from before the Chip lesson. Low priority since clay and danger happen to resolve to similar colors in both current themes, but worth fixing before adding a third theme where they might diverge.

No automated tests, no CI, not published to npm — built for personal use across projects via `file:` dependencies, not (yet) a public package.

## Gotchas learned the hard way

**Toast animations are not automatic.** Every other overlay component (Modal, Popover, Tooltip) gets `data-entering`/`data-exiting` attributes for free from React Aria. Toast does not — it's a newer, still-alpha API, and Adobe's own recommended path is wiring the ToastQueue's `wrapUpdate` option through the browser's native View Transitions API, with `flushSync` to force a synchronous DOM update inside the transition callback. See `toast.tsx` for the working implementation, including:
- `view-transition-class` (not `view-transition-name` alone) to scope the animation to just toast elements, since a bare `view-transition-name` sweeps the *entire page* into a root cross-fade by default.
- `animation-fill-mode: forwards` on the exit keyframe — without it, a toast visibly snaps back to its start position the instant its own animation finishes, because the overall transition is still running.
- A guard against starting a second `startViewTransition()` while one is in flight — rapid-fire toasts otherwise get silently dropped mid-animation.

**Disclosure's height animation needs the real CSS variable.** `--disclosure-panel-height` is genuine and documented (added in an Oct 2025 React Aria release) — animate `height`, not the usual `max-height` hack, and put padding on an *inner* wrapper div, not the animating element itself, or the padding visibly squishes during the transition.

**SelectionIndicator (used by Tabs) needs a `position: relative` ancestor.** Without one on the TabList container, the indicator can't correctly measure/animate between tab positions and will flicker instead of sliding. Relatedly: a height-animated, absolutely-positioned crossfade between TabPanels (mirroring the Disclosure pattern) only looks clean if the container height and panel opacity transitions finish in lockstep — otherwise `overflow-clip` cuts off whichever panel hasn't caught up, reading as overlapping/clipped text. An instant swap or a plain opacity-only fade (no absolute positioning) is more robust than the full crossfade if this ever flares up again.

**Several React Aria components deprecated their single-component API** in favor of a split Field+Button/Field+Control pattern — Radio → RadioField+RadioButton, Switch → SwitchField+SwitchButton. If a component throws a deprecation warning alongside a children type error, both problems usually travel together: the deprecated component's children type is the wide `ChildrenOrFunction<...>` union, and it needs explicit re-narrowing to `ReactNode` in the wrapper's props interface, not just a className omit.

**npm link doesn't survive a plain npm install.** If a linked package (like rellui in a playground project) was never declared in package.json, npm treats it as extraneous and prunes the symlink on the next unrelated install. Either re-run npm link after every install, or switch to a `"rellui": "file:../rellui"` dependency, which survives installs but needs a manual npm install in the consumer after every rellui rebuild to pick up changes.

**Tailwind not picking up a CSS/class change that's confirmed present in the built files is almost always a stale cache, not a logic bug.** The fix that worked every time this session: fully stop the dev server, delete .next, restart, then hard-refresh (Empty Cache and Hard Reload) in the browser. Check this before spending time adjusting CSS values that might already be correct.

## Stack

- React Aria Components — behavior and accessibility
- tailwind-variants — variant-based styling
- Tailwind CSS v4 — utility classes, CSS-first theming
- tsup — build (ESM output, bundled types)
- Liter (Google Fonts) — default typeface, loaded via theme.css
