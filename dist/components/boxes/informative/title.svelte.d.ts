import type { Snippet } from 'svelte';
import { type InformativeBoxTitleVariants } from './index.js';
type Props = InformativeBoxTitleVariants & {
    children?: Snippet;
};
declare const Title: import("svelte").Component<Props, {}, "">;
type Title = ReturnType<typeof Title>;
export default Title;
