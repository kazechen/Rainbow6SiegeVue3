<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="symbolId" rel="external nofollow" />
  </svg>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps(["name"]);
const symbolId = computed(() => `#icon-${props.name}`);
</script>

<style scoped lang="scss">
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
