import { ComponentPropsWithoutRef, ElementType } from 'react';
import useMediaQuery from '../../../hooks/use-media-query';
import { cn } from '../../../utils/tailwind-merge';
import { ChevronLeftIcon } from '../../00-tokens/icons';

export interface BreadcrumbProps extends ComponentPropsWithoutRef<'nav'> {
  ariaLabel?: string;
  bgColor?: 'azure' | 'navy';
  linkComponent?: ElementType;
  linkComponentProps?: Record<string, string | boolean>;
  links?: {
    label: string;
    url: string;
  }[];
}

export default function Breadcrumb({
  bgColor = 'azure',
  ariaLabel = 'Breadcrumb',
  linkComponent: LinkComponent = 'a',
  linkComponentProps,
  className,
  links,
  ...props
}: BreadcrumbProps) {
  const isMobile = useMediaQuery('(max-width: 46.875rem)');

  const renderedMobileItems = Array.isArray(links) && links.length && (
    <>
      <li key={`0-${links[0].label}`} className="flex items-baseline">
        <LinkComponent {...linkComponentProps} href={links[0].url}>
          <span className="sr-only">{links[0].label}</span>
          <ChevronLeftIcon
            className={cn({
              'hover:text-blue': bgColor === 'azure',
              'hover:text-sandwisp': bgColor === 'navy',
            })}
          />
        </LinkComponent>
      </li>
      <li
        key={`1-${links[links.length - 1].label}`}
        className={cn('last:font-medium', {
          'hover:text-blue': bgColor === 'azure',
          'hover:text-sandwisp': bgColor === 'navy',
        })}
      >
        <LinkComponent
          {...linkComponentProps}
          href={links[links.length - 1].url}
          aria-current="page"
        >
          {links[links.length - 1].label}
        </LinkComponent>
      </li>
    </>
  );

  const renderedDesktopItems = links?.map((link, index) => {
    let currentPage = false;
    if (index === links.length - 1) {
      currentPage = true;
    }
    return (
      <li
        key={`${index}-${link.label}`}
        className={cn({
          'hover:text-blue': bgColor === 'azure',
          'hover:text-sandwisp': bgColor === 'navy',
          'font-medium': currentPage,
          'after:content-[":"]': !currentPage
        })}
      >
        <LinkComponent
          {...linkComponentProps}
          href={link.url}
          aria-current={currentPage ? 'page' : null}
        >
          {link.label}
        </LinkComponent>
      </li>
    );
  });

  return (
    <nav
      aria-label={ariaLabel}
      className={cn(
        'text-sm flex gap-xs px-md py-[15px] ',
        {
          'bg-azure': bgColor === 'azure',
          'bg-navy': bgColor === 'navy',
        },
        className,
      )}
      {...props}
    >
      <ol
        className={cn('flex gap-sm text-[14px]', {
          'text-gray': bgColor === 'azure',
          'text-azure': bgColor === 'navy',
        })}
      >
        {isMobile ? renderedMobileItems : renderedDesktopItems}
      </ol>
    </nav>
  );
}
