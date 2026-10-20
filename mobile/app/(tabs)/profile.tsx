import { Text, View } from 'react-native';

import { Screen } from '@/components/ui/Screen';
import { useThemeStyles } from '@/hooks/useThemeStyles';

export default function ProfileScreen() {
  const { styles } = useThemeStyles();

  return (
    <Screen>
      <View style={styles.center}>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.subtitle}>Account settings, trips, and preferences.</Text>
      </View>
    </Screen>
  );
}
