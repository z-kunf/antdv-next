---
category: Components
group: Feedback
title: Popconfirm
description: Pop up a bubble confirmation box for an action.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*a7tqQ6wrdeAAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*iwYsQpeFcB0AAAAAAAAAAAAADrJ8AQ/original
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

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| title | - | VueNode | - | - |
| description | - | VueNode | - | - |
| disabled | - | boolean | - | - |
| okText | - | VueNode | - | - |
| cancelText | - | VueNode | - | - |
| okType | - | LegacyButtonType | - | - |
| okButtonProps | - | ButtonProps | - | - |
| cancelButtonProps | - | ButtonProps | - | - |
| showCancel | - | boolean | - | - |
| icon | - | VueNode | - | - |
| classes | - | PopconfirmClassNamesType | - | - |
| styles | - | PopconfirmStylesType | - | - |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| openChange | - | (open: boolean, e?: MouseEvent \| KeyboardEvent) => void | - |
| confirm | - | (e?: MouseEvent) => void | - |
| cancel | - | (e?: MouseEvent) => void | - |
| popupClick | - | (e: MouseEvent) => void | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| title | - | () => any | - |
| description | - | () => any | - |
| icon | - | () => any | - |
| okText | - | () => any | - |
| cancelText | - | () => any | - |