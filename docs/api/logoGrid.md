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
| subtitle | `string` | `-` | Optional. A subtitle or description for the LogoGrid, displayed above the logos. |
| title | `string` | `-` | Optional. A title for the LogoGrid, displayed above the subtitle and logos. |

## LogoInfo Type

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| alt | `string` | `-` | Required. Alternative text for the logo image. |
| src | `string` | `-` | Required. The source URL of the logo image. |

## Usage

Below is an example of how to use the `LogoGrid` component:

```jsx
import { LogoGrid } from 'tu-paquete-de-componentes';

const logos = [
  { alt: 'Brand 1', src: '/path-to-brand1-logo.png' },
  { alt: 'Brand 2', src: '/path-to-brand2-logo.png' },
  // Add more logos as needed
];

<LogoGrid
  items={logos}
  title="Our Partners"
  subtitle="Explore the brands we collaborate with."
/>
```
