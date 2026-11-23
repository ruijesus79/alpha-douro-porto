# DESIGN.md — ALPHA DOURO Web Design System Contract

> Style contract governing all web surfaces of **ALPHA DOURO Boat Tours · Porto** (`site-1-editorial` & `site-2-atelier`).
> Verified against `auteur` (`slopscan.mjs`: 0 fails, 0 warns) and `ui-skills` (`fixing-motion-performance`, `fixing-accessibility`, `fixing-metadata`, `baseline-ui`).

## 1. Brand Identity & Core Color Tokens
- **Abyssal Navy (`--abyss`)**: `#06111D` — Deep superyacht canvas (Atelier Edition).
- **Deep Sea Navy (`--navy`)**: `#0A223D` — Architectural editorial anchor, hero frame, stats & footer.
- **Amalfi Capri Sky-Blue (`--capri`)**: `#1A92D2` (glow `#58B9EE`) — Direct hull signature of Gil's 2025 ACHA 6.95m launch; reserved strictly for primary CTAs, active river wake, and selected states.
- **Sun-Bleached Sand (`--sand`)**: `#E0D0B8` (soft surface `#F4F1EA`) — Warm champagne-linen contrast & cotton boarding pass cardstock (`#F5EFE4`).
- **Ribeira Terracotta (`--terracotta`)**: `#A64B2A` — Reserved for subtle status stamps (`ISSUED · GAIA`, `Most Requested` badge, 5★ markers).
- **Foam Ivory (`--foam` / `--ivory`)**: `#F7F5F0` / `#F5F1E8`.

## 2. Typography Pairing (Contrast Axis)
- **Site 1 (Editorial Motion):** `Onest` (`400`, `500`, `600`) for architectural display & interface + `Cormorant Garamond` (`500`, `600`) strictly for the official `ALPHA DOURO` wordmark lockup.
- **Site 2 (Benetti × Spyker Atelier):** `Cormorant Garamond` (`400`, `500`, `600`, italic `400`) for superyacht display headlines & italic editorial chapter notes + `Plus Jakarta Sans` (`400`, `500`, `600`) for body/UI + `JetBrains Mono` (`400`, `500`) exclusively for Spyker-style nautical coordinates and hull telemetry.
- **Typographic Hygiene:** `text-wrap: balance` on `h1–h3`, `text-wrap: pretty` on body prose, `font-variant-numeric: tabular-nums` on every price, date, coordinate, and reference code.

## 3. Motion & Performance Rules
- **Compositor-Only Motion:** Animate strictly `transform` and `opacity` (including `transform: scaleX()` for progress bars and `translate3d()` for parallax). Never animate layout properties (`width`, `height`, `top`, `left`).
- **Zero Raw Scroll Listeners:** Use `IntersectionObserver` for reveals and visibility pausing; pause off-screen carousels and idle `rAF` parallax writes automatically.
- **Durations & Easing:** Interactive button/toggle feedback `150ms–180ms cubic-bezier(0.23, 1, 0.32, 1)` (ease-out); tactile `:active { transform: scale(0.97) }`; `prefers-reduced-motion: reduce` degrades cleanly to rich stills.
- **Texture:** Static-baked SVG analog film grain at `0.032–0.04` opacity (zero per-frame re-raster).

## 4. Accessibility & Metadata Standards
- Visible-on-focus skip links, full keyboard focus trapping + focus restoration in modals/overlays, `aria-expanded`/`aria-controls`/`aria-pressed`/`aria-live="polite"`, WCAG AA/AAA text contrast.
- Complete `<link rel="canonical">`, `og:url`, `og:locale` (`en_US`/`pt_PT`), `twitter:card="summary_large_image"`, inline Wave-A SVG favicon, and valid 2026 JSON-LD (`WebSite` + `LocalBusiness`/`TravelAgency` + `TouristTrip`).
