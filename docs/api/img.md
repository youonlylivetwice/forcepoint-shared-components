# Image Component API

The Image component API is designed for rendering images.

## Import

```jsx
import { Img } from 'forcepoint-shared-components';
```

src: string;
  description: string;
  bgColor?: 'dark' | 'light';
  renderedImageComponent?: ReactNode;

## Props

The component accepts the following props for configuration:

| Name | Type | Default | Description |
|---|---|---|---|
| `src` | `string` | `-` | Required. A string with the path of the image to be rendered.                  |
| `description` | `string` | `-` | Required. A string with the description of the image. It will be used in the caption and on the alt tag of the image.                  |
| `bgColor` | `string` | `light` | Optional. Accepted values are `light` or `dark`. It will set the text color of the image caption. |
| `renderedImageComponent` | `ElementType` | `-` | Optional. Renders the image using an external component. |

## Usage

```jsx
import { Img } from 'forcepoint-shared-components';

<Img 
  src='./path/to/img'
  description='String to describe image'
  theme='dark' />

```
