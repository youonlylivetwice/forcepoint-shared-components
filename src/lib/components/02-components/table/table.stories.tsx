import type { Meta, StoryObj } from '@storybook/react';
import Table, { RowData } from './table';

const meta = {
  title: 'Components/Table',
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const rows: RowData[] = [
  {
    columns: [
      {
        text: `
          <a href="#">Download Full Table</a>
        `,
      },
      {
        text: '<b>Forcepoint</b>',
        bgColor: '#F5F6F6',
      },
      {
        text: `
          <p>Legacy Security Vendors</p>
          <small>(e.g. Zscaler, Netskope)</small>
        `,
      },
      {
        text: `
          <p>Legacy Networking Vendors</p>
          <small>(e.g. Palo Alto, Fortinet, Check Point)</small>
        `,
      },
    ],
  },
  {
    columns: [
      {
        text: `
          <p className="text-start">
            <h1><b>Data Security Features</b></h1><br>
            Lorem ipsum dolor sit amet consectetur. Laoreet aliquet diam eu commodo nisl pretium. Dictumst justo accumsan.<br>
            <ul>
              <li>Shadow IT reporting & blocking</li>
              <li>Inline inspection & control</li>
              <li>API inspection</li>
              <li>Agentless application access</li>
            </ul>
          </p>
        `,
      },
      {
        text: '0',
        bgColor: '#F5F6F6',
      },
      {
        text: '0',
      },
      {
        text: '0',
      },
    ],
  },
  {
    columns: [
      {
        text: `
          <p>
            <h1><b>Data Security Features</b></h1><br>
            <ul>
              <li>Shadow IT reporting & blocking</li>
              <li>Inline inspection & control</li>
              <li>API inspection</li>
              <li>Agentless application access</li>
            </ul>
          </p>
        `,
      },
      {
        text: `
          <p>
            <p>o</p>
            <p>AAA</p>
            <p>Lorem ipsum dolor sit</p>
          </p>
        `,
        bgColor: '#F5F6F6',
      },
      {
        text: `
          <p>
            <p>o</p>
            <p>AAA</p>
            <p>Lorem ipsum dolor sit</p>
          </p>
        `,
      },
      {
        text: `
          <p>
            <p>o</p>
            <p>AAA</p>
            <p>Lorem ipsum dolor sit</p>
          </p>
        `,
      },
    ],
  },
  {
    columns: [
      {
        text: `
          <p>
            <h1><b>Data Security Features</b></h1><br>
            <p>Lorem ipsum dolor sit amet consectetur. Laoreet aliquet diam eu commodo nisl pretium. Dictumst justo accumsan.</p>
            <br>
            <a href="/">Get It Today</a>
          </p>
        `,
      },
      {
        text: `
          <p>
            <p>o</p>
            <p>AAA</p>
            <p>Lorem ipsum dolor sit</p>
          </p>
        `,
        bgColor: '#F5F6F6',
      },
      {
        text: `
          <p>
            <p>o</p>
            <p>AAA</p>
            <p>Lorem ipsum dolor sit</p>
          </p>
        `,
      },
      {
        text: `
          <p>
            <p>o</p>
            <p>AAA</p>
            <p>Lorem ipsum dolor sit</p>
          </p>
        `,
      },
    ],
  },
];

export const Default: Story = {
  args: {
    data: rows,
    subheading: 'eyebrow',
    heading:
      'Figma ipsum component variant main layer. Duplicate align figjam.',
    description:
      'Figma ipsum component variant main layer. Scale editor mask bullet flatten export team blur. Main prototype scrolling scale frame main distribute. Undo image vertical ipsum italic link layout community project arrow.',
  },
};
