import { tv } from '$lib/index.js';
import type { VariantProps } from 'tailwind-variants';
import type { HTMLAttributes } from 'svelte/elements';
import Divider from './divider.svelte';

const dividerVariants = tv({
	base: 'block opacity-50',
	variants: {
		lineType: {
			solid: 'bg-no-repeat',
			dashed: 'bg-repeat-space'
		},
		opaque: {
			true: 'opacity-100'
		},
		orientation: {
			horizontal: 'h-px w-full',
			vertical: 'h-full w-px'
		},
		spacing: {
			true: 'my-1'
		},
		theme: {
			light: 'bg-grey-300',
			dark: 'bg-grey-50'
		}
	}
});

type LineType = VariantProps<typeof dividerVariants>['lineType'];
type Opaque = VariantProps<typeof dividerVariants>['opaque'];
type Orientation = VariantProps<typeof dividerVariants>['orientation'];
type Spacing = VariantProps<typeof dividerVariants>['spacing'];
type Theme = VariantProps<typeof dividerVariants>['theme'];

type Props = HTMLAttributes<HTMLSpanElement> & {
	lineType?: LineType;
	opaque?: Opaque;
	orientation?: Orientation;
	spacing?: Spacing;
	theme?: Theme;
};

export type { Props, Props as DividerProps };

export { Divider, dividerVariants };
