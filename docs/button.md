# Button Component API

The Button component interface offers versatile functionalities for creating buttons within the user interface.

## Import

```js
import { Button } from 'forcepoint-shared-components';
```

## Props
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| animated | `bool` | `false` | Adds animation to the button if set to `true`. |
| children | `node` | `-` | The content of the button. |
| className | `string` | `-` | Additional CSS classes to apply to the button. |
| color | `navy` \| `viola` \| `white` \| `sandwisp` | `navy` | Sets the color theme of the button. |
| component | `elementType` | `button` | The component used for the root node. Either a string to use an HTML element or a component. |
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
