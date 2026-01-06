---
category: Components
title: Divider
subtitle: 分割线
description: 区隔内容的分割线。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*7sMiTbzvaDoAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*KPSEQ74PLg4AAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
group:
  title: 布局
  order: 2
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
| type | 水平还是垂直类型 | Orientation | `horizontal` | - |
| orientation | 水平或垂直类型 | Orientation | `horizontal` | - |
| vertical | 是否垂直，和 orientation 同时配置以 orientation 优先 | boolean | false | - |
| titlePlacement | 分割线标题的位置 | TitlePlacement | `center` | - |
| orientationMargin | 标题和最近 left/right 边框之间的距离，去除了分割线，同时 `titlePlacement` 不能为 `center`。如果传入 `string` 类型的数字且不带单位，默认单位是 px | string \| number | - | - |
| dashed | 是否虚线 | boolean | false | - |
| variant | 分割线是虚线、点线还是实线 | 'dashed' \| 'dotted' \| 'solid' | solid | 5.20.0 |
| size | 间距大小，仅对水平布局有效 | SizeType | - | 5.25.0 |
| plain | 文字是否显示为普通正文样式 | boolean | false | 4.2.0 |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | DividerClassNamesType | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | DividerStylesType | - | - |