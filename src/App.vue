<script setup lang="ts"></script>

<template>
    <div class="app">
      <RouterView v-slot="{ Component }">
        <template v-if="Component">
          <KeepAlive>
              <component :is="Component"></component>
          </KeepAlive>
        </template>
      </RouterView>
    </div>
</template>

<style scoped lang="scss"></style>
