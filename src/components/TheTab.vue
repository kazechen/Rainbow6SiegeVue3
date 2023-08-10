<!-- 
tab-content 要顯示的內容請使用具名插槽，
插槽名稱為 tab-content-index，index 為數字從 0 開始，例：
<template v-slot:tab-content-0></template> 
-->
<script setup>
import { ref } from "vue";

const props = defineProps(["tabTitle"]);
const tabCurrentIndex = ref(0);
</script>
<template>
  <div class="nav nav-tabs" role="tablist">
    <li
      class="nav-item"
      v-for="(item, index) in props.tabTitle"
      :key="`tab-${index}`"
      role="presentation"
    >
      <button
        class="nav-link"
        @click="tabCurrentIndex = index"
        :class="{ active: tabCurrentIndex === index }"
      >
        {{ item }}
      </button>
    </li>
  </div>
  <div class="tab-content">
    <div
      v-for=",index in props.tabTitle"
      :key="`tabContent-${index}`"
      class="tab-pane fade"
      :class="{ 'show active': tabCurrentIndex === index }"
      role="tabpanel"
      aria-labelledby="disabled-tab"
      tabindex="0"
    >
      <slot :name="`tab-content-${index}`"></slot>
    </div>
  </div>
</template>
<style scoped>
.nav-link.active {
  border-top: 1px solid #f8cf4e;
}
.tab-pane {
  padding: 15px;
}
</style>
