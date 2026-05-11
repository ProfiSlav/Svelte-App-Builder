<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';

	let { children } = $props();

	// Prevent theme flicker on initial load
	if (browser) {
		const stored = localStorage.getItem('theme-preference');
		const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		
		if (stored === 'dark' || (!stored && systemDark)) {
			document.documentElement.classList.add('dark');
		}
	}
</script>

<div class="min-h-screen bg-gradient-to-br from-gray-50 via-primary-50/30 to-purple-50/20 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300">
	<!-- Decorative background elements -->
	<div class="fixed inset-0 overflow-hidden pointer-events-none">
		<div class="absolute -top-40 -right-40 w-80 h-80 bg-primary-400/20 dark:bg-primary-600/10 rounded-full blur-3xl"></div>
		<div class="absolute -bottom-40 -left-40 w-80 h-80 bg-neon-purple/20 dark:bg-neon-purple/10 rounded-full blur-3xl"></div>
	</div>

	<!-- Main content -->
	<main class="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
		{@render children()}
	</main>
</div>
