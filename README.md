# Modular Svelte Application Template

## Project Overview

This repository is a modular template for building Svelte-based applications. It provides a collection of reusable components and modules designed to accelerate the development of future projects, eliminating the need to rebuild common functionality from scratch.

## Core Purpose

The template contains pre-built, production-ready modules including authentication forms, payment processing forms (mock integration layer), user profile management, and responsive UI components. The primary goal is to serve as an internal development accelerator - a kit of battle-tested components that can be dropped into new projects.

## Key Features

- Dual theme support (light and dark mode with localStorage persistence)
- Two interface languages (Russian and English with reactive switching without page reload)
- Mobile-first responsive design (touch-friendly elements, hamburger menu)
- Modern styling with glassmorphism and neon accents using smooth transitions
- Full TypeScript type safety
- TailwindCSS utility framework
- Modular architecture for component reuse

## Technology Stack

- SvelteKit with static adapter
- TypeScript for strict typing
- TailwindCSS for styling
- Zustand or native Svelte stores for state management
- Vite for build tooling

## Project Structure

```
src/
├── lib/
│   ├── components/     # AuthForm, PaymentForm, WelcomeCard, ThemeToggle, LanguageToggle
│   ├── stores/         # themeStore, languageStore, authStore
│   ├── i18n/           # translations for ru/en, i18n store
│   └── layouts/        # BaseLayout.svelte
├── routes/
│   ├── +layout.svelte  # Main layout with theme and language integration
│   └── +page.svelte    # Home page with WelcomeCard
├── app.html
└── app.css
```

## Environment Variables

Create a `.env` file based on `.env.example`:

```env
PUBLIC_APP_NAME=ModularSvelteBase
PUBLIC_APP_URL=http://localhost:5173
PUBLIC_AUTH_API_URL=https://your-auth-api.com
AUTH_SECRET=your-secret-key-here
PUBLIC_PAYMENT_PROVIDER=stripe
PUBLIC_STRIPE_PUBLIC_KEY=pk_test_xxx
STRIPE_SECRET_KEY=sk_test_xxx
PUBLIC_BASE_PATH=/
```

Variables with `PUBLIC_` prefix are accessible on the client side.

## Installation

```bash
# Clone the repository
git clone https://github.com/your-repo/modular-svelte-template.git
cd modular-svelte-template

# Run setup script
./scripts/setup.sh

# Or manually:
npm install
cp .env.example .env
npm run build
```

## Available Scripts

```json
{
  "dev": "vite dev",
  "build": "vite build",
  "preview": "vite preview",
  "check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
  "lint": "eslint .",
  "format": "prettier --write .",
  "setup": "./scripts/setup.sh"
}
```

## Setup Script

The `scripts/setup.sh` script performs:

1. Checks for Node.js 18+
2. Installs npm dependencies
3. Creates `.env` from `.env.example` if missing
4. Configures git hooks (optional)
5. Builds the project

## Usage After Installation

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Included Modules

| Module | Description |
|--------|-------------|
| AuthForm | Login, registration, password recovery forms |
| PaymentForm | Payment form with mock integration layer |
| WelcomeCard | Welcome component with project description and theme/language toggles |
| ThemeToggle | Light/dark theme switcher |
| LanguageToggle | RU/EN language switcher |

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome for Android)

## License

MIT

## Contributing

This is an internal template for team use. For suggestions or issues, contact the development team.
