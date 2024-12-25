<script setup lang="ts">
import BaseDialog from "../../components/baseDialog/index";

</script>

<template>
    <BaseDialog title="baseDialog" width="500px">
      <template #trigger="{ open }">
        <el-button @click="open()" type="primary">点我试试</el-button>
      </template>
      <template #default="{ close }">
        <div>我是内容我是内容我是内容我是内容我是内容我是内容</div>
        <el-button @click="close()" type="primary">关闭</el-button>
      </template>
    </BaseDialog>
</template>

<style scoped lang="scss"></style>
