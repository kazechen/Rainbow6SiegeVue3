<script setup></script>
<template>
  <!-- 
    style class: 
    btn-primary btn-secondary btn-success btn-danger btn-warning btn-info btn-light btn-dark btn-link
   -->
  <button
    :type="$attrs.type || 'button'"
    :class="['btn', { 'btn-primary': !$attrs.class }]"
  >
    <slot></slot>
  </button>
</template>
<style scoped>
.btn {
  &:focus {
    box-shadow: none;
  }
}
</style>
