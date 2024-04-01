import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '../../../utils/tailwind-merge';
import Typography from '../../01-elements/typography/typography';

export type HubspotFormWrapperProps = ComponentPropsWithoutRef<'div'> & {
  headLine?: string | null;
  subHeadLine?: string | null;
  logo?: ReactNode;
  bgColor?: 'white' | 'navy' | 'blue';
  formType?: 'default' | 'sign-up' | 'demo-request';
};

export default function HubspotFormWrapper({
  logo,
  headLine,
  subHeadLine,
  children,
  className,
  bgColor = 'white',
  formType = 'default',
  ...props
}: HubspotFormWrapperProps) {
  const renderedHeadline = headLine && (
    <Typography
      component="h3"
      variant="h2"
      className={cn('mb-sm font-semibold text-navy', {
        'text-white': bgColor !== 'white',
      })}
    >
      {headLine}
    </Typography>
  );
  const renderedSubheadline = subHeadLine && (
    <Typography
      component="h4"
      variant={formType === 'sign-up' ? 'h3' : 'body-2'}
      className={cn('mb-md text-grey ', {
        'text-azure': bgColor !== 'white',
      })}
    >
      {subHeadLine}
    </Typography>
  );
  return (
    <div
      {...props}
      className={cn(
        'rounded-m bg-white px-md py-lg text-center shadow-3xl',
        {
          'bg-white': bgColor === 'white',
          'bg-navy': bgColor === 'navy',
          'bg-blue': bgColor === 'blue',
        },
        className,
      )}
    >
      {logo}
      {renderedHeadline}
      {renderedSubheadline}
      {children}
    </div>
  );
}
