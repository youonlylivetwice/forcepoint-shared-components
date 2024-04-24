import { cn } from '../../../utils/tailwind-merge';
import CircleCheckmarkIcon from '../../00-tokens/icons/circle-checkmark-icon';
import Link from '../../01-elements/link/link';
import { MenuItemImageProps } from '../menus/main-menu/main-menu';

export type ListItemProps = {
  title?: string;
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  style: 'none' | 'checkmark' | 'icon';
  text: string;
  link?: {
    title: string;
    url: string;
  };
  icon?: MenuItemImageProps;
};

export default function ListItem({
  title,
  headingLevel: HeadingLevel = 'h3',
  style,
  text,
  icon,
  link,
}: ListItemProps) {
  const containerClasses = cn({
    flex: style !== 'none',
    'gap-md': style === 'checkmark',
    'gap-lg': style === 'icon',
    'mb-md': style === 'checkmark',
    'mt-lg pb-lg': style !== 'checkmark',
    'border-b-2 border-b-brumosa': style !== 'checkmark',
    'last:border-b-0': style !== 'checkmark',
  });

  const renderedIcon = {
    none: null,
    checkmark: (
      <CircleCheckmarkIcon className="mt-xs flex-shrink-0 flex-grow-0 text-teal" />
    ),
    icon: (
      <img
        src={icon?.media.src}
        role="presentation"
        alt={icon?.media?.alt ?? ''}
      />
    ),
  };

  return (
    <li className={containerClasses}>
      {renderedIcon[style]}
      <div>
        {title && (
          <HeadingLevel className="mb-sm text-h3 font-semibold text-black">
            {title}
          </HeadingLevel>
        )}
        <div className="text-body-2 text-grey">{text}</div>
        {link && (
          <Link href={link.url} className="mt-md text-h4 font-semibold">
            {link.title}
          </Link>
        )}
      </div>
    </li>
  );
}
