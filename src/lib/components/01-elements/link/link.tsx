import clsx from 'clsx';
import { AnchorHTMLAttributes, ElementType, ReactNode } from 'react';

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  animated?: boolean;
  color?: 'navy' | 'viola' | 'white' | 'sandwisp';
  component?: ElementType;
  disabled?: boolean;
  endIcon?: ReactNode;
  size?: 'small' | 'large';
  startIcon?: ReactNode;
  underline?: 'none' | 'hover' | 'always';
};

const colorLinkSchema = {
  navy: 'text-navy hover:text-teal',
  sandwisp: 'text-white hover:text-sandwisp',
  viola: 'text-viola hover:text-teal',
  white: 'text-white hover:text-teal',
};

const sizeLinkSchema = {
  large: 'text-h4',
  small: 'text-h5',
};

export default function Link({
  animated,
  children,
  className,
  color = 'navy',
  component: Element = 'a',
  disabled,
  endIcon,
  size = 'small',
  startIcon,
  underline,
  ...props
}: LinkProps) {
  const renderIcon = (icon: ReactNode) => {
    return (
      <div
        className={clsx(
          'transform transition-transform duration-200 rtl:rotate-180',
          {
            'group-hover:translate-x-[0.25rem] rtl:group-hover:translate-x-[-0.25rem]':
              animated,
          },
        )}
      >
        {icon}
      </div>
    );
  };

  return (
    <Element
      className={clsx(
        'group inline-flex items-center gap-sm text-h4 font-bold',
        {
          'hover:underline hover:underline-offset-8': underline === 'hover',
          'underline underline-offset-8': underline === 'always',
          'pointer-events-none opacity-60': disabled,
          'cursor-pointer': !disabled,
        },
        colorLinkSchema[color],
        sizeLinkSchema[size],
        className,
      )}
      {...props}
    >
      {startIcon && renderIcon(startIcon)}
      {children}
      {endIcon && renderIcon(endIcon)}
    </Element>
  );
}
