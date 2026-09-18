# Product

## Register

brand

## Users

Recruiters, hiring managers, and potential freelance clients browsing the author's portfolio to judge frontend/design craft. They skim fast, compare against many other portfolio pieces, and decide in seconds whether the work looks professional or templated.

## Product Purpose

A portfolio piece: a pixel-accurate build of a Figma restaurant landing (Gerícht — fine dining/bar), demonstrating the ability to turn a static design into a polished, technically confident, animated production build. Success = a viewer immediately reads "this person has real craft," not "this is a generic AI-generated template."

## Brand Personality

Fine-dining restaurant surface (black/gold, Cormorant Upright display serif, dark and moody) — but the **motion signature** is energetic and fast, not slow cinematic drift. Confident, precise, a little theatrical. Not shy, not safe.

## Anti-references

- Uniform scroll-reveal reflex: identical fade+translateY(32px) IntersectionObserver trigger copy-pasted on every section — reads as templated/AI-generated, explicitly rejected by the client.
- Kitschy overshoot: bounce/elastic easing, spring wobble. Confident and fast, never springy or cartoonish.
- Generic SaaS scroll-animation libraries used indiscriminately without regard to what each section actually contains.

## Design Principles

- Each section's entrance should fit what it reveals (menu list staggers item by item, gallery reveals as a grid unclamp, hero-adjacent text types/tracks in) — not one reflex motion applied uniformly everywhere.
- Fast and confident over slow and dramatic: exponential ease-out curves, short durations, no elastic/bounce.
- Motion is part of the craft demonstration, not decoration bolted on last — it should look intentional per section.
- Respect `prefers-reduced-motion` — instant crossfade fallback, never a blank/broken section.
- Restraint still applies: energetic doesn't mean noisy. No motion that fights legibility or performance.

## Accessibility & Inclusion

WCAG AA contrast minimum. `prefers-reduced-motion: reduce` must produce an instant, fully-visible fallback (already enforced globally in index.css) — never gate content visibility behind a transition that can fail to fire.
