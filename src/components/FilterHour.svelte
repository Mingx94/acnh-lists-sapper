<script lang="ts">
  import type { MonthRange, NumRange } from '..';
  import { hour } from '../core/hour';

  const hours = Array.from(Array(24)).map((_, x) => x) as Array<
    NumRange<0, 24>
  >;

  const options = hours.map((v) => ({ text: `${v}`, value: v }));

  function onChange(
    event: FocusEvent & {
      target: EventTarget & HTMLSelectElement;
    }
  ) {
    const value = +event.target.value as MonthRange;
    hour.set(value);
  }
</script>

<!-- svelte-ignore a11y-no-onchange -->
<label class="flex items-center p-3" for="month-select">
  <span class="mr-3">時間:</span>
  <div class="inline-block relative w-64">
    <select
      id="month-select"
      class="form-select block w-full transition duration-100"
      value={$hour}
      on:change={onChange}>
      <option value={-1}>全部</option>
      {#each options as { value: optVal, text } (optVal)}
        <option value={optVal}>{text}</option>
      {/each}
    </select>
  </div>
</label>
