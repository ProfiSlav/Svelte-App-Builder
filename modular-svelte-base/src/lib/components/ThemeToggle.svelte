<script lang="ts">
  import { themeStore, type Theme } from '$lib/stores/themeStore';
  import { t } from '$lib/i18n/i18n';

  let currentTheme: Theme;

  themeStore.subscribe((value) => {
    currentTheme = value;
  });

  function handleToggle() {
    themeStore.toggle();
  }
</script>

<button
  type="button"
  onclick={handleToggle}
  class="min-h-touch inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ease-out
    bg-white/10 dark:bg-white/5 backdrop-blur-sm
    hover:bg-white/20 dark:hover:bg-white/10
    border border-gray-200/50 dark:border-gray-700/50
    text-gray-700 dark:text-gray-200
    shadow-sm hover:shadow-md
    focus:outline-none focus:ring-2 focus:ring-blue-500/50"
  aria-label={$t('buttons.toggleTheme')}
>
  {#if currentTheme === 'light'}
    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  {:else}
    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  {/if}
  <span class="hidden sm:inline">{$t('buttons.toggleTheme')}</span>
</button>
