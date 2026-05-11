<script lang="ts">
	import { fade, slide } from 'svelte/transition';

	export let isOpen = $state(false);
	export let onClose: () => void = () => {};

	const menuItems = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/about' },
		{ label: 'Contact', href: '/contact' }
	];
</script>

<button
	type="button"
	onclick={() => (isOpen = !isOpen)}
	class="
		md:hidden min-h-touch p-2 rounded-xl
		flex items-center justify-center
		text-gray-800 dark:text-gray-100
		hover:bg-gray-100 dark:hover:bg-gray-800
		transition-colors duration-200
	"
	aria-label="Toggle menu"
	aria-expanded={isOpen}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="w-6 h-6"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		{#if isOpen}
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M6 18L18 6M6 6l12 12"
			/>
		{:else}
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 6h16M4 12h16M4 18h16"
			/>
		{/if}
	</svg>
</button>

{#if isOpen}
	<div
		use:slide={{ y: -20, duration: 200 }}
		use:fade={{ duration: 150 }}
		class="
			md:hidden absolute top-full left-0 right-0
			bg-white/95 dark:bg-gray-900/95
			backdrop-blur-lg
			border-b border-gray-200 dark:border-gray-700
			shadow-xl
			z-50
		"
	>
		<nav class="p-4 space-y-2">
			{#each menuItems as item}
				<a
					href={item.href}
					onclick={onClose}
					class="
						block min-h-touch px-4 py-3 rounded-xl
						text-gray-800 dark:text-gray-100
						hover:bg-primary-50 dark:hover:bg-primary-900/30
						hover:text-primary-600 dark:hover:text-primary-400
						transition-all duration-200
						font-medium
					"
				>
					{item.label}
				</a>
			{/each}
		</nav>
	</div>
{/if}
