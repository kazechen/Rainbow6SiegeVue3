<script setup>
const props = defineProps({
  modelValue: Boolean,
});
// const prop = defineProps(["title"]);
const emit = defineEmits(["close"]);
const toClose = () => emit("close");
</script>
<template>
  <div class="modal" :style="{ display: props.modelValue ? 'block' : 'none' }">
    <div class="overlay"></div>
    <div class="modal-container" @mouseup.self="() => toClose()">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <slot name="header"></slot>
            </h5>
            <button
              type="button"
              class="btn-close"
              @click="() => toClose()"
            ></button>
          </div>
          <div class="modal-body">
            <slot name="body"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#modal {
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  padding: 12px;
}
.modal-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
