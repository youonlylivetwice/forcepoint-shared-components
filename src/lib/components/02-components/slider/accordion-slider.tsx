import { useEffect, useState, ReactNode } from 'react';
import Typography from '../../01-elements/typography/typography';
import { cn } from '../../../utils/tailwind-merge';

type AccortionItemProps = {
  title: string;
  children: ReactNode;
  active: boolean;
  isMouseOver: boolean;
  theme: 'light' | 'dark';
  onClick: () => void;
};

export type AccordionSliderItemProps = {
  title: string;
  img: string;
  children: ReactNode;
};

export type AccordionSliderProps = {
  sliderTitle?: string;
  sliderSubTitle?: string;
  theme?: 'light' | 'dark';
  alignment?: 'left' | 'right';
  accordionItems: AccordionSliderItemProps[];
};

export default function AccordionSlider({
  sliderTitle,
  sliderSubTitle,
  accordionItems,
  theme = 'light',
  alignment = 'left',
}: AccordionSliderProps) {
  const [active, setActive] = useState<number>(0);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const handleClick = (index: number) => {
    setActive(index);
  };
  const activeTime = 10000;

  useEffect(() => {
    if (!isFocused) {
      setTimeout(() => {
        if (active === accordionItems.length - 1) {
          setActive(0);
        } else {
          setActive(active + 1);
        }
      }, activeTime);
    }
  });
  return (
    <div>
      {sliderTitle && (
        <Typography
          variant="display"
          className={cn('mb-4 w-full font-bold', {
            'text-azure': theme === 'dark',
          })}
        >
          {sliderTitle}
        </Typography>
      )}

      {sliderSubTitle && (
        <Typography
          variant="h2"
          className={cn('mb-4 w-full font-bold', {
            'text-azure': theme === 'dark',
          })}
        >
          {sliderSubTitle}
        </Typography>
      )}
      <div
        className={cn('flex w-fit  gap-[120px]', {
          'flex-row-reverse': alignment === 'right',
        })}
      >
        <div>
          {accordionItems.map((item, index) => (
            <div
              key={index}
              onMouseOver={() => setIsFocused(true)}
              onMouseLeave={() => setIsFocused(false)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            >
              <AccortionItem
                title={item.title}
                theme={theme}
                active={active === index}
                isMouseOver={isFocused}
                onClick={() => handleClick(index)}
              >
                {item.children}
              </AccortionItem>
            </div>
          ))}
        </div>
        <div className="hidden sm:inline">
          {accordionItems.map((item, index) => (
            <img
              key={index}
              className={cn(
                'transition-[opacity] delay-100 duration-500 ease-in-out',
                active !== index ? 'h-0 opacity-0' : 'h-[100%] opacity-100',
              )}
              src={item.img}
              alt={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AccortionItem({
  title,
  active,
  onClick,
  children,
  isMouseOver,
  theme,
}: AccortionItemProps) {
  return (
    <div className="max-w-[480px]">
      {active && (
        <div className="relative my-4 h-1 w-full bg-brumosa">
          {!isMouseOver && (
            <div
              className={`t-0 l-0 absolute h-1 animate-[progress-bar_10000ms_ease-in-out_1] bg-teal`}
            />
          )}
        </div>
      )}
      <button
        className={cn('mt-4 w-full border-t-2 border-brumosa py-4 text-left', {
          'mt-0 border-none pt-0': active,
        })}
        onClick={() => onClick()}
      >
        <Typography
          variant="h3"
          className={cn(
            'mb-0 font-semibold',
            active ? 'text-navy' : 'text-grey',
            { 'text-azure': theme === 'dark' },
          )}
        >
          {title}
        </Typography>
      </button>

      {active && (
        <div className={cn({ 'text-azure': theme === 'dark' })}>{children}</div>
      )}
    </div>
  );
}
