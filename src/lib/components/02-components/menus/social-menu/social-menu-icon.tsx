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
      return <FacebookIcon className='text-chateau hover:text-teal h-[20px] w-auto'/>;
    case 'linkedin':
      return <LinkedinIcon className='text-chateau hover:text-teal h-[20px] w-auto'/>;
    case 'twitter':
      return <TwitterIcon className='text-chateau hover:text-teal h-[20px] w-auto'/>;
    case 'rss':
      return <RssIcon className='text-chateau hover:text-teal h-[20px] w-auto'/>;
    case 'youtube':
      return <YoutubeIcon className='text-chateau hover:text-teal h-[20px] w-auto'/>;
    default:
      return null;
  }
}
