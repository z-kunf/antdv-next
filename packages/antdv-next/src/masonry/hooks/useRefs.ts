import type { Key } from '@v-c/util/dist/type'
import { ref } from 'vue'

export default function useRefs() {
  const refs = ref<Map<Key, HTMLDivElement | null> | null>(null)
  if (refs.value === null) {
    refs.value = new Map()
  }
  const setRef = (key: Key, element: HTMLDivElement | null) => {
    refs.value!.set(key, element)
  }

  const getRef = (key: Key) => refs.value!.get(key)

  return [setRef, getRef] as const
}
