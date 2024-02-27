# Branding Component API

The Branding component renders an image, typically used for logos or main identifiers of the website, wrapped in a link element.

## Import

```javascript
import { Branding } from 'forcepoint-shared-components';
```

## Props

| Name        | Type            | Default | Description                                                                                          |
| ----------- | --------------- | ------- | ---------------------------------------------------------------------------------------------------- |
| `alt`       | `string`        |         | Required. The alternative text for the image.                                                        |
| linkComponent | `elementType` | `a` | Specifies the root node's element type. It accepts a string for a standard HTML `a` element or a custom component by default it uses an `a`. For example, in a Next.js application, you can use `next/link` as the `Component` to integrate with Next.js's routing. |
| `height`    | `string`        |         | Optional. The height of the image. If provided, it sets the `height` attribute on the image tag.    |
| `href`      | `string`        | `'/'`   | The URL that the image links to. Defaults to the root directory.                                     |
| `src`       | `string`        |         | Required. The source URL of the image.                                                               |
| `width`     | `string`        |         | Optional. The width of the image. If provided, it sets the `width` attribute on the image tag.       |

## Usage

Below is an example of how to use the `Branding` component:

```jsx
<Branding
  alt="Logo"
  href="https://www.example.com"
  src="/path-to-your-logo.png"
  width="100"
  height="50"
/>
```

The above will render an image with the specified `src`, `alt`, `width`, and `height`, wrapped in an anchor tag linking to `https://www.example.com`.
