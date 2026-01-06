---
category: Components
group: Data Entry
title: Checkbox
description: Collect user's choices.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*DzgiRbW3khIAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*G3MjTYXL6AIAAAAAAAAAAAAADrJ8AQ/original
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

#### Checkbox

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| defaultChecked | Specifies the initial state: whether or not the checkbox is selected | boolean | false | - |
| checked | Specifies whether the checkbox is selected | boolean | false | - |
| disabled | If disable checkbox | boolean | false | - |
| title | - | string | - | - |
| value | - | any | - | - |
| tabIndex | - | number | - | - |
| name | - | string | - | - |
| id | - | string | - | - |
| autoFocus | - | boolean | - | - |
| type | - | string | - | - |
| skipGroup | - | boolean | - | - |
| required | - | boolean | - | - |
| indeterminate | The indeterminate checked state of checkbox | boolean | false | - |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | CheckboxClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | CheckboxStylesType | - | - |

#### CheckboxGroup

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| options | - | (CheckboxOptionType \| string \| number)[] | - | - |
| disabled | If disable checkbox | boolean | false | - |
| name | - | string | - | - |
| defaultValue | - | any[] | - | - |
| value | - | any[] | - | - |
| labelRender | - | (params: { item: CheckboxOptionType, index: number }) => any | - | - |

### Events {#events}

#### Checkbox

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| change | The callback function that is triggered when the state changes | (checked: CheckboxChangeEvent) => void | - |
| update:checked | - | (checked: any) => void | - |
| update:value | - | (value: any) => void | - |
| mouseenter | - | (event: MouseEvent) => void | - |
| mouseleave | - | (event: MouseEvent) => void | - |
| keypress | - | (event: KeyboardEvent) => void | - |
| keydown | - | (event: KeyboardEvent) => void | - |
| focus | Called when entering the component | (event: FocusEvent) => void | - |
| blur | Called when leaving the component | (event: FocusEvent) => void | - |
| click | - | (event: MouseEvent) => void | - |

#### CheckboxGroup

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| update:value | - | (value: any[]) => void | - |
| change | The callback function that is triggered when the state changes | (checkedValue: any[]) => void | - |

### Slots {#slots}

#### CheckboxGroup

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| labelRender | - | (params: { item: CheckboxOptionType, index: number }) => any | - |