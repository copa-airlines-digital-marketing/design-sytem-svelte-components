import { HTMLAttributes } from 'svelte/elements';
import { tv } from '../../../index.js';
import { VariantProps } from 'tailwind-variants';
import Container from './container.svelte';
import Box from './box.svelte';
import Icon from './icon.svelte';
import Image from './image.svelte';
import Title from './title.svelte';
import Description from './description.svelte';
import { ClassValue } from 'clsx';

const informativeBoxVariant = tv({
	base: 'p-4 rounded-2xl min-w-268 max-h-272 grid',
	variants: {
		orientation: {
			horizontal: "[grid-template-areas:'head_title''head_description']",
			vertical: "[grid-template-areas:'head''title''description']"
		},
		alignment: {
			left: 'items-start text-left',
			center: 'items-center text-center',
			right: 'items-right text-right'
		}
	}
});

const InformativeBoxIconVariant = tv({
	base: '[grid-area:head] block',
	variants: {
		size: {
			tiny: 'size-10',
			normal: 'size-14',
			big: 'size-20',
			huge: 'size-24'
		}
	}
});

const InformativeBoxImageVariant = tv({
	base: '[grid-area:head] block',
	variants: {
		aspect: {
			'16:9': 'aspect-video',
			'1:1': 'aspect-square'
		},
		size: {
			big: 'size-20',
			huge: 'size-24'
		}
	}
});

const InformativeBoxTitleVariant = tv({
	base: '[grid-area:title]',
	variants: {
		theme: {
			normal: 'text-primary',
			invert: 'text-grey-50'
		}
	}
});

const InformativeBoxDescriptionVariant = tv({
	base: '[grid-area:description]',
	variants: {
		theme: {
			normal: 'text-grey-600',
			invert: 'text-grey-50'
		}
	}
});

type InformativeBoxVariants = HTMLAttributes<HTMLDivElement> & {
	alignment?: VariantProps<typeof informativeBoxVariant>['alignment'];
	orientation?: VariantProps<typeof informativeBoxVariant>['orientation'];
	customcn?: (...inputs: ClassValue[]) => string;
};

type InformativeBoxIconVariants = HTMLAttributes<HTMLSpanElement> & {
	size?: VariantProps<typeof InformativeBoxIconVariant>['size'];
	customcn?: (...inputs: ClassValue[]) => string;
};

type InformativeBoxImageVariants = HTMLAttributes<HTMLImageElement> & {
	aspect?: VariantProps<typeof InformativeBoxImageVariant>['aspect'];
	size?: VariantProps<typeof InformativeBoxImageVariant>['size'];
	customcn?: (...inputs: ClassValue[]) => string;
};

type InformativeBoxTitleVariants = HTMLAttributes<HTMLHeadingElement> & {
	theme?: VariantProps<typeof InformativeBoxTitleVariant>['theme'];
	customcn?: (...inputs: ClassValue[]) => string;
};

type InformativeBoxDescriptionVariants = HTMLAttributes<HTMLParagraphElement> & {
	theme?: VariantProps<typeof InformativeBoxDescriptionVariant>['theme'];
	customcn?: (...inputs: ClassValue[]) => string;
};

export type {
	InformativeBoxVariants,
	InformativeBoxIconVariants,
	InformativeBoxImageVariants,
	InformativeBoxTitleVariants,
	InformativeBoxDescriptionVariants
};

export {
	informativeBoxVariant,
	InformativeBoxIconVariant,
	InformativeBoxImageVariant,
	InformativeBoxTitleVariant,
	InformativeBoxDescriptionVariant,
	Container,
	Container as InformativeBoxContainer,
	Box,
	Box as InformativeBox,
	Icon,
	Icon as InformativeBoxIcon,
	Image,
	Image as InformativeBoxImage,
	Title,
	Title as InformativeBoxTitle,
	Description,
	Description as InformativeBoxDescription
};
