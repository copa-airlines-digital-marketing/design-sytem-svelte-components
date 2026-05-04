import { writable } from 'svelte/store';
import { tv } from '../../index.js';
import { getContext, setContext } from 'svelte';
import Pill from './pill.svelte';
import PillText from './text.svelte';
import PillIcon from './icon.svelte';
var PILL_CONTEXT = Symbol('Pill');
var pillVariants = tv({
    base: 'inline-grid gap-1 items-center grid-rows-1 rounded-full py-0.5 px-3 border border-transparent',
    variants: {
        theme: {
            default: 'bg-primary',
            transparent: 'bg-transparent'
        },
        outline: {
            true: 'border-common-white'
        }
    }
});
var iconVariants = tv({
    base: 'col-span-1 size-4',
    variants: {
        side: {
            default: '',
            left: 'col-start-1',
            right: 'col-start-3'
        }
    }
});
var setPillContext = function (props) {
    var store = writable(props);
    setContext(PILL_CONTEXT, store);
    return store;
};
var getPillContext = function () {
    return getContext(PILL_CONTEXT);
};
export { Pill, PillText, PillText as Text, PillIcon, PillIcon as Icon, getPillContext, setPillContext, pillVariants, iconVariants };
