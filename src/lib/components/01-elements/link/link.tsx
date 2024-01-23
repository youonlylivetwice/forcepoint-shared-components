import { ElementType, HtmlHTMLAttributes, ReactNode } from 'react';

export type LinkProps = HtmlHTMLAttributes<HTMLAnchorElement> & {
  disabled?: boolean;
  size?: 'small' | 'large';
  children?: ReactNode;
  variant?: 'underline' | 'default';
  color?: 'navy' | 'viola' | 'white' | 'sandwisp';
  href?: string;
  component?: ElementType;
};

const colorClasses = {
  navy: 'text-navy hover:text-teal',
  viola: 'text-viola hover:text-teal',
  white: 'text-white hover:text-teal',
  sandwisp: 'text-white hover:text-sandwisp',
};

const fontSizeClasses = {
  small: 'text-h5',
  large: 'text-h4',
};

export default function Link({
  variant = 'default',
  color = 'navy',
  size = 'small',
  children,
  disabled,
  component: Element = 'a',
  ...props
}: LinkProps) {
  const linkClasses = [
    'inline-flex items-center gap-sm text-h4 font-bold',
    variant === 'underline' ? 'underline underline-offset-8' : '',
    disabled ? 'opacity-60 pointer-events-none' : 'cursor-pointer',
    fontSizeClasses[size],
    colorClasses[color],
  ];

  return (
    <Element className={linkClasses.join(' ')} {...props}>
      {children}
    </Element>
  );
}
