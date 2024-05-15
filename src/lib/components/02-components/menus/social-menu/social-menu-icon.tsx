import { FacebookIcon, LinkedinIcon, RssIcon, TwitterIcon, YoutubeIcon } from '../../../00-tokens/icons';

export type SocialMenuIconProps = {
  icon: 'facebook' | 'linkedin' | 'twitter' | 'rss' | 'youtube';
};

export default function SocialMenuIcon({ icon }: SocialMenuIconProps) {
  switch (icon) {
    case 'facebook':
      return (
        <FacebookIcon className="h-[16px] w-auto text-chateau hover:text-teal" />
      );
    case 'linkedin':
      return (
        <LinkedinIcon className="h-[16px] w-auto text-chateau hover:text-teal" />
      );
    case 'twitter':
      return (
        <TwitterIcon className="h-[16px] w-auto text-chateau hover:text-teal" />
      );
    case 'rss':
      return (
        <RssIcon className="h-[16px] w-auto text-chateau hover:text-teal" />
      );
    case 'youtube':
      return (
        <YoutubeIcon className="h-[16px] w-auto text-chateau hover:text-teal" />
      );
    default:
      return null;
  }
}
