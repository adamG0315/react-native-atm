export const colors = {
  primary: {
    main: '#2563EB',
    light: '#60A5FA',
    dark: '#1D4ED8',
  },
  
  neutral: {
    white: '#FFFFFF',
    black: '#1A1A1A',
    gray50: '#F9FAFB',
    gray100: '#F3F4F6',
    gray200: '#E5E7EB',
    gray300: '#D1D5DB',
    gray400: '#9CA3AF',
    gray500: '#6B7280',
  },

  // Semantic Colors
  feedback: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },

  background: {
    default: '#FFFFFF',
    subtle: '#F9FAFB',
    muted: '#F3F4F6',
  },

  text: {
    primary: '#1A1A1A',
    secondary: '#6B7280',
    disabled: '#9CA3AF',
    inverse: '#FFFFFF',
  },

  border: {
    light: '#E5E7EB',
    default: '#D1D5DB',
    dark: '#9CA3AF',
  },

  buttons: {
    primary: {
      background: '#2563EB',     // Blue
      text: '#FFFFFF',
      pressed: '#1D4ED8',
      disabled: '#93C5FD',
    },
    secondary: {
      background: '#4B5563',     // Gray
      text: '#FFFFFF',
      pressed: '#374151',
      disabled: '#9CA3AF',
    },
    success: {
      background: '#10B981',     // Green
      text: '#FFFFFF',
      pressed: '#059669',
      disabled: '#6EE7B7',
    },
    danger: {
      background: '#EF4444',     // Red
      text: '#FFFFFF',
      pressed: '#DC2626',
      disabled: '#FCA5A5',
    },
  }
} as const;

export type ColorKeys = keyof typeof colors;

export const typography = {
  size: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
  },
  lineHeight: {
    xs: 16,
    sm: 20,
    base: 24,
    lg: 28,
    xl: 28,
    '2xl': 32,
    '3xl': 36,
    '4xl': 40,
    '5xl': 48,
  },
  weight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  }
} as const;

export const commonStyles = {
  pageContainer: {
    flex: 1,
    gap: 12,
  },
  
  pageTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: 24,
  },

  card: {
    backgroundColor: colors.background.subtle,
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  
  buttonContainer: {
    marginTop: 'auto',
  },
  
  inputContainer: {
    backgroundColor: colors.background.subtle,
    padding: 16,
    borderRadius: 8,
  },
  
  label: {
    fontSize: 16,
    color: colors.text.secondary,
  },
  value: {
    fontSize: 16,
    color: colors.text.primary,
  }
};