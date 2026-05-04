import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import { type BodyProps } from './index.js';
type Props = BodyProps & HTMLAttributes<HTMLElement> & {
    children?: Snippet;
};
declare const Body: import("svelte").Component<Props, {}, "">;
type Body = ReturnType<typeof Body>;
export default Body;
