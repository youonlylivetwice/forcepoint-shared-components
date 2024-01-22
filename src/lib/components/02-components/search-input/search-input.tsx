// import { useRouter } from 'next/router';
import { useState } from 'react';
import ArrowRightIcon from '../icons/arrow-right-icon.tsx';
import CloseThickIcon from '../icons/close-thick-icon.tsx';
import SearchThickIcon from '../icons/search-thick-icon.tsx';

export type SearchProps = {
  isSearchOpen: boolean;
  setIsSearchOpen: (value: boolean) => void;
  url: string;
  queryKey: string;
};

export default function SearchInput({
  isSearchOpen,
  setIsSearchOpen,
  url,
  queryKey,
}: SearchProps) {
  const [inputValue, setInputValue] = useState('');
  // const router = useRouter();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // router.push(`/${url}?${queryKey}=${encodeURIComponent(inputValue)}`);
  };

  const toggleInput = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="search-input-wrapper flex gap-md rtl:flex-row-reverse">
      <form
        onSubmit={handleSubmit}
        method="get"
        action="/search"
        className={`${isSearchOpen ? '' : 'sr-only'}`}
        id="search-form"
      >
        <div className="relative flex items-center">
          <SearchThickIcon className="absolute left-sm text-teal" />
          <label htmlFor="search-input" className="sr-only">
            Search
          </label>
          <input
            type="text"
            id="search-input"
            value={inputValue}
            placeholder="Search"
            onChange={(e) => setInputValue(e.target.value)}
            className="rounded-m bg-mercury px-lg py-xs text-grey placeholder:text-grey rtl:text-right"
          />
          <ArrowRightIcon className="absolute right-sm text-teal" />
        </div>

        <button type="submit" className="sr-only" aria-label="Submit search">
          Submit
        </button>
      </form>

      <button
        type="button"
        onClick={toggleInput}
        aria-expanded={isSearchOpen}
        aria-controls="search-form"
        aria-label={isSearchOpen ? 'Close search form' : 'Open search form'}
      >
        {isSearchOpen ? (
          <CloseThickIcon className="text-teal" />
        ) : (
          <SearchThickIcon className="text-grey" />
        )}
      </button>
    </div>
  );
}
