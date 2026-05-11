<script lang="ts">
  import '../app.css';
  import BaseLayout from '$lib/layouts/BaseLayout.svelte';
  import { themeStore } from '$lib/stores/themeStore';
  import { languageStore } from '$lib/stores/languageStore';

  // Initialize stores on mount
  if (typeof window !== 'undefined') {
    themeStore.init();
    languageStore.init();
  }
</script>

<BaseLayout>
  <slot />
</BaseLayout>
