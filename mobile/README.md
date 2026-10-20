# Local Bulgarian Tour — Mobile App

Expo React Native app for discovering local Bulgarian tours, places, and cultural experiences.

## Stack

- Expo SDK 53 (latest stable), React Native 0.79, React 19
- TypeScript (strict)
- Expo Router (file-based routing, typed routes)
- NativeWind 4 (Tailwind CSS for React Native)
- ESLint + Prettier
- Jest + React Native Testing Library

## Requirements

- **Node.js 22 LTS** (>= 22.x)
- npm 10+
- For device testing: **Expo Go** app on Android/iOS (or Android Emulator / iOS Simulator)

## Getting started

```bash
cd mobile
npm install

# Environment setup — copy the example and fill in your local values
cp .env.example .env

npm start
```

Then:

- Press `a` to open in the Android Emulator, `i` for the iOS Simulator.
- On a physical device, scan the QR code with **Expo Go**.

## Scripts

| Script              | Description                              |
| ------------------- | ---------------------------------------- |
| `npm start`         | Start Expo dev server                    |
| `npm run android`   | Start and open on Android                |
| `npm run ios`       | Start and open on iOS                    |
| `npm run lint`      | Run ESLint                               |
| `npm run lint:fix`  | Run ESLint with autofix                  |
| `npm run format`    | Format the codebase with Prettier        |
| `npm run typecheck` | Strict TypeScript check (`tsc --noEmit`) |
| `npm test`          | Run Jest tests                           |

## Folder structure (feature-oriented)

```
mobile/
├── app/                 # Expo Router routes
│   ├── _layout.tsx      # Root layout (theme provider, status bar)
│   └── (tabs)/          # Tab navigation
│       ├── index.tsx    # Discover
│       ├── map.tsx      # Map
│       ├── favorites.tsx
│       └── profile.tsx
├── src/
│   ├── components/      # Shared UI components (ui/)
│   ├── features/        # Feature modules (theme, discover, map, ...)
│   │   └── <feature>/
│   │       ├── components/
│   │       ├── hooks/
│   │       └── __tests__/
│   ├── hooks/           # Cross-feature hooks (useThemeColor, useThemeStyles)
│   ├── services/        # API clients and external integrations
│   ├── store/           # Global state
│   ├── theme/           # Design tokens (colors, spacing, typography, radii)
│   ├── types/           # Shared TypeScript types
│   └── utils/           # Helpers and env configuration
└── global.css           # Tailwind entry consumed by NativeWind
```

Path aliases: `@/*` → `src/*`, `@app/*` → `app/*` (see `tsconfig.json`).

## Conventions for new features

1. Create a folder under `src/features/<feature-name>/`.
2. Keep screens in `app/` — they import from the feature via `@/features/...`.
3. Reusable UI goes in `src/components/ui/`; feature-specific components stay in the feature folder.
4. Add tests next to the code under `__tests__/`.
5. Use theme tokens (`src/theme/tokens.ts`) and the `useTheme`/`useThemeStyles` hooks — never hardcode colors.
6. New env vars must be prefixed with `EXPO_PUBLIC_` and added to `.env.example`.

## Theme

The visual palette draws on Bulgarian cultural colors — deep green (`#0B3D2E`), flag red (`#D6262B`), and wheat gold (`#F2C14E`) — with light/dark modes and WCAG-AA friendly text contrast.
