import { AnchorHTMLAttributes, ElementType, ReactNode } from 'react';
import { cn } from '../../../utils/tailwind-merge';

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  animated?: boolean;
  color?:
    | 'navy'
    | 'viola'
    | 'white'
    | 'sandwisp'
    | 'grey'
    | 'black'
    | 'veridian'
    | 'inherit'
    | 'blue';
  component?: ElementType;
  disabled?: boolean;
  endIcon?: ReactNode;
  size?: 'small' | 'large';
  startIcon?: ReactNode;
  underline?: 'none' | 'hover' | 'always';
};

const colorLinkSchema = {
  navy: 'text-navy hover:text-teal group-hover:text-teal',
  sandwisp: 'text-white hover:text-sandwisp group-hover:text-sandwisp',
  viola: 'text-viola hover:text-teal group-hover:text-teal',
  white: 'text-white hover:text-teal group-hover:text-teal',
  grey: 'text-grey hover:text-teal group-hover:text-teal',
  black: 'text-black hover:text-teal group-hover:text-teal',
  blue: 'text-black hover:text-teal group-hover:text-teal',
  veridian: 'text-veridian hover:text-teal group-hover:text-teal',
  inherit: 'text-inherit',
};

const sizeLinkSchema = {
  large: 'text-h4',
  small: 'text-h5',
};

export default function Link({
  animated = false,
  color = 'navy',
  component: Element = 'a',
  disabled = false,
  endIcon,
  size = 'small',
  startIcon,
  underline = 'none',
  className,
  children,
  ...props
}: LinkProps) {
  const renderIcon = (icon: ReactNode) => (
    <span
      className={cn(
        'inline-block transform p-[3px] align-middle transition-transform duration-200 rtl:rotate-180',
        {
          'group-hover:translate-x-[0.25rem] rtl:group-hover:translate-x-[-0.25rem]':
            animated,
        },
      )}
    >
      {icon}
    </span>
  );

  return (
    <Element
      className={cn(
        'group inline-block items-center font-bold',
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
