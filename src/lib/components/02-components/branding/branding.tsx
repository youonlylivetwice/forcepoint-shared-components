import Link from 'next/link';
import EmblemOne from '../../../assets/img/branding/emblem-one.svg';
import Emblem from '../../../assets/img/branding/emblem.svg';
import LogoOne from '../../../assets/img/branding/logo-one.svg';
import Logo from '../../../assets/img/branding/logo.svg';

export type BrandingProps = {
  href?: string;
  image?: 'Emblem' | 'EmblemOne' | 'Logo' | 'LogoOne';
  alt?: string;
};

const imageMap = {
  Emblem,
  EmblemOne,
  Logo,
  LogoOne,
};

export default function Branding({
  href = '/',
  image = 'Logo',
  alt = 'Home',
  ...props
}: BrandingProps) {
  const ImageToRender = imageMap[image];

  return (
    <Link href={href} {...props}>
      <img src={ImageToRender} alt={`${alt}`} />
    </Link>
  );
}
