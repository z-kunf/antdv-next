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
<demo src="./demo/basic.vue">Basic</demo>
<demo src="./demo/disabled.vue">Disabled</demo>
<demo src="./demo/controller.vue">Controlled Checkbox</demo>
<demo src="./demo/group.vue">Checkbox Group</demo>
<demo src="./demo/check-all.vue">Check all</demo>
<demo src="./demo/layout.vue">Use with Grid</demo>
<demo src="./demo/style-class.vue">Custom semantic dom styling</demo>
</demo-group>

## API

Common props ref：[Common props](/docs/vue/common-props)

### Checkbox

#### Props {#checkbox-props}

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
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

#### Events {#checkbox-events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| change | The callback function that is triggered when the state changes | (checked: CheckboxChangeEvent) =&gt; void | - |
| mouseenter | - | (event: MouseEvent) =&gt; void | - |
| mouseleave | - | (event: MouseEvent) =&gt; void | - |
| keypress | - | (event: KeyboardEvent) =&gt; void | - |
| keydown | - | (event: KeyboardEvent) =&gt; void | - |
| focus | Called when entering the component | (event: FocusEvent) =&gt; void | - |
| blur | Called when leaving the component | (event: FocusEvent) =&gt; void | - |
| click | - | (event: MouseEvent) =&gt; void | - |

### CheckboxGroup

#### Props {#checkboxgroup-props}

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| options | - | (CheckboxOptionType \| string \| number)[] | - | - |
| disabled | If disable checkbox | boolean | false | - |
| name | - | string | - | - |
| defaultValue | - | any[] | - | - |
| value | - | any[] | - | - |
| labelRender | - | (params: &#123; item: CheckboxOptionType, index: number &#125;) =&gt; any | - | - |

#### Events {#checkboxgroup-events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| change | The callback function that is triggered when the state changes | (checkedValue: any[]) =&gt; void | - |

#### Slots {#checkboxgroup-slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| labelRender | - | (params: &#123; item: CheckboxOptionType, index: number &#125;) =&gt; any | - |
