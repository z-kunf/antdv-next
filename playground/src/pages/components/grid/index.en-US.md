---
category: Components
group: Layout
title: Grid
description: 24 Grids System.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*mfJeS6cqZrEAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*DLUwQ4B2_zQAAAAAAAAAAAAADrJ8AQ/original
---

<DocHeading></DocHeading>

## When To Use {#when-to-use}

## Examples {#examples}

<demo-group>
</demo-group>

## API

### Property {#property}

Common props ref：[Common props](/docs/vue/common-props)

#### Col

| Property | Description | Type | Default | Version |
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

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| gutter | Spacing between grids, could be a [string CSS units](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units) or a object like { xs: 8, sm: 16, md: 24}. Or you can use array to make horizontal and vertical spacing work at the same time `[horizontal, vertical]` | Gutter \| [Gutter, Gutter] | 0 | string: 5.28.0 |
| align | Vertical alignment | (typeof _RowAligns)[number] \| ResponsiveAligns | `top` | object: 4.24.0 |
| justify | Horizontal arrangement | (typeof _RowJustify)[number] \| ResponsiveJustify | `start` | object: 4.24.0 |
| prefixCls | - | string | - | - |
| wrap | Auto wrap line | boolean | true | 4.8.0 |