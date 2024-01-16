import { useEffect, useState } from 'react';
import { TokenType, TokensType } from '../types';
import { ColorPalette, ColorProps, useSwatchLabels } from './color-shared';

export default function TintShades({ palettes }: ColorProps) {
  useSwatchLabels();

  const [tooltipVisibility, setTooltipVisibility] = useState<string>();

  const handleEscapePress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setTooltipVisibility('');
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscapePress);

    return () => {
      document.removeEventListener('keydown', handleEscapePress);
    };
  }, []);

  const renderVariant = ([_key, value]: [string, TokenType], index: number) => {
    const color = typeof value === 'string' ? value : value.base;

    return (
      <li
        className="relative"
        key={`color-variant-${index}`}
        onMouseLeave={() => setTooltipVisibility('')}
        onMouseEnter={() => setTooltipVisibility(color)}
      >
        {/* Swatch */}
        <div
          className={`${color} swatch mb-[-1rem] mr-[-1rem] h-[5rem] w-[10rem] cursor-pointer overflow-hidden rounded-m text-transparent hover:text-white`}
        ></div>
        {/* Tooltip */}
        <div
          className={`w-max absolute z-10 rounded-m bg-white px-md py-sm shadow-lg ${
            tooltipVisibility === value ? 'visible' : 'invisible'
          }`}
        >
          <p className="mb-sm border-b border-b-brumosa pb-sm font-bold">
            {color}
          </p>
          <p className="value text-body-4 font-light"></p>
        </div>
      </li>
    );
  };

  const renderColor = (
    [_label, variants]: [string, TokenType],
    index: number,
  ) => {
    if (typeof variants === 'string') return null;

    return (
      <li key={`variant-${index}`}>
        <ul className="flex flex-col">
          {Object.entries(variants as TokensType).map(renderVariant)}
        </ul>
      </li>
    );
  };

  return (
    <div className="p-md pb-xxl">
      <h2 className="mb-lg text-h3">Tint and Shades</h2>
      <ul className="flex flex-col gap-xl">
        {palettes.map(({ label, colors }: ColorPalette, index: number) => (
          <li key={`color-group-${index}`}>
            <h4 className="mb-md text-h4 font-normal text-black sm:mb-lg">
              {label}
            </h4>
            <ul className="flex flex-row flex-wrap gap-y-lg">
              {Object.entries(colors as TokensType).map(renderColor)}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
