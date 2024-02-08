# Footer Menu Component API

The Footer Menu component API is designed for creating a customizable footer menu with optional submenus, responsive behavior and accessibility.

## Import

```jsx
import { FooterMenu } from 'forcepoint-shared-components';
```

## Props

The component accepts the following props for configuration:

| Name           | Type              | Default | Description                                                                                   |
|----------------|-------------------|---------|-----------------------------------------------------------------------------------------------|
| `items`        | `MenuItemProps[]` | `-`     | An array of objects describing each menu item, including any sub-menu items.                  |
| `linkComponent`| `ElementType`     | `'a'`   | Specifies the link node's element type. It accepts a string for a standard HTML `a` element or a custom component. For example, in a Next.js application, you can use `next/link` as the `Component` to integrate with Next.js's routing.|

## Menu Item Props

Each item in the `items` array accepts the following properties:

| Name           | Type              | Default | Description                                                                                   |
|----------------|-------------------|---------|-----------------------------------------------------------------------------------------------|
| `active`       | `boolean`         | `false` | Indicates if the menu item is currently active.                                               |
| `below`        | `MenuItemProps[]` | `-`     | Optional. An array of menu items for creating nested submenus.                                |
| `linkComponent`| `ElementType`     | `'a'`   | Specifies the element type for the link, supporting both standard `a` elements and custom components. |
| `title`        | `string`          | `-`     | The text displayed for the menu item.                                                         |
| `url`          | `string`          | `-`     | The URL the menu item links to.                                                               |

## Example Usage

```jsx
import Link from 'next/link'; // or any other routing library

const menuItems = [
  {
    title: 'Products',
    below: [
      {
        title: 'Zero Trust Network Access (ZTNA)',
        url: '#',
        active: true,
      },
      {
        title: 'FlexEdge Secure SD-WAN',
        url: '#',
      },
      {
        title: 'All Products',
        url: '#',
      },
    ],
  }
];

<FooterMenu items={menuItems} linkComponent={Link} />;
```