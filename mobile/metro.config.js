const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// Wrap with NativeWind so Tailwind classes work in React Native.
module.exports = withNativeWind(config, { input: './global.css' });
