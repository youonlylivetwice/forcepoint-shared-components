# SocialMenu Component API

The `SocialMenu` component is designed for displaying a list of social media icons, allowing users to navigate to various social media platforms. It leverages the `SocialMenuIcon` for rendering individual icons.

## Import

```jsx
import { SocialMenu } from 'forcepoint-shared-components';
```

## Props

The component accepts the following props for configuration:

| Name    | Type                | Description                                                     |
|---------|---------------------|-----------------------------------------------------------------|
| `items` | `SocialMenuItem[]`  | An array of objects describing each social media link.          |
| `menuLabel`        | `string` | The aria-label attribute for accessibility purposes             |

## SocialMenuItem Props

The `SocialMenuItem` object accepts the following props for configuration:

| Name        | Type                              | Description                                                          |
|-------------|-----------------------------------|----------------------------------------------------------------------|
| `linkProps` | `{ [key: string]: string; }`      | Optional. Additional props to pass to the link component.           |
| `title`     | `string`                          | The name of the social media platform.                               |
| `url`       | `string`                          | The URL to the social media profile.                                 |
| `icon`      | `'facebook' \| 'linkedin' \| 'twitter' \| 'rss' \| 'youtube'` | Icon to display for the link. |

## Examples

```jsx
import { SocialMenu } from 'forcepoint-shared-components';

const socialItems = [
  {
    title: 'Facebook',
    url: 'https://www.facebook.com',
    icon: 'facebook',
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com',
    icon: 'linkedin',
  },
];

<SocialMenu items={socialItems} />;
```



