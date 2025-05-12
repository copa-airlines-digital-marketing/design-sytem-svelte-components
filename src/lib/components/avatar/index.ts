import type { Avatar as AvatarPrimitive } from 'bits-ui';
import { type VariantProps } from 'tailwind-variants';
import { tv } from '../../index.js';
import { ClassValue } from 'clsx';
import { default as Root } from './avatar.svelte';
import { default as Image } from './avatar-image.svelte';
import { default as Fallback } from './avatar-fallback.svelte';

export const getAvatarVariants = tv({
	base: 'rounded-full overflow-hidden font-heading font-bold uppercase text-b text-primary border border-primary-ultralight p-0.5',
	variants: {
		size: {
			tiny: 'size-8 font-semibold text-d2',
			petit: 'size-12',
			normal: 'size-14',
			big: 'size-[4.5rem] text-u1 p-1',
			huge: 'size-24 text-u2 p-1'
		},
		stroke: {
			false: 'p-0'
		}
	}
});

type Size = VariantProps<typeof getAvatarVariants>['size'];
type Stroke = VariantProps<typeof getAvatarVariants>['stroke'];

export type Props = AvatarPrimitive.Props & {
	size?: Size;
	stroke?: Stroke;
	customcn?: (...inputs: ClassValue[]) => string;
};

export { Root, Root as Avatar, Image, Fallback };
