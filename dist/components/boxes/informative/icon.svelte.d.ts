import type { Snippet } from 'svelte';
import { type InformativeBoxIconVariants } from './index.js';
type Props = InformativeBoxIconVariants & {
    children?: Snippet;
};
declare const Icon: import("svelte").Component<Props, {}, "">;
type Icon = ReturnType<typeof Icon>;
export default Icon;
