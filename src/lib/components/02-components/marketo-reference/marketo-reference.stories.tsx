import type { Meta, StoryObj } from '@storybook/react';
import MarketoReference from './marketo-reference';

const meta = {
  title: 'Components/Marketo Reference',
  component: MarketoReference,
  tags: ['autodocs'],
} satisfies Meta<typeof MarketoReference>;

export default meta;
type Story = StoryObj<typeof meta>;

const renderedForm = (
  <div className="h-3xl w-full bg-azure">
    <p className="text-center">External form</p>
  </div>
);

export const Default: Story = {
  args: {
    marketoForm: renderedForm,
    image: {
      src: 'https://s3-alpha-sig.figma.com/img/5c5a/5fe1/f5933be84d46d10d140685b72adc7a6a?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PtwQLu0urBuJTj4zJKijyMnLHKnnDO50WALlHZD7xxMECX64DB2Js6MmRTpTVrDyHlXiROtUSlHyPFe9m1L4CvO09EbrkhwIhot2m6PY9Au3f6TfcM8orK6-DzQqzSAhqWCVfeVkI5gG2ryDAUC6t3uoIf86CLq-raF~h3c~wnl4Ee~RnYovtEsKYC3dDuRWFWu42g3A2Hwl0wRwXcC3txzOF7l42FeKGifmO-EUvkBg80FpcIKG8CK7GHb3qMNHqyeDjr4TXUwbwMxVx~Xdh4M-XlnjGazknG1ndfT1HlumMvfWcuvwtpZASqhfCZlDSMOKejv6M6KH3~ooAo1S5g__',
      alt: 'image',
    },
    bgColor: 'azure',
    formStyle: 'aside_contained_image_overflow_top',
    contentClassName: 'mx-auto max-w-screen-xl',
  },
};
