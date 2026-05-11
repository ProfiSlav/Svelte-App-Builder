// src/lib/stores/themeStore.ts
import { writable } from 'svelte/store';

export type Theme = 'light' | 'dark';

function createThemeStore() {
  const { subscribe, set, update } = writable<Theme>('light');

  return {
    subscribe,
    init: () => {
      if (typeof window !== 'undefined') {
        const stored = localStorage.getItem('theme') as Theme | null;
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme: Theme = stored || (prefersDark ? 'dark' : 'light');
        set(initialTheme);
        document.documentElement.classList.toggle('dark', initialTheme === 'dark');
      }
    },
    toggle: () => {
      update((current) => {
        const newTheme: Theme = current === 'light' ? 'dark' : 'light';
        if (typeof window !== 'undefined') {
          localStorage.setItem('theme', newTheme);
          document.documentElement.classList.toggle('dark', newTheme === 'dark');
        }
        return newTheme;
      });
    },
    set: (theme: Theme) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', theme);
        document.documentElement.classList.toggle('dark', theme === 'dark');
      }
      set(theme);
    }
  };
}

export const themeStore = createThemeStore();
