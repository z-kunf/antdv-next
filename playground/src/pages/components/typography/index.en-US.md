---
category: Components
group: General
title: Typography
description: Basic text writing, including headings, body text, lists, and more.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*MLt3R6m9huoAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*LT2jR41Uj2EAAAAAAAAAAAAADrJ8AQ/original
---

<DocHeading></DocHeading>

## When To Use {#when-to-use}

## Examples {#examples}

<demo-group>
</demo-group>

## API

### Property {#property}

Common props ref：[Common props](/docs/vue/common-props)

#### Block

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| title | - | string | - | - |
| editable | If editable. Can control edit state when is object | boolean \| EditConfig | false | - |
| copyable | Whether to be copyable, customize it via setting an object | boolean \| CopyConfig | false | - |
| type | Content type | BaseType | - | success: 4.6.0 |
| disabled | Disabled content | boolean | false | - |
| ellipsis | Display ellipsis when text overflows, can't configure expandable, rows and onExpand by using object. Diff with Typography.Paragraph, Text do not have 100% width style which means it will fix width on the first ellipsis. If you want to have responsive ellipsis, please set width manually | boolean \| EllipsisConfig | false | - |
| code | Code style | boolean | false | - |
| mark | Marked style | boolean | false | - |
| underline | Underlined style | boolean | false | - |
| delete | Deleted line style | boolean | false | - |
| strong | Bold style | boolean | false | - |
| keyboard | Keyboard style | boolean | false | 4.3.0 |
| italic | Italic style | boolean | false | 4.16.0 |
| component | - | keyof HTMLElementTagNameMap \| string | - | - |
| direction | - | DirectionType | - | - |
| classes | - | TypographyClassNamesType | - | - |
| styles | - | TypographyStylesType | - | - |
| id | - | string | - | - |

#### Link

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| title | - | string | - | - |
| editable | If editable. Can control edit state when is object | boolean \| EditConfig | false | - |
| copyable | Whether to be copyable, customize it via setting an object | boolean \| CopyConfig | false | - |
| type | Content type | BaseType | - | success: 4.6.0 |
| disabled | Disabled content | boolean | false | - |
| ellipsis | Display ellipsis when text overflows, can't configure expandable, rows and onExpand by using object. Diff with Typography.Paragraph, Text do not have 100% width style which means it will fix width on the first ellipsis. If you want to have responsive ellipsis, please set width manually | boolean \| EllipsisConfig | false | - |
| code | Code style | boolean | false | - |
| mark | Marked style | boolean | false | - |
| underline | Underlined style | boolean | false | - |
| delete | Deleted line style | boolean | false | - |
| strong | Bold style | boolean | false | - |
| keyboard | Keyboard style | boolean | false | 4.3.0 |
| italic | Italic style | boolean | false | 4.16.0 |
| component | - | keyof HTMLElementTagNameMap \| string | - | - |
| direction | - | DirectionType | - | - |
| classes | - | TypographyClassNamesType | - | - |
| styles | - | TypographyStylesType | - | - |
| id | - | string | - | - |
| href | - | string | - | - |
| target | - | string | - | - |
| rel | - | string | - | - |

#### Paragraph

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| title | - | string | - | - |
| editable | If editable. Can control edit state when is object | boolean \| EditConfig | false | - |
| copyable | Whether to be copyable, customize it via setting an object | boolean \| CopyConfig | false | - |
| type | Content type | BaseType | - | success: 4.6.0 |
| disabled | Disabled content | boolean | false | - |
| ellipsis | Display ellipsis when text overflows, can't configure expandable, rows and onExpand by using object. Diff with Typography.Paragraph, Text do not have 100% width style which means it will fix width on the first ellipsis. If you want to have responsive ellipsis, please set width manually | boolean \| EllipsisConfig | false | - |
| code | Code style | boolean | false | - |
| mark | Marked style | boolean | false | - |
| underline | Underlined style | boolean | false | - |
| delete | Deleted line style | boolean | false | - |
| strong | Bold style | boolean | false | - |
| keyboard | Keyboard style | boolean | false | 4.3.0 |
| italic | Italic style | boolean | false | 4.16.0 |
| component | - | keyof HTMLElementTagNameMap \| string | - | - |
| direction | - | DirectionType | - | - |
| classes | - | TypographyClassNamesType | - | - |
| styles | - | TypographyStylesType | - | - |
| id | - | string | - | - |

#### Text

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| title | - | string | - | - |
| editable | If editable. Can control edit state when is object | boolean \| EditConfig | false | - |
| copyable | Whether to be copyable, customize it via setting an object | boolean \| CopyConfig | false | - |
| type | Content type | BaseType | - | success: 4.6.0 |
| disabled | Disabled content | boolean | false | - |
| ellipsis | Display ellipsis when text overflows, can't configure expandable, rows and onExpand by using object. Diff with Typography.Paragraph, Text do not have 100% width style which means it will fix width on the first ellipsis. If you want to have responsive ellipsis, please set width manually | boolean \| EllipsisConfig | false | - |
| code | Code style | boolean | false | - |
| mark | Marked style | boolean | false | - |
| underline | Underlined style | boolean | false | - |
| delete | Deleted line style | boolean | false | - |
| strong | Bold style | boolean | false | - |
| keyboard | Keyboard style | boolean | false | 4.3.0 |
| italic | Italic style | boolean | false | 4.16.0 |
| component | - | keyof HTMLElementTagNameMap \| string | - | - |
| direction | - | DirectionType | - | - |
| classes | - | TypographyClassNamesType | - | - |
| styles | - | TypographyStylesType | - | - |
| id | - | string | - | - |

#### Title

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| level | - | (typeof TITLE_ELE_LIST)[number] | - | - |