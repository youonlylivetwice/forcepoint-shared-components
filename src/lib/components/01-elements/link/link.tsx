import { AnchorHTMLAttributes, ElementType, ReactNode } from 'react';
import { cn } from '../../../utils/tailwind-merge';

export type LinkColorProps =
  | 'black'
  | 'navy'
  | 'blue'
  | 'sandwisp'
  | 'viola'
  | 'white'
  | 'inherit'
  | 'grey';

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  animated?: boolean;
  color?: LinkColorProps;
  component?: ElementType;
  disabled?: boolean;
  endIcon?: ReactNode;
  size?: 'small' | 'large';
  startIcon?: ReactNode;
  underline?: 'none' | 'hover' | 'always';
};

const colorLinkSchema: { [key in LinkColorProps]: string } = {
  black: 'text-black hover:text-blue',
  blue: 'text-blue hover:text-navy',
  grey: 'text-grey hover:text-teal',
  inherit: 'text-inherit',
  navy: 'text-navy hover:text-teal',
  sandwisp: 'text-sandwisp hover:text-white',
  viola: 'text-viola hover:text-teal',
  white: 'text-white hover:text-sandwisp',
};

const sizeLinkSchema = {
  large: 'text-h4',
  small: 'text-h5',
};

export default function Link({
  animated = false,
  color = 'blue',
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
    <span className="absolute inline-block transform rtl:[transform:rotateY(180deg)]">
      <i
        className={cn(
          'inline-block translate-x-[0.5rem] transition-transform duration-200 align-middle',
          {
            'group-hover/link:translate-x-[0.75rem]': animated,
          },
          sizeLinkSchema[size],
        )}
      >
        {icon}
      </i>
    </span>
  );

  return (
    <Element
      className={cn(
        'group/link link-icon relative inline-block items-center align-middle font-bold',
        {
          'hover:underline hover:underline-offset-8': underline === 'hover',
          'underline underline-offset-8': underline === 'always',
          'pointer-events-none opacity-60': disabled,
          'pl-md rtl:pl-0 rtl:pr-md': startIcon,
          'pr-md rtl:pl-md rtl:pr-0': endIcon,
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
