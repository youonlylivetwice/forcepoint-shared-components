import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { cn } from '../../../../utils/tailwind-merge';
import { CloseIcon, MenuIcon } from '../../../00-tokens/icons';
import Branding from '../../branding/branding';
import MainMenu, { MainMenuItemProps, MainMenuProps } from './main-menu';

const menuItems: MainMenuItemProps[] = [
  {
    title: 'Why Forcepoint',
    display: 'label',
    width: 'inline_width',
    alignment: 'left_align',
    below: [
      {
        title: 'group',
        width: 'full_width',
        display: 'no_label',
        below: [
          {
            title: 'About Us',
            url: '#',
            display: 'label_small_arrow',
            description: 'Our vision and mission',
            icon: {
              media: {
                src: 'https://forcepoint.com/sites/default/files/about_us_0.svg',
              },
            },
          },
          {
            title: 'Our Approach',
            url: '#',
            display: 'label_small_arrow',
            description: 'Our data-first approach to cybersecurity',
            icon: {
              media: {
                src: 'https://forcepoint.com/sites/default/files/our_approach_0.svg?itok=ItqSFUmj',
              },
            },
          },
          {
            title: 'Our Customers',
            url: '#',
            display: 'label_small_arrow',
            description:
              'We help people work freely, securely and with confidence',
            icon: {
              media: {
                src: 'https://forcepoint.com/sites/default/files/our_customers_0.svg?itok=3fZmNUq6',
              },
            },
          },
        ],
      },
    ],
  },
  {
    title: 'Data-first SASE',
    display: 'label',
    width: 'full_width',
    alignment: 'left_align',
    below: [
      {
        title: 'group (row1)',
        display: 'no_label',
        width: 'full_width',
        alignment: 'left_align',
        bgColor: '#FFFFFF',
        below: [
          {
            title: 'group (FP ONE)',
            display: 'no_label',
            width: 'quarter_width',
            alignment: 'left_align',
            below: [
              {
                title: 'Datensicherheit – überall',
                url: '#',
                display: 'image_with_content',
                width: 'full_width',
                alignment: 'left_align',
                description:
                  'Data-first SASE starts with Forcepoint ONE. Protect data everywhere, secure access anywhere, and simplify security on one platform.',
                icon: {
                  media: {
                    src: 'https://www.forcepoint.com/sites/default/files/fp_one_icon_0.svg?itok=eKi29PlI',
                  },
                },
                iconOnHover: {
                  media: {
                    src: 'https://www.forcepoint.com/sites/default/files/fp_one_icon-hover_0.svg?itok=ecRnPBsZ',
                  },
                },
                ctaHeader: 'Learn More',
              },
            ],
          },
          {
            title: 'group (products)',
            display: 'no_label',
            width: 'three_quarter_width',
            alignment: 'left_align',
            below: [
              {
                title: 'group (products 1st row)',
                display: 'no_label',
                width: 'full_width',
                alignment: 'left_align',
                below: [
                  {
                    title: 'Simplify Security with SSE',
                    url: '#',
                    display: 'label_large_arrow',
                    width: 'full_width',
                  },
                  {
                    title: 'group',
                    display: 'no_label',
                    width: 'full_width',
                    alignment: 'left_align',
                    below: [
                      {
                        title: 'CASB',
                        url: '#',
                        display: 'label_small_arrow',
                        width: 'half_width',
                        alignment: 'left_align',
                        description:
                          'Secure data on any public cloud application.',
                        icon: {
                          media: {
                            src: 'https://forcepoint.com/sites/default/files/casb_0.svg?itok=0AYipcGQ',
                          },
                        },
                      },
                      {
                        title: 'ZTNA',
                        url: '#',
                        display: 'label_small_arrow',
                        width: 'half_width',
                        alignment: 'left_align',
                        description:
                          'Remotely access every private web app on any device.',
                        icon: {
                          media: {
                            src: 'https://forcepoint.com/sites/default/files/ztna_0.svg?itok=d3lJw0Cf',
                          },
                        },
                      },
                      {
                        title: 'SWG',
                        url: '#',
                        display: 'label_small_arrow',
                        width: 'half_width',
                        alignment: 'left_align',
                        description:
                          'Safely browse the web and download files.',
                        icon: {
                          media: {
                            src: 'https://forcepoint.com/sites/default/files/swg_0.svg?itok=IAmhFOl2',
                          },
                        },
                      },
                      {
                        title: 'DLP SaaS',
                        url: '#',
                        display: 'label_small_arrow',
                        width: 'half_width',
                        alignment: 'left_align',
                        description:
                          'Prevent data exfiltration from the cloud with DLP SaaS.',
                        icon: {
                          media: {
                            src: 'https://forcepoint.com/sites/default/files/dlp_0.svg?itok=QSiYdR5u',
                          },
                        },
                      },
                    ],
                  },
                ],
              },
              {
                title: 'group (products 2nd row)',
                display: 'no_label',
                width: 'full_width',
                alignment: 'left_align',
                below: [
                  {
                    title: 'Work Safely Anywhere With SASE',
                    url: '#',
                    display: 'label_large_arrow',
                    width: 'full_width',
                    alignment: 'left_align',
                  },
                  {
                    title: 'group',
                    display: 'no_label',
                    width: 'full_width',
                    alignment: 'left_align',
                    below: [
                      {
                        title: 'FlexEdge Secure SD-WAN',
                        url: '#',
                        display: 'label_small_arrow',
                        width: 'full_width',
                        alignment: 'left_align',
                        description:
                          'Connect and protect branches, offices and more.',
                        icon: {
                          media: {
                            src: 'https://forcepoint.com/sites/default/files/sd_wan_1.svg?itok=ok525WDi',
                          },
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: 'group (row2)',
        display: 'no_label',
        width: 'full_width',
        alignment: 'left_align',
        bgColor: '#f5f6f6',
        below: [
          {
            url: '#',
            width: 'inline_width',
            title: 'On-Demand Demo',
            alignment: 'right_align',
            display: 'button_with_arrow',
          },
          {
            url: '#',
            display: 'button',
            width: 'inline_width',
            alignment: 'right_align',
            title: 'Schedule a Live Demo',
          },
        ],
      },
    ],
  },
  {
    title: 'More Products and Solutions',
    display: 'label',
    width: 'full_width',
    alignment: 'left_align',
    below: [
      {
        title: 'group (popular products 1st row)',
        display: 'no_label',
        width: 'three_quarter_width',
        alignment: 'left_align',
        bgColor: '#FFFFFF',
        below: [
          {
            title: 'Products',
            display: 'heading',
            width: 'full_width',
            alignment: 'left_align',
          },
          {
            url: '#',
            width: 'full_width',
            display: 'label_large_arrow',
            title: 'Data Security Solutions',
          },
          {
            title: 'group (Data Security)',
            display: 'no_label',
            width: 'third_width',
            alignment: 'left_align',
            below: [
              {
                title: 'Enterprise DLP',
                url: '#',
                display: 'image_with_content',
                description:
                  'Industry-leading data security for web, cloud, email, network and endpoint.',
                icon: {
                  media: {
                    src: 'https://forcepoint.com/sites/default/files/enterprise_dlp_icon.svg?itok=jX54PA8x',
                  },
                },
                iconOnHover: {
                  media: {
                    src: 'https://forcepoint.com/sites/default/files/enterprise_dlp_icon-hover_0.svg?itok=DImj8Sdd',
                  },
                },
              },
            ],
          },
          {
            title: 'group (Products)',
            display: 'no_label',
            width: 'two_third_width',
            alignment: 'left_align',
            below: [
              {
                title: 'Data Visibility',
                url: '#',
                display: 'label_small_arrow',
                width: 'half_width',
                alignment: 'left_align',
                description:
                  'Get a panoramic view of data at rest with AI and LLMs.',
                icon: {
                  media: {
                    src: 'https://forcepoint.com/sites/default/files/data_visibility.svg?itok=Bz8Cvtip',
                  },
                },
              },
              {
                title: 'Insider Threat',
                url: '#',
                display: 'label_small_arrow',
                width: 'half_width',
                alignment: 'left_align',
                description:
                  'Monitor, analyze and gain insight on user behavior.',
                icon: {
                  media: {
                    src: 'https://forcepoint.com/sites/default/files/data_classification.svg?itok=V4Jn8zog',
                  },
                },
              },
              {
                title: 'Data Classification',
                url: '#',
                display: 'label_small_arrow',
                width: 'half_width',
                alignment: 'left_align',
                description:
                  'Increase the accuracy and efficiency of classification.',
                icon: {
                  media: {
                    src: 'https://forcepoint.com/sites/default/files/data_classification.svg?itok=V4Jn8zog',
                  },
                },
              },
              {
                title: 'Risk Adaptive',
                url: '#',
                display: 'label_small_arrow',
                width: 'half_width',
                alignment: 'left_align',
                description:
                  'Respond to risk in real-time with policy automation.',
                icon: {
                  media: {
                    src: 'https://forcepoint.com/sites/default/files/risk_adaptive.svg?itok=_q5-lQni',
                  },
                },
              },
            ],
          },
        ],
      },
      {
        title: 'group (solutions 1st row)',
        display: 'no_label',
        width: 'quarter_width',
        alignment: 'left_align',
        bgColor: '#f5f6f6',
        below: [
          {
            title: 'Solutions',
            display: 'heading',
            width: 'full_width',
            alignment: 'left_align',
          },
          {
            title: 'group (solutions items)',
            display: 'no_label',
            width: 'full_width',
            alignment: 'left_align',
            bgColor: '#f5f6f6',
            below: [
              {
                title: 'Securing Data Everywhere',
                url: '#',
                display: 'label_small_arrow',
                width: 'full_width',
                alignment: 'left_align',
              },
              {
                title: 'Embrace ChatGPT and Protect Data',
                url: '#',
                display: 'label_small_arrow',
                width: 'full_width',
                alignment: 'left_align',
              },
              {
                title: 'Adopt Continuous Zero Trust Security',
                url: '#',
                display: 'label_small_arrow',
                width: 'full_width',
                alignment: 'left_align',
              },
              {
                title: 'Safely Use MS 365',
                url: '#',
                display: 'label_small_arrow',
                width: 'full_width',
                alignment: 'left_align',
              },
            ],
          },
        ],
      },
      {
        title: 'group (popular products 2nd row)',
        display: 'no_label',
        width: 'three_quarter_width',
        alignment: 'left_align',
        bgColor: '#FFFFFF',
        below: [
          {
            title: 'Network and Threat Protection',
            url: '#',
            width: 'full_width',
            display: 'label_large_arrow',
          },
          {
            title: 'group (Network and Threat Protection)',
            display: 'no_label',
            width: 'third_width',
            alignment: 'left_align',
            below: [
              {
                title: 'FlexEdge Secure SD-WAN',
                url: '#',
                display: 'image_with_content',
                alignment: 'left_align',
                description:
                  'Secure the network. Connect and protect offices, branches and remote sites.',
                icon: {
                  media: {
                    src: 'https://forcepoint.com/sites/default/files/ngfw_icon.svg?itok=TUIY1tFd',
                  },
                },
                iconOnHover: {
                  media: {
                    src: 'https://forcepoint.com/sites/default/files/ngfw_icon-hover.svg?itok=_4GP7qqq',
                  },
                },
              },
            ],
          },
          {
            title: 'products (2nd row)',
            display: 'no_label',
            width: 'two_third_width',
            alignment: 'left_align',
            below: [
              {
                title: 'Cross Domain Solutions',
                url: '#',
                display: 'label_small_arrow',
                width: 'half_width',
                alignment: 'left_align',
                description:
                  'Improve security and access for segmented networks.',
                icon: {
                  media: {
                    src: 'https://forcepoint.com/sites/default/files/cross_domain_solution.svg?itok=spYAkSuR',
                  },
                },
              },
              {
                title: 'NGFW',
                url: '#',
                display: 'label_small_arrow',
                width: 'half_width',
                alignment: 'left_align',
                description:
                  'Modernize connectivity with next-generation security.',
                icon: {
                  media: {
                    src: 'https://forcepoint.com/sites/default/files/sd_wan.svg?itok=BjbAi8Ws',
                  },
                },
              },
              {
                title: 'Zero Trust CDR',
                url: '#',
                display: 'label_small_arrow',
                width: 'half_width',
                alignment: 'left_align',
                description:
                  'Prevent files from launching known or zero-day attacks.',
                icon: {
                  media: {
                    src: 'https://forcepoint.com/sites/default/files/zero_trust_cdr.svg?itok=SeJtwVWa',
                  },
                },
              },
              {
                title: 'RBI',
                url: '#',
                display: 'label_small_arrow',
                width: 'half_width',
                alignment: 'left_align',
                description:
                  'Render risky websites in a container to browse safely.',
                icon: {
                  media: {
                    src: 'https://forcepoint.com/sites/default/files/rbi.svg?itok=Zk589SmA',
                  },
                },
              },
            ],
          },
        ],
      },
      {
        title: 'group (solutions 2nd row)',
        display: 'no_label',
        width: 'quarter_width',
        alignment: 'left_align',
        bgColor: '#f5f6f6',
        below: [
          {
            title: 'Solutions',
            display: 'heading',
            width: 'full_width',
            alignment: 'left_align',
          },
          {
            title: 'group (solutions items)',
            display: 'no_label',
            width: 'full_width',
            alignment: 'left_align',
            bgColor: '#f5f6f6',
            below: [
              {
                title: 'Protect Remote Offices',
                url: '#',
                display: 'label_small_arrow',
                width: 'full_width',
                alignment: 'left_align',
              },
              {
                title: 'Securely Enable Remote Workers',
                url: '#',
                display: 'label_small_arrow',
                width: 'full_width',
                alignment: 'left_align',
              },
            ],
          },
        ],
      },
      {
        title: 'group (products cta column 1)',
        display: 'no_label',
        width: 'three_quarter_width',
        alignment: 'right_align',
        bgColor: '#FFFFFF',
        below: [
          {
            title: 'View All Products',
            url: '#',
            display: 'button',
            width: 'full_width',
            alignment: 'right_align',
          },
        ],
      },
      {
        title: 'group (products cta column 2)',
        display: 'no_label',
        width: 'quarter_width',
        alignment: 'left_align',
        bgColor: '#f5f6f6',
        below: [
          {
            title: 'View All Solutions',
            url: '#',
            display: 'button_with_arrow',
            width: 'full_width',
            alignment: 'left_align',
          },
        ],
      },
    ],
  },
  {
    title: 'Resources',
    display: 'label',
    width: 'full_width',
    alignment: 'left_align',
    below: [
      {
        title: 'group (links column)',
        display: 'no_label',
        width: 'quarter_width',
        alignment: 'left_align',
        bgColor: '#f5f6f6',
        below: [
          {
            title: 'group (resource links)',
            display: 'no_label',
            width: 'full_width',
            alignment: 'left_align',
            below: [
              {
                title: 'Blog',
                url: '#',
                display: 'label_small_arrow',
                width: 'full_width',
                alignment: 'left_align',
              },
              {
                title: 'Webcasts',
                url: '#',
                display: 'label_small_arrow',
                width: 'full_width',
                alignment: 'left_align',
              },
              {
                title: 'Podcasts',
                url: '#',
                display: 'label_small_arrow',
                width: 'full_width',
                alignment: 'left_align',
              },
              {
                title: 'Analyst Reports',
                url: '#',
                display: 'label_small_arrow',
                width: 'full_width',
                alignment: 'left_align',
              },
              {
                title: 'Customer Stories',
                url: '#',
                display: 'label_small_arrow',
                width: 'full_width',
                alignment: 'left_align',
              },
              {
                title: 'Resource Library',
                url: '#',
                display: 'label_small_arrow',
                width: 'full_width',
                alignment: 'left_align',
              },
              {
                title: 'Events',
                url: '#',
                display: 'label_small_arrow',
                width: 'full_width',
                alignment: 'left_align',
              },
              {
                title: 'Training',
                url: '#',
                display: 'label_small_arrow',
                width: 'full_width',
                alignment: 'left_align',
              },
            ],
          },
          {
            title: 'group (cyber edut)',
            display: 'no_label',
            width: 'full_width',
            alignment: 'left_align',
            below: [
              {
                title: 'Cyber Edu',
                url: '#',
                display: 'image_with_content',
                icon: {
                  media: {
                    src: 'https://forcepoint.com/sites/default/files/cyber_edu_icon.svg?itok=PJRQDZq5',
                  },
                },
                iconOnHover: {
                  media: {
                    src: 'https://forcepoint.com/sites/default/files/cyber_edu_icon-hover.svg?itok=1K3wTAcl',
                  },
                },
                ctaHeader: 'Learn More',
              },
            ],
          },
        ],
      },
      {
        title: 'group (cta column)',
        display: 'no_label',
        width: 'three_quarter_width',
        alignment: 'left_align',
        bgColor: '#FFFFFF',
        below: [
          {
            title: 'group (cards)',
            display: 'no_label',
            width: 'full_width',
            alignment: 'left_align',
            bgColor: '#FFFFFF',
            below: [
              {
                title: 'Ultimate Guide to SASE',
                url: '#',
                display: 'card',
                width: 'half_width',
                alignment: 'left_align',
                description: 'Guide',
                bgColor: '#00AF9A',
                ctaHeader: 'Dive into the Guide',
              },
              {
                title:
                  'ChatGPT for IT: Increase Productivity with Generative AI using Forcepoint Data Security',
                url: '#',
                display: 'card',
                width: 'half_width',
                alignment: 'left_align',
                description: 'Video',
                bgColor: '#3D1152',
                ctaHeader: 'Watch the Video',
              },
              {
                title: '2023 Gartner® Magic Quadrant™ for Single-Vendor SASE',
                url: '#',
                display: 'card',
                width: 'half_width',
                alignment: 'left_align',
                description: 'Analyst Report',
                bgColor: '#FF671D',
                ctaHeader: 'Read the Report',
              },
              {
                title: 'The Radical Transparency Opportunity in Cybersecurity',
                url: '#',
                display: 'card',
                width: 'half_width',
                alignment: 'left_align',
                description: 'Podcast',
                bgColor: '#F6DFA4',
                ctaHeader: 'Listen to the Podcast',
              },
            ],
          },
          {
            title: 'group',
            display: 'no_label',
            alignment: 'right_align',
            below: [
              {
                title: 'View All Resources',
                url: '#',
                display: 'button',
                width: 'full_width',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Talk to an Expert',
    url: '#',
    display: 'button',
    width: 'full_width',
    alignment: 'right_align',
  },
];

const meta = {
  title: 'Components/Menus/Main Menu',
  component: MainMenu,
  argTypes: {
    items: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof MainMenu>;

const branding = {
  data: {
    info: {
      logoBlack:
        'https://live-forcepoint.pantheonsite.io/sites/all/themes/custom/fp/assets/img/logos/forcepoint.svg',
      logoWhite: 'https://www.forcepoint.com/images/fp-logo-white.svg',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = ({ items, color }: MainMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    const isOpen = !isMenuOpen;
    setIsMenuOpen(isOpen);
    // Toggle a class on the body element to prevent scrolling
    document.body.classList.toggle('max-lg:overflow-hidden', isOpen);
  };

  const mainMenuRendered = () => (
    <MainMenu
      items={items}
      handlerCloseMenu={() => setIsMenuOpen(false)}
      color={color}
    />
  );

  const secondaryMenuRendered = () => (
    <div
      className={cn(
        'flex flex-1  py-md lg:justify-end',
        color === 'black' ? 'bg-azure text-grey' : 'bg-grey-dark text-white',
      )}>
      <span className="text-h6 font-semibold uppercase ">
        Secondary menu content
      </span>
    </div>
  );

  return (
    <header
      className={cn(
        'site-header sticky top-0 z-20 lg:top-[-60px]',
        color === 'black' ? 'bg-white' : 'bg-black',
      )}>
      {/* Desktop */}
      <div className="hidden lg:relative lg:mx-auto lg:flex lg:max-w-screen-xl lg:flex-col lg:gap-xs lg:pt-md">
        <div className="lg:mx-lg lg:flex lg:flex-1 lg:gap-lg">
          <Branding
            className="lg:inline-flex lg:w-[180px]"
            src={
              color === 'black'
                ? branding.data.info.logoBlack
                : branding.data.info.logoWhite
            }
            alt="Site Logo"
          />
          <div className="lg:flex lg:flex-1 lg:justify-end lg:gap-md">
            {secondaryMenuRendered()}
          </div>
        </div>
        <div className="flex lg:w-full">
          <div className="flex-1">{mainMenuRendered()}</div>
        </div>
      </div>
      {/* Mobile */}
      <div
        className={cn('flex w-screen flex-col lg:hidden', {
          'h-screen': isMenuOpen,
        })}>
        {/* Menu heading */}
        <div className="flex w-full flex-row items-center justify-center border-b border-b-mercury bg-white">
          <div className="flex-1 pl-md rtl:pl-0 rtl:pr-md">
            <Branding
              className="inline-flex w-[84px]"
              src={
                color === 'black'
                  ? branding.data.info.logoBlack
                  : branding.data.info.logoWhite
              }
              alt="Site Logo"
            />
          </div>
          <button
            className="block p-md text-center"
            aria-expanded={isMenuOpen}
            aria-label={'Main menu'}
            onClick={toggleMenu}>
            {isMenuOpen ? (
              <CloseIcon className="text-grey" />
            ) : (
              <MenuIcon className="text-grey" />
            )}
          </button>
        </div>
        {/* Menu content */}
        {isMenuOpen && (
          <>
            <div className="border-b border-chateau bg-white p-md">
              {mainMenuRendered()}
            </div>
            <div className="flex-1 divide-y divide-brumosa bg-azure px-md">
              {secondaryMenuRendered()}
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export const ShinyButton: Story = ({
  items,
  color,
  useShinyEffect,
  runCustomButtonAction,
}: MainMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    const isOpen = !isMenuOpen;
    setIsMenuOpen(isOpen);
    // Toggle a class on the body element to prevent scrolling
    document.body.classList.toggle('max-lg:overflow-hidden', isOpen);
  };

  const mainMenuRendered = () => (
    <MainMenu
      items={items}
      handlerCloseMenu={() => setIsMenuOpen(false)}
      color={color}
      useShinyEffect={useShinyEffect}
      runCustomButtonAction={runCustomButtonAction}
    />
  );

  const secondaryMenuRendered = () => (
    <div
      className={cn(
        'flex flex-1  py-md lg:justify-end',
        color === 'black' ? 'bg-azure text-grey' : 'bg-grey-dark text-white',
      )}>
      <span className="text-h6 font-semibold uppercase ">
        Secondary menu content
      </span>
    </div>
  );

  return (
    <header
      className={cn(
        'site-header sticky top-0 z-20 lg:top-[-60px]',
        color === 'black' ? 'bg-white' : 'bg-black',
      )}>
      {/* Desktop */}
      <div className="hidden lg:relative lg:mx-auto lg:flex lg:max-w-screen-xl lg:flex-col lg:gap-xs lg:pt-md">
        <div className="lg:mx-lg lg:flex lg:flex-1 lg:gap-lg">
          <Branding
            className="lg:inline-flex lg:w-[180px]"
            src={
              color === 'black'
                ? branding.data.info.logoBlack
                : branding.data.info.logoWhite
            }
            alt="Site Logo"
          />
          <div className="lg:flex lg:flex-1 lg:justify-end lg:gap-md">
            {secondaryMenuRendered()}
          </div>
        </div>
        <div className="flex lg:w-full">
          <div className="flex-1">{mainMenuRendered()}</div>
        </div>
      </div>
      {/* Mobile */}
      <div
        className={cn('flex w-screen flex-col lg:hidden', {
          'h-screen': isMenuOpen,
        })}>
        {/* Menu heading */}
        <div className="flex w-full flex-row items-center justify-center border-b border-b-mercury bg-white">
          <div className="flex-1 pl-md rtl:pl-0 rtl:pr-md">
            <Branding
              className="inline-flex w-[84px]"
              src={
                color === 'black'
                  ? branding.data.info.logoBlack
                  : branding.data.info.logoWhite
              }
              alt="Site Logo"
            />
          </div>
          <button
            className="block p-md text-center"
            aria-expanded={isMenuOpen}
            aria-label={'Main menu'}
            onClick={toggleMenu}>
            {isMenuOpen ? (
              <CloseIcon className="text-grey" />
            ) : (
              <MenuIcon className="text-grey" />
            )}
          </button>
        </div>
        {/* Menu content */}
        {isMenuOpen && (
          <>
            <div className="border-b border-chateau bg-white p-md">
              {mainMenuRendered()}
            </div>
            <div className="flex-1 divide-y divide-brumosa bg-azure px-md">
              {secondaryMenuRendered()}
            </div>
          </>
        )}
      </div>
    </header>
  );
};

Default.args = {
  handlerCloseMenu() {
    console.log('handlerCloseMenu');
  },
  items: menuItems,
  color: 'black',
};

ShinyButton.args = {
  handlerCloseMenu() {
    console.log('handlerCloseMenu');
  },
  items: menuItems,
  color: 'black',
  useShinyEffect: true,
  runCustomButtonAction() {
    console.log('runCustomButtonAction');
  },
};
