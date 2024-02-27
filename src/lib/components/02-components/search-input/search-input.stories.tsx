import { useState } from 'react';
import SearchInput from './search-input';

const meta = {
  title: 'Elements/SearchInput',
};

export default meta;

// Create as a react component to simulate getting the data from the header component.
export const Default = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  function toggleSearchInput() {
    setIsSearchOpen(!isSearchOpen);
  }

  return (
    <SearchInput
      url="search"
      queryKey="keys"
      isSearchOpen={isSearchOpen}
      toggleInput={toggleSearchInput}
    />
  );
};
