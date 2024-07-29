# LogoGrid Component API

The LogoGrid component is designed to display a grid of logos, typically used to showcase a collection of brand logos or images. Below is the documentation for the LogoGrid component.

## Import

```javascript
import { LogoGrid } from 'forcepoint-shared-components';
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| imageComponent | `elementType` | `img` | Specifies the root node's element type for individual logos. It accepts a string for a standard HTML `img` element or a custom component. Defaults to `img` |
| items | `LogoInfo[]` | `-` | Required. An array of objects containing information about each logo. See the LogoInfo type for details. |
| title | `string` | `-` | Optional. A title for the LogoGrid, displayed above the logos. |
| subtitle | `string` | `-` | Optional. A subtitle for the LogoGrid, displayed below the title. |

## LogoInfo Type

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| alt | `string` | `-` | Required. Alternative text for the logo image. |
| src | `string` | `-` | Required. The source URL of the logo image. |
| height | `string` | `-` | Optional. The height of the image. If provided, it sets the `height` attribute on the image tag. |
| width | `string` | `-` | Optional. The width of the image. If provided, it sets the `width` attribute on the image tag. |

## Usage

Below is an example of how to use the `LogoGrid` component:

```jsx
import { LogoGrid } from 'forcepoint-shared-components';

const logos = [
  { alt: 'Brand 1', src: '/path-to-brand1-logo.png' },
  { alt: 'Brand 2', src: '/path-to-brand2-logo.png' },
  // Add more logos as needed
];

<LogoGrid
  items={logos}
  title="Figma ipsum component variant main layer. Scrolling flows."
  subtitle="Figma ipsum component variant main layer. Scrolling flows."
/>
```
