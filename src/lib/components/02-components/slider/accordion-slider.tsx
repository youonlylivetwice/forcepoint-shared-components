import { useEffect, useState, ReactNode } from 'react';
import Typography from '../../01-elements/typography/typography';
import { cn } from '../../../utils/tailwind-merge';
import Link from '../../01-elements/link/link';
import ArrowRightIcon from '../../00-tokens/icons/arrow-right-icon';

type AccortionItemProps = {
  title: string;
  children: ReactNode;
  active: boolean;
  isMouseOver: boolean;
  theme: 'light' | 'dark';
  onClick: () => void;
  cta?: string;
  ctaLink?: string;
};

export type AccordionSliderItemProps = {
  title: string;
  img: ReactNode;
  children: ReactNode;
  cta?: string;
  ctaLink?: string;
};

export type AccordionSliderProps = {
  sliderTitle?: string;
  sliderSubTitle?: string;
  theme?: 'light' | 'dark';
  alignment?: 'left' | 'right';
  accordionItems: AccordionSliderItemProps[];
};

const activeTime = 10000;

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
      <div className="grid w-fit grid-cols-2  gap-[120px]">
        <div className={cn({ 'col-start-2': alignment === 'right' })}>
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
                cta={item.cta}
                ctaLink={item.ctaLink}
              >
                {item.children}
              </AccortionItem>
            </div>
          ))}
        </div>
        <div
          className={cn('hidden sm:inline', {
            'col-start-1 row-start-1': alignment === 'right',
          })}
        >
          {accordionItems.map((item, index) => (
            <div
              key={index}
              className={cn(
                'transition-[opacity] delay-100 duration-500 ease-in-out',
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

function AccortionItem({
  title,
  active,
  onClick,
  children,
  isMouseOver,
  theme,
  cta,
  ctaLink,
}: AccortionItemProps) {
  return (
    <div className="max-w-[480px]">
      {active && (
        <div className="relative my-4 h-1 w-full bg-brumosa">
          {!isMouseOver && (
            <div className="t-0 l-0 absolute h-1 animate-[progress-bar_10000ms_ease-in-out_1] bg-teal" />
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
        <div className={cn({ 'text-azure': theme === 'dark' })}>
          <div>{children}</div>
          {cta && (
            <div>
              <Link
                href={ctaLink}
                color={theme === 'dark' ? 'sandwisp' : 'blue'}
                size="small"
                endIcon={<ArrowRightIcon />}
                animated
                className="py-4"
              >
                {cta}
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
