const _SizeTypes = ['default', 'large'] as const

type sizeType = (typeof _SizeTypes)[number]

export interface PushState {
  distance: string | number
}

export interface DrawerResizableConfig {
  onResize?: (size: number) => void
  onResizeStart?: () => void
  onResizeEnd?: () => void
}

export interface DrawerProps {
  size?: sizeType | number
  resizable?: boolean | DrawerResizableConfig
  open?: boolean
}
