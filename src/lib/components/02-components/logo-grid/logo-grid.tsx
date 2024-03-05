import { cn } from '../../../utils/tailwind-merge';
import { ElementType } from 'react';

export type LogoInfo = {
  alt: string;
  src: string;
};

export type LogoGridProps = {
  imageComponent?: ElementType;
  items: LogoInfo[];
  subtitle?: string;
  title?: string;
};

const templateColumns: Record<number, string> = {
  3: 'sm:grid-cols-3',
  4: 'sm:grid-cols-4',
  5: 'sm:grid-cols-4 lg:grid-cols-5',
  6: 'sm:grid-cols-4 lg:grid-cols-6',
};

export default function LogoGrid({
  imageComponent: Element = 'img',
  items,
  subtitle,
  title,
}: LogoGridProps) {
  const columns: number = items?.length < 6 ? items?.length : 6;

  const titleRendered = () => (
    <h2
      className={cn(
        'my-md text-center text-h3 font-light leading-none text-black md:my-lg md:text-h1',
        { 'md:mb-md': subtitle },
      )}
    >
      {title}
    </h2>
  );

  const subtitleRendered = () => (
    <h3 className="mb-md text-center text-h4 font-light leading-none text-grey md:mb-lg md:text-h3">
      {subtitle}
    </h3>
  );

  const renderLogoItem = (item: LogoInfo, index: number) => (
    <li key={index} className="h-[100px] w-[170px] px-lg py-md sm:w-[200px]">
      <Element
        className="mx-auto h-full w-full object-contain"
        src={item.src}
        alt={item.alt}
      />
    </li>
  );

  return (
    <div className="mx-auto my-md md:max-w-screen-lg">
      {title && titleRendered()}
      {subtitle && subtitleRendered()}
      <ul
        className={cn(
          'mx-auto grid w-fit grid-cols-2',
          templateColumns[columns],
        )}
      >
        {items?.length > 0 && items.map(renderLogoItem)}
      </ul>
    </div>
  );
}
