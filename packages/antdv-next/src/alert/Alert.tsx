import { classNames } from '@v-c/util'
import { computed, defineComponent } from 'vue'
import { useConfig } from '../config-provider/context.ts'
import useStyle from './style'

export interface AlertProps {
  /** Type of Alert styles, options:`success`, `info`, `warning`, `error` */
  type?: 'success' | 'info' | 'warning' | 'error'
  /** Whether Alert can be closed */
  // closable?: ClosableType

  /** Content of Alert */
  // message?: React.ReactNode
  /** Additional content of Alert */
  // description?: React.ReactNode
  /** Callback when close Alert */
  // onClose?: React.MouseEventHandler<HTMLButtonElement>
  /** Trigger when animation ending of Alert */
  afterClose?: () => void
  /** Whether to show icon */
  showIcon?: boolean
  /** https://www.w3.org/TR/2014/REC-html5-20141028/dom.html#aria-role-attribute */
  role?: string
  prefixCls?: string
  rootClassName?: string
  banner?: boolean
  // icon?: React.ReactNode
  // closeIcon?: React.ReactNode
  // action?: React.ReactNode
  // onMouseEnter?: React.MouseEventHandler<HTMLDivElement>
  // onMouseLeave?: React.MouseEventHandler<HTMLDivElement>
  // onClick?: React.MouseEventHandler<HTMLDivElement>

  id?: string
}

const alertDefaultProps = {

} as any

const Alert = defineComponent<AlertProps>(
  (props = alertDefaultProps, { slots }) => {
    const configContext = useConfig()
    const prefixCls = computed(() => configContext.value?.getPrefixCls('alert', props.prefixCls))
    const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls.value)
    const alertCls = computed(() => classNames(prefixCls.value, hashId, cssVarCls))
    return () => {
      return wrapCSSVar(
        <div class={alertCls.value}>
          {slots?.default?.()}
        </div>,
      )
    }
  },
  {
    name: 'AAlert',
    inheritAttrs: false,
  },
)
;(Alert as any).install = (app: any) => {
  app.component(Alert.name, Alert)
}
export default Alert
