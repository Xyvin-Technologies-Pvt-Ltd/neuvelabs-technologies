/**
 * Centralized Theme Configuration
 * Provides consistent styling classes across all pages
 */

export const theme = {
  // Background colors for different section types
  backgrounds: {
    hero: 'bg-white',
    section: 'bg-gray-50',
    sectionAlt: 'bg-white',
    card: 'bg-white',
    cardHover: 'bg-white hover:bg-gray-50',
  },

  // Text colors
  text: {
    primary: 'text-gray-900',
    secondary: 'text-gray-600',
    muted: 'text-gray-500',
    light: 'text-gray-400',
  },

  // Border colors
  borders: {
    default: 'border-gray-200',
    hover: 'border-gray-300',
    light: 'border-gray-100',
  },

  // Badge/Tag styling
  badges: {
    default: 'bg-blue-50 border border-blue-100 text-gray-600',
    primary: 'bg-blue-600 text-white',
    secondary: 'bg-gray-100 text-gray-700',
  },

  // Card styling presets
  cards: {
    default: 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md',
    elevated: 'bg-white border border-gray-200 shadow-sm hover:shadow-md',
    subtle: 'bg-gray-50 border border-gray-200',
  },

  // Gradient presets (single blue theme)
  gradients: {
    text: 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500',
    background: 'bg-gradient-to-r from-blue-600 to-blue-500',
    radial: 'bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-50/30 via-transparent to-transparent',
    radialTop: 'bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-50/20 via-white to-white',
    radialBottom: 'bg-[radial-gradient(ellipse_at_bottom,var(--tw-gradient-stops))] from-blue-50/20 via-white to-white',
  },

  // Hero section overlays
  overlays: {
    hero: 'bg-gradient-to-b from-white/95 via-white/90 to-white/95',
    heroRadial: 'bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-50/30 via-transparent to-transparent',
  },

  // Icon colors
  icons: {
    primary: 'text-blue-600',
    secondary: 'text-blue-500',
    accent: 'text-blue-400',
  },

  // Button styles
  buttons: {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900',
    outline: 'bg-white hover:bg-gray-50 border border-gray-200 text-gray-900',
  },
};

/**
 * Helper function to combine theme classes
 */
export function combineThemeClasses(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Get hero section classes
 */
export function getHeroClasses() {
  return combineThemeClasses(
    theme.backgrounds.hero,
    'relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden'
  );
}

/**
 * Get section wrapper classes
 */
export function getSectionClasses(alt = false) {
  return combineThemeClasses(
    alt ? theme.backgrounds.sectionAlt : theme.backgrounds.section,
    'py-24'
  );
}

/**
 * Get card classes
 */
export function getCardClasses(elevated = false) {
  return combineThemeClasses(
    elevated ? theme.cards.elevated : theme.cards.default,
    'rounded-2xl transition-all duration-300'
  );
}

