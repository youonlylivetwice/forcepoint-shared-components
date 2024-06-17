import { FormEvent, FormHTMLAttributes, useState } from 'react';
import { cn } from '../../../utils/tailwind-merge';
import { ArrowRightIcon, SearchThickIcon } from '../../00-tokens/icons';

export type SimpleSearchProps = FormHTMLAttributes<HTMLFormElement> & {
  onSearch?: (value: string) => void;
  queryKey: string;
  searchInputLabel?: string;
  searchLabel?: string;
  url: string;
  inputClassName?: string;
};

export default function SimpleSearchInput({
  onSearch,
  queryKey,
  searchInputLabel = 'Enter your keywords',
  searchLabel = 'Search',
  url,
  className,
  inputClassName,
  ...props
}: SimpleSearchProps) {
  const [inputValue, setInputValue] = useState('');

  function handlerSearch(event: FormEvent) {
    if (onSearch) {
      event.preventDefault();
      onSearch(inputValue);
    }
  }

  return (
    <div className="search-input-wrapper flex gap-md rtl:flex-row-reverse">
      <form
        method="get"
        onSubmit={handlerSearch}
        action={`${url}?${queryKey}=${encodeURIComponent(inputValue)}`}
        className={cn(
          'transition-500 opacity-100 transition-all ease-in-out',
          className,
        )}
        id="search-form"
        {...props}>
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
            placeholder={searchLabel}
            onChange={(e) => setInputValue(e.target.value)}
            className={cn(
              'w-full rounded-m bg-mercury px-[45px] py-xs leading-none text-grey placeholder:text-grey rtl:text-right',
              inputClassName,
            )}
          />
          <button
            type="submit"
            aria-label={searchLabel}
            className="absolute right-sm">
            <ArrowRightIcon className="text-teal" />
          </button>
        </div>
      </form>
    </div>
  );
}
