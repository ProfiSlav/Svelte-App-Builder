<script lang="ts">
	import { languageStore, toggleLanguage } from '$lib/stores/languageStore';
	import { t } from '$lib/i18n';

	let currentLang = $state($derived.by(() => $languageStore));
</script>

<button
	type="button"
	onclick={toggleLanguage}
	class="
		min-h-touch px-4 py-2 rounded-xl
		flex items-center gap-2
		font-medium text-base
		transition-all duration-300 ease-in-out
		bg-white/70 dark:bg-gray-800/70
		backdrop-blur-md
		border border-gray-200/50 dark:border-gray-700/50
		hover:bg-white/90 dark:hover:bg-gray-800/90
		hover:scale-105 hover:shadow-lg
		text-gray-800 dark:text-gray-100
		focus:outline-none focus:ring-2 focus:ring-primary-500/50
	"
	aria-label={$t('buttons.toggleLanguage')}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="w-5 h-5 text-primary-500"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
		/>
	</svg>
	<span class="font-bold">
		{#if $currentLang === 'ru'}
			RU
		{:else}
			EN
		{/if}
	</span>
</button>
