<script lang="ts">
  import { fade } from 'svelte/transition';
  import WelcomeCard from '$lib/components/WelcomeCard.svelte';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import LanguageToggle from '$lib/components/LanguageToggle.svelte';
  import MobileMenu from '$lib/components/MobileMenu.svelte';
  import { themeStore } from '$lib/stores/themeStore';
  import { languageStore } from '$lib/stores/languageStore';
  import { t } from '$lib/i18n/i18n';
</script>

<svelte:head>
  <title>Modular Svelte Base</title>
  <meta name="description" content="A modular Svelte application template with themes and i18n" />
</svelte:head>

<div
  in:fade={{ duration: 500 }}
  class="min-h-screen relative overflow-hidden
    bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50
    dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900"
>
  <!-- Background decoration -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div class="absolute -top-40 -right-40 w-80 h-80 bg-purple-300/30 dark:bg-purple-600/20 rounded-full blur-3xl"></div>
    <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300/30 dark:bg-blue-600/20 rounded-full blur-3xl"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300/20 dark:bg-pink-600/10 rounded-full blur-3xl"></div>
  </div>

  <!-- Main content -->
  <div class="relative z-10 min-h-screen flex flex-col">
    <!-- Header -->
    <header class="p-4 md:p-6">
      <div class="max-w-6xl mx-auto flex items-center justify-between">
        <h1 class="text-lg md:text-xl font-bold text-gray-800 dark:text-white">
          Modular Svelte Base
        </h1>
        
        <!-- Desktop controls -->
        <div class="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <LanguageToggle />
        </div>
        
        <!-- Mobile menu -->
        <MobileMenu
          onThemeToggle={() => themeStore.toggle()}
          onLanguageToggle={() => languageStore.toggle()}
        />
      </div>
    </header>

    <!-- Main content area -->
    <main class="flex-1 flex items-center justify-center p-4 md:p-6">
      <WelcomeCard>
        <div slot="controls" class="flex flex-wrap justify-center gap-3">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </WelcomeCard>
    </main>

    <!-- Footer -->
    <footer class="p-4 md:p-6 text-center">
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Built with SvelteKit + TailwindCSS
      </p>
    </footer>
  </div>
</div>
