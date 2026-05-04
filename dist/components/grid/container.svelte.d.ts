import type { Snippet } from 'svelte';
import { type ContainerProps } from './index.js';
type $$Props = ContainerProps & {
    layout?: boolean;
    children?: Snippet;
};
declare const Container: import("svelte").Component<$$Props, {}, "">;
type Container = ReturnType<typeof Container>;
export default Container;
