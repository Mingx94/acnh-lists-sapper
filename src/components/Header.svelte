<script lang="ts">
  export let segment: string;

  let isMenuOpened: boolean = false;

  function toggleMenu() {
    isMenuOpened = !isMenuOpened;
  }
</script>

<header
  class="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
  <div class="flex items-center justify-between px-4 py-3 sm:p-0">
    <div><img class="h-8" src="/images/Nook_Inc.png" alt="Nook Inc." /></div>
    <div class="sm:hidden">
      <button
        on:click={toggleMenu}
        type="button"
        class="block text-gray-300 hover:text-white focus:text-white focus:outline-none">
        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
          {#if isMenuOpened}
            <path
              fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
          {:else}
            <path
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
          {/if}
        </svg>
      </button>
    </div>
  </div>
  <div
    class="px-2 pt-2 pb-4 sm:flex sm:p-0"
    class:block={isMenuOpened}
    class:hidden={!isMenuOpened}>
    <a
      href="."
      class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
      class:underline={segment === undefined}>
      魚類
    </a>
    <a
      href="/insects"
      class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
      class:underline={segment === 'insects'}>
      昆蟲
    </a>
  </div>
</header>
