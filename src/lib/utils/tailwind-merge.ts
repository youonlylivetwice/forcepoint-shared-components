import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      spacing: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', '3xl'],
      colors: [
        'none',
        'transparent',
        'currentColor',
        'navy',
        'teal',
        'violette',
        'viola',
        'veridian',
        'spring',
        'blue',
        'sky',
        'sandwisp',
        'sol',
        'crimson',
        'black',
        'grey',
        'chateau',
        'brumosa',
        'mercury',
        'azure',
        'white',
      ],
      borderRadius: ['s', 'm', 'lg'],
    },
    classGroups: {
      'font-size': [
        'text-colossus',
        'text-uber',
        'text-hero-1',
        'text-hero-2',
        'text-display',
        'text-h1',
        'text-h2',
        'text-h3',
        'text-h4',
        'text-h5',
        'text-h6',
        'text-body-1',
        'text-body-2',
        'text-body-3',
        'text-body-4',
        'text-body-5',
      ],
    },
  },
});

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}
