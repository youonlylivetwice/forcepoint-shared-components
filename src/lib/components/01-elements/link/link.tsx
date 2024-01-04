export type LinkProps = {
  url: string;
  text?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  size?: 'small' | 'default';
  variant?: 'underline' | 'default';
};

export default function Link({ text, size, url, variant, children, disabled, ...props }: LinkProps) {
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

  const getConditionalClasses = () => {
    if (disabled) {
      return 'text-black opacity-60 pointer-events-none';
    } else {
      return 'text-navy hover:text-teal cursor-pointer';
    }
  };

  const variantClasses = getVariantClasses();
  const fontSizeClasses = getFontSizeClasses();
  const conditionalClasses = getConditionalClasses();

  return (
    <a {...props} className={`inline-flex gap-sm items-center font-bold text-h4 ${variantClasses} ${conditionalClasses} ${fontSizeClasses}`} href={url}>
      {text || children}
    </a>
  );
}
