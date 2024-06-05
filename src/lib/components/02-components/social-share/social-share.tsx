import { cn } from '../../../utils/tailwind-merge';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from '../../00-tokens/icons';

export type SocialShareProps = {
  url: string;
  title: string;
  shareText?: string;
  className?: string;
  ariaNavLabel?: string;
  hasBackground?: boolean;
  iconColor?: string;
  useSmallIcons?: boolean;
};

function genericSocialShare(url: string, socialNetwork: string) {
  window.open(url, socialNetwork, 'toolbar=0,status=0,width=648,height=420');
}

export default function SocialShare({
  url,
  title,
  className,
  shareText = 'Share on',
  ariaNavLabel = 'Social media sharing',
  iconColor = 'text-grey',
  hasBackground = true,
  useSmallIcons = false,
}: SocialShareProps) {
  const iconClass = `${iconColor} ${useSmallIcons ? 'w-[16px] h-[16px]' : 'w-[20px] h-[20px]'}`;
  const socialButtons = [
    {
      platform: 'LinkedIn',
      shareUrl: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
      icon: <LinkedinIcon className={cn(iconClass)} />,
      ariaLabel: `${shareText} LinkedIn`,
    },
    {
      platform: 'Twitter',
      shareUrl: `http://twitter.com/share?text=${title}&url=${encodeURIComponent(url)}`,
      icon: <TwitterIcon className={cn(iconClass)} />,
      ariaLabel: `${shareText} Twitter`,
    },
    {
      platform: 'Facebook',
      shareUrl: `http://www.facebook.com/sharer.php?u=${encodeURIComponent(url)}`,
      icon: <FacebookIcon className={cn(iconClass)} />,
      ariaLabel: `${shareText} Facebook`,
    },
  ];

  return (
    <nav aria-label={ariaNavLabel} className={className}>
      <ul className={cn('flex md:flex-col', hasBackground && 'gap-sm')}>
        {socialButtons.map(({ platform, shareUrl, icon, ariaLabel }) => (
          <li key={platform}>
            <button
              title={ariaLabel}
              aria-label={ariaLabel}
              onClick={() => genericSocialShare(shareUrl, ariaLabel)}
              className={cn(
                'flex h-[40px] w-[40px] items-center justify-center rounded-[10px]  hover:bg-mercury',
                hasBackground && 'bg-azure',
              )}>
              {icon}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
