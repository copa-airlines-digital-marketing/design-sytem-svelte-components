import { vi, describe, test, expect } from 'vitest';

vi.mock('./modal.svelte', () => ({ default: {} }));
vi.mock('./modal-close.svelte', () => ({ default: {} }));
vi.mock('./modal-action-bar.svelte', () => ({ default: {} }));

import {
	modalOverlayVariants,
	modalContentVariants,
	modalCloseRootVariants,
	modalCloseTitleVariants,
	modalCloseBtnVariants,
	modalActionBarRootVariants,
	modalActionBarDividerVariants,
	modalActionBarActionsVariants
} from './index.js';

describe('modalOverlayVariants', () => {
	test('has fixed full-screen classes', () => {
		const cls = modalOverlayVariants();
		expect(cls).toContain('fixed');
		expect(cls).toContain('inset-0');
		expect(cls).toContain('z-50');
	});

	test('has dimmer background', () => {
		const cls = modalOverlayVariants();
		expect(cls).toContain('bg-grey-800/80');
	});
});

describe('modalContentVariants', () => {
	test('has base layout classes', () => {
		const cls = modalContentVariants();
		expect(cls).toContain('fixed');
		expect(cls).toContain('z-50');
		expect(cls).toContain('flex');
		expect(cls).toContain('flex-col');
		expect(cls).toContain('bg-common-white');
		expect(cls).toContain('rounded-lg');
	});

	test('normal size applies medium max-width', () => {
		const cls = modalContentVariants({ size: 'normal' });
		expect(cls).toContain('sm:max-w-[560px]');
	});

	test('narrow size applies narrow max-width', () => {
		const cls = modalContentVariants({ size: 'narrow' });
		expect(cls).toContain('sm:max-w-[392px]');
	});

	test('wide size applies wide max-width', () => {
		const cls = modalContentVariants({ size: 'wide' });
		expect(cls).toContain('sm:max-w-[800px]');
	});

	test('xsmall breakpoint applies bottom-sheet styles', () => {
		const cls = modalContentVariants({ breakpoint: 'xsmall' });
		expect(cls).toContain('bottom-0');
		expect(cls).toContain('w-full');
	});
});

describe('modalCloseRootVariants', () => {
	test('has flex layout', () => {
		const cls = modalCloseRootVariants();
		expect(cls).toContain('flex');
		expect(cls).toContain('items-start');
	});
});

describe('modalCloseTitleVariants', () => {
	test('has heading font and primary color', () => {
		const cls = modalCloseTitleVariants();
		expect(cls).toContain('font-heading');
		expect(cls).toContain('font-bold');
		expect(cls).toContain('text-primary');
	});
});

describe('modalCloseBtnVariants', () => {
	test('has primary text color', () => {
		const cls = modalCloseBtnVariants();
		expect(cls).toContain('text-primary');
	});
});

describe('modalActionBarRootVariants', () => {
	test('has flex column layout', () => {
		const cls = modalActionBarRootVariants();
		expect(cls).toContain('flex');
		expect(cls).toContain('flex-col');
	});
});

describe('modalActionBarDividerVariants', () => {
	test('has separator styles', () => {
		const cls = modalActionBarDividerVariants();
		expect(cls).toContain('w-full');
		expect(cls).toContain('h-px');
		expect(cls).toContain('bg-grey-200');
	});
});

describe('modalActionBarActionsVariants', () => {
	test('has flex layout', () => {
		const cls = modalActionBarActionsVariants();
		expect(cls).toContain('flex');
		expect(cls).toContain('items-center');
		expect(cls).toContain('gap-2');
	});

	test('end align applies justify-end', () => {
		const cls = modalActionBarActionsVariants({ align: 'end' });
		expect(cls).toContain('justify-end');
	});

	test('between align applies justify-between', () => {
		const cls = modalActionBarActionsVariants({ align: 'between' });
		expect(cls).toContain('justify-between');
	});
});
