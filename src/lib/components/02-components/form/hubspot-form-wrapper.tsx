import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '../../../utils/tailwind-merge';
import Typography from '../../01-elements/typography/typography';

export type HubspotFormWrapperProps = ComponentPropsWithoutRef<'div'> & {
  headLine?: string | null;
  subHeadLine?: string | null;
  logo?: ReactNode;
  bgColor?: 'white' | 'navy' | 'blue' | 'azure' | 'black' | 'transparent';
  formType?: 'default' | 'sign-up' | 'demo-request' | 'hero-banner';
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
      className={cn('mb-[15px] font-semibold text-navy', 
        formType === 'hero-banner' ? 'font-light mb-[20px]' : 'font-semibold mb-[15px]',
        {
        'text-white': bgColor !== 'white' && bgColor !== 'azure',
      })}
    >
      {headLine}
    </Typography>
  );
  const renderedSubheadline = subHeadLine && (
    <Typography
      component="h4"
      variant={formType === 'sign-up' ? 'h3' : 'body-2'}
      className={cn('mb-md text-grey md:mb-[40px] ', {
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
        'px-md text-center',
        {
          'rounded-m shadow-3xl py-lg': formType !== 'hero-banner',
          'bg-white': bgColor === 'white',
          'bg-navy': bgColor === 'navy',
          'bg-blue': bgColor === 'blue',
          'bg-azure': bgColor === 'azure',
          'bg-black': bgColor === 'black',
          'bg-transparent': bgColor === 'transparent',
        },
        formType === 'hero-banner' ? 'bg-transparent' : '',
        className,
      )}>
      {logo}
      {renderedHeadline}
      {renderedSubheadline}
      {children}
    </div>
  );
}
