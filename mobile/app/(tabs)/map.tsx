import { Text, View } from 'react-native';

import { Screen } from '@/components/ui/Screen';
import { useThemeStyles } from '@/hooks/useThemeStyles';

export default function MapScreen() {
  const { styles } = useThemeStyles();

  return (
    <Screen>
      <View style={styles.center}>
        <Text style={styles.title}>Map</Text>
        <Text style={styles.subtitle}>Interactive map of tours and points of interest.</Text>
      </View>
    </Screen>
  );
}
