// Backdrop fade
export const backdropAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
}

// Modal content animations
export const modalAnimations = {
    "slide-up": {
        initial: { y: 60, opacity: 0, scale: 0.98 },
        animate: { y: 0, opacity: 1, scale: 1 },
        exit: { y: 60, opacity: 0, scale: 0.98 }
    },

    "scale": {
        initial: { y: 40, scale: 0.95, opacity: 0 },
        animate: { y: 0, scale: 1, opacity: 1 },
        exit: { y: 40, scale: 0.95, opacity: 0 }
    },

    "slide-right": {
        initial: { x: 120, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: 120, opacity: 0 }
    },

    "fade": {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
    }
}

// Default system timing tokens
export const modalDurations = {
    fast: 0.15,
    normal: 0.25,
    slow: 0.4
}
