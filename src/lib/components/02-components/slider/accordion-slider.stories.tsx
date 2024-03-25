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
    img: 'https://placehold.co/600x400/FFFF33/000000/png',
    title: 'Accordion item 1',
    children: ChilrenComponent({
      content:
        'Seamlessly extend Zero Trust to private applications in internal data centers and private clouds and limit user access to only the apps and data they need.',
      img: 'https://placehold.co/600x400/FFFF33/000000/png',
    }),
  },
  {
    img: 'https://placehold.co/600x400/FFFF33/000000/png',
    title: 'Accordion item 1',
    children: ChilrenComponent({
      content:
        'Seamlessly extend Zero Trust to private applications in internal data centers and private clouds and limit user access to only the apps and data they need.',
      img: 'https://placehold.co/600x400/FF33FF/000000/png',
    }),
  },
  {
    img: 'https://placehold.co/600x400/FFFF33/000000/png',
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
} satisfies Meta<typeof AccordionSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sliderTitle: 'Accordion Slider',
    accordionItems: accordionItems,
  },
};
