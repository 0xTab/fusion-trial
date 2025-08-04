// Design Tokens - Single source of truth for all design values
export const COLORS = {
  PRIMARY: {
    BG: '#000',
    TEXT: '#fff',
    SECONDARY_TEXT: '#5E616E',
    FOOTER_BG: '#090A11',
    COPYRIGHT_TEXT: '#84899A',
  },
  GRADIENTS: {
    BUTTON: 'linear-gradient(90deg, #5AEFA7 4.74%, rgba(217, 217, 217, 0.50) 96.75%)',
    PLATFORM: 'linear-gradient(180deg, rgba(45, 175, 152, 0.51) 0%, rgba(200, 200, 200, 0.00) 100%)',
    LOGO: 'linear-gradient(0deg, #5AEFA7, #42EBAE)',
  },
  BLUR: {
    TEAL: 'rgba(92, 242, 215, 0.6)',
    GREEN: 'rgba(66, 235, 174, 0.5)',
    BLUE: 'rgba(49, 218, 241, 0.06)',
  },
  SOCIAL: {
    TWITTER: '#359EFF',
    INSTAGRAM: '#F85471',
    FACEBOOK: '#5372FF',
    DISCORD: '#6850FF',
    GITHUB: '#363636',
  },
};

export const FONTS = {
  PRIMARY: "'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
  SECONDARY: "'Inter', sans-serif",
};

export const SPACING = {
  XS: '0.5rem',
  SM: '1rem',
  MD: '1.5rem',
  LG: '2rem',
  XL: '2.5rem',
  XXL: '4rem',
};

export const BORDER_RADIUS = {
  SM: '8px',
  MD: '15px',
  LG: '25px',
};

export const SHADOWS = {
  BUTTON: '0 6px 8px 0 rgba(0, 0, 0, 0.70)',
  BUTTON_HOVER: '0 8px 12px 0 rgba(0, 0, 0, 0.8)',
};

export const TRANSITIONS = {
  FAST: '0.3s ease',
  MEDIUM: '0.8s ease-out',
};

export const BREAKPOINTS = {
  MOBILE: '480px',
  TABLET: '768px',
  DESKTOP: '1200px',
};

export const ANIMATIONS = {
  FADE_IN_UP: 'fadeInUp 0.8s ease-out',
  PULSE: 'pulse 2s infinite',
  SLIDE_IN_LEFT: 'slideInFromLeft 0.6s ease-out',
  SLIDE_IN_RIGHT: 'slideInFromRight 0.6s ease-out',
}; 