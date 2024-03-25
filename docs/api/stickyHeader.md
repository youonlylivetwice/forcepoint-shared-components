# Sticky Header API

The StickyHeader component interface allows you to create sticky headers within the user interface.

## Import

```js
import { StickyHeader } from 'forcepoint-shared-components';
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| headerTitle | `string` | `-` | The title of the header. |
| headerCtas | `array` | `-` | Array of CTAs. |
| showHeader | `bool` | `true` | Displays the header if set to `true`. |
| linkComponent | `elementType` | `a` | The component to use for the link. |
| headerLogoAlt | `string` | `-` | The alt text for the header logo. |

## HeaderCta

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| url | `string` | `-` | The URL of the CTA. |
| title | `string` | `-` | The title of the CTA. |
| color | `navy` \| `viola` \| `white` \| `sandwisp` | `white` | Sets the color theme of the CTA. |

## Usage

```js
<StickyHeader
  headerTitle="Figma ipsum component."
  headerCtas={[
    {
      url: '#',
      title: 'Figma ipsum component',
      color: 'navy',
    },
  ]}
  showHeader
  linkComponent="a"
  headerLogoAlt="Figma ipsum component variant main layer. Scrolling flows."
/>
```
