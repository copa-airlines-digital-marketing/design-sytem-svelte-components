import { tv } from '../../index.js';
import Divider from './divider.svelte';
var dividerVariants = tv({
    base: 'block opacity-50',
    variants: {
        lineType: {
            solid: 'bg-no-repeat',
            dashed: 'bg-repeat-space'
        },
        opaque: {
            true: 'opacity-100'
        },
        orientation: {
            horizontal: 'h-px w-full',
            vertical: 'h-full w-px'
        },
        spacing: {
            true: 'my-1'
        },
        theme: {
            light: 'bg-grey-300',
            dark: 'bg-grey-50'
        }
    }
});
export { Divider, dividerVariants };
