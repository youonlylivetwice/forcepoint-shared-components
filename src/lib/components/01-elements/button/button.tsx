import { ElementType } from 'react';
import clsx from 'clsx';

export type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  color?: 'navy' | 'viola' | 'white' | 'sandwisp';
  component?: ElementType;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'solid' | 'outline';
};

const sizeButtonSchema = {
  small: 'text-h5 px-md py-[0.5rem]',
  medium: 'text-h5 px-lg py-sm',
  large: 'text-h4 px-lg py-[1rem]',
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
    outline: 'border-viola border-2 text-black hover:border-teal',
  },
  navy: {
    solid: 'bg-navy text-white hover:bg-teal',
    outline: 'border-navy border-2 text-black hover:border-teal',
  },
};

export default function Button({
  children,
  className,
  color = 'navy',
  component: Element = 'button',
  size = 'medium',
  variant = 'solid',
  ...props
}: ButtonProps) {
  return (
    <Element
      className={clsx(
        'inline-flex items-center gap-sm rounded-lg disabled:opacity-60',
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
      {children}
    </Element>
  );
}
