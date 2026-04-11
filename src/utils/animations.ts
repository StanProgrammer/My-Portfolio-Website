// animations.ts

const ease = [0.25, 0.1, 0.25, 1]; // smooth cubic-bezier

// -----------------------------
// Base Fade
// -----------------------------
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease },
};

// -----------------------------
// Directional Fades
// -----------------------------
export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease },
};

export const slideInLeft = {
  initial: { x: -80, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.6, ease },
};

export const slideInRight = {
  initial: { x: 80, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.6, ease },
};

// -----------------------------
// Scale
// -----------------------------
export const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5, ease },
};

// -----------------------------
// Stagger Container
// -----------------------------
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// -----------------------------
// Hover Effects
// -----------------------------
export const cardHover = {
  whileHover: {
    scale: 1.04,
    y: -4,
  },
  transition: {
    type: "spring",
    stiffness: 260,
    damping: 18,
  },
};

export const cardHoverSmall = {
  whileHover: {
    scale: 1.02,
  },
  transition: {
    type: "spring",
    stiffness: 300,
  },
};

// -----------------------------
// Page Transition
// -----------------------------
export const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.5, ease },
};

// -----------------------------
// Viewport Animation Helper
// -----------------------------
export const viewport = {
  once: true,
  margin: "-100px",
};