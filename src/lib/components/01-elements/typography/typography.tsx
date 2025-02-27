import { ElementType, ReactNode } from 'react';
import { cn } from '../../../utils/tailwind-merge';

export type TypographyVariant =
  | 'colossus'
  | 'uber'
  | 'hero-1'
  | 'hero-2'
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body-1'
  | 'body-2'
  | 'body-3'
  | 'body-4'
  | 'body-5'
  | 'font-thin'
  | 'font-extralight'
  | 'font-light'
  | 'font-normal'
  | 'font-medium'
  | 'font-semibold'
  | 'font-bold'
  | 'font-extrabold'
  | 'font-thin italic'
  | 'font-extralight italic'
  | 'font-light italic'
  | 'font-normal italic'
  | 'font-medium italic'
  | 'font-semibold italic'
  | 'font-bold italic'
  | 'font-extrabold italic';

export type TypographyProps = {
  children: ReactNode;
  className?: string;
  component?: ElementType;
  variant?: TypographyVariant;
};

const variantTypographySchema: { [key in TypographyVariant]: string } = {
  // Only for special instances on the homepage.
  colossus: 'text-uber md:text-colossus',
  // Use for large graphical callouts.
  uber: 'text-hero-1 md:text-uber',
  // Use for product/use cases heros.
  'hero-1': 'text-hero-2 md:text-hero-1',
  // Use for landing page heros.
  'hero-2': 'text-display md:text-hero-2',
  // Use for large callouts.
  display: 'text-h1 md:text-display',
  // Headings.
  h1: 'text-h2 md:text-h1',
  h2: 'text-h3 md:text-h2',
  h3: 'text-h4 md:text-h3',
  h4: 'text-h5 md:text-h4',
  h5: 'text-h6 md:text-h5',
  h6: 'text-h6',
  // Body Text.
  'body-1': 'text-body-1',
  'body-2': 'text-body-2',
  'body-3': 'text-body-3',
  'body-4': 'text-body-4',
  'body-5': 'text-body-5',
  'font-thin': 'font-thin',
  'font-extralight': 'font-extralight',
  'font-light': 'font-light',
  'font-normal': 'font-normal',
  'font-medium': 'font-medium',
  'font-semibold': 'font-semibold',
  'font-bold': 'font-bold',
  'font-extrabold': 'font-extrabold',
  'font-thin italic': 'font-thin italic',
  'font-extralight italic': 'font-extralight italic',
  'font-light italic': 'font-light italic',
  'font-normal italic': 'font-normal italic',
  'font-medium italic': 'font-medium italic',
  'font-semibold italic': 'font-semibold italic',
  'font-bold italic': 'font-bold italic',
  'font-extrabold italic': 'font-extrabold italic',
};

export default function Typography({
  children,
  className,
  component: Element = 'p',
  variant = 'body-2',
  ...props
}: TypographyProps) {
  return (
    <Element
      className={cn(variantTypographySchema[variant], className)}
      {...props}
    >
      {children}
    </Element>
  );
}
