# FeaturedResourceCard Component API

The FeaturedResourceCard component interface provides a structured and customizable card layout for highlighting featured resources within the user interface.

## Import

```js
import { FeaturedResourceCard } from 'forcepoint-shared-components';
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| buttonLabel | `string` | `-` | The label text for the optional button that accompanies the card. |
| image | `ResourceImageDetails` | `-` | Details of the image to be displayed within the card. |
| renderedImageComponent | `ReactNode` | `-` | A custom React component to render instead of the standard image. |
| title | `string` | `-` | The title or heading text for the featured resource. |
| url | `string` | `-` | The URL that the card links to when clicked. |

## ResourceImageDetails

| Name | Type | Description |
| --- | --- | --- |
| alt | `string` | Required. Alternative text for the image. |
| height | `string` | `-` | Optional. The height of the image. If provided, it sets the `height` attribute on the image tag. |
| src | `string` | Required. The source URL of the image. |
| width | `string` | `-` | Optional. The width of the image. If provided, it sets the `width` attribute on the image tag. |

## Usage

```js
import { FeaturedResourceCard } from 'forcepoint-shared-components';

const MyFeaturedResource = () => {
  const imageDetails = {
    src: '/path/to/image.jpg',
    alt: 'Featured Resource Image',
    width: 300,
    height: 200,
  };

  return (
    <FeaturedResourceCard
      title="Featured Article"
      image={imageDetails}
      buttonLabel="Read More"
      url="/articles/featured-article"
    />
  );
};
```
