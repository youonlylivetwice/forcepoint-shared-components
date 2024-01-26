// Based on medium.com/@boucekdev/polymorphic-react-button-or-link-component-in-typescript-9230a8bf0cdf
import clsx from 'clsx';
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type DefaultProps = {
  animated?: boolean;
  color?: 'navy' | 'viola' | 'white' | 'sandwisp';
  endIcon?: ReactNode;
  size?: 'small' | 'medium' | 'large';
  startIcon?: ReactNode;
  variant?: 'solid' | 'outline';
};

export type ButtonProps = DefaultProps &
  (
    | (ButtonHTMLAttributes<HTMLButtonElement> & {
        component: 'button';
      })
    | (AnchorHTMLAttributes<HTMLAnchorElement> & {
        component: 'a';
      })
  );

const sizeButtonSchema = {
  large: 'text-h4 px-lg py-[1rem]',
  medium: 'text-h5 px-lg py-sm',
  small: 'text-h5 px-md py-[0.5rem]',
};

const colorButtonSchema = {
  sandwisp: {
    solid: 'bg-sandwisp text-black hover:text-white hover:bg-teal',
    outline: 'border-sandwisp border-2 text-white hover:border-teal',
  },
  white: {
    solid: 'bg-white text-black hover:text-white hover:bg-teal',
    outline: 'border-white border-2 text-white hover:border-teal',
  },
  viola: {
    solid: 'bg-viola text-white hover:bg-teal',
    outline: 'border-viola border-2 text-navy hover:border-teal',
  },
  navy: {
    solid: 'bg-navy text-white hover:bg-teal',
    outline: 'border-navy border-2 text-navy hover:border-teal',
  },
};

export default function Button({
  animated = false,
  color = 'navy',
  endIcon,
  size = 'medium',
  startIcon,
  variant = 'solid',
  children,
  className,
  ...props
}: ButtonProps) {
  function renderIcon(icon: ReactNode) {
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
  }

  const defaultClasses = clsx(
    'group inline-flex items-center gap-sm rounded-lg font-semibold',
    colorButtonSchema[color][variant],
    sizeButtonSchema[size],
    className,
  );

  if (props.component === 'a') {
    return (
      <a className={defaultClasses} {...props}>
        {startIcon && renderIcon(startIcon)}
        {children}
        {endIcon && renderIcon(endIcon)}
      </a>
    );
  }

  return (
    <button className={defaultClasses} {...props}>
      {startIcon && renderIcon(startIcon)}
      {children}
      {endIcon && renderIcon(endIcon)}
    </button>
  );
}
