# Main Menu Component API

The Main Menu component API provides a flexible and comprehensive set of options to effectively manage primary navigation within the user interface.

## Import

```jsx
import { MainMenu } from 'forcepoint-shared-components';
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| handlerCloseMenu | `() => void` | `-` | Function to handle the closing of the menu. |
| items | `MenuItemProps[]` | `-` | Array of menu items. |
| linkComponent | `elementType` | `a` | Specifies the link node's element type. It accepts a string for a standard HTML `a` element or a custom component. For example, in a Next.js application, you can use `next/link` as the `Component` to integrate with Next.js's routing. |
| menuLabel | `string` | `Main menu` | The aria-label attribute for accessibility purposes |

## Menu item props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| active | `boolean` | `false` | Indicates if the menu item is currently active. |
| alignment | `left_align` \| `right_align` | `-` | Specifies the alignment of the menu item. |
| below | `MenuItemProps[]` | `-` | Sub-menu items for a nested menu. |
| bgColor | `string` | `-` | Background color for the menu item. |
| bottomLink | `string` | `-` | The link associated with the bottom of the menu item. |
| className | `string` | `-` | Additional CSS class to style the menu item. |
| ctaButton | `string` | `-` | Call-to-action button text for the menu item. |
| description | `string` | `-` | Additional descriptive text for the menu item. |
| display | `label` \| `no_label` \| `label_small_arrow` \| `label_large_arrow` \| `heading` \| `heading_icon` \| `button` \| `button_with_arrow` \| `button_outline` \| `image_display` \| `image_with_content` \| `card` | `-` | Specifies the display type of the menu item. |
| icon | `MenuItemImageProps` | `-` | Additional CSS class to style the menu item. |
| iconOnHover | `MenuItemImageProps` | `-` | Image properties for the menu item icon on hover. |
| title | `string` | `-` | The display text for the menu item. |
| url | `string` | `-` | The URL associated with the menu item. |
| width | `full_width` \| `fifth_width` \| `quarter_width` \| `third_width` \| `half_width` \| `two_third_width` \| `three_quarter_width` \| `inline_width` | `-` | Specifies the width of the menu item. |

## Menu item image props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| src | `string` | `-` | Specifies the source (URL) for an image or icon associated with the menu item. |
| alt | `string` | `-` | Alternative text for the image specified in the src attribute. |
