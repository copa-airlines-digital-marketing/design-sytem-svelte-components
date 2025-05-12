import type { HTMLAttributes } from 'svelte/elements';
import type { ClassValue, VariantProps } from 'tailwind-variants';
import { tv } from '../../index.js';
import Carrot from './carrot.svelte';

const iconWithDirectionVariants = tv({
	variants: {
		direction: {
			up: 'rotate-',
			down: 'rotate-0',
			left: 'fill-grey-600',
			right: ''
		}
	}
});

type IconWithDirection = HTMLAttributes<HTMLElement> & {
	direction?: VariantProps<typeof iconWithDirectionVariants>['direction'];
	customcn?: (...inputs: ClassValue[]) => string;
};

export type { IconWithDirection };

export { iconWithDirectionVariants, Carrot };
