---
category: Components
group: Data Display
title: Collapse
description: A content area which can be collapsed and expanded.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*B7HKR5OBe8gAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*sir-TK0HkWcAAAAAAAAAAAAADrJ8AQ/original
---

<DocHeading></DocHeading>

## When To Use {#when-to-use}

- Can be used to group or hide complex regions to keep the page clean.
- `Accordion` is a special kind of `Collapse`, which allows only one panel to be expanded at a time.

## Examples {#examples}

<demo-group>
  <demo src="./demo/basic.vue">Collapse</demo>
  <demo src="./demo/size.vue">Size</demo>
  <demo src="./demo/accordion.vue">Accordion</demo>
  <demo src="./demo/mix.vue">Nested panel</demo>
  <demo src="./demo/borderless.vue">Borderless</demo>
  <demo src="./demo/custom.vue">Custom Panel</demo>
  <demo src="./demo/noarrow.vue">No arrow</demo>
  <demo src="./demo/extra.vue">Extra node</demo>
  <demo src="./demo/ghost.vue">Ghost Collapse</demo>
  <demo src="./demo/collapsible.vue">Collapsible</demo>
  <demo src="./demo/style-class.vue">Custom semantic dom styling</demo>
</demo-group>

## API

### Property {#property}

Common props ref：[Common props](/docs/vue/common-props)

#### Collapse

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| activeKey | Key of the active panel | Array&lt;string \| number&gt; \| string \| number | No default value. In accordion mode, it's the key of the first panel | - |
| defaultActiveKey | Key of the initial active panel | Array&lt;string \| number&gt; \| string \| number | - | - |
| accordion | If true, Collapse renders as Accordion | boolean | false | - |
| destroyOnHidden | Destroy Inactive Panel | boolean | false | - |
| rootClass | Root container class | string | - | - |
| bordered | Toggles rendering of the border around the collapse block | boolean | true | - |
| prefixCls | - | string | - | - |
| expandIcon | Allow to customize collapse icon | (panelProps: PanelProps) =&gt; any | - | - |
| expandIconPlacement | Set expand icon placement | ExpandIconPlacement | `start` | - |
| ghost | Make the collapse borderless and its background transparent | boolean | false | - |
| size | Set the size of collapse | SizeType | `middle` | - |
| collapsible | Specify how to trigger Collapse. Either by clicking icon or by clicking any area in header or disable collapse functionality itself | CollapsibleType | - | - |
| labelRender | - | (params: &#123; item: CollapseItemType, index: number &#125;) =&gt; any | - | - |
| contentRender | - | (params: &#123; item: CollapseItemType, index: number &#125;) =&gt; any | - | - |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | CollapseClassNamesType | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | CollapseStylesType | - | - |
| items | Collapse items content | CollapseItemType[] | - | - |

#### ItemType {#itemtype}

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| classNames | Semantic structure class names | Record&lt;[SemanticDOM](#semantic-dom), string&gt; | - | - |
| collapsible | Specify whether the panel be collapsible or the trigger area of collapsible | CollapsibleType | - | - |
| content | Body area content | VueNode | - | - |
| extra | The extra element in the corner | VueNode | - | - |
| forceRender | Forced render of content on panel, instead of lazy rendering after clicking on header | boolean | false | - |
| key | Unique key identifying the panel from among its siblings | string \| number | - | - |
| label | Title of the panel | VueNode | - | - |
| showArrow | If false, panel will not show arrow icon. If false, collapsible can't be set as icon | boolean | true | - |
| styles | Semantic structure styles | Record&lt;[SemanticDOM](#semantic-dom), CSSProperties&gt; | - | - |

#### CollapsePanel {#collapsepanel}

Deprecated: when using items, prefer configuring panels with `items`.

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| key | - | string \| number | - | - |
| header | - | VueNode | - | - |
| showArrow | - | boolean | true | - |
| prefixCls | - | string | - | - |
| forceRender | - | boolean | false | - |
| id | - | string | - | - |
| extra | - | VueNode | - | - |
| collapsible | Specify how to trigger Collapse. Either by clicking icon or by clicking any area in header or disable collapse functionality itself | CollapsibleType | - | - |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| change | Callback function executed when active panel is changed | (key: string[]) =&gt; void | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| expandIcon | Allow to customize collapse icon | (panelProps: PanelProps) =&gt; any | - |
| labelRender | - | (params: &#123; item: CollapseItemType, index: number &#125;) =&gt; any | - |
| contentRender | - | (params: &#123; item: CollapseItemType, index: number &#125;) =&gt; any | - |

## Semantic DOM {#semantic-dom}

| Name | Description |
| --- | --- |
| root | Root element |
| header | Header element |
| title | Title element |
| body | Body element |
| icon | Icon element |

## Design Token {#design-token}

<ComponentTokenTable component="Collapse"></ComponentTokenTable>
