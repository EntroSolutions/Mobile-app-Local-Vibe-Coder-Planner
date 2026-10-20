import { Text, View } from 'react-native';

import { Screen } from '@/components/ui/Screen';
import { useThemeStyles } from '@/hooks/useThemeStyles';

export default function FavoritesScreen() {
  const { styles } = useThemeStyles();

  return (
    <Screen>
      <View style={styles.center}>
        <Text style={styles.title}>Favorites</Text>
        <Text style={styles.subtitle}>Your saved tours, places, and experiences.</Text>
      </View>
    </Screen>
  );
}
