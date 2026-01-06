---
category: Components
group: Data Display
title: Calendar
description: A container that displays data in calendar form.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*nF6_To7pDSAAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*-p-wQLik200AAAAAAAAAAAAADrJ8AQ/original
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
| prefixCls | - | string | - | - |
| rootClass | - | string | - | - |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | CalendarClassNamesType<DateType> | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | CalendarStylesType<DateType> | - | - |
| locale | The calendar's locale | typeof enUS | [(default)](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json) | - |
| validRange | To set valid range | [DateType, DateType] | - | - |
| disabledDate | Function that specifies the dates that cannot be selected, `currentDate` is same dayjs object as `value` prop which you shouldn't mutate it](https://github.com/ant-design/ant-design/issues/30987) | (date: DateType) => boolean | - | - |
| dateFullCellRender | Customize the display of the date cell, the returned content will override the cell | (date: DateType) => VueNode | - | - |
| dateCellRender | Deprecated. | (date: DateType) => VueNode | - | - |
| monthFullCellRender | Deprecated. | (date: DateType) => VueNode | - | - |
| monthCellRender | Deprecated. | (date: DateType) => VueNode | - | - |
| cellRender | Customize cell content | (date: DateType, info: any) => VueNode | - | 5.4.0 |
| fullCellRender | Customize cell content | (date: DateType, info: any) => VueNode | - | 5.4.0 |
| headerRender | Render custom header in panel | HeaderRender<DateType> | - | - |
| value | The current selected date | DateType | - | - |
| defaultValue | The date selected by default | DateType | - | - |
| mode | The display mode of the calendar | CalendarMode | `month` | - |
| fullscreen | Whether to display in full-screen | boolean | true | - |
| showWeek | Whether to display week number | boolean | false | 5.23.0 |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| change | Callback for when date changes | (date: DateType) => void | - |
| update:value | - | (date: DateType) => void | - |
| panelChange | Callback for when panel changes | (date: DateType, mode: CalendarMode) => void | - |
| select | Callback for when a date is selected, include source info | (date: DateType, selectInfo: SelectInfo) => void | `info`: 5.6.0 |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| dateFullCellRender | Customize the display of the date cell, the returned content will override the cell | (ctx: { date: AnyObject }) => any | - |
| dateCellRender | - | (ctx: { date: AnyObject }) => any | - |
| monthFullCellRender | - | (ctx: { date: AnyObject }) => any | - |
| monthCellRender | - | (ctx: { date: AnyObject }) => any | - |
| cellRender | Customize cell content | (ctx: { date: AnyObject, info: any }) => any | 5.4.0 |
| fullCellRender | Customize cell content | (ctx: { date: AnyObject, info: any }) => any | 5.4.0 |
| headerRender | Render custom header in panel | (config: { value: AnyObject, type: CalendarMode, onChange: (date: AnyObject) => void, onTypeChange: (type: CalendarMode) => void }) => any | - |