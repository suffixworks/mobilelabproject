# Mobile Lab Project

Static website for **Mobile Lab Project** — films, documentaries, installations and
performances by Nontawat Numbenchapol. Served via GitHub Pages at
<https://suffixworks.github.io/mobilelabproject/>.

## Structure

Multi-page static site — every page is a real HTML file sharing one stylesheet, with
real cross-page navigation links.

```
index.html          News (home)
press.html          Press
about.html          About
projects.html       Projects index (categories → links to each project page)
communities.html    Communities
shop.html           Shop
contact.html        Contact
projects/<slug>.html   Individual project pages (doiboy, boundary, bkky, …)

styles.css          Digital Blue theme — Courier New + Source Serif 4, 607px column
app.js              Vanilla JS: mobile drawer + News/Press year filter (no framework)
assets/logo.png     Logo (Digital Blue wordmark)
assets/media/…      Real images, original filenames/paths from the archive
source/             Original reference files — NOT used by the live site:
                      Mobile Lab.dc.html          Claude Design component (original)
                      projects-data.js            Project detail content
                      support.js, image-slot.js   Claude Design runtime (removed)
                      mobile-lab-design-system.html
                      uploads/, screenshots/
```

Plain HTML/CSS/JS with **no framework or runtime dependency** — pages open directly in a
browser (`file://`) or over HTTP. The only external request is the Source Serif 4 web
font (for `<strong>`), which degrades gracefully to a system serif.

## Design

Digital Blue theme: accent `#0000FF`, hover = white text on blue, monospace body
(Courier New), Source Serif 4 for emphasis, centered 607px content column, 72px header,
sticky footer, browse-by-year pagination, mobile-first responsive (hamburger drawer on
small screens). Images are fluid (`width:100%` + `aspect-ratio`), never fixed pixel sizes.
