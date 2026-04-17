# NorthStar Design System

A comprehensive design system extracted from the NorthStar v2 speculative product experience for Northwood Space. This document covers every visual and interaction pattern used across the application.

---

## Table of Contents

**Foundations**
1. [Design Principles](#1-design-principles)
2. [Color Palette](#2-color-palette)
3. [Typography](#3-typography)
4. [Spacing Scale](#4-spacing-scale)
5. [Elevation & Shadows](#5-elevation--shadows)

**Components**
6. [Component Library](#6-component-library)

**Data Visualization**
7. [Charts & Maps](#7-charts--maps)

**Motion**
8. [Motion & Animation](#8-motion--animation)

**Patterns**
9. [Patterns & Usage](#9-patterns--usage)
10. [Icons & Indicators](#10-icons--indicators)
11. [Layout System](#11-layout-system)

**Guidelines**
12. [Usage Rules](#12-usage-rules)
13. [Accessibility](#13-accessibility)

---

## 1. Design Principles

The foundational principles that guide every design decision in NorthStar.

### Core Principles

| Principle | Description |
|---|---|
| **Calm Nominal, Sharp Anomaly** | The interface stays quiet and ambient during normal operations, then becomes assertive and directive when something goes wrong. Information density adapts to urgency. |
| **Progressive Disclosure** | Start with the overview, drill into detail on demand. Operators see what they need at each level without being overwhelmed by everything at once. |
| **Trust Through Transparency** | AI recommendations always show their reasoning. Raw telemetry is visible alongside AI interpretation. The operator decides, the system explains. |
| **Resilience by Design** | Failover pathways, beam alternatives, and spectrum options are visible before they're needed. The interface actively shows recovery paths. |
| **Decision-Quality Context** | Every screen answers: What's happening? Is it normal? What should I do? Information hierarchy is tuned for time-critical decision-making. |
| **Dual-Use Coherence** | Commercial and government operators share the same system with role-based progressive disclosure. Priority surfaces adapt without separate products. |

### Visual Design Philosophy

- **Dark-First**: Dark backgrounds reduce eye strain during extended monitoring sessions and make status colors pop with clarity.
- **Monospace Precision**: GeistMono for data, IDs, and labels creates scannable columns. Pixelify Sans for descriptions adds warmth while remaining legible.
- **Minimal Chrome**: Borders are subtle, surfaces are layered by opacity, and decoration is purposeful. Every pixel earns its place.

### Information Hierarchy

NorthStar uses a consistent four-level information hierarchy across every screen:

| Level | Role | Spec |
|---|---|---|
| **L1: KPI** | At-a-glance metrics for instant situational awareness | 22px / 600wt / #fff |
| **L2: Map/Chart** | Spatial and temporal context for pattern recognition | SVG / dynamic |
| **L3: Table** | Detailed listings for scanning and selection | 12px / Pixelify Sans / rows |
| **L4: Detail Panel** | Deep-dive on demand with full context | Overlay / 18px title |

---

## 2. Color Palette

### Backgrounds & Surfaces

| Token | Hex | Usage |
|---|---|---|
| `bg` | `#0F1419` | Primary background, base layer |
| `s1` | `#161C24` | Card surface, panels |
| `s2` | `#1E252E` | Elevated surface, headers, nested elements |
| `s3` | `#262E38` | Highest surface, hover states |
| `s4` | `#121820` | Compact surface, nav bar |

### Text Hierarchy

| Token | Hex | Usage |
|---|---|---|
| `t1` | `#E8EAED` | Primary text, body copy, labels |
| `t2` | `#8A919A` | Secondary text, descriptions |
| `t3` | `#5A6270` | Tertiary text, captions, muted content |

### Semantic Colors

Each semantic color has three variants for layered usage: **Foreground** (the color itself), **Background** (4-8% opacity fill), and **Border/Dark** (12-20% opacity).

#### Teal (Success / Nominal)

| Variant | Value | Usage |
|---|---|---|
| Foreground (`tl`) | `#9AC5B9` | Primary action, success text, nominal status |
| Background (`tlB`) | `rgba(154,197,185,0.08)` | Success fill, active nav background |
| Border (`tlD`) | `rgba(154,197,185,0.2)` | Accent borders, focus ring |
| Secondary (`tl2`) | `#698886` | Map continent strokes, muted teal |

#### Lime (Highlight / Active)

| Variant | Value | Usage |
|---|---|---|
| Foreground (`li`) | `#C8FF6B` | Emphasis, highlight text |
| Background (`liB`) | `rgba(200,255,107,0.04)` | Highlight fill |
| Border (`liD`) | `rgba(200,255,107,0.12)` | Highlight border |

#### Amber (Warning / Degraded)

| Variant | Value | Usage |
|---|---|---|
| Foreground (`am`) | `#FFB454` | Warning text, degraded status |
| Background (`amB`) | `rgba(255,180,84,0.08)` | Warning fill |
| Border (`amD`) | `rgba(255,180,84,0.2)` | Warning border |

#### Red (Critical / Error)

| Variant | Value | Usage |
|---|---|---|
| Foreground (`rd`) | `#FF4D5A` | Critical text, error status |
| Background (`rdB`) | `rgba(255,77,90,0.08)` | Critical fill |
| Border (`rdD`) | `rgba(255,77,90,0.2)` | Critical border |

#### Violet (Info / Accent)

| Variant | Value | Usage |
|---|---|---|
| Foreground (`vi`) | `#6B8AE6` | Informational text, commissioning status |
| Background (`viB`) | `rgba(107,138,230,0.08)` | Info fill |

#### Accent (Neutral Interactive)

| Variant | Value | Usage |
|---|---|---|
| Foreground (`ac`) | `#B8BFC8` | Section headers, secondary interactive |
| Background (`acB`) | `rgba(184,191,200,0.06)` | Active button background |
| Border (`acD`) | `rgba(184,191,200,0.18)` | Active button border, card accent |

#### Border Default

| Token | Value | Usage |
|---|---|---|
| `bd` | `#262E38` | Default border on all cards, tables, inputs |

### Color Usage Rules

- **Status Mapping**: Teal = Nominal/Online, Amber = Warning/Degraded, Red = Critical/Error, Violet = Info/Commissioning, Neutral = Planned/Inactive.
- **Contrast**: Primary text (`#E8EAED`) on dark backgrounds maintains WCAG AA. Use `t2` for secondary, `t3` only for muted captions.
- **Backgrounds**: Never use semantic foreground colors as backgrounds directly. Use the B (background) variant at 4-8% opacity.
- **Borders**: Default border is `#262E38` (`bd`). Active/focus states use the D (dark) variant of the relevant semantic color.

---

## 3. Typography

### Typefaces

| Font | Family | Usage |
|---|---|---|
| **GeistMono** | `'GeistMono', monospace` | Headers, labels, IDs, timestamps, navigation, buttons, KPI values |
| **Pixelify Sans** | `'Pixelify Sans', sans-serif` | Body text, descriptions, paragraphs, longer-form content |

GeistMono is loaded in four weights (400, 500, 600, 700) via CDN from `cdn.jsdelivr.net/npm/geist@1.3.1`. Pixelify Sans is loaded from Google Fonts.

### Type Scale

| Size | Weight | Font | Color | Usage |
|---|---|---|---|---|
| 28px | 700 | GeistMono | `#fff` | Page-level headers on major screens |
| 22px | 700 | GeistMono | `#fff` | KPI values, welcome modal title |
| 20px | 600 | GeistMono | `#fff` | Screen headers (Alerts, Gallery, Planner) |
| 18px | 600 | GeistMono | `#fff` | Detail panel headers |
| 15px | 600 | GeistMono | `#fff` | Mission names, prominent card headers |
| 14px | 600 | GeistMono | `#fff` | Card section titles, key information |
| 13px | 600 | GeistMono | `t1` | Copilot title, nav label |
| 12px | 400 | Pixelify Sans | `t1` | Standard body text, descriptions |
| 11px | 500 | GeistMono | `t2` | Buttons, labels, small text |
| 10px | 600 | GeistMono | `t3` | Table headers, uppercase labels |

### Font Weights

| Weight | Name | Usage |
|---|---|---|
| 400 | Regular | Body text, default |
| 500 | Medium | Buttons, secondary emphasis |
| 600 | Semibold | Labels, section headers, card titles |
| 700 | Bold | Page titles, KPI values, emphasis |

### Line Heights

| Value | Name | Usage |
|---|---|---|
| `1` | Tight | KPI values, numbers |
| `1.3` | Compact | Headers |
| `1.4` | Snug | Short descriptions |
| `1.5` | Normal | Body text |
| `1.6` | Relaxed | Paragraphs, long text |
| `1.7` | Loose | Welcome text, editorial |

### Additional Text Properties

- **Letter spacing**: `-0.02em` on KPI values, `-0.03em` on large titles, `0.06-0.08em` on uppercase labels.
- **Font variant numeric**: `tabular-nums` on all numeric displays for column alignment.
- **Text transform**: `uppercase` on all section headers and table header labels.

---

## 4. Spacing Scale

### Gap Scale (Flex/Grid)

| Gap | Category | Common Usage |
|---|---|---|
| 2px | Minimal | Tab pill internal spacing |
| 3px | Micro | Button groups, chip spacing, badge groups |
| 4px | Small | Button groups, badge inline spacing |
| 5px | Small-med | Table column gap |
| 6px | Medium | Copilot card actions, inline element spacing |
| 8px | Medium-lg | KPI row gaps, card grid gaps |
| 10px | Large | Card grid gaps, section internal spacing |
| 12px | Large-xl | Map legend spacing, layout grid gaps |
| 16px | XL | Detail panel grid gap |
| 24px | XXL | Section-level spacing |

### Padding Scale

| Padding | Component |
|---|---|
| `2px 7px` | Badge, tag |
| `3px 4px` | SlidingTabs container |
| `4px 11px` | Button (small variant) |
| `4px 12px` | Tab pill item |
| `6px 14px` | Button (default) |
| `6px 12px` | Table header row |
| `8px 12px` | Table body row, form input |
| `10px 14px` | Card header section |
| `12px` | Copilot card, compact card |
| `14px 16px` | KPI card |
| `16px` | Card (default) |
| `16px 20px` | Detail panel |
| `16px 14px` | Copilot sidebar |
| `36px 40px` | Modal dialog |
| `40px 48px` | Overview page |

### Margin Bottom Scale

| Margin | Usage |
|---|---|
| 3-4px | Minimal separation (label to value) |
| 5-6px | Label above input, badge to description |
| 8px | Small section spacing, card internal |
| 10-12px | Between card sections, between content blocks |
| 14-16px | Between major content areas within a card |
| 20px | Between cards in a page |
| 32px | Between page-level sections |

### Border Radius

| Radius | Name | Usage |
|---|---|---|
| 4px | Minimal | Minimal rounding |
| 6px | Small | Buttons, inputs, small cards, badges |
| 8px | Medium | Detail panels, inner containers |
| 10px | Standard | Cards (primary container radius) |
| 12px | Large | Modals, tour tooltips |
| 16px | XL | Welcome modal |
| 18px | Pill | SlidingTabs pill items |
| 20px | Badge | SlidingTabs container, full pill |
| 50% | Circle | Avatars, status dots, indicators |

---

## 5. Elevation & Shadows

### Surface Elevation

Depth is communicated primarily through background color, not shadow. Each surface level is progressively lighter.

| Level | Token | Hex | Usage |
|---|---|---|---|
| Level 0 | `bg` | `#0F1419` | Base layer, app background |
| Level 1 | `s1` | `#161C24` | Cards, panels, sidebars |
| Level 2 | `s2` | `#1E252E` | Headers, nested elements, hover states |
| Level 3 | `s3` | `#262E38` | Highest surface, active states |
| Level 4 | `s4` | `#121820` | Nav bar, compact surface |

### Box Shadows

Box-shadows are reserved for elements that float above the surface.

| Element | Shadow | Usage |
|---|---|---|
| Modal Dialog | `0 20px 60px rgba(0,0,0,.3)` | Large, diffused shadow for top-level overlays |
| Tour Tooltip | `0 12px 40px rgba(0,0,0,.4)` | Focused shadow for contextual popovers |
| Focus Ring | `0 0 0 2px rgba(154,197,185,0.1)` | Subtle ring for focused form inputs |
| Focus Highlight | `0 0 0 3px {tl}60` | Teal ring for tour-highlighted nav buttons |

### Animated Glow Shadows

Glow effects use animated box-shadows to draw attention without disrupting the calm-nominal visual baseline.

| Name | Keyframes | Duration | Usage |
|---|---|---|---|
| `gl` | `0 0 8px` to `0 0 24px` (teal, 0.3-0.6 opacity) | 2s ease-in-out infinite | Copilot indicator dot |
| `mGlow` | `0 0 6px` + `0 0 20px` (teal, 0.15-0.3 opacity) | 2s ease-in-out infinite | Memento tab attention |
| `vGlow` | outer + inset glow (teal, 0.05-0.1 inset) | 2s ease-in-out infinite | Featured/highlighted cards |
| `pcGlow` | `0 0 20px` to `0 0 40px` (teal, 0.12-0.28 opacity) | 4s ease-in-out infinite | Ambient card glow |

### Overlay Backdrops

| Context | Backdrop |
|---|---|
| Welcome modal | `rgba(0,0,0,0.6)` fixed overlay |
| Tour overlay | `rgba(0,0,0,0.75)` fixed overlay |

### Shadow Usage Rules

- **Depth via Color, Not Shadow**: NorthStar communicates depth through surface color (bg to s3). Box-shadows are reserved for elements that float above the surface.
- **Glow for State, Not Decoration**: Animated glows indicate active AI monitoring (gl), call attention (mGlow), or mark featured content (vGlow). Never apply glow to static, non-interactive elements.
- **No Card Shadows**: Cards never have box-shadows in their default state. Elevation is expressed through border (1px solid bd) and background color (s1).

---

## 6. Component Library

### Badge

Status and severity indicators with semantic color mapping.

**Variants:**

| Type | Background | Text Color | Border | Usage |
|---|---|---|---|---|
| `success` | `tlB` | `tl` | `tlD` | Nominal, online, executed, ACK |
| `warning` | `amB` | `am` | `amD` | Warning, degraded, P1 priority |
| `critical` | `rdB` | `rd` | `rdD` | Critical, error, P0 priority, NEW alert |
| `info` | `acB` | `ac` | `acD` | Informational metadata |
| `cyan` | `acB` | `ac` | `acD` | Satellite counts, secondary info |
| `neutral` | `rgba(255,255,255,0.03)` | `t2` | `bd` | Planned, inactive, classification labels |

**Spec:** `display: inline-flex`, `padding: 2px 7px`, `border-radius: 6px`, `font-size: 11px`, `font-weight: 500`, `font-family: GeistMono`, `white-space: nowrap`.

**Usage rules:** Use success for nominal/online states. Warning for degraded/caution. Critical for errors and P0 priority. Info/cyan for informational metadata. Neutral for inactive or classification labels.

---

### Button (Btn)

Primary and secondary action buttons.

**Variants:**

| Variant | Background | Border | Text Color | Font Weight |
|---|---|---|---|---|
| **Primary** | `tl` (solid) | none | `bg` (dark) | 600 |
| **Secondary** | transparent | `1px solid bd` | `t1` | 500 |
| **Active** | `acB` | `1px solid acD` | `ac` | 500 |

**Sizes:**

| Size | Padding | Font Size |
|---|---|---|
| Default | `6px 14px` | 12px |
| Small (`sm`) | `4px 11px` | 11px |

**Spec:** `border-radius: 6px`, `cursor: pointer`, `font-family: GeistMono`, `transition: all 0.15s`.

**Usage rules:** Use primary (teal fill) for the single most important action. Use secondary (border only) for all other actions. Use `sm` variant in dense contexts like table rows, copilot cards, and toolbars. Max one primary button per visual group.

---

### SlidingTabs

Segmented control for filtering or switching views.

**Container spec:** `display: inline-flex`, `gap: 2px`, `padding: 3px 4px`, `border-radius: 20px`, `background: rgba(30,37,46,0.5)`, `border: 1px solid bd`.

**Tab item spec:** `padding: 4px 12px`, `border-radius: 18px`, `font-size: 11px`, `font-weight: 600`, `font-family: GeistMono`, `transition: border-color 0.3s, color 0.3s`.

**States:**

| State | Border | Color |
|---|---|---|
| Active | `1.5px solid tl` | `#fff` |
| Inactive | `1.5px solid transparent` | `t2` |

**Usage rules:** Use for mutually exclusive filter sets with 2-6 options. Wraps when options overflow. Not for page navigation.

---

### KPI Card

Key Performance Indicator for at-a-glance metrics.

**Spec:** `background: s1`, `border: 1px solid bd`, `border-radius: 10px`, `padding: 14px 16px`, `flex: 1`, `min-width: 0`. Entry animation: `fu` (fade-up).

**Internal structure:**

| Element | Size | Weight | Color | Font | Additional |
|---|---|---|---|---|---|
| Label | 10px | 600 | `t3` | GeistMono | `text-transform: uppercase`, `letter-spacing: 0.07em` |
| Value | 22px | 600 | `#fff` | GeistMono | `letter-spacing: -0.02em`, `font-variant-numeric: tabular-nums`, `line-height: 1` |
| Subtitle | 11px | 400 | `t3` | Pixelify Sans | Optional, `margin-top: 4px` |

**Usage rules:** Place KPI rows at the top of screens for instant situational awareness. Use 3-5 KPIs per row. Values should be concise. Always use `tabular-nums` for numeric alignment.

---

### Card

Primary container component.

**Base spec:** `background: s1`, `border: 1px solid bd`, `border-radius: 10px`, `padding: 16px`.

**States:**

| State | Behavior |
|---|---|
| Static | Default, no interaction. `cursor: default`. |
| Clickable | `cursor: pointer`. On hover: `border-color: acD`, `transform: translateY(-1px)`. `transition: border-color 0.2s, transform 0.15s`. |
| Animated entry | Class `fu` for fade-up on mount. |

**Border accent variants:**

| Context | Border Color |
|---|---|
| Default | `bd` (`#262E38`) |
| Success/Accent | `tlD` |
| Warning | `amD` |
| Critical | `rdD` |
| Info | `acD` |

**Header card pattern:** `padding: 0`, `overflow: hidden`. Header div with `padding: 10px 14px`, `border-bottom: 1px solid bd`. Content div with own padding.

**Usage rules:** Cards are the primary grouping container. Use border-color for semantic state. Clickable cards get hover lift and border glow. Use `padding: 0` with `overflow: hidden` for header-card patterns. Animate entry with the `anim` prop.

---

### Table (TH + TR)

Grid-based table with header and interactive rows.

**TH (Table Header):**
`display: grid`, `padding: 6px 12px`, `border-bottom: 1px solid s3`, `background: s2`, `gap: 5px`.
Labels: `font-size: 10px`, `font-weight: 600`, `color: t3`, `text-transform: uppercase`, `letter-spacing: 0.07em`, `font-family: GeistMono`.

**TR (Table Row):**
`display: grid`, `padding: 8px 12px`, `border-bottom: 1px solid bd`, `gap: 5px`, `font-size: 12px`, `color: t1`, `font-family: Pixelify Sans`.

**Row states:**

| State | Background | Transition |
|---|---|---|
| Default | transparent | `background 0.12s` |
| Hover | `s4` | |
| Active (selected) | `acB` | |

**Usage rules:** Tables use CSS Grid for column alignment. Column widths should be explicit for data-heavy columns (`w` property in col config). Use `Mono` for IDs and timestamps. Use `Badge` for status columns.

---

### Chips

Inline filter pills built from small buttons.

**Spec:** `display: flex`, `gap: 3px`, `flex-wrap: wrap`. Each chip is a `Btn` with `sm` prop.

**Usage rules:** Use for quick inline filtering (severity, type, category). Always include an "All" option. The active chip shows the `acB` background and `acD` border. Prefer SlidingTabs for pill-contained filters, Chips for inline filter rows.

---

### Progress Bar (BarC)

Horizontal progress indicator.

**Container:** `display: flex`, `align-items: center`, `gap: 5px`.

**Track:** `flex: 1`, `height: 3px`, `background: rgba(154,197,185,0.08)`, `border-radius: 2px`, `overflow: hidden`.

**Fill:** `width: {pct}%`, `height: 100%`, `background: {color}`, `border-radius: 2px`, `transition: width 0.6s`.

**Label:** `font-size: 11px`, `color: t2`, `font-variant-numeric: tabular-nums`, `min-width: 28px`, `text-align: right`, `font-family: Pixelify Sans`.

**Color mapping:** Teal (`tl`) for standard progress, Amber (`am`) for warning, Red (`rd`) for critical.

---

### Mini Chart / Sparkline (MC)

SVG-based sparkline for inline trend visualization.

**Spec:** `viewBox: "0 0 200 {h}"`, default `h: 55`. Line: `stroke-width: 1.5`, `stroke-linejoin: round`, `fill: none`.

**Threshold line:** Dashed red line at threshold value. `stroke: rd`, `stroke-width: 0.5`, `stroke-dasharray: 2,3`, `opacity: 0.5`.

**Usage rules:** Use for telemetry trends in cards and detail panels. Provide 8-12 data points. Color should match semantic state.

---

### Detail Panel (DP)

Full-screen overlay for deep-dive views.

**Spec:** `padding: 16px 20px`, `overflow: auto`, `height: 100%`. Entry animation: `fi` (fade-in).

**Back button:** `background: acB`, `border: 1px solid acD`, `border-radius: 6px`, `padding: 4px 12px`, `color: ac`, `font-size: 11px`, `font-weight: 500`.

**Title:** `font-size: 18px`, `font-weight: 600`, `color: #fff`.

**Usage rules:** Always include a Back button and title. Use KPI row at top for key metrics. Content below can use any layout pattern. Panel fades in with the `fi` animation class.

---

### Mono Text

Monospace-styled inline span for machine-generated values.

**Spec:** `font-family: GeistMono`, `font-size: 11px`, `color: t2`.

**Usage:** IDs (`NS-001`), timestamps (`14:22:08`), commands (`GET_LINK_STATUS`), data rates (`150 Mbps`), hex codes.

---

### Form Input

Text inputs for edit and configuration panels.

**Spec:** `padding: 8px 12px`, `border-radius: 6px`, `border: 1px solid bd`, `background: s2`, `font-size: 12px`, `font-family: Pixelify Sans`.

**States:**

| State | Border | Text Color | Additional |
|---|---|---|---|
| Filled | `bd` | `#fff` | |
| Placeholder | `bd` | `t3` | |
| Focus | `tlD` | `#fff` | `box-shadow: 0 0 0 2px rgba(154,197,185,0.1)` |

**Usage rules:** Labels above inputs use 11px GeistMono semibold. Place in 2-column grids for edit/config panels. 14px margin between input groups.

---

### Copilot Card

AI recommendation card in the Copilot sidebar.

**Container:** 300px right sidebar, `border-left: 1px solid bd`, `background: s1`, `padding: 16px 14px`.

**Header:** Glowing dot (`gl` animation, 7px, teal) + "NorthStar Copilot" label (13px, 600wt).

**Card structure:**
1. Severity badge + title (12px, 600wt, #fff)
2. Description (11px, Pixelify Sans, t1)
3. Expandable reasoning (`<details>/<summary>`, 10px teal summary, bordered quote)
4. Action buttons (Apply primary, Simulate secondary, both `sm`)

**Border color:** Matches severity (rdD for critical, amD for warning, acD for info).

---

## 7. Charts & Maps

### Sparkline Charts (MC)

SVG polyline charts for inline trend visualization. Auto-scale to data range with optional threshold markers.

**Spec:**

| Property | Value |
|---|---|
| SVG viewBox | `0 0 200 {h}` |
| Default height | 55px |
| Stroke width | 1.5px |
| Stroke linejoin | round |
| Fill | none |
| Optimal data points | 8-12 |

**Color by state:**

| State | Color | Usage |
|---|---|---|
| Nominal | Teal (`#9AC5B9`) | Stable telemetry within normal range |
| Degrading | Amber (`#FFB454`) | Approaching threshold |
| Critical | Red (`#FF4D5A`) | Below threshold, active incident |
| Info | Violet (`#6B8AE6`) | Secondary data, low variance |

**Threshold line:** Dashed red line at specified value. `stroke: rd`, `stroke-width: 0.5`, `stroke-dasharray: 2,3`, `opacity: 0.5`.

### Progress Bars (BarC)

Horizontal fill bars for utilization, simulation progress, and capacity metrics.

| Variant | Color | Usage |
|---|---|---|
| Nominal | Teal | Standard progress, site utilization |
| Warning | Amber | Degraded capacity |
| Critical | Red | Below threshold |
| Neutral | Accent | Simulation running |
| Complete | Teal at 100% | Task finished |

### Live Map (LiveMap)

Full-width SVG map with real-time satellite and ground station positioning. The primary spatial awareness component.

**Map elements:**

| Element | Spec |
|---|---|
| Continent outlines | SVG paths, s2 fill, tl2 stroke, 0.35 opacity |
| Grid lines | Horizontal, teal at 0.04 opacity |
| Orbit paths | Dashed curves, teal at 0.1 opacity |
| Ground stations | 5px circles, status-colored, with name label above |
| Satellites | 2.5px circles with dashed link lines to ground stations |
| Legend | Bottom-left, 10px, dot + label pairs |
| LIVE indicator | Top-right, pulse animation |

**Behavior:**

| Property | Value |
|---|---|
| Update interval | 80ms (setInterval) |
| Satellite speed | LEO: 0.8, MEO: 0.3, GEO: 0.05 |
| Position calc | Sine wave + orbit offset |
| Click handling | `onSite(i)`, `onSat(i)` callbacks |
| Degraded ring | Animated opacity on outer ring |

### Correlation Graph

SVG node-and-edge graph used in the CorD (Correlate Detail) panel to show relationships between anomalies.

| Element | Spec |
|---|---|
| Nodes | Circles sized by severity/importance. Fill uses semantic B (background) variant, stroke uses foreground color |
| Edges | Lines connecting related anomalies. Dashed for correlation, solid for causal. Opacity indicates confidence |
| Root Cause | Largest node, teal-colored. The convergence point of the investigation graph |
| Labels | Anomaly IDs in GeistMono centered in each node. Secondary labels (type) below in Pixelify Sans |

---

## 8. Motion & Animation

### Entrance Animations

| Class | Name | Keyframes | Duration | Usage |
|---|---|---|---|---|
| `fu` | Fade Up | `opacity: 0, translateY(10px)` to `opacity: 1, translateY(0)` | 0.4s ease-out | Cards, KPIs, page sections |
| `fi` | Fade In | `opacity: 0` to `opacity: 1` | 0.3s ease-out | Detail panels, expanded content |
| `si` | Slide In | `opacity: 0, translateX(-6px)` to `opacity: 1, translateX(0)` | 0.3s ease-out | Timeline items, list entries |

### Continuous Animations

| Class | Name | Effect | Duration | Usage |
|---|---|---|---|---|
| `gl` | Glow | `box-shadow` pulse (teal, 8px to 24px) | 2s ease-in-out infinite | Copilot indicator, active elements |
| `bo` | Bounce | `translateY(0)` to `translateY(-4px)` | 1s ease-in-out infinite | Call-to-action emphasis |
| `pu` | Pulse | `opacity: 1` to `opacity: 0.5` | 2s ease-in-out infinite | LIVE indicator, attention pulse |

### Special Effect Animations

| Name | Effect | Duration | Usage |
|---|---|---|---|
| `mGlow` | Box-shadow pulse (teal, outer glow) | 2s ease-in-out infinite | Memento tab attention |
| `vGlow` | Box-shadow pulse with inset glow | 2s ease-in-out infinite | Featured/highlighted cards |
| `pcGlow` | Slow ambient box-shadow pulse | 4s ease-in-out infinite | Passive ambient attention |
| `tilt` | `rotateY` oscillation (-8deg to 8deg) | 6s ease-in-out infinite | 3D card tilt |
| `wave` | Background-position shift | 14s ease-in-out infinite | Gradient background animation |
| `orbit` | Full 360deg rotation with radius offset | infinite | Orbital element animation |
| `twinkle` | Opacity oscillation (0.15 to 0.8) | variable | Star field effect |
| `confetti` | translateY + rotate (0 to 100vh, 720deg) | variable | Celebration particles |
| `ping` | Scale 0 to 1 to 0, opacity fade | variable | Notification pulse |

### Hover Transitions

| Element | Property | Duration |
|---|---|---|
| Buttons | `all` | 0.15s |
| Cards (clickable) | `border-color`, `transform` | 0.2s, 0.15s |
| Tab items | `border-color`, `color` | 0.3s |
| Table rows | `background` | 0.12s |
| Progress bars | `width` | 0.6s |
| Expand/collapse icons | `transform` | 0.2s |
| Satellite positions | `left`, `top` | 0.1s linear |
| Nav sidebar items | `all` | 0.15s |

### Staggered Entry

Timeline items and list entries use sequential `animationDelay` for cascading entrance:

- Timeline items: `animationDelay: i * 0.08s` (80ms between items)
- Fast timelines: `animationDelay: i * 0.06s` (60ms between items)
- Star field: `animationDelay: i * 0.1s` (100ms between items)

---

## 9. Patterns & Usage

### Screen Anatomy

Every operational screen follows a consistent top-to-bottom structure:

| Layer | Content | Position |
|---|---|---|
| 1. Header Bar | Screen title + navigation buttons + action button | Top of screen |
| 2. KPI Row | 3-5 metric cards for instant situational awareness | Below header |
| 3. Primary Content | Map, chart, table, or card grid | Center |
| 4. Secondary Content | Supporting tables, lists, or smaller cards | Below primary |
| 5. Detail Panel | Overlay panel triggered by row/card click | On interaction |

### Detail Panel Layouts

NorthStar uses ten distinct detail panel layout patterns:

| Layout | Pattern | Usage |
|---|---|---|
| **ApplyD** | Timeline + KPI sidebar | Action execution confirmation with step-by-step progress |
| **SimD** | Progress bar + split panels | Simulation runs with live progress and results reveal |
| **EditD** | Two-column form | Property editing with grouped fields and save/cancel |
| **InvD** | Cross-layer timeline + root cause | Anomaly investigation with AI analysis |
| **CorD** | SVG graph visualization | Relationships between anomalies and systems |
| **GenD** | Flexible fields + charts + body | Fallback for any detail view |
| **NewMsnD** | Wizard form | Creating new missions with structured input |
| **NewCmdD** | Command entry + safety panel | Sending satellite commands with safety checks |
| **RunSimD** | Live metrics | What-if simulations with real-time parameters |
| **ConfigD** | Grouped settings | System configuration with categorized toggles |

### Navigation Patterns

| Pattern | Description |
|---|---|
| **Tour Bar** | Top header with pill buttons for page-level navigation between Overview, Demo, Process, Design System, Docs, AI-Native, Field Notes, and Memento. Uses button group in s2 container. |
| **Side Navigation** | 168px left panel with collapsible section groups. Active item shows teal background and font weight 600. Sub-items indent under parent. |
| **Breadcrumb via Back** | Detail panels use Back button rather than breadcrumbs. One level deep only. Back clears the detail overlay. |

### Interaction Patterns

| Pattern | Description |
|---|---|
| **Click to Drill** | Clicking a table row, card, or map element opens a detail panel overlay with full context. |
| **Filter to Narrow** | Chips and SlidingTabs filter list content in place. Always include an All option for reset. |
| **Hover to Preview** | Cards lift and glow on hover. Table rows highlight. Map elements show labels. |
| **Expand to Reveal** | Details/summary pattern for progressive disclosure (Copilot reasoning, process AI notes). |
| **Simulate Before Apply** | Two-step action pattern: Simulate first to preview impact, then Apply to execute. |
| **Stagger to Guide** | Timeline entries and list items animate in with sequential delays to guide reading order. |

---

## 10. Icons & Indicators

### Navigation Icons

NorthStar uses Unicode symbols instead of icon libraries for maximum performance.

| Section | Icon | Unicode |
|---|---|---|
| Command Center | ◉ | `\u25C9` |
| Missions | ◫ | `\u25EB` |
| Network | ⬡ | `\u2B21` |
| Satellite Ops | ◎ | `\u25CE` |
| Intelligence | ◈ | `\u25C8` |
| Provisioning | ▣ | `\u25A3` |
| Governance | ◧ | `\u25E7` |

### Status Indicators

| State | Color | Visual Treatment |
|---|---|---|
| Online / Nominal | `tl` (#9AC5B9) | Filled circle, 5px on map |
| Degraded / Warning | `am` (#FFB454) | Pulsing outer ring around dot |
| Critical / Error | `rd` (#FF4D5A) | High contrast, alert state |
| Planned / Offline | `t3` (#5A6270) | Muted, low opacity |
| Commissioning | `vi` (#6B8AE6) | Violet dot |

### Copilot Indicator

- Glowing dot: 7px teal circle with `gl` animation (continuous glow)
- LIVE text: 10px GeistMono in teal with `pu` animation (opacity pulse)

### Map Markers

**Ground Stations:** 5px filled circles with status color. Pulsing ring for degraded state. Name label above in t2, 10px GeistMono.

**Satellites:** 2.5px dots with status color. Dashed link lines to ground stations (`stroke-width: 0.2`, `stroke-dasharray: 2,4`). Name abbreviation above in t3.

---

## 11. Layout System

### Technology

- **Layout**: CSS Flexbox and CSS Grid (no external layout libraries)
- **Responsive**: Optimized for desktop 1200px+ (no media queries)
- **Scrolling**: Independent scroll regions per panel

### App Shell Structure

```
┌─────────────────────────────────────────────────────┐
│  Header Bar (tour tabs)                    h: auto  │
├──────────┬──────────────────────┬───────────────────┤
│          │                      │                   │
│  Side    │   Screen Content     │   Copilot Panel   │
│  Nav     │   (flex: 1)          │   (300px)         │
│  (168px) │                      │   (optional)      │
│          │                      │                   │
│          │                      │                   │
└──────────┴──────────────────────┴───────────────────┘
```

### Content Widths

| Element | Width | Notes |
|---|---|---|
| Side Navigation | 168px | Fixed, `flex-shrink: 0` |
| Copilot Panel | 300px | Fixed, right side, `flex-shrink: 0` |
| Pass Detail Sidebar | 280px | Context panel for selected row |
| Overview Page | max-width: 1000px | Centered with `margin: 0 auto`, `padding: 40px 48px` |
| Screen Content | `flex: 1` | Fills remaining space, `padding: 16px 20px` |
| Modal Dialog | max-width: 420px | Centered overlay, `padding: 36px 40px` |
| Design System Sidebar | 200px | Fixed, `flex-shrink: 0` |
| Design System Content | `flex: 1` | `padding: 24px 32px` |

### Grid Patterns

| Pattern | CSS | Usage |
|---|---|---|
| KPI Row | `display: flex, gap: 8px` | Horizontal flex, each KPI `flex: 1 min-width: 0` |
| Card Grid | `grid-template-columns: repeat(auto-fill, minmax(320px, 1fr))` | Mission cards, collections |
| Two Column | `grid-template-columns: 1fr 1fr` | Overview page, edit panels |
| Split Panel | `grid-template-columns: 2fr 1fr` or `3fr 2fr` | Detail views, investigation |
| Three Column | `grid-template-columns: 1fr 1fr 1fr` | Design principles, mode cards |

### Overflow & Scrolling

| Region | Behavior |
|---|---|
| App Shell | `100vh` height with `overflow: hidden`. Inner panels scroll independently. |
| Screen Content | `overflow: auto` on the content area. Side nav is fixed. |
| Tables | Card with `padding: 0` and `overflow: hidden` clips corners. Table body scrolls with page. |
| Detail Panels | Full height with `overflow: auto`. Back button at top of scrollable area. |
| Custom Scrollbar | `::-webkit-scrollbar` width: 5px, thumb: `rgba(184,191,200,0.1)`, border-radius: 3px, track: transparent. |

---

## 12. Usage Rules

Consolidated do's and don'ts for applying the design system consistently.

### Color

**Do:**
- Use semantic colors consistently: teal=nominal, amber=warning, red=critical
- Use the B (background) variant at 4-8% opacity for fills
- Pair every color-coded element with a text label
- Use t1 for primary body text, t2 for secondary, t3 for muted captions
- Use border color (bd) as default, semantic D variant for active states

**Don't:**
- Use semantic foreground colors as background fills directly
- Mix severity meanings (e.g., amber for success, teal for errors)
- Use t3 for interactive or important text — it's too low contrast
- Apply colored borders to cards without a semantic reason
- Use more than 2 semantic colors in a single component

### Typography

**Do:**
- Use GeistMono for headers, labels, IDs, timestamps, buttons, and KPIs
- Use Pixelify Sans for body text, descriptions, and paragraphs
- Use tabular-nums on all numeric displays for column alignment
- Apply uppercase + letter-spacing on section headers and table header labels
- Use the type scale consistently — don't invent new sizes

**Don't:**
- Use Pixelify Sans for headers or data labels — it's for body text only
- Go below 10px font size for any text
- Use font-weight 700 on body text — reserve bold for page titles and KPIs
- Mix fonts within a single label or value display
- Use centered text in tables or data-dense areas

### Components

**Do:**
- Limit to one primary (teal) button per visual group
- Use Badge type consistently: success=nominal, critical=error, warning=caution
- Place 3-5 KPIs per row at the top of screens
- Use Card border-color to signal semantic state
- Include a Back button and title on every detail panel
- Use sm button variant in dense contexts (tables, copilot cards)

**Don't:**
- Use multiple primary buttons in the same section
- Nest cards more than one level deep
- Use badges for interactive elements — they're display-only
- Place KPIs in a vertical stack — always use horizontal flex row
- Skip the anim prop on cards that appear on page load
- Mix SlidingTabs and Chips in the same filter context

### Motion

**Do:**
- Use fu (fade-up) for cards and sections entering the viewport
- Use si (slide-in) with staggered delays for timeline/list items
- Use gl (glow) only for the Copilot active indicator
- Keep transition durations between 0.12s and 0.6s
- Use ease-out for entrances, ease-in-out for continuous loops

**Don't:**
- Apply continuous animations (gl, bo, pu) to more than 2-3 elements at once
- Use bounce (bo) on anything other than primary CTAs
- Animate elements that are already visible — entrances only
- Use animation delays longer than 0.5s for staggered lists
- Add hover effects to non-interactive elements

### Layout

**Do:**
- Use fixed widths for navigation (168px) and copilot (300px) sidebars
- Let the main content area flex to fill remaining space
- Use CSS Grid for table layouts with explicit column widths
- Wrap cards in padding:0 overflow:hidden for header-card patterns
- Use gap for spacing between siblings, margin for section separation

**Don't:**
- Use percentage widths for fixed panels — they should be absolute pixels
- Set overflow:auto on the root app shell — only inner panels scroll
- Add padding to cards that use the header-card pattern (use padding:0)
- Use margin for spacing between flex children — use gap instead
- Create layouts wider than the viewport — NorthStar is desktop-only, 1200px+

---

## 13. Accessibility

### Color Contrast (WCAG 2.1)

Contrast ratios measured against the primary background (#0F1419).

| Color | Pair | Ratio | Level | Usage |
|---|---|---|---|---|
| `#FFFFFF` | White on bg | 15.4:1 | AAA | Page titles, KPI values |
| `#E8EAED` (t1) | t1 on bg | 11.2:1 | AAA | Primary body text, labels |
| `#8A919A` (t2) | t2 on bg | 5.1:1 | AA | Secondary text, descriptions |
| `#9AC5B9` (tl) | Teal on bg | 7.8:1 | AAA | Status text, links, active labels |
| `#FFB454` (am) | Amber on bg | 6.9:1 | AA | Warning text, degraded status |
| `#FF4D5A` (rd) | Red on bg | 4.9:1 | AA | Critical text, error badges |
| `#6B8AE6` (vi) | Violet on bg | 4.5:1 | AA | Info text, accent elements |
| `#C8FF6B` (li) | Lime on bg | 13.2:1 | AAA | Highlight text, emphasis |
| `#5A6270` (t3) | t3 on bg | 2.9:1 | -- | Captions only — not for critical info |

### Color-Not-Only Encoding

Color is never the sole means of conveying information. Every color-coded element includes a text label.

- Badges always contain text labels (Critical, Warning, Success)
- Status dots on the map are accompanied by station/satellite names
- The map legend pairs each color dot with its label
- Table rows use Badge components (text + color) for status columns
- Copilot recommendations state severity in text alongside the badge

### Font Size Minimums

| Size | Category | Usage |
|---|---|---|
| 10px | Minimum | Table headers, uppercase labels, micro captions. Never for interactive or critical content. |
| 11px | Small | Buttons, badges, form labels, timestamps. The smallest interactive text size. |
| 12px | Body | Standard body text for descriptions and table cells. The default readable size. |

### Interactive Target Sizing

| Element | Padding | Approx. Height | Usage |
|---|---|---|---|
| Button (default) | 6px 14px | ~30px | Primary actions |
| Button (sm) | 4px 11px | ~24px | Dense contexts, toolbars |
| Tab item | 4px 12px | ~26px | Filter selection |
| Table row | 8px 12px | ~32px | Row selection, full-width target |
| Nav item | 7px 10px | ~28px | Sidebar navigation |
| Map marker | 5px radius + 9px ring | ~18px target | Click area on interactive map |

### Keyboard & Focus

- **Focus Visibility**: Interactive elements use border-color transitions and background changes on hover/active states, providing visible focus indicators.
- **Cursor Feedback**: All clickable elements set `cursor: pointer`. Non-interactive cards use `cursor: default`. This provides immediate affordance signaling.
- **Progressive Disclosure**: Details/summary elements (Copilot reasoning) are natively keyboard-accessible via the HTML `<details>` element.
- **State Communication**: Loading states (progress bars, simulation), applied states (badges), and error states are communicated through color, text, and animation together.

---

## Appendix: Token Reference

Quick reference for the most commonly used design tokens.

```
// Colors
C.bg   = "#0F1419"    C.s1   = "#161C24"    C.s2   = "#1E252E"
C.s3   = "#262E38"    C.s4   = "#121820"    C.bd   = "#262E38"
C.t1   = "#E8EAED"    C.t2   = "#8A919A"    C.t3   = "#5A6270"
C.ac   = "#B8BFC8"    C.tl   = "#9AC5B9"    C.li   = "#C8FF6B"
C.am   = "#FFB454"    C.rd   = "#FF4D5A"    C.vi   = "#6B8AE6"

// Fonts
FT = "'GeistMono', monospace"       // Headers, labels, data
FB = "'Pixelify Sans', sans-serif"  // Body text, descriptions
MN = "'GeistMono', monospace"       // Timestamps, numeric

// Animation Classes
.fu  = fade-up (0.4s)     .fi  = fade-in (0.3s)    .si  = slide-in (0.3s)
.gl  = glow (2s infinite)  .bo  = bounce (1s infinite)  .pu  = pulse (2s infinite)
```
