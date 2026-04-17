import { describe, it, expect } from 'vitest';
import { selectItemVariants } from './index.js';

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

describe('selectItemVariants', () => {
	it('applies all base classes', () => {
		const result = selectItemVariants();
		for (const cls of BASE_CLASSES) {
			expect(result).toContain(cls);
		}
	});

	it('includes data-[highlighted] hover styling', () => {
		expect(selectItemVariants()).toContain('data-[highlighted]:bg-background-lightblue');
	});

	it('includes data-[disabled] disabled styling', () => {
		const result = selectItemVariants();
		expect(result).toContain('data-[disabled]:bg-grey-100');
		expect(result).toContain('data-[disabled]:cursor-not-allowed');
		expect(result).toContain('data-[disabled]:pointer-events-none');
	});

	it('returns a string', () => {
		expect(typeof selectItemVariants()).toBe('string');
	});
});
