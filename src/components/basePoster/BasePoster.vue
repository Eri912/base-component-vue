<script setup lang="ts">
import html2canvas from 'html2canvas'
import { ref } from 'vue'


const show = ref(false)
const share = ()=>{
  show.value = true
}

const download = ()=>{

}
</script>

<template>
  <div class="base-poster">
    <Teleport to="#app">
    <nut-popup v-model:visible="show" :style="{ padding: '0' }">
      <div class="poster-box">
        <img style="width: 250px;" src="../../assets/img/poster.png" alt="">
        <nut-button type="primary" @click="download">点击下载</nut-button>
      </div>
    </nut-popup>
  </Teleport>
  <nut-button type="primary" @click="share">点击分享</nut-button>
  </div>
</template>

<style scoped lang="scss">
.base-poster {
  .poster-box {
    width: 300px;
    height: 400px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
