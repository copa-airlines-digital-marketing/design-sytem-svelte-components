import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { ClassValue } from 'clsx';
type $$Props = HTMLAttributes<HTMLSpanElement> & {
    customcn?: (...inputs: ClassValue[]) => string;
    children?: Snippet;
};
declare const Icon: import("svelte").Component<$$Props, {}, "">;
type Icon = ReturnType<typeof Icon>;
export default Icon;
