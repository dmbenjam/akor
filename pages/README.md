# Page Architecture

This project uses a shared shell and shared assets to keep page development fast and consistent.

## Shared assets

- Global styles: `assets/css/main.css`
- Shared interactions: `assets/js/main.js`
- Shared header/footer renderer: `assets/js/shell.js`

## How to create a new page

1. Copy `pages/_template.html` into your target section folder.
2. Update title, description, heading, and content.
3. Keep these elements in place:
   - `<div data-site-header></div>`
   - `<div data-site-footer></div>`
   - `<script src="../../assets/js/shell.js"></script>` (adjust relative path)
   - `renderSiteShell('../../');` (adjust base path to project root)
   - `<script src="../../assets/js/main.js"></script>` (adjust relative path)
4. Add the route to navigation if needed.

## Sitemap sections

- `pages/what-we-do/`
- `pages/who-we-are/`
- `pages/how-you-can-help/`
- `pages/contact/`

## Notes

- Keep section and slug names lowercase with hyphens.
- Put section index pages at `.../index.html`.
- Keep shared styling in `main.css` and avoid per-page inline styles when possible.
