# Mobile Lab Project

Static website for **Mobile Lab Project** — films, documentaries, installations and
performances by Nontawat Numbenchapol. Served via GitHub Pages at
<https://suffixworks.github.io/mobilelabproject/>.

## Structure

```
index.html      Single-page site (all content pre-rendered; opens directly in a browser)
styles.css      Digital Blue theme — Courier New + Source Serif 4, 607px column
app.js          Vanilla JS: page switching, mobile drawer, year filters, project navigation
assets/         logo + assets/img/ (real archive images used by the site)
source/         Original reference files — NOT used by the live site:
                  Mobile Lab.dc.html          Claude Design component (original layout/content)
                  projects-data.js            Project detail content
                  support.js, image-slot.js   Claude Design runtime (removed from the build)
                  mobile-lab-design-system.html
                  uploads/, screenshots/      Original site pages + brand assets
```

The site is plain HTML/CSS/JS with **no framework or runtime dependency** — the only
external request is the Source Serif 4 web font (used for `<strong>`), which degrades
gracefully to a system serif.

## Design

Digital Blue theme: accent `#0000FF`, hover = white text on blue, monospace body
(Courier New), Source Serif 4 for emphasis, centered 607px content column, 72px header,
sticky footer, mobile-first responsive (hamburger drawer on small screens).
