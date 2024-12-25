<script setup lang="ts"></script>

<template>
  <div class="home-index">
    <div class="special-border"></div>
  </div>
</template>

<style scoped lang="scss">
.home-index {
  width: 100%;
  height: 100%;
  padding: 40px;
  .special-border {
    width: 20px;
    height:200px;
    border: 1px solid;
    border-image: linear-gradient(207deg,
        rgba(236, 135, 0, 0.1),
        rgba(214, 83, 0, 1),
        rgba(213, 79, 0, 0.07)) 1 1;
  }
}
</style>
