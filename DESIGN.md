# ALPHA DOURO — Official Design System (`DESIGN.md`)

> **Brand:** Alpha Douro · Boat Tours Porto (`EST. 2026`)
> **Visual World:** Benetti × Riva × Spyker Nautical Atelier — Quiet Mediterranean Maritime Luxury
> **Primary Surface:** Direct Booking Landing Page (`https://alpha-douro-porto.vercel.app/`), VIP Digital Boarding Pass (`/pass/`), Brand Kit (`/brand-kit`), WhatsApp Central Hub (`/whatsapp-kit`)
> **Embarkation Truth:** `Douro Marina · Portão A` (Afurada, Vila Nova de Gaia · `41°08'36"N · 08°38'52"W`) — Arrive **10 min early** · **Max. 10 passengers** · **Wine Tasting included in all voyages** (`€30` Daytime Opening · `€60` Sunset & Sea · `Custom Quote` Private Charter) · Direct WhatsApp `+351 914 160 240`.

---

## 1. Color Palette (Locked Tokens)

| Token | Hex | Role | Usage Rules |
| :--- | :--- | :--- | :--- |
| `--abyss` | `#06111D` | Primary dark ocean ground | Page canvas, dark editorial bands, hero gradients |
| `--navy` | `#0A223D` | Brand marine navy | Structural cards, console/tumbler ink, PDF headers, official logo |
| `--ivory` | `#F5F1E8` | Primary warm text & cotton paper | Headlines, primary copy on dark, 3D cotton boarding pass |
| `--sand` | `#E0D0B8` | Champagne brass / sand gold accent | Hairline rules, active selections, focus rings, progress rails |
| `--capri` | `#1A92D2` | Douro hull cobalt / Capri accent | Primary action highlight, live nautical telemetry indicator |
| `--terracotta` | `#B85D3B` | Ribeira roof terracotta | Subtle circular seal cardinal ticks only — never loud fills |
| `--slate` | `#8EA1B6` | Secondary quiet metadata | Subtitles, secondary descriptions (≥4.5:1 on `--abyss`) |
| `--wa-green` | `#1FA855` | Direct WhatsApp booking action | Reserved exclusively for primary WhatsApp booking buttons |

**Strict Prohibitions:** Never introduce generic SaaS purple/violet gradients, neon glows, pure `#000000`, orange/sunset theme-toggle modes, or low-contrast white-on-white native dropdowns (`color-scheme: dark` mandatory on form controls).

---

## 2. Typography System

- **Display / Editorial Serif:** `Cormorant Garamond` (`400`, `500`, `600`, italic `400/500`) — Hero headline, section headings, editorial quotes, tour titles, monumental footer watermark.
- **UI / Body Sans:** `Plus Jakarta Sans` (`400`, `500`, `600`) — Body copy (`65–75ch` max measure), buttons, controls, FAQ answers.
- **Nautical Telemetry / Data Mono:** `JetBrains Mono` (`400`, `500`) — Coordinates (`41°08'36"N`), times (`18:30`), prices (`€30`, `€60`), pass codes (`AD-2026-4108`), always with `font-variant-numeric: tabular-nums`.

---

## 3. Official Vector Brand Mark (Exact 5-Path `A` Geometry)

All digital, photographic, and print applications **must** derive verbatim from the exact 5-path `viewBox="0 0 120 120"` geometry (never approximated or re-drawn):
- `A` left leg: `M60 14L22 92H33.5L62.2 31.8L60 14Z`
- `A` right leg: `M60 14L98 92H84.2L59.8 39.2L60 14Z`
- Boat hull: `M42.5 76.5C49.5 72.2 61.5 70.6 78.2 72.4L71.5 81.2C60.2 80.2 50.2 81.2 42.5 76.5Z`
- Bimini canopy: `M49 71.2C53.5 64.5 60.6 62.6 69.2 66.2C63.8 66.5 57.2 67.8 51.5 71.4L49 71.2Z`
- Single Douro wave: `M14 97.5C30.5 87.5 48.5 87.5 64.5 94.8C78.2 101 93.5 99.8 108 90.8C97.5 103.5 79.5 107.6 62.2 100.4C46.8 94 30.2 94.2 14 97.5Z`

**Application Lockups:**
- **Hull & Horizontal Headers:** Monogram + vertical hairline + `ALPHA DOURO` (`Cormorant Garamond`) / `BOAT TOURS · PORTO` (`Plus Jakarta Sans`).
- **Boat Consoles (Molded Rectangular Panel):** Stacked Monogram centered above `ALPHA DOURO` + `BOAT TOURS · PORTO`.
- **Ceramic Tumblers & Wool Blanket Embroidery:** Clean Stacked Monogram + `ALPHA DOURO` (direct ivory embroidery on navy wool, zero square background tag).
- **Linen Tote, Boarding Pass & Concierge Cards:** 3-ring Heritage Coastal Seal (`ALPHA DOURO` top arc · `PORTO · 41°08'N · EST. 2026` bottom arc · terracotta ticks).

---

## 4. Motion & Tactile Interaction Rules

- **Primary Easing:** `--ease-expo: cubic-bezier(0.16, 1, 0.3, 1)` · Durations `180–360ms` for interactive state changes.
- **Silent Craft Philosophy:** Animations clarify state (floating navbar glass compaction, numeric price roll, split-screen 365-day canopy comparator, spring FAQ accordion, 1-tap GPS copy checkmark, swipeable editorial testimonials & Bento Lightbox) without drawing noisy attention to themselves.
- **Hard Guardrails:**
  - Every motion respects `@media (prefers-reduced-motion: reduce)`.
  - Hover/magnetic effects strictly gated to `@media (hover: hover) and (pointer: fine)`.
  - Touch targets `>= 44×44px` (`48×48px` on primary controls).
  - Browser surfaces themed from palette (`::selection`, `:focus-visible` 2px Sand Gold ring, dark scrollbar).

---

## 5. Photography, Copy & Quality Gates

- **Real Vessel Integrity:** Real solid Deep Navy (`#0A223D`) canopy (never striped), authentic `SUZUKI` outboard decal, never expose boat manufacturer/model/dimensions publicly on the site.
- **Anti-Slop Floor:** Zero WebGL/Three.js bloat, zero cartoon/3D SaaS icons, zero AI-cliché copy, zero `slopscan.mjs` failures or warnings (`0 fails, 0 warns, 0 suppressed`), explicit `width`/`height` on every `<img>` (`CLS = 0.000`), and `<main>` WCAG 2.2 AA landmarks.
