import { TokenType, TokensType } from "../types";
import { ColorPalette, ColorProps } from "./palette";

export default function TintShades({ palettes }: ColorProps) {
  const renderVariants = ([_label, variants]: [string, TokenType], index: number) => {
    if (typeof variants === 'string') return;
    return (
      <li key={`variant-${index}`}>
        <ul className="flex flex-col">
          {Object.entries(variants as TokensType).map(([_key, value]: [string, TokenType], index: number) => {
            const color = typeof value === 'string' ? value : value.base;

            return (
              <li key={`color-${index}`} className={`${color} mb-[-1rem] mr-[-1rem] rounded-m overflow-hidden text-transparent hover:text-white`}>
                <span className="flex flex-col w-[10rem] h-[5rem] gap-xs p-sm text-transparent hover:text-white hover:bg-black">
                  <span className={`block w-xs h-xs rounded-lg ${color}`}></span>
                  {color}
                </span>
              </li>
            );
          })}
        </ul>
      </li>
    );
  }

  return (
    <div className="p-md">
      <h2 className="text-h3 mb-lg">Tint and Shades</h2>
      <ul className="flex flex-col gap-xl">
        {palettes.map((palette: ColorPalette, index: number) => {
          return (
            <li key={`group-${index}`}>
              <h4 className="text-h4 font-normal text-black mb-md sm:mb-lg">{palette.label}</h4>
              <ul className="flex flex-row flex-wrap gap-y-lg">
                {Object.entries(palette.colors as TokensType).map(renderVariants)}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
