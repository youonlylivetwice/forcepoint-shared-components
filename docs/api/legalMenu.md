# Legal Menu Component API

The `Legal Menu` component is designed for displaying a list of links. It is used to display legal links such as Privacy Policy, Terms of Use, etc.

## Import

```jsx
import { LegalMenu } from 'forcepoint-shared-components';
```

## Props

The component accepts the following props for configuration:

| Name    | Type                | Description                                                     |
|---------|---------------------|-----------------------------------------------------------------|
| `items` | `LegalMenuItem[]`  | An array of objects width the data of each link.          |
| `menuLabel`        | `string` | The aria-label attribute for accessibility purposes             |
| `linkComponent` | `elementType` | Specifies the link node's element type. It accepts a string for a standard HTML `a` element or a custom component. For example, in a Next.js application, you can use `next/link` as the `Component` to integrate with Next.js's routing. |

## LegalMenuItem Props

The `LegalMenuItem` object accepts the following props for configuration:

| Name        | Type                              | Description                                                          |
|-------------|-----------------------------------|----------------------------------------------------------------------|
| `linkProps` | `{ [key: string]: string; }`      | Optional. Additional props to pass to the link component.           |
| `title`     | `string`                          | The name of the social media platform.                               |
| `url`       | `string`                          | The URL to the social media profile.                                 |

## Examples

```jsx
import { LegalMenu } from 'forcepoint-shared-components';

const menuItems = [
  {
    title: 'Terms & Conditions',
    url: '#',
  },
  {
    title: 'Legal and Privacy',
    url: '#',
  },
  {
    title: 'Manage Cookies',
    url: '#',
  },
  {
    title: '© 2024 Forcepoint',
    url: '#',
  },
];

<LegalMenu items={menuItems} />;
```



