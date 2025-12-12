import type { DrawerProps } from '.'
import type { SemanticClassNamesType, SemanticStylesType } from '../_util/hooks'

export type SemanticName
  = | 'root'
    | 'mask'
    | 'header'
    | 'title'
    | 'extra'
    | 'section'
    | 'body'
    | 'footer'
    | 'wrapper'
    | 'dragger'
    | 'close'

export type DrawerClassNamesType = SemanticClassNamesType<DrawerProps, SemanticName>

export type DrawerStylesType = SemanticStylesType<DrawerProps, SemanticName>

export interface DrawerPanelProps {
  prefixCls: string
  ariaId?: string
}
