import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '../../../utils/tailwind-merge';
import ArrowRightIcon from '../../00-tokens/icons/arrow-right-icon';
import ChevronDownIcon from '../../00-tokens/icons/chevron-down-icon';
import Link from '../../01-elements/link/link';
import Typography from '../../01-elements/typography/typography';

export type ContentSlideItemProps = ComponentPropsWithoutRef<'button'> & {
  title: string;
  active?: boolean;
  isMouseOver?: boolean;
  theme?: 'light' | 'dark';
  cta?: string;
  ctaLink?: string;
  img: ReactNode;
};

export default function ContentSlideItem({
  title,
  active,
  onClick,
  children,
  isMouseOver,
  theme,
  cta,
  ctaLink,
  img,
}: ContentSlideItemProps) {
  return (
    <div className="w-full sm:max-w-[480px]">
      <div
        className={cn(
          'relative my-4 h-1 w-full bg-brumosa',
          active ? 'visible' : 'hidden',
        )}
      >
        {!isMouseOver && (
          <div className="t-0 l-0 absolute h-1 animate-[progress-bar_10000ms_ease-in-out_1] bg-teal" />
        )}
      </div>
      <button
        className={cn(
          'align-center mt-4 flex w-full gap-[10px] border-t-2 border-brumosa py-4 text-left',
          {
            'mt-0 border-none pt-0': active,
          },
        )}
        onClick={(evt) => onClick && onClick(evt)}
      >
        <ChevronDownIcon
          className={cn(
            active ? 'rotate-180 stroke-teal' : 'stroke-grey',
            'transition-all',
          )}
        />
        <Typography
          variant="h3"
          component="span"
          className={cn(
            'mb-0 font-semibold',
            theme !== 'dark'
              ? active
                ? 'text-navy'
                : 'text-grey'
              : active
                ? 'text-white'
                : 'text-brumosa',
          )}
        >
          {title}
        </Typography>
      </button>

      <div
        className={cn(
          { 'text-azure': theme === 'dark' },
          active ? 'visible' : 'hidden',
        )}
      >
        <div className="py-5 sm:hidden">{img}</div>

        <div>{children}</div>
        {cta && (
          <div>
            <Link
              href={ctaLink}
              color={theme === 'dark' ? 'sandwisp' : 'blue'}
              endIcon={<ArrowRightIcon />}
              animated
              className="py-4 text-[19px]"
            >
              {cta}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
