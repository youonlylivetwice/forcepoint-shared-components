import { useEffect } from "react";
import { TokenType, TokensType } from "../types";

export type ColorPalette = {
  label: string;
  colors: TokensType;
};

export type ColorProps = {
  palettes: ColorPalette[];
};

export default function Palette({ palettes }: ColorProps) {
  useEffect(() => {
    const items = document.querySelectorAll('.swatch');
    items?.forEach((item: Element) => {
      const parent = item.parentElement;
      const label = parent?.querySelector('.value');

      if (label) {
        const rgbColor = window.getComputedStyle(item).getPropertyValue('background-color');
        const hexColor = rgbToHex(rgbColor);
        const hslColor = rgbToHsl(rgbColor);
        label.innerHTML = `
          ${hexColor}<br>${rgbColor}<br>${hslColor}
        `;
      }
    });
  }, []);

  const rgbToHex = (rgb: string): string => {
    const [r, g, b] = rgb.match(/\d+/g)!.map(Number);
    return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1).toUpperCase()}`;
  };

  const rgbToHsl = (rgb: string): string => {
    const [r, g, b] = rgb.match(/\d+/g)!.map(Number).map(c => c / 255);
    const cmax = Math.max(r, g, b), cmin = Math.min(r, g, b), delta = cmax - cmin;

    const l = (cmax + cmin) / 2;
    const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    const h = delta === 0 ? 0 : 60 * (cmax === r ? (g - b) / delta + 0 : cmax === g ? (b - r) / delta + 2 : (r - g) / delta + 4);

    return `hsl(${Math.round(h)}, ${Math.round(s * 100)}, ${Math.round(l * 100)})`;
  };

  const renderItem = ([key, value]: [string, TokenType], index: number) => {
    const color = typeof value === 'string' ? value : value.base;
    const borderStyles = key === 'white' ? 'border-1 border-mercury' : '';

    return (
      <li key={`item-${index}`}>
        {/* Swatch */}
        <div className={`${color} ${borderStyles} w-full h-xxl mb-sm rounded-s swatch`}></div>
        <p className="text-body-3 font-bold text-black">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
        <p className="text-body-3 text-black leading-relaxed value"></p>
      </li>
    );
  }

  const renderGroup = (palette: ColorPalette, index: number) => {
    return (
      <li key={`group-${index}`}>
        <h4 className="text-h4 font-normal text-black mb-md sm:mb-lg">{palette.label}</h4>
        <ul className="grid gap-x-md gap-y-lg sm:gap-y-xl grid-cols-1 sm:grid-cols-3 md:grid-cols-4">
          {Object.entries(palette.colors as TokensType).map(renderItem)}
        </ul>
      </li>
    );
  }

  return (
    <div className="p-md">
      <h2 className="text-h3 mb-lg">Brand Colors</h2>
      <ul className="flex flex-col gap-x-md gap-y-lg sm:gap-y-xl">
        {palettes.map(renderGroup)}
      </ul>
    </div>
  );
}
