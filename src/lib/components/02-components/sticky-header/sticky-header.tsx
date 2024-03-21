import { ElementType } from "react";
import { cn } from "../../../utils/tailwind-merge";
import Button, { ButtonColorVariant } from "../../01-elements/button/button";
import Link from "../../01-elements/link/link";
import Typography from "../../01-elements/typography/typography";
import Branding from "../branding/branding";

const stickyHeaderLogo =
  'https://www.forcepoint.com/sites/all/themes/custom/fp/assets/img/logos/f-white.svg';

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
}

export default function StickyHeader({
  headerTitle,
  headerCtas,
  showHeader = true,
  linkComponent = 'a',
  headerLogoAlt,
}: StickyHeaderProps) {
  const ctas = headerCtas.map((cta, index) => {
    return (
      <Button
        key={index}
        animated
        as="link"
        href={cta.url}
        component={Link}
        color={cta.color || 'white'}
        className="my-2.5"
        size="small"
      >
        {cta.title}
      </Button>
    );
  });

  return (
    <header className={cn("bg-black fixed right-0 left-0 -top-[100px] z-10 lg:z-20 transition-top duration-300 ease-in-out delay-0", {
      "top-[61px] lg:top-0": showHeader
    })}>
      <div className="flex justify-center items-center lg:max-w-screen-xl lg:mx-auto lg:pr-lg lg:justify-between">
        <div className="hidden lg:flex lg:items-center">
          {/* Sticky header logo variant */}
          <Branding
            className={"w-[20px] mr-lg"}
            alt={headerLogoAlt}
            linkComponent={linkComponent}
            src={stickyHeaderLogo}
          />
          {/* Sticky header title */}
          {headerTitle && (
            <Typography
              component="h2"
              variant="h3"
              className="text-white font-semibold py-md">
              {headerTitle}
            </Typography>
          )}
        </div>
        <div className="flex gap-3">
          {/* CTAs */}
          {ctas}
        </div>
      </div>
    </header>
  );
}
