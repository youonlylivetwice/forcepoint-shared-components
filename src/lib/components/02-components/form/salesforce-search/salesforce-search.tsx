import {
  ChangeEventHandler,
  ComponentPropsWithoutRef,
  CSSProperties,
} from 'react';
import ChevronDownSvgIcon from '../../../../assets/img/icons/chevron-down.svg';
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
  const selectInlineStyles: CSSProperties = {
    backgroundImage: `url(${ChevronDownSvgIcon})`,
  };
  const selectStyles =
    'block w-full appearance-none rounded-m border border-brumosa bg-[right_20px_center] bg-no-repeat px-5 py-3 text-body-2 uppercase text-grey outline-none focus:rounded-m focus:border-teal rtl:bg-[left_20px_center]';
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
        <div className="mb-md sm:mb-0 sm:max-w-sm sm:grow">
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
            style={selectInlineStyles}
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
        <div className="mb-md sm:mb-0 sm:max-w-sm sm:grow">
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
            style={selectInlineStyles}
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
        <div className="mb-md sm:mb-0 sm:max-w-sm sm:grow">
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
            style={selectInlineStyles}
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
