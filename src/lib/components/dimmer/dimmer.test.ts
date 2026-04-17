import { vi, describe, test, expect } from 'vitest';

vi.mock('./dimmer.svelte', () => ({ default: {} }));

import { dimmerVariants } from './index.js';

describe('dimmerVariants', () => {
	test('base classes are always present', () => {
		const cls = dimmerVariants();
		expect(cls).toContain('fixed');
		expect(cls).toContain('inset-0');
		expect(cls).toContain('pointer-events-none');
	});

	test('grey 80 (default) applies dark background at 80% opacity', () => {
		const cls = dimmerVariants();
		expect(cls).toContain('bg-grey-800/80');
	});

	test('grey 60 applies dark background at 60% opacity', () => {
		const cls = dimmerVariants({ color: 'grey', opacity: '60' });
		expect(cls).toContain('bg-grey-800/60');
	});

	test('white 80 applies white background at 80% opacity', () => {
		const cls = dimmerVariants({ color: 'white', opacity: '80' });
		expect(cls).toContain('bg-common-white/80');
	});

	test('white 60 applies white background at 60% opacity', () => {
		const cls = dimmerVariants({ color: 'white', opacity: '60' });
		expect(cls).toContain('bg-common-white/60');
	});

	test('grey 80 does not apply white background', () => {
		const cls = dimmerVariants({ color: 'grey', opacity: '80' });
		expect(cls).not.toContain('bg-common-white');
	});

	test('white 60 does not apply grey background', () => {
		const cls = dimmerVariants({ color: 'white', opacity: '60' });
		expect(cls).not.toContain('bg-grey-800');
	});
});
