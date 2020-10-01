<script lang="ts">
  import type { MonthRange, NumRange } from '..';
  import { month } from '../core/month';

  const months = Array.from(Array(12)).map((_, x) => x + 1) as Array<
    NumRange<1, 13>
  >;

  const options = months.map((v) => ({ text: `${v}月`, value: v }));

  function onChange(
    event: FocusEvent & {
      target: EventTarget & HTMLSelectElement;
    }
  ) {
    const value = +event.target.value as MonthRange;
    month.set(value);
  }
</script>

<!-- svelte-ignore a11y-no-onchange -->
<label class="flex items-center p-3" for="month-select">
  <span class="mr-3">月份:</span>
  <div class="inline-block relative w-64">
    <select
      id="month-select"
      class="form-select block w-full transition duration-100"
      value={$month}
      on:change={onChange}>
      <option value={-1}>全部</option>
      {#each options as { value: optVal, text } (optVal)}
        <option value={optVal}>{text}</option>
      {/each}
    </select>
  </div>
</label>
