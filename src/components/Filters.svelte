<script lang="ts">
  import FilterHemis from './FilterHemis.svelte';
  import FilterMonth from './FilterMonth.svelte';
  import FilterHour from './FilterHour.svelte';
  import { getContext } from 'svelte';
  import { keys } from '../core/filters';

  export let contextKey = keys.fish;

  const { search } = getContext(contextKey) as {
    search: SvelteStore<string>;
  };
</script>

<div class="flex flex-wrap">
  <label for="fish-search" class="w-full px-3 py-3 flex items-center">
    <span class="mr-3">搜尋: </span>
    <div class="inline-block w-64">
      <input
        type="text"
        id="fish-search"
        name="fish-search"
        class="form-input block w-full transition duration-100"
        bind:value={$search} />
    </div>
  </label>
  <FilterHemis />
  <FilterMonth />
  <FilterHour />
</div>
