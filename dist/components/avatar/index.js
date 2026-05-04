import { tv } from '../../index.js';
import { default as Root } from './avatar.svelte';
import { default as Image } from './avatar-image.svelte';
import { default as Fallback } from './avatar-fallback.svelte';
export var getAvatarVariants = tv({
    base: 'rounded-full overflow-hidden font-heading font-bold uppercase text-b text-primary border border-primary-ultralight p-0.5',
    variants: {
        size: {
            tiny: 'size-8 font-semibold text-d2',
            petit: 'size-12',
            normal: 'size-14',
            big: 'size-[4.5rem] text-u1 p-1',
            huge: 'size-24 text-u2 p-1'
        },
        stroke: {
            false: 'p-0'
        }
    }
});
export { Root, Root as Avatar, Image, Fallback };
