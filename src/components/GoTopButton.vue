<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const debounce = (fn, wait) => {
  let timeout = null;
  return () => {
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(fn, wait);
  };
};

const link = ref(null);
const handleScroll = (e) => {
  if (window.scrollY > 80) {
    link.value.classList.add("show");
  } else {
    link.value.classList.remove("show");
  }
};

const scrollToTop = () => {
  window.scroll(0, 0);
};

onMounted(() => {
  window.addEventListener("scroll", debounce(handleScroll, 100));
});
onUnmounted(() => {
  window.removeEventListener("scroll", debounce(handleScroll, 100));
});
</script>
<template>
  <div class="go-top">
    <a title="GO TOP" ref="link" @click="scrollToTop">
      <img src="../assets/images/icon_top.png" />
    </a>
  </div>
</template>
<style scoped lang="scss">
.go-top a {
  z-index: 100;
  position: fixed;
  bottom: 12px;
  right: 12px;
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
  &.show {
    pointer-events: auto;
    opacity: 1;
  }
}
</style>
