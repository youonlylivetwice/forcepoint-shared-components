import { useState } from 'react';

import SearchInput from './search-input';

const meta = {
  title: 'Elements/SearchInput',
  argTypes: {
    rtlSupport: {
      name: 'Right-to-left support',
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
};

export default meta;

// Create as a react component to simulate getting the data from the header component.
export const Default = (args: any) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <SearchInput
      rtlSupport={args.rtlSupport}
      isSearchOpen={isSearchOpen}
      setIsSearchOpen={setIsSearchOpen}
    />
  );
};
