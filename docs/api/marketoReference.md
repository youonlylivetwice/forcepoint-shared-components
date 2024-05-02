# Marketo Reference Component API

The Marketo Reference component is designed to display Marketo forms with customizable styles and images. Below is the documentation for the Marketo Reference component.

## Import

```javascript
import { MarketoReference } from 'forcepoint-components';
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| marketoForm | `ReactNode` | `-` | Required. The Marketo form to be displayed. |
| image | `MarketoReferenceImageDetails` | `-` | Optional. Details of the image to be displayed alongside the form. See the `MarketoReferenceImageDetails` type for details. |
| renderedImageComponent | `ReactNode` | `-` | Optional. Renders the image using an external component. |
| bgColor | `azure` \| `black` \| `navy` \| `white` | `-` | Required. Specifies the background color of the component. |
| formStyle | `none` \| `aside_contained_image_overflow_top` \| `aside_form_image_as_background` \| `centered_form_image_as_background` \| `none` | `none` | Optional. Specifies the layout style for the component. |
| className | `string` | `-` | Optional. Additional CSS classes to apply to the component. |

### MarketoReferenceImageDetails

| Name | Type | Description |
| ----------- | ------------------ | ------------------------------------- |
| `alt` | `string` | Required. Alternative text for the image. |
| `height` | `string \| number` | Optional. The height of the image. |
| `src` | `string` | Required. The source URL of the image. |
| `width` | `string \| number` | Optional. The width of the image. |

## Usage

```jsx
import MarketoReference from 'forcepoint-components';

<MarketoReference
  marketoForm={renderedMarketoForm}
  image={{ src: "/path-to-image.png", alt: "Marketo Image" }}
  renderedImageComponent={renderedImageComponent}
  bgColor="navy"
  formStyle="aside_contained_image_overflow_top"
/>;
```