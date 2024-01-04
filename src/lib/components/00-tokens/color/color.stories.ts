import ColorDisplay, { ColorPalette } from './palette';
import TintShadesDisplay from './tint-shades';

const colorVariants: ColorPalette[] = [
	{
		label: 'Primary',
		colors: {
			navy: {
				pale: 'bg-navy-pale',
				brighter: 'bg-navy-brighter',
				bright: 'bg-navy-bright',
				base: 'bg-navy',
				dark: 'bg-navy-dark',
        darker: 'bg-navy-darker',
        shade: 'bg-navy-shade',
			},
			teal: {
				pale: 'bg-teal-pale',
				brighter: 'bg-teal-brighter',
				bright: 'bg-teal-bright',
				base: 'bg-teal',
				dark: 'bg-teal-dark',
        darker: 'bg-teal-darker',
        shade: 'bg-teal-shade',
			},
			violette: {
				pale: 'bg-violette-pale',
				brighter: 'bg-violette-brighter',
				bright: 'bg-violette-bright',
				base: 'bg-violette',
				dark: 'bg-violette-dark',
        darker: 'bg-violette-darker',
        shade: 'bg-violette-shade',
			},
			viola: {
				pale: 'bg-viola-pale',
				brighter: 'bg-viola-brighter',
				bright: 'bg-viola-bright',
				base: 'bg-viola',
				dark: 'bg-viola-dark',
        darker: 'bg-viola-darker',
        shade: 'bg-viola-shade',
			},
		},
	},
	{
		label: 'Secondary',
		colors: {
			veridian: {
				pale: 'bg-veridian-pale',
				brighter: 'bg-veridian-brighter',
				bright: 'bg-veridian-bright',
				base: 'bg-veridian',
				dark: 'bg-veridian-dark',
        darker: 'bg-veridian-darker',
        shade: 'bg-veridian-shade',
			},
			spring: {
				pale: 'bg-spring-pale',
				brighter: 'bg-spring-brighter',
				bright: 'bg-spring-bright',
				base: 'bg-spring',
				dark: 'bg-spring-dark',
        darker: 'bg-spring-darker',
        shade: 'bg-spring-shade',
			},
			blue: {
				pale: 'bg-blue-pale',
				brighter: 'bg-blue-brighter',
				bright: 'bg-blue-bright',
				base: 'bg-blue',
				dark: 'bg-blue-dark',
        darker: 'bg-blue-darker',
        shade: 'bg-blue-shade',
			},
			sky: {
				pale: 'bg-sky-pale',
				brighter: 'bg-sky-brighter',
				bright: 'bg-sky-bright',
				base: 'bg-sky',
				dark: 'bg-sky-dark',
        darker: 'bg-sky-darker',
        shade: 'bg-sky-shade',
			},
			sandwisp: {
				pale: 'bg-sandwisp-pale',
				brighter: 'bg-sandwisp-brighter',
				bright: 'bg-sandwisp-bright',
				base: 'bg-sandwisp',
				dark: 'bg-sandwisp-dark',
        darker: 'bg-sandwisp-darker',
        shade: 'bg-sandwisp-shade',
			},
			sol: {
				pale: 'bg-sol-pale',
				brighter: 'bg-sol-brighter',
				bright: 'bg-sol-bright',
				base: 'bg-sol',
				dark: 'bg-sol-dark',
        darker: 'bg-sol-darker',
        shade: 'bg-sol-shade',
			},
			crimson: {
				pale: 'bg-crimson-pale',
				brighter: 'bg-crimson-brighter',
				bright: 'bg-crimson-bright',
				base: 'bg-crimson',
				dark: 'bg-crimson-dark',
        darker: 'bg-crimson-darker',
        shade: 'bg-crimson-shade',
			},
		},
	},
	{
		label: 'Triciary',
		colors: {
			black: {
				bright: 'bg-black-bright',
				base: 'bg-black',
				dark: 'bg-black-dark',
			},
			grey: {
				bright: 'bg-grey-bright',
				base: 'bg-grey',
				dark: 'bg-grey-dark',
			},
			chateau: {
				bright: 'bg-chateau-bright',
				base: 'bg-chateau',
				dark: 'bg-chateau-dark',
			},
			brumosa: 'bg-brumosa',
			mercury: {
				bright: 'bg-mercury-bright',
				base: 'bg-mercury',
				dark: 'bg-mercury-dark',
			},
			azure: {
				bright: 'bg-azure-bright',
				base: 'bg-azure',
				dark: 'bg-azure-dark',
			},
			white: 'bg-white',
		},
	},
];

const meta = { title: 'Tokens/Brand Colors' };

export default meta;

export const palettes = () => ColorDisplay({
	palettes: colorVariants,
});

export const tintShades = () => TintShadesDisplay({
	palettes: colorVariants,
});
