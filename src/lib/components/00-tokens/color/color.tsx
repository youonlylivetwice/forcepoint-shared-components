import { useEffect } from "react";
import { TokensType } from "../types";

export type ColorProps = {
  colors: TokensType;
};

export default function Color({ colors }: ColorProps) {
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

  const renderItem = ([key, value]: [string, string], index: number) => {
    return (
      <li key={index}>
        <div className={`${value} w-full h-xxl mb-sm rounded-s swatch`}></div>
        <p className="text-md font-bold text-black">{key.toUpperCase()}</p>
        <p className="text-md text-grey value"></p>
      </li>
    );
  }

  return (
    <div className="p-md">
      <h2 className="text-h3 mb-lg">Brand Colors</h2>
      <ul className="grid gap-x-md gap-y-md sm:gap-y-xl grid-cols-1 sm:grid-cols-3 md:grid-cols-4">
        {Object.entries(colors as TokensType).map(renderItem)}
      </ul>
    </div>
  );
}
