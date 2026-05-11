<script lang="ts">
	import { themeStore, toggleTheme } from '$lib/stores/themeStore';
	import { t } from '$lib/i18n';

	let currentTheme = $state($derived.by(() => $themeStore));
</script>

<button
	type="button"
	onclick={toggleTheme}
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
	aria-label={$t('buttons.toggleTheme')}
>
	{#if $currentTheme === 'dark'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="w-5 h-5 text-yellow-400"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
			/>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="w-5 h-5 text-indigo-600 dark:text-indigo-400"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
			/>
		</svg>
	{/if}
	<span class="hidden sm:inline">
		{#if $currentTheme === 'dark'}
			{$t('buttons.lightTheme')}
		{:else}
			{$t('buttons.darkTheme')}
		{/if}
	</span>
</button>
