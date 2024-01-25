# Link Component API

The `Link` component interface provides flexible and customizable functionalities for creating links within the user interface.

## Import

```js
import { Link } from 'forcepoint-shared-components';
```

## Props
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| animated | `bool` | `false` | Adds animation to the link if set to `true`. |
| children | `node` | `-` | The content of the component. |
| className | `string` | `-` | Additional CSS classes to apply to the link. |
| color | `navy` \| `viola` \| `white` \| `sandwisp` | `navy` | Sets the color theme of the link. |
| component | `elementType` | `a` | The component used for the root node. Either a string to use an HTML element or a component. |
| disabled | `bool` | `false` | Disables the link if set to `true`. |
| endIcon | `node` | `-` | Content to be placed at the end of the link. |
| size | `small` \| `large` | `small` | Sets the size of the link. |
| startIcon | `node` | `-` | Content to be placed at the start of the link. |
| underline | `none` \| `hover` \| `always` | `none` | Specifies the underlining behavior of the link. Can be set to 'none', 'hover', or 'always'. |
| variant | `underline` \| `default` | `default` | Specifies the visual style of the link. |
