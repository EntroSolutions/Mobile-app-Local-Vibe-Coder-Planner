import { render, screen } from '@testing-library/react-native';
import { Text } from 'react-native';

import { Screen } from '@/components/ui/Screen';
import { palette, spacing, typography } from '@/theme/tokens';

describe('Screen', () => {
  it('renders its children', () => {
    render(
      <Screen>
        <Text>Discover</Text>
      </Screen>,
    );
    expect(screen.getByText('Discover')).toBeTruthy();
  });
});

describe('theme tokens', () => {
  it('expose the Bulgarian-inspired palette', () => {
    expect(palette.primary).toBe('#0B3D2E');
    expect(palette.secondary).toBe('#D6262B');
    expect(palette.accent).toBe('#F2C14E');
  });

  it('expose spacing and typography scales', () => {
    expect(spacing.md).toBe(16);
    expect(typography.title.fontSize).toBe(28);
  });
});
