import type { FloatButtonProps } from './FloatButton'
import type { FloatButtonGroupProps } from './FloatButtonGroup'
import { clsx } from '@v-c/util'
import { omit } from 'es-toolkit'
import { computed, defineComponent } from 'vue'
import { pureAttrs } from '../_util/hooks'
import { useConfig } from '../config-provider/context'
import BackTop from './BackTop'
import FloatButton, { floatButtonPrefixCls } from './FloatButton'
import FloatButtonGroup from './FloatButtonGroup'

export interface PureFloatButtonProps extends Omit<FloatButtonProps, 'target'> {
  backTop?: boolean
}

export interface PurePanelProps
  extends Omit<PureFloatButtonProps, 'classes' | 'styles'>,
  Omit<FloatButtonGroupProps, 'classes' | 'styles'> {
  items?: PureFloatButtonProps[]
  classes?: FloatButtonProps['classes'] | FloatButtonGroupProps['classes']
  styles?: FloatButtonProps['styles'] | FloatButtonGroupProps['styles']
}

const PureFloatButton = defineComponent<PureFloatButtonProps>(
  (props, { slots, attrs }) => {
    return () => {
      if (props.backTop) {
        return (
          <BackTop
            {...omit(props, ['backTop'])}
            visibilityHeight={0}
            v-slots={slots}
            {...attrs}
          />
        )
      }
      return (
        <FloatButton
          {...omit(props, ['backTop'])}
          v-slots={slots}
          {...attrs}
        />
      )
    }
  },
  {
    name: 'AFloatButtonPure',
    inheritAttrs: false,
  },
)

const PurePanel = defineComponent<PurePanelProps>(
  (props, { attrs, slots }) => {
    const config = useConfig()
    const prefixCls = computed(() => config.value?.getPrefixCls?.(floatButtonPrefixCls, props.prefixCls))
    const pureCls = computed(() => `${prefixCls.value}-pure`)

    const renderItems = () => (
      props.items ?? []
    ).map((item, index) => (
      <PureFloatButton
        key={index}
        {...item}
      />
    ))

    return () => {
      if (props.items && props.items.length) {
        return (
          <FloatButtonGroup
            {...omit(props, ['items', 'classes', 'styles'])}
            class={clsx((attrs as any).class, pureCls.value)}
            classes={props.classes as FloatButtonGroupProps['classes']}
            styles={props.styles as FloatButtonGroupProps['styles']}
            v-slots={{ default: () => renderItems() }}
            {...pureAttrs(attrs)}
          />
        )
      }

      return (
        <PureFloatButton
          {...omit(props, ['items'])}
          class={clsx((attrs as any).class, pureCls.value)}
          classes={props.classes as FloatButtonProps['classes']}
          styles={props.styles as FloatButtonProps['styles']}
          v-slots={slots}
          {...pureAttrs(attrs)}
        />
      )
    }
  },
  {
    name: 'AFloatButtonPurePanel',
    inheritAttrs: false,
  },
)

export default PurePanel
