import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { useColorScheme } from 'nativewind';

import { palette, radii, spacing, typography } from './tokens';

export type Scheme = 'light' | 'dark';

export interface Theme {
  scheme: Scheme;
  colors: {
    background: string;
    surface: string;
    text: string;
    textMuted: string;
    primary: string;
    secondary: string;
    accent: string;
  };
  spacing: typeof spacing;
  typography: typeof typography;
  radii: typeof radii;
}

const LIGHT_THEME: Theme = {
  scheme: 'light',
  colors: {
    background: palette.surfaceLight,
    surface: palette.surfaceLight,
    text: palette.textLight,
    textMuted: palette.mutedLight,
    primary: palette.primary,
    secondary: palette.secondary,
    accent: palette.accent,
  },
  spacing,
  typography,
  radii,
};

const DARK_THEME: Theme = {
  scheme: 'dark',
  colors: {
    background: palette.surfaceDark,
    surface: '#1E1E1E',
    text: palette.textDark,
    textMuted: palette.mutedDark,
    primary: palette.flagGreen,
    secondary: palette.secondary,
    accent: palette.accent,
  },
  spacing,
  typography,
  radii,
};

const ThemeContext = createContext<Theme>(LIGHT_THEME);

/** Provides light/dark themed tokens to the entire app. */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const { colorScheme } = useColorScheme();
  const value = useMemo(
    () => (colorScheme === 'dark' ? DARK_THEME : LIGHT_THEME),
    [colorScheme],
  );
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): Theme {
  return useContext(ThemeContext);
}
