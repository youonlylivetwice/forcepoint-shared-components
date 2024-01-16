import { TokenType, TokensType } from '../types';
import { ColorPalette, ColorProps, useSwatchLabels } from './color-shared';

export default function Palette({ palettes }: ColorProps) {
  useSwatchLabels();

  const renderItem = ([key, value]: [string, TokenType], index: number) => {
    const color = typeof value === 'string' ? value : value.base;
    const borderStyles = key === 'white' ? 'border-1 border-mercury' : '';

    return (
      <li key={`item-${index}`}>
        {/* Swatch */}
        <div
          className={`${color} ${borderStyles} swatch w-full mb-sm h-xxl rounded-s`}
        ></div>
        <p className="text-body-3 font-bold text-black">
          {key.charAt(0).toUpperCase() + key.slice(1)}
        </p>
        <p className="value text-body-3 leading-relaxed text-black"></p>
      </li>
    );
  };

  const renderGroup = (palette: ColorPalette, index: number) => {
    return (
      <li key={`group-${index}`}>
        <h4 className="mb-md text-h4 font-normal text-black sm:mb-lg">
          {palette.label}
        </h4>
        <ul className="grid grid-cols-1 gap-x-md gap-y-lg sm:grid-cols-3 sm:gap-y-xl md:grid-cols-4">
          {Object.entries(palette.colors as TokensType).map(renderItem)}
        </ul>
      </li>
    );
  };

  return (
    <div className="p-md">
      <h2 className="mb-lg text-h3">Brand Colors</h2>
      <ul className="flex flex-col gap-x-md gap-y-lg sm:gap-y-xl">
        {palettes.map(renderGroup)}
      </ul>
    </div>
  );
}
