import { ReactNode } from "react";
import ArrowRightIcon from "../../../00-tokens/icons/arrow-right-icon";
import Link from "../../../01-elements/link/link";
import Typography from "../../../01-elements/typography/typography";
import { BannerProps } from "../masthead/masthead-banner";

export type FlyoutBannerProps = BannerProps & {
  date?: FlyoutBannerDateRange;
  location?: FlyoutBannerLocation;
  icon?: ReactNode;
  isMobile: boolean;
};

export type FlyoutBannerDateRange = {
  start: {
    time: string;
    fullDate: string;
  }
  end?: {
    time: string;
    fullDate: string;
  }
}

export type FlyoutBannerLocation = {
  city: string;
  state: string;
  country: string;
}

export default function FlyoutBanner({
  id,
  title,
  linkDetails,
  linkComponent: LinkComponent = 'a',
  date,
  location,
  icon,
  isMobile = false,
}: FlyoutBannerProps) {
  if (isMobile) {
    return null;
  }

  const renderedTitle =
    <Typography
      variant="h3"
      component="h3"
      className="mb-sm"
    >
      {title}
    </Typography>;

  const renderedLink = linkDetails && (
    <Link
      href={linkDetails.url}
      component={LinkComponent}
      size="large"
      color="white"
      endIcon={<ArrowRightIcon />}
      animated
    >
      {linkDetails.title}
    </Link>
  );

  const renderedAddress = location && (
    <address className="text-body-4 not-italic">
      {location.city}, {location.state} <br />
      {location.country}
    </address>
  );

  const renderedDate = date && (
    <div className="text-body-4">
      <time dateTime={date.start.time} aria-label="Start Date">
        {date.start.fullDate}
      </time>
      {date.end && (
        <>
          <span> - </span>
          <time dateTime={date.end.time} aria-label="End Date">
            {date.end.fullDate}
          </time>
        </>
      )}
    </div>
  );

  return (
    <div
      id={`node-${id}`}
      role="banner"
      className="relative text-body-2 text-white"
    >
      <div className="fixed top-3xl right-0 z-50 max-w-[350px] bg-black rounded-m">
        {icon}
        <div className="p-10 border-t-4 border-sol border-solid">
          <div className="mb-4">
            {renderedTitle}
            {renderedDate}
            {renderedAddress}
          </div>
          {renderedLink}
        </div>
      </div>
    </div>
  );
}
