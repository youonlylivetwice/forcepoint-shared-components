# CTA Banner Component API

The CTA (Call to Action) Banner component is designed to create prominent and customizable calls to action. Below is the documentation for the CTA Banner component.

## Import

```javascript
import { CtaBanner } from 'forcepoint-shared-components';
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| eyebrow | `string` | `-` | The eyebrow text of the call to action. |
| title | `string` | `-` | The main text of the call to action. |
| theme | `azure` \| `black` \| `navy` \| `white` | `-` | Additional theme for the CTA component. |
| renderedTitleComponent | `ReactNode` | - | Renders the title using and external component. |
| primaryButton | `CtaButtonDetails` | `-` | Details of the primary button associated with the call to action. See the `CtaButtonDetails` type for details. |
| buttonComponent | `ElementType` | `a` | Specifies the root node's element type for the primary button. It accepts a string for a standard HTML element or a custom component. Defaults to a (link). |
| image | `CtaImageDetails` | `-` | Details of the image to be displayed within the call to action. See the `CtaImageDetails` type for details. |
| renderedImageComponent | `ReactNode` | - | Renders the image using and external component. |
| backgroundImage | `CtaImageDetails` | `-` | Details of the background image to be displayed within the call to action. See the `CtaImageDetails` type for details. |
| imageComponent | `ElementType` | `img` | Specifies the root node's element type for the image. It accepts a string for a standard HTML element or a custom component. Defaults to `img`. |
| contentRight | `boolean` | `false` | Content will be aligned to the right. |



### CtaButtonDetails

| Name | Type | Description |
| --- | --- | --- |
| title | `string` | Required. The title of the link. |
| url | `string` | Required. The URL the link directs to. |

### CtaImageDetails

| Name | Type | Description |
| --- | --- | --- |
| src | `string` | Required. The source URL of the image. |
| alt | `string` | Required. Alternative text for the image. |
| height | `string\|number`  | Optional. The height of the image. If provided, it sets the `height` attribute on the image tag. |
| width | `string\|number` | Optional. The width of the image. If provided, it sets the `width` attribute on the image tag. |

### Usage

```javascript
import { CtaBanner } from 'forcepoint-shared-components';

<CtaBanner
  eyebrow={bannerEyebrow}
  renderedTitleComponent={renderedContent}
  primaryButton={buttonDetails}
  buttonComponent={Link}
  image={imageDetails}
  imageComponent={Image}
  backgroundImage={backgroundImageDetails}
  theme={ctaBannerStyle as CtaBannerTheme}
/>
```
