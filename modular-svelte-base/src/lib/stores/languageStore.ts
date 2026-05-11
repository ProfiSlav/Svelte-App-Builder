import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Language = 'ru' | 'en';

const STORAGE_KEY = 'language-preference';

function getInitialLanguage(): Language {
	if (!browser) return 'en';
	
	const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
	if (stored && (stored === 'ru' || stored === 'en')) {
		return stored;
	}
	
	// Try to detect from browser
	const browserLang = navigator.language.toLowerCase();
	if (browserLang.startsWith('ru')) {
		return 'ru';
	}
	
	return 'en';
}

const initialLanguage = getInitialLanguage();

export const languageStore = writable<Language>(initialLanguage);

languageStore.subscribe((lang) => {
	if (browser) {
		localStorage.setItem(STORAGE_KEY, lang);
	}
});

export function toggleLanguage(): void {
	languageStore.update((current) => (current === 'ru' ? 'en' : 'ru'));
}
