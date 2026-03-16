import { describe, expect, it } from 'vitest';
import { cn } from './index.js';

describe('cn', () => {
	it('returns empty string for no inputs', () => {
		expect(cn()).toBe('');
	});

	it('merges single class', () => {
		expect(cn('foo')).toBe('foo');
	});

	it('merges multiple classes', () => {
		expect(cn('foo', 'bar')).toContain('foo');
		expect(cn('foo', 'bar')).toContain('bar');
	});

	it('filters null and undefined', () => {
		expect(cn('a', null, undefined, 'b')).toContain('a');
		expect(cn('a', null, undefined, 'b')).toContain('b');
	});

	it('handles conditional class', () => {
		const showBlock = true;
		const showHidden = false;
		expect(cn('base', showHidden && 'hidden', showBlock && 'block')).toContain('base');
		expect(cn('base', showBlock && 'block')).toContain('block');
	});
});
