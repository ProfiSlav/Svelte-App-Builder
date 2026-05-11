<script lang="ts">
  import { fade, slide } from 'svelte/transition';
  import { t } from '$lib/i18n/i18n';

  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
  }

  export let onThemeToggle: () => void = () => {};
  export let onLanguageToggle: () => void = () => {};
</script>

<div class="relative">
  <button
    type="button"
    onclick={toggleMenu}
    class="md:hidden min-h-touch p-2 rounded-xl transition-all duration-300 ease-out
      bg-white/10 dark:bg-white/5 backdrop-blur-sm
      hover:bg-white/20 dark:hover:bg-white/10
      border border-gray-200/50 dark:border-gray-700/50
      text-gray-700 dark:text-gray-200
      focus:outline-none focus:ring-2 focus:ring-blue-500/50"
    aria-label="Menu"
    aria-expanded={isOpen}
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      {#if isOpen}
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      {:else}
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      {/if}
    </svg>
  </button>

  {#if isOpen}
    <div
      use:slide={{ axis: 'y', duration: 200 }}
      class="absolute right-0 mt-2 w-48 rounded-2xl shadow-lg z-50
        bg-white/90 dark:bg-gray-800/90 backdrop-blur-md
        border border-gray-200/50 dark:border-gray-700/50
        overflow-hidden"
    >
      <div class="p-2 space-y-1">
        <button
          type="button"
          onclick={() => { onThemeToggle(); toggleMenu(); }}
          class="w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-colors
            text-gray-700 dark:text-gray-200
            hover:bg-gray-100 dark:hover:bg-gray-700/50"
        >
          {$t('buttons.toggleTheme')}
        </button>
        <button
          type="button"
          onclick={() => { onLanguageToggle(); toggleMenu(); }}
          class="w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-colors
            text-gray-700 dark:text-gray-200
            hover:bg-gray-100 dark:hover:bg-gray-700/50"
        >
          {$t('buttons.toggleLanguage')}
        </button>
      </div>
    </div>
  {/if}
</div>
