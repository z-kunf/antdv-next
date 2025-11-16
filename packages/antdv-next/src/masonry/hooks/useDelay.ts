import raf from '@v-c/util/dist/raf'
import { onUnmounted, shallowRef } from 'vue'

export default function useDelay(callback: VoidFunction) {
  const idRef = shallowRef(0)
  const clearRaf = () => {
    raf.cancel(idRef.value)
  }
  onUnmounted(() => {
    clearRaf()
  })
  return () => {
    clearRaf()
    idRef.value = raf(callback)
  }
}
