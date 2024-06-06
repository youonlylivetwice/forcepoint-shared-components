# SocialShare Component API

The `SocialShare` component is designed for displaying a list of social media icons. It supports linkedin, twitter, and facebook.

## Import

```jsx
import { SocialShare } from 'forcepoint-shared-components';
```

## Props

The component accepts the following props for configuration:

| Name    | Type                | Description                                                     |
|---------|---------------------|-----------------------------------------------------------------|
| `url` | `string` | Sets the url of what's going to be shared. |
| `title` | `string`  | Sets the title of what's going to be shared. |
| `shareText` | `string`  | Sets aria label for each icon. |
| `className` | `string`  | Adds classes to the wrapper. |
| `ariaNavLabel` | `string`  | Sets `ariaNavLabel`. |
| `hasBackground` | `boolean`  | Default `true`. If `true` will, the icon will have a rounded grey rectangle as a background for each icon. |
| `iconColor` | `string`  | Default `text-gray`. Sets the color of the icons |
| `useSmallIcons` | `boolean`  | Default `false`. If `true`, icons will be set to 16px. |
| `horizontal` | `boolean`  | Default `false`. If `false`, icons stacks vertically on mobile. |


## Examples

```jsx
import { SocialShare } from 'forcepoint-shared-components';

<SocialShare
  url='https://www.example.com'
  title='Example Title'
  shareText='Share on'
  ariaNavLabel='Social media sharing'
 />
```

```jsx
import { SocialShare } from 'forcepoint-shared-components';

<SocialShare
  url='https://www.example.com'
  title='Example Title'
  shareText='Share on'
  ariaNavLabel='Social media sharing'
  iconColor='text-blue'
  hasBackground={false}
  useSmallIcons={true}
  horizontal={true}
 />
```
