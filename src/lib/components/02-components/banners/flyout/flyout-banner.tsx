import { ReactNode, useEffect } from 'react';
import { cn } from '../../../../utils/tailwind-merge';
import { ArrowRightIcon, ChevronLeftIcon, CloseFilledIcon } from '../../../00-tokens/icons';
import Link from '../../../01-elements/link/link';
import Typography from '../../../01-elements/typography/typography';
import { BannerProps } from '../masthead/masthead-banner';

export type FlyoutBannerProps = BannerProps & {
  date?: FlyoutBannerDateRange;
  location?: FlyoutBannerLocation;
  icon?: ReactNode;
  toggleText: string;
  handleOpen: (event?: React.MouseEvent) => void;
};

export type FlyoutBannerDateRange = {
  start: {
    time: string;
    fullDate: string;
  };
  end?: {
    time: string;
    fullDate: string;
  };
};

export type FlyoutBannerLocation = {
  city: string;
  state: string;
  country: string;
};

const toggleTransition = 'transition-all duration-500 delay-400 ease-in-out';

export default function FlyoutBanner({
  id,
  title,
  linkDetails,
  linkComponent: LinkComponent = 'a',
  handleClose,
  handleOpen,
  showBanner,
  date,
  location,
  icon,
  toggleText,
}: FlyoutBannerProps) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition <= 200) {
        handleOpen();
      } else {
        handleClose();
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderedTitle = (
    <Typography variant="h3" component="h3" className="mb-sm">
      {title}
    </Typography>
  );

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

  const renderedCloseButton = (
    <button
      aria-label="Close"
      className="absolute -top-8 right-xs inline-block cursor-pointer"
      onClick={(e) => handleClose(e)}
    >
      <CloseFilledIcon />
    </button>
  );

  const renderedToggleButton = (
    <button
      className={cn(
        'fixed top-3xl z-40 min-h-[200px] cursor-pointer rounded-l-m bg-sol px-3 py-10 text-center text-h6 [writing-mode:vertical-lr]',
        toggleTransition,
        {
          'right-0': !showBanner,
          '-right-11': showBanner,
        },
      )}
      onClick={handleOpen}
    >
      {toggleText}
      <ChevronLeftIcon className="mt-sm inline-block" />
    </button>
  );

  return (
    <div
      id={`node-${id}`}
      role="banner"
      className="relative hidden text-body-2 text-white md:block"
    >
      <div
        className={cn(
          'fixed top-3xl z-30 max-w-[350px] rounded-m bg-black',
          toggleTransition,
          {
            'right-sm': showBanner,
            '-right-96': !showBanner,
          },
        )}
      >
        {renderedCloseButton}
        {icon}
        <div className="border-t-4 border-solid border-sol p-10">
          <div className="mb-4">
            {renderedTitle}
            {renderedDate}
            {renderedAddress}
          </div>
          {renderedLink}
        </div>
      </div>
      {renderedToggleButton}
    </div>
  );
}
