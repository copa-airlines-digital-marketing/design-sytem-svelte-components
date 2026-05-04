import type { Snippet } from 'svelte';
import { type LinkProps } from './index.js';
type Props = LinkProps & {
    children?: Snippet;
};
declare const Link: import("svelte").Component<Props, {}, "">;
type Link = ReturnType<typeof Link>;
export default Link;
