// src/lib/i18n/translations.ts
import type { Language } from '$lib/stores/languageStore';

export interface Translation {
  welcome: {
    title: string;
    description: string;
    goals: {
      title: string;
      items: string[];
    };
  };
  buttons: {
    toggleTheme: string;
    toggleLanguage: string;
  };
  common: {
    light: string;
    dark: string;
  };
}

const translations: Record<Language, Translation> = {
  ru: {
    welcome: {
      title: 'Название проекта: Modular Svelte Base',
      description: 'Этот шаблон создан для быстрого старта модульных Svelte-приложений.',
      goals: {
        title: 'Цели и назначение:',
        items: [
          'Модульность и переиспользование компонентов',
          'Ready-to-use темы и локализация',
          'Оптимизирован под мобильные устройства',
          'Интеграция с современным стеком'
        ]
      }
    },
    buttons: {
      toggleTheme: 'Переключить тему',
      toggleLanguage: 'RU / EN'
    },
    common: {
      light: 'Светлая',
      dark: 'Тёмная'
    }
  },
  en: {
    welcome: {
      title: 'Project Name: Modular Svelte Base',
      description: 'This template is designed for quick start of modular Svelte applications.',
      goals: {
        title: 'Goals and Purpose:',
        items: [
          'Modularity and component reusability',
          'Ready-to-use themes and localization',
          'Optimized for mobile devices',
          'Integration with modern stack'
        ]
      }
    },
    buttons: {
      toggleTheme: 'Toggle Theme',
      toggleLanguage: 'RU / EN'
    },
    common: {
      light: 'Light',
      dark: 'Dark'
    }
  }
};

export default translations;
