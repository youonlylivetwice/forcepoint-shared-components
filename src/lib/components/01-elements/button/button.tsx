// Based on https://medium.com/@boucekdev/polymorphic-react-button-or-link-component-in-typescript-9230a8bf0cdf
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  ReactNode,
} from 'react';
import { cn } from '../../../utils/tailwind-merge';

type DefaultProps = {
  animated?: boolean;
  color?: 'blue' | 'white' | 'sandwisp';
  component?: ElementType;
  disabled?: boolean;
  endIcon?: ReactNode;
  size?: 'small' | 'medium' | 'large';
  startIcon?: ReactNode;
  variant?: 'solid' | 'outline';
};

export type ButtonProps = DefaultProps &
  (
    | (ButtonHTMLAttributes<HTMLButtonElement> & {
        as?: 'button';
      })
    | (AnchorHTMLAttributes<HTMLAnchorElement> & {
        as: 'link';
      })
  );

const sizeButtonSchema = {
  large: 'text-h4 px-lg py-[1rem]',
  medium: 'text-h5 px-lg py-sm',
  small: 'text-h5 px-md py-[0.5rem]',
};

const colorButtonSchema = {
  blue: {
    solid: 'bg-blue text-white hover:bg-navy',
    outline: 'border-blue border-2 text-blue hover:border-navy',
  },
  sandwisp: {
    solid: 'bg-sandwisp text-black hover:bg-white hover:text-blue',
    outline: 'border-sandwisp border-2 text-sandwisp hover:border-white',
  },
  white: {
    solid: 'bg-white text-blue hover:text-black hover:bg-sandwisp',
    outline: 'border-white border-2 text-white hover:border-sandwisp',
  },
};

export default function Button({
  animated = false,
  color = 'blue',
  component: Element = 'a',
  disabled = false,
  endIcon,
  size = 'medium',
  startIcon,
  variant = 'solid',
  children,
  className,
  ...props
}: ButtonProps) {
  const renderIcon = (icon: ReactNode) => (
    <div
      className={cn(
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

  const defaultClasses = cn(
    'group inline-flex items-center gap-sm rounded-lg font-semibold',
    {
      'pointer-events-none': disabled,
      'cursor-pointer': !disabled,
    },
    colorButtonSchema[color][variant],
    sizeButtonSchema[size],
    className,
  );

  if (props.as === 'button') {
    Element = 'button';
  }

  return (
    <Element className={defaultClasses} {...props}>
      {startIcon && renderIcon(startIcon)}
      {children}
      {endIcon && renderIcon(endIcon)}
    </Element>
  );
}
