---
category: Components
group: Data Display
title: Tree
description: Multiple-level structure list.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*zYIWT52S4UMAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*_9MMRpWoOcYAAAAAAAAAAAAADrJ8AQ/original
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

#### DirectoryTree

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| rootClass | - | string | - | - |
| showLine | Shows a connecting line | boolean \| { showLeafIcon: boolean \| TreeLeafIcon } | false | - |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | TreeClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | TreeStylesType | - | - |
| multiple | Allows selecting multiple treeNodes | boolean | false | - |
| autoExpandParent | Whether to automatically expand a parent treeNode | boolean | false | - |
| checkStrictly | Check treeNode precisely; parent treeNode and children treeNodes are not associated | boolean | false | - |
| checkable | Add a Checkbox before the treeNodes | boolean | false | - |
| disabled | Whether the tree is disabled | boolean | false | - |
| defaultExpandAll | Whether to expand all treeNodes by default | boolean | false | - |
| defaultExpandParent | If auto expand parent treeNodes when init | boolean | true | - |
| defaultExpandedKeys | Specify the keys of the default expanded treeNodes | Key[] | \[] | - |
| expandedKeys | (Controlled) Specifies the keys of the expanded treeNodes | Key[] | \[] | - |
| checkedKeys | (Controlled) Specifies the keys of the checked treeNodes (PS: When this specifies the key of a treeNode which is also a parent treeNode, all the children treeNodes of will be checked; and vice versa, when it specifies the key of a treeNode which is a child treeNode, its parent treeNode will also be checked. When `checkable` and `checkStrictly` is true, its object has `checked` and `halfChecked` property. Regardless of whether the child or parent treeNode is checked, they won't impact each other | Key[] \| { checked: Key[], halfChecked: Key[] } | \[] | - |
| defaultCheckedKeys | Specifies the keys of the default checked treeNodes | Key[] | \[] | - |
| selectedKeys | (Controlled) Specifies the keys of the selected treeNodes, multiple selection needs to set `multiple` to true | Key[] | - | - |
| defaultSelectedKeys | Specifies the keys of the default selected treeNodes | Key[] | \[] | - |
| selectable | Whether it can be selected | boolean | true | - |
| filterAntTreeNode | Click on the tree node to trigger | (node: AntTreeNode) => boolean | - | - |
| loadedKeys | (Controlled) Set loaded tree nodes. Need to work with `loadData` | Key[] | \[] | - |
| draggable | Specifies whether this Tree or the node is draggable. Use `icon: false` to disable drag handler icon | DraggableFn \| boolean \| DraggableConfig | false | `config`: 4.17.0 |
| showIcon | Controls whether to display the `icon` node (no default style) | boolean | false | - |
| icon | Insert a custom icon before the title. Need to set `showIcon` to true | TreeIcon | - | - |
| switcherIcon | Customize expand/collapse icons for tree nodes (With default rotate angular style) | SwitcherIcon | - | renderProps: 4.20.0 |
| switcherLoadingIcon | Customize loading icons for tree nodes | VueNode | - | 5.20.0 |
| prefixCls | - | string | - | - |
| blockNode | Whether treeNode fill remaining horizontal space | boolean | false | - |
| tabindex | - | number | - | - |
| expandAction | - | ExpandAction | - | - |

#### AntTreeNode

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| className | Additional class to Tree | string | - | - |
| checkable | Add a Checkbox before the treeNodes | boolean | false | - |
| disabled | Whether the tree is disabled | boolean | false | - |
| disableCheckbox | - | boolean | - | - |
| title | - | any \| ((data: DataNode) => any) | - | - |
| key | - | Key | - | - |
| eventKey | - | Key | - | - |
| isLeaf | - | boolean | - | - |
| checked | - | boolean | - | - |
| expanded | - | boolean | - | - |
| loading | - | boolean | - | - |
| selected | - | boolean | - | - |
| selectable | Whether it can be selected | boolean | true | - |
| icon | Insert a custom icon before the title. Need to set `showIcon` to true | TreeIcon | - | - |
| children | - | VueNode | - | - |

#### Tree

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| rootClass | - | string | - | - |
| showLine | Shows a connecting line | boolean \| { showLeafIcon: boolean \| TreeLeafIcon } | false | - |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | TreeClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | TreeStylesType | - | - |
| multiple | Allows selecting multiple treeNodes | boolean | false | - |
| autoExpandParent | Whether to automatically expand a parent treeNode | boolean | false | - |
| checkStrictly | Check treeNode precisely; parent treeNode and children treeNodes are not associated | boolean | false | - |
| checkable | Add a Checkbox before the treeNodes | boolean | false | - |
| disabled | Whether the tree is disabled | boolean | false | - |
| defaultExpandAll | Whether to expand all treeNodes by default | boolean | false | - |
| defaultExpandParent | If auto expand parent treeNodes when init | boolean | true | - |
| defaultExpandedKeys | Specify the keys of the default expanded treeNodes | Key[] | \[] | - |
| expandedKeys | (Controlled) Specifies the keys of the expanded treeNodes | Key[] | \[] | - |
| checkedKeys | (Controlled) Specifies the keys of the checked treeNodes (PS: When this specifies the key of a treeNode which is also a parent treeNode, all the children treeNodes of will be checked; and vice versa, when it specifies the key of a treeNode which is a child treeNode, its parent treeNode will also be checked. When `checkable` and `checkStrictly` is true, its object has `checked` and `halfChecked` property. Regardless of whether the child or parent treeNode is checked, they won't impact each other | Key[] \| { checked: Key[], halfChecked: Key[] } | \[] | - |
| defaultCheckedKeys | Specifies the keys of the default checked treeNodes | Key[] | \[] | - |
| selectedKeys | (Controlled) Specifies the keys of the selected treeNodes, multiple selection needs to set `multiple` to true | Key[] | - | - |
| defaultSelectedKeys | Specifies the keys of the default selected treeNodes | Key[] | \[] | - |
| selectable | Whether it can be selected | boolean | true | - |
| filterAntTreeNode | Click on the tree node to trigger | (node: AntTreeNode) => boolean | - | - |
| loadedKeys | (Controlled) Set loaded tree nodes. Need to work with `loadData` | Key[] | \[] | - |
| draggable | Specifies whether this Tree or the node is draggable. Use `icon: false` to disable drag handler icon | DraggableFn \| boolean \| DraggableConfig | false | `config`: 4.17.0 |
| showIcon | Controls whether to display the `icon` node (no default style) | boolean | false | - |
| icon | Insert a custom icon before the title. Need to set `showIcon` to true | TreeIcon | - | - |
| switcherIcon | Customize expand/collapse icons for tree nodes (With default rotate angular style) | SwitcherIcon | - | renderProps: 4.20.0 |
| switcherLoadingIcon | Customize loading icons for tree nodes | VueNode | - | 5.20.0 |
| prefixCls | - | string | - | - |
| blockNode | Whether treeNode fill remaining horizontal space | boolean | false | - |
| tabindex | - | number | - | - |

### Events {#events}

#### DirectoryTree

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| click | - | NonNullable<VcTreeProps['onClick']> | - |
| check | Callback function for when the onCheck event occurs | NonNullable<VcTreeProps['onCheck']> | - |
| expand | Callback function for when a treeNode is expanded or collapsed | NonNullable<VcTreeProps['onExpand']> | - |
| select | Callback function for when the user clicks a treeNode | NonNullable<VcTreeProps['onSelect']> | - |
| blur | - | NonNullable<VcTreeProps['onBlur']> | - |
| focus | - | NonNullable<VcTreeProps['onFocus']> | - |
| rightClick | Callback function for when the user right clicks a treeNode | NonNullable<VcTreeProps['onRightClick']> | - |
| dblclick | - | NonNullable<VcTreeProps['onDoubleClick']> | - |
| doubleClick | - | NonNullable<VcTreeProps['onDoubleClick']> | - |
| contextmenu | - | NonNullable<VcTreeProps['onContextMenu']> | - |
| dragstart | - | NonNullable<VcTreeProps['onDragStart']> | - |
| dragenter | - | NonNullable<VcTreeProps['onDragEnter']> | - |
| dragover | - | NonNullable<VcTreeProps['onDragOver']> | - |
| dragleave | - | NonNullable<VcTreeProps['onDragLeave']> | - |
| drop | Callback function for when the onDrop event occurs | NonNullable<VcTreeProps['onDrop']> | - |
| dragend | - | NonNullable<VcTreeProps['onDragEnd']> | - |
| load | Callback function for when a treeNode is loaded | NonNullable<VcTreeProps['onLoad']> | - |
| mouseleave | - | NonNullable<VcTreeProps['onMouseLeave']> | - |
| mouseenter | - | NonNullable<VcTreeProps['onMouseEnter']> | - |
| scroll | - | NonNullable<VcTreeProps['onScroll']> | - |
| activeChange | - | NonNullable<VcTreeProps['onActiveChange']> | - |
| update:expandedKeys | - | (keys: Key[]) => void | - |
| update:checkedKeys | - | (keys: Key[] \| { checked: Key[], halfChecked: Key[] }) => void | - |
| update:selectedKeys | - | (keys: Key[]) => void | - |
| update:activeKey | - | (key: Key) => void | - |

#### Tree

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| click | - | NonNullable<VcTreeProps['onClick']> | - |
| check | Callback function for when the onCheck event occurs | NonNullable<VcTreeProps['onCheck']> | - |
| expand | Callback function for when a treeNode is expanded or collapsed | NonNullable<VcTreeProps['onExpand']> | - |
| select | Callback function for when the user clicks a treeNode | NonNullable<VcTreeProps['onSelect']> | - |
| blur | - | NonNullable<VcTreeProps['onBlur']> | - |
| focus | - | NonNullable<VcTreeProps['onFocus']> | - |
| rightClick | Callback function for when the user right clicks a treeNode | NonNullable<VcTreeProps['onRightClick']> | - |
| dblclick | - | NonNullable<VcTreeProps['onDoubleClick']> | - |
| doubleClick | - | NonNullable<VcTreeProps['onDoubleClick']> | - |
| contextmenu | - | NonNullable<VcTreeProps['onContextMenu']> | - |
| dragstart | - | NonNullable<VcTreeProps['onDragStart']> | - |
| dragenter | - | NonNullable<VcTreeProps['onDragEnter']> | - |
| dragover | - | NonNullable<VcTreeProps['onDragOver']> | - |
| dragleave | - | NonNullable<VcTreeProps['onDragLeave']> | - |
| drop | Callback function for when the onDrop event occurs | NonNullable<VcTreeProps['onDrop']> | - |
| dragend | - | NonNullable<VcTreeProps['onDragEnd']> | - |
| load | Callback function for when a treeNode is loaded | NonNullable<VcTreeProps['onLoad']> | - |
| mouseleave | - | NonNullable<VcTreeProps['onMouseLeave']> | - |
| mouseenter | - | NonNullable<VcTreeProps['onMouseEnter']> | - |
| scroll | - | NonNullable<VcTreeProps['onScroll']> | - |
| activeChange | - | NonNullable<VcTreeProps['onActiveChange']> | - |
| update:expandedKeys | - | (keys: Key[]) => void | - |
| update:checkedKeys | - | (keys: Key[] \| { checked: Key[], halfChecked: Key[] }) => void | - |
| update:selectedKeys | - | (keys: Key[]) => void | - |
| update:activeKey | - | (key: Key) => void | - |

### Slots {#slots}

#### DirectoryTree

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| switcherLoadingIcon | Customize loading icons for tree nodes | () => any | 5.20.0 |
| switcherIcon | Customize expand/collapse icons for tree nodes (With default rotate angular style) | (props: AntTreeNodeProps) => any | renderProps: 4.20.0 |
| draggableIcon | - | () => any | - |
| icon | Insert a custom icon before the title. Need to set `showIcon` to true | (props: AntdTreeNodeAttribute) => any | - |
| titleRender | Customize tree node title render | VcTreeProps['titleRender'] | 4.5.0 |

#### Tree

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| switcherLoadingIcon | Customize loading icons for tree nodes | () => any | 5.20.0 |
| switcherIcon | Customize expand/collapse icons for tree nodes (With default rotate angular style) | (props: AntTreeNodeProps) => any | renderProps: 4.20.0 |
| draggableIcon | - | () => any | - |
| icon | Insert a custom icon before the title. Need to set `showIcon` to true | (props: AntdTreeNodeAttribute) => any | - |
| titleRender | Customize tree node title render | VcTreeProps['titleRender'] | 4.5.0 |