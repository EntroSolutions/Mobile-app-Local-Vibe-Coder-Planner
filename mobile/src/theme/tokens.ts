/**
 * Theme tokens: colors, spacing, typography, and radii.
 * Palette is inspired by Bulgarian cultural colors (flag green/red, wheat gold)
 * while meeting WCAG AA contrast in both light and dark modes.
 */

export const palette = {
  primary: '#0B3D2E',
  primaryLight: '#146b52',
  primaryDark: '#072a20',
  secondary: '#D6262B',
  secondaryLight: '#f0565a',
  accent: '#F2C14E',
  flagGreen: '#00966E',
  flagRed: '#D6262B',
  surfaceLight: '#FAF9F6',
  surfaceDark: '#121212',
  textLight: '#1B1B1B',
  textDark: '#F5F5F5',
  mutedLight: '#5F6368',
  mutedDark: '#A8A8A8',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

export const typography = {
  title: { fontSize: 28, fontWeight: '700' as const, lineHeight: 34 },
  subtitle: { fontSize: 15, fontWeight: '400' as const, lineHeight: 22 },
  body: { fontSize: 16, lineHeight: 24 },
  label: { fontSize: 12, fontWeight: '600' as const },
};

export const radii = {
  sm: 4,
  md: 8,
  lg: 16,
  pill: 999,
};

export const theme = { palette, spacing, typography, radii };
