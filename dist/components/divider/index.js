import { tv } from '../../index.js';
import Divider from './divider.svelte';
var dividerVariants = tv({
    base: 'block border-0 border-solid opacity-50',
    variants: {
        lineType: {
            solid: 'border-solid',
            dashed: 'border-dashed'
        },
        opaque: {
            true: 'opacity-100'
        },
        orientation: {
            horizontal: 'w-full border-t',
            vertical: 'h-full border-l'
        },
        spacing: {
            true: 'my-1'
        },
        theme: {
            light: 'border-grey-300',
            dark: 'border-grey-50'
        }
    }
});
export { Divider, dividerVariants };
