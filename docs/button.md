# Button Component API

The Button component interface offers versatile functionalities for creating buttons within the user interface.

## Import

```js
import { Button } from 'forcepoint-shared-components';
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| as | `button` \| `link` | `button` | Determines the component's type. It defaults to `button` (can be sent or not) which does not support `href` attributes. To create a link styled as a button, use `as`: `link`. For further customization, the `component` argument overrides the default tag, enhancing flexibility in design and functionality. |
| animated | `bool` | `false` | Adds animation to the button if set to `true`. |
| children | `node` | `-` | The content of the button. |
| className | `string` | `-` | Additional CSS classes to apply to the button. |
| color | `navy` \| `viola` \| `white` \| `sandwisp` | `navy` | Sets the color theme of the button. |
| component | `elementType` | `button` | Specifies the root node's element type. It accepts a string for a standard HTML `a` element or a custom component. For example, in a Next.js application, you can use `next/link` as the `Component` to integrate with Next.js's routing. |
| disabled | `bool` | `false` | Disables the button if set to `true`. |
| endIcon | `node` | `-` | Content to be placed at the end of the button. |
| size | `small` \| `medium` \| `large` | `medium` | Sets the size of the button. |
| startIcon | `node` | `-` | Content to be placed at the start of the button. |
| variant | `solid` \| `outline` | `solid` | Specifies the visual style of the button. |

## Usage

```js
<Button color="viola" size="large" variant="outline" disabled={false}>
  Button label
</Button>
```
