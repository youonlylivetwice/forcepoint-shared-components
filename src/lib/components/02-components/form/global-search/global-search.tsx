import {
  ChangeEventHandler,
  ComponentPropsWithoutRef,
  CSSProperties,
} from 'react';
import ChevronDownSvgIcon from '../../../../assets/img/icons/chevron-down.svg';
import { cn } from '../../../../utils/tailwind-merge';
import ArrowRightIcon from '../../../00-tokens/icons/arrow-right-icon';
import Button from '../../../01-elements/button/button';

export interface GlobalSearchProps extends ComponentPropsWithoutRef<'form'> {
  theme?: 'navy' | 'blue';
  inputName?: string;
  inputLabel?: string;
  inputPlaceholder?: string;
  selectName?: string;
  selectLabel?: string;
  selectOptions?: {
    value: string;
    label: string;
  }[];
  searchButtonText?: string;
  onChangeInput?: ChangeEventHandler<HTMLInputElement> | undefined;
  inputValue?: string;
  onChangeSelect?: ChangeEventHandler<HTMLSelectElement> | undefined;
  selectValue?: string;
}
export default function GlobalSearch({
  theme = 'navy',
  inputName,
  inputLabel = 'Enter your Keywords',
  inputPlaceholder,
  selectName,
  selectLabel = 'Is Type',
  selectOptions,
  searchButtonText = 'Search',
  onSubmit,
  onChangeInput,
  inputValue,
  onChangeSelect,
  selectValue,
  className,
}: GlobalSearchProps) {
  const selectInlineStyles: CSSProperties = {
    backgroundImage: `url(${ChevronDownSvgIcon})`,
    backgroundPosition: 'right 20px center',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        'p-lg sm:flex sm:gap-md',
        {
          'bg-blue': theme === 'blue',
          'bg-navy': theme === 'navy',
        },
        className,
      )}>
      <div className="mb-md sm:mb-0 sm:max-w-sm sm:grow">
        <label
          className="mb-sm block text-h4 font-semibold text-azure"
          htmlFor={inputName}>
          {inputLabel}
        </label>
        <input
          id={inputName}
          name={inputName}
          type="search"
          className="block w-full rounded-m border border-brumosa px-5 py-3 text-grey outline-none focus:border-teal"
          placeholder={inputPlaceholder ?? undefined}
          onChange={onChangeInput}
          value={inputValue}
        />
      </div>
      {selectOptions && (
        <div className="mb-md sm:mb-0 sm:max-w-sm sm:grow">
          <label
            className="mb-sm block text-h4 font-semibold text-azure"
            htmlFor={selectName}>
            {selectLabel}
          </label>
          <select
            className="block w-full appearance-none rounded-m border border-brumosa px-5 py-3 text-grey outline-none focus:rounded-m focus:border-teal"
            style={selectInlineStyles}
            name={selectName}
            id={selectName}
            value={selectValue}
            onChange={onChangeSelect}>
            {selectOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      )}
      <div className="sm:self-end">
        <Button
          className="jus w-full justify-center py-4 sm:w-auto"
          animated
          type="submit"
          as="button"
          color="sandwisp"
          endIcon={<ArrowRightIcon />}>
          {searchButtonText}
        </Button>
      </div>
    </form>
  );
}
