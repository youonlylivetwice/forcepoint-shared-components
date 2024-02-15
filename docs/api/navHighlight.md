# CardNavHighlight Component API

The CardNavHighlight component is designed for creating navigation highlights with an emphasis on visual appeal. It offers customization options for a compelling user interface.

## Import

```jsx
import { CardNavHighlight } from 'your-components-library';
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| className | `string` | `-` | Additional CSS class to style the navigation highlight card. |
| ctaButton | `string` | `-` | Call-to-action button text for the card. |
| description | `string` | `-` | Brief description or content associated with the navigation highlight. |
| icon | `MenuItemImageProps` | `-` | Image properties for the icon displayed on the card. |
| iconOnHover | `MenuItemImageProps` | `-` | Image properties for the icon displayed on hover. |
| linkComponent | `ElementType` | `-` | Specifies the type of link node's element, such as a custom component. |
| size | `small` \| `large` | `large` | Specifies the size of link component |
| title | `string` | `-` | Main title or heading for the navigation highlight. |
| url | `string` | `-` | URL associated with the navigation highlight, used when a link is provided. |
