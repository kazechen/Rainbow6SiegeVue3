<script setup>
import { computed } from "vue";
const props = defineProps(["modelValue", "value"]);
const isChecked = computed(() => props.modelValue == props.value);
</script>
<template>
  <input
    type="radio"
    class="form-check-input"
    :value="value"
    :checked="isChecked"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
