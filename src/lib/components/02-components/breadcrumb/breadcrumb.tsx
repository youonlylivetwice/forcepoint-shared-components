import { ComponentPropsWithoutRef, ElementType } from 'react';
import { cn } from '../../../utils/tailwind-merge';

export interface BreadcrumbProps extends ComponentPropsWithoutRef<'nav'> {
  separator?: string;
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
  separator = ':',
  bgColor = 'azure',
  ariaLabel = 'Breadcrumb',
  linkComponent: LinkComponent = 'a',
  linkComponentProps,
  className,
  links,
  ...props
}: BreadcrumbProps) {
  const renderedItems = links?.map((link, index) => {
    let renderedLabel = `${link.label}${separator}`;
    // Remove separator from last item.
    if (index === links.length - 1) {
      renderedLabel = `${link.label}`;
    }
    return (
      <li
        key={`${index}-${link.label}`}
        className={cn('last:font-medium', {
          'hover:text-blue': bgColor === 'azure',
          'hover:text-sandwisp': bgColor === 'navy',
        })}
      >
        <LinkComponent {...linkComponentProps} href={link.url}>
          {renderedLabel}
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
        {renderedItems}
      </ol>
    </nav>
  );
}
