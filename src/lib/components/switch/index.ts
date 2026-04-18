import { Switch as SwitchPrimitive } from 'bits-ui';
import { tv } from '../../index.js';
import type { ClassValue } from 'clsx';
import Switch from './switch.svelte';

const switchRootVariants = tv({
	base: [
		'relative inline-flex h-6 w-12 shrink-0 cursor-pointer items-center rounded-full transition-colors',
		'outline-none focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-primary-faded',
		'data-[state=unchecked]:bg-grey-300',
		'data-[state=checked]:bg-primary',
		'data-[state=unchecked]:hover:bg-grey-200',
		'data-[state=checked]:hover:bg-primary-light',
		'data-[state=unchecked]:active:bg-primary-ultradark',
		'data-[state=checked]:active:bg-primary-ultradark',
		'disabled:cursor-not-allowed disabled:opacity-50'
	].join(' ')
});

const switchThumbVariants = tv({
	base: [
		'pointer-events-none block size-[22px] rounded-full bg-common-white transition-transform',
		'shadow-[0px_3px_4px_rgba(0,0,0,0.15),_0px_1px_1px_rgba(0,0,0,0.11)]',
		'data-[state=checked]:translate-x-[25px]',
		'data-[state=unchecked]:translate-x-[1px]'
	].join(' ')
});

type SwitchComponentProps = {
	checked?: boolean;
	disabled?: boolean;
	class?: string | null;
	customcn?: (...inputs: ClassValue[]) => string;
	onCheckedChange?: (checked: boolean) => void;
};

export type SwitchProps = SwitchComponentProps &
	Omit<SwitchPrimitive.RootProps, keyof SwitchComponentProps>;

export { Switch, switchRootVariants, switchThumbVariants };
