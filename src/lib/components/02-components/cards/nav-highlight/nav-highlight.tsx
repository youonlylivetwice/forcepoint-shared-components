import { cn } from '../../../../utils/tailwind-merge';
import { ElementType } from 'react';
import { MenuItemImageProps } from '../../menus/main-menu/main-menu';
import ArrowRightIcon from '../../../00-tokens/icons/arrow-right-icon';
import ChevronRightIcon from '../../../00-tokens/icons/chevron-right-icon';
import Link from '../../../01-elements/link/link';

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
};

const cardStyles = {
  large: {
    content: 'p-md gap-md lg:p-lg',
    icon: 'right-0 absolute bottom-0 right-[-20%]',
    title: 'text-h1 3xl:text-display',
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
}: CardNavHighlightProps) {
  return (
    <Link href={url} component={LinkComponent} className={'w-full'}>
      <div
        className={cn(
          'group relative flex w-full overflow-hidden rounded-m bg-gradient-to-tr from-violette-darker to-violette',
          cardStyles[size].wrap,
          className,
        )}
      >
        {/* Link icon */}
        {icon && (
          <div className={cardStyles[size].icon}>
            <img
              alt=""
              src={icon.src}
              role="presentation"
              className={cn('block text-white', {
                'group-hover:hidden': iconOnHover,
              })}
            />
            {iconOnHover && (
              <img
                src={iconOnHover.src}
                alt={iconOnHover.alt}
                className="hidden text-white group-hover:block"
              />
            )}
          </div>
        )}
        {/* Link content */}
        <div
          className={cn(
            'flex flex-1 flex-col justify-center lg:justify-normal',
            cardStyles[size].content,
          )}
        >
          <span
            className={cn(
              'flex items-center gap-xs font-medium text-white',
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
          {ctaButton && (
            <Link
              animated
              component="span"
              endIcon={<ArrowRightIcon />}
              className="hidden self-end font-normal !text-white sm:flex"
            >
              {ctaButton}
            </Link>
          )}
        </div>
      </div>
    </Link>
  );
}
