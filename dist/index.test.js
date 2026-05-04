import { describe, expect, it } from 'vitest';
import { cn } from './index.js';
describe('cn', function () {
    it('returns empty string for no inputs', function () {
        expect(cn()).toBe('');
    });
    it('merges single class', function () {
        expect(cn('foo')).toBe('foo');
    });
    it('merges multiple classes', function () {
        expect(cn('foo', 'bar')).toContain('foo');
        expect(cn('foo', 'bar')).toContain('bar');
    });
    it('filters null and undefined', function () {
        expect(cn('a', null, undefined, 'b')).toContain('a');
        expect(cn('a', null, undefined, 'b')).toContain('b');
    });
    it('handles conditional class', function () {
        var showBlock = true;
        var showHidden = false;
        expect(cn('base', showHidden && 'hidden', showBlock && 'block')).toContain('base');
        expect(cn('base', showBlock && 'block')).toContain('block');
    });
});
