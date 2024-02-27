# Secondary Menu Component API

The Secondary Menu component API provides a versatile and extensive range of options for efficiently handling secondary navigation within the user interface.

## Import

```jsx
import { SecondaryMenu } from 'forcepoint-shared-components';
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| handlerCloseMenu | `() => void` | `-` | Function to handle the closing of the menu. |
| isLanguageSwitcher | `boolean` | `false` | Indicates if the menu is used as a language switcher. |
| items | `MenuItemProps[]` | `-` | Array of menu items. |
| menuClass | `string` | `-` | CSS class to style the menu component. |
| onFooter   | `boolean`  | Optional. If true then the submenu would expand above the button which opens it  |

## Menu item props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| active | `boolean` | `false` | Indicates if the menu item is currently active. |
| below | `MenuItemProps[]` | `-` | Sub-menu items for a nested menu. |
| linkComponent | `elementType` | `a` | Specifies the link node's element type. It accepts a string for a standard HTML `a` element or a custom component. For example, in a Next.js application, you can use `next/link` as the `Component` to integrate with Next.js's routing. |
| title | `string` | `-` | The display text for the menu item. |
| url | `string` | `-` | The URL associated with the menu item. |
