import { describe, it, expect } from 'vitest';
import { autocompleteItemVariants } from './index.js';

const BASE_CLASSES = [
	'flex',
	'w-full',
	'items-center',
	'gap-2',
	'px-3',
	'py-3',
	'cursor-default',
	'select-none',
	'outline-none',
	'transition-colors',
	'bg-common-white'
];

describe('autocompleteItemVariants', () => {
	it('applies all base classes', () => {
		const result = autocompleteItemVariants();
		for (const cls of BASE_CLASSES) {
			expect(result).toContain(cls);
		}
	});

	it('includes data-[highlighted] hover styling', () => {
		expect(autocompleteItemVariants()).toContain('data-[highlighted]:bg-background-lightblue');
	});

	it('includes data-[disabled] disabled styling', () => {
		const result = autocompleteItemVariants();
		expect(result).toContain('data-[disabled]:bg-grey-100');
		expect(result).toContain('data-[disabled]:cursor-not-allowed');
		expect(result).toContain('data-[disabled]:pointer-events-none');
	});

	it('returns a string', () => {
		expect(typeof autocompleteItemVariants()).toBe('string');
	});
});
