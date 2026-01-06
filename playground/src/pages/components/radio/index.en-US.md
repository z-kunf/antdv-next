---
category: Components
group: Data Entry
title: Radio
description: Used to select a single state from multiple options.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*mrPVRope68wAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*xPfTSphsiA0AAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
---

<DocHeading></DocHeading>

## When To Use {#when-to-use}

## Examples {#examples}

<demo-group>
</demo-group>

## API

### Property {#property}

Common props ref：[Common props](/docs/vue/common-props)

#### RadioGroup

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| defaultValue | - | any | - | - |
| value | According to value for comparison, to determine whether the selected | any | - | - |
| size | - | SizeType | - | - |
| disabled | Disable radio | boolean | false | - |
| name | - | string | - | - |
| id | - | string | - | - |
| optionType | - | RadioGroupOptionType | - | - |
| orientation | - | Orientation | - | - |
| buttonStyle | - | RadioGroupButtonStyle | - | - |
| block | - | boolean | - | - |
| vertical | - | boolean | - | - |
| labelRender | - | (params: { item: CheckboxOptionType, index: number }) => any | - | - |

#### Radio

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| optionType | Control the appearance for Radio to display as button or not | RadioGroupOptionType | - | - |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | RadioClassNamesType | - | 6.0.0 |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | RadioStylesType | - | 6.0.0 |

### Events {#events}

#### RadioGroup

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| change | - | (e: RadioChangeEvent) => void | - |
| mouseenter | - | (e: MouseEvent) => void | - |
| mouseleave | - | (e: MouseEvent) => void | - |
| focus | - | (e: FocusEvent) => void | - |
| blur | - | (e: FocusEvent) => void | - |
| update:value | - | (value: any) => void | - |

### Slots {#slots}

#### RadioGroup

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| labelRender | - | (params: { item: CheckboxOptionType, index: number }) => any | - |