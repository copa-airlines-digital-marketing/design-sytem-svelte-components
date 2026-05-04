import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import { type CaptionProps } from './index.js';
type Props = CaptionProps & HTMLAttributes<HTMLElement> & {
    children?: Snippet;
};
declare const Caption: import("svelte").Component<Props, {}, "">;
type Caption = ReturnType<typeof Caption>;
export default Caption;
