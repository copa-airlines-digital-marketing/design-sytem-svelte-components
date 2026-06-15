import { tv } from '../../index.js';
import type { ClassValue } from 'clsx';
import type { HTMLAttributes } from 'svelte/elements';
import Counter from './counter.svelte';

const counterRootVariants = tv({
	base: 'inline-flex items-center gap-1'
});

const counterButtonVariants = tv({
	base: [
		'group relative flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-full p-0',
		'overflow-visible outline-none transition-colors',
		'disabled:pointer-events-none disabled:cursor-not-allowed disabled:text-grey-300'
	].join(' '),
	variants: {
		error: {
			true: 'text-system-error hover:text-system-error focus-visible:text-system-error active:text-system-error',
			false:
				'text-primary hover:text-primary-ultradark focus-visible:text-primary-ultradark active:text-primary-ultradark'
		}
	},
	defaultVariants: {
		error: false
	}
});

const counterValueVariants = tv({
	base: 'flex w-[35px] shrink-0 items-center justify-center text-center font-body text-[20px] font-normal leading-[20px] text-grey-700',
	variants: {
		disabled: {
			true: 'text-grey-300',
			false: ''
		}
	},
	defaultVariants: {
		disabled: false
	}
});

function clampCounterValue(value: number, min: number, max: number) {
	return Math.min(Math.max(value, min), max);
}

function getCounterNextValue(value: number, direction: 'decrement' | 'increment', step: number) {
	return direction === 'decrement' ? value - step : value + step;
}

type CounterComponentProps = {
	value?: number;
	min?: number;
	max?: number;
	step?: number;
	disabled?: boolean;
	error?: boolean;
	ariaLabel?: string;
	decrementAriaLabel?: string;
	incrementAriaLabel?: string;
	formatValue?: (value: number) => string;
	onValueChange?: (value: number) => void;
	class?: string | null;
	buttonClass?: string | null;
	valueClass?: string | null;
	customcn?: (...inputs: ClassValue[]) => string;
};

export type CounterProps = CounterComponentProps &
	Omit<HTMLAttributes<HTMLDivElement>, keyof CounterComponentProps>;

export {
	Counter,
	counterRootVariants,
	counterButtonVariants,
	counterValueVariants,
	clampCounterValue,
	getCounterNextValue
};
