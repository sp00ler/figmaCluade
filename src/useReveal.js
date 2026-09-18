import { useLayoutEffect } from 'react';

// Each treatment fits what the section actually shows — not one reflex
// reused everywhere. The element is the final, visible state by default;
// this only ever ADDS a temporary hidden inline style, so no-JS, a failed
// observer, or a headless/hidden-tab render all fail toward "visible".
const HIDDEN_STYLE = {
  up: { opacity: '0', transform: 'translateY(28px)' },
  left: { opacity: '0', transform: 'translateX(-36px)' },
  right: { opacity: '0', transform: 'translateX(36px)' },
  scale: { opacity: '0', transform: 'scale(0.92)' },
  rotate: { opacity: '0', transform: 'rotate(-7deg) scale(0.85)' },
  'clip-v': { clipPath: 'inset(0 0 100% 0)' },
  'clip-h': { clipPath: 'inset(0 100% 0 0)' },
};

export function useReveal() {
  useLayoutEffect(() => {
    // Primary path is pure CSS (animation-timeline: view()) — scroll-linked,
    // scrubs both directions, never needs JS. Only step in as a fallback.
    const nativeScrollLinked =
      typeof CSS !== 'undefined' && CSS.supports?.('animation-timeline: view()');
    if (nativeScrollLinked) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = Array.from(document.querySelectorAll('[data-reveal]'));
    if (reduceMotion || !('IntersectionObserver' in window) || els.length === 0) return;

    const clear = (el) => {
      el.style.opacity = '';
      el.style.transform = '';
      el.style.clipPath = '';
    };

    els.forEach((el) => {
      const hidden = HIDDEN_STYLE[el.dataset.reveal];
      if (!hidden) return;
      el.classList.add('reveal-el');
      Object.assign(el.style, hidden);
    });

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            clear(entry.target);
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach((el) => io.observe(el));

    // Safety net: if the observer never fires (headless render, hidden tab),
    // don't ship a permanently-blank section.
    const safety = setTimeout(() => els.forEach(clear), 2500);

    return () => {
      io.disconnect();
      clearTimeout(safety);
    };
  }, []);
}
