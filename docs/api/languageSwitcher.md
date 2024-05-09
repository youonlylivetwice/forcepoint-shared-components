# LanguageSwitcher Component Documentation

This component takes advantage of the `SecondaryMenu` component and allows switching between different languages.

## Import

```typescript
import { SecondaryMenu } from 'forcepoint-shared-components';
```

## Props

| Name          | Type          | Default | Description                                           |
|---------------|---------------|---------|-------------------------------------------------------|
| locales       | `Locale[]`    | –       | Required. The available locales with additional properties. See below for more specifics     |
| url           | `string`      | –       | Required. The URL to use for the links. If the `URL` includes the locale code it needs to be removed.`/`                         |

## `Locale` Type

The `Locale` type defines the structure for localization options within the LanguageSwitcher component.

| Property    | Type      | Description                                                     |
|-------------|-----------|-----------------------------------------------------------------|
| localeCode  | `string`  | Required.A unique code representing the locale, e.g., 'en' for English.  |
| localeName  | `string`  | Required.The name of the locale as it should be displayed to the user.   |
| active      | `boolean` | Required.Indicates whether the locale is currently selected.             |
| linkProps   | `object`  | Optional. Additional properties to pass to the link component.  |

## Additional notes

Each entry within the `locales` array corresponds to a unique link in the language switcher. Exactly one of these should be designated as the active locale to indicate the current language selection. The `linkProps` parameter within each locale allows for the inclusion of supplementary properties that may be necessary for individual links. This feature is particularly useful when a specific attribute, such as `locale`, must be passed to the link for enhanced functionality or tracking purposes. Below is an illustrative example demonstrating the structure of a `Locale` object with additional properties:

## Type

```typescript
type Locale =  {
  localeCode: string;
  localeName: string;
  active: boolean;
  linkProps?: {
    [key: string]: string;
  }
}

type LanguageSwitcherProps =  {
  locales: Locale[];
  url: string;
  linkComponent?: ElementType;
}
```

## Example of Locales

```typescript
const locales: Locale[] = [
  {
    localeCode: 'en',
    localeName: 'English',
    active: true, // Active locale
    linkProps: { locale: 'en' }, // Additional link properties
  },
  // ... additional locales
];

```

## Usage

```typescript
<LanguageSwitcher
  locales={locales}
  url="/path-to-use-for-links"
  linkComponent={CustomLinkComponent} // Optional
/>
```
