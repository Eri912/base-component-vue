<script setup lang="ts">
  import { ref, onMounted } from 'vue'


  function findClosestValue(array:Array<number>, target:number) {
    let closestValue = null;
    let minDifference = Infinity;

    for (let i = 0; i < array.length; i++) {
      if (array[i] <= target) {
        const difference = target - array[i];
        if (difference === 0 || difference < minDifference) {
          closestValue = array[i];
          minDifference = difference;
        }
      }
    }

    return closestValue;
  }

  const percent = ref(60)
  const progressText = [{ name: '初', width: 1, money: '0', percent: 10 }, { name: '中', width: 2, money: '1w', percent: 30 }, { name: '良', width: 2, money: '2w', percent: 50 }, { name: '优', width: 2, money: '3w', percent: 70 }, { name: '特', width: 2, money: '4w', percent: 90 }, {name: '', width: 1, money: '', percent: 100}]

  // 添加一个新的类来改变伪元素的样式
  // element.classList.add('new-style');
  onMounted(() => {
    const progressBaseDom = document.querySelector('.nut-progress-outer')
    if (!progressBaseDom) return;
    const progressHeight = window.getComputedStyle(progressBaseDom).height // 获取进度条的高度
    const textDiv = document.createElement('div') //覆盖进度条的盒子
    textDiv.style.cssText = `position: absolute; top: 0; left: 0;display:flex;width: 100%;height: ${progressHeight};`
    progressBaseDom.appendChild(textDiv)
    const activeTextValue = findClosestValue([10, 30, 50, 70, 90], percent.value)
    console.log(activeTextValue)
    progressText.forEach(item => {
      const textInner = textDiv.appendChild(document.createElement('div')) //
      textInner.style.cssText = `display: flex;justify-content: flex-end;flex:${item.width};position: relative`
      const textInnerText = textInner.appendChild(document.createElement('div'))
      textInnerText.style.cssText = `display: flex;align-items: center;height: 100%;color:${item.percent < percent.value ? '#fff' : '#f1ad8b'};`
      if (item.percent === activeTextValue) {
        textInnerText.classList.add('active-inner-text')
      }
      textInnerText.textContent = item.name // 最终承载文字的盒子
      const textMoney = textInner.appendChild(document.createElement('div')) // 下方money
      textMoney.style.cssText = `position: absolute;top: 35px;right: -1px;color:#fe7a32 `
      textMoney.textContent = `${item.money}`
    });
    // 三角 如果直接加 样式会不生效 要放deep中
    const progressInnerDom = document.querySelector('.nut-progress-inner')
    if (!progressInnerDom) return
    progressInnerDom.classList.add('progress-innerdom-triangle')
  })

</script>

<template>
  <nut-progress
      :percentage="percent"
      :show-text="false"
      stroke-color="linear-gradient(90deg, rgba(253, 201, 146) 0%,rgba(255, 93, 41) 100%)"
      stroke-width="25" />
</template>

<style scoped lang="scss">
:deep(.nut-progress-outer) {
  background-color: #ffe9dd;
  color: #fff;
  .nut-progress-inner {
    position: relative;
  }
  .nut-progress-inner::after {
    content: "";
    position: absolute;
    top: -30px; /* 根据需要调整位置 */
    right: 0px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #f5762e; /* 三角形的底边颜色 */
}
.active-inner-text {
  box-sizing:border-box;
  display: flex;
  align-items: center;
  height: 30px !important;
  border-radius: 12px;
  transform: translateY(-2.5px);
  background:#fe472a;
  padding:0px 12px;
  border: 2px solid #fd784d
}
}
</style>
