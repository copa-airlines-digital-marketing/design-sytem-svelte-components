import type { Snippet } from 'svelte';
import { type PillProps } from './index.js';
type $$Props = PillProps & {
    children?: Snippet;
};
declare const Pill: import("svelte").Component<$$Props, {}, "">;
type Pill = ReturnType<typeof Pill>;
export default Pill;
