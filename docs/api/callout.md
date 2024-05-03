# Callout Component API

The Callout component is designed to create visually appealing callout sections with customizable colors and content. Below is the documentation for the Callout component.

## Import

```javascript
import { Callout } from 'forcepoint-shared-components';
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| color | `white` \| `black` \| `navy` \| `violette` | `white` | Optional. Specifies the color variant for the Callout component. |
| content | `string` | `-` | Optional. The main content of the Callout section. |
| eyebrow | `string` | `-` | Optional. The eyebrow text, providing additional context or emphasis. |
| header | `string` | `-` | Optional. The header text, serving as the main title of the Callout. |
| image | `CalloutImageDetails` | `-` | Optional. Details of the image to be displayed within the Callout. See the `CalloutImageDetails` type for details. |
| renderedImageComponent | `ReactNode` | - | Renders the image using and external component. |
| renderedContentComponent | `ReactNode` | - | Renders the content using and external component. |
| imageComponent | `ElementType` | `img` | Specifies the root node's element type for the image. It accepts a string for a standard HTML element or a custom component. Defaults to `img`. |
| link | `CalloutLinkDetails` | `-` | Required. Details of the link associated with the Callout. See the `CalloutLinkDetails` type for details. |

### CalloutImageDetails

| Name | Type | Description |
| --- | --- | --- |
| alt | `string` | Required. Alternative text for the image. |
| height | `string` | `-` | Optional. The height of the image. If provided, it sets the `height` attribute on the image tag. |
| src | `string` | Required. The source URL of the image. |
| width | `string` | `-` | Optional. The width of the image. If provided, it sets the `width` attribute on the image tag. |

### CalloutLinkDetails

| Name | Type | Description |
| --- | --- | --- |
| title | `string` | Required. The title of the link. |
| url | `string` | Required. The URL the link directs to. |

### Usage

```javascript
import { Callout } from 'forcepoint-shared-components';

<Callout
 color="black"
 content="Download the 2023 Gartner Market Guide for Data Loss Prevention. Learn the different  use cases and components of an industry-leading DLP solution."
  eyebrow="Eyebrow"
  header="See Why Forcepoint is a Leader in DLP"
  image={{src: "/path-to-image.png", alt: "Callout Image" }}
  link={{ title: "Secondary", url: "/" }}
/>;
```
