import { describe, expect, it } from 'vitest';
import { gridContainerVariants, getGridContainerClasses, gridItemVariant } from './index.js';

describe('gridContainerVariants', () => {
	it('returns default type classes', () => {
		const result = gridContainerVariants({ type: 'default' });
		expect(result).toContain('container');
		expect(result).toContain('mx-auto');
	});

	it('returns grid type classes', () => {
		const result = gridContainerVariants({ type: 'grid' });
		expect(result).toContain('container-grid');
	});
});

describe('getGridContainerClasses', () => {
	it('returns grid layout classes', () => {
		const result = getGridContainerClasses();
		expect(result).toContain('grid');
		expect(result).toContain('grid-cols-12');
	});
});

describe('gridItemVariant', () => {
	it('returns full distribution by default', () => {
		const result = gridItemVariant({ distribution: 'full' });
		expect(result).toContain('col-span-full');
	});

	it('returns half distribution classes', () => {
		const result = gridItemVariant({ distribution: 'half' });
		expect(result).toContain('sm:col-span-6');
	});

	it('returns third distribution classes', () => {
		const result = gridItemVariant({ distribution: 'third' });
		expect(result).toContain('md:col-span-3');
	});
});
