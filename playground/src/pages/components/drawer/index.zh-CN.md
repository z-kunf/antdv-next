---
group: 反馈
category: Components
title: Drawer
subtitle: 抽屉
description: 屏幕边缘滑出的浮层面板。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*BD2JSKm8I-kAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*r29rQ51bNdwAAAAAAAAAAAAADrJ8AQ/original
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
| size | 预设抽屉宽度（或高度），default `378px` 和 large `736px`，或自定义数字 | sizeType \| number | 'default' | 4.17.0 |
| resizable | 是否启用拖拽改变尺寸 | boolean \| DrawerResizableConfig | - | boolean: 6.1.0 |
| rootClass | - | string | - | - |
| open | Drawer 是否可见 | boolean | - | - |
| afterOpenChange | 切换抽屉时动画结束后的回调 | (open: boolean) => void | - | - |
| destroyOnClose | 关闭时销毁 Drawer 里的子元素 | boolean | false | - |
| destroyOnHidden | 关闭时销毁 Drawer 里的子元素 | boolean | false | 5.25.0 |
| mask | 遮罩效果 | MaskType | true | - |

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| update:open | - | (open: boolean) => void | - |
| afterOpenChange | 切换抽屉时动画结束后的回调 | (open: boolean) => void | - |
| close | 点击遮罩层或左上角叉或取消按钮的回调 | (e: MouseEvent \| KeyboardEvent) => void | - |
| keydown | - | (e: KeyboardEvent) => void | - |
| keyup | - | (e: KeyboardEvent) => void | - |
| mouseenter | - | (e: MouseEvent) => void | - |
| mouseleave | - | (e: MouseEvent) => void | - |
| mouseover | - | (e: MouseEvent) => void | - |
| click | - | (e: MouseEvent) => void | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| title | 标题 | () => any | - |
| footer | 抽屉的页脚 | () => any | - |
| extra | 抽屉右上角的操作区域 | () => any | 4.17.0 |
| closeIcon | - | () => any | - |