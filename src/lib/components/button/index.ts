import type { HTMLButtonAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import { type VariantProps } from 'tailwind-variants';
import { tv } from '../../index.js';
import type { ClassValue } from 'clsx';

const buttonVariants = tv({
	base: 'font-body font-medium min-w-[4.563rem] max-h-[5rem] flex items-center justify-center text-center outline-offset-4 outline-none outline-2 border active:outline-solid focus:outline-solid disabled:cursor-not-allowed disabled:outline-0 select-none',
	variants: {
		size: {
			slim: 'px-4 py-2 gap-1 rounded-3xl text-d3 *:max-h-4',
			default: 'px-4 py-3 rounded-full gap-1 text-d1 *:max-h-5',
			large: 'px-6 py-4 rounded-full gap-1 text-b *:max-h-6',
			giant: 'px-8 py-6 gap-2 rounded-full text-2xl *:max-h-8',
			'fancy-big': 'px-4 py-3 rounded-full gap-2 text-d1 *:max-h-10',
			'fancy-small': 'px-4 py-1 rounded-full gap-2 text-d1  *:max-h-8',
			link: 'text-d3 sm:text-d1 md:text-b *:max-h-4 sm:*:max-h-5 md:*:max-h-6 outline-none min-w-max border-0 border-b border-b-transparent hover:border-b-primary-light active:border-b-primary-light focus:border-b-primary-light hover:outline-none active:outline-none focus:outline-none'
		},
		variant: {
			'solid-primary-main':
				'bg-primary text-common-white outline-primary border-primary hover:bg-primary-ultradark active:bg-primary focus:bg-primary-ultradark disabled:text-grey-500 disabled:bg-grey-100',
			'solid-primary-light':
				'bg-primary-light text-common-white outline-primary-light border-primary-light hover:bg-primary-ultradark active:bg-primary-light focus:bg-primary-ultradark disabled:text-grey-500 disabled:bg-grey-100',
			'outline-primary-main':
				'text-primary outline-primary border-2 border-primary hover:bg-background-lightblue focus:bg-background-lightblue active:bg-primary-ultralight disabled:border-grey-500 disabled:text-grey-500 disabled:bg-grey-100',
			'outline-invert': 'text-common-white border-common-white',
			'transparent-primary-main':
				'text-primary border-transparent hover:bg-background-lightblue active:bg-background-lightblue focus:bg-background-lightblue active:outline-primary-faded focus:outline-primary-faded',
			link: 'text-primary hover:text-primary-light focus:text-primary-light active:text-primary-light',
			'link-invert': 'text-grey-50 hover:text-grey-50 focus:text-grey-50 active:text-grey-50'
		}
	},
	defaultVariants: {
		variant: 'solid-primary-main',
		size: 'default'
	}
});

type Variant = VariantProps<typeof buttonVariants>['variant'];
type Size = VariantProps<typeof buttonVariants>['size'];

/** Component-specific props; rest are passed through to the primitive (restProps) */
type ButtonComponentProps = {
	variant?: Variant;
	size?: Size;
	class?: string | null;
	customcn?: (...inputs: ClassValue[]) => string;
	children?: Snippet;
};

/** Props = our props + button element rest; destructuring our props leaves restProps correctly typed for ButtonPrimitive.Root */
export type Props = ButtonComponentProps & Omit<HTMLButtonAttributes, keyof ButtonComponentProps>;

export type ButtonProps = Props;

export { default as Button } from './button.svelte';
export { buttonVariants };
