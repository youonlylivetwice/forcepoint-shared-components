import FacebookIcon from '../../../00-tokens/icons/facebook-icon';
import LinkedinIcon from '../../../00-tokens/icons/linkedin-icon';
import RssIcon from '../../../00-tokens/icons/rss-icon';
import TwitterIcon from '../../../00-tokens/icons/twitter-icon';
import YoutubeIcon from '../../../00-tokens/icons/youtube-icon';

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
