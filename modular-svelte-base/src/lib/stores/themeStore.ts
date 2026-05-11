import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme-preference';

function getInitialTheme(): Theme {
	if (!browser) return 'light';
	
	const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
	if (stored && (stored === 'light' || stored === 'dark')) {
		return stored;
	}
	
	// Check system preference
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		return 'dark';
	}
	
	return 'light';
}

function applyTheme(theme: Theme): void {
	if (!browser) return;
	
	const html = document.documentElement;
	if (theme === 'dark') {
		html.classList.add('dark');
	} else {
		html.classList.remove('dark');
	}
	localStorage.setItem(STORAGE_KEY, theme);
}

const initialTheme = getInitialTheme();
applyTheme(initialTheme);

export const themeStore = writable<Theme>(initialTheme);

themeStore.subscribe((theme) => {
	applyTheme(theme);
});

export function toggleTheme(): void {
	themeStore.update((current) => (current === 'light' ? 'dark' : 'light'));
}
