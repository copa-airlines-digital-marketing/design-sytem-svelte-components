import { vi, describe, test, expect } from 'vitest';

vi.mock('./radio-group.svelte', () => ({ default: {} }));
vi.mock('./radio-item.svelte', () => ({ default: {} }));
vi.mock('bits-ui', () => ({ RadioGroup: {} }));

import { radioGroupVariants, radioItemVariants, radioIndicatorVariants } from './index.js';

describe('radioGroupVariants', () => {
	test('stacks items vertically with gap', () => {
		const cls = radioGroupVariants();
		expect(cls).toContain('flex');
		expect(cls).toContain('flex-col');
		expect(cls).toContain('gap-2');
	});
});

describe('radioItemVariants', () => {
	test('is an inline flex row with pointer cursor and group for state propagation', () => {
		const cls = radioItemVariants();
		expect(cls).toContain('inline-flex');
		expect(cls).toContain('items-center');
		expect(cls).toContain('gap-2');
		expect(cls).toContain('cursor-pointer');
		expect(cls).toContain('group');
	});
});

describe('radioIndicatorVariants', () => {
	test('is a 24px rounded-full circle', () => {
		const cls = radioIndicatorVariants();
		expect(cls).toContain('size-6');
		expect(cls).toContain('rounded-full');
		expect(cls).toContain('border');
	});

	test('unselected default: white bg + grey border', () => {
		const cls = radioIndicatorVariants();
		expect(cls).toContain('bg-common-white');
		expect(cls).toContain('border-grey-500');
	});

	test('selected state via data-state CSS: primary bg + dark border', () => {
		const cls = radioIndicatorVariants();
		expect(cls).toContain('group-data-[state=checked]:bg-primary');
		expect(cls).toContain('group-data-[state=checked]:border-primary-ultradark');
	});

	test('selected state: visible white dot', () => {
		const cls = radioIndicatorVariants();
		expect(cls).toContain('group-data-[state=checked]:after:opacity-100');
		expect(cls).toContain('after:bg-common-white');
	});

	test('unselected: dot is hidden by default', () => {
		const cls = radioIndicatorVariants();
		expect(cls).toContain('after:opacity-0');
	});

	test('has focus ring for keyboard navigation', () => {
		const cls = radioIndicatorVariants();
		expect(cls).toContain('group-focus-visible:ring-2');
		expect(cls).toContain('group-focus-visible:ring-primary-faded');
	});

	test('disabled: grey fill + light border', () => {
		const cls = radioIndicatorVariants();
		expect(cls).toContain('group-disabled:bg-grey-100');
		expect(cls).toContain('group-disabled:border-grey-300');
	});

	test('disabled + selected: grey dot', () => {
		const cls = radioIndicatorVariants();
		expect(cls).toContain('group-disabled:group-data-[state=checked]:after:bg-grey-300');
	});

	test('has inner dot pseudo-element', () => {
		const cls = radioIndicatorVariants();
		expect(cls).toContain("after:content-['']");
		expect(cls).toContain('after:size-2');
		expect(cls).toContain('after:rounded-full');
	});
});
