# Language Switcher Component API

The Language Switcher component API provides a flexible and comprehensive set of options for managing language switching within the user interface.
This component takes advantage of the [Secondary Menu component](./docs/SecondaryMenu.md)

## Import

```jsx
import { LanguageSwitcher } from 'forcepoint-shared-components';
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| activeLocale | `string` | `en` | The currently active locale. |
| locales | `string[]` | `-` | The available locales. The supported locales are: `en`, `es`, `fr`, `de`, `it`, `ja`, `ko`, `pt-br`, `tr`, `zh-hans`, `zh-hant`, `ar`. |
| url | `string` | `-` | The URL to use for the links. |
