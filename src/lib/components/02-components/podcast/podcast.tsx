import {
  ApplePodcastIcon,
  GooglePodcastHoverIcon,
  GooglePodcastIcon,
  RssIcon,
  SpotifyIcon,
  StitcherHoverIcon,
  StitcherIcon,
  TuneInIcon,
} from '../../00-tokens/icons';
import { cn } from '../../../utils/tailwind-merge';
import { ReactNode } from 'react';
import Link from '../../01-elements/link/link';

export type PodcastProps = {
  ariaNavLabel?: string;
  className?: string;
  title?: string;
};

type PodcastPlatform = {
  className?: string;
  icon?: ReactNode;
  iconHover?: ReactNode;
  title?: string;
  url?: string;
};

export default function Podcast({
  ariaNavLabel,
  className,
  title,
}: PodcastProps) {
  const platforms = [
    {
      title: 'Apple Podcast',
      className: 'hover:border-[#d56dfb] hover:text-[#d56dfb]',
      url: 'https://podcasts.apple.com/us/podcast/id1438873656',
      icon: <ApplePodcastIcon className="w-[20px]" />,
    },
    {
      title: 'Tun-In',
      className: 'hover:border-[#46d8cb] hover:text-[#46d8cb]',
      url: 'https://tunein.com/podcasts/Government/To-The-Point---Cybersecurity-p1174859/',
      icon: <TuneInIcon className="w-[20px]" />,
    },
    {
      title: 'Stitcher',
      className: 'hover:border-[#f79b1c] hover:text-[#f79b1c]',
      url: 'https://www.stitcher.com/show/to-the-point-cybersecurity',
      icon: <StitcherIcon className="w-[20px] group-hover:hidden" />,
      iconHover: (
        <StitcherHoverIcon className="hidden w-[20px] group-hover:block" />
      ),
    },
    {
      title: 'Google Podcast',
      className: 'hover:border-[#f9b908] hover:text-[#f9b908]',
      url: 'https://podcasts.google.com/feed/aHR0cHM6Ly9jeWJlcnNlY3VyaXR5dG90aGVwb2ludHBvZGNhc3QubGlic3luLmNvbS9yc3M=',
      icon: <GooglePodcastIcon className="w-[20px] group-hover:hidden" />,
      iconHover: (
        <GooglePodcastHoverIcon className="hidden w-[20px] group-hover:block" />
      ),
    },
    {
      title: 'Spotify',
      className: 'hover:border-[#1db954] hover:text-[#1db954]',
      url: 'https://open.spotify.com/show/7cV2mUlLungBjlqXhem8O1',
      icon: <SpotifyIcon className="w-[20px]" />,
    },
    {
      title: 'RSS',
      className: 'hover:border-[#00af9a] hover:text-[#00af9a]',
      url: 'https://cybersecuritytothepointpodcast.libsyn.com/rss',
      icon: <RssIcon className="w-[20px]" />,
    },
  ];

  const renderPlatform = (platform: PodcastPlatform, index: number) => {
    return (
      <li key={index} className="md:w-content flex w-full flex-1">
        <Link
          rel="nofollow"
          target="_blank"
          title={platform.title}
          href={platform.url}
          className={cn(
            'group flex flex-1 items-center gap-x-sm rounded-m border border-white px-md py-sm text-white md:flex-auto',
            platform.className,
          )}>
          {platform.icon}
          {platform.iconHover}
          {platform.title}
        </Link>
      </li>
    );
  };

  return (
    <nav aria-label={ariaNavLabel} className={cn('bg-black px-md', className)}>
      <div
        id="podcast-transcript"
        className="mx-auto flex max-w-screen-xl flex-col gap-md px-md py-lg md:flex-row">
        {title && (
          <p className="text-h4 font-semibold text-white md:max-w-[280px]">
            {title}
          </p>
        )}
        <ul className="flex flex-col gap-sm md:flex-row md:pl-md">
          {platforms.map(renderPlatform)}
        </ul>
      </div>
    </nav>
  );
}
