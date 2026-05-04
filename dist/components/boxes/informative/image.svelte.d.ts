import type { Snippet } from 'svelte';
import { type InformativeBoxImageVariants } from './index.js';
type Props = InformativeBoxImageVariants & {
    children?: Snippet;
};
declare const Image: import("svelte").Component<Props, {}, "">;
type Image = ReturnType<typeof Image>;
export default Image;
