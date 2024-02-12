import type { Meta, StoryObj } from '@storybook/react';
import SocialMenu, { SocialMenuItem } from './social-menu';

const metaSocialMenu: Meta<typeof SocialMenu> = {
  title: 'Components/Menus/SocialMenu',
  component: SocialMenu,
};

export default metaSocialMenu;

type Default = StoryObj<typeof SocialMenu>;

export const Default = () => {
  const items: SocialMenuItem[] = [
    {
      title: 'LinkedIn',
      url: 'https://www.linkedIn.com',
      icon: 'linkedin',
    },
    {
      title: 'Twitter',
      url: 'https://www.twitter.com',
      icon: 'twitter',
    },
    {
      title: 'Facebook',
      url: 'https://www.facebook.com',
      icon: 'facebook',
    },
    {
      title: 'Youtube',
      url: 'https://www.youtube.com',
      icon: 'youtube',
    },
    {
      title: 'RSS',
      url: '#',
      icon: 'rss',
    },
  ];

  return (
    <SocialMenu items={items} menuLabel='My social menu'/>
  );
};