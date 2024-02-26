import { FormEvent, FormHTMLAttributes, useState } from 'react';
import { cn } from '../../../utils/tailwind-merge';
import ArrowRightIcon from '../../00-tokens/icons/arrow-right-icon.tsx';
import CloseThickIcon from '../../00-tokens/icons/close-thick-icon.tsx';
import SearchThickIcon from '../../00-tokens/icons/search-thick-icon.tsx';

export type SearchProps = FormHTMLAttributes<HTMLFormElement> & {
  isSearchOpen: boolean;
  onSearch?: (value: string) => void;
  queryKey: string;
  setIsSearchOpen: (value: boolean) => void;
  url: string;
};

export default function SearchInput({
  isSearchOpen,
  onSearch,
  queryKey,
  setIsSearchOpen,
  url,
  ...props
}: SearchProps) {
  const [inputValue, setInputValue] = useState('');

  const toggleInput = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handlerSearch = (event: FormEvent) => {
    if (onSearch) {
      event.preventDefault();
      onSearch(inputValue);
    }
  };

  return (
    <div className="search-input-wrapper flex gap-md rtl:flex-row-reverse">
      <form
        method="get"
        onSubmit={handlerSearch}
        action={`${url}?${queryKey}=${encodeURIComponent(inputValue)}`}
        className={cn(
          'w-[380px] opacity-100 transition-all duration-500 ease-in-out',
          {
            'sr-only w-0 opacity-0': !isSearchOpen,
          },
        )}
        id="search-form"
        {...props}
      >
        <div className="relative flex items-center">
          <SearchThickIcon className="absolute left-sm text-teal" />
          <label htmlFor="search-input" className="sr-only">
            Search
          </label>
          <input
            type="text"
            id="search-input"
            name="search-input"
            value={inputValue}
            placeholder="Search"
            onChange={(e) => setInputValue(e.target.value)}
            className="max-h-[30px] w-full rounded-m bg-mercury px-[45px] py-xs leading-none text-grey placeholder:text-grey rtl:text-right"
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
        aria-label={cn({
          'Close search form': isSearchOpen,
          'Open search form': !isSearchOpen,
        })}
      >
        {isSearchOpen ? (
          <CloseThickIcon className="text-teal" />
        ) : (
          <SearchThickIcon className="text-grey hover:text-teal" />
        )}
      </button>
    </div>
  );
}
