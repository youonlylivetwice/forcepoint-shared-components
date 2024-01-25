import { AnchorHTMLAttributes, ElementType } from 'react';
import clsx from 'clsx';

export type ButtonProps = (
  | AnchorHTMLAttributes<HTMLButtonElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>
) & {
  animated?: boolean;
  children?: React.ReactNode;
  className?: string;
  color?: 'navy' | 'viola' | 'white' | 'sandwisp';
  component?: ElementType;
  disabled?: boolean;
  endIcon?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  startIcon?: React.ReactNode;
  variant?: 'solid' | 'outline';
};

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
  animated,
  children,
  className,
  color = 'navy',
  component: Element = 'button',
  endIcon,
  size = 'medium',
  startIcon,
  variant = 'solid',
  ...props
}: ButtonProps) {
  const renderIcon = (icon: React.ReactNode) => {
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
        'group inline-flex items-center gap-sm rounded-lg font-semibold',
        {
          'pointer-events-none': props.disabled,
          'cursor-pointer': !props.disabled,
        },
        colorButtonSchema[color][variant],
        sizeButtonSchema[size],
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
