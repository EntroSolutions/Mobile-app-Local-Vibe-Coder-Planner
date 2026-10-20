import { Tabs } from 'expo-router';
import { View } from 'react-native';

import { Icon } from '@/components/ui/Icon';
import { useThemeColor } from '@/hooks/useThemeColor';

// Placeholder icons until a real icon set is wired up.
const PLACEHOLDER_ICONS: Record<string, string> = {
  discover: '🧭',
  map: '🗺️',
  favorites: '❤️',
  profile: '👤',
};

export default function TabsLayout() {
  const { tabBar } = useThemeColor();

  const iconFor = (key: string) =>
    function TabIcon({ color }: { color: string }) {
      return (
        <View accessibilityElementsHidden>
          <Icon glyph={PLACEHOLDER_ICONS[key] ?? '•'} color={color} />
        </View>
      );
    };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: tabBar.activeTint,
        tabBarInactiveTintColor: tabBar.inactiveTint,
        tabBarStyle: { backgroundColor: tabBar.background },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: 'Discover', tabBarIcon: iconFor('discover') }}
      />
      <Tabs.Screen name="map" options={{ title: 'Map', tabBarIcon: iconFor('map') }} />
      <Tabs.Screen
        name="favorites"
        options={{ title: 'Favorites', tabBarIcon: iconFor('favorites') }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: 'Profile', tabBarIcon: iconFor('profile') }}
      />
    </Tabs>
  );
}
