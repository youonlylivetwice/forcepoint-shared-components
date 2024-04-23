# ContentSlider Component API

The ContentSlider component interface will render a slider with an image on one side and a accordion that controls the slide on the other side.

## Import

```jsx
import { ContentSlider } from 'forcepoint-shared-components';
import { ContentSlideItem } from 'forcepoint-shared-components';
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| sliderTitle | `-` | `string` | Optional. Title of the slider. |
| sliderSubTitle | `-` | `string` | Optional. Subtitle of the slider. |
| theme | 'light' | `string` | Default value is `light`. This prop will set the slider theme. Accepted values are `dark` or `light` |
| alignment | 'left' | `string` | Default value is `left`. This prop will set which side the image will be rendered. Accepted values are `left` or `right` |
| sliderItems | `ContentSlideItemProps` | `-` | Required. An array thal will display the slider content. |
| SlideItemComponent | `ReactNode` | `-` | Required. Component that will render the slides. |

### ContentSliderItemProps

| Name | Type | Description |
| --- | --- | --- |
| title | `string` | Required. Title of the slide. |
| img | `ReactNode` | Required. An image component. |
| children | `ReactNode` | Required. This prop displays the content. |
| cta | `string` | Optional. This prop will set the text of the link. |
| ctaLink | `string` | Optional. This prop will set the url of the link. |
| active | `boolean` | Optional. Prop that will show or hide the content of the accordion. | 
| isMouseOver | `boolean` | Optional. Will stop the animation and auto slider if true. |
| theme | `string` | Default is `light`. String that can be `light` or `dark`. |




```jsx
import { ContentSlider } from 'forcepoint-shared-components';

const items = [
  {
    title: 'Slider 1 title';
    img: './path/to/first_image';
    children: <ContentComponent />;
  },
  {
    title: 'Slider 2 title';
    img: './path/to/secont_image';
    children: <ContentComponent />;
  }
]

<ContentSlider 
  sliderTitle="Accordion title"
  sliderSubTitle="Accordion subtitle"
  theme="light"
  alignment="left"
  SlideItemComponent={ContentSlideItem}
  sliderItems={items} />
```
