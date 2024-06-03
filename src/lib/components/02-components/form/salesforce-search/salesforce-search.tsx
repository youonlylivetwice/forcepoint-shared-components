import { ChangeEventHandler, ComponentPropsWithoutRef } from 'react';
import { cn } from '../../../../utils/tailwind-merge';
import { ArrowRightIcon } from '../../../00-tokens/icons';
import Button from '../../../01-elements/button/button';

export interface SalesforceSearchProps
  extends ComponentPropsWithoutRef<'form'> {
  theme?: 'azure' | 'navy';
  inputName?: string;
  inputLabel?: string;
  inputPlaceholder?: string;
  onChangeInput?: ChangeEventHandler<HTMLInputElement> | undefined;
  inputValue?: string;
  partnerServicesSelectName?: string;
  partnerServicesSelectLabel?: string;
  partnerServicesSelectValue?: string;
  partnerServicesOptions?: {
    value: string;
    label: string;
  }[];
  partnerServicesSelectOnChange?:
    | ChangeEventHandler<HTMLSelectElement>
    | undefined;
  stateProvinceSelectName?: string;
  stateProvinceSelectLabel?: string;
  stateProvinceSelectValue?: string;
  stateProvinceOptions?: {
    value: string;
    label: string;
  }[];
  stateProvinceSelectOnChange?:
    | ChangeEventHandler<HTMLSelectElement>
    | undefined;
  showStatesForCountry?: string;
  countrySelectName?: string;
  countrySelectLabel?: string;
  countrySelectValue?: string;
  countryOptions?: {
    value: string;
    label: string;
  }[];
  countrySelectOnChange?: ChangeEventHandler<HTMLSelectElement> | undefined;
  searchButtonText?: string;
}
export default function SalesforceSearch({
  theme = 'azure',
  inputName,
  inputLabel = 'Partner Company Name',
  inputPlaceholder,
  onChangeInput,
  inputValue,
  searchButtonText = 'Search',
  partnerServicesSelectName = 'partner_services',
  partnerServicesSelectLabel = 'Partner Services',
  partnerServicesSelectValue,
  partnerServicesOptions,
  partnerServicesSelectOnChange,
  stateProvinceSelectName = 'state_province',
  stateProvinceSelectLabel = 'State/Province',
  stateProvinceSelectValue,
  stateProvinceOptions,
  showStatesForCountry,
  stateProvinceSelectOnChange,
  countrySelectName = 'country',
  countrySelectLabel = 'Country',
  countrySelectValue,
  countryOptions,
  countrySelectOnChange,
  onSubmit,
  className,
  ...props
}: SalesforceSearchProps) {
  const selectFieldsWrapperStyles =
    'mb-md sm:mb-0 sm:max-w-sm sm:grow basis-1/4 after:content-[""] after:bg-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9ImNoZXZlcm9uX2Rvd24ueHMiPgo8cGF0aCBpZD0iQ2hldnJvbiIgZD0iTTE1IDRMOCAxMUwxIDQiIHN0cm9rZT0iIzUzNTc1QSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9nPgo8L3N2Zz4K)] relative after:h-[16px] after:absolute after:w-[16px] ltr:after:right-[20px] rtl:after:left-[20px] after:bottom-[16px]';
  const selectStyles =
    'block w-full appearance-none rounded-m border border-brumosa ltr:pr-[46px] rtl:pl-[46px] ltr:pl-5 rtl:pr-5 py-3 text-body-2 uppercase text-grey outline-none focus:rounded-m focus:border-teal truncate';
  const labelStyles = 'mb-sm block text-h4 font-semibold';
  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        'items-end p-lg sm:flex sm:gap-md',
        {
          'bg-azure': theme === 'azure',
          'bg-navy': theme === 'navy',
        },
        className,
      )}
      {...props}>
      <div className="mb-md sm:mb-0 sm:max-w-sm sm:grow">
        <label
          className={cn(labelStyles, {
            'text-blue': theme === 'azure',
            'text-azure': theme === 'navy',
          })}
          htmlFor={inputName}>
          {inputLabel}
        </label>
        <input
          id={inputName}
          name={inputName}
          type="search"
          className="block w-full rounded-m border border-brumosa px-5 py-3 text-body-2 text-grey outline-none focus:border-teal"
          placeholder={inputPlaceholder ?? undefined}
          onChange={onChangeInput}
          value={inputValue}
        />
      </div>
      {partnerServicesOptions && (
        <div className={selectFieldsWrapperStyles}>
          <label
            className={cn(labelStyles, {
              'text-blue': theme === 'azure',
              'text-azure': theme === 'navy',
            })}
            htmlFor={partnerServicesSelectName}>
            {partnerServicesSelectLabel}
          </label>
          <select
            className={selectStyles}
            name={partnerServicesSelectName}
            id={partnerServicesSelectName}
            value={partnerServicesSelectValue}
            onChange={partnerServicesSelectOnChange}>
            {partnerServicesOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      )}
      {stateProvinceOptions && showStatesForCountry === countrySelectValue && (
        <div className={selectFieldsWrapperStyles}>
          <label
            className={cn(labelStyles, {
              'text-blue': theme === 'azure',
              'text-azure': theme === 'navy',
            })}
            htmlFor={stateProvinceSelectName}>
            {stateProvinceSelectLabel}
          </label>
          <select
            className={selectStyles}
            name={stateProvinceSelectName}
            id={stateProvinceSelectName}
            value={stateProvinceSelectValue}
            onChange={stateProvinceSelectOnChange}>
            {stateProvinceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      )}
      {countryOptions && (
        <div className={selectFieldsWrapperStyles}>
          <label
            className={cn(labelStyles, {
              'text-blue': theme === 'azure',
              'text-azure': theme === 'navy',
            })}
            htmlFor={countrySelectName}>
            {countrySelectLabel}
          </label>
          <select
            className={selectStyles}
            name={countrySelectName}
            id={countrySelectName}
            value={countrySelectValue}
            onChange={countrySelectOnChange}>
            {countryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      )}
      <div className="sm:self-end">
        <Button
          className="w-full justify-center py-4 text-h4 leading-none sm:w-auto"
          animated
          type="submit"
          as="button"
          color={theme === 'azure' ? 'blue' : 'sandwisp'}
          endIcon={<ArrowRightIcon />}>
          {searchButtonText}
        </Button>
      </div>
    </form>
  );
}
