// Design Tokens - Centralized design system constants
// Following clean code principles by avoiding magic numbers

export const COLORS = {
  // Primary Colors
  PRIMARY: '#43FFBB',
  PRIMARY_DARK: '#3AE0A3',
  PRIMARY_LIGHT: '#42EBAE',
  
  // Primary Object for specific use cases
  PRIMARY_OBJECT: {
    FOOTER_BG: '#090A11',
  },
  
  // Background Colors
  BACKGROUND_DARK: '#090A11',
  BACKGROUND_CARD: '#2A2D43',
  BACKGROUND_CARD_BORDER: '#3C3F56',
  
  // Text Colors
  TEXT_PRIMARY: '#FFFFFF',
  TEXT_SECONDARY: '#84899A',
  TEXT_ACCENT: '#01E47B',
  
  // Gradient Colors
  GRADIENT_START: '#01E47B',
  GRADIENT_END: '#03C3F0',
  
  // Social Media Colors
  TWITTER: '#359EFF',
  INSTAGRAM: '#F85471',
  FACEBOOK: '#5372FF',
  DISCORD: '#6850FF',
  MEDIUM: '#363636',
  GITHUB: '#363636',
  
  // Status Colors
  SUCCESS: '#02D9A3',
  WARNING: '#FFB800',
  ERROR: '#FF3A44',
  
  // Social Media Colors Object
  SOCIAL: {
    TWITTER: '#359EFF',
    INSTAGRAM: '#F85471',
    FACEBOOK: '#5372FF',
    DISCORD: '#6850FF',
    MEDIUM: '#363636',
    GITHUB: '#363636',
  },
};

export const TYPOGRAPHY = {
  // Font Families
  FONT_PRIMARY: 'Outfit, sans-serif',
  FONT_SECONDARY: 'Inter, sans-serif',
  
  // Font Sizes
  SIZE_XS: '8px',
  SIZE_SM: '15px',
  SIZE_BASE: '18px',
  SIZE_LG: '20px',
  SIZE_XL: '25px',
  SIZE_2XL: '35px',
  SIZE_3XL: '40px',
  SIZE_4XL: '50px',
  SIZE_5XL: '60px',
  SIZE_6XL: '70px',
  SIZE_7XL: '85px',
  
  // Font Weights
  WEIGHT_NORMAL: 400,
  WEIGHT_SEMIBOLD: 600,
  WEIGHT_BOLD: 700,
  
  // Line Heights
  LEADING_TIGHT: 1.21,
  LEADING_NORMAL: 1.26,
  LEADING_RELAXED: 1.4,
};

export const SPACING = {
  // Padding
  PADDING_XS: '10px',
  PADDING_SM: '20px',
  PADDING_MD: '40px',
  PADDING_LG: '60px',
  PADDING_XL: '80px',
  PADDING_2XL: '100px',
  PADDING_3XL: '120px',
  
  // Margins
  MARGIN_XS: '10px',
  MARGIN_SM: '20px',
  MARGIN_MD: '40px',
  MARGIN_LG: '60px',
  MARGIN_XL: '80px',
  MARGIN_2XL: '100px',
  MARGIN_3XL: '120px',
  
  // Gaps
  GAP_XS: '10px',
  GAP_SM: '15px',
  GAP_MD: '20px',
  GAP_LG: '30px',
  GAP_XL: '40px',
  GAP_2XL: '60px',
  GAP_3XL: '80px',
  GAP_4XL: '88px',
};

export const BORDER_RADIUS = {
  SM: '8px',
  MD: '10px',
  LG: '14px',
  XL: '15px',
  XXL: '20px',
  FULL: '50%',
};

export const SHADOWS = {
  SM: '0 5px 15px rgba(0, 0, 0, 0.3)',
  MD: '10px 15px 45px rgba(0, 0, 0, 0.5)',
  LG: '15px 25px 60px rgba(0, 0, 0, 0.6)',
  PRIMARY: '0 10px 30px rgba(66, 235, 174, 0.3)',
  PRIMARY_HOVER: '0 15px 40px rgba(66, 235, 174, 0.4)',
  BUTTON: '0 10px 30px rgba(66, 235, 174, 0.3)',
};

export const BREAKPOINTS = {
  MOBILE: '768px',
  TABLET: '1200px',
  DESKTOP: '1400px',
  LARGE_DESKTOP: '1920px',
};

export const LAYOUT = {
  // Container Max Widths
  CONTAINER_SM: '600px',
  CONTAINER_MD: '768px',
  CONTAINER_LG: '1200px',
  CONTAINER_XL: '1400px',
  CONTAINER_2XL: '1920px',
  
  // Header
  HEADER_HEIGHT: '80px',
  
  // Section Padding
  SECTION_PADDING: '120px',
  SECTION_PADDING_MOBILE: '80px',
};

export const ANIMATIONS = {
  // Transition Durations
  DURATION_FAST: '0.2s',
  DURATION_NORMAL: '0.3s',
  DURATION_SLOW: '0.5s',
  
  // Easing Functions
  EASE_IN: 'cubic-bezier(0.4, 0, 1, 1)',
  EASE_OUT: 'cubic-bezier(0, 0, 0.2, 1)',
  EASE_IN_OUT: 'cubic-bezier(0.4, 0, 0.2, 1)',
  
  // Animation Classes
  FADE_IN_UP: 'fadeInUp 0.6s ease-out',
  FADE_IN_DOWN: 'fadeInDown 0.6s ease-out',
  FADE_IN_LEFT: 'fadeInLeft 0.6s ease-out',
  FADE_IN_RIGHT: 'fadeInRight 0.6s ease-out',
};

export const TRANSITIONS = {
  // Transition Durations
  DURATION_FAST: '0.2s',
  DURATION_NORMAL: '0.3s',
  DURATION_SLOW: '0.5s',
  FAST: '0.2s',
  NORMAL: '0.3s',
  SLOW: '0.5s',
  
  // Easing Functions
  EASE_IN: 'cubic-bezier(0.4, 0, 1, 1)',
  EASE_OUT: 'cubic-bezier(0, 0, 0.2, 1)',
  EASE_IN_OUT: 'cubic-bezier(0.4, 0, 0.2, 1)',
};

export const GRADIENTS = {
  PRIMARY: 'linear-gradient(135deg, #01E47B 0%, #03C3F0 100%)',
  SECONDARY: 'linear-gradient(135deg, #42EBAE 0%, rgba(66, 235, 174, 0.24) 100%)',
  HERO: 'linear-gradient(180deg, #42EBAE 0%, #42EBAE 24%, rgba(66, 235, 174, 0) 100%)',
  CARD: 'linear-gradient(135deg, #2A2D43 0%, #3C3F56 100%)',
  BUTTON: 'linear-gradient(135deg, #01E47B 0%, #03C3F0 100%)',
  PLATFORM: 'linear-gradient(135deg, #01E47B 0%, #03C3F0 100%)',
};

// Z-Index Scale
export const Z_INDEX = {
  BASE: 1,
  DROPDOWN: 100,
  STICKY: 200,
  HEADER: 1000,
  MODAL: 2000,
  TOOLTIP: 3000,
}; 