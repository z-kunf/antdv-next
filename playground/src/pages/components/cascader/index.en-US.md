---
category: Components
group: Data Entry
title: Cascader
description: Cascade selection box.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*ngTnQZNOcK0AAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Nt8xR7afyr0AAAAAAAAAAAAADrJ8AQ/original
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
| value | The selected value | any | - | - |
| multiple | Support multiple or not | boolean | - | 4.17.0 |
| size | The input size | SizeType | - | - |
| showArrow | Deprecated. | boolean | - | - |
| disabled | Whether disabled select | boolean | false | - |
| bordered | Deprecated. | boolean | - | - |
| placement | Use preset popup align config from builtinPlacements | SelectCommonPlacement | `bottomLeft` | 4.17.0 |
| suffixIcon | The custom suffix icon | VueNode | - | - |
| options | The data options of cascade | OptionType[] | - | - |
| status | Set validation status | InputStatus | - | 4.19.0 |
| rootClass | - | string | - | - |
| popupClassName | The additional className of popup overlay, use `classNames.popup.root` instead | string | - | 4.23.0 |
| dropdownClassName | Deprecated. | string | - | - |
| dropdownStyle | The style of dropdown menu, use `styles.popup.root` instead | CSSProperties | - | - |
| dropdownRender | Customize dropdown content, use `popupRender` instead | (menu: any) => any | - | 4.4.0 |
| popupRender | Customize dropdown content | (menu: any) => any | - | - |
| dropdownMenuColumnStyle | The style of the drop-down menu column, use `popupMenuColumnStyle` instead | CSSProperties | - | - |
| popupMenuColumnStyle | The style of the drop-down menu column | CSSProperties | - | - |
| variant | Variants of selector | Variant | `outlined` | 5.13.0 \| `underlined`: 5.24.0 |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | CascaderClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | CascaderStylesType | - | - |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| openChange | Callback when popup shown or hidden | (visible: boolean) => void | - |
| dropdownVisibleChange | Callback when popup shown or hidden, use `onOpenChange` instead | (visible: boolean) => void | 4.17.0 |
| popupVisibleChange | - | (visible: boolean) => void | - |
| change | Callback when finishing cascader select | NonNullable<VcCascaderProps['onChange']> | - |
| update:value | - | (value: any) => void | - |
| search | The callback function triggered when input changed | NonNullable<VcCascaderProps['onSearch']> | 4.17.0 |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| suffixIcon | The custom suffix icon | () => any | - |
| notFoundContent | Specify content to show when no result matches | () => any | - |
| popupRender | Customize dropdown content | (menu: any) => any | - |
| displayRender | The render function of displaying selected options | (data: { labels: string[], selectedOptions?: DefaultOptionType[] }) => any | `multiple`: 4.18.0 |
| optionRender | Customize the rendering dropdown options | (option: DefaultOptionType) => any | 5.16.0 |
| expandIcon | Customize the current item expand icon | () => any | 4.4.0 |