import React from 'react';

export type TypographyProps = {
  variant?: string;
  className?: string;
  children: React.ReactNode;
  tagName?: keyof JSX.IntrinsicElements;
};

export default function Typography({ tagName, variant, children, className, ...props }: TypographyProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'colossus':
        return 'text-uber md:text-colossus';
      case 'uber':
        return 'text-hero-1 md:text-uber';
      case 'hero-1':
        return 'text-hero-2 md:text-hero-1';
      case 'hero-2':
        return 'text-display md:text-hero-2';
      case 'display':
        return 'text-h1 md:text-display';
      case 'h1':
        return 'text-h2 md:text-h1';
      case 'h2':
        return 'text-h3 md:text-h2';
      case 'h3':
        return 'text-h4 md:text-h3';
      case 'h4':
        return 'text-h5 md:text-h4';
      case 'h5':
        return 'text-h6 md:text-h5';
      case 'h6':
        return 'text-h6';
      case 'body-1':
        return 'text-body-1';
      case 'body-3':
        return 'text-body-3';
      case 'body-4':
        return 'text-body-4';
      case 'body-5':
        return 'text-body-5';
      default:
        return 'text-body-2';
    }
  };

  const variantClasses = getVariantClasses();
  const Tag = tagName || 'p';

  return (
    <Tag className={`${variantClasses} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
