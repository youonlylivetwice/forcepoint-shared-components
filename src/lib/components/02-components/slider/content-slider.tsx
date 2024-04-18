import { ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '../../../utils/tailwind-merge';
import Typography from '../../01-elements/typography/typography';
import { ContentSlideItemProps } from './content-slide-item';

export type ContentSliderProps = {
  sliderTitle?: string;
  sliderSubTitle?: string;
  theme?: 'light' | 'dark';
  alignment?: 'left' | 'right';
  sliderItems: ContentSlideItemProps[];
  SlideItemComponent: (props: ContentSlideItemProps) => ReactNode;
};

const activeTime = 10000;

export default function ContentSlider({
  sliderTitle,
  sliderSubTitle,
  sliderItems,
  theme = 'light',
  alignment = 'left',
  SlideItemComponent,
}: ContentSliderProps) {
  const [active, setActive] = useState<number>(0);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const timeoutRef = useRef<ReturnType<typeof setInterval> | null>(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    if (!isFocused) {
      timeoutRef.current = setTimeout(() => {
        setActive((prevIndex) =>
          prevIndex === sliderItems.length - 1 ? 0 : prevIndex + 1,
        );
      }, activeTime);
    }
    return () => {
      resetTimeout();
    };
  }, [active, isFocused, sliderItems.length]);
  return (
    <div
      className={cn('p-lg', {
        'bg-black': theme === 'dark',
      })}
    >
      {sliderTitle && (
        <Typography
          variant="display"
          component="h2"
          className={cn('mb-4 w-full font-bold', {
            'text-azure': theme === 'dark',
          })}
        >
          {sliderTitle}
        </Typography>
      )}

      {sliderSubTitle && (
        <Typography
          variant="h3"
          className={cn('mb-4 w-full font-bold', {
            'text-azure': theme === 'dark',
          })}
        >
          {sliderSubTitle}
        </Typography>
      )}
      <div className="grid w-full grid-cols-1 gap-[120px] sm:w-fit sm:grid-cols-2">
        <div className={cn({ 'col-start-2': alignment === 'right' })}>
          {sliderItems.map((item, index) => (
            <div
              key={index}
              onMouseOver={() => setIsFocused(true)}
              onMouseLeave={() => setIsFocused(false)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            >
              <SlideItemComponent
                {...item}
                theme={theme}
                isMouseOver={isFocused}
                active={active === index}
                onClick={() => setActive(index)}
              />
            </div>
          ))}
        </div>
        <div
          className={cn('hidden overflow-hidden sm:inline', {
            'col-start-1 row-start-1': alignment === 'right',
          })}
        >
          {sliderItems.map((item, index) => (
            <div
              key={index}
              className={cn(
                'relative top-0 h-full w-full transition-[opacity] duration-500 ease-in-out',
                active !== index ? 'h-0 opacity-0' : 'h-[100%] opacity-100',
              )}
            >
              {item.img}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
