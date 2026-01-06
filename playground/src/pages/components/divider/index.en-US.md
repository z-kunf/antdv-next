---
category: Components
title: Divider
description: A divider line separates different content.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*7sMiTbzvaDoAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*KPSEQ74PLg4AAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
group:
  title: Layout
  order: 2
---

<DocHeading></DocHeading>

## When To Use {#when-to-use}

## Examples {#examples}

<demo-group>
</demo-group>

## API

### Property {#property}

Common props ref：[Common props](/docs/vue/common-props)

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| type | The direction type of divider | Orientation | `horizontal` | - |
| orientation | Whether line is horizontal or vertical | Orientation | `horizontal` | - |
| vertical | Orientation, Simultaneously configure with `orientation` and prioritize `orientation` | boolean | false | - |
| titlePlacement | The position of title inside divider | TitlePlacement | `center` | - |
| orientationMargin | The margin-left/right between the title and its closest border, while the `titlePlacement` should not be `center`, If a numeric value of type `string` is provided without a unit, it is assumed to be in pixels (px) by default. | string \| number | - | - |
| dashed | Whether line is dashed | boolean | false | - |
| variant | Whether line is dashed, dotted or solid | 'dashed' \| 'dotted' \| 'solid' | solid | 5.20.0 |
| size | The size of divider. Only valid for horizontal layout | SizeType | - | 5.25.0 |
| plain | Divider text show as plain style | boolean | true | 4.2.0 |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | DividerClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | DividerStylesType | - | - |