---
category: Components
group: Data Entry
title: Form
description: High-performance form component with data domain management. Includes data entry, validation, and corresponding styles.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*-lcdS5Qm1bsAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*ylFATY6w-ygAAAAAAAAAAAAADrJ8AQ/original
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
| classes | Customize class for each semantic structure inside the component. Supports object or function. | FormClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | FormStylesType | - | - |
| colon | Configure the default value of `colon` for Form.Item. Indicates whether the colon after the label is displayed (only effective when prop layout is horizontal) | boolean | true | - |
| name | Form name. Will be the prefix of Field `id` | string | - | - |
| layout | Form layout | FormLayout | `horizontal` | - |
| labelAlign | The text align of label of all items | FormLabelAlign | `right` | - |
| labelWrap | whether label can be wrap | boolean | false | 4.18.0 |
| labelCol | Label layout, like `<Col>` component. Set `span` `offset` value like `{span: 3, offset: 12}` or `sm: {span: 3, offset: 12}` | ColProps | - | - |
| wrapperCol | The layout for input controls, same as `labelCol` | ColProps | - | - |
| feedbackIcons | Can be passed custom icons while `Form.Item` element has `hasFeedback` | FeedbackIcons | - | 5.9.0 |
| size | Set field component size (antd components only) | SizeType | - | - |
| disabled | Set form component disable, only available for antd components | boolean | false | 4.21.0 |
| scrollToFirstError | Auto scroll to first failed field when submit | ScrollFocusOptions \| boolean | false | focus: 5.24.0 |
| requiredMark | Required mark style. Can use required mark or optional mark. You can not config to single Form.Item since this is a Form level config | RequiredMark | true | `renderProps`: 5.9.0 |
| variant | Variant of components inside form | Variant | `outlined` | 5.13.0 \| `underlined`: 5.24.0 |
| validateMessages | Validation prompt template, description [see below](#validatemessages) | ValidateMessages | - | - |
| model | - | Record<string, any> | - | - |
| rules | - | Record<string, Rule[]> | - | - |
| validateTrigger | Config field validate trigger | string \| string[] \| false | `onChange` | 4.3.0 |
| preserve | Keep field value even when field removed. You can get the preserve field value by `getFieldsValue(true)` | boolean | true | 4.4.0 |
| clearOnDestroy | Clear form values when the form is uninstalled | boolean | false | 5.18.0 |
| validateOnRuleChange | - | boolean | - | - |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| finish | Trigger after submitting the form and verifying data successfully | (values: Record<string, any>) => void | - |
| finishFailed | Trigger after submitting the form and verifying data failed | (errorInfo: ValidateErrorEntity) => void | - |
| submit | - | (e: Event) => void | - |
| reset | - | (e: Event) => void | - |
| validate | - | (name: InternalNamePath, status: boolean, errors: any[] \| null) => void | - |
| valuesChange | Trigger when value updated | (changedValues: Record<string, any>, values: Record<string, any>) => void | - |
| fieldsChange | Trigger when field updated | (changedFields: FieldData[], allFields: FieldData[]) => void | - |

### Methods {#methods}

#### Form

| Method | Description | Type | Version |
| --- | --- | --- | --- |
| getFieldValue | - | (name: NamePath<Values>) => StoreValue | - |
| getFieldsValue | - | (() => Values)     & ((nameList: NamePath<Values>[] \| true, filterFunc?: FilterFunc) => any)     & ((config: GetFieldsValueConfig) => any) | - |
| getFieldError | - | (name: NamePath<Values>) => string[] | - |
| getFieldsError | - | (nameList?: NamePath<Values>[]) => FieldError[] | - |
| getFieldWarning | - | (name: NamePath<Values>) => string[] | - |
| isFieldsTouched | - | ((nameList?: NamePath<Values>[], allFieldsTouched?: boolean) => boolean)     & ((allFieldsTouched?: boolean) => boolean) | - |
| isFieldTouched | - | (name: NamePath<Values>) => boolean | - |
| isFieldValidating | - | (name: NamePath<Values>) => boolean | - |
| isFieldsValidating | - | (nameList?: NamePath<Values>[]) => boolean | - |
| resetFields | - | (fields?: NamePath<Values>[]) => void | - |
| setFields | - | (fields: FieldData<Values>[]) => void | - |
| setFieldValue | - | (name: NamePath<Values>, value: any) => void | - |
| setFieldsValue | - | (values: RecursivePartial<Values>) => void | - |
| validateFields | - | ValidateFields<Values> | - |
| submit | - | () => void | - |

#### Form

| Method | Description | Type | Version |
| --- | --- | --- | --- |
| getFieldValue | - | (name: NamePath<Values>) => StoreValue | - |
| getFieldsValue | - | (() => Values)     & ((nameList: NamePath<Values>[] \| true, filterFunc?: FilterFunc) => any)     & ((config: GetFieldsValueConfig) => any) | - |
| getFieldError | - | (name: NamePath<Values>) => string[] | - |
| getFieldsError | - | (nameList?: NamePath<Values>[]) => FieldError[] | - |
| getFieldWarning | - | (name: NamePath<Values>) => string[] | - |
| isFieldsTouched | - | ((nameList?: NamePath<Values>[], allFieldsTouched?: boolean) => boolean)     & ((allFieldsTouched?: boolean) => boolean) | - |
| isFieldTouched | - | (name: NamePath<Values>) => boolean | - |
| isFieldValidating | - | (name: NamePath<Values>) => boolean | - |
| isFieldsValidating | - | (nameList?: NamePath<Values>[]) => boolean | - |
| resetFields | - | (fields?: NamePath<Values>[]) => void | - |
| setFields | - | (fields: FieldData<Values>[]) => void | - |
| setFieldValue | - | (name: NamePath<Values>, value: any) => void | - |
| setFieldsValue | - | (values: RecursivePartial<Values>) => void | - |
| validateFields | - | ValidateFields<Values> | - |
| submit | - | () => void | - |
| nativeElement | - | HTMLElement | - |