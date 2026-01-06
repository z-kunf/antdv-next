---
category: Components
group: Navigation
title: Breadcrumb
description: Display the current location within a hierarchy. And allow going back to states higher up in the hierarchy.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*I5a2Tpqs3y0AAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Tr90QKrE_LcAAAAAAAAAAAAADrJ8AQ/original
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

#### Breadcrumb

| Property | Description | Type                                                                     | Default | Version |
| --- | --- |--------------------------------------------------------------------------| --- | --- |
| prefixCls | - | string                                                                   | - | - |
| params | Routing parameters | T                                                                        | - | - |
| separator | Custom separator | VueNode                                                                  | `/` | - |
| rootClass | - | string                                                                   | - | - |
| items | The routing stack information of router | ItemType[]                                                               | - | 5.3.0 |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | BreadcrumbClassNamesType<T>                                              | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | BreadcrumbStylesType<T>                                                  | - | - |
| itemRender | Custom item renderer | (route: ItemType, params: T, routes: ItemType[], paths: string[]) => any | - | - |
| titleRender | - | (params: \{ item: ItemType, index: number \}) => any                     | - | - |
| menuLabelRender | - | (params: \{ item: ItemType, index: number, menu: MenuItem \}) => any     | - | - |
| menuExtraRender | - | (params: \{ item: ItemType, index: number, menu: MenuItem \}) => any     | - | - |

#### BreadcrumbItem

| Property | Description | Type                                                     | Default | Version |
| --- | --- |----------------------------------------------------------| --- | --- |
| separator | Custom separator | VueNode                                                  | `/` | - |
| key | - | Key                                                      | - | - |
| prefixCls | - | string                                                   | - | - |
| href | - | string                                                   | - | - |
| menu | - | Omit<MenuType, 'items'> & \{     items?: MenuItem[]   \} | - | - |
| dropdownProps | - | DropdownProps                                            | - | - |
| onClick | - | (event: MouseEvent) => void                              | - | - |
| class | - | string                                                   | - | - |
| style | - | CSSProperties                                            | - | - |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| clickItem | - | (item: ItemType, event: MouseEvent) => void | - |

### Slots {#slots}

| Slot | Description | Type                                                                             | Version |
| --- | --- |----------------------------------------------------------------------------------| --- |
| itemRender | Custom item renderer | (route: ItemType, params: AnyObject, routes: ItemType[], paths: string[]) => any | - |
| titleRender | - | (params: \{ item: ItemType, index: number \}) => any                             | - |
| separator | Custom separator | () => any                                                                        | - |
| menuLabelRender | - | (params: \{ item: ItemType, index: number, menu: MenuItem \}) => any             | - |
| menuExtraRender | - | (params:\{ item: ItemType, index: number, menu: MenuItem \}) => any              | - |