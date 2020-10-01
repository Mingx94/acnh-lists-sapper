<script lang="ts">
  export let iconUri: string;
  export let name: string;
  export let price: number;
</script>

<div class="flex">
  <div
    class="max-w-full w-40 h-40 px-4 pt-2 pb-1 mx-auto rounded overflow-hidden shadow-lg text-center bg-white">
    <img
      class="inline"
      src={iconUri}
      height={80}
      width={80}
      alt={name}
      loading="lazy" />
    <h4 class="text-base text-gray-700 font-bold">{name}</h4>
    <p class="text-indigo-900">${price}</p>
  </div>
</div>
