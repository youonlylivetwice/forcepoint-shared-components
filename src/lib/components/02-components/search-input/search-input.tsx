import { FormEvent, FormHTMLAttributes, KeyboardEvent, useState } from 'react';
import { cn } from '../../../utils/tailwind-merge';
import ArrowRightIcon from '../../00-tokens/icons/arrow-right-icon.tsx';
import CloseThickIcon from '../../00-tokens/icons/close-thick-icon.tsx';
import SearchThickIcon from '../../00-tokens/icons/search-thick-icon.tsx';

export type SearchProps = FormHTMLAttributes<HTMLFormElement> & {
  isSearchOpen: boolean;
  onSearch?: (value: string) => void;
  queryKey: string;
  searchInputLabel?: string;
  searchLabel?: string;
  toggleInput: () => void;
  url: string;
};

export default function SearchInput({
  isSearchOpen,
  onSearch,
  queryKey,
  searchInputLabel = 'Enter your keywords',
  searchLabel = 'Search',
  toggleInput,
  url,
  ...props
}: SearchProps) {
  const [inputValue, setInputValue] = useState('');

  function handlerSearch(event: FormEvent) {
    if (onSearch) {
      event.preventDefault();
      onSearch(inputValue);
    }
  }

  function handlerVisibility() {
    const isOpen = !isSearchOpen;
    const input = document.querySelector<HTMLInputElement>('#search-input');
    setTimeout(() => isOpen && input?.focus(), 300);
    toggleInput();
  }

  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'Escape') {
      const toggle =
        document.querySelector<HTMLButtonElement>('#search-toggle');
      toggle?.focus();
      toggleInput();
    }
  }

  return (
    <div
      className="search-input-wrapper flex gap-md rtl:flex-row-reverse"
      onKeyDown={handleKeyDown}
    >
      <form
        method="get"
        onSubmit={handlerSearch}
        aria-hidden={!isSearchOpen}
        action={`${url}?${queryKey}=${encodeURIComponent(inputValue)}`}
        className={cn(
          'transition-500 w-[380px] opacity-100 transition-all ease-in-out',
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
            {searchInputLabel}
          </label>
          <input
            type="text"
            id="search-input"
            value={inputValue}
            name="search-input"
            disabled={!isSearchOpen}
            placeholder={searchLabel}
            onChange={(e) => setInputValue(e.target.value)}
            className="max-h-[30px] w-full rounded-m bg-mercury px-[45px] py-xs leading-none text-grey placeholder:text-grey rtl:text-right"
          />
          <button
            type="submit"
            aria-label={searchLabel}
            disabled={!isSearchOpen}
            className="absolute right-sm"
          >
            <ArrowRightIcon className="text-teal" />
          </button>
        </div>
      </form>
      <button
        type="button"
        id="search-toggle"
        onClick={handlerVisibility}
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
