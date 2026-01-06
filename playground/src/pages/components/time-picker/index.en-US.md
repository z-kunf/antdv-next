---
category: Components
group: Data Entry
title: TimePicker
description: To select/input a time.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*kGmGSLk_1fwAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*1hDmQJIDFJQAAAAAAAAAAAAADrJ8AQ/original
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
| addon | - | () => VueNode | - | - |
| status | Set validation status | InputStatus | - | 4.19.0 |
| popupClassName | The className of panel, please use `classNames.popup` instead | string | - | - |
| popupStyle | The style of panel, please use `styles.popup` instead | CSSProperties | - | - |
| rootClass | - | string | - | - |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | TimePickerClassNames | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | TimePickerStyles | - | - |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| change | A callback function, can be executed when the selected time is changing | (date: DateType \| DateType[] \| null, dateString: string \| string[]) => void | - |
| update:value | - | (date: DateType \| DateType[] \| null) => void | - |
| calendarChange | Callback function, can be executed when the start time or the end time of the range is changing. `info` argument is added in 4.4.0 | (date: DateType \| DateType[], dateString: string \| string[], info: any) => void | - |
| panelChange | - | (date: DateType, mode: PickerMode) => void | - |
| openChange | A callback function which will be called while panel opening/closing | (open: boolean) => void | - |
| ok | - | (date: DateType \| DateType[]) => void | - |
| select | - | (date: DateType) => void | - |
| focus | - | (e: FocusEvent, info: any) => void | - |
| blur | - | (e: FocusEvent, info: any) => void | - |
| keydown | - | (e: KeyboardEvent, preventDefault: VoidFunction) => void | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| addon | - | () => any | - |
| renderExtraFooter | Called from time picker panel to render some addon to its bottom | (mode: PickerMode) => any | - |
| suffixIcon | The custom suffix icon | () => any | - |