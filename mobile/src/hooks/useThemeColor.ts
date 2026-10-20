import { useTheme } from '@/features/theme/ThemeProvider';

/** Convenience hook returning the current theme plus tab bar colors. */
export function useThemeColor() {
  const theme = useTheme();
  return {
    theme,
    tabBar: {
      background: theme.colors.background,
      activeTint: theme.colors.primary,
      inactiveTint: theme.colors.textMuted,
    },
  };
}
