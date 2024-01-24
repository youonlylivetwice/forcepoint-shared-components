import { LinkProps as NextLinkProps } from 'next/link';
import React from 'react';

export type LinkProps = NextLinkProps & {
  component?: any;
  disabled?: boolean;
  className?: string;
  size?: 'small' | 'large';
  children?: React.ReactNode;
  variant?: 'underline' | 'default';
  color?:
    | 'navy'
    | 'viola'
    | 'white'
    | 'sandwisp'
    | 'grey'
    | 'black'
    | 'inherit';
};

const colorClasses = {
  navy: 'text-navy hover:text-teal',
  viola: 'text-viola hover:text-teal',
  white: 'text-white hover:text-teal',
  sandwisp: 'text-white hover:text-sandwisp',
  grey: 'text-grey hover:text-teal',
  black: 'text-black hover:text-teal',
  inherit: 'text-inherit',
};

const fontSizeClasses = {
  small: 'text-h5',
  large: 'text-h4',
};

export default function Link({
  variant = 'default',
  color = 'inherit',
  size = 'small',
  children,
  disabled,
  className,
  component: Element = 'a',
  ...props
}: LinkProps) {
  const linkClasses = [
    'inline-flex items-center gap-sm text-h4 font-bold',
    variant === 'underline' ? 'underline underline-offset-8' : '',
    disabled ? 'opacity-60 pointer-events-none' : 'cursor-pointer',
    colorClasses[color] || color,
    fontSizeClasses[size],
    className,
  ];

  return (
    <Element className={linkClasses.join(' ')} {...props}>
      {children}
    </Element>
  );
}
