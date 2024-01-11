export type LinkProps = {
  url: string;
  text?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  size?: 'small' | 'default';
  variant?: 'underline' | 'default';
  color?: 'navy' | 'viola' | 'white' | 'sandwisp';
};

export default function Link({
  variant = 'default',
  color = 'navy',
  text,
  size,
  url,
  children,
  disabled,
  ...props
}: LinkProps) {
  const getFontSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'text-h5';
      default:
        return 'text-h4';
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'underline':
        return 'underline underline-offset-8';
      default:
        return '';
    }
  };

  const getColorClasses = () => {
    switch (color) {
      case 'sandwisp':
        return 'text-white hover:text-sandwisp';
      case 'white':
        return 'text-white hover:text-teal';
      case 'viola':
        return 'text-viola hover:text-teal';
      default:
        return 'text-navy hover:text-teal';
    }
  };

  const getConditionalClasses = () => {
    if (disabled) {
      return 'opacity-60 pointer-events-none';
    } else {
      return 'cursor-pointer';
    }
  };

  const colorClasses = getColorClasses();
  const variantClasses = getVariantClasses();
  const fontSizeClasses = getFontSizeClasses();
  const conditionalClasses = getConditionalClasses();

  return (
    <a
      className={`text-h4 inline-flex items-center gap-sm font-bold ${colorClasses} ${variantClasses} ${conditionalClasses} ${fontSizeClasses}`}
      href={url}
      {...props}
    >
      {text || children}
    </a>
  );
}
