import { vi, describe, test, expect } from 'vitest';

vi.mock('./avatar.svelte', () => ({ default: {} }));
vi.mock('./avatar-image.svelte', () => ({ default: {} }));
vi.mock('./avatar-fallback.svelte', () => ({ default: {} }));

import { getAvatarVariants } from './index.js';

describe('getAvatarVariants', () => {
	test('base classes are always present', () => {
		const cls = getAvatarVariants();
		expect(cls).toContain('rounded-full');
		expect(cls).toContain('overflow-hidden');
		expect(cls).toContain('font-heading');
	});

	test('tiny size', () => {
		const cls = getAvatarVariants({ size: 'tiny' });
		expect(cls).toContain('size-8');
	});

	test('petit size', () => {
		expect(getAvatarVariants({ size: 'petit' })).toContain('size-12');
	});

	test('normal size', () => {
		expect(getAvatarVariants({ size: 'normal' })).toContain('size-14');
	});

	test('big size', () => {
		expect(getAvatarVariants({ size: 'big' })).toContain('text-u1');
	});

	test('huge size', () => {
		expect(getAvatarVariants({ size: 'huge' })).toContain('size-24');
		expect(getAvatarVariants({ size: 'huge' })).toContain('text-u2');
	});

	test('stroke false removes padding', () => {
		const cls = getAvatarVariants({ stroke: false });
		expect(cls).toContain('p-0');
	});

	test('default has padding from border stroke', () => {
		const cls = getAvatarVariants();
		expect(cls).toContain('border');
		expect(cls).toContain('border-primary-ultralight');
	});
});
