import { cn } from '../../../utils/tailwind-merge';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from '../../00-tokens/icons';

export type SocialShareProps = {
  url: string;
  title: string;
  shareText?: string;
  className?: string;
  ariaNavLabel?: string;
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
}: SocialShareProps) {
  const socialButtons = [
    {
      platform: 'LinkedIn',
      shareUrl: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
      icon: <LinkedinIcon className="h-[20px] w-[20px] text-grey" />,
      ariaLabel: `${shareText} LinkedIn`,
    },
    {
      platform: 'Twitter',
      shareUrl: `http://twitter.com/share?text=${title}&url=${encodeURIComponent(url)}`,
      icon: <TwitterIcon className="h-[20px] w-[20px] text-grey" />,
      ariaLabel: `${shareText} Twitter`,
    },
    {
      platform: 'Facebook',
      shareUrl: `http://www.facebook.com/sharer.php?u=${encodeURIComponent(url)}`,
      icon: <FacebookIcon className="h-[20px] w-[20px] text-grey" />,
      ariaLabel: `${shareText} Facebook`,
    },
  ];

  return (
    <nav aria-label={ariaNavLabel} className={className}>
      <ul className={cn('flex gap-sm md:flex-col')}>
        {socialButtons.map(({ platform, shareUrl, icon, ariaLabel }) => (
          <li key={platform}>
            <button
              title={ariaLabel}
              aria-label={ariaLabel}
              onClick={() => genericSocialShare(shareUrl, ariaLabel)}
              className={cn(
                'flex h-[40px] w-[40px] items-center justify-center rounded-[10px] bg-azure hover:bg-mercury',
              )}>
              {icon}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
