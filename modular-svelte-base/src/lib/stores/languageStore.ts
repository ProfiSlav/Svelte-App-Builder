// src/lib/stores/languageStore.ts
import { writable } from 'svelte/store';

export type Language = 'ru' | 'en';

function createLanguageStore() {
  const { subscribe, set, update } = writable<Language>('ru');

  return {
    subscribe,
    init: () => {
      if (typeof window !== 'undefined') {
        const stored = localStorage.getItem('language') as Language | null;
        const initialLanguage: Language = stored || 'ru';
        set(initialLanguage);
      }
    },
    toggle: () => {
      update((current) => {
        const newLanguage: Language = current === 'ru' ? 'en' : 'ru';
        if (typeof window !== 'undefined') {
          localStorage.setItem('language', newLanguage);
        }
        return newLanguage;
      });
    },
    set: (language: Language) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', language);
      }
      set(language);
    }
  };
}

export const languageStore = createLanguageStore();
