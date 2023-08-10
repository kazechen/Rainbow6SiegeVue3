<script setup>
import { getImageUrl } from "../utils/getImageUrl.js";

import { ref, useSlots, computed } from "vue";
const props = defineProps(["titleName", "data", "justifyContent"]);

const uslots = useSlots();
const isUseTitleSlot = computed(() => !!uslots?.title);

const emit = defineEmits(["showModal"]);
const handleModal = (index) => emit("showModal", index);
</script>
<template>
  <div
    class="d-flex justify-content-center align-items-center text-center"
    v-show="isUseTitleSlot"
  >
    <slot name="title"> </slot>
  </div>
  <div
    class="row list"
    :class="justifyContent ? `justify-content-${justifyContent}` : ''"
  >
    <div
      v-for="item in data"
      class="list-item col-6 col-sm-3 col-md-2"
      :key="item.index"
    >
      <a
        class="text-center"
        :data-index="item.index"
        @click="handleModal(item.index)"
      >
        <div>
          <img :src="getImageUrl(`${item.img_url}_icon.png`)" />
        </div>
        <div class="nick-name">{{ item.Nickname }}</div>
      </a>
    </div>
  </div>
</template>
<style scoped lang="scss">
.list-item {
  padding: 0;
  margin-bottom: 12px;
}
.org {
  font-size: 12px;
}
.nick-name {
  margin-top: -6px;
}
.name_zh {
  font-size: 13px;
  margin-top: 6px;
  white-space: nowrap;
  color: gray;
}
a {
  color: #000;
  display: block;
  padding: 6px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    transition: all 0.15s ease-out;
    background: rgba(0, 0, 0, 0.75);
    color: #ffc107;
    border-radius: 4px;
    img {
      scale: 1.1;
    }
  }
  &:focus {
    outline: none;
  }
}
img {
  width: 100%;
}
</style>
