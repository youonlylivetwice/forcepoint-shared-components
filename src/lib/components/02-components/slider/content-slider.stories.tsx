import type { Meta, StoryObj } from '@storybook/react';
import ContentSlider from './content-slider';
import Typography from '../../01-elements/typography/typography';
import ContentSlideItem from './content-slide-item';

type ChilrenComponentProps = {
  content: string;
};

const ChilrenComponent = ({ content }: ChilrenComponentProps) => {
  return (
    <>
      <Typography variant="body-2">{content}</Typography>
    </>
  );
};

const sliderItems = [
  {
    img: <img src="https://placehold.co/600x400/FFFF33/000000/png" alt="" />,
    title: 'Accordion item 1',
    cta: 'Go somewhere',
    ctaLink: '#',
    children: ChilrenComponent({
      content:
        'Seamlessly extend Zero Trust to private applications in internal data centers and private clouds and limit user access to only the apps and data they need.',
    }),
  },
  {
    img: <img src="https://placehold.co/600x400/FF33FF/000000/png" alt="" />,
    title: 'Accordion item 2',
    children: ChilrenComponent({
      content:
        'Seamlessly extend Zero Trust to private applications in internal data centers and private clouds and limit user access to only the apps and data they need.',
    }),
  },
  {
    img: <img src="https://placehold.co/600x400/33FFFF/000000/png" alt="" />,
    title: 'Accordion item 3',
    children: ChilrenComponent({
      content:
        'Seamlessly extend Zero Trust to private applications in internal data centers and private clouds and limit user access to only the apps and data they need.',
    }),
  },
];

const meta = {
  title: 'Components/Sliders/Accordion Slider',
  component: ContentSlider,
  argTypes: {
    theme: {
      control: { type: 'text' },
    },
    alignment: {
      control: { type: 'text' },
    },
    sliderTitle: {
      control: { type: 'text' },
    },
    sliderSubTitle: {
      control: { type: 'text' },
    },
    sliderItems: {
      control: { type: 'array' },
    },
  },
} satisfies Meta<typeof ContentSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sliderTitle: 'Accordion Slider',
    sliderItems: sliderItems,
    theme: 'light',
    SlideItemComponent: ContentSlideItem,
  },
};

export const WithSubtitle: Story = {
  args: {
    sliderTitle: 'Accordion Slider',
    sliderSubTitle: 'Here goes a subtitle',
    sliderItems: sliderItems,
    theme: 'light',
    SlideItemComponent: ContentSlideItem,
  },
};

export const ImagesOnTheRight: Story = {
  args: {
    sliderTitle: 'Accordion Slider',
    alignment: 'right',
    sliderItems: sliderItems,
    theme: 'light',
    SlideItemComponent: ContentSlideItem,
  },
};

export const DarkTheme: Story = {
  args: {
    sliderTitle: 'Accordion Slider',
    sliderSubTitle: 'Here goes a subtitle',
    theme: 'dark',
    sliderItems: sliderItems,
    SlideItemComponent: ContentSlideItem,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
