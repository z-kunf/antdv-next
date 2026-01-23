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

上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。

- 当需要上传一个或一些文件时。
- 当需要展现上传的进度时。
- 当需要使用拖拽交互时。

## 示例 {#examples}

<demo-group>
  <demo src="./demo/basic.vue">点击上传</demo>
  <demo src="./demo/avatar.vue">用户头像</demo>
  <demo src="./demo/defaultFileList.vue">已上传的文件列表</demo>
  <demo src="./demo/picture-card.vue">照片墙</demo>
  <demo src="./demo/picture-circle.vue">圆形照片墙</demo>
  <demo src="./demo/fileList.vue">完全控制的上传列表</demo>
  <demo src="./demo/drag.vue">拖拽上传</demo>
  <demo src="./demo/paste.vue" version="5.25.0">粘贴上传</demo>
  <demo src="./demo/directory.vue">文件夹上传</demo>
  <demo src="./demo/upload-manually.vue">手动上传</demo>
  <demo src="./demo/upload-png-only.vue">只上传 png 图片</demo>
  <demo src="./demo/picture-style.vue">图片列表样式</demo>
  <demo src="./demo/preview-file.vue">自定义预览</demo>
  <demo src="./demo/max-count.vue">限制数量</demo>
  <demo src="./demo/transform-file.vue">上传前转换文件</demo>
  <demo src="./demo/upload-with-aliyun-oss.vue">阿里云 OSS</demo>
  <demo src="./demo/file-type.vue" debug>自定义显示 icon</demo>
  <demo src="./demo/upload-custom-action-icon.vue">自定义交互图标和文件信息</demo>
  <demo src="./demo/drag-sorting.vue">上传列表拖拽排序</demo>
  <demo src="./demo/crop-image.vue">上传前裁切图片</demo>
  <demo src="./demo/customize-progress-bar.vue">自定义进度条样式</demo>
  <demo src="./demo/style-class.vue" version="6.0.0">自定义语义结构的样式和类</demo>
  <demo src="./demo/component-token.vue" debug>组件 Token</demo>
</demo-group>

## API


通用属性参考：[通用属性](/docs/vue/common-props)

#### Dragger

### 属性 {#props}


| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| type | - | UploadType | - | - |
| name | 发到后台的文件参数名 | string | `file` | - |
| defaultFileList | 默认已经上传的文件列表 | Array&lt;UploadFile&lt;T&gt;&gt; | - | - |
| fileList | 已经上传的文件列表（受控），使用此参数时，如果遇到 `onChange` 只调用一次的问题，请参考 [#2423](https://github.com/ant-design/ant-design/issues/2423) | Array&lt;UploadFile&lt;T&gt;&gt; | - | - |
| action | 上传的地址 | string \| ((file: VcFile) =&gt; string) \| ((file: VcFile) =&gt; PromiseLike&lt;string&gt;) | - | - |
| directory | 支持上传文件夹（[caniuse](https://caniuse.com/#feat=input-file-directory)） | boolean | false | - |
| data | 上传所需额外参数或返回上传额外参数的方法 | \| Record&lt;string, unknown&gt;     \| ((file: UploadFile&lt;T&gt;) =&gt; Record&lt;string, unknown&gt; \| Promise&lt;Record&lt;string, unknown&gt;&gt;) | - | - |
| method | 上传请求的 http method | 'POST' \| 'PUT' \| 'PATCH' \| 'post' \| 'put' \| 'patch' | `post` | - |
| headers | 设置上传的请求头部，IE10 以上有效 | HttpRequestHeader | - | - |
| showUploadList | 是否展示文件列表, 可设为一个对象，用于单独设定 `extra`(5.20.0+), `showPreviewIcon`, `showRemoveIcon`, `showDownloadIcon`, `removeIcon` 和 `downloadIcon` | boolean \| ShowUploadListInterface&lt;T&gt; | true | - |
| multiple | 是否支持多选文件，`ie10+` 支持。开启后按住 ctrl 可选择多个文件 | boolean | false | - |
| accept | 接受上传的文件类型，详见 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | string \| AcceptConfig | - | - |
| beforeUpload | 上传文件之前的钩子，参数为上传的文件，若返回 `false` 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传（ resolve 传入 `File` 或 `Blob` 对象则上传 resolve 传入对象）；也可以返回 `Upload.LIST_IGNORE`，此时列表中将不展示此文件。 **注意：IE9 不支持该方法** | (     file: VcFile,     fileList: VcFile[],   ) =&gt; BeforeUploadValueType \| Promise&lt;BeforeUploadValueType&gt; | - | - |
| listType | 上传列表的内建样式，支持四种基本样式 `text`, `picture`, `picture-card` 和 `picture-circle` | UploadListType | `text` | - |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | UploadClassNamesType&lt;T&gt; | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | UploadStylesType&lt;T&gt; | - | - |
| rootClass | - | string | - | - |
| supportServerRender | - | boolean | - | - |
| disabled | 是否禁用 | boolean | false | - |
| prefixCls | - | string | - | - |
| customRequest | 通过覆盖默认的上传行为，可以自定义自己的上传实现 | (     options: VcCustomRequestOptions&lt;T&gt;,     info: &#123;       /**        * @since 5.28.0        */       defaultRequest: (option: VcCustomRequestOptions&lt;T&gt;) =&gt; void     &#125;,   ) =&gt; void | - | - |
| withCredentials | 上传请求时是否携带 cookie | boolean | false | - |
| openFileDialogOnClick | 点击打开文件对话框 | boolean | true | - |
| locale | - | UploadLocale | - | - |
| id | - | string | - | - |
| previewFile | 自定义文件预览逻辑 | PreviewFileHandler | - | - |
| iconRender | 自定义显示 icon | (file: UploadFile&lt;T&gt;, listType?: UploadListType) =&gt; any | - | - |
| isImageUrl | 自定义缩略图是否使用 &lt;img /&gt; 标签进行显示 | (file: UploadFile&lt;T&gt;) =&gt; boolean | [(内部实现)](https://github.com/ant-design/ant-design/blob/4ad5830eecfb87471cd8ac588c5d992862b70770/components/upload/utils.tsx#L47-L68) | - |
| progress | 自定义进度条样式 | UploadListProgressProps | &#123; strokeWidth: 2, showInfo: false &#125; | - |
| itemRender | 自定义上传列表项 | ItemRender&lt;T&gt; | - | - |
| maxCount | 限制上传数量。当为 1 时，始终用最新上传的文件代替当前文件 | number | - | - |
| onRemove | 点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除 | (file: UploadFile&lt;T&gt;) =&gt; void \| boolean \| Promise&lt;void \| boolean&gt; | - | - |
| onPreview | 点击文件链接或预览图标时的回调 | (file: UploadFile&lt;T&gt;) =&gt; void | - | - |
| onDownload | 点击下载文件时的回调，如果没有指定，则默认跳转到文件 url 对应的标签页 | (file: UploadFile&lt;T&gt;) =&gt; void | (跳转新标签页) | - |
| capture | - | string \| boolean | - | - |
| hasControlInside | - | boolean | - | - |
| pastable | 是否支持粘贴文件 | boolean | false | - |
| height | - | number | - | - |

#### UploadList

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | UploadClassNamesType&lt;T&gt; | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | UploadStylesType&lt;T&gt; | - | - |
| listType | 上传列表的内建样式，支持四种基本样式 `text`, `picture`, `picture-card` 和 `picture-circle` | UploadListType | `text` | - |
| items | - | Array&lt;UploadFile&lt;T&gt;&gt; | - | - |
| progress | 自定义进度条样式 | UploadListProgressProps | &#123; strokeWidth: 2, showInfo: false &#125; | - |
| prefixCls | - | string | - | - |
| showRemoveIcon | - | boolean \| ((file: UploadFile&lt;T&gt;) =&gt; boolean) | - | - |
| showDownloadIcon | - | boolean \| ((file: UploadFile&lt;T&gt;) =&gt; boolean) | - | - |
| showPreviewIcon | - | boolean \| ((file: UploadFile&lt;T&gt;) =&gt; boolean) | - | - |
| removeIcon | - | any \| ((file: UploadFile&lt;T&gt;) =&gt; any) | - | - |
| downloadIcon | - | any \| ((file: UploadFile&lt;T&gt;) =&gt; any) | - | - |
| previewIcon | - | any \| ((file: UploadFile&lt;T&gt;) =&gt; any) | - | - |
| extra | - | any \| ((file: UploadFile&lt;T&gt;) =&gt; any) | - | - |
| locale | - | UploadLocale | - | - |
| previewFile | 自定义文件预览逻辑 | PreviewFileHandler | - | - |
| iconRender | 自定义显示 icon | (file: UploadFile&lt;T&gt;, listType?: UploadListType) =&gt; any | - | - |
| isImageUrl | 自定义缩略图是否使用 &lt;img /&gt; 标签进行显示 | (file: UploadFile&lt;T&gt;) =&gt; boolean | [(内部实现)](https://github.com/ant-design/ant-design/blob/4ad5830eecfb87471cd8ac588c5d992862b70770/components/upload/utils.tsx#L47-L68) | - |
| appendAction | - | any | - | - |
| appendActionVisible | - | boolean | - | - |
| itemRender | 自定义上传列表项 | ItemRender&lt;T&gt; | - | - |
| disabled | 是否禁用 | boolean | false | - |
| onRemove | 点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除 | (file: UploadFile&lt;T&gt;) =&gt; void \| boolean | - | - |
| onPreview | 点击文件链接或预览图标时的回调 | (file: UploadFile&lt;T&gt;) =&gt; void | - | - |
| onDownload | 点击下载文件时的回调，如果没有指定，则默认跳转到文件 url 对应的标签页 | (file: UploadFile&lt;T&gt;) =&gt; void | (跳转新标签页) | - |

#### Upload

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| type | - | UploadType | - | - |
| name | 发到后台的文件参数名 | string | `file` | - |
| defaultFileList | 默认已经上传的文件列表 | Array&lt;UploadFile&lt;T&gt;&gt; | - | - |
| fileList | 已经上传的文件列表（受控），使用此参数时，如果遇到 `onChange` 只调用一次的问题，请参考 [#2423](https://github.com/ant-design/ant-design/issues/2423) | Array&lt;UploadFile&lt;T&gt;&gt; | - | - |
| action | 上传的地址 | string \| ((file: VcFile) =&gt; string) \| ((file: VcFile) =&gt; PromiseLike&lt;string&gt;) | - | - |
| directory | 支持上传文件夹（[caniuse](https://caniuse.com/#feat=input-file-directory)） | boolean | false | - |
| data | 上传所需额外参数或返回上传额外参数的方法 | \| Record&lt;string, unknown&gt;     \| ((file: UploadFile&lt;T&gt;) =&gt; Record&lt;string, unknown&gt; \| Promise&lt;Record&lt;string, unknown&gt;&gt;) | - | - |
| method | 上传请求的 http method | 'POST' \| 'PUT' \| 'PATCH' \| 'post' \| 'put' \| 'patch' | `post` | - |
| headers | 设置上传的请求头部，IE10 以上有效 | HttpRequestHeader | - | - |
| showUploadList | 是否展示文件列表, 可设为一个对象，用于单独设定 `extra`(5.20.0+), `showPreviewIcon`, `showRemoveIcon`, `showDownloadIcon`, `removeIcon` 和 `downloadIcon` | boolean \| ShowUploadListInterface&lt;T&gt; | true | - |
| multiple | 是否支持多选文件，`ie10+` 支持。开启后按住 ctrl 可选择多个文件 | boolean | false | - |
| accept | 接受上传的文件类型，详见 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | string \| AcceptConfig | - | - |
| beforeUpload | 上传文件之前的钩子，参数为上传的文件，若返回 `false` 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传（ resolve 传入 `File` 或 `Blob` 对象则上传 resolve 传入对象）；也可以返回 `Upload.LIST_IGNORE`，此时列表中将不展示此文件。 **注意：IE9 不支持该方法** | (     file: VcFile,     fileList: VcFile[],   ) =&gt; BeforeUploadValueType \| Promise&lt;BeforeUploadValueType&gt; | - | - |
| listType | 上传列表的内建样式，支持四种基本样式 `text`, `picture`, `picture-card` 和 `picture-circle` | UploadListType | `text` | - |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | UploadClassNamesType&lt;T&gt; | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | UploadStylesType&lt;T&gt; | - | - |
| rootClass | - | string | - | - |
| supportServerRender | - | boolean | - | - |
| disabled | 是否禁用 | boolean | false | - |
| prefixCls | - | string | - | - |
| customRequest | 通过覆盖默认的上传行为，可以自定义自己的上传实现 | (     options: VcCustomRequestOptions&lt;T&gt;,     info: &#123;       /**        * @since 5.28.0        */       defaultRequest: (option: VcCustomRequestOptions&lt;T&gt;) =&gt; void     &#125;,   ) =&gt; void | - | - |
| withCredentials | 上传请求时是否携带 cookie | boolean | false | - |
| openFileDialogOnClick | 点击打开文件对话框 | boolean | true | - |
| locale | - | UploadLocale | - | - |
| id | - | string | - | - |
| previewFile | 自定义文件预览逻辑 | PreviewFileHandler | - | - |
| iconRender | 自定义显示 icon | (file: UploadFile&lt;T&gt;, listType?: UploadListType) =&gt; any | - | - |
| isImageUrl | 自定义缩略图是否使用 &lt;img /&gt; 标签进行显示 | (file: UploadFile&lt;T&gt;) =&gt; boolean | [(内部实现)](https://github.com/ant-design/ant-design/blob/4ad5830eecfb87471cd8ac588c5d992862b70770/components/upload/utils.tsx#L47-L68) | - |
| progress | 自定义进度条样式 | UploadListProgressProps | &#123; strokeWidth: 2, showInfo: false &#125; | - |
| itemRender | 自定义上传列表项 | ItemRender&lt;T&gt; | - | - |
| maxCount | 限制上传数量。当为 1 时，始终用最新上传的文件代替当前文件 | number | - | - |
| onRemove | 点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除 | (file: UploadFile&lt;T&gt;) =&gt; void \| boolean \| Promise&lt;void \| boolean&gt; | - | - |
| onPreview | 点击文件链接或预览图标时的回调 | (file: UploadFile&lt;T&gt;) =&gt; void | - | - |
| onDownload | 点击下载文件时的回调，如果没有指定，则默认跳转到文件 url 对应的标签页 | (file: UploadFile&lt;T&gt;) =&gt; void | (跳转新标签页) | - |
| capture | - | string \| boolean | - | - |
| hasControlInside | - | boolean | - | - |
| pastable | 是否支持粘贴文件 | boolean | false | - |

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| change | 上传文件改变时的回调，上传每个阶段都会触发该事件。详见 [onChange](#onchange) | (info: UploadChangeParam&lt;UploadFile&lt;T&gt;&gt;) =&gt; void | - |
| drop | 当文件被拖入上传区域时执行的回调功能 | (event: DragEvent) =&gt; void | - |
| update:fileList | - | (fileList: UploadFile&lt;T&gt;[]) =&gt; void | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| iconRender | 自定义显示 icon | (props: &#123; file: UploadFile&lt;T&gt;, listType?: UploadListType &#125;) =&gt; any | - |
| itemRender | 自定义上传列表项 | (props: &#123;     originNode: any     file: UploadFile&lt;T&gt;     fileList: Array&lt;UploadFile&lt;T&gt;&gt;     actions: &#123;       download: () =&gt; void       preview: () =&gt; void       remove: () =&gt; void     &#125;   &#125;) =&gt; any | - |

### 方法 {#methods}

| 方法 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| onBatchStart | - | VcUploadProps['onBatchStart'] | - |
| onSuccess | - | (response: any, file: VcFile, xhr: any) =&gt; void | - |
| onProgress | - | (e: &#123; percent: number &#125;, file: VcFile) =&gt; void | - |
| onError | - | (error: Error, response: any, file: VcFile) =&gt; void | - |
| fileList | - | UploadFile&lt;T&gt;[] | - |
| upload | - | any \| null | - |
| nativeElement | Get native element for wrapping upload | HTMLSpanElement \| null | - |

## 接口 {#interface}

### VcFile {#vcfile}

继承自 [File](https://developer.mozilla.org/zh-CN/docs/Web/API/File)。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| uid | 唯一标识符，不设置时会自动生成 | string | - | - |
| lastModifiedDate | 上次修改文件的日期和时间 | date | - | - |

### UploadFile {#uploadfile}

继承自 [File](https://developer.mozilla.org/zh-CN/docs/Web/API/File)，附带额外属性用于渲染。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| crossorigin | CORS 属性设置 | `'anonymous'` \| `'use-credentials'` \| `''` | - | - |
| name | 文件名 | string | - | - |
| percent | 上传进度 | number | - | - |
| status | 上传状态，不同状态展示颜色也会有所不同 | `error` \| `done` \| `uploading` \| `removed` | - | - |
| thumbUrl | 缩略图地址 | string | - | - |
| uid | 唯一标识符，不设置时会自动生成 | string | - | - |
| url | 下载地址 | string | - | - |

### VcCustomRequestOptions {#request-options}

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| action | 上传的地址 | string | - | - |
| data | 上传所需额外参数或返回上传额外参数的方法 | Record&lt;string, unknown&gt; | - | - |
| filename | 文件名 | string | - | - |
| file | 文件信息 | UploadFile | - | - |
| withCredentials | 上传请求时是否携带 cookie | boolean | - | - |
| headers | 上传的请求头部 | Record&lt;string, string&gt; | - | - |
| method | 上传请求的 http method | string | - | - |
| onProgress | 上传进度回调 | (event: object, file: UploadFile) =&gt; void | - | - |
| onError | 上传失败回调 | (event: object, body?: object) =&gt; void | - | - |
| onSuccess | 上传成功回调 | (body: object, fileOrXhr?: UploadFile \| XMLHttpRequest) =&gt; void | - | - |

### onChange {#onchange}

> 💡 上传中、完成、失败都会调用这个函数。

文件状态改变的回调，返回为：

```ts
{
  file: { /* ... */ },
  fileList: [ /* ... */ ],
  event: { /* ... */ },
}
```

1. `file` 当前操作的文件对象。

   ```ts
   {
      uid: 'uid',      // 文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突
      name: 'xx.png',   // 文件名
      status: 'done' | 'uploading' | 'error' | 'removed' , //  beforeUpload 拦截的文件没有 status 状态属性
      response: '{"status": "success"}', // 服务端响应内容
      linkProps: '{"download": "image"}', // 下载链接额外的 HTML 属性
   }
   ```

2. `fileList` 当前的文件列表。

3. `event` 上传中的服务端响应内容，包含了上传进度等信息，高级浏览器支持。

### AcceptConfig {#acceptconfig}

```ts
{
  format: string;
  filter?: 'native' | ((file: VcFile) => boolean);
}
```

用于配置文件类型接受的规则对象。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| format | 接受的文件类型，与原生 input accept 属性相同，支持 MIME 类型、文件扩展名等格式。详见 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | string | - | - |
| filter | 文件过滤规则。设置为 `'native'` 时使用浏览器原生过滤行为；设置为函数时可以自定义过滤逻辑，函数返回 `true` 表示接受该文件，返回 `false` 表示拒绝 | `'native'` \| `(file: VcFile) =&gt; boolean` | - | - |

## 语义化 DOM {#semantic-dom}

| 名称 | 说明 |
| --- | --- |
| root | 根节点 |
| list | 上传列表节点 |
| item | 上传项节点 |

## 主题变量（Design Token）{#design-token}

<ComponentTokenTable component="Upload"></ComponentTokenTable>

查看 [定制主题](/docs/vue/customize-theme) 了解如何使用主题变量。

## FAQ

### 服务端如何实现？ {#faq-server-implement}

- 服务端上传接口实现可以参考 [jQuery-File-Upload](https://github.com/blueimp/jQuery-File-Upload/wiki#server-side)。
- 如果要做本地 mock 可以参考这个 [express 的例子](https://github.com/react-component/upload/blob/211979fdaa2c7896b6496df7061a0cfc0fc5434e/server.js)。

### 如何显示下载链接？ {#faq-show-download-link}

请使用 `fileList` 属性设置数组项的 `url` 属性进行展示控制。

### `customRequest` 怎么使用？ {#faq-custom-request}

请参考 <https://github.com/react-component/upload#customrequest>。

### 为何 `fileList` 受控时，上传不在列表中的文件不会触发 `onChange` 后续的 `status` 更新事件？ {#faq-filelist-controlled-status}

`onChange` 事件仅会作用于在列表中的文件，因而 `fileList` 不存在对应文件时后续事件会被忽略。请注意，在 `4.13.0` 版本之前受控状态存在 bug 导致不在列表中的文件也会触发。

### `onChange` 为什么有时候返回 File 有时候返回 `{ originFileObj: File }`？ {#faq-on-change-return-type}

历史原因，在 `beforeUpload` 返回 `false` 时，会返回 `File` 对象。在下个大版本我们会统一返回 `{ originFileObj: File }` 对象。当前版本已经兼容所有场景下 `info.file.originFileObj` 获取原 `File` 写法。你可以提前切换。

### 为何有时 Chrome 点击 Upload 无法弹出文件选择框？ {#faq-chrome-file-picker}

与 `antd` 无关，原生上传也会失败。请重启 `Chrome` 浏览器，让其完成升级工作。

<img alt="点击 Chrome 重启启动按钮" src="https://github.com/ant-design/ant-design/assets/507615/1509b25f-4cd3-41b2-9415-90394ad08273" width="800" />

相关 `issue`：

- [#48007](https://github.com/ant-design/ant-design/issues/48007)
- [#32672](https://github.com/ant-design/ant-design/issues/32672)
- [#32913](https://github.com/ant-design/ant-design/issues/32913)
- [#33988](https://github.com/ant-design/ant-design/issues/33988)

### 文件夹上传在 Safari 仍然可以选中文件? {#faq-safari-folder-upload}

组件内部是以 `directory`、`webkitdirectory` 属性控制 input 来实现文件夹选择的, 但似乎在 Safari 的实现中，[并不会阻止用户选择文件](https://stackoverflow.com/q/55649945/3040605)。可以通过 `accept` 配置来解决此问题，例如：

```ts
accept = {
  // 不允许选择任何文件
  format: `.${'n'.repeat(100)}`,
  // 当选择文件夹后，接受所有文件夹内的文件
  filter: () => true,
};
```
