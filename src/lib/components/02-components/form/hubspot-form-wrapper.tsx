import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '../../../utils/tailwind-merge';
import Typography from '../../01-elements/typography/typography';

export type HubspotFormWrapperProps = ComponentPropsWithoutRef<'div'> & {
  headLine?: string | null;
  subHeadLine?: string | null;
  logo?: ReactNode;
  bgColor?: 'white' | 'navy' | 'blue' | 'azure' | 'black' | 'blue_dotted' | 'transparent';
  formType?: 'default' | 'sign-up' | 'demo-request' | 'basic-hero-banner';
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
      component={formType === 'basic-hero-banner' ? 'h4' : 'h3'}
      variant={formType === 'basic-hero-banner' ? 'body-1' : 'h2'}
      className={cn('mb-[15px] text-navy', {
        'text-white': bgColor !== 'white' && bgColor !== 'azure',
        'font-semibold': formType !== 'basic-hero-banner' 
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
        'rounded-m px-md text-center shadow-3xl',
        {
          'bg-white': bgColor === 'white',
          'bg-navy': bgColor === 'navy',
          'bg-blue': bgColor === 'blue',
          'bg-azure': bgColor === 'azure',
          'bg-black': bgColor === 'black',
          'bg-transparent': bgColor === 'transparent' || formType === 'basic-hero-banner',
          'py-lg': formType !== 'basic-hero-banner'
        },
        className,
      )}>
      {logo}
      {renderedHeadline}
      {renderedSubheadline}
      {children}
    </div>
  );
}
