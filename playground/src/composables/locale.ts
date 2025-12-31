import { useStorage } from '@vueuse/core'

export const localeStore = useStorage<'zh-CN' | 'en-US'>('locale', 'zh-CN')
