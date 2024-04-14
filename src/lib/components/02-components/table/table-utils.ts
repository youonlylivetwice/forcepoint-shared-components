import { hexToRgb } from '../../00-tokens/color/color-shared';

// Function to extract a number from an HTML element's dataset
export function extractDataNumber(element: HTMLElement, key: string): number {
  const dataValue = element.dataset[key];
  return parseInt(dataValue ?? '0', 10);
}

// Function to set text color based on background color to ensure contrast
export function setContrastTextColor(bgColor: string): {
  backgroundColor: string;
  color: string;
} {
  const defaultTextColor = '#53575a';
  const styles = { backgroundColor: bgColor, color: defaultTextColor };

  if (bgColor) {
    const rgbArray = hexToRgb(bgColor);
    if (rgbArray) {
      const brightness = calculateBrightness(rgbArray);
      styles.color = brightness < 125 ? '#ffffff' : defaultTextColor;
    }
  }

  return styles;
}

// Function to calculate brightness of an RGB color
function calculateBrightness(rgb: number[]): number {
  const [r, g, b] = rgb;
  return (r * 299 + g * 587 + b * 114) / 1000;
}
