export type Language = 'ru' | 'en';

export interface Translation {
	welcome: {
		title: string;
		description: string;
		goals: {
			modularity: string;
			readyToUse: string;
			mobileOptimized: string;
			modernStack: string;
		};
	};
	buttons: {
		toggleTheme: string;
		toggleLanguage: string;
		lightTheme: string;
		darkTheme: string;
	};
}

export const translations: Record<Language, Translation> = {
	en: {
		welcome: {
			title: 'Project Name: Modular Svelte Base',
			description:
				'This template is designed for quick start of modular Svelte applications.',
			goals: {
				modularity: 'Modularity and component reusability',
				readyToUse: 'Ready-to-use themes and localization',
				mobileOptimized: 'Optimized for mobile devices',
				modernStack: 'Integration with modern tech stack'
			}
		},
		buttons: {
			toggleTheme: 'Toggle Theme',
			toggleLanguage: 'Switch Language',
			lightTheme: 'Light',
			darkTheme: 'Dark'
		}
	},
	ru: {
		welcome: {
			title: 'Название проекта: Modular Svelte Base',
			description:
				'Этот шаблон создан для быстрого старта модульных Svelte-приложений.',
			goals: {
				modularity: 'Модульность и переиспользование компонентов',
				readyToUse: 'Ready-to-use темы и локализация',
				mobileOptimized: 'Оптимизирован под мобильные устройства',
				modernStack: 'Интеграция с современным стеком'
			}
		},
		buttons: {
			toggleTheme: 'Переключить тему',
			toggleLanguage: 'Сменить язык',
			lightTheme: 'Светлая',
			darkTheme: 'Тёмная'
		}
	}
};
