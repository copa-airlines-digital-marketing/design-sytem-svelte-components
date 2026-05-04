import { tv } from '../../index.js';
import Container from './container.svelte';
import ContainerItem from './item.svelte';
var getGridContainerClasses = function () { return 'grid grid-cols-12 gap-grid-gutter'; };
var gridContainerVariants = tv({
    base: 'mx-auto',
    variants: {
        type: {
            default: 'container',
            grid: 'container-grid'
        }
    }
});
var gridItemVariant = tv({
    base: 'col-span-full',
    variants: {
        distribution: {
            full: '',
            half: 'sm:col-span-6',
            four: 'md:col-span-4',
            third: 'md:col-span-3',
            '4 / 8': 'md:odd:col-span-4 md:even:col-span-8',
            '8 / 4': 'md:odd:col-span-8 md:even:col-span-4'
        }
    }
});
export { Container, ContainerItem, gridContainerVariants, gridItemVariant, getGridContainerClasses };
