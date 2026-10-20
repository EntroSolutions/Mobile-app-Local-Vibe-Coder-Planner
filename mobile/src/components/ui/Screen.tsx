import { type ReactNode } from 'react';
import { View } from 'react-native';

import { useTheme } from '@/features/theme/ThemeProvider';

/** Safe, themed container used by all screens. */
export function Screen({ children }: { children: ReactNode }) {
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      {children}
    </View>
  );
}
