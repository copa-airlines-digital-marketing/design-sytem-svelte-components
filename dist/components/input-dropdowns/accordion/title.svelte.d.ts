import type { Snippet } from 'svelte';
import { type HeadingProps } from '../../typography/index.js';
type $$Props = HeadingProps & {
    children?: Snippet;
};
declare const Title: import("svelte").Component<$$Props, {}, "">;
type Title = ReturnType<typeof Title>;
export default Title;
