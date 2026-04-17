import { tv } from '../../index.js';
import type { VariantProps } from 'tailwind-variants';
import type { HTMLAttributes } from 'svelte/elements';
import Divider from './divider.svelte';

const dividerVariants = tv({
	base: 'block border-0 border-solid opacity-50',
	variants: {
		lineType: {
			solid: 'border-solid',
			dashed: 'border-dashed'
		},
		opaque: {
			true: 'opacity-100'
		},
		orientation: {
			horizontal: 'w-full border-t',
			vertical: 'h-full border-l'
		},
		spacing: {
			true: 'my-1'
		},
		theme: {
			light: 'border-grey-300',
			dark: 'border-grey-50'
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
