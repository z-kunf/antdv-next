---
category: Components
group: 布局
title: Flex
subtitle: 弹性布局
description: 用于对齐的弹性布局容器。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*SMzgSJZE_AwAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*8yArQ43EGccAAAAAAAAAAAAADrJ8AQ/original
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
| vertical | flex 主轴的方向是否垂直，使用 `flex-direction: column` | boolean | `false` | - |
| wrap | 设置元素单行显示还是多行显示 | boolean \| CSSProperties['flexWrap'] | nowrap | boolean: 5.17.0 |
| justify | 设置元素在主轴方向上的对齐方式 | CSSProperties['justifyContent'] | normal | - |
| align | 设置元素在交叉轴方向上的对齐方式 | CSSProperties['alignItems'] | normal | - |
| flex | flex CSS 简写属性 | CSSProperties['flex'] | normal | - |
| gap | 设置网格之间的间隙 | CSSProperties['gap'] \| SizeType | - | - |
| component | 自定义元素类型 | any | `div` | - |