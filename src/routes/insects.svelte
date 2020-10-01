<script context="module" lang="ts">
  import type { ApiCreature, Creature } from '..';
  import { toCamel } from 'convert-keys';

  export async function preload() {
    const res = await this.fetch(`https://acnhapi.com/v1a/bugs`);
    const rawList = (await res.json()) as ApiCreature[];

    const list = rawList.map<Creature>(toCamel);
    return { list };
  }
</script>

<script lang="ts">
  import CreatureCard from '../components/CreatureCard.svelte';
  import Filters from '../components/Filters.svelte';
  import Sorting from '../components/Sorting.svelte';
  import { getFilters, keys } from '../core/filters';
  import { setContext } from 'svelte';

  export let list: Creature[] = [];
  const { list: filteredList, search } = getFilters(list);
  setContext(keys.insects, { search });
</script>

<svelte:head>
  <title>ACNH Insects List</title>
</svelte:head>

<Filters contextKey={keys.insects} />
<Sorting />

<div class="grid gap-4 p-2 sm:gap-8 grid-cols-auto-120">
  {#each $filteredList as creature (creature.id)}
    <CreatureCard
      name={creature.name.nameTWzh}
      iconUri={creature.iconUri}
      price={creature.price} />
  {/each}
</div>
