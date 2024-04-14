import { useEffect } from 'react';
import { TokensType } from '../types';

export type ColorPalette = {
  label: string;
  colors: TokensType;
};

export type ColorProps = {
  palettes: ColorPalette[];
};

// Function to convert hex color to RGB array
export function hexToRgb(hex: string) {
  hex = hex.replace('#', '');

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return [r, g, b];
}

// Function to calculate brightness using RGB values
export function calculateBrightness(rgb: number[]) {
  const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
  return brightness;
}

/**
 * Converts an RGB color string to its hexadecimal representation.
 * @param rgb - RGB color string in the format "rgb(r, g, b)".
 * @returns Hexadecimal representation of the RGB color (e.g., "#RRGGBB").
 */
const rgbToHex = (rgb: string): string => {
  // Extract RGB values from the string and convert to numbers
  const [red, green, blue] = rgb.match(/\d+/g)!.map(Number);

  // Convert RGB values to a single 24-bit integer
  const rgbValue = (red << 16) | (green << 8) | blue;

  // Convert the integer to hexadecimal format and prepend '#'
  const hexValue = `#${rgbValue.toString(16).padStart(6, '0').toUpperCase()}`;

  return hexValue;
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
