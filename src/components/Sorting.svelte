<script lang="ts">
  import { dirPrice, toggleDir } from '../core/dirPrice';
</script>

<div class="flex flex-wrap items-center p-3">
  <span class="mr-2">排序:</span>
  <button
    class="flex items-center h-10 text-sm bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow transition duration-150"
    on:click={toggleDir}>
    <span class="mr-1">價格</span>
    {#if $dirPrice === 'desc'}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="h-4 w-4">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 17l-4 4m0 0l-4-4m4 4V3" />
      </svg>
    {:else}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="h-4 w-4">
        <path
          stroke-inecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 7l4-4m0 0l4 4m-4-4v18" />
      </svg>
    {/if}
  </button>
</div>
