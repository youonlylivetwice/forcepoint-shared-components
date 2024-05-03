# FeaturedResourceListItem Component API

The FeaturedResourceListItem component interface provides a structured and customizable list item layout for displaying featured resources within a list or section.

## Import

```js
import { FeaturedResourceListItem } from 'forcepoint-shared-components';
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| endIcon | `ReactNode` | `-` | Content to be placed at the end of the list item. |
| eyebrow | `string` | `-` | Text that appears as a small headline or label above the title, providing context for the item. |
| linkComponent | `ElementType` | `-` | Specifies the element type for the link. For example, you can use a custom component for routing. |
| sectionBgColor | `string` | `-` | The background color of the section containing this list item. |
| startIcon | `ReactNode` | `-` | Content to be placed at the start of the list item. |
| title | `string` | `-` | The main title or headline of the featured resource. |
| url | `string` | `-` | The URL that the list item links to when clicked. |


## Usage

```js
import { FeaturedResourceListItem } from 'forcepoint-shared-components';

const MyFeaturedResource = () => {
  return (
    <div style={{ backgroundColor: '#f9f9f9', padding: '20px' }}>
      <FeaturedResourceListItem
        eyebrow="Featured"
        title="Understanding React Hooks"
        url="/articles/react-hooks"
      />
      <FeaturedResourceListItem
        eyebrow="Trending"
        title="Building Responsive Websites"
        url="/articles/responsive-design"
      />
    </div>
  );
};
```
