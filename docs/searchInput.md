# SearchInput Component Documentation

The `SearchInput` component is designed to offer a dynamic and user-friendly search experience. While it facilitates the submission of search queries to a defined URL using standard HTML form submission, it also offers flexibility for custom functionality. This is particularly useful in applications like Next.js, where you might prefer using the Next.js router for navigation. In such cases, you can override the default behavior by implementing a custom handler function. This custom handler can leverage Next.js's `useRouter` hook for client-side navigation, enabling you to programmatically direct users to search results without a full page reload. This approach enhances the user experience by providing a more seamless and responsive interaction. More specifics below.

## Import

```jsx
import { SearchInput } from 'forcepoint-shared-components';
```

## Props

| Name             | Type                           | Description                                                          |
|------------------|--------------------------------|----------------------------------------------------------------------|
| onSearch         | `(value: string) => void`      | Optional callback function invoked when the search is submitted.     |
| isSearchOpen     | `boolean`                      | Boolean flag indicating if the search input is currently open.       |
| setIsSearchOpen  | `(value: boolean) => void`     | Function to set the visibility state of the search input.            |
| queryKey         | `string`                       | The query parameter key used in constructing the search URL.         |
| url              | `string`                       | URL where the search query is sent. Useful for form action attribute.|

## Basic Usage

```typescript
import { useState } from 'react';

const [isSearchOpen, setIsSearchOpen] = useState(false);

<SearchInput
  isSearchOpen={isSearchOpen}
  queryKey="keys"
  setIsSearchOpen={setIsSearchOpen}
  url="/search"
/>
```

## Advance Usage (overriding the default submission behavior. Next.js)

```typescript
import { useState } from 'react';
import router from 'next/router';

const [isSearchOpen, setIsSearchOpen] = useState(false);

const handleSubmit = (inputValue: string) => {
  router.push(`/search?keys=${encodeURIComponent(inputValue)}`);
};

<SearchInput
  onSearch={handleSubmit}
  isSearchOpen={isSearchOpen}
  setIsSearchOpen={setIsSearchOpen}
  url={`/search`}
  queryKey={'keys'}
/>
```
