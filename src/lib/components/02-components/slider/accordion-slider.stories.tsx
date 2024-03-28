import type { Meta, StoryObj } from '@storybook/react';
import AccordionSlider from './accordion-slider';
import Typography from '../../01-elements/typography/typography';

type ChilrenComponentProps = {
  content: string;
  img: string;
};

const ChilrenComponent = ({ content, img }: ChilrenComponentProps) => {
  return (
    <>
      <Typography variant="body-2">{content}</Typography>
      <img className="inline sm:hidden" src={img} alt="" />
    </>
  );
};

const accordionItems = [
  {
    img: <img src="https://placehold.co/600x400/FFFF33/000000/png" alt="" />,
    title: 'Accordion item 1',
    cta: 'Go somewhere',
    ctaLink: '#',
    children: ChilrenComponent({
      content:
        'Seamlessly extend Zero Trust to private applications in internal data centers and private clouds and limit user access to only the apps and data they need.',
      img: 'https://placehold.co/600x400/FFFF33/000000/png',
    }),
  },
  {
    img: <img src="https://placehold.co/600x400/FFFF33/000000/png" alt="" />,
    title: 'Accordion item 1',
    children: ChilrenComponent({
      content:
        'Seamlessly extend Zero Trust to private applications in internal data centers and private clouds and limit user access to only the apps and data they need.',
      img: 'https://placehold.co/600x400/FF33FF/000000/png',
    }),
  },
  {
    img: <img src="https://placehold.co/600x400/FFFF33/000000/png" alt="" />,
    title: 'Accordion item 1',
    children: ChilrenComponent({
      content:
        'Seamlessly extend Zero Trust to private applications in internal data centers and private clouds and limit user access to only the apps and data they need.',
      img: 'https://placehold.co/600x400/33FFFF/000000/png',
    }),
  },
];

const meta = {
  title: 'Components/Sliders/Accordion Slider',
  component: AccordionSlider,
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: ['light', 'dark'],
      },
    },
    alignment: {
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
    },
    sliderTitle: {
      control: { type: 'text' },
    },
    sliderSubTitle: {
      control: { type: 'text' },
    },
    accordionItems: {
      control: { type: 'array' },
    },
  },
} satisfies Meta<typeof AccordionSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sliderTitle: 'Accordion Slider',
    accordionItems: accordionItems,
  },
};

export const WithSubtitle: Story = {
  args: {
    sliderTitle: 'Accordion Slider',
    sliderSubTitle: 'Here goes a subtitle',
    accordionItems: accordionItems,
  },
};

export const ImagesOnTheRight: Story = {
  args: {
    sliderTitle: 'Accordion Slider',
    alignment: 'right',
    accordionItems: accordionItems,
  },
};

export const DarkTheme: Story = {
  args: {
    sliderTitle: 'Accordion Slider',
    sliderSubTitle: 'Here goes a subtitle',
    theme: 'dark',
    accordionItems: accordionItems,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
