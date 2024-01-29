import { AnchorHTMLAttributes, ElementType } from 'react';

export type BrandingProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  alt: string;
  component?: ElementType;
  height?: string;
  href?: string;
  src: string;
  width?: string;
};

export default function Branding({
  alt,
  component: Element = 'a',
  height,
  href = '/',
  src,
  width,
  ...props
}: BrandingProps) {
  return (
    <Element href={href} {...props}>
      <img
        src={src}
        alt={`${alt}`}
        {...(width && { width })}
        {...(height && { height })}
      />
    </Element>
  );
}
