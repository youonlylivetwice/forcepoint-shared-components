import Link from '../../../01-elements/link/link';
import SocialMenuIcon from './social-menu-icon';

export type SocialMenuItem = {
  linkProps?: {
    [key: string]: string;
  };
  title: string;
  url?: string;
  icon: 'facebook' | 'linkedin' | 'twitter' | 'rss' | 'youtube';
};

export type SocialMenuProps = {
  items: SocialMenuItem[];
  menuLabel?: string;
};

export default function SocialMenu({ items, menuLabel }: SocialMenuProps) {
  const renderItem = (item: SocialMenuItem, index: number) => {
    if (!item.url) return;

    return (
      <li key={`footer-subitem-${index}`}>
        <Link href={item.url} {...item.linkProps} aria-label={item.title}>
          <span className="sr-only">{item.title}</span>
          <SocialMenuIcon icon={item.icon} />
        </Link>
      </li>
    );
  };
  return (
    <nav aria-label={menuLabel}>
      <ul className="flex items-center gap-md">{items.map(renderItem)}</ul>
    </nav>
  );
}
