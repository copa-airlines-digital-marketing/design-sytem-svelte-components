import type { Snippet } from 'svelte';
import { type InformativeBoxDescriptionVariants } from './index.js';
type Props = InformativeBoxDescriptionVariants & {
    children?: Snippet;
};
declare const Description: import("svelte").Component<Props, {}, "">;
type Description = ReturnType<typeof Description>;
export default Description;
