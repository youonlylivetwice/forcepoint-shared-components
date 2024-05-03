# Breadcrumb API

The Breadcrumb API provides a flexible and comprehensive set of options for managing text content within the user interface.

## Import

```jsx
import { Breadcrumb } from 'forcepoint-shared-components';
```

## Props

| Name | Type | Default | Description |
|---|---|---|---|
| className | `string` | `-` | Additional CSS classes to apply to the Breadcrumb. |
| linkComponent | `elementType` | `a` | Specifies the link node's element type. It accepts a string for a standard HTML `a` element or a custom component. For example, in a Next.js application, you can use `next/link` as the `Component` to integrate with Next.js's routing. |
| links | `links[{}]` | `-` | Array of menu items. |

### Links

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| label | `string` | `-` | Specifies the label of the link |
| url | `string` | `-` | Specifies the URL of the link |
