<script lang="ts">
  import { type Snippet } from 'svelte';

  export let children: Snippet;
</script>

<div class="min-h-screen transition-colors duration-300 ease-in-out">
  {@render children()}
</div>
