<script lang="ts">
  import { languageStore, type Language } from '$lib/stores/languageStore';
  import { t } from '$lib/i18n/i18n';

  let currentLang: Language;

  languageStore.subscribe((value) => {
    currentLang = value;
  });

  function handleToggle() {
    languageStore.toggle();
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
  aria-label={$t('buttons.toggleLanguage')}
>
  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
  </svg>
  <span>{currentLang === 'ru' ? 'RU' : 'EN'}</span>
</button>
