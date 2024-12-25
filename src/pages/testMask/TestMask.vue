<script setup lang="ts"></script>

<template>
   <div style="display: flex;">
    <div class="test-mask">哈哈哈哈</div>
    <!-- 电影票样式 -->
     <div class="ticket">
      <div class="left"></div>
      <div class="right"></div>
     </div>
   </div>
</template>

<style scoped lang="scss">
.test-mask {
  width: 300px;
  height: 200px;
  background-color: pink;
  margin: 30px;
  // 黑色显示 白色隐藏
  // background-image: linear-gradient(45deg,black 50%, transparent 50%,transparent);
  mask-image: linear-gradient(45deg,black 50%, transparent 50%,transparent);
}
.ticket {
  display: flex;
  width: 200px;
  height: 60px;
  margin: 30px;
  .left, .right {
    flex: 1;
    background-color: pink;
  }
  .left {
    // background-image: radial-gradient(circle at right top, transparent 10%,black 10%,black);
    // 多层堆叠
    mask: radial-gradient(circle at right bottom, transparent 5%,black 5%,black);
  }
  .right {
    mask-image: radial-gradient(circle at left bottom, transparent 5%,black 5%,black);
  }
}
</style>
