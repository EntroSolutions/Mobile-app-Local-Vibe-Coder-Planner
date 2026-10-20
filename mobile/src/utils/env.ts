/**
 * Environment configuration.
 * Expo exposes variables prefixed with EXPO_PUBLIC_ via `process.env`.
 * Copy `.env.example` to `.env` and adjust values locally.
 */

const APP_ENV = process.env.EXPO_PUBLIC_APP_ENV ?? 'development';

export const env = {
  appEnv: APP_ENV,
  apiBaseUrl: process.env.EXPO_PUBLIC_API_BASE_URL ?? 'http://localhost:3000/api',
  supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL ?? '',
  supabaseAnonKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? '',
} as const;
