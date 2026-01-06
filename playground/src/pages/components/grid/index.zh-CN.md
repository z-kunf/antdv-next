---
category: Components
group: 布局
title: Grid
subtitle: 栅格
description: 24 栅格系统。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*mfJeS6cqZrEAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*DLUwQ4B2_zQAAAAAAAAAAAAADrJ8AQ/original
---

<DocHeading></DocHeading>

## 何时使用 {#when-to-use}

## 示例 {#examples}

<demo-group>
</demo-group>

## API

### 属性 {#property}

通用属性参考：[通用属性](/docs/vue/common-props)

#### Col

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| flex | - | FlexType | - | - |
| span | - | ColSpanType | - | - |
| order | - | ColSpanType | - | - |
| offset | - | ColSpanType | - | - |
| push | - | ColSpanType | - | - |
| pull | - | ColSpanType | - | - |
| prefixCls | - | string | - | - |
| xs | - | ColSpanType \| ColSize | - | - |
| sm | - | ColSpanType \| ColSize | - | - |
| md | - | ColSpanType \| ColSize | - | - |
| lg | - | ColSpanType \| ColSize | - | - |
| xl | - | ColSpanType \| ColSize | - | - |
| xxl | - | ColSpanType \| ColSize | - | - |

#### Row

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| gutter | 栅格间隔，可以写成[字符串CSS单位](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Values_and_Units)或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 16, md: 24}。或者使用数组形式同时设置 `[水平间距, 垂直间距]` | Gutter \| [Gutter, Gutter] | 0 | string: 5.28.0 |
| align | 垂直对齐方式 | (typeof _RowAligns)[number] \| ResponsiveAligns | `top` | object: 4.24.0 |
| justify | 水平排列方式 | (typeof _RowJustify)[number] \| ResponsiveJustify | `start` | object: 4.24.0 |
| prefixCls | - | string | - | - |
| wrap | 是否自动换行 | boolean | true | 4.8.0 |