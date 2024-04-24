import { ComponentPropsWithoutRef, ElementType } from 'react';
import { cn } from '../../../utils/tailwind-merge';

export interface BreadcrumbProps extends ComponentPropsWithoutRef<'nav'> {
  separator?: string;
  ariaLabel?: string;
  bgColor?: 'azure' | 'transparent';
  linkComponent?: ElementType;
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
  className,
  links,
  ...props
}: BreadcrumbProps) {
  const renderedItems = links?.map((link, index) => {
    if (index === links.length - 1) {
      return (
        <li key={index} className="font-medium hover:text-black">
          <LinkComponent aria-current="page" href={link.url}>
            {link.label}
          </LinkComponent>
        </li>
      );
    } else {
      return (
        <>
          <li key={index} className="hover:text-black">
            <LinkComponent href={link.url}>{link.label}</LinkComponent>
          </li>
          <li aria-hidden="true">{separator}</li>
        </>
      );
    }
  });

  return (
    <nav
      aria-label={ariaLabel}
      className={cn(
        'text-sm flex gap-xs px-md py-[15px] ',
        {
          'bg-azure': bgColor === 'azure',
        },
        className,
      )}
      {...props}
    >
      <ol className="flex gap-xs text-[14px] text-grey">{renderedItems}</ol>
    </nav>
  );
}
