<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
  import dayjs from 'dayjs'

  const props = defineProps<{
    data: Array<any>
  }>()

  const weekData = ['一', '二', '三', '四', '五', '六', '日']
  const formatData = (date: string): string => {
    return dayjs(date).isValid() ? dayjs(date).format('D') : date
  }
</script>

<template>
  <div class="calendar">
    <section v-if="$slots.header" class="calendar-header">
      <slot name="header"></slot>
    </section>
    <section class="calendar-week">
      <div v-for="item in weekData" :key="item" class="calendar-week__item">{{ item }}</div>
    </section>
    <slot name="subTitle"></slot>
    <section class="calendar-body">
      <div v-for="item in data" :key="item" class="calendar-item">
        <div v-if="$slots.top && item" class="calendar-item__top">
          <slot name="top" :date="item"></slot>
        </div>
        <div class="calendar-item__value">
          <slot v-if="$slots.value" name="value" :date="item"></slot>
          <span v-else>{{ formatData(item) }}</span>
        </div>
        <div v-if="$slots.bottom && item" class="calendar-item__bottom">
          <slot name="bottom" :date="item"></slot>
        </div>
      </div>
    </section>
    <section v-if="$slots.footer" class="calendar-footer">
      <slot name="footer"></slot>
    </section>
  </div>
</template>

<style scoped lang="scss">
  * {
    --calendar-base-color: #bd0706;
    --calendar-container-bg-color: #fff0d3;
    --calendar-container-item-bg-color: ;
    --calendar-base-font-size: 14px;
    --calendar-row-gap: 10px;
    --calendar-column-gap: 3px;
    box-sizing: border-box;
    font-size: var(--calendar-base-font-size);
    margin: 0px;
    padding: 0px;
    color: var(--calendar-base-color);
  }

  .calendar {
    width: 100%;
    // margin: 50px;
    padding: 5px 0px;
    background-color: var(--calendar-container-bg-color);

    &-week {
      display: flex;
      gap: var(--calendar-column-gap);
      height: 30px;
      width: 100%;
      margin-bottom: 8px;
      position: relative;
      box-shadow: 0 4px 2px -2px rgba(125, 126, 128, 0.16);

      &__item {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        // background-color: pink;
      }
    }

    &-body {
      width: 100%;
      // min-height: 188px;
      background-color: var(--calendar-container-bg-color);
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows: auto;
      grid-column-gap: var(--calendar-column-gap);
      row-gap: var(--calendar-row-gap);
    }

    &-item {
      // display: flex;
      // flex-direction: column;
      // justify-content: center;
      // align-items: center;
      background-color: var(--calendar-container-item-bg-color);
      height: 100%;

      &__top,
      &__value,
      &__bottom {
        flex: 1;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      &__value {
        font-weight: 600;
      }
    }
  }
</style>
