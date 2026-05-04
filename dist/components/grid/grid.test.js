import { describe, expect, it } from 'vitest';
import { gridContainerVariants, getGridContainerClasses, gridItemVariant } from './index.js';
describe('gridContainerVariants', function () {
    it('returns default type classes', function () {
        var result = gridContainerVariants({ type: 'default' });
        expect(result).toContain('container');
        expect(result).toContain('mx-auto');
    });
    it('returns grid type classes', function () {
        var result = gridContainerVariants({ type: 'grid' });
        expect(result).toContain('container-grid');
    });
});
describe('getGridContainerClasses', function () {
    it('returns grid layout classes', function () {
        var result = getGridContainerClasses();
        expect(result).toContain('grid');
        expect(result).toContain('grid-cols-12');
    });
});
describe('gridItemVariant', function () {
    it('returns full distribution by default', function () {
        var result = gridItemVariant({ distribution: 'full' });
        expect(result).toContain('col-span-full');
    });
    it('returns half distribution classes', function () {
        var result = gridItemVariant({ distribution: 'half' });
        expect(result).toContain('sm:col-span-6');
    });
    it('returns third distribution classes', function () {
        var result = gridItemVariant({ distribution: 'third' });
        expect(result).toContain('md:col-span-3');
    });
});
