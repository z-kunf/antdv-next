---
category: Components
group: 数据录入
title: InputNumber
subtitle: 数字输入框
description: 通过鼠标或键盘，输入范围内的数值。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*JvWbSYhuNlIAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*1uH-R5kLAMIAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
---

<DocHeading></DocHeading>

## 何时使用 {#when-to-use}

## 示例 {#examples}

<demo-group>
</demo-group>

## API

### 属性 {#property}

通用属性参考：[通用属性](/docs/vue/common-props)

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| size | 输入框大小 | SizeType | - | - |
| status | 设置校验状态 | InputStatus | - | - |
| disabled | 禁用 | boolean | false | - |
| addonBefore | 带标签的 input，设置前置标签，请使用 Space.Compact 替换 | VueNode | - | 4.17.0 |
| addonAfter | 带标签的 input，设置后置标签，请使用 Space.Compact 替换 | VueNode | - | 4.17.0 |
| prefix | 带有前缀图标的 input | VueNode | - | - |
| suffix | 带有后缀图标的 input | VueNode | - | 5.20.0 |
| bordered | Deprecated. | boolean | - | - |
| variant | 形态变体 | Variant | `outlined` | 5.13.0 \| `underlined`: 5.24.0 |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | InputNumberClassNamesType | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | InputNumberStylesType | - | - |
| controls | 是否显示增减按钮，也可设置自定义箭头图标 | boolean \| { upIcon?: VueNode, downIcon?: VueNode } | - | - |
| type | - | 'number' \| 'text' | - | - |

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| change | 变化回调 | (value: any) => void | - |
| update:value | - | (value: any) => void | - |
| input | - | (text: string) => void | - |
| pressEnter | 按下回车的回调 | (e: KeyboardEvent) => void | - |
| step | 每次改变步数，可以为小数 | (value: any, info: InputNumberStepContext) => void | - |
| mousedown | - | (e: MouseEvent) => void | - |
| click | - | (e: MouseEvent) => void | - |
| mouseup | - | (e: MouseEvent) => void | - |
| mouseleave | - | (e: MouseEvent) => void | - |
| mousemove | - | (e: MouseEvent) => void | - |
| mouseenter | - | (e: MouseEvent) => void | - |
| mouseout | - | (e: MouseEvent) => void | - |
| focus | - | (e: FocusEvent) => void | - |
| blur | - | (e: FocusEvent) => void | - |
| keydown | - | (e: KeyboardEvent) => void | - |
| keyup | - | (e: KeyboardEvent) => void | - |
| compositionstart | - | (e: CompositionEvent) => void | - |
| compositionend | - | (e: CompositionEvent) => void | - |
| beforeinput | - | (e: InputEvent) => void | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| prefix | 带有前缀图标的 input | () => any | - |
| suffix | 带有后缀图标的 input | () => any | 5.20.0 |
| addonBefore | 带标签的 input，设置前置标签，请使用 Space.Compact 替换 | () => any | 4.17.0 |
| addonAfter | 带标签的 input，设置后置标签，请使用 Space.Compact 替换 | () => any | 4.17.0 |