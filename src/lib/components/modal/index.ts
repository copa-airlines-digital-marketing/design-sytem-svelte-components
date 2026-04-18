import { tv } from '../../index.js';
import type { VariantProps } from 'tailwind-variants';
import type { ClassValue } from 'clsx';
import type { Snippet } from 'svelte';
import Modal from './modal.svelte';
import ModalClose from './modal-close.svelte';
import ModalActionBar from './modal-action-bar.svelte';

const modalOverlayVariants = tv({
	base: 'fixed inset-0 z-50 bg-grey-800/80'
});

const modalContentVariants = tv({
	base: [
		'fixed z-50 flex flex-col bg-common-white rounded-lg',
		'shadow-[0px_10px_20px_12px_rgba(0,0,0,0.12)]',
		'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
		'max-h-[90dvh] w-[calc(100%-2rem)]',
		'focus:outline-none'
	].join(' '),
	variants: {
		size: {
			wide: 'sm:max-w-[800px] lg:max-w-[1200px]',
			normal: 'sm:max-w-[560px] lg:max-w-[800px]',
			narrow: 'sm:max-w-[392px]'
		},
		breakpoint: {
			xsmall:
				'rounded-t-lg rounded-b-none top-auto bottom-0 left-0 translate-x-0 translate-y-0 w-full shadow-[0px_-8px_32px_12px_rgba(0,0,0,0.10)]',
			default: ''
		}
	},
	defaultVariants: {
		size: 'normal',
		breakpoint: 'default'
	}
});

const modalCloseRootVariants = tv({
	base: 'flex items-start justify-end pt-2 pr-2 shrink-0',
	variants: {
		titleSize: {
			default: 'pb-0',
			'56px': 'pb-2',
			'40px': 'pb-2',
			'32px': 'pb-2',
			'16px': 'pb-2'
		}
	},
	defaultVariants: {
		titleSize: 'default'
	}
});

const modalCloseTitleVariants = tv({
	base: 'flex-1 font-heading font-bold text-primary pl-14',
	variants: {
		titleSize: {
			default: '',
			'56px': 'text-u2',
			'40px': 'text-u3',
			'32px': 'text-u4',
			'16px': 'text-u5'
		}
	},
	defaultVariants: {
		titleSize: 'default'
	}
});

const modalCloseBtnVariants = tv({
	base: 'p-1 shrink-0 text-primary hover:text-primary-light transition-colors focus-visible:outline-2 focus-visible:outline-primary-faded rounded'
});

const modalActionBarRootVariants = tv({
	base: 'flex flex-col shrink-0'
});

const modalActionBarDividerVariants = tv({
	base: 'w-full h-px bg-grey-200'
});

const modalActionBarActionsVariants = tv({
	base: 'flex items-center gap-2 p-4 flex-wrap',
	variants: {
		align: {
			end: 'justify-end',
			between: 'justify-between'
		}
	},
	defaultVariants: {
		align: 'end'
	}
});

type ModalSize = VariantProps<typeof modalContentVariants>['size'];
type ModalBreakpoint = VariantProps<typeof modalContentVariants>['breakpoint'];
type ModalTitleSize = VariantProps<typeof modalCloseRootVariants>['titleSize'];

export type ModalProps = {
	open?: boolean;
	onClose?: () => void;
	title?: string;
	titleSize?: ModalTitleSize;
	size?: ModalSize;
	breakpoint?: ModalBreakpoint;
	mainActionLabel?: string;
	secondaryActionLabel?: string;
	onMainAction?: () => void;
	onSecondaryAction?: () => void;
	showActionBar?: boolean;
	priceLabel?: string;
	priceSubtext?: string;
	class?: string | null;
	customcn?: (...inputs: ClassValue[]) => string;
	children?: Snippet;
};

export type ModalCloseProps = {
	title?: string;
	titleSize?: ModalTitleSize;
	onClose?: () => void;
	class?: string | null;
	customcn?: (...inputs: ClassValue[]) => string;
};

export type ModalActionBarProps = {
	mainActionLabel?: string;
	secondaryActionLabel?: string;
	onMainAction?: () => void;
	onSecondaryAction?: () => void;
	buttonSize?: 'default' | 'large';
	priceLabel?: string;
	priceSubtext?: string;
	class?: string | null;
	customcn?: (...inputs: ClassValue[]) => string;
};

export {
	Modal,
	ModalClose,
	ModalActionBar,
	modalOverlayVariants,
	modalContentVariants,
	modalCloseRootVariants,
	modalCloseTitleVariants,
	modalCloseBtnVariants,
	modalActionBarRootVariants,
	modalActionBarDividerVariants,
	modalActionBarActionsVariants
};
