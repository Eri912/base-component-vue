<!--
主要是插槽，透传的用法
-->
<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  inheritAttrs: false
})


const dialogVisible = ref(false)
const open = () => {
  dialogVisible.value = true
}

const close = () => {
  dialogVisible.value = false
}

defineExpose({
    open, close
  })
</script>

<template>
  <slot name="trigger" :open="open"></slot>
  <el-dialog
    v-model="dialogVisible"
    align-center
    destroy-on-close
    draggable
    v-bind="$attrs"
  >
    <slot :close="close"></slot>
    <slot name="footer" :close="close"></slot>
  </el-dialog>
</template>

<style scoped lang="scss"></style>
