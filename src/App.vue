<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import GoTopButton from "./components/GoTopButton.vue";
</script>

<template>
  <TheHeader />
  <router-view></router-view>
  <TheFooter />
  <GoTopButton />
</template>
