import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import { type OverlineProps } from './index.js';
type Props = OverlineProps & HTMLAttributes<HTMLElement> & {
    children?: Snippet;
};
declare const Overline: import("svelte").Component<Props, {}, "">;
type Overline = ReturnType<typeof Overline>;
export default Overline;
