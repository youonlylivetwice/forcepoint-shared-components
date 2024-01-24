import { AnchorHTMLAttributes, ElementType } from 'react';
import clsx from 'clsx';

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  disabled?: boolean;
  size?: 'small' | 'large';
  variant?: 'underline' | 'default';
  color?: 'navy' | 'viola' | 'white' | 'sandwisp';
  component?: ElementType;
};

const colorLinkSchema = {
  navy: 'text-navy hover:text-teal',
  viola: 'text-viola hover:text-teal',
  white: 'text-white hover:text-teal',
  sandwisp: 'text-white hover:text-sandwisp',
};

const sizeLinkSchema = {
  small: 'text-h5',
  large: 'text-h4',
};

export default function Link({
  variant = 'default',
  color = 'navy',
  size = 'small',
  children,
  disabled,
  className,
  component: Element = 'a',
  ...props
}: LinkProps) {
  return (
    <Element
      className={clsx(
        'inline-flex items-center gap-sm text-h4 font-bold',
        {
          'underline underline-offset-8': variant === 'underline',
          'pointer-events-none opacity-60': disabled,
          'cursor-pointer': !disabled,
        },
        colorLinkSchema[color],
        sizeLinkSchema[size],
        className,
      )}
      {...props}
    >
      {children}
    </Element>
  );
}
