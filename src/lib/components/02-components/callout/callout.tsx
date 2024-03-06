import { ElementType } from 'react';
import Button from '../../01-elements/button/button';
import Typography from '../../01-elements/typography/typography';
import { cn } from '../../../utils/tailwind-merge';
import ArrowRightIcon from '../../00-tokens/icons/arrow-right-icon';

export type CalloutImageDetails = {
  src: string;
  alt: string;
};

export type CalloutLinkDetails = {
  title: string;
  url: string;
};

export type CalloutProps = {
  color?: CalloutColorVariant;
  content: string;
  eyebrow: string;
  header: string;
  image: CalloutImageDetails;
  imageComponent?: ElementType;
  link: CalloutLinkDetails;
};

export type CalloutColorVariant = 'white' | 'black' | 'navy' | 'violette';

export type CalloutColorSchema = {
  button: 'navy' | 'viola' | 'white' | 'sandwisp' | 'blue';
  content: string;
  eyebrow: string;
  title: string;
  wrapper: string;
};

const colorSchema: { [key in CalloutColorVariant]: CalloutColorSchema } = {
  white: {
    button: 'blue',
    content: 'text-grey',
    eyebrow: 'text-violette',
    title: 'text-black',
    wrapper: 'bg-white',
  },
  black: {
    button: 'sandwisp',
    content: 'text-azure',
    eyebrow: 'text-sandwisp',
    title: 'text-white',
    wrapper: 'bg-black',
  },
  navy: {
    button: 'sandwisp',
    content: 'text-azure',
    eyebrow: 'text-sandwisp',
    title: 'text-white',
    wrapper: 'bg-black',
  },
  violette: {
    button: 'sandwisp',
    content: 'text-azure',
    eyebrow: 'text-sandwisp',
    title: 'text-white',
    wrapper: 'bg-black',
  },
};

export default function Callout({
  color = 'white',
  content,
  eyebrow,
  header,
  image,
  imageComponent: Element = 'img',
  link,
}: CalloutProps) {
  return (
    <div className={colorSchema[color].wrapper}>
      <div className="mx-auto flex max-w-screen-xl flex-col-reverse md:flex-row md:items-center md:gap-lg xl:gap-xl">
        {/* Image */}
        <Element
          className="aspect-video w-full object-cover object-top max-md:min-h-[284px] md:mx-auto md:aspect-square md:max-w-[480px]"
          src={image.src}
          alt={image.alt}
        />
        {/* Content */}
        <div className="flex flex-col gap-md p-lg">
          <span
            className={cn(
              'text-h5 font-semibold uppercase',
              colorSchema[color].eyebrow,
            )}
          >
            {eyebrow}
          </span>
          <Typography variant="display" className={colorSchema[color].title}>
            {header}
          </Typography>
          <Typography variant="body-2" className={colorSchema[color].content}>
            {content}
          </Typography>
          <Button
            animated
            as="link"
            href={link.url}
            endIcon={<ArrowRightIcon />}
            color={colorSchema[color].button}
            className="mt-md justify-center md:w-fit"
          >
            {link.title}
          </Button>
        </div>
      </div>
    </div>
  );
}
