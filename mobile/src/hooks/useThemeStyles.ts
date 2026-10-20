import { StyleSheet, type StyleProp, type ViewStyle } from 'react-native';

import { useTheme } from '@/features/theme/ThemeProvider';

/** Returns common screen-level styles derived from the active theme. */
export function useThemeStyles(): {
  styles: { center: StyleProp<ViewStyle>; title: { fontSize: number; fontWeight: '700'; color: string; marginBottom: number }; subtitle: { fontSize: number; color: string; textAlign: 'center' } };
} {
  const theme = useTheme();
  return {
    styles: StyleSheet.create({
      center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing.lg,
      },
      title: {
        fontSize: 28,
        fontWeight: '700',
        color: theme.colors.text,
        marginBottom: theme.spacing.md,
      },
      subtitle: {
        fontSize: 15,
        color: theme.colors.textMuted,
        textAlign: 'center',
      },
    }),
  };
}
