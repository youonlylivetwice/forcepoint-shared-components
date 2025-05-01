import { ElementType } from 'react';
import { cn } from '../../../../utils/tailwind-merge';
import { ArrowRightIcon, CloseIcon } from '../../../00-tokens/icons';
import Link from '../../../01-elements/link/link';
import Typography from '../../../01-elements/typography/typography';

export type BannerProps = {
  id: string;
  title: string;
  linkDetails?: BannerLinkProps;
  linkComponent?: ElementType;
  backgroundColor: BannerBackgroundColor;
  isCloseable: boolean;
  handleClose: (event?: React.MouseEvent) => void;
  showBanner: boolean;
};

export type BannerBackgroundColor = 'azure' | 'violette' | 'black' | 'navy';

export type BannerLinkProps = {
  title: string;
  url: string;
};

export type MastheadBannerProps = BannerProps;

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
  showBanner,
}: MastheadBannerProps) {
  if (!showBanner) {
    return null;
  }

  const renderedTitle = (
    <Typography variant="body-2" component="p" className="mr-2 inline">
      {title}
    </Typography>
  );

  const renderedLink = linkDetails && (
    <Link
      href={linkDetails.url}
      component={LinkComponent}
      underline="always"
      color={backgroundColor === 'azure' ? 'navy' : 'white'}
      className="align-baseline text-body-2 font-normal underline-offset-auto"
      endIcon={<ArrowRightIcon />}
      animated>
      {linkDetails.title}
    </Link>
  );

  const renderedCloseButton = isCloseable && (
    <button
      aria-label="Close"
      className="h-6 cursor-pointer"
      onClick={(e) => handleClose(e)}>
      <CloseIcon className="h-4" />
    </button>
  );

  return (
    <div
      id={`node-${id}`}
      role="banner"
      className={cn(
        'px-5 py-6 text-body-2',
        MastheadBannerStyles[backgroundColor],
      )}>
      <div className="relative mx-auto my-0 flex justify-between gap-sm lg:max-w-screen-xl lg:px-lg">
        <div>
          {renderedTitle}
          {renderedLink}
        </div>
        {renderedCloseButton}
      </div>
    </div>
  );
}
