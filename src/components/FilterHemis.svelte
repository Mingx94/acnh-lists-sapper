<script lang="ts">
  import { hemisphere } from '../core/hemisphere';
</script>

<div class="flex flex-wrap px-3 py-3 items-center">
  <span class="mr-1">南北半球:</span>
  <div class="flex">
    <label for="hemis-north" class="flex items-center mx-2">
      <input
        type="radio"
        class="form-radio transition duration-100"
        id="hemis-north"
        value="north"
        bind:group={$hemisphere} />
      <span class="ml-2">北半球</span>
    </label>
    <label for="hemis-south" class="flex items-center mx-2">
      <input
        type="radio"
        class="form-radio transition duration-100"
        id="hemis-south"
        value="south"
        bind:group={$hemisphere} />
      <span class="ml-2">南半球</span>
    </label>
  </div>
</div>
