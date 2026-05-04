import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import { type HTMLTextElements, type CaptionProps } from '../../typography/index.js';
type $$Props = HTMLAttributes<HTMLElement> & CaptionProps & {
    tag?: keyof HTMLTextElements;
    children?: Snippet;
};
declare const Cta: import("svelte").Component<$$Props, {}, "">;
type Cta = ReturnType<typeof Cta>;
export default Cta;
