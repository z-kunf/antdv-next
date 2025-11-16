import type { CSSProperties } from 'vue'
import type { VueNode } from '../_util/type.ts'
import type { MasonryProps } from './Masonry.tsx'
import { defineComponent } from 'vue'

export interface MasonryItemType {
  key: VueNode
  column?: number
  height?: number
  children?: VueNode
  data: any
}

interface MasonryItemProps extends Pick<MasonryProps, 'itemRender'> {
  prefixCls: string
  item: MasonryItemType
  style: CSSProperties
  class?: string
  index: number
  column: number
  onResize: VoidFunction | null
}

const MasonryItem = defineComponent<MasonryItemProps>(
  () => {
    return () => {
      return null
    }
  },
  {
    name: 'AMasonryItem',
    inheritAttrs: false,
  },
)

export default MasonryItem
