/**
 * Shared Motion animation variants for Femsa website.
 * One entrance style per section type — restraint over spectacle.
 * B2B industrial brand: noticeable but not busy.
 */

// ─── Easings ─────────────────────────────────────────────────────────────────
/** Ease-out expo — for scroll-triggered section entrances */
export const EASE_OUT = [0.16, 1, 0.3, 1];

/** Spring — for interactive/gesture-driven motion (hover, tap) */
export const SPRING = { type: 'spring', stiffness: 300, damping: 30 };

// ─── Section-level fade-slide-up (used once per section type) ────────────────
export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE_OUT },
  },
};

/** Reduced-motion safe variant — opacity only, no translate */
export const fadeOnly = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

// ─── Staggered card grids ─────────────────────────────────────────────────────
/**
 * Parent container: triggers stagger for child cards.
 * 60ms between siblings, caps well under 1s for a 6-card grid.
 */
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.065,
      delayChildren: 0.05,
    },
  },
};

/** Child card — same fade-up as sections but with spring feel */
export const cardItem = {
  hidden: { opacity: 0, y: 14, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: EASE_OUT },
  },
};

// ─── Hero stagger (headline → subhead → CTA) ─────────────────────────────────
export const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const heroChild = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

// ─── Micro-interactions (buttons, interactive elements) ───────────────────────
/** Apply as whileHover / whileTap props on motion.button or motion.a */
export const buttonHover = { scale: 1.025 };
export const buttonTap   = { scale: 0.975 };

// ─── Navbar backdrop ─────────────────────────────────────────────────────────
export const navbarSolid = {
  hidden: { backdropFilter: 'blur(0px)', backgroundColor: 'rgba(3,33,119,0)' },
  visible: { backdropFilter: 'blur(12px)', backgroundColor: 'rgba(3,33,119,0.97)' },
};

// ─── Reduced-motion helper ────────────────────────────────────────────────────
/**
 * Returns safe variants based on the prefers-reduced-motion setting.
 * Call at the top of any animated component:
 *   const variants = getVariants(shouldReduce, fadeUp, fadeOnly);
 */
export function getVariants(reducedMotion, full, reduced = fadeOnly) {
  return reducedMotion ? reduced : full;
}
