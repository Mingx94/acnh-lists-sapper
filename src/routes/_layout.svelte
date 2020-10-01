<script lang="ts">
  import Header from '../components/Header.svelte';

  export let segment: string;
</script>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

<Header {segment} />

<main class="container mx-auto py-10">
  <slot />
</main>
