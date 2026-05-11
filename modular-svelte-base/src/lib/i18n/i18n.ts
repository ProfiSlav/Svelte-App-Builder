// src/lib/i18n/i18n.ts
import { derived } from 'svelte/store';
import { languageStore, type Language } from '$lib/stores/languageStore';
import translations from './translations';

export function getTranslation(lang: Language) {
  return translations[lang];
}

export const t = derived(languageStore, ($lang) => {
  return (key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations[$lang];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };
});

export { languageStore };
export type { Language };
