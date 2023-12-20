import Icon from "../icon/icon";

export type LinkProps = {
  url: string;
  text: string;
  icon?: string;
  disabled?: boolean;
  iconPosition?: 'right' | 'left';
  variant?: 'underline' | 'default';
  size?: 'small' | 'medium' | 'large';
};

export default function Link({ text, url, icon, variant, iconPosition = 'right', disabled, ...props }: LinkProps) {
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

  const renderedIcon = () => {
    if (icon && icon !== 'none') {
      return <Icon name={icon} className="w-md h-md" />;
    }
  };

  const variantClasses = getVariantClasses();
  const conditionalClasses = getConditionalClasses();

  return (
    <a {...props} className={`inline-flex gap-sm items-center font-bold text-h4 ${variantClasses} ${conditionalClasses}`} href={url}>
      {iconPosition === 'left' && renderedIcon()}
      {text}
      {iconPosition === 'right' && renderedIcon()}
    </a>
  );
}
