import { tv } from '../../../index.js';
import type { HTMLAttributes } from 'svelte/elements';
import type { VariantProps } from 'tailwind-variants';
import Container from './container.svelte';
import ContainerItem from './item.svelte';

const getGridContainerClasses = () => 'grid grid-cols-12 gap-grid-gutter';

const gridContainerVariants = tv({
	base: 'mx-auto',
	variants: {
		type: {
			default: 'container',
			grid: 'container-grid'
		}
	}
});

const gridItemVariant = tv({
	base: 'col-span-full',
	variants: {
		distribution: {
			full: '',
			half: 'sm:col-span-6',
			four: 'md:col-span-4',
			third: 'md:col-span-3',
			'4 / 8': 'md:odd:col-span-4 md:even:col-span-8',
			'8 / 4': 'md:odd:col-span-8 md:even:col-span-4'
		}
	}
});

type Distribution = VariantProps<typeof gridItemVariant>['distribution'];
type Type = VariantProps<typeof gridContainerVariants>['type'];

type ContainerItemProps = HTMLAttributes<HTMLDivElement> & {
	distribution?: Distribution;
};

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
	type?: Type;
};

export type { ContainerProps, ContainerItemProps };

export {
	Container,
	ContainerItem,
	gridContainerVariants,
	gridItemVariant,
	getGridContainerClasses
};
