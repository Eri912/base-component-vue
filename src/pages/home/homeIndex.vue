<script setup lang="ts">
import TestMask from '../testMask/TestMask.vue'
import Calendar from '../calendar/Calendar.vue'
import dayjs from 'dayjs'
import { Lunar } from 'lunar-typescript'

const computeAllDateOfMonth = (date: string): Array<any> => {
  const allDate: any = []
  const daysInMonth = dayjs(date).daysInMonth()
  for (let i = 0; i < daysInMonth; i++) {
    allDate.push(dayjs(date).add(i, 'day').format('YYYY-MM-DD'))
  }
  return allDate
}
const frontEmptyDate = ['', '',]
const footerEmptyDate = ['', '']
const calendarData = [...frontEmptyDate, ...computeAllDateOfMonth('2025-01'), ...footerEmptyDate]

const LUNAR_AS_DATE_FESTIVALS = ['除夕', '春节']
function getDateInChinese(date: string) {
  if (!date) return ''
  console.log(date)
  const _d = dayjs(date, 'YYYY-MM-DD')
  if (!_d.isValid()) return ''
  const d = Lunar.fromDate(_d.toDate())
  const festivals = d.getFestivals()
  const festival = festivals.find(
    (item) => !!LUNAR_AS_DATE_FESTIVALS.find((key) => item.includes(key))
  )
  if (festival) return LUNAR_AS_DATE_FESTIVALS.find((item) => festival.includes(item))
  return d.getDayInChinese()
}
</script>

<template>
  <div class="home-index">
    <TestMask></TestMask>
    <Calendar :data="calendarData">
      <template #bottom="{ date }">
        <span style="font-size: 10px;">
          {{ getDateInChinese(date) }}
        </span>
      </template>
    </Calendar>

    <nut-button type="primary" @click="$router.push('/base-poster')">poster</nut-button>
  </div>
</template>

<style scoped lang="scss">
.home-index {
  height: 100vh;
  width: 100vw;
}
</style>
