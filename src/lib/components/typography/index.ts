import { type VariantProps } from 'tailwind-variants';
import { tv, cn } from '../../index.js';
import type { HTMLAttributes, HTMLLinkAttributes } from 'svelte/elements';
import Heading from './heading.svelte';
import Body from './body.svelte';
import Caption from './caption.svelte';
import Overline from './overline.svelte';
import Link from './link.svelte';
import { ClassValue } from 'clsx';

const typography = tv({
	base: 'text-b font-suisse font-normal mb-6',
	variants: {
		size: {
			u6: 'text-u6',
			u5: 'text-u5',
			u4: 'text-u4',
			u3: 'text-u3',
			u2: 'text-u2',
			u1: 'text-u1',
			b: 'text-b',
			d1: 'text-d1',
			d2: 'text-d2 font-semibold',
			d3: 'text-d3',
			'caption-large': 'text-u1',
			caption: 'text-b font-semibold',
			'caption-small': 'text-d1 font-semibold',
			'caption-tiny': 'text-d3 font-semibold',
			'body-large': 'text-b my-2',
			body: 'text-d1',
			'body-small': 'text-d3 mb-4',
			overline: 'text-d2 font-medium uppercase',
			'overline-small': 'text-d1'
		},
		variant: {
			h1: 'text-u5 font-gilroy font-medium text-primary mt-4 mb-8',
			h2: 'text-u2 font-gilroy font-bold text-primary-dark mt-4 mb-6',
			h3: 'text-u1 font-gilroy font-bold text-grey-700 mt-4 mb-4',
			h4: 'text-b font-gilroy font-bold text-grey-700 mt-4 mb-4',
			'display-big': 'text-u6 font-gilroy font-bold text-primary',
			display: 'text-u4 font-gilroy font-bold text-primary',
			'display-small': 'text-u2 font-gilroy font-normal text-grey-700',
			'display-tiny': 'text-u1 font-gilroy font-normal text-grey-700',
			overline: 'text-grey-700',
			'overline-invert': 'text-common-white',
			caption: 'text-grey-700',
			'caption-secondary': 'text-grey-600',
			'caption-invert': 'text-common-white',
			'caption-invert-secondary': 'text-grey-200',
			body: 'text-grey-600',
			'body-emphasis': 'text-grey-700',
			'body-invert': 'text-grey-200',
			'body-invert-emphasis': 'text-common-white',
			link: 'text-primary-light hover:underline',
			'link-invert': 'text-grey-200 underline',
			'link-secondary': 'text-grey-600 hover:underline'
		}
	},
	defaultVariants: {
		size: 'body',
		variant: 'body'
	}
});

type Variant = VariantProps<typeof typography>['variant'];
type Size = VariantProps<typeof typography>['size'];

type Typography = {
	size?: Size;
	variant?: Variant;
};

type HeadingElements = Pick<HTMLElementTagNameMap, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;

type HTMLTextElements = Pick<
	HTMLElementTagNameMap,
	| 'p'
	| 'span'
	| 'strong'
	| 'em'
	| 'blockquote'
	| 'q'
	| 'code'
	| 'pre'
	| 'ol'
	| 'ul'
	| 'li'
	| 'dt'
	| 'dd'
	| 'mark'
	| 'ins'
	| 'del'
	| 'sup'
	| 'sub'
	| 'small'
	| 'i'
	| 'b'
	| 'th'
	| 'td'
>;

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
	tag?: keyof HeadingElements;
	variant?: keyof Pick<
		Variant,
		'h1' | 'h2' | 'h3' | 'h4' | 'display-big' | 'display' | 'display-small' | 'display-tiny'
	>;
	customcn?: (...inputs: ClassValue[]) => string;
};

type BodyProps = {
	tag?: keyof HTMLTextElements;
	size?: keyof Pick<Size, 'body' | 'body-large' | 'body-small'>;
	variant?: keyof Pick<Variant, 'body' | 'body-emphasis' | 'body-invert' | 'body-invert-emphasis'>;
	customcn?: (...inputs: ClassValue[]) => string;
};

type CaptionProps = {
	tag?: keyof HTMLTextElements;
	size?: keyof Pick<Size, 'caption' | 'caption-large' | 'caption-small' | 'caption-tiny'>;
	variant?: keyof Pick<
		Variant,
		'caption' | 'caption-secondary' | 'caption-invert' | 'caption-invert-secondary'
	>;
	customcn?: (...inputs: ClassValue[]) => string;
};

type OverlineProps = {
	tag?: keyof HTMLTextElements;
	size?: keyof Pick<Size, 'overline' | 'overline-small'>;
	customcn?: (...inputs: ClassValue[]) => string;
};

type LinkProps = HTMLLinkAttributes & {
	variant?: keyof Pick<Variant, 'link' | 'link-invert' | 'link-secondary'>;
	customcn?: (...inputs: ClassValue[]) => string;
};

const getTypography = (size?: Size, variant?: Variant, className?: string) => {
	return cn(typography({ size, variant, className }));
};

const getTypographySize = (size?: Size, className?: string) =>
	getTypography(size, undefined, className);

const getTypographyVariant = (variant?: Variant, className?: string) =>
	getTypography(undefined, variant, className);

export type {
	Typography,
	HTMLTextElements,
	HeadingProps,
	BodyProps,
	CaptionProps,
	OverlineProps,
	LinkProps
};

export {
	Heading,
	Body,
	Caption,
	Overline,
	Link,
	getTypography,
	getTypographySize,
	getTypographyVariant
};
