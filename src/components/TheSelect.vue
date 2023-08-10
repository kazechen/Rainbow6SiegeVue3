<script setup>
const props = defineProps(["defaultText", "options"]);
const emit = defineEmits(["change"]);
const handleChange = (e) => {
  emit("change", e.target.value);
};
</script>
<template>
  <select
    class="form-select"
    aria-label="Default select example"
    @change="handleChange"
  >
    <option selected disabled>{{ defaultText || "請選擇" }}</option>
    <option v-for="item in options" :value="item.value" :key="item.value">
      {{ item.name }}
    </option>
  </select>
</template>
