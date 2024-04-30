import { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../../utils/tailwind-merge';

export interface ListProps extends ComponentPropsWithoutRef<'div'> {
  listTitle?: string | null;
  subtitle?: string | null;
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  multicol?: boolean;
}

export default function List({
  listTitle,
  subtitle,
  headingLevel: HeadingLevel = 'h2',
  multicol = false,
  children,
  ...props
}: ListProps) {
  const listWrapperClasses = cn('list-none', {
    'sm:grid group multicol': multicol,
    'sm:grid-cols-2':
      multicol && children instanceof Array && children?.length > 1,
    'md:grid-cols-3':
      multicol && children instanceof Array && children?.length > 2,
  });

  const titleClasses = cn('text-h2 sm:text-h1 font-semibold text-navy', {
    'mb-lg': !multicol,
  });

  return (
    <div {...props}>
      {subtitle && (
        <p className="mb-md text-h5 font-semibold uppercase text-violette">
          {subtitle}
        </p>
      )}
      {listTitle && (
        <HeadingLevel className={titleClasses}>{listTitle}</HeadingLevel>
      )}
      <ul className={listWrapperClasses}>{children}</ul>
    </div>
  );
}
