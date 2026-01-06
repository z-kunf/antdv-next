---
category: Components
group: Navigation
title: Menu
description: A versatile menu for navigation.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*KeyQQL5iKkkAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Vn4XSqJFAxcAAAAAAAAAAAAADrJ8AQ/original
---

<DocHeading></DocHeading>

## When To Use {#when-to-use}

## Examples {#examples}

<demo-group>
</demo-group>

## API

### Property {#property}

Common props ref：[Common props](/docs/vue/common-props)

#### MenuItem

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| icon | - | VueNode | - | - |
| danger | - | boolean | - | - |
| title | - | VueNode | - | - |
| eventKey | - | string | - | - |
| warnKey | - | boolean | - | - |
| attribute | Deprecated. | Record<string, string> | - | - |
| onKeyDown | - | (e: KeyboardEvent) => void | - | - |
| onFocus | - | (e: FocusEvent) => void | - | - |
| role | - | string | - | - |

#### Menu

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| theme | - | MenuTheme | - | - |
| inlineIndent | - | number | - | - |
| _internalDisableMenuItemTitleTooltip | - | boolean | - | - |
| items | - | ItemType[] | - | - |
| classes | - | MenuClassNamesType | - | - |
| styles | - | MenuStylesType | - | - |
| rootClass | - | string | - | - |
| labelRender | - | (item: RenderItem) => any | - | - |
| extraRender | - | (item: RenderItem) => any | - | - |
| itemIcon | - | (props: MenuItemProps & RenderIconInfo) => any | - | - |

#### SubMenu

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| title | - | VueNode | - | - |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| click | - | (info: MenuInfo) => void | - |
| select | - | (info: SelectInfo) => void | - |
| deselect | - | (info: SelectInfo) => void | - |
| openChange | - | (openKeys: string[]) => void | - |
| update:openKeys | - | (openKeys: string[]) => void | - |
| update:selectedKeys | - | (selectedKeys: string[]) => void | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| expandIcon | - | () => any | - |
| labelRender | - | (item: RenderItem) => any | - |
| extraRender | - | (item: RenderItem) => any | - |
| itemIcon | - | (props: MenuItemProps & RenderIconInfo) => any | - |

### Methods {#methods}

| Method | Description | Type | Version |
| --- | --- | --- | --- |
| menu | - | VcMenuRef \| null | - |
| focus | - | (options?: FocusOptions) => void | - |