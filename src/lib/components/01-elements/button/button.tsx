import Icon from "../icon/icon";

export type ButtonProps = {
  text: string;
  icon?: string;
  disabled?: boolean;
  variant?: 'solid' | 'outline';
  iconPosition?: 'right' | 'left';
  size?: 'small' | 'medium' | 'large';
};

export default function Button({ text, variant, size, icon, iconPosition = 'right', ...props }: ButtonProps) {
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

  const getVariantClasses = () => {
    switch (variant) {
      case 'outline':
        return 'border-navy border-2 text-black hover:border-teal disabled:border-black disabled:opacity-60';
      default:
        return 'bg-navy text-white hover:bg-teal disabled:bg-black disabled:opacity-60';
    }
  };

  const getConditionalClasses = () => {
    if (props.disabled) {
      return 'cursor-not-allowed';
    } else {
      return 'cursor-pointer';
    }
  };

  const variantClasses = getVariantClasses();
  const fontSizeClasses = getFontSizeClasses();
  const conditionalClasses = getConditionalClasses();

  const renderedIcon = () => {
    if (icon && icon !== 'none') {
      return <Icon name={icon} className="w-sm h-sm" />;
    }
  };

  return (
    <button {...props} className={`inline-flex gap-sm items-center rounded-lg ${variantClasses} ${fontSizeClasses} ${conditionalClasses}`}>
      {iconPosition === 'left' && renderedIcon()}
      {text}
      {iconPosition === 'right' && renderedIcon()}
    </button>
  );
}
