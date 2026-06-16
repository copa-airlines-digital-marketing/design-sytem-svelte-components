import { ToggleGroup as ToggleGroupPrimitive } from 'bits-ui';
import type { ClassValue, VariantProps } from 'tailwind-variants';
import { tv } from '../../index.js';
import ButtonGroup from './button-group.svelte';

export const buttonGroupRootVariants = tv({
	base: 'inline-flex w-full max-w-[25rem] flex-col items-start justify-start gap-2'
});

export const buttonGroupLabelVariants = tv({
	base: 'w-full font-body text-d1 font-normal leading-5 text-[#333333]'
});

export const buttonGroupFrameVariants = tv({
	base: [
		'relative inline-flex w-full items-center justify-start gap-1 overflow-hidden rounded-full bg-white p-1',
		'outline outline-1 -outline-offset-1 outline-[#CCCCCB]'
	].join(' '),
	variants: {
		disabled: {
			true: 'bg-grey-50 outline-grey-200',
			false: ''
		}
	},
	defaultVariants: {
		disabled: false
	}
});

export const buttonGroupChipVariants = tv({
	base: [
		'relative z-10 inline-flex min-w-0 flex-1 items-center justify-center rounded-full text-center font-body font-medium',
		'outline outline-1 -outline-offset-1 outline-transparent transition-colors',
		'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-faded',
		'disabled:cursor-not-allowed'
	].join(' '),
	variants: {
		size: {
			small: 'h-8 px-2 py-2 text-d3 leading-4',
			default: 'h-10 px-2 py-3 text-d3 leading-4',
			large: 'h-12 px-3 py-4 text-d1 leading-5'
		},
		active: {
			true: 'text-[#0E68FF]',
			false: 'bg-transparent text-[#666666] hover:bg-grey-50 hover:text-[#0E68FF]'
		},
		disabled: {
			true: 'pointer-events-none text-grey-300',
			false: ''
		}
	},
	compoundVariants: [
		{
			active: true,
			disabled: true,
			class: 'bg-grey-100 text-grey-300 outline-grey-300'
		}
	],
	defaultVariants: {
		size: 'default',
		active: false,
		disabled: false
	}
});

export const buttonGroupIndicatorVariants = tv({
	base: [
		'pointer-events-none absolute bottom-1 left-1 top-1 z-0 rounded-full bg-[#D6E3FF] transition-transform duration-200 ease-out',
		'outline outline-1 -outline-offset-1 outline-[#0E68FF]'
	].join(' '),
	variants: {
		disabled: {
			true: 'bg-grey-100 outline-grey-300',
			false: ''
		}
	},
	defaultVariants: {
		disabled: false
	}
});

export type ButtonGroupOption = {
	value: string;
	label: string;
	disabled?: boolean;
	ariaLabel?: string;
};

export type ButtonGroupSize = NonNullable<VariantProps<typeof buttonGroupChipVariants>['size']>;

type ButtonGroupComponentProps = {
	value?: string;
	options?: ButtonGroupOption[];
	label?: string | null;
	disabled?: boolean;
	size?: ButtonGroupSize;
	class?: ClassValue;
	frameClass?: ClassValue;
	labelClass?: ClassValue;
	chipClass?: ClassValue;
	customcn?: (...classes: ClassValue[]) => string;
	onValueChange?: (value: string) => void;
};

export type ButtonGroupProps = ButtonGroupComponentProps &
	Omit<
		ToggleGroupPrimitive.RootProps,
		keyof ButtonGroupComponentProps | 'type' | 'value' | 'onValueChange'
	>;

export { ButtonGroup };
