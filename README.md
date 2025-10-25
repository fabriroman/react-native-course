# MoviesApp

MoviesApp is a React Native application built with TypeScript using the React Native CLI. The project was created as part of the Digital Academy mobile module at AssureSoft, showcasing movies pulled from [The Movie Database (TMDB)](https://developer.themoviedb.org/docs/getting-started) and including a dynamic UI with theming support, deep navigation, and a wishlist workflow tailored for mobile devices.

## Design Reference

- UI inspired by the community Figma file: [Movie App - Dark Theme](https://www.figma.com/community/file/1126286295256197533).

## Features

- Browse popular movies in a carousel view and themed sections.
- Drill into full movie details (overview, runtime, genres, cast) via a modal.
- Filter catalog results by genre or keyword and fall back to curated picks.
- Build and manage a wishlist with search and genre filters.
- Review profile insights including wishlist stats and favorite genres.
- Toggle between light and dark themes across navigation and UI components.

## Prerequisites

- Node.js >= 20 and npm (ships with Node).
- React Native development environment:
  - Xcode & CocoaPods for iOS builds.
  - Android Studio, Android SDK, and an emulator or device for Android builds.
- Watchman (macOS) and JDK 17+ for Android tooling.

Follow the official [React Native Environment Setup](https://reactnative.dev/docs/environment-setup) (React Native CLI workflow) for platform-specific configuration.

## Initial Setup

```bash
npm install
```

Create a `.env` file in the project root with your TMDB credentials.

```
TMDB_ACCESS_TOKEN=your_tmdb_v4_access_token
TMDB_API_KEY=your_tmdb_v3_api_key
TMDB_BASE_URL=https://api.themoviedb.org/3
TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p/original
```

## Running the App

- **Start the Metro bundler**
  ```bash
  npm start
  ```
- **Android (device or emulator)**
  ```bash
  npm run android
  ```
- **iOS (simulator)**
  ```bash
  npx pod-install ios
  npm run ios
  ```

## Project Structure

```
src/
  assets/                Static images and media.
  components/            Reusable UI atoms, molecules, and organisms.
  constants/             Theme colors and shared constants (e.g., genres).
  contexts/              Global state providers (theme, wishlist, modal).
  hooks/                 Data-fetching and stateful logic (TMDB integrations).
  navigation/            Stack and tab navigators with theming helpers.
  screens/               Feature screens (Home, Search, Wishlist, Profile, See More).
  types/                 Shared TypeScript definitions.
```

## Architecture Highlights

- **TMDB integration** via reusable hooks (`useTMDB`, `usePopularMovies`, `useMovieDetails`, etc.) centralizes API access, error handling, and loading states.
- **Context providers** (`ThemeProvider`, `WishlistProvider`, `MovieModalProvider`) encapsulate global state and expose composable hooks.
- **Dynamic theming**: `useThemedColors` and palette utilities propagate light/dark schemes across components and navigation.
- **Navigation hierarchy**: A stack navigator wraps a bottom tab navigator to support nested screens and modal transitions (e.g., `SeeMore` screen).
- **UI composition**: Modular components (carousels, grids, filter chips) optimize reuse between Search, Wishlist, and Profile experiences.

## Troubleshooting

- If Metro cache causes issues, clear it with `npm start -- --reset-cache`.
- When adding new native dependencies, reinstall pods (`npx pod-install`) and rebuild native projects.
- Ensure environment variables are loaded: restart Metro after modifying `.env`.
