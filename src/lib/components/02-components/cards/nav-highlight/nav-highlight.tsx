import { ElementType } from 'react';
import { cn } from '../../../../utils/tailwind-merge';
import { ArrowRightIcon, ChevronRightIcon } from '../../../00-tokens/icons';
import Link from '../../../01-elements/link/link';
import { MenuItemImageProps } from '../../menus/main-menu/main-menu';

export type CardNavHighlightProps = {
  className?: string;
  ctaButton?: string;
  description?: string;
  icon?: MenuItemImageProps;
  iconOnHover?: MenuItemImageProps;
  linkComponent?: ElementType;
  size?: 'small' | 'large';
  title: string;
  url?: string;
  onClick?: () => void;
};

const cardStyles = {
  large: {
    content: 'p-lg gap-md',
    icon: 'right-0 absolute bottom-0 right-[-20%]',
    title: 'text-h1',
    wrap: 'max-w-none lg:max-w-[380px]',
  },
  small: {
    content: 'p-md gap-sm lg:gap-md',
    icon: 'w-[50px] h-[50px] lg:w-fit lg:h-fit my-auto ml-md right-0 lg:absolute lg:bottom-0 lg:right-[-20%]',
    title: 'text-h4 lg:text-h2',
    wrap: '',
  },
};

export default function CardNavHighlight({
  className,
  ctaButton,
  description,
  icon,
  iconOnHover,
  linkComponent: LinkComponent = 'a',
  size = 'large',
  title,
  url,
  ...props
}: CardNavHighlightProps) {
  return (
    <Link
      href={url}
      component={LinkComponent}
      className={'h-full w-full'}
      {...props}
    >
      <div
        className={cn(
          'group relative flex h-full w-full overflow-hidden rounded-m bg-gradient-to-tr from-violette-darker to-violette',
          cardStyles[size].wrap,
          className,
        )}
      >
        {/* Link icon */}
        {icon && (
          <div className={cardStyles[size].icon}>
            <img
              alt=""
              role="presentation"
              src={icon.media?.src}
              className={cn('block text-white', {
                'group-hover:hidden': iconOnHover,
              })}
            />
            {iconOnHover && (
              <img
                alt=""
                role="presentation"
                src={iconOnHover.media?.src}
                className="hidden text-white group-hover:block"
              />
            )}
          </div>
        )}
        {/* Link content */}
        <div
          className={cn(
            'flex flex-1 flex-col justify-between',
            cardStyles[size].content,
          )}
        >
          <div>
            <span
              className={cn(
                'mb-5 flex items-center gap-xs font-medium text-white',
                cardStyles[size].title,
              )}
            >
              {title}
              <ChevronRightIcon
                className={cn('sm:hidden', {
                  hidden: size === 'large',
                })}
              />
            </span>
            {description && (
              <span className="text-body-4 font-medium text-white">
                {description}
              </span>
            )}
          </div>
          {ctaButton && (
            <Link
              animated
              component="span"
              endIcon={<ArrowRightIcon />}
              className="ml-auto hidden text-[16px] font-normal !text-white rtl:ml-0 rtl:mr-auto sm:block"
            >
              {ctaButton}
            </Link>
          )}
        </div>
      </div>
    </Link>
  );
}
