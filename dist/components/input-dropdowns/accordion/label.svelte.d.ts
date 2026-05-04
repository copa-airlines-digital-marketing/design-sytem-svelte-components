import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import { type HTMLTextElements, type BodyProps } from '../../typography/index.js';
type $$Props = HTMLAttributes<HTMLElement> & BodyProps & {
    tag?: keyof HTMLTextElements;
    children?: Snippet;
};
declare const Label: import("svelte").Component<$$Props, {}, "">;
type Label = ReturnType<typeof Label>;
export default Label;
