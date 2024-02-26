import { AnchorHTMLAttributes, ElementType } from 'react';

export type BrandingProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  alt: string;
  height?: string;
  href?: string;
  linkComponent?: ElementType;
  locale?: string;
  src: string;
  width?: string;
};

export default function Branding({
  alt,
  linkComponent: Element = 'a',
  height,
  href = '/',
  src,
  width,
  ...props
}: BrandingProps) {
  return (
    <Element href={href} {...props}>
      <img
        className="w-full h-auto"
        src={src}
        alt={alt}
        {...(width && { width })}
        {...(height && { height })}
      />
    </Element>
  );
}
