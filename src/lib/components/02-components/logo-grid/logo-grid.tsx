import { ElementType, useEffect, useState } from 'react';
import Button from '../../01-elements/button/button';
import { cn } from '../../../utils/tailwind-merge';

export type LogoInfo = {
  alt: string;
  src: string;
};

export type LogoGridProps = {
  imageComponent?: ElementType;
  items: LogoInfo[];
  showLessText?: string;
  showMoreText?: string;
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
  showLessText = 'Show less',
  showMoreText = 'Show more',
  subtitle,
  title,
}: LogoGridProps) {
  const [isMobile, setIsMobile] = useState<boolean>();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const maxElements = isMobile ? 10 : 30;

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 950;
      setIsMobile(isMobile);
    };

    window.addEventListener('resize', handleResize);
    setTimeout(handleResize, 100);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const displayItems = isExpanded ? items : items.slice(0, maxElements) || [];
  const columns: number = items?.length < 6 ? items?.length : 6;
  const heightExceeded = items?.length > maxElements;

  return (
    <div className="mx-auto my-md md:max-w-screen-lg">
      {(title || subtitle) && (
        <div className="my-md flex flex-col gap-md md:my-lg">
          {title && (
            <h2 className="text-center text-h3 font-light text-black md:text-h1">
              {title}
            </h2>
          )}
          {subtitle && (
            <h3 className="text-center text-h4 font-light text-grey md:text-h3">
              {subtitle}
            </h3>
          )}
        </div>
      )}
      <div className="relative">
        <ul
          className={cn(
            'mx-auto grid w-fit grid-cols-2',
            templateColumns[columns],
          )}
        >
          {!!displayItems?.length &&
            displayItems.map((item: LogoInfo, index: number) => (
              <li
                key={index}
                className="h-[100px] w-[170px] px-lg py-md sm:w-[200px]"
              >
                <Element
                  className="mx-auto h-full w-full object-contain"
                  src={item.src}
                  alt={item.alt}
                />
              </li>
            ))}
        </ul>
        {heightExceeded && !isExpanded && (
          <div className="absolute bottom-0 h-[70px] w-full bg-gradient-to-t from-white to-transparent"></div>
        )}
      </div>
      {heightExceeded && (
        <div className="mx-auto mt-md w-fit">
          <Button onClick={handleExpand}>
            {isExpanded ? showLessText : showMoreText}
          </Button>
        </div>
      )}
    </div>
  );
}
