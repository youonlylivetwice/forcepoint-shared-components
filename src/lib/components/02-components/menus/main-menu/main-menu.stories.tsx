import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import MenuIcon from '../../../00-tokens/icons/menu-icon';
import CloseIcon from '../../../00-tokens/icons/close-icon';
import MainMenu, { MenuItemProps, MainMenuProps } from './main-menu';
import Logo from '../../../../assets/img/branding/logo.svg';
import Branding from '../../branding/branding';

const menuItems: MenuItemProps[] = [
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
              src: 'https://forcepoint.com/sites/default/files/about_us_0.svg',
              alt: 'This is the alt text',
            },
          },
          {
            title: 'Our Approach',
            url: '#',
            display: 'label_small_arrow',
            description: 'Our data-first approach to cybersecurity',
            icon: {
              src: 'https://forcepoint.com/sites/default/files/our_approach_0.svg?itok=ItqSFUmj',
              alt: 'This is the alt text',
            },
          },
          {
            title: 'Our Customers',
            url: '#',
            display: 'label_small_arrow',
            description:
              'We help people work freely, securely and with confidence',
            icon: {
              src: 'https://forcepoint.com/sites/default/files/our_customers_0.svg?itok=3fZmNUq6',
              alt: 'This is the alt text',
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
                title: 'Forcepoint ONE SSE',
                url: '#',
                display: 'image_with_content',
                width: 'full_width',
                alignment: 'left_align',
                description:
                  'Data-first SASE starts with Forcepoint ONE. Protect data everywhere, secure access anywhere, and simplify security on one platform.',
                icon: {
                  src: 'https://www.forcepoint.com/sites/default/files/fp_one_icon_0.svg?itok=eKi29PlI',
                  alt: 'This is the alt text',
                },
                iconOnHover: {
                  src: 'https://www.forcepoint.com/sites/default/files/fp_one_icon-hover_0.svg?itok=ecRnPBsZ',
                  alt: 'This is the alt text',
                },
                ctaButton: 'Learn More',
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
                          src: 'https://forcepoint.com/sites/default/files/casb_0.svg?itok=0AYipcGQ',
                          alt: 'This is the alt text',
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
                          src: 'https://forcepoint.com/sites/default/files/ztna_0.svg?itok=d3lJw0Cf',
                          alt: 'This is the alt text',
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
                          src: 'https://forcepoint.com/sites/default/files/swg_0.svg?itok=IAmhFOl2',
                          alt: 'This is the alt text',
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
                          src: 'https://forcepoint.com/sites/default/files/dlp_0.svg?itok=QSiYdR5u',
                          alt: 'This is the alt text',
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
                          src: 'https://forcepoint.com/sites/default/files/sd_wan_1.svg?itok=ok525WDi',
                          alt: 'This is the alt text',
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
                  src: 'https://forcepoint.com/sites/default/files/enterprise_dlp_icon.svg?itok=jX54PA8x',
                  alt: 'This is the alt text',
                },
                iconOnHover: {
                  src: 'https://forcepoint.com/sites/default/files/enterprise_dlp_icon-hover_0.svg?itok=DImj8Sdd',
                  alt: 'This is the alt text',
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
                  src: 'https://forcepoint.com/sites/default/files/data_visibility.svg?itok=Bz8Cvtip',
                  alt: 'This is the alt text',
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
                  src: 'https://forcepoint.com/sites/default/files/insider_threat.svg?itok=Nk7wLh80',
                  alt: 'This is the alt text',
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
                  src: 'https://forcepoint.com/sites/default/files/data_classification.svg?itok=V4Jn8zog',
                  alt: 'This is the alt text',
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
                  src: 'https://forcepoint.com/sites/default/files/risk_adaptive.svg?itok=_q5-lQni',
                  alt: 'This is the alt text',
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
                  src: 'https://forcepoint.com/sites/default/files/ngfw_icon.svg?itok=TUIY1tFd',
                  alt: 'This is the alt text',
                },
                iconOnHover: {
                  src: 'https://forcepoint.com/sites/default/files/ngfw_icon-hover.svg?itok=_4GP7qqq',
                  alt: 'This is the alt text',
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
                  src: 'https://forcepoint.com/sites/default/files/cross_domain_solution.svg?itok=spYAkSuR',
                  alt: 'This is the alt text',
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
                  src: 'https://forcepoint.com/sites/default/files/sd_wan.svg?itok=BjbAi8Ws',
                  alt: 'This is the alt text',
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
                  src: 'https://forcepoint.com/sites/default/files/zero_trust_cdr.svg?itok=SeJtwVWa',
                  alt: 'This is the alt text',
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
                  src: 'https://forcepoint.com/sites/default/files/rbi.svg?itok=Zk589SmA',
                  alt: 'This is the alt text',
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
                  src: 'https://forcepoint.com/sites/default/files/cyber_edu_icon.svg?itok=PJRQDZq5',
                  alt: 'This is the alt text',
                },
                iconOnHover: {
                  src: 'https://forcepoint.com/sites/default/files/cyber_edu_icon-hover.svg?itok=1K3wTAcl',
                  alt: 'This is the alt text',
                },
                ctaButton: 'Learn More',
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
                ctaButton: 'Dive into the Guide',
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
                ctaButton: 'Watch the Video',
              },
              {
                title: '2023 Gartner® Magic Quadrant™ for Single-Vendor SASE',
                url: '#',
                display: 'card',
                width: 'half_width',
                alignment: 'left_align',
                description: 'Analyst Report',
                bgColor: '#FF671D',
                ctaButton: 'Read the Report',
              },
              {
                title: 'The Radical Transparency Opportunity in Cybersecurity',
                url: '#',
                display: 'card',
                width: 'half_width',
                alignment: 'left_align',
                description: 'Podcast',
                bgColor: '#F6DFA4',
                ctaButton: 'Listen to the Podcast',
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

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = ({ items }: MainMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const mainMenuRendered = () => (
    <MainMenu items={items} handlerCloseMenu={() => setIsMenuOpen(false)} />
  );

  return (
    <div className="menu:mx-auto menu:max-w-[84rem] relative">
      <div className="menu:block hidden">{mainMenuRendered()}</div>
      {/* Mobile Header */}
      <div className="menu:hidden flex w-full flex-row items-center justify-center bg-white">
        <div className="flex-1">
          <div className="w-[90px]">
            <Branding src={Logo} alt="Go to homepage" />
          </div>
        </div>
        <button
          className="block p-md text-center pr-0 rtl:pr-md rtl:pl-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Toggle main menu' : 'Open main menu'}
        >
          {isMenuOpen ? (
            <CloseIcon className="text-grey" />
          ) : (
            <MenuIcon className="text-grey" />
          )}
        </button>
      </div>
      {/* Mobile Main Menu */}
      {isMenuOpen && (
        <div className="menu:hidden">
          {mainMenuRendered()}
          <p className="menu:hidden my-sm flex-1 bg-brumosa px-sm py-md">
            Secondary menu content...
          </p>
        </div>
      )}
    </div>
  );
};

Default.args = {
  items: menuItems,
};
