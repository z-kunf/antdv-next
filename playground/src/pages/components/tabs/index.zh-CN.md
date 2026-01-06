---
category: Components
group: 导航
title: Tabs
subtitle: 标签页
description: 选项卡切换组件。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*72NDQqXkyOEAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*8HMoTZUoSGoAAAAAAAAAAAAADrJ8AQ/original
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
| destroyInactiveTabPane | 被隐藏时是否销毁 DOM 结构，使用 `destroyOnHidden` 代替 | boolean | false | - |
| class | - | string | - | - |
| style | - | CSSProperties | - | - |

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| edit | 新增和删除页签的回调，在 `type="editable-card"` 时有效 | (e: MouseEvent \| KeyboardEvent \| string, action: 'add' \| 'remove') => void | - |
| change | 切换面板的回调 | NonNullable<VcTabsProps['onChange']> | - |
| tabClick | tab 被点击的回调 | NonNullable<VcTabsProps['onTabClick']> | - |
| tabScroll | tab 滚动时触发 | NonNullable<VcTabsProps['onTabScroll']> | 4.3.0 |
| update:activeKey | - | (activeKey: string) => void | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| addIcon | 自定义添加按钮，设置 `type="editable-card"` 时有效 | () => any | 4.4.0 |
| moreIcon | - | () => any | - |
| removeIcon | 自定义删除按钮，设置 `type="editable-card"` 时有效 | () => any | 5.15.0 |
| labelRender | - | (args: { item: Tab, index: number }) => any | - |
| contentRender | - | (args: { item: Tab, index: number }) => any | - |
| renderTabBar | 替换 TabBar，用于二次封装标签头 | (args: { props: any, TabNavListComponent: any }) => any | - |
| rightExtra | - | () => any | - |
| leftExtra | - | () => any | - |

### 方法 {#methods}

| 方法 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| nativeElement | - | any | - |