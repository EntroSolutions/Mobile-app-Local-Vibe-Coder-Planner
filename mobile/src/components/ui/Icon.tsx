import { Text, type TextProps } from 'react-native';

import { useTheme } from '@/features/theme/ThemeProvider';

interface IconProps extends TextProps {
  /** Emoji or unicode glyph used as a lightweight placeholder icon. */
  glyph: string;
  /** Color hint kept for future replacement with a real icon component. */
  color?: string;
}

/** Placeholder icon component rendering a glyph. */
export function Icon({ glyph, color, ...rest }: IconProps) {
  const theme = useTheme();
  return (
    <Text
      style={{ fontSize: 24, color: color ?? theme.colors.text }}
      accessibilityIgnoresInvertColors
      {...rest}
    >
      {glyph}
    </Text>
  );
}
