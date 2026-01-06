---
category: Components
group: 通用
title: Typography
subtitle: 排版
description: 文本的基本格式。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*MLt3R6m9huoAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*LT2jR41Uj2EAAAAAAAAAAAAADrJ8AQ/original
---

<DocHeading></DocHeading>

## 何时使用 {#when-to-use}

## 示例 {#examples}

<demo-group>
</demo-group>

## API

### 属性 {#property}

通用属性参考：[通用属性](/docs/vue/common-props)

#### Block

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| title | - | string | - | - |
| editable | 是否可编辑，为对象时可对编辑进行控制 | boolean \| EditConfig | false | - |
| copyable | 是否可拷贝，为对象时可进行各种自定义 | boolean \| CopyConfig | false | - |
| type | 文本类型 | BaseType | - | success: 4.6.0 |
| disabled | 禁用文本 | boolean | false | - |
| ellipsis | 自动溢出省略，为对象时不能设置省略行数、是否可展开、onExpand 展开事件。不同于 Typography.Paragraph，Text 组件自身不带 100% 宽度样式，因而默认情况下初次缩略后宽度便不再变化。如果需要自适应宽度，请手动配置宽度样式 | boolean \| EllipsisConfig | false | - |
| code | 添加代码样式 | boolean | false | - |
| mark | 添加标记样式 | boolean | false | - |
| underline | 添加下划线样式 | boolean | false | - |
| delete | 添加删除线样式 | boolean | false | - |
| strong | 是否加粗 | boolean | false | - |
| keyboard | 添加键盘样式 | boolean | false | 4.3.0 |
| italic | 是否斜体 | boolean | false | 4.16.0 |
| component | - | keyof HTMLElementTagNameMap \| string | - | - |
| direction | - | DirectionType | - | - |
| classes | - | TypographyClassNamesType | - | - |
| styles | - | TypographyStylesType | - | - |
| id | - | string | - | - |

#### Link

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| title | - | string | - | - |
| editable | 是否可编辑，为对象时可对编辑进行控制 | boolean \| EditConfig | false | - |
| copyable | 是否可拷贝，为对象时可进行各种自定义 | boolean \| CopyConfig | false | - |
| type | 文本类型 | BaseType | - | success: 4.6.0 |
| disabled | 禁用文本 | boolean | false | - |
| ellipsis | 自动溢出省略，为对象时不能设置省略行数、是否可展开、onExpand 展开事件。不同于 Typography.Paragraph，Text 组件自身不带 100% 宽度样式，因而默认情况下初次缩略后宽度便不再变化。如果需要自适应宽度，请手动配置宽度样式 | boolean \| EllipsisConfig | false | - |
| code | 添加代码样式 | boolean | false | - |
| mark | 添加标记样式 | boolean | false | - |
| underline | 添加下划线样式 | boolean | false | - |
| delete | 添加删除线样式 | boolean | false | - |
| strong | 是否加粗 | boolean | false | - |
| keyboard | 添加键盘样式 | boolean | false | 4.3.0 |
| italic | 是否斜体 | boolean | false | 4.16.0 |
| component | - | keyof HTMLElementTagNameMap \| string | - | - |
| direction | - | DirectionType | - | - |
| classes | - | TypographyClassNamesType | - | - |
| styles | - | TypographyStylesType | - | - |
| id | - | string | - | - |
| href | - | string | - | - |
| target | - | string | - | - |
| rel | - | string | - | - |

#### Paragraph

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| title | - | string | - | - |
| editable | 是否可编辑，为对象时可对编辑进行控制 | boolean \| EditConfig | false | - |
| copyable | 是否可拷贝，为对象时可进行各种自定义 | boolean \| CopyConfig | false | - |
| type | 文本类型 | BaseType | - | success: 4.6.0 |
| disabled | 禁用文本 | boolean | false | - |
| ellipsis | 自动溢出省略，为对象时不能设置省略行数、是否可展开、onExpand 展开事件。不同于 Typography.Paragraph，Text 组件自身不带 100% 宽度样式，因而默认情况下初次缩略后宽度便不再变化。如果需要自适应宽度，请手动配置宽度样式 | boolean \| EllipsisConfig | false | - |
| code | 添加代码样式 | boolean | false | - |
| mark | 添加标记样式 | boolean | false | - |
| underline | 添加下划线样式 | boolean | false | - |
| delete | 添加删除线样式 | boolean | false | - |
| strong | 是否加粗 | boolean | false | - |
| keyboard | 添加键盘样式 | boolean | false | 4.3.0 |
| italic | 是否斜体 | boolean | false | 4.16.0 |
| component | - | keyof HTMLElementTagNameMap \| string | - | - |
| direction | - | DirectionType | - | - |
| classes | - | TypographyClassNamesType | - | - |
| styles | - | TypographyStylesType | - | - |
| id | - | string | - | - |

#### Text

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| title | - | string | - | - |
| editable | 是否可编辑，为对象时可对编辑进行控制 | boolean \| EditConfig | false | - |
| copyable | 是否可拷贝，为对象时可进行各种自定义 | boolean \| CopyConfig | false | - |
| type | 文本类型 | BaseType | - | success: 4.6.0 |
| disabled | 禁用文本 | boolean | false | - |
| ellipsis | 自动溢出省略，为对象时不能设置省略行数、是否可展开、onExpand 展开事件。不同于 Typography.Paragraph，Text 组件自身不带 100% 宽度样式，因而默认情况下初次缩略后宽度便不再变化。如果需要自适应宽度，请手动配置宽度样式 | boolean \| EllipsisConfig | false | - |
| code | 添加代码样式 | boolean | false | - |
| mark | 添加标记样式 | boolean | false | - |
| underline | 添加下划线样式 | boolean | false | - |
| delete | 添加删除线样式 | boolean | false | - |
| strong | 是否加粗 | boolean | false | - |
| keyboard | 添加键盘样式 | boolean | false | 4.3.0 |
| italic | 是否斜体 | boolean | false | 4.16.0 |
| component | - | keyof HTMLElementTagNameMap \| string | - | - |
| direction | - | DirectionType | - | - |
| classes | - | TypographyClassNamesType | - | - |
| styles | - | TypographyStylesType | - | - |
| id | - | string | - | - |

#### Title

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| level | - | (typeof TITLE_ELE_LIST)[number] | - | - |