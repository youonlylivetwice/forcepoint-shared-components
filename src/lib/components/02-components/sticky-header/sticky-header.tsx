import { ElementType } from 'react';
import Logo from '../../../assets/img/branding/logo-white.svg';
import { cn } from '../../../utils/tailwind-merge';
import Button, { ButtonColorVariant } from '../../01-elements/button/button';
import Typography from '../../01-elements/typography/typography';
import Branding from '../branding/branding';

export type StickyHeaderProps = {
  headerTitle?: string;
  headerCtas: HeaderCta[];
  showHeader: boolean;
  linkComponent?: ElementType;
  headerLogoAlt: string;
};

export type HeaderCta = {
  url: string;
  title: string;
  color?: ButtonColorVariant;
  component?: ElementType;
  modalId?: string;
};

export default function StickyHeader({
  headerTitle,
  headerCtas,
  showHeader = true,
  linkComponent = 'a',
  headerLogoAlt,
}: StickyHeaderProps) {
  const renderedCtas = headerCtas.map((cta, index) => {
    return (
      <Button
        key={index}
        animated
        as="link"
        href={cta.url}
        component={cta.component ?? linkComponent}
        modalId={cta.modalId}
        color={cta.color || 'white'}
        className="my-2.5"
        size="small">
        {cta.title}
      </Button>
    );
  });

  return (
    <header
      className={cn(
        'transition-top fixed -top-[100px] left-0 right-0 z-10 bg-black delay-0 duration-300 ease-in-out lg:z-20',
        {
          'top-[61px] lg:top-0': showHeader,
        },
      )}>
      <div className="flex items-center justify-center lg:mx-auto lg:max-w-screen-xl lg:justify-between lg:pr-lg">
        <div className="hidden lg:flex lg:items-center">
          {/* Sticky header logo variant */}
          <Branding
            className={'mr-lg w-[20px]'}
            alt={headerLogoAlt}
            linkComponent={linkComponent}
            src={Logo}
          />
          {/* Sticky header title */}
          {headerTitle && (
            <Typography
              component="h2"
              variant="h3"
              className="py-md font-semibold text-white">
              {headerTitle}
            </Typography>
          )}
        </div>
        <div className="flex gap-3">
          {/* CTAs */}
          {renderedCtas}
        </div>
      </div>
    </header>
  );
}
