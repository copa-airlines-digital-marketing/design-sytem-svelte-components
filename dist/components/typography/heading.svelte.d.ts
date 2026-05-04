import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import { type HeadingProps } from './index.js';
type Props = HeadingProps & HTMLAttributes<HTMLElement> & {
    children?: Snippet;
};
declare const Heading: import("svelte").Component<Props, {}, "">;
type Heading = ReturnType<typeof Heading>;
export default Heading;
