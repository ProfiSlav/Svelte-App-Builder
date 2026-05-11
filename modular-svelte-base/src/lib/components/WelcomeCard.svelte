<script lang="ts">
  import { fade, slide } from 'svelte/transition';
  import { t } from '$lib/i18n/i18n';

  const goals = [
    { icon: '🧩', key: 'welcome.goals.items.0' },
    { icon: '🎨', key: 'welcome.goals.items.1' },
    { icon: '📱', key: 'welcome.goals.items.2' },
    { icon: '⚡', key: 'welcome.goals.items.3' }
  ];
</script>

<div
  in:fade={{ duration: 400 }}
  class="w-full max-w-2xl mx-auto p-6 md:p-8 rounded-3xl
    bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl
    border border-white/20 dark:border-gray-700/50
    shadow-2xl shadow-blue-500/10 dark:shadow-purple-500/10"
>
  <!-- Header -->
  <div class="text-center mb-8">
    <h1
      in:slide={{ axis: 'y', duration: 300, delay: 100 }}
      class="text-2xl md:text-3xl font-bold mb-3
        bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600
        dark:from-blue-400 dark:via-purple-400 dark:to-pink-400
        bg-clip-text text-transparent"
    >
      {$t('welcome.title')}
    </h1>
    <p
      in:fade={{ duration: 300, delay: 200 }}
      class="text-base md:text-lg text-gray-600 dark:text-gray-300"
    >
      {$t('welcome.description')}
    </p>
  </div>

  <!-- Goals Section -->
  <div
    in:slide={{ axis: 'y', duration: 300, delay: 300 }}
    class="mb-8"
  >
    <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
      {$t('welcome.goals.title')}
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {#each goals as goal, index}
        <div
          in:fade={{ duration: 200, delay: 400 + (index * 50) }}
          class="flex items-center gap-3 p-3 rounded-xl
            bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm
            border border-gray-200/30 dark:border-gray-600/30
            hover:bg-white/70 dark:hover:bg-gray-600/50
            transition-all duration-300 ease-out
            hover:shadow-md hover:scale-[1.02]"
        >
          <span class="text-xl flex-shrink-0">{goal.icon}</span>
          <span class="text-sm text-gray-700 dark:text-gray-200">{$t(goal.key)}</span>
        </div>
      {/each}
    </div>
  </div>

  <!-- Controls -->
  <div
    in:fade={{ duration: 300, delay: 600 }}
    class="flex flex-wrap justify-center gap-3 pt-4 border-t border-gray-200/50 dark:border-gray-700/50"
  >
    <slot name="controls" />
  </div>
</div>
