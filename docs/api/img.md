# Image Component API

The Image component API is designed for rendering images.

## Import

```jsx
import { Img } from 'forcepoint-shared-components';
```

## Props

The component accepts the following props for configuration:

| Name | Type | Default | Description |
|---|---|---|---|
| `src` | `string` | `-` | Optional. A string with the path of the image to be rendered. |
| `alt` | `string` | `-` | Optional. A string for the alt tag of the image. |
| `description` | `string` | `-` | Optional. A string with the description of the image. |
| `bgColor` | `string` | `light` | Optional. Accepted values are `light` or `dark`. It will set the text color of the image caption. |
| `renderedImageComponent` | `ElementType` | `-` | Optional. Renders the image using an external component. |

## Usage

```jsx
import { Img } from 'forcepoint-shared-components';

<Img 
  src='./path/to/img'
  alt='String that describes the image'
  description='String that describes the image'
  bgColor='dark'
  renderedImageComponent={<SomeOtherImageComponent />} />

```
