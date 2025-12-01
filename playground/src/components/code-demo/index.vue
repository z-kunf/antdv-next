<script setup lang="ts">
import demos from 'virtual:demos'
import { computed, markRaw } from 'vue'

defineOptions({
  name: 'Demo',
})
const { src } = defineProps<{
  src: string
}>()
const demo = computed(() => demos[src])
</script>

<template>
  <div>
    <component :is="markRaw(demo.component)" v-if="demo.component" :key="demo.source" />
    <slot />
    <div v-html="demo.html" />
  </div>
</template>
