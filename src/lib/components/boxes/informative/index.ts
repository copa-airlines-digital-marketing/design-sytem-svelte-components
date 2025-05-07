import type { HTMLAttributes } from 'svelte/elements';
import type { VariantProps } from 'tailwind-variants';
import type { ClassValue } from 'clsx';
import { tv } from '../../../index.js';
import Container from './container.svelte';
import Box from './box.svelte';
import Icon from './icon.svelte';
import Image from './image.svelte';
import Title from './title.svelte';
import Description from './description.svelte';

const informativeBoxVariant = tv({
	base: 'p-4 rounded-2xl max-h-64 grid border border-grey-300',
	variants: {
		orientation: {
			horizontal: "[grid-template-areas:'head_title''head_description'] min-w-106",
			vertical: "[grid-template-areas:'head''title''description'] min-w-67"
		},
		alignment: {
			left: 'justify-items-start text-left',
			center: 'justify-items-center text-center',
			right: 'justify-items-right text-right'
		}
	}
});

const InformativeBoxIconVariant = tv({
	base: '[grid-area:head] block mb-4',
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
	base: '[grid-area:head] block mb-4',
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
	base: '[grid-area:title] mt-0 mb-2',
	variants: {
		theme: {
			normal: 'text-primary',
			invert: 'text-grey-50'
		}
	}
});

const InformativeBoxDescriptionVariant = tv({
	base: '[grid-area:description] my-0',
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
