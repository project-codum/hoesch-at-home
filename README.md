# Hoesch@Home

Astro + React site with localized routes (`de`, `en`) and Smoobu booking integration.

## Commands

```sh
npm run dev
npm run build
npm run preview
npm run check
npm run lint
```

## Project structure

```text
src/
  pages/
    index.astro
    calendar.astro
    galerie.astro
    [locale]/index.astro
    [locale]/calendar.astro
    [locale]/galerie.astro
  pages-templates/
    Home.astro
    Calendar.astro
    Gallery.astro
  components/
    HomePage.astro
    Hero.astro
    Footer.astro
    sections/
  content/
    home/de.json
    home/en.json
    calendarDE.json
    calendarEN.json
    config.ts
  i18n/
    index.ts
    de.ts
    en.ts
    types.ts
```

## Booking

- Booking is handled via embedded Smoobu widget in `src/pages-templates/Calendar.astro`.
- Internal booking APIs and legacy sync flows were removed.
