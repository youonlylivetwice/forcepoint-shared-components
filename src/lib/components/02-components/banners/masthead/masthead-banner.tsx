import { ElementType } from "react";
import { cn } from "../../../../utils/tailwind-merge";
import ArrowRightIcon from "../../../00-tokens/icons/arrow-right-icon";
import CloseIcon from "../../../00-tokens/icons/close-icon";
import Link from "../../../01-elements/link/link";
import Typography from "../../../01-elements/typography/typography";

export type BannerProps = {
  id: string;
  title: string;
  linkDetails?: BannerLinkProps;
  linkComponent?: ElementType;
  backgroundColor: BannerBackgroundColor;
  isCloseable: boolean;
}

export type BannerBackgroundColor = 'azure' | 'violette' | 'black' | 'navy';

export type BannerLinkProps = {
  title: string;
  url: string;
}

export type MastheadBannerProps = BannerProps & {
  handleClose: (event: React.MouseEvent, id: string) => void;
}

export const MastheadBannerStyles: Record<BannerBackgroundColor, string> = {
  azure: 'bg-azure text-navy',
  violette: 'bg-violette text-white',
  black: 'bg-black text-white',
  navy: 'bg-navy text-white',
};

export default function MastheadBanner({
  id,
  title,
  linkDetails,
  linkComponent: LinkComponent = 'a',
  backgroundColor,
  isCloseable = false,
  handleClose,
}: MastheadBannerProps) {
  const renderedTitle =
    <Typography
      variant="body-2"
      component="p"
      className="inline mr-2"
    >
      {title}
    </Typography>;

  const renderedLink = linkDetails && (
    <Link
      href={linkDetails.url}
      component={LinkComponent}
      underline="always"
      className={cn(
        "text-body-2 font-normal underline-offset-auto align-baseline",
        backgroundColor === 'azure' ? 'text-navy' : 'text-white',
      )}
      endIcon={<ArrowRightIcon />}
      animated
    >
      {linkDetails.title}
    </Link>
  );

  const renderedCloseButton = isCloseable && (
    <button
      className="absolute top-0 right-0 lg:right-lg cursor-pointer inline-block h-6"
      onClick={(e) => handleClose(e, id)}
    >
      <CloseIcon className="h-4" />
    </button>
  );

  return (
    <div
      id={`node-${id}`}
      role="banner"
      className={cn(
        "px-5 py-6 text-body-2",
        MastheadBannerStyles[backgroundColor],
      )}
    >
      <div
        className="relative my-0 mx-auto lg:px-lg lg:max-w-screen-xl"
      >
        {renderedTitle}
        {renderedLink}
        {renderedCloseButton}
      </div>
    </div>
  );
}
