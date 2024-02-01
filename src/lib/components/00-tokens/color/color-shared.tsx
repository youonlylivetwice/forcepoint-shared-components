import { useEffect } from 'react';
import { TokensType } from '../types';

export type ColorPalette = {
  label: string;
  colors: TokensType;
};

export type ColorProps = {
  palettes: ColorPalette[];
};

/**
 * Converts an RGB color string to its hexadecimal representation.
 * @param rgb - RGB color string.
 * @returns Hexadecimal representation of the RGB color.
 */
const rgbToHex = (rgb: string): string => {
  const [red, green, blue] = rgb.match(/\d+/g)!.map(Number);
  return `#${((1 << 24) | (red << 16) | (green << 8) | blue)
    .toString(16)
    .slice(1)
    .toUpperCase()}`;
};

/**
 * Converts an RGB color string to its HSL (Hue, Saturation, Lightness) representation.
 * @param rgb - RGB color string.
 * @returns HSL representation of the RGB color.
 */
const rgbToHsl = (rgb: string): string => {
  const [red, green, blue] = rgb
    .match(/\d+/g)!
    .map(Number)
    .map((component) => component / 255);

  const maxComponent = Math.max(red, green, blue),
    minComponent = Math.min(red, green, blue),
    delta = maxComponent - minComponent;

  const lightness = (maxComponent + minComponent) / 2;
  const saturation =
    delta === 0 ? 0 : delta / (1 - Math.abs(2 * lightness - 1));
  const hue =
    delta === 0
      ? 0
      : 60 *
        (maxComponent === red
          ? (green - blue) / delta + 0
          : maxComponent === green
            ? (blue - red) / delta + 2
            : (red - green) / delta + 4);

  return `(${Math.round(hue)}, ${Math.round(saturation * 100)}, ${Math.round(
    lightness * 100,
  )})`;
};

/**
 * Custom React Hook to update labels with color information for swatches.
 */
export function useSwatchLabels(): void {
  useEffect(() => {
    // Select all elements with the class 'swatch'
    const swatchElements = document.querySelectorAll('.swatch');

    // Iterate over each swatch element
    swatchElements?.forEach((swatch) => {
      // Find the label element within the swatch
      const labelElement = swatch.parentElement?.querySelector('.value');

      if (labelElement) {
        // Get the background color of the swatch
        const backgroundColor = window
          .getComputedStyle(swatch as Element)
          .getPropertyValue('background-color');

        // Convert RGB to Hexadecimal and HSL
        const hexadecimalColor = rgbToHex(backgroundColor);
        const hslColor = rgbToHsl(backgroundColor);

        // Update the label's inner HTML with color information
        labelElement.innerHTML = `
          HEX: ${hexadecimalColor}<br>
          RGB: ${backgroundColor.replace('rgb', '')}<br>
          HSL: ${hslColor}
        `;
      }
    });
  }, []);
}
