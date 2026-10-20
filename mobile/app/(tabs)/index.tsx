import { Text, View } from 'react-native';

import { Screen } from '@/components/ui/Screen';
import { useThemeStyles } from '@/hooks/useThemeStyles';

export default function DiscoverScreen() {
  const { styles } = useThemeStyles();

  return (
    <Screen>
      <View style={styles.center}>
        <Text style={styles.title}>Discover</Text>
        <Text style={styles.subtitle}>
          Explore hidden gems, cultural sites, and local experiences across Bulgaria.
        </Text>
      </View>
    </Screen>
  );
}
