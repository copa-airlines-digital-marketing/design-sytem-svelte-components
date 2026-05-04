import type { Snippet } from 'svelte';
import type { CaptionProps, HTMLTextElements } from '../typography/index.js';
import type { HTMLAttributes } from 'svelte/elements';
type $$Props = CaptionProps & HTMLAttributes<HTMLDivElement> & {
    tag?: keyof HTMLTextElements;
    children?: Snippet;
};
declare const Text: import("svelte").Component<$$Props, {}, "">;
type Text = ReturnType<typeof Text>;
export default Text;
