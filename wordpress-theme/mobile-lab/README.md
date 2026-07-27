# Mobile Lab — WordPress Theme (Hybrid)

**Hybrid theme** — PHP templates (full control over the custom design) **plus a
`theme.json`** so the block editor gets the brand color palette, fonts and the
607px content width. Converted from the static Mobile Lab site: Digital Blue
design system, logo hover, blue-dot dividers, scroll fade-in, year filter and
full-screen hero (video **or** image) all carry over. Content is editable by the
client in wp-admin.

### Why hybrid (not full block/FSE)?
The design is highly custom (hero effects, exact markup). PHP templates keep it
precise and consistent; `theme.json` adds the modern editor benefits without
rebuilding the design as blocks. `theme.json` mainly shapes the **editor** and
any block content — it does not replace the PHP templates.

## Install
1. Zip the `mobile-lab/` folder → `mobile-lab.zip`.
2. WP admin → **Appearance → Themes → Add New → Upload Theme** → activate.
3. Install & activate **Advanced Custom Fields** (ACF). *Repeater* (video links)
   and *Gallery* fields need **ACF PRO**; the rest work on the free version.
4. **Settings → Reading →** set *Your homepage displays* → **A static page**, and
   pick a blank page as Homepage (front-page.php renders the News feed regardless).
   *(Or leave “Your latest posts” — front-page.php still applies.)*
5. **Settings → Permalinks →** click Save (flushes rewrite rules for the CPTs).

## Content model (where the client types things)
| Site section | In WordPress |
|---|---|
| News | **Posts** |
| Press | **Press** (custom post type) |
| Projects | **Projects** (CPT) + **Project Categories** (Features / Documentary / Installations / Performances) |
| Communities | **Communities** (CPT) |
| About / Shop / Contact | **Pages** |
| Post image | **Featured image** |
| Project meta / video links / gallery / hero | **ACF fields** on the project |
| Shop price | ACF “Price line” on the page |

## Menu (editable in the back-end)
- **Appearance → Menus →** create a menu, add items (News, Press, About, …), assign
  it to the **“Primary”** location. Add / remove / reorder any time — no code.

## Hero video / image
- **News hero:** Appearance → **Customize → Hero (News)** → upload a video and/or image.
- **Project hero:** each project has its own **Hero video / Hero image** (ACF).
- Logic: video → used first; no video but image → image; neither → dark banner.
- Specs are shown to the client inline (see `docs/HERO-VIDEO-BRIEF`):
  MP4 H.264 · 1920×1080 (16:9) · ≤ 8 MB · no audio · image fallback JPG ≤ 800 KB.

## Files
```
style.css              theme header + full Digital Blue stylesheet + WP-menu/editor CSS
functions.php          setup, enqueue, menu, includes, hero helper
header.php / footer.php logo (inline SVG) · editable menu · hero placement · drawer
front-page.php         News feed + year filter
archive-press.php      Press feed + year filter
archive-project.php    Projects → the four categories
taxonomy-project_cat.php  projects in a category
single-project.php     project detail (meta / body / video links / gallery)
archive-community.php / single-community.php
page.php               About / Shop / Contact
index.php              fallback
template-parts/hero.php    video-or-image hero
template-parts/logo-svg.php inline logo (do NOT swap for <img> — hover needs the SVG)
inc/post-types.php     CPTs + taxonomy + archive query
inc/customizer.php     global News hero
inc/acf-fields.php     project / shop fields
assets/js/app.js       drawer, year filter, scroll fade-in
```

> ⚠️ Written to WP standards but **not run on a live WordPress here** — install on
> a staging site and check for notices; small tweaks (menu markup, ACF field keys,
> permalinks) may be needed for your setup.
