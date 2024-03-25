# AccordionSlider Component API

The Button component interface offers versatile functionalities for creating buttons within the user interface.

## Import

```jsx
import { AccordionSlider } from 'forcepoint-shared-components';
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| sliderTitle | `-` | `string` | Optional. Will render the title of the slider. |
| sliderSubTitle | `-` | `string` | Optional. Will render the subtitle of the slider. |
| theme | 'light' | `string` | Will set the slider theme. Accepted values are `dark` or `light` |
| alignment | 'left' | `string` | Will decide which side the image will be rendered. Accepted values are `left` or `right` |
| accordionItems | `AccordionSliderItemProps` | `-` | Required. An array thal will display the slider content. |

### AccordionSliderItemProps

| Name | Type | Description |
| --- | --- | --- |
| title | `string` | Required. Title of the slide. |
| img | `string` | Required. Path to the image of the slide. |
| children | `ReactNode` | Required. Renders the content using an external component. |

```jsx
import { AccordionSlider } from 'forcepoint-shared-components';

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
<AccordionSlider 
  sliderTitle="Accordion title"
  sliderSubTitle="Accordion subtitle"
  theme="light"
  alignment="left"
  accordionItems={items} />
```
