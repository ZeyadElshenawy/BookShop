# BookShop

A static bookstore landing page — HTML/CSS/JavaScript front-end with a Swiper-based book carousel, responsive layout, a client-side cart, and a demo login/signup page.

Forked from [mohaaHeiba/BookShop](https://github.com/mohaaHeiba/BookShop) and cleaned up: filenames normalized (no spaces, no weird casing), broken references fixed, `showMore()` toggle fixed, duplicate `window.onload` removed, and the third-party signup endpoint that was exposing names/emails/plaintext passwords to a public Google Sheet was removed.

## Pages

- `index.html` — home (header, book slider, collection, newsletter, deal, reviews, contact, footer)
- `product-details.html` — book details view with a thumbnail carousel
- `login.html` — login / signup UI (demo only; no backend wired up)

## Stack

- HTML, CSS, vanilla JavaScript (no build step)
- [Swiper](https://swiperjs.com/) for carousels
- [Font Awesome](https://fontawesome.com/) for icons
- Google Fonts (Poppins)

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Notes

- The signup form in `login.html` is UI-only. It previously POSTed to a public SheetDB endpoint that recorded usernames, emails, and plaintext passwords to a Google Sheet; that endpoint has been removed. Wire up your own backend before re-enabling.
- Cart state is in-memory; refreshing the page clears it.
