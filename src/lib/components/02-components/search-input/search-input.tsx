import { useState } from 'react';
// import { useRouter } from 'next/router';

export type SearchProps = {
  isSearchOpen: boolean;
  setIsSearchOpen: (value: boolean) => void;
  rtlSupport?: boolean;
};

export default function SearchInput({
  isSearchOpen,
  setIsSearchOpen,
  rtlSupport,
}: SearchProps) {
  const [inputValue, setInputValue] = useState('');
  // const router = useRouter();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // router.push(`/search?keys=${encodeURIComponent(inputValue)}`);
  };

  const toggleInput = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="search-input-wrapper flex gap-md">
      {isSearchOpen && (
        <form onSubmit={handleSubmit} method="get" action="/search">
          <div className="relative flex items-center">
            <svg
              className="absolute left-sm"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M13.7424 13.7424L19 19M15.9296 8.4648C15.9296 12.5875 12.5875 15.9296 8.4648 15.9296C4.34211 15.9296 1 12.5875 1 8.4648C1 4.34211 4.34211 1 8.4648 1C12.5875 1 15.9296 4.34211 15.9296 8.4648Z"
                stroke="#00AF9A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <label htmlFor="search-input" className="sr-only">
              Search
            </label>
            <input
              type="text"
              id="search-input"
              value={inputValue}
              placeholder="Search"
              onChange={(e) => setInputValue(e.target.value)}
              className={`rounded-m bg-mercury px-lg py-xs text-grey placeholder:text-grey ${
                rtlSupport ? 'text-right' : 'text-left'
              }`}
            />
            <svg
              className="absolute right-sm"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M11 4L15 8L11 12M1 8H14.5"
                stroke="#00AF9A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <button type="submit" className="sr-only">
            Submit
          </button>
        </form>
      )}
      <button type="button" onClick={toggleInput}>
        {isSearchOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clip-path="url(#clip0_2005_3748)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.8181 2.6967C4.42758 2.30618 3.79441 2.30618 3.40389 2.6967C3.01336 3.08722 3.01336 3.72039 3.40389 4.11091L6.58587 7.29289L2.69678 11.182C2.30626 11.5725 2.30626 12.2057 2.69678 12.5962C3.0873 12.9867 3.72047 12.9867 4.11099 12.5962L8.00008 8.70711L11.8892 12.5962C12.2797 12.9867 12.9129 12.9867 13.3034 12.5962C13.6939 12.2057 13.6939 11.5725 13.3034 11.182L9.41429 7.29289L12.5963 4.11091C12.9868 3.72039 12.9868 3.08722 12.5963 2.6967C12.2058 2.30617 11.5726 2.30617 11.1821 2.6967L8.00008 5.87868L4.8181 2.6967Z"
                fill="#1D252C"
              />
            </g>
            <defs>
              <clipPath id="clip0_2005_3748">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M13.7424 13.7424L19 19M15.9296 8.4648C15.9296 12.5875 12.5875 15.9296 8.4648 15.9296C4.34211 15.9296 1 12.5875 1 8.4648C1 4.34211 4.34211 1 8.4648 1C12.5875 1 15.9296 4.34211 15.9296 8.4648Z"
              stroke="#53575A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
