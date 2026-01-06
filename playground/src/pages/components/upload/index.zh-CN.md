---
category: Components
group: 数据录入
title: Upload
subtitle: 上传
description: 文件选择上传和拖拽上传控件。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*93ymR4RD4S0AAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*l1nlSryXib8AAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
---

<DocHeading></DocHeading>

## 何时使用 {#when-to-use}

## 示例 {#examples}

<demo-group>
</demo-group>

## API

### 属性 {#property}

通用属性参考：[通用属性](/docs/vue/common-props)

#### Dragger

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| type | - | UploadType | - | - |
| name | 发到后台的文件参数名 | string | `file` | - |
| defaultFileList | 默认已经上传的文件列表 | Array<UploadFile<T>> | - | - |
| fileList | 已经上传的文件列表（受控），使用此参数时，如果遇到 `onChange` 只调用一次的问题，请参考 [#2423](https://github.com/ant-design/ant-design/issues/2423) | Array<UploadFile<T>> | - | - |
| action | 上传的地址 | string \| ((file: VcFile) => string) \| ((file: VcFile) => PromiseLike<string>) | - | - |
| directory | 支持上传文件夹（[caniuse](https://caniuse.com/#feat=input-file-directory)） | boolean | false | - |
| data | 上传所需额外参数或返回上传额外参数的方法 | \| Record<string, unknown>     \| ((file: UploadFile<T>) => Record<string, unknown> \| Promise<Record<string, unknown>>) | - | - |
| method | 上传请求的 http method | 'POST' \| 'PUT' \| 'PATCH' \| 'post' \| 'put' \| 'patch' | `post` | - |
| headers | 设置上传的请求头部，IE10 以上有效 | HttpRequestHeader | - | - |
| showUploadList | 是否展示文件列表, 可设为一个对象，用于单独设定 `extra`(5.20.0+), `showPreviewIcon`, `showRemoveIcon`, `showDownloadIcon`, `removeIcon` 和 `downloadIcon` | boolean \| ShowUploadListInterface<T> | true | `extra`: 5.20.0, `showPreviewIcon` function: 5.21.0, `showRemoveIcon` function: 5.21.0, `showDownloadIcon` function: 5.21.0 |
| multiple | 是否支持多选文件，`ie10+` 支持。开启后按住 ctrl 可选择多个文件 | boolean | false | - |
| accept | 接受上传的文件类型，详见 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | string \| AcceptConfig | - | - |
| beforeUpload | 上传文件之前的钩子，参数为上传的文件，若返回 `false` 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传（ resolve 传入 `File` 或 `Blob` 对象则上传 resolve 传入对象）；也可以返回 `Upload.LIST_IGNORE`，此时列表中将不展示此文件。 **注意：IE9 不支持该方法** | (     file: VcFile,     fileList: VcFile[],   ) => BeforeUploadValueType \| Promise<BeforeUploadValueType> | - | - |
| listType | 上传列表的内建样式，支持四种基本样式 `text`, `picture`, `picture-card` 和 `picture-circle` | UploadListType | `text` | `picture-circle`(5.2.0+) |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | UploadClassNamesType<T> | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | UploadStylesType<T> | - | - |
| rootClass | - | string | - | - |
| supportServerRender | - | boolean | - | - |
| disabled | 是否禁用 | boolean | false | 对于自定义 Upload children 时请将 disabled 属性同时传给 child node 确保 disabled 渲染效果保持一致 |
| prefixCls | - | string | - | - |
| customRequest | 通过覆盖默认的上传行为，可以自定义自己的上传实现 | (     options: VcCustomRequestOptions<T>,     info: {       /**        * @since 5.28.0        */       defaultRequest: (option: VcCustomRequestOptions<T>) => void     },   ) => void | - | defaultRequest: 5.28.0 |
| withCredentials | 上传请求时是否携带 cookie | boolean | false | - |
| openFileDialogOnClick | 点击打开文件对话框 | boolean | true | - |
| locale | - | UploadLocale | - | - |
| id | - | string | - | - |
| previewFile | 自定义文件预览逻辑 | PreviewFileHandler | - | - |
| iconRender | 自定义显示 icon | (file: UploadFile<T>, listType?: UploadListType) => any | - | - |
| isImageUrl | 自定义缩略图是否使用 &lt;img /> 标签进行显示 | (file: UploadFile<T>) => boolean | [(内部实现)](https://github.com/ant-design/ant-design/blob/4ad5830eecfb87471cd8ac588c5d992862b70770/components/upload/utils.tsx#L47-L68) | - |
| progress | 自定义进度条样式 | UploadListProgressProps | { strokeWidth: 2, showInfo: false } | 4.3.0 |
| itemRender | 自定义上传列表项 | ItemRender<T> | - | 4.16.0 |
| maxCount | 限制上传数量。当为 1 时，始终用最新上传的文件代替当前文件 | number | - | 4.10.0 |
| onRemove | 点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除 | (file: UploadFile<T>) => void \| boolean \| Promise<void \| boolean> | - | - |
| onPreview | 点击文件链接或预览图标时的回调 | (file: UploadFile<T>) => void | - | - |
| onDownload | 点击下载文件时的回调，如果没有指定，则默认跳转到文件 url 对应的标签页 | (file: UploadFile<T>) => void | (跳转新标签页) | - |
| capture | - | string \| boolean | - | - |
| hasControlInside | - | boolean | - | - |
| pastable | 是否支持粘贴文件 | boolean | false | 5.25.0 |
| height | - | number | - | - |

#### UploadList

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | UploadClassNamesType<T> | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | UploadStylesType<T> | - | - |
| listType | 上传列表的内建样式，支持四种基本样式 `text`, `picture`, `picture-card` 和 `picture-circle` | UploadListType | `text` | `picture-circle`(5.2.0+) |
| items | - | Array<UploadFile<T>> | - | - |
| progress | 自定义进度条样式 | UploadListProgressProps | { strokeWidth: 2, showInfo: false } | 4.3.0 |
| prefixCls | - | string | - | - |
| showRemoveIcon | - | boolean \| ((file: UploadFile<T>) => boolean) | - | - |
| showDownloadIcon | - | boolean \| ((file: UploadFile<T>) => boolean) | - | - |
| showPreviewIcon | - | boolean \| ((file: UploadFile<T>) => boolean) | - | - |
| removeIcon | - | any \| ((file: UploadFile<T>) => any) | - | - |
| downloadIcon | - | any \| ((file: UploadFile<T>) => any) | - | - |
| previewIcon | - | any \| ((file: UploadFile<T>) => any) | - | - |
| extra | - | any \| ((file: UploadFile<T>) => any) | - | - |
| locale | - | UploadLocale | - | - |
| previewFile | 自定义文件预览逻辑 | PreviewFileHandler | - | - |
| iconRender | 自定义显示 icon | (file: UploadFile<T>, listType?: UploadListType) => any | - | - |
| isImageUrl | 自定义缩略图是否使用 &lt;img /> 标签进行显示 | (file: UploadFile<T>) => boolean | [(内部实现)](https://github.com/ant-design/ant-design/blob/4ad5830eecfb87471cd8ac588c5d992862b70770/components/upload/utils.tsx#L47-L68) | - |
| appendAction | - | any | - | - |
| appendActionVisible | - | boolean | - | - |
| itemRender | 自定义上传列表项 | ItemRender<T> | - | 4.16.0 |
| disabled | 是否禁用 | boolean | false | 对于自定义 Upload children 时请将 disabled 属性同时传给 child node 确保 disabled 渲染效果保持一致 |
| onRemove | 点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除 | (file: UploadFile<T>) => void \| boolean | - | - |
| onPreview | 点击文件链接或预览图标时的回调 | (file: UploadFile<T>) => void | - | - |
| onDownload | 点击下载文件时的回调，如果没有指定，则默认跳转到文件 url 对应的标签页 | (file: UploadFile<T>) => void | (跳转新标签页) | - |

#### Upload

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| type | - | UploadType | - | - |
| name | 发到后台的文件参数名 | string | `file` | - |
| defaultFileList | 默认已经上传的文件列表 | Array<UploadFile<T>> | - | - |
| fileList | 已经上传的文件列表（受控），使用此参数时，如果遇到 `onChange` 只调用一次的问题，请参考 [#2423](https://github.com/ant-design/ant-design/issues/2423) | Array<UploadFile<T>> | - | - |
| action | 上传的地址 | string \| ((file: VcFile) => string) \| ((file: VcFile) => PromiseLike<string>) | - | - |
| directory | 支持上传文件夹（[caniuse](https://caniuse.com/#feat=input-file-directory)） | boolean | false | - |
| data | 上传所需额外参数或返回上传额外参数的方法 | \| Record<string, unknown>     \| ((file: UploadFile<T>) => Record<string, unknown> \| Promise<Record<string, unknown>>) | - | - |
| method | 上传请求的 http method | 'POST' \| 'PUT' \| 'PATCH' \| 'post' \| 'put' \| 'patch' | `post` | - |
| headers | 设置上传的请求头部，IE10 以上有效 | HttpRequestHeader | - | - |
| showUploadList | 是否展示文件列表, 可设为一个对象，用于单独设定 `extra`(5.20.0+), `showPreviewIcon`, `showRemoveIcon`, `showDownloadIcon`, `removeIcon` 和 `downloadIcon` | boolean \| ShowUploadListInterface<T> | true | `extra`: 5.20.0, `showPreviewIcon` function: 5.21.0, `showRemoveIcon` function: 5.21.0, `showDownloadIcon` function: 5.21.0 |
| multiple | 是否支持多选文件，`ie10+` 支持。开启后按住 ctrl 可选择多个文件 | boolean | false | - |
| accept | 接受上传的文件类型，详见 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | string \| AcceptConfig | - | - |
| beforeUpload | 上传文件之前的钩子，参数为上传的文件，若返回 `false` 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传（ resolve 传入 `File` 或 `Blob` 对象则上传 resolve 传入对象）；也可以返回 `Upload.LIST_IGNORE`，此时列表中将不展示此文件。 **注意：IE9 不支持该方法** | (     file: VcFile,     fileList: VcFile[],   ) => BeforeUploadValueType \| Promise<BeforeUploadValueType> | - | - |
| listType | 上传列表的内建样式，支持四种基本样式 `text`, `picture`, `picture-card` 和 `picture-circle` | UploadListType | `text` | `picture-circle`(5.2.0+) |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | UploadClassNamesType<T> | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | UploadStylesType<T> | - | - |
| rootClass | - | string | - | - |
| supportServerRender | - | boolean | - | - |
| disabled | 是否禁用 | boolean | false | 对于自定义 Upload children 时请将 disabled 属性同时传给 child node 确保 disabled 渲染效果保持一致 |
| prefixCls | - | string | - | - |
| customRequest | 通过覆盖默认的上传行为，可以自定义自己的上传实现 | (     options: VcCustomRequestOptions<T>,     info: {       /**        * @since 5.28.0        */       defaultRequest: (option: VcCustomRequestOptions<T>) => void     },   ) => void | - | defaultRequest: 5.28.0 |
| withCredentials | 上传请求时是否携带 cookie | boolean | false | - |
| openFileDialogOnClick | 点击打开文件对话框 | boolean | true | - |
| locale | - | UploadLocale | - | - |
| id | - | string | - | - |
| previewFile | 自定义文件预览逻辑 | PreviewFileHandler | - | - |
| iconRender | 自定义显示 icon | (file: UploadFile<T>, listType?: UploadListType) => any | - | - |
| isImageUrl | 自定义缩略图是否使用 &lt;img /> 标签进行显示 | (file: UploadFile<T>) => boolean | [(内部实现)](https://github.com/ant-design/ant-design/blob/4ad5830eecfb87471cd8ac588c5d992862b70770/components/upload/utils.tsx#L47-L68) | - |
| progress | 自定义进度条样式 | UploadListProgressProps | { strokeWidth: 2, showInfo: false } | 4.3.0 |
| itemRender | 自定义上传列表项 | ItemRender<T> | - | 4.16.0 |
| maxCount | 限制上传数量。当为 1 时，始终用最新上传的文件代替当前文件 | number | - | 4.10.0 |
| onRemove | 点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除 | (file: UploadFile<T>) => void \| boolean \| Promise<void \| boolean> | - | - |
| onPreview | 点击文件链接或预览图标时的回调 | (file: UploadFile<T>) => void | - | - |
| onDownload | 点击下载文件时的回调，如果没有指定，则默认跳转到文件 url 对应的标签页 | (file: UploadFile<T>) => void | (跳转新标签页) | - |
| capture | - | string \| boolean | - | - |
| hasControlInside | - | boolean | - | - |
| pastable | 是否支持粘贴文件 | boolean | false | 5.25.0 |

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| change | 上传文件改变时的回调，上传每个阶段都会触发该事件。详见 [onChange](#onchange) | (info: UploadChangeParam<UploadFile<T>>) => void | - |
| drop | 当文件被拖入上传区域时执行的回调功能 | (event: DragEvent) => void | 4.16.0 |
| update:fileList | - | (fileList: UploadFile<T>[]) => void | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| iconRender | 自定义显示 icon | (props: { file: UploadFile<T>, listType?: UploadListType }) => any | - |
| itemRender | 自定义上传列表项 | (props: {     originNode: any     file: UploadFile<T>     fileList: Array<UploadFile<T>>     actions: {       download: () => void       preview: () => void       remove: () => void     }   }) => any | 4.16.0 |

### 方法 {#methods}

| 方法 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| onBatchStart | - | VcUploadProps['onBatchStart'] | - |
| onSuccess | - | (response: any, file: VcFile, xhr: any) => void | - |
| onProgress | - | (e: { percent: number }, file: VcFile) => void | - |
| onError | - | (error: Error, response: any, file: VcFile) => void | - |
| fileList | - | UploadFile<T>[] | - |
| upload | - | any \| null | - |
| nativeElement | Get native element for wrapping upload | HTMLSpanElement \| null | - |