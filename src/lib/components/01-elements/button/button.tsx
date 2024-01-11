export type ButtonProps = {
  title?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  variant?: 'solid' | 'outline';
  size?: 'small' | 'medium' | 'large';
  color?: 'navy' | 'viola' | 'white' | 'sandwisp';
};

export default function Button({
  variant = 'solid',
  color = 'navy',
  title,
  size,
  children,
  ...props
}: ButtonProps) {
  const getFontSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'text-h5 px-md py-[0.5rem]';
      case 'large':
        return 'text-h4 px-lg py-[1rem]';
      default:
        return 'text-h5 px-lg py-sm';
    }
  };

  const getColorClasses = () => {
    switch (color) {
      case 'sandwisp':
        return variant === 'solid'
          ? 'bg-sandwisp text-black hover:text-white hover:bg-teal'
          : 'border-sandwisp border-2 text-white hover:border-teal';
      case 'white':
        return variant === 'solid'
          ? 'bg-white text-black hover:text-white hover:bg-teal'
          : 'border-white border-2 text-white hover:border-teal';
      case 'viola':
        return variant === 'solid'
          ? 'bg-viola text-white hover:bg-teal'
          : 'border-viola border-2 text-black hover:border-teal';
      default:
        return variant === 'solid'
          ? 'bg-navy text-white hover:bg-teal'
          : 'border-navy border-2 text-black hover:border-teal';
    }
  };

  const getConditionalClasses = () => {
    if (props.disabled) {
      return 'pointer-events-none';
    } else {
      return 'cursor-pointer';
    }
  };

  const colorClasses = getColorClasses();
  const fontSizeClasses = getFontSizeClasses();
  const conditionalClasses = getConditionalClasses();

  return (
    <button
      {...props}
      className={`inline-flex items-center gap-sm rounded-lg ${colorClasses} ${fontSizeClasses} ${conditionalClasses} disabled:opacity-60`}
    >
      {title || children}
    </button>
  );
}
