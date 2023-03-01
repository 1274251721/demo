<template>
  <div>
    <a-input v-model:value="value" placeholder="email"  />
    <a-input-number v-model:value="value1" placeholder="phone" :controls="false" size="100px" />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
let value = ref(0);
let value1 = ref(0);
let time = null;
let time1 = null;
watch(value, () => {
  if (time !== null) {
    clearTimeout(time);
  }
  time = setTimeout(() => {
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) ? "" : console.log("输入错误");
  }, 500);
});
watch(value1, () => {
  if (time1 !== null) {
    clearTimeout(time1);
  }
  time1 = setTimeout(() => {
    /^(186|135)\d{8}$/.test(value1) ? "" : console.log("输入错误");
  }, 500);
});
</script>

<style scoped></style>
