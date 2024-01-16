import Link from 'next/link';

export type ButtonProps = {
  href?: string;
  title?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  variant?: 'solid' | 'outline';
  size?: 'small' | 'medium' | 'large';
  color?: 'navy' | 'viola' | 'white' | 'sandwisp';
};

const sizeClasses = {
  small: 'text-h5 px-md py-[0.5rem]',
  medium: 'text-h5 px-lg py-sm',
  large: 'text-h4 px-lg py-[1rem]',
};

const colorClassesSchema = {
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
  color = 'navy',
  size = 'medium',
  title,
  href,
  variant = 'solid',
  ...props
}: ButtonProps) {
  const buttonClasses = [
    'inline-flex items-center gap-sm rounded-lg disabled:opacity-60',
    props.disabled ? 'pointer-events-none' : 'cursor-pointer',
    colorClassesSchema[color]?.[variant],
    sizeClasses[size],
  ];
  const commonClasses = buttonClasses.join(' ');

  if (href) {
    return (
      <Link className={commonClasses} href={href} {...props}>
        {title || children}
      </Link>
    );
  } else {
    return (
      <button className={commonClasses} {...props}>
        {title || children}
      </button>
    );
  }
}
