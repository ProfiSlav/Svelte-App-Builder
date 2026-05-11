<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { t } from '$lib/i18n';
	import ThemeToggle from './ThemeToggle.svelte';
	import LanguageToggle from './LanguageToggle.svelte';

	const goals = $derived([
		{ icon: '🧩', key: 'welcome.goals.modularity' },
		{ icon: '⚡', key: 'welcome.goals.readyToUse' },
		{ icon: '📱', key: 'welcome.goals.mobileOptimized' },
		{ icon: '🚀', key: 'welcome.goals.modernStack' }
	]);
</script>

<div
	class="
		w-full max-w-4xl mx-auto
		p-6 sm:p-8 md:p-10
		rounded-3xl
		bg-white/60 dark:bg-gray-900/60
		backdrop-blur-xl
		border border-white/40 dark:border-gray-700/40
		shadow-2xl
		hover:shadow-primary-500/20 dark:hover:shadow-primary-500/10
		transition-all duration-500
	"
	in:scale={{ duration: 400, easing: (t) => t * t }}
	in:fade={{ duration: 300 }}
>
	<!-- Header -->
	<header class="mb-8 text-center">
		<h1
			class="
				text-2xl sm:text-3xl lg:text-4xl font-bold
				bg-gradient-to-r from-primary-500 via-neon-purple to-neon-pink
				bg-clip-text text-transparent
				mb-4
			"
		>
			{$t('welcome.title')}
		</h1>
		<p
			class="
				text-base sm:text-lg
				text-gray-600 dark:text-gray-300
				max-w-2xl mx-auto
			"
		>
			{$t('welcome.description')}
		</p>
	</header>

	<!-- Goals Grid -->
	<section class="mb-8">
		<div
			class="
				grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4
			"
		>
			{#each goals as goal}
				<div
					class="
						p-4 sm:p-5 rounded-2xl
						bg-gradient-to-br from-white/70 to-white/40
						dark:from-gray-800/70 dark:to-gray-800/40
						backdrop-blur-md
						border border-white/30 dark:border-gray-700/30
						hover:scale-105 hover:shadow-lg
						transition-all duration-300
						flex flex-col items-center text-center
						min-h-touch
					"
				>
					<span class="text-3xl sm:text-4xl mb-3">{goal.icon}</span>
					<p class="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-200">
						{$t(goal.key)}
					</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Controls -->
	<footer
		class="
			flex flex-wrap justify-center gap-3 sm:gap-4
			pt-6 border-t border-gray-200/50 dark:border-gray-700/50
		"
	>
		<ThemeToggle />
		<LanguageToggle />
	</footer>
</div>
