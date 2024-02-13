import { ElementType } from 'react';
import Link from '../../../01-elements/link/link';

export type LegalMenuItem = {
  linkProps?: {
    [key: string]: string;
  };
  title: string;
  url?: string;
};

export type LegalMenuProps = {
  items: LegalMenuItem[];
  menuLabel?: string;
  linkComponent?: ElementType;
};

export default function SocialMenu({
  items,
  menuLabel = 'Legal Menu',
  linkComponent: LinkComponent = 'a',
}: LegalMenuProps) {
  const renderItem = (item: LegalMenuItem, index: number) => {
    if (!item.url) return;

    return (
      <li key={`legal-subitem-${index}`}>
        <Link
          href={item.url}
          component={LinkComponent}
          className="text-[11px] font-normal text-grey transition-colors"
          {...item.linkProps}
          aria-label={item.title}
        >
          {item.title}
        </Link>
      </li>
    );
  };
  return (
    <nav aria-label={menuLabel}>
      <ul className="flex flex-wrap items-center justify-center gap-x-sm md:justify-start">
        {items.map(renderItem)}
      </ul>
    </nav>
  );
}
