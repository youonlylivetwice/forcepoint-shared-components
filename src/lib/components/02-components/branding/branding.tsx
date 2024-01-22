import Link from 'next/link';

export type BrandingProps = {
  href?: string;
  src: string;
  alt: string;
  width?: string;
  height?: string;
};

export default function Branding({
  href = '/',
  alt,
  src,
  width,
  height,
  ...props
}: BrandingProps) {
  return (
    <Link href={href} {...props}>
      <img
        src={src}
        alt={`${alt}`}
        {...(width && { width })}
        {...(height && { height })}
      />
    </Link>
  );
}
