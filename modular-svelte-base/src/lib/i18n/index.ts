import { derived } from 'svelte/store';
import { languageStore, type Language } from '$lib/stores/languageStore';
import { translations, type Translation } from './translations';

export const t = derived(languageStore, ($lang) => {
	return (key: keyof Translation | string): string => {
		const keys = key.split('.');
		let value: unknown = translations[$lang];
		
		for (const k of keys) {
			if (value && typeof value === 'object' && k in value) {
				value = (value as Record<string, unknown>)[k];
			} else {
				return key;
			}
		}
		
		return String(value);
	};
});

export type { Language, Translation };
export { translations };
