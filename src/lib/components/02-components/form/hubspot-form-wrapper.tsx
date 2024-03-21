import { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../../utils/tailwind-merge';
import Typography from '../../01-elements/typography/typography';

export type HubspotFormWrapperProps = ComponentPropsWithoutRef<'div'> & {
  headLine?: string | null;
  subHeadLine?: string | null;
};

export default function HubspotFormWrapper({
  headLine,
  subHeadLine,
  children,
  className,
  ...props
}: HubspotFormWrapperProps) {
  const renderedHeadline = headLine && (
    <Typography
      component="h3"
      variant="h2"
      className="mb-sm text-center font-semibold text-navy "
    >
      {headLine}
    </Typography>
  );
  const renderedSubheadline = subHeadLine && (
    <Typography
      component="h4"
      variant="body-2"
      className="mb-md text-center text-grey "
    >
      {subHeadLine}
    </Typography>
  );
  return (
    <div
      {...props}
      className={cn('rounded-m bg-white px-md py-lg sm:px-lg', className)}
    >
      {renderedHeadline}
      {renderedSubheadline}
      {children}
    </div>
  );
}
